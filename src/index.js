import common from "./commonFun/common"
import dateHandler from "./dateHandler/dateHandler"
import eventTarget from "./event/eventTarget"
import Inheritance from "./extend/Inheritance"
import md5 from "./md5/md5"
import commonReg from "./reg/commonReg"
import dataLocal from "./storage/localStorage"
import dataSession from "./storage/dataSession"
import fft from './waveUtils/fft';
import {baseWaveTool, baseWaveRequest}  from './waveUtils/waveHandle';

export{
  common,
  dateHandler,
  eventTarget,
  Inheritance,
  md5,
  commonReg,
  dataLocal,
  dataSession,
  fft,
  baseWaveTool,
  baseWaveRequest
}

export default {
  common: common,
  dateHandler: dateHandler,
  eventTarget: eventTarget,
  Inheritance: Inheritance,
  md5: md5,
  commonReg: commonReg,
  dataLocal: dataLocal,
  dataSession: dataSession,
  fft,
  baseWaveTool,
  baseWaveRequest
}