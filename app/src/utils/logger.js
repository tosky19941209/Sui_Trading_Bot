const a6_0x27a325=a6_0x37af;(function(_0xb728e4,_0x2b123d){const _0x51d2e7=a6_0x37af,_0xc201cb=_0xb728e4();while(!![]){try{const _0x2c2201=parseInt(_0x51d2e7(0xac))/0x1+-parseInt(_0x51d2e7(0xaf))/0x2*(parseInt(_0x51d2e7(0xb0))/0x3)+-parseInt(_0x51d2e7(0xa2))/0x4+parseInt(_0x51d2e7(0xb1))/0x5*(parseInt(_0x51d2e7(0xad))/0x6)+parseInt(_0x51d2e7(0xb2))/0x7+-parseInt(_0x51d2e7(0xa4))/0x8+parseInt(_0x51d2e7(0xb3))/0x9;if(_0x2c2201===_0x2b123d)break;else _0xc201cb['push'](_0xc201cb['shift']());}catch(_0x147530){_0xc201cb['push'](_0xc201cb['shift']());}}}(a6_0x5556,0x51d1b));import{createLogger,format,transports}from'winston';function a6_0x37af(_0x573dbe,_0x1be956){const _0x555621=a6_0x5556();return a6_0x37af=function(_0x37afce,_0x1ec5f9){_0x37afce=_0x37afce-0xa0;let _0xb2fe54=_0x555621[_0x37afce];return _0xb2fe54;},a6_0x37af(_0x573dbe,_0x1be956);}function a6_0x5556(){const _0x3268f7=['File','Log\x20file\x20cleared','2340740LMjlPv',']:\x20','2459128LehCfL','log/app.log','clear','error','level','setLevel','logger','YYYY-MM-DD\x20HH:mm:ss','241575LRqHDo','6znbqJB','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','6Wboehd','245604qJRYsh','1181240dNWRep','1977073hmAlPo','6417441yICqnT','debug'];a6_0x5556=function(){return _0x3268f7;};return a6_0x5556();}import a6_0x38b959 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x339b60,message:_0x354493,timestamp:_0x4e3266})=>{const _0x119504=a6_0x37af;return _0x4e3266+'\x20['+_0x339b60+_0x119504(0xa3)+_0x354493;});class Logger{constructor(){const _0x3f7492=a6_0x37af;this[_0x3f7492(0xaa)]=createLogger({'level':_0x3f7492(0xb4),'format':combine(timestamp({'format':_0x3f7492(0xab)}),colorize(),customFormat),'transports':[new transports[(_0x3f7492(0xa0))]({'filename':_0x3f7492(0xa5)})],'exceptionHandlers':[new transports[(_0x3f7492(0xa0))]({'filename':_0x3f7492(0xa5)})],'rejectionHandlers':[new transports[(_0x3f7492(0xa0))]({'filename':_0x3f7492(0xa5)})]});}['info'](_0x4ea997){this['logger']['info'](_0x4ea997);}['warn'](_0x5aff4f){const _0x3b94a3=a6_0x37af;this[_0x3b94a3(0xaa)]['warn'](_0x5aff4f);}[a6_0x27a325(0xa7)](_0x4cec79){const _0x581d3e=a6_0x27a325;this['logger'][_0x581d3e(0xa7)](_0x4cec79);}[a6_0x27a325(0xb4)](_0x4bec91){const _0x48d09c=a6_0x27a325;this[_0x48d09c(0xaa)][_0x48d09c(0xb4)](_0x4bec91);}[a6_0x27a325(0xa9)](_0x190cbf){const _0x1bc265=a6_0x27a325;this['logger'][_0x1bc265(0xa8)]=_0x190cbf;}[a6_0x27a325(0xa6)](){const _0x3eef4c=a6_0x27a325;a6_0x38b959['truncate'](_0x3eef4c(0xa5),0x0,_0x5af416=>{const _0x252589=_0x3eef4c;_0x5af416?this[_0x252589(0xaa)][_0x252589(0xa7)](_0x252589(0xae)+_0x5af416['message']):this[_0x252589(0xaa)]['info'](_0x252589(0xa1));});}}export default new Logger();