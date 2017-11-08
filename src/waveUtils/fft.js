export default class FFT {

	constructor(x, y, OutPhase) {
		//OutX 输出频点
		this.OutX = x || [];
		// OutY 输出幅值
		this.OutY = y || [];
		// OutPhase 输出相位
		this.OutPhase = OutPhase || {};
	}
	getYExtremumsIndex(sortByY = true) {
		var retArr = [];

		try {
			var v;
			var i = 0;
			if(OutY[0] > OutY[1]) {
				retArr.push(0);
				i++; // the next must not be extremum
			}

			var n = OutY.length;
			for(let i = 0; i < n - 1; i++) {
				v = OutY[i];
				if(v > OutY[i - 1] && v > OutY[i + 1]) {
					retArr.push(i);
					i++; // the next must not be extremum
				}
			}

			if(i < n && OutY[i] > OutY[i - 1])
				retArr.push(i);

			if(sortByY) {
				retArr.sort(sortOnYIndex);
				// retArr.reverse();
			}
		} catch(e) {

		}

		return retArr;
	}

	sortOnYIndex(a, b) {
		var aPrice = OutY[b];
		var bPrice = OutY[a];
		if(aPrice > bPrice)
			return 1;
		else if(aPrice < bPrice)
			return -1;
		else //aPrice == bPrice
			return 0;
	}

	/**
	 * 频谱分析
	 * @param data 波形采用数组
	 * @param freq 采样频率
	 * @param nFirst FFT原始数据的起始点位置
	 * @param nCount FFT原始数据的点数
	 * @param mi 指定分析的线数相对2的幂次方，如： mi = 10，则线数为 2 的 10 次方 1024
	 * @param 正常返回 > 0 的最大幅值，-1 表示失败
	 */
	waveFFT(data, freq) {
		if(!isFinite(data[0])){
			return -1;
		}
		var nPointNumber, times;
        nPointNumber = data.length;
        times = nPointNumber / 512;
        if (times % 1 != 0) {
           nPointNumber = 512 * parseInt(times);
           data = data.slice(-nPointNumber);
        }
		var mi = Math.log(nPointNumber) / Math.LN2;
		if(nPointNumber != Math.pow(2, mi)) {
			return -1;
			//throw new Error("waveFFT: the nCount must be pow of 2");
		}

		var fDF = freq / nPointNumber;

		// 抽取
		var x_arr = [];
		var y_arr = [];
		x_arr.push(0); // 插入空白点
		x_arr = x_arr.concat(data);

		// 计算平均值average，并且令x[i] -= average以消除直流分量
		var i;
		var sum = 0;
		for(i = 1; i < x_arr.length; i++)
			sum += x_arr[i];
		var average = sum / nPointNumber;
		i = 1;
		for(; i < x_arr.length; i++)
			x_arr[i] -= average;

		y_arr.length = (nPointNumber + 1);
		this._o_fft(1, mi, x_arr, y_arr, nPointNumber);

		// 处理计算结果
		var fMaxFZ = 0;
		var lineCount = nPointNumber / 2.56;
		let OutX = this.OutX = [];
		let OutY = this.OutY = [];
		let OutPhase = this.OutPhase = [];
		OutX.length = lineCount;
		OutY.length = lineCount;
		OutPhase.length = lineCount;
		var xi, yi;
		i = 0;
		for(; i < lineCount; i++) {
			xi = x_arr[i + 1];
			yi = y_arr[i + 1];
			// 频率
			OutX[i] = Number((i * fDF).toFixed(2));
			// 幅值
			OutY[i] = Number((Math.sqrt(xi * xi + yi * yi) * 4 / nPointNumber).toFixed(2));
			// 相位 (弧度)
			OutPhase[i] = -(Math.atan2(yi, xi) - Math.PI / 2);
			// 最大幅值
			fMaxFZ = Math.max(OutY[i], fMaxFZ);
		}

		if(fMaxFZ < Number.NEGATIVE_INFINITY || fMaxFZ > Number.POSITIVE_INFINITY)
			return -1;

		return fMaxFZ;
	}

	/**
	 * 频谱分析
	 * @param data 波形采用数组
	 * @param freq 采样频率
	 * @param nFirst FFT原始数据的起始点位置
	 * @param nCount FFT原始数据的点数
	 * @param mi 指定分析的线数相对2的幂次方，如： mi = 10，则线数为 2 的 10 次方 1024
	 * @param 正常返回 > 0 的最大幅值，-1 表示失败
	 */
	waveFFTWithInterp(data, freq, nFirst, nCount, mi) {
		var nPointNumber = 1;
		for(let i = 0; i < mi; i++)
			nPointNumber *= 2;

		var pBegin = nFirst;
		var nWaveCount = data.length;
		if(nFirst >= nWaveCount)
			return -1;
		if((nFirst + nCount) > nWaveCount)
			nCount = nWaveCount - nFirst;

		var all_count = nCount;
		var fDF = freq / all_count;

		// 抽取
		var x_arr = [];
		var y_arr = [];
		x_arr.length = (nPointNumber + 1);
		x_arr[0] = 0; // 插入空白点
		var pos, ipos0, ipos1;
		var v0, v1, t, v;
		i = 0
		for(; i < (nPointNumber - 1); i++) {
			// i * nCount 可能很大，超过int的范围
			// 因此用double进行计算
			pos = i;
			pos = (pos * (nCount - 1)) / nPointNumber;
			ipos0 = pos;
			ipos1 = ipos0 + 1;
			v0 = data[pBegin + ipos0];
			v1 = data[pBegin + ipos1];
			// 插值
			t = pos - ipos0;
			v = v0 + (v1 - v0) * t;
			x_arr[i + 1] = v;
		}
		x_arr[i + 1] = data[pBegin + nCount - 1]; // 插入最后一个点

		//			if (x_arr.length != (nPointNumber+1))
		//				return -1;

		// 计算平均值average，并且令x[i] -= average以消除直流分量
		var sum = 0;
		i = 1;
		for(i = 1; i < x_arr.length; i++)
			sum += x_arr[i];
		var average = sum / nPointNumber;
		i = 1;
		for(; i < x_arr.length; i++)
			x_arr[i] -= average;

		y_arr.length = (nPointNumber + 1);
		this._o_fft(1, mi, x_arr, y_arr, nPointNumber);

		// 处理计算结果
		var fMaxFZ = 0;
		var number = nPointNumber / 2;
		let OutX = this.OutX = [];
		let OutY = this.OutY = [];
		let OutPhase = this.OutPhase = {};
		OutX.length = number;
		OutY.length = number;
		OutPhase.length = number;
		var xi, yi;
		i = 0;
		for(; i < number; i++) {
			xi = x_arr[i + 1];
			yi = y_arr[i + 1];
			// 频率
			OutX[i] = Number((i * fDF).toFixed(2));
			// 幅值
			OutY[i] = Number((Math.sqrt(xi * xi + yi * yi) * 4 / nPointNumber).toFixed(2));
			//				OutY[i]=Math.sqrt(xi * xi + yi * yi)*2 / nPointNumber;//修改
			// 相位 (弧度)
			OutPhase[i] = Math.atan2(yi, xi);
			// 最大幅值
			fMaxFZ = Math.max(OutY[i], fMaxFZ);
		}

		if(fMaxFZ < Number.NEGATIVE_INFINITY || fMaxFZ > Number.POSITIVE_INFINITY)
			return -1;

		return fMaxFZ;
	}

	/**
	 * @method  fft
	 * @description  Fast Fourier transform -- this calculates an in-place
	 *               complex-to-complex fft. x_arr and y_arr are the real and
	 *               imaginary number arrays of 2^m points.
	 *               <blockquote><pre>
	 *               Formula: forward
	 *                           N-1
	 *                           ---
	 *                       1   \          - j k 2 pi n / N
	 *               X(n) = ---   >   x(k) e                    = forward transform
	 *                       N   /                                n=0..N-1
	 *                           ---
	 *                           k=0
	 *
	 *               Formula: reverse
	 *                           N-1
	 *                           ---
	 *                           \          j k 2 pi n / N
	 *               X(n) =       >   x(k) e                    = reverse transform
	 *                           /                                n=0..N-1
	 *                           ---
	 *                           k=0
	 *
	 * @usage  <pre>Fourier.fft(dir, m, x_arr, y_arr);</pre>
	 * @param   dir   (Number)  -- 1 gives forward transform, -1 gives reverse transform.
	 * @param   m   (Number)  -- a positive integer.
	 * @param   x_arr   (Array)  -- an array containing x-axis values for real number input.
	 * @param   y_arr   (Array)  -- an array containing y-axis values for imaginary number input.
	 * @param	n		-- 分析线数，即使用 x_arr 的长度，此长度必须与 m 相匹配，否则将会计算错误，如果 n = 0，则自动计算
	 * @return  (Boolean)
	 **/
	_fft(dir, m, x_arr, y_arr, n = 0) {
		let j, k, z;
		var i1, i2, l1, l2, c1, c2;
		var tx, ty, t1, t2, u1, u2;

		// Calculate the number of points
		if(n == 0) {
			n = 1;
			for(i = 0; i < m; i++)
				n *= 2;
		}

		y_arr.length = n;
		for(let i = 0; i < n; i++)
			y_arr[i] = 0;

		// Do the bit reversal
		i2 = n >> 1;
		j = 0;
		for(let i = 0; i < n - 1; i++) {
			if(i < j) {
				tx = x_arr[i];
				ty = y_arr[i];
				x_arr[i] = x_arr[j];
				y_arr[i] = y_arr[j];
				x_arr[j] = tx;
				y_arr[j] = ty;
			}
			k = i2;
			while(k <= j) {
				j -= k;
				k >>= 1;
			}
			j += k;
		}
		//trace("m:"+m+", n:"+n+", j:"+j+", k:"+k);

		// Compute the fft
		c1 = -1.0;
		c2 = 0.0;
		l2 = 1;
		for(let l = 0; l < m; l++) {
			l1 = l2;
			l2 <<= 1;
			u1 = 1.0;
			u2 = 0.0;
			for(let j = 0; j < l1; j++) {
				for(i = j; i < n; i += l2) {
					i1 = i + l1;
					t1 = u1 * x_arr[i1] - u2 * y_arr[i1];
					t2 = u1 * y_arr[i1] + u2 * x_arr[i1];
					x_arr[i1] = x_arr[i] - t1;
					y_arr[i1] = y_arr[i] - t2;
					x_arr[i] += t1;
					y_arr[i] += t2;
				}
				z = u1 * c1 - u2 * c2;
				u2 = u1 * c2 + u2 * c1;
				u1 = z;
			}
			c2 = Math.sqrt((1.0 - c1) / 2.0);
			if(dir == 1)
				c2 = -c2;
			c1 = Math.sqrt((1.0 + c1) / 2.0);
		}

		//trace('c1:'+c1+', c2:'+c2+', z:'+z);

		// Scaling for forward transform
		if(dir == 1) {
			for(let i = 0; i < n; i++) {
				x_arr[i] /= n;
				y_arr[i] /= n;
			}
			//trace('n:'+n+' ..x:['+x+'], y:['+y+']');
		}

		return true;
	}

	fftTest(i_dianshu_mi, x, y, i_dianshu) {
		this._o_fft(1, i_dianshu_mi, x, y, i_dianshu);
	}

	/**
	 * 计算指定 x 点序列的FFT
	 * i_dianshu：波形的长度；
	 * i_dianshu_mi：i_dianshu是2的多少次幂？如果i_dianshu=1024，则i_dianshu_mi=10；
	 *
	 * x[]：时域波形存放区，x[0]=0；x[1]到x[i_dianshu]中存放时域波形；
	 * y[]：从y[0]到y[i_dianshu]初始化为0；
	 *
	 * fft完成之后：x[1]到x[i_dianshu/2]中存放存放频谱的X坐标值；y[1]到y[i_dianshu/2]中存放频谱的Y坐标值；
	 *
	 * 每一点的辐值：sqrt(x[i] * x[i] + y[i] * y[*]) * 4 / i_dianshu;
	 * 每一点的相位：atan2(x[i],y[i]);
	 *
	 * @return 函数返回 y, y[1]到y[i_dianshu/2]中存放频谱的Y坐标值；
	 **/

	_o_fft(dir, i_dianshu_mi, x, y, i_dianshu = 0) {
		var i, j, k, l, m, l1;
		var t1, t2, u1, u2, w1, w2, p2, z;

		// Calculate the number of points
		if(i_dianshu == 0) {
			i_dianshu = 1;
			for(i = 0; i < i_dianshu_mi; i++)
				i_dianshu *= 2;
		}

		y.length = i_dianshu + 1;
		for(i = 0; i <= i_dianshu; i++)
			y[i] = 0;

		j = 1;
		l = 1;
		for(; l <= (i_dianshu - 1); l++) {
			if(l < j) {
				t1 = x[j];
				t2 = y[j];
				x[j] = x[l];
				y[j] = y[l];
				x[l] = t1;
				y[l] = t2;
			}
			k = (i_dianshu) >> 1;
			while(k < j) {
				j -= k;
				k = k >> 1;
			}
			j = j + k;
		}
		m = 1;
		i = 1;
		for(; i <= i_dianshu_mi; i++) {
			u1 = 1;
			u2 = 0;
			k = m;
			m = m << 1;
			p2 = 3.1415926 / k;
			w1 = (Math.cos(p2));
			w2 = (-Math.sin(p2));
			w2 = -w2;
			j = 1;
			for(; j <= k; j++) {
				l = j;
				for(; l <= i_dianshu; l += m) {
					l1 = l + k;
					t1 = x[l1] * u1 - y[l1] * u2;
					t2 = x[l1] * u2 + y[l1] * u1;
					x[l1] = x[l] - t1;
					y[l1] = y[l] - t2;
					x[l] += t1;
					y[l] += t2;
				}
				z = u1 * w1 - u2 * w2;
				u2 = u1 * w2 + u2 * w1;
				u1 = z;
			}
		}
	}

	/**
	 *
	 * @param real real[len] 输入实部的数组
	 * @param image image[len] 输入虚部的数组
	 * @param m len = 1<<m  幂
	 * @return  xout[len] 输出实部的数组
	 *
	 */

	ifft(real, image, m) {
		var k, le, windex, i, j;
		var tempWindex = 0,
			n = 1;

		var xi_x, xi_y, xip_x, xip_y, temp_x, temp_y, u_x, u_y, tm_x, tm_y;
		var arg, w_real, w_imag, wrecur_real, wrecur_imag, wtemp_real;
		n = 1 << m;
		le = n * 0.5;

		var wptr0 = new Array(le - 1),
			wptr1 = new Array(le - 1),
			xout = new Array(n),
			x1 = new Array(n);

		for(let i = 0; i < n; i++) {
			x1[i] = 0;
		}

		for(let i = 0; i < n; i++) {
			xout[i] = real[i];
			x1[i] = image[i];
		}

		arg = 4.0 * Math.atan(1.0) / le;
		wrecur_real = w_real = Math.cos(arg);
		wrecur_imag = w_imag = Math.sin(arg);

		for(let j = 0; j < (le - 1); j++) {
			wptr0[j] = wrecur_real;
			wptr1[j] = wrecur_imag;
			wtemp_real = wrecur_real * w_real - wrecur_imag * w_imag;
			wrecur_imag = wrecur_real * w_imag + wrecur_imag * w_real;
			wrecur_real = wtemp_real;
		}

		le = n;
		windex = 1;
		for(let kk = 0; kk < m; kk++) {
			le = le * 0.5;
			for(let i = 0; i < n; i = i + 2 * le) {
				xi_x = xout[i];
				xi_y = x1[i];
				xip_x = xout[i + le];
				xip_y = x1[i + le];

				temp_x = xi_x + xip_x;
				temp_y = xi_y + xip_y;
				xip_x = xi_x - xip_x;
				xip_y = xi_y - xip_y;

				xout[i + le] = xip_x;
				x1[i + le] = xip_y;
				xout[i] = temp_x;
				x1[i] = temp_y;
			}

			tempWindex = windex - 1;
			for(let j = 1; j < le; j++) {

				u_x = wptr0[tempWindex];
				u_y = wptr1[tempWindex];

				for(let i = j; i < n; i = i + 2 * le) {
					xi_x = xout[i];
					xi_y = x1[i];
					xip_x = xout[i + le];
					xip_y = x1[i + le];

					temp_x = xi_x + xip_x;
					temp_y = xi_y + xip_y;
					tm_x = xi_x - xip_x;
					tm_y = xi_y - xip_y;
					xip_x = tm_x * u_x - tm_y * u_y;
					xip_y = tm_x * u_y + tm_y * u_x;

					xout[i + le] = xip_x;
					x1[i + le] = xip_y;
					xout[i] = temp_x;
					x1[i] = temp_y;

				}
				tempWindex = tempWindex + windex;

			}

			windex = 2 * windex;
		}

		j = 0;
		for(let i = 1; i < (n - 1); i++) {
			k = n / 2;
			while(k <= j) {
				j = j - k;
				k = k * 0.5;
			}
			j = j + k;
			if(i < j) {
				xi_x = xout[i];
				xi_y = x1[i];
				temp_x = xout[j];
				temp_y = x1[j];

				xout[j] = xi_x;
				x1[j] = xi_y;
				xout[i] = temp_x;
				x1[i] = temp_y;
			}
		}

		return xout;
	}

	/**
	 * ifft
	 * @param xin
	 * @param m
	 * @return
	 *
	 */

	ifft2(xin, m) {
		var scale;

		var n = 1;
		var k, l, le, windex;
		var tempWindex = 0;
		var i, j;

		var wptr;
		var xi, xip, temp, u, tm;
		xi = new Array2(1, 2);
		xip = new Array2(1, 2);
		temp = new Array2(1, 2);
		u = new Array2(1, 2);
		tm = new Array2(1, 2);

		var arg, w_real, w_imag, wrecur_real, wrecur_imag, wtemp_real;

		n = 1 << m;
		le = n / 2;

		var x = new Array2(n, 2);
		for(let i = 0; i < n; i++) {
			x.set(i, 0, xin.get(i, 0));
			x.set(i, 1, xin.get(i, 1));
		}

		wptr = new Array2(le - 1, 2);
		arg = 4.0 * Math.atan(1.0) / le;
		wrecur_real = w_real = Math.cos(arg);
		wrecur_imag = w_imag = Math.sin(arg);

		for(let j = 0; j < (le - 1); j++) {
			wptr.set(j, 0, wrecur_real);
			wptr.set(j, 1, wrecur_imag);
			wtemp_real = wrecur_real * w_real - wrecur_imag * w_imag;
			wrecur_imag = wrecur_real * w_imag + wrecur_imag * w_real;
			wrecur_real = wtemp_real;
		}

		le = n;
		windex = 1;
		for(let kk = 0; kk < m; kk++) {
			le = le * 0.5;
			for(let i = 0; i < n; i = i + 2 * le) {
				xi.set(0, 0, x.get(i, 0));
				xi.set(0, 1, x.get(i, 1));
				xip.set(0, 0, x.get(i + le, 0));
				xip.set(0, 1, x.get(i + le, 1));

				temp.set(0, 0, xi.get(0, 0) + xip.get(0, 0));
				temp.set(0, 1, xi.get(0, 1) + xip.get(0, 1));
				xip.set(0, 0, xi.get(0, 0) - xip.get(0, 0));
				xip.set(0, 1, xi.get(0, 1) - xip.get(0, 1));

				x.set(i + le, 0, xip.get(0, 0));
				x.set(i + le, 1, xip.get(0, 1));
				x.set(i, 0, temp.get(0, 0));
				x.set(i, 1, temp.get(0, 1));
			}

			tempWindex = windex - 1;
			for(let j = 1; j < le; j++) {
				u.set(0, 0, wptr.get(tempWindex, 0));
				u.set(0, 1, wptr.get(tempWindex, 1));

				for(let i = j; i < n; i = i + 2 * le) {
					xi.set(0, 0, x.get(i, 0));
					xi.set(0, 1, x.get(i, 1));
					xip.set(0, 0, x.get(i + le, 0));
					xip.set(0, 1, x.get(i + le, 1));

					temp.set(0, 0, xi.get(0, 0) + xip.get(0, 0));
					temp.set(0, 1, xi.get(0, 1) + xip.get(0, 1));
					tm.set(0, 0, xi.get(0, 0) - xip.get(0, 0));
					tm.set(0, 1, xi.get(0, 1) - xip.get(0, 1));
					xip.set(0, 0, tm.get(0, 0) * u.get(0, 0) - tm.get(0, 1) * u.get(0, 1));
					xip.set(0, 1, tm.get(0, 0) * u.get(0, 1) + tm.get(0, 1) * u.get(0, 0));

					xi.set(i + le, 0, xip.get(0, 0));
					xi.set(i + le, 1, xip.get(0, 1));

					xi.set(i, 0, temp.get(0, 0));
					xi.set(i, 1, temp.get(0, 1));
				}

				tempWindex = tempWindex + windex;

			}

			windex = 2 * windex;
		}

		j = 0;
		for(let i = 1; i < (n - 1); i++) {
			k = n * 0.5;
			while(k <= j) {
				j = j - k;
				k = k * 0.5;
			}
			j = j + k;
			if(i < j) {
				xi.set(0, 0, x.get(i, 0));
				xi.set(0, 1, x.get(i, 1));
				temp.set(0, 0, x.get(j, 0));
				temp.set(0, 1, x.get(j, 1));

				x.set(j, 0, xi.get(0, 0));
				x.set(j, 1, xi.get(0, 1));
				x.set(i, 0, temp.get(0, 0));
				x.set(i, 1, temp.get(0, 1));
			}
		}
		return x;
	}
}
