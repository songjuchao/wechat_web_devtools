"use strict";function init(){var o=function(o,t,i){this.doSimulaterActions("OPEN_NEW_WEBVIEW",{url:t.url,isMap:!0},function(t){i(null!==t?{errMsg:o+":fail "+t}:{errMsg:o+":ok"})})},t=function(o,t,i){var n={};this.chooseLocation=function(t){return t?void(n=t):void i(0===Object.keys(n).length?{errMsg:o+":fail"}:{name:n.poiname,address:n.poiaddress,latitude:n.latlng.lat,longitude:n.latlng.lng,errMsg:o+":ok"})},this.closeLocation=function(){i({errMsg:o+":cancel"})},this.doSimulaterActions("OPEN_NEW_WEBVIEW",{url:t.url,isMap:!0})};_exports={openLocation:o,chooseLocation:t}}var _exports;init(),module.exports=_exports;