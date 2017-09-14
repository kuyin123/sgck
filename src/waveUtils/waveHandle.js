function baseWaveTool() {
}

baseWaveTool.prototype.readUnsignedShort= function(b1,b2){
  var num = ((b1 & 0xff) << 8 | (b2 & 0xff)) ;
  if(num > 32767){
    return num -65536;
  }
  return num;
}

//规定数组前两位是系数
baseWaveTool.prototype.readByteArray = function(oldArray){
	
	var newArray = new Array,size = oldArray.length;
	//解析系数
	var coefficient = this.readUnsignedShort(oldArray[0],oldArray[1]);
	//采样频率
	var sampleFrequency = this.readUnsignedShort(oldArray[2],oldArray[3]);
	
	for(var i=4;i<size;i=i+2){
		 
	   newArray.push(this.readUnsignedShort(oldArray[i],oldArray[i+1])/coefficient);
	}
	
	return {waveData:newArray,sampleFrequency:sampleFrequency};
	
}

function baseWaveRequest(reqInterface) {
  this.url = $service_config.url + reqInterface;
  //this.success = success;
  //this.error = error;
}

baseWaveRequest.prototype.readCode = function (w) {
  return (w[0] & 0xff) << 24 | (w[1] & 0xff) << 16 | (w[2] & 0xff) << 8 | (w[3] & 0xff);
};

baseWaveRequest.prototype.readLong = function (w) {
  var c1 = w[0] & 255, c2 = w[1] & 255;
  if (c1 === 255) {
    if (c2 === 248) return Number.NaN;
    if (c2 === 240) return Number.NEGATIVE_INFINITY;
  } else if (c1 === 127 && c2 === 240) return Number.POSITIVE_INFINITY;
  var c3 = w[2] & 255, c4 = w[3] & 255, c5 = w[4] & 255, c6 = w[5] & 255, c7 = w[6] & 255, c8 = w[7] & 255;
  if (!c1 && !c2 && !c3 && !c4) return 0;
  for (var d = (c1 << 4 & 2047 | c2 >> 4) - 1023, c2 = ((c2 & 15) << 16 | c3 << 8 | c4).toString(2),
         c3 = c2.length; c3 < 20; c3++) c2 = "0" + c2;
  c6 = ((c5 & 127) << 24 | c6 << 16 | c7 << 8 | c8).toString(2);
  for (c3 = c6.length; c3 < 31; c3++) c6 = "0" + c6;
  c5 = parseInt(c2 + (c5 >> 7 ? "1" : "0") + c6, 2);
  if (c5 == 0 && d == -1023) return 0;
  return c5;
};

baseWaveRequest.prototype.send = function (data, success, error) {
  var xmlhttp;
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.open("POST", this.url, true);
  xmlhttp.responseType = 'arraybuffer';
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//这行代码很关键，用来把字符串类型的参数序列化成Form Data
  xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  var params = 'isWaveRequest=true';
  if (data) {
    for (var key in data) {
      params = params + '&' + key + '=' + data[key];
    }
  }

  xmlhttp.send(params);
  var me = this;


  xmlhttp.onload = function (e) {

    if (this.status == 200) {
      var int8Array = new Int8Array(this.response);
      if (success) {
        //解析code
        let code = me.readCode(int8Array);
        if (code != 200) {
          success({code: code});
          return false;
        }

        let time = new Date(me.readLong(int8Array.subarray(4, 12)));
        let result = {code: code, time: time, data: int8Array.subarray(12, int8Array.byteLength)};
        success(result);

      }
    } else {
      if (error) {
        error(this.response);
      } else {
        alert('获取数据失败!');
      }
    }

  };
};

export {
  baseWaveTool,
  baseWaveRequest
}
