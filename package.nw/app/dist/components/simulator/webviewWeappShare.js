'use strict';var _exports;function init(){const a=require('../../lib/react.js'),b=require('../../cssStr/cssStr.js');require('../../stores/webviewStores.js'),require('../../actions/leftviewActions.js'),require('../../stores/leftviewStores.js');const c=a.createClass({displayName:'WebviewShare',componentDidMount:function(){},componentWillUnmount:function(){},handleCancel:function(){this.props.share.callback({errMsg:'shareAppMessage:cancel'}),this.props.hideShare()},handleConfirm:function(){this.props.share.callback({errMsg:'shareAppMessage:ok'}),this.props.hideShare()},render:function(){let d=this.props.share;return a.createElement('div',{className:'simulator-bd-share',style:d.show?{}:b.displayNone},a.createElement('div',{className:'simulator-bd-share-mask'}),a.createElement('div',{className:'simulator-bd-share-dialog weapp'},a.createElement('div',{className:'simulator-bd-share-dialog-hd'},a.createElement('strong',{className:'simulator-bd-share-dialog-title'},d.title)),a.createElement('div',{className:'simulator-bd-share-dialog-bd'},a.createElement('p',{className:'simulator-bd-share-dialog-desc'},d.desc),a.createElement('div',{className:'simulator-bd-share-dialog-cover'},a.createElement('img',{src:d.dataURI,style:{objectPosition:'0% 0%'}}))),a.createElement('div',{className:'simulator-bd-share-dialog-ft'},a.createElement('a',{onClick:this.handleCancel,href:'javascript:;',className:'simulator-bd-share-dialog-button-default'},'\u53D6\u6D88'),a.createElement('a',{onClick:this.handleConfirm,href:'javascript:;',className:'simulator-bd-share-dialog-button-primary'},'\u786E\u5B9A'))))}});_exports=c}init(),module.exports=_exports;