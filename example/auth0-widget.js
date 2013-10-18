;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};var fs          = require('fs');
var insertCss   = require('insert-css');

var Auth0Widget = require('./widget');

insertCss(".popup .overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 9999;\n  font-weight: 200;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  background: #000;\n  background: rgba(0,0,0,0.8);\n  background: -webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.8) 100%);\n  background: -moz-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.8) 100%);\n  background: -ms-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.8) 100%);\n  background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.8) 100%);\n  opacity: 0;\n  -webkit-transition: 400ms opacity ease;\n  -moz-transition: 400ms opacity ease;\n  transition: 400ms opacity ease;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.popup .overlay.active {\n  opacity: 1;\n}\n\n.popup .overlay .panel {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  position: absolute;\n  left: 50%;\n  display: none;\n}\n\n.popup .overlay .panel.active {\n  display: block;\n  -webkit-animation-duration: 400ms;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-name: showPanel;\n}\n\n.popup .overlay .panel {\n  -webkit-animation-duration: 400ms;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-name: hidePanel;\n  width: 280px;\n  margin: 0 0 0 -140px;\n}\n\n.popup .overlay .email {\n  margin-bottom: 14px;\n}\n\n.popup .overlay .password, .popup .overlay .repeatPassword {\n  margin-bottom: 14px;\n}\n\n.popup .overlay .email-readonly {\n  text-align: center;\n  display: inherit;\n  color: #41444a;\n  font-weight: bold;\n  margin-bottom: 25px;\n}\n\n.panel .signup .header, .panel .reset .header {\n  margin-bottom: 15px; \n  font-size: 14px; \n  color: #41444a;\n}\n\n.panel .signup .footer {\n  margin-bottom: 15px; \n  font-size: 12px; \n  color: #41444a; \n  text-align: left; \n  margin-top: 10px;\n}\n\n@-moz-keyframes showPanel {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.95) translate3d(0, 100%, 0);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1) translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes showPanel {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.95) translate3d(0, 100%, 0);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1) translate3d(0, 0, 0);\n  }\n}\n@-o-keyframes showPanel {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.95) translate3d(0, 100%, 0);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1) translate3d(0, 0, 0);\n  }\n}\n@-ms-keyframes showPanel {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.95) translate3d(0, 100%, 0);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1) translate3d(0, 0, 0);\n  }\n}\n@keyframes showPanel {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.95) translate3d(0, 100%, 0);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1) translate3d(0, 0, 0);\n  }\n}\n@-moz-keyframes hidePanel {\n  0% {\n    -webkit-transform: scale(1) translate3d(0, 0, 0);\n  }\n\n  100% {\n    -webkit-transform: scale(0.98) translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes hidePanel {\n  0% {\n    -webkit-transform: scale(1) translate3d(0, 0, 0);\n  }\n\n  100% {\n    -webkit-transform: scale(0.98) translate3d(0, 0, 0);\n  }\n}\n@-o-keyframes hidePanel {\n  0% {\n    -webkit-transform: scale(1) translate3d(0, 0, 0);\n  }\n\n  100% {\n    -webkit-transform: scale(0.98) translate3d(0, 0, 0);\n  }\n}\n@-ms-keyframes hidePanel {\n  0% {\n    -webkit-transform: scale(1) translate3d(0, 0, 0);\n  }\n\n  100% {\n    -webkit-transform: scale(0.98) translate3d(0, 0, 0);\n  }\n}\n@keyframes hidePanel {\n  0% {\n    -webkit-transform: scale(1) translate3d(0, 0, 0);\n  }\n\n  100% {\n    -webkit-transform: scale(0.98) translate3d(0, 0, 0);\n  }\n}\n\n.popup .panel {\n  background: #fafafa;\n  background-image: -webkit-linear-gradient(#fff, #fafafa);\n  background-image: -moz-linear-gradient(#fff, #fafafa);\n  background-image: -ms-linear-gradient(#fff, #fafafa);\n  background-image: -o-linear-gradient(#fff, #fafafa);\n  background-image: linear-gradient(#fff, #fafafa);\n  z-index: 10;\n  -moz-box-shadow: 0 0 1px 1px rgba(0,0,0,0.2), 0 10px 27px rgba(0,0,0,0.7);\n  -webkit-box-shadow: 0 0 1px 1px rgba(0,0,0,0.2), 0 10px 27px rgba(0,0,0,0.7);\n  box-shadow: 0 0 1px 1px rgba(0,0,0,0.2), 0 10px 27px rgba(0,0,0,0.7);\n  -moz-border-radius: 6px;\n  -webkit-border-radius: 6px;\n  border-radius: 6px;\n  -webkit-touch-callout: none;\n}\n\n.popup .panel:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  -moz-box-shadow: inset 0 -1px 2px rgba(82,93,112,0.4);\n  -webkit-box-shadow: inset 0 -1px 2px rgba(82,93,112,0.4);\n  box-shadow: inset 0 -1px 2px rgba(82,93,112,0.4);\n}\n\n.popup .panel header {\ndisplay: block;\nposition: relative;\nmin-height: 65px;\noverflow: hidden;\n-moz-border-radius: 6px 6px 0 0;\n-webkit-border-radius: 6px 6px 0 0;\nborder-radius: 6px 6px 0 0;\nbackground: #f1f4f6;\nbackground-image: -webkit-linear-gradient(#f1f4f6, #e9edf0);\nbackground-image: -moz-linear-gradient(#f1f4f6, #e9edf0);\nbackground-image: -ms-linear-gradient(#f1f4f6, #e9edf0);\nbackground-image: -o-linear-gradient(#f1f4f6, #e9edf0);\nbackground-image: linear-gradient(#f1f4f6, #e9edf0);\nborder-bottom: 1px solid rgba(40,69,85,0.11);\n}\n\n.popup .panel header:before {\n  content: '';\n  position: absolute;\n  height: 5px;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  background-image: -webkit-linear-gradient(rgba(40,69,85,0), rgba(40,69,85,0.1));\n  background-image: -moz-linear-gradient(rgba(40,69,85,0), rgba(40,69,85,0.1));\n  background-image: -ms-linear-gradient(rgba(40,69,85,0), rgba(40,69,85,0.1));\n  background-image: -o-linear-gradient(rgba(40,69,85,0), rgba(40,69,85,0.1));\n  background-image: linear-gradient(rgba(40,69,85,0), rgba(40,69,85,0.1));\n}\n\n.popup .panel header:after {\ncontent: '';\nposition: absolute;\nheight: 4px;\nbottom: 0;\nleft: 0;\nright: 0;\nbackground-image: -webkit-linear-gradient(left, #e9edf0, rgba(241,244,246,0), #e9edf0);\nbackground-image: -moz-linear-gradient(left, #e9edf0, rgba(241,244,246,0), #e9edf0);\nbackground-image: -ms-linear-gradient(left, #e9edf0, rgba(241,244,246,0), #e9edf0);\nbackground-image: -o-linear-gradient(left, #e9edf0, rgba(241,244,246,0), #e9edf0);\nbackground-image: linear-gradient(left, #e9edf0, rgba(241,244,246,0), #e9edf0);\n}\n\n.popup .panel header h1 {\n  padding: 21px 20px;\n  margin: 0;\n  font-size: 18px;\n  color: #41444a;\n  font-weight: bold;\n  border-bottom: 1px solid #DDE3E6;\n}\n\n.popup .panel header a {\n  display: block;\n  overflow: hidden;\n  text-indent: 200%;\n  position: absolute;\n  width: 12px;\n  opacity: 0.4;\n  padding: 5px;\n  z-index: 5;\n}\n\n.popup .panel header a:hover {\n  opacity: 0.66;\n}\n\n.popup .panel header a:active {\n  opacity: 1;\n}\n\n.popup .panel header a.close {\n  height: 12px;\n  background: url(\"img/close.png\") 50% 50% no-repeat;\n  background-size: 12px 12px;\n  right: 19px;\n  top: 21px;\n  cursor: pointer;\n}\n\n.popup .panel header a.close:hover {\n  opacity: 0.66;\n}\n\n.popup .panel header img {\n  height: 32px;\n  margin: 16px 10px 10px 20px;\n  position: relative;\n  float: left;\n}\n\n.action .spinner {\n  width: 100%;\n  background-color: #6A777F;\n  background-image: url('img/spinner.gif');\n  background-repeat: no-repeat;\n  background-position: center;\n  margin: 0;\n  height: 44px;\n  border: 1px solid #777; \n  border-color: rgba(0,0,0,0.2); \n  border-bottom-color: #333; \n  border-bottom-color: rgba(0,0,0,0.4);  \n  -moz-box-shadow: inset 0 0.08em 0 rgba(255,255,255,0.4), inset 0 0 0.1em rgba(255,255,255,0.9); \n  -webkit-box-shadow: inset 0 0.08em 0 rgba(255,255,255,0.4), inset 0 0 0.1em rgba(255,255,255,0.9); \n  box-shadow: inset 0 0.08em 0 rgba(255,255,255,0.4), inset 0 0 0.1em rgba(255,255,255,0.9);         \n  -moz-user-select: none;  \n  user-select: none;  \n  -moz-border-radius: .3em; \n  -webkit-border-radius: .3em; \n  border-radius: .3em;\n}\n\n.popup .panel footer {\n  display: block;\n  position: relative;\n  -moz-border-radius: 0 0 5px 5px;\n  -webkit-border-radius: 0 0 5px 5px;\n  border-radius: 0 0 5px 5px;\n  height: 25px;\n  line-height: 25px;\n  vertical-align: middle;\n  margin: 0 15px;\n  border-top: 1px solid #DDE3E6;\n  z-index: 5;\n}\n\n.popup .panel footer span {\n  font-size: 10px;\n  color: #666;\n}\n\n.popup .panel footer a {\n  font-size: 9px;\n  color: #333;\n  font-weight: bold;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.list, .iconlist {\n  margin: 25px 0;\n  position: relative;\n  z-index: 5;\n}\n\n.list:before, .list:after,\n.iconlist:before, .iconlist:after {\n  display: table;\n  content: \"\";\n}\n\n.list:after, .iconlist:after {\n  clear: both;\n}\n\n.list span {\n  display: block;\n  margin: 10px 0;\n  cursor: pointer;\n}\n\n.iconlist {\n  text-align: center;\n}\n\n.iconlist span {\n  margin: 0 2px;\n}\n\n.forgot-pass {\n  font-size: 12px;\n  color: rgb(102, 102, 102);\n  font-weight: normal;\n}\n\n.create-account {\n  display: none ;\n  margin-top: 20px;\n  text-align: center;\n}\n\n.create-account a {\n  font-size: 12px;\n  color: rgb(109, 109, 109);\n  text-decoration: none;\n}\n\n.create-account a:hover {\n  text-decoration: underline;\n}\n\n.loggedin span.centered.all {\n  color: #008CDD;\n  cursor: pointer;\n}\n\n.loggedin span.centered {\n  text-align: center;\n  padding: 5px 0;\n  margin: 15px 0 5px;\n  font-size: 13px;\n  display: block;\n}\n\n.loggedin span.centered.all:hover {\n  text-decoration: underline; \n}\n\n.signup .options a.cancel, .reset .options a.cancel {\n  color: #008CDD;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.signup .options a.cancel:hover, .reset .options a.cancel:hover {\n  text-decoration: underline; \n}\n\n.signup .options, .reset .options {\n  text-align: center;\n  padding: 5px 0;\n  margin: 15px 0 5px;\n  font-size: 13px;\n  display: block;\n}\n\nform {\n  margin: 30px;\n  margin-bottom: 22px;\n  position: relative;\n  z-index: 5;\n}\n\nform label {\n  display: block;\n  color: #7F8899;\n  font-size: 13px;\n  font-weight: bold;\n  margin: 0 0 7px 0;\n  text-shadow: 0 1px 0 white;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\nform input {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n  font-size: 18px;\n  padding: 10px 12px;\n  border: 1px solid #B4BECD;\n  border-top-color: #B0BACA;\n  border-bottom-color: #D3D9E2;\n  -moz-box-shadow: inset 0 1px 2px rgba(130,137,150,0.23), 0 1px 0 rgba(255,255,255,0.85);\n  -webkit-box-shadow: inset 0 1px 2px rgba(130, 137, 150, 0.23), 0 1px 0 rgba(255, 255, 255, 0.85);\n  box-shadow: inset 0 1px 2px rgba(130, 137, 150, 0.23), 0 1px 0 rgba(255, 255, 255, 0.85);\n  -moz-border-radius: 4px;\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n  color: black;\n  margin: 0;\n  font-family: 'Helvetica Neue', Helvetica, Arial Geneva, sans-serif;\n}\n\n.placeholder {\n  color: #ccc;\n}\n\nform input:focus {\n  border-color: #5695DB #70A7E4 #89B8EC #70A7E4;\n  outline: none;\n  -moz-box-shadow: inset 0 1px 2px rgba(70,123,181,0.35), 0 0 4px #5695db;\n  -webkit-box-shadow: inset 0 1px 2px rgba(70, 123, 181, 0.35), 0 0 4px #5695DB;\n  box-shadow: inset 0 1px 2px rgba(70, 123, 181, 0.35), 0 0 4px #5695DB;\n}\n\nform .invalid input {\n  outline: none;\n  border-color: #FF7076;\n  border-top-color: #FF5C61;\n  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.2), 0 0 4px 0 rgba(255,0,0,0.5);\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(255, 0, 0, 0.5);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(255, 0, 0, 0.5);\n}\n\nheader .error {\n  padding: 9px 0px;\n  margin: 10px auto;\n  width: 70%;\n  font-size: 14px;\n  line-height: 13px;\n  color: rgb(185, 83, 83);\n  text-align: center;\n}\n\nheader .success {\n  padding: 9px 0px;\n  margin: 10px auto;\n  width: 70%;\n  font-size: 14px;\n  line-height: 13px;\n  color: rgb(15, 173, 41);\n  text-align: center;\n}\n\nform .note {\n  display: block;\n  color: #7F8899;\n  font-size: 13px;\n  font-weight: bold;\n  margin: 0 0 7px 0;\n  text-shadow: 0 1px 0 white;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\nform .note a {\n  color: #008CDD;\n  text-decoration: none;\n}\n\nform .invalid .error {\n  visibility: visible;\n}\n\nform button {\n  display: block;\n  margin: 20px 0 0 0;\n  cursor: pointer;\n  width: 100%;\n}\n\n.action {\n  text-align: right;\n  margin: 0 30px 30px 30px;\n  position: relative;\n  z-index: 5;\n}\n\nform .action {\n  margin: 0;\n}\n\n.action button {\n  width: auto;\n}\n\n.separator {\n  position: relative;\n  text-align: center;\n  margin: 0 0 25px 0;\n}\n\n.separator:before {\n  content: \"\";  \n  display: block;  \n  border-top: 1px solid #7F8899;\n  width: 200px;\n  left: 50%;\n  margin-left: -100px;\n  height: 1px;  \n  position: absolute;  \n  top: 50%;  \n  z-index: 1;\n}\n\n.separator span {\n  background: #fafafa;  \n  padding: 0 10px;  \n  position: relative;  \n  z-index: 5;\n  color: #7F8899;\n  font-size: 13px;\n  font-weight: bold;\n  text-shadow: 0 1px 0 white;\n}\n\n\nspan.back {\n  display: block;\n  color: #008CDD;\n  text-align: center;\n  padding: 5px 0;\n  margin: 15px 0 5px;\n  font-size: 13px;\n  cursor: pointer;\n  position: relative;\n  z-index: 5;\n  outline: 0;\n}\n\nspan.back:hover {\n  text-decoration: underline; \n}\n\n.signin .panel.strategies .list .email {\n  display: block;\n  color: #7F8899;\n  font-size: 13px;\n  font-weight: bold;\n  margin: 0 0 7px 0;\n  text-shadow: 0 1px 0 white;\n  text-align: center;\n}\n\n.zocial.office365:before {content: \"W\";}\n.zocial.office365 {background-color: #00ACED; color: #fff;}\n.zocial.waad:before {content: \"z\";}\n.zocial.waad {background-color: #00ADEF; color: #fff;}\n.zocial.thirtysevensignals:before {content: \"b\";}\n.zocial.thirtysevensignals {background-color: #6AC071; color: #fff;}\n.zocial.box:before {content: \"x\";}\n.zocial.box {background-color: #267bb6; color: #fff;}\n.zocial.salesforce:before {content: \"*\";}\n.zocial.salesforce {background-color: #fff; color: #ff0000;}\n.zocial.windows {background-color: #2672EC; color: #fff;}\n.zocial.fitbit:before {content: \"#\";}\n.zocial.fitbit {background-color: #45C2C5; color: #fff;}\n.zocial.yandex:before {content: \"&\";}\n.zocial.yandex {background-color: #FF0000; color: #fff;}\n.zocial.renren:before {content: \"r\";}\n.zocial.renren {background-color: #0056B5; color: #fff;}\n.zocial.baidu:before {content: \"u\";}\n.zocial.baidu {background-color: #2832E1; color: #fff;}\n\n.popup .overlay .onestep {\n  width: 345px;\n  margin: 0 0 0 -172px;\n}\n\n@media (max-width: 280px) {\n  .popup .overlay .panel {\n    width: 240px;\n    margin: 0 0 0 -120px;\n  }\n  .popup .zocial, .popup a.zocial {\n    /*\n    it doesnt look right.\n     font-size: 9px;\n     */\n  }\n  .signin .popup .panel.strategies .list {\n    margin: 12px;\n  }\n  form {\n    margin: 12px;\n  }\n  form input {\n    padding: 5px;\n  }\n  .popup .panel header {\n    margin: 0;\n    padding: 0;\n  }\n  .popup .panel header h1 {\n    padding: 14px 16px;\n    margin: 0;\n    font-size: 22px;\n  }\n  .popup .panel header a.close {\n    right: 14px;\n    top: 16px;\n  }\n}\n\n@media  (min-width: 281px) and (max-width: 340px) {\n  .popup .overlay .panel {\n    margin: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    border-radius: 0;\n  }\n  .popup .zocial, .popup a.zocial {\n    font-size: 18px;\n  }\n  .signin .popup .panel.strategies .list {\n    margin: 15px;\n  }\n  form {\n    margin: 15px 25px;\n  }\n  form input {\n    padding: 6px;\n    font-size: 18px;\n  }\n  .popup .panel header {\n    margin: 0;\n    padding: 0;\n    min-height: 32px;\n  }\n  .popup .panel header h1 {\n    padding: 12px 16px;\n    margin-top: 1px;\n    font-size: 20px;\n  }\n\n  .popup .panel header img {\n    height: 32px;\n    margin: 9px 10px 6px 18px;\n  }\n\n  .zocial.primary {\n    line-height: 34px;\n  }\n\n  .action .spinner {\n    height: 34px;\n  }\n\n  .create-account {\n    margin-top: 20px;\n  }\n\n  .popup .overlay .email {\n    margin-bottom: 5px;\n  }\n\n  .popup .overlay .password, .popup .overlay .repeatPassword {\n    margin-bottom: 5px;\n  }\n}\n\n.loading {\n  display: none;\n  border: 0;\n  overflow: hidden;\n  position: fixed;\n  visibility: visible;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100000;\n  font-weight: 200;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  background-color: rgba(255,255,255,0.5);\n}\n\n.loading .message {\n  position: absolute;\n  top: 50%;\n  margin-top: -110px;\n  width: 100%;\n  text-align: center;\n  font-size: 22px;\n  font-family: Helvetica, arial, freesans, clean, sans-serif;\n  color: #333;\n}\n\n.loading .balls {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -45px;\n  margin-top: -45px;\n  width: 90px;\n  height:90px;\n}\n\n.loading .balls > div {\n  position: absolute;\n  width: 86px;\n  height: 86px;\n  opacity: 0;\n  -moz-transform: rotate(225deg);\n  -moz-animation: orbit 7.15s infinite;\n  -webkit-transform: rotate(225deg);\n  -webkit-animation: orbit 7.15s infinite;\n  -ms-transform: rotate(225deg);\n  -ms-animation: orbit 7.15s infinite;\n  -o-transform: rotate(225deg);\n  -o-animation: orbit 7.15s infinite;\n  transform: rotate(225deg);\n  animation: orbit 7.15s infinite;\n}\n\n.loading .balls > div > div{\n  position: absolute;\n  width: 11px;\n  height: 11px;\n  background: #333;\n  left:0px;\n  top:0px;\n  -moz-border-radius: 11px;\n  -webkit-border-radius: 11px;\n  -ms-border-radius: 11px;\n  -o-border-radius: 11px;\n  border-radius: 11px;\n}\n\n.loading .balls .ball01 {\n  -moz-animation-delay: 1.56s;\n  -webkit-animation-delay: 1.56s;\n  -ms-animation-delay: 1.56s;\n  -o-animation-delay: 1.56s;\n  animation-delay: 1.56s;\n}\n\n.loading .balls .ball02 {\n  -moz-animation-delay: 0.31s;\n  -webkit-animation-delay: 0.31s;\n  -ms-animation-delay: 0.31s;\n  -o-animation-delay: 0.31s;\n  animation-delay: 0.31s;\n}\n\n.loading .balls .ball03 {\n  -moz-animation-delay: 0.62s;\n  -webkit-animation-delay: 0.62s;\n  -ms-animation-delay: 0.62s;\n  -o-animation-delay: 0.62s;\n  animation-delay: 0.62s;\n}\n\n.loading .balls .ball04 {\n-moz-animation-delay: 0.94s;\n-webkit-animation-delay: 0.94s;\n-ms-animation-delay: 0.94s;\n-o-animation-delay: 0.94s;\nanimation-delay: 0.94s;\n}\n\n.loading .balls .ball05 {\n  -moz-animation-delay: 1.25s;\n  -webkit-animation-delay: 1.25s;\n  -ms-animation-delay: 1.25s;\n  -o-animation-delay: 1.25s;\n  animation-delay: 1.25s;\n}\n\n@-moz-keyframes orbit {\n  0% {\n    opacity: 1;\n    z-index:99;\n    -moz-transform: rotate(180deg);\n    -moz-animation-timing-function: ease-out;\n  }\n\n  7% {\n    opacity: 1;\n    -moz-transform: rotate(300deg);\n    -moz-animation-timing-function: linear;\n    -moz-origin:0%;\n  }\n\n  30% {\n    opacity: 1;\n    -moz-transform:rotate(410deg);\n    -moz-animation-timing-function: ease-in-out;\n    -moz-origin:7%;\n  }\n\n  39% {\n    opacity: 1;\n    -moz-transform: rotate(645deg);\n    -moz-animation-timing-function: linear;\n    -moz-origin:30%;\n  }\n\n  70% {\n    opacity: 1;\n    -moz-transform: rotate(770deg);\n    -moz-animation-timing-function: ease-out;\n    -moz-origin:39%;\n  }\n\n  75% {\n    opacity: 1;\n    -moz-transform: rotate(900deg);\n    -moz-animation-timing-function: ease-out;\n    -moz-origin:70%;\n  }\n\n  76% {\n    opacity: 0;\n    -moz-transform:rotate(900deg);\n  }\n\n  100% {\n    opacity: 0;\n    -moz-transform: rotate(900deg);\n  }\n\n}\n\n@-webkit-keyframes orbit {\n  0% {\n    opacity: 1;\n    z-index:99;\n    -webkit-transform: rotate(180deg);\n    -webkit-animation-timing-function: ease-out;\n  }\n\n  7% {\n    opacity: 1;\n    -webkit-transform: rotate(300deg);\n    -webkit-animation-timing-function: linear;\n    -webkit-origin:0%;\n  }\n\n  30% {\n    opacity: 1;\n    -webkit-transform:rotate(410deg);\n    -webkit-animation-timing-function: ease-in-out;\n    -webkit-origin:7%;\n  }\n\n  39% {\n    opacity: 1;\n    -webkit-transform: rotate(645deg);\n    -webkit-animation-timing-function: linear;\n    -webkit-origin:30%;\n  }\n\n  70% {\n    opacity: 1;\n    -webkit-transform: rotate(770deg);\n    -webkit-animation-timing-function: ease-out;\n    -webkit-origin:39%;\n  }\n\n  75% {\n    opacity: 1;\n    -webkit-transform: rotate(900deg);\n    -webkit-animation-timing-function: ease-out;\n    -webkit-origin:70%;\n  }\n\n  76% {\n    opacity: 0;\n    -webkit-transform:rotate(900deg);\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: rotate(900deg);\n  }\n\n}\n\n@-ms-keyframes orbit {\n  0% {\n    opacity: 1;\n    z-index:99;\n    -ms-transform: rotate(180deg);\n    -ms-animation-timing-function: ease-out;\n  }\n\n  7% {\n    opacity: 1;\n    -ms-transform: rotate(300deg);\n    -ms-animation-timing-function: linear;\n    -ms-origin:0%;\n  }\n\n  30% {\n    opacity: 1;\n    -ms-transform:rotate(410deg);\n    -ms-animation-timing-function: ease-in-out;\n    -ms-origin:7%;\n  }\n\n  39% {\n    opacity: 1;\n    -ms-transform: rotate(645deg);\n    -ms-animation-timing-function: linear;\n    -ms-origin:30%;\n  }\n\n  70% {\n    opacity: 1;\n    -ms-transform: rotate(770deg);\n    -ms-animation-timing-function: ease-out;\n    -ms-origin:39%;\n  }\n\n  75% {\n    opacity: 1;\n    -ms-transform: rotate(900deg);\n    -ms-animation-timing-function: ease-out;\n    -ms-origin:70%;\n  }\n\n  76% {\n    opacity: 0;\n    -ms-transform:rotate(900deg);\n  }\n\n  100% {\n    opacity: 0;\n    -ms-transform: rotate(900deg);\n  }\n\n}\n\n@-o-keyframes orbit {\n  0% {\n    opacity: 1;\n    z-index:99;\n    -o-transform: rotate(180deg);\n    -o-animation-timing-function: ease-out;\n  }\n\n  7% {\n    opacity: 1;\n    -o-transform: rotate(300deg);\n    -o-animation-timing-function: linear;\n    -o-origin:0%;\n  }\n\n  30% {\n    opacity: 1;\n    -o-transform:rotate(410deg);\n    -o-animation-timing-function: ease-in-out;\n    -o-origin:7%;\n  }\n\n  39% {\n    opacity: 1;\n    -o-transform: rotate(645deg);\n    -o-animation-timing-function: linear;\n    -o-origin:30%;\n  }\n\n  70% {\n    opacity: 1;\n    -o-transform: rotate(770deg);\n    -o-animation-timing-function: ease-out;\n    -o-origin:39%;\n  }\n\n  75% {\n    opacity: 1;\n    -o-transform: rotate(900deg);\n    -o-animation-timing-function: ease-out;\n    -o-origin:70%;\n  }\n\n  76% {\n    opacity: 0;\n    -o-transform:rotate(900deg);\n  }\n\n  100% {\n    opacity: 0;\n    -o-transform: rotate(900deg);\n  }\n\n}\n\n@keyframes orbit {\n    0% {\n      opacity: 1;\n      z-index:99;\n      transform: rotate(180deg);\n      animation-timing-function: ease-out;\n    }\n\n  7% {\n    opacity: 1;\n    transform: rotate(300deg);\n    animation-timing-function: linear;\n    origin:0%;\n  }\n\n  30% {\n    opacity: 1;\n    transform:rotate(410deg);\n    animation-timing-function: ease-in-out;\n    origin:7%;\n  }\n\n  39% {\n    opacity: 1;\n    transform: rotate(645deg);\n    animation-timing-function: linear;\n    origin:30%;\n  }\n\n  70% {\n    opacity: 1;\n    transform: rotate(770deg);\n    animation-timing-function: ease-out;\n    origin:39%;\n  }\n\n  75% {\n    opacity: 1;\n    transform: rotate(900deg);\n    animation-timing-function: ease-out;\n    origin:70%;\n  }\n\n  76% {\n    opacity: 0;\n    transform:rotate(900deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: rotate(900deg);\n  }\n\n}\n\ninput[disabled]{\n  background-color: rgb(217, 222, 224);\n}");
insertCss("@charset \"UTF-8\";\n\n/*!\n\tZocial Butons\n\thttp://zocial.smcllns.com\n\tby Sam Collins (@smcllns)\n\tLicense: http://opensource.org/licenses/mit-license.php\n\t\n\tYou are free to use and modify, as long as you keep this license comment intact or link back to zocial.smcllns.com on your site.\n*/\n\n\n/* Button structure */\n\n.zocial,\na.zocial {\n\tborder: 1px solid #777;\n\tborder-color: rgba(0,0,0,0.2);\n\tborder-bottom-color: #333;\n\tborder-bottom-color: rgba(0,0,0,0.4);\n\tcolor: #fff;\n\t-moz-box-shadow: inset 0 0.08em 0 rgba(255,255,255,0.4), inset 0 0 0.1em rgba(255,255,255,0.9);\n\t-webkit-box-shadow: inset 0 0.08em 0 rgba(255,255,255,0.4), inset 0 0 0.1em rgba(255,255,255,0.9);\n\tbox-shadow: inset 0 0.08em 0 rgba(255,255,255,0.4), inset 0 0 0.1em rgba(255,255,255,0.9);\n\tcursor: pointer;\n\tdisplay: inline-block;\n\tfont: bold 100%/2.1 \"Lucida Grande\", Tahoma, sans-serif;\n\tpadding: 0 .95em 0 0;\n\ttext-align: center;\n\ttext-decoration: none;\n\ttext-shadow: 0 1px 0 rgba(0,0,0,0.5);\n\twhite-space: nowrap;\n\t\n\t-moz-user-select: none;\n\t-webkit-user-select: none;\n\tuser-select: none;\n\t\n\tposition: relative;\n\t\n\t-moz-border-radius: .3em;\n\t-webkit-border-radius: .3em;\n\tborder-radius: .3em;\n}\n\n.zocial:before {\n\tcontent: \"\";\n\tborder-right: 0.075em solid rgba(0,0,0,0.1);\n\tfloat: left;\n\tfont: 120%/1.65 zocial;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tmargin: 0 0.5em 0 0;\n\tpadding: 0 0.5em;\n\ttext-align: center;\n\ttext-decoration: none;\n\ttext-transform: none;\n\t\n\t-moz-box-shadow: 0.075em 0 0 rgba(255,255,255,0.25);\n\t-webkit-box-shadow: 0.075em 0 0 rgba(255,255,255,0.25);\n\tbox-shadow: 0.075em 0 0 rgba(255,255,255,0.25);\n\t\n\t-moz-font-smoothing: antialiased;\n\t-webkit-font-smoothing: antialiased;\n\tfont-smoothing: antialiased;\n}\n\n.zocial:active {\n\toutline: none; /* outline is visible on :focus */\n}\n\n/* Buttons can be displayed as standalone icons by adding a class of \"icon\" */\n\n.zocial.icon {\n\toverflow: hidden;\n\tmax-width: 2.4em;\n\tpadding-left: 0;\n\tpadding-right: 0;\n\tmax-height: 2.15em;\n\twhite-space: nowrap;\n}\n.zocial.icon:before {\n\tpadding: 0;\n\twidth: 2em;\n\theight: 2em;\n\t\n\tbox-shadow: none;\n\tborder: none;\n}\n\n/* Gradients */\n\n.zocial {\n\tbackground-image: -moz-linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.05) 49%, rgba(0,0,0,.05) 51%, rgba(0,0,0,.1));\n\tbackground-image: -ms-linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.05) 49%, rgba(0,0,0,.05) 51%, rgba(0,0,0,.1));\n\tbackground-image: -o-linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.05) 49%, rgba(0,0,0,.05) 51%, rgba(0,0,0,.1));\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.1)), color-stop(49%, rgba(255,255,255,.05)), color-stop(51%, rgba(0,0,0,.05)), to(rgba(0,0,0,.1)));\n\tbackground-image: -webkit-linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.05) 49%, rgba(0,0,0,.05) 51%, rgba(0,0,0,.1));\n\tbackground-image: linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.05) 49%, rgba(0,0,0,.05) 51%, rgba(0,0,0,.1));\n}\n\n.zocial:hover, .zocial:focus {\n\tbackground-image: -moz-linear-gradient(rgba(255,255,255,.15) 49%, rgba(0,0,0,.1) 51%, rgba(0,0,0,.15));\n\tbackground-image: -ms-linear-gradient(rgba(255,255,255,.15) 49%, rgba(0,0,0,.1) 51%, rgba(0,0,0,.15));\n\tbackground-image: -o-linear-gradient(rgba(255,255,255,.15) 49%, rgba(0,0,0,.1) 51%, rgba(0,0,0,.15));\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.15)), color-stop(49%, rgba(255,255,255,.15)), color-stop(51%, rgba(0,0,0,.1)), to(rgba(0,0,0,.15)));\n\tbackground-image: -webkit-linear-gradient(rgba(255,255,255,.15) 49%, rgba(0,0,0,.1) 51%, rgba(0,0,0,.15));\n\tbackground-image: linear-gradient(rgba(255,255,255,.15) 49%, rgba(0,0,0,.1) 51%, rgba(0,0,0,.15));\n}\n\n.zocial:active {\n\tbackground-image: -moz-linear-gradient(bottom, rgba(255,255,255,.1), rgba(255,255,255,0) 30%, transparent 50%, rgba(0,0,0,.1));\n\tbackground-image: -ms-linear-gradient(bottom, rgba(255,255,255,.1), rgba(255,255,255,0) 30%, transparent 50%, rgba(0,0,0,.1));\n\tbackground-image: -o-linear-gradient(bottom, rgba(255,255,255,.1), rgba(255,255,255,0) 30%, transparent 50%, rgba(0,0,0,.1));\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.1)), color-stop(30%, rgba(255,255,255,0)), color-stop(50%, transparent), to(rgba(0,0,0,.1)));\n\tbackground-image: -webkit-linear-gradient(bottom, rgba(255,255,255,.1), rgba(255,255,255,0) 30%, transparent 50%, rgba(0,0,0,.1));\n\tbackground-image: linear-gradient(bottom, rgba(255,255,255,.1), rgba(255,255,255,0) 30%, transparent 50%, rgba(0,0,0,.1));\n}\n\n/* Adjustments for light background buttons */\n\n.zocial.dropbox,\n.zocial.github,\n.zocial.gmail,\n.zocial.openid,\n.zocial.secondary,\n.zocial.stackoverflow,\n.zocial.salesforce {\n\tborder: 1px solid #aaa;\n\tborder-color: rgba(0,0,0,0.3);\n\tborder-bottom-color: #777;\n\tborder-bottom-color: rgba(0,0,0,0.5);\n\t-moz-box-shadow: inset 0 0.08em 0 rgba(255,255,255,0.7), inset 0 0 0.08em rgba(255,255,255,0.5);\n\t-webkit-box-shadow: inset 0 0.08em 0 rgba(255,255,255,0.7), inset 0 0 0.08em rgba(255,255,255,0.5);\n\tbox-shadow: inset 0 0.08em 0 rgba(255,255,255,0.7), inset 0 0 0.08em rgba(255,255,255,0.5);\n\ttext-shadow: 0 1px 0 rgba(255,255,255,0.8);\n}\n\n/* :hover adjustments for light background buttons */\n\n.zocial.dropbox:focus,\n.zocial.dropbox:hover,\n.zocial.github:focus,\n.zocial.github:hover,\n.zocial.gmail:focus,\n.zocial.gmail:hover,\n.zocial.openid:focus,\n.zocial.openid:hover,\n.zocial.secondary:focus,\n.zocial.secondary:hover,\n.zocial.stackoverflow:focus,\n.zocial.stackoverflow:hover,\n.zocial.twitter:focus \n.zocial.twitter:hover,\n.zocial.salesforce:focus \n.zocial.salesforce:hover {\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.5)), color-stop(49%, rgba(255,255,255,0.2)), color-stop(51%, rgba(0,0,0,0.05)), to(rgba(0,0,0,0.15)));\n\tbackground-image: -moz-linear-gradient(top, rgba(255,255,255,0.5), rgba(255,255,255,0.2) 49%, rgba(0,0,0,0.05) 51%, rgba(0,0,0,0.15));\n\tbackground-image: -webkit-linear-gradient(top, rgba(255,255,255,0.5), rgba(255,255,255,0.2) 49%, rgba(0,0,0,0.05) 51%, rgba(0,0,0,0.15));\n\tbackground-image: -o-linear-gradient(top, rgba(255,255,255,0.5), rgba(255,255,255,0.2) 49%, rgba(0,0,0,0.05) 51%, rgba(0,0,0,0.15));\n\tbackground-image: -ms-linear-gradient(top, rgba(255,255,255,0.5), rgba(255,255,255,0.2) 49%, rgba(0,0,0,0.05) 51%, rgba(0,0,0,0.15));\n\tbackground-image: linear-gradient(top, rgba(255,255,255,0.5), rgba(255,255,255,0.2) 49%, rgba(0,0,0,0.05) 51%, rgba(0,0,0,0.15));\n}\n\n/* :active adjustments for light background buttons */\n\n.zocial.dropbox:active,\n.zocial.github:active,\n.zocial.gmail:active,\n.zocial.openid:active,\n.zocial.secondary:active,\n.zocial.stackoverflow:active,\n.zocial.wikipedia:active,\n.zocial.salesforce:active {\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0)), color-stop(30%, rgba(255,255,255,0)), color-stop(50%, rgba(0,0,0,0)), to(rgba(0,0,0,0.1)));\n\tbackground-image: -moz-linear-gradient(bottom, rgba(255,255,255,0), rgba(255,255,255,0) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.1));\n\tbackground-image: -webkit-linear-gradient(bottom, rgba(255,255,255,0), rgba(255,255,255,0) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.1));\n\tbackground-image: -o-linear-gradient(bottom, rgba(255,255,255,0), rgba(255,255,255,0) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.1));\n\tbackground-image: -ms-linear-gradient(bottom, rgba(255,255,255,0), rgba(255,255,255,0) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.1));\n\tbackground-image: linear-gradient(bottom, rgba(255,255,255,0), rgba(255,255,255,0) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.1));\n}\n\n/* Button icon and color */\n/* Icon characters are stored in unicode private area */\n.zocial.amazon:before {content: \"a\";}\n.zocial.dropbox:before {content: \"d\"; color: #1f75cc;}\n.zocial.facebook:before {content: \"f\";}\n.zocial.github:before {content: \"\\00E8\";}\n.zocial.gmail:before {content: \"m\"; color: #f00;}\n.zocial.google:before {content: \"G\";}\n.zocial.googleplus:before {content: \"+\";}\n.zocial.guest:before {content: \"?\";}\n.zocial.ie:before {content: \"6\";}\n.zocial.linkedin:before {content: \"L\";}\n.zocial.openid:before {content: \"o\"; color: #ff921d;}\n.zocial.paypal:before {content: \"$\";}\n.zocial.stackoverflow:before {content: \"\\00EC\"; color: #ff7a15;}\n.zocial.twitter:before {content: \"T\";}\n.zocial.vk:before {content: \"N\";}\n.zocial.windows:before {content: \"W\";}\n.zocial.yahoo:before {content: \"Y\";}\n.zocial.office365:before {content: \"z\";}\n.zocial.thirtysevensignals:before {content: \"b\";}\n.zocial.salesforce:before {content: \"*\";}\n.zocial.waad:before {content: \"z\";}\n.zocial.box:before {content: \"x\";}\n\n/* Button background and text color */\n\n.zocial.amazon {background-color: #ffad1d; color: #030037; text-shadow: 0 1px 0 rgba(255,255,255,0.5);}\n.zocial.dropbox {background-color: #fff; color: #312c2a;}\n.zocial.facebook {background-color: #4863ae;}\n.zocial.github {background-color: #fbfbfb; color: #050505;}\n.zocial.gmail {background-color: #efefef; color: #222;}\n.zocial.google {background-color: #4e6cf7;}\n.zocial.googleplus {background-color: #dd4b39;}\n.zocial.guest {background-color: #1b4d6d;}\n.zocial.ie {background-color: #00a1d9;}\n.zocial.linkedin {background-color: #0083a8;}\n.zocial.openid {background-color: #f5f5f5; color: #333;}\n.zocial.paypal {background-color: #fff; color: #32689a; text-shadow: 0 1px 0 rgba(255,255,255,0.5);}\n.zocial.twitter {background-color: #46c0fb;}\n.zocial.vk {background-color: #45688E;}\n.zocial.windows {background-color: #0052a4; color: #fff;}\n.zocial.office365 {background-color: #00ACED; color: #fff;}\n.zocial.waad {background-color: #00ADEF; color: #fff;}\n.zocial.thirtysevensignals {background-color: #6AC071; color: #fff;}\n.zocial.box {background-color: #267bb6; color: #fff;}\n.zocial.salesforce {background-color: #fff; color: #ff0000;}\n.zocial.windows {background-color: #2672EC; color: #fff;}\n\n/*\nThe Miscellaneous Buttons\nThese button have no icons and can be general purpose buttons while ensuring consistent button style\nCredit to @guillermovs for suggesting\n*/\n\n.zocial.primary, .zocial.secondary {margin: 0.1em 0; padding: 0 1em;}\n.zocial.primary:before, .zocial.secondary:before {display: none;}\n.zocial.primary {background-color: #333;}\n.zocial.secondary {background-color: #f0f0eb; color: #222; text-shadow: 0 1px 0 rgba(255,255,255,0.8);}\n\n/* Any browser-specific adjustments */\n\nbutton:-moz-focus-inner {\n\tborder: 0;\n\tpadding: 0;\n}\n\n\n/* Reference icons from font-files\n** Base 64-encoded version recommended to resolve cross-site font-loading issues\n*/\n\n@font-face {\n    font-family: 'zocial';\n    src: url('/sdk/font/zocial-regular-webfont.eot');\n}\n\n@font-face {\n    font-family: 'zocial';\n\t\tsrc: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABeQAA0AAAAAIGgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABMAAAABoAAAAcZnuAykdERUYAAAFMAAAAHwAAACAATgAGT1MvMgAAAWwAAABIAAAAVk/l3EBjbWFwAAABtAAAAPYAAAIKnl567Gdhc3AAAAKsAAAACAAAAAj//wADZ2x5ZgAAArQAABKLAAAZsAMpJrBoZWFkAAAVQAAAADAAAAA2/3JSWWhoZWEAABVwAAAAIAAAACQFfQH5aG10eAAAFZAAAABjAAAAgDtOAbdsb2NhAAAV9AAAAEQAAABEWZZf+G1heHAAABY4AAAAHgAAACAAcAC+bmFtZQAAFlgAAADeAAABhlbD9/Jwb3N0AAAXOAAAAFYAAABsUemhhHicY2BgYGQAgpOd+YYg+lwlxxkYDQBA+QYqAAB4nGNgZGBg4ANiCQYQYGJgZGBmUACSLGAeAwAFxABVAHicY2BkEmOcwMDKwMHow5jGwMDgDqW/MkgytDAwMDGwMjPAALMAAwIEpLmmMDgwKH5gYHzw/wGDHuNrBvUGBgZGkBwAj6YLSHictZC9LkRRFIW/O67xzx2GYQwzElHMNBMvoBKNqIQoiVBKJBLxMlSimnJoKGi8gxeQUCh1y7o/jZurtJO1917n7HWy1wEGSNEgcCYIzYKEh7y7rtNyN+1ulTU6dNlgky222WGXfQ444phTzjjngkuurPr8QopfY8Wadk6zZ82hNSfFGn3rTR961Yue9aRHPehefZ/3jFv1dKcbXaujdpRu2qU4WhnyUbe3pj1F1KhQtecyqfnYf8mplFPEl/VGM2TZzWA5Plr8PTGU5GFG4jLKWELHmZhkKpuIav7ESjVjs8lqSzDPQtHuM8bcH77+JX4A6/Y7NwAAAAAAAf//AAJ4nJ1YeYwkV32u33tV79V9H313T/f0MdMzPdNnzeGZ2WN2vYftXXbXF2vvrtc2uw7GDkZADARI2BChiFh2hL1BcsAKicLhkEgJRJEwREFKLMcRoBAnUkKwEsFi5AASOIqTzOT3qmcdkv9I1/T0O6pevXrv+33f9ysJJGn320SCb0tEkjyYIdIOVnYk8ZGx77vwA7gmWVJF6kjLkjQOhoMK4TZ0gTeSYTocTNJJO95rCERD0sNysgnpaDJu3PtyfrntqM5bts/Vrgyv1M4dut+1Z13decuhu2ceev98vA+4nHP3zea6ClmvwvNBa719+OTV9KmThw51W/1DJ58C6xxx/PdBowAySGR3d/cazvd7Uk3axBmPJlvAojCp0ChkjXqrzePEJqJAW+NkNBkO4iRttQebIEpBjGc5MBmPWu2Wa91f+yWnUPYbSWV/NFdeVGJPtSJ6Bl5qRPktu9rrw0KZZy2udSx3dO12eAhruWb/3FCxo6IT55LgrOsCkz0TLjCaBJHv3JFTTeZaO59kFE/2ZudXjgUVScZ5f4ech+9KbekG6bB0CtdyNFmH1niUinlnFd6oQBTiYkZhnIhi1pOGMS7zeNTusXar0WJpBYbxpEeYMh6Oh9EwakSN8dn9xUhV9PH2mcknZge54mJglOxq7syR7XOrNyxupBRklVuqL4fB0qE6G1Qrs/pwYxZmLuUvXcpvLxwOc44DB5eXDhe0YW1p1vYtraLHvUZvezjvzfYXmzpXdJ0ZikkZ9P9zbg3SN62QyUhcfumSBBIgVn4V/hhxIqWjFPdfPNMAF5xnD8W4LTfqrAu4NdkxBmbu73b23bGvMznaJAr1a0ELQIHNwklFky0tOGXEC0e92mBhY2NhUAvuSpdURVUtVVbAszWTqmpDoojRa/As4uEh6f3SRwQiUoTkOogV24C9SpzEyQChGU+PN6aDU8SJirNjm+Cisy51lLBCppdPpzmqR6EDjDfq2bx70G6l43TU5wJ2IT4PZ8pkGCejdgOLqqxpzrJqMO6zSK+EIbWNYtD3IqbIlKg2d6xcGKZtPWeqlk0AgBCgivjIWJJlh3plLwgX3SLRZcWmprO/aXI1oISeAwbKsm9SmDHMJKgSh6twLNQ5VQzVMCuWZigUVDUhjLNS6USvEtt3zMdFl5PCfFI08F5UVqmsU1FSGNcUYufbRby9PgSoFy0TUeIyxz8feYfhLqCGbcwrDJ4koHZBN5ATqMAxHM9wvPn/RnG2aohjXOc0a4Ns8aLwZ4AxXag3BJBJ2bNBGVZIxbN/RhzncojjQlxWtbkVKERlVTzff+2+Qlz4DnKeJ81LEhEcMoUMzpp6Q28dxgLfw0EZhggSnHjU34BGHNLZcsn3PL8MpdIjW2+X1XK8+siR9QPNtwM8PpxxvWLe9XbeC7ftfObLvu7lbv7iV2+6ZQVg2f0sRs9/SG3yNnhMehInMUWwgGy6hsGO7IawrTAE80isFmlvwjqt0jhBBOKyCSQiwDfpeLIlZ1eKtR5UIJu3jXxNkzAbI3sOgWScdQPBTEWvaMAxsSojKBDOCkcgIRcqBqNc4RCWgFGmMEZtolLNlXmzatmWbehczgAMxMLIpHouhyepqqHolseVwHZ1QnzNLylgMgaUyTo0o7CAVxq6Zum03qSWZnOTE5nX7aCzv5WMl0GVGYV3i3AAoETXPDo/R1SFyzKGyqqutmwmpqIhmrluIp69SDFNTU9UqsoWVEemlU0MyUSmslN2cg0OruowmWuyBjPFouHJYtJKl3iaCqTQ4CaRZ2bL2/dQT3NsxPlUF9+FuthHjONypshb4qcHGxAPewIDuL4C8QiPScq4+EahTXExHffNh+cOmrrtu4vrxVqx6i//2gl6fLLSWmza881mvl3ZvO3RQ289WyArgzZR1CM94nqrM43K+hHZs8Y3zWnJUl5x2yVvdPn80YW16XyukePIc/uR4zbpFoj7VhQMsEyDERatbFexPBwMpztty5zVBWER3F8beGllfkbVGNNVy7M0plIvNMyFggVyrHA/b64uLDI2DjSqj7aOToK4WU9U7ZQqeCCx4e6ZUcmlgq3y1W5zwd43We3nY6YUObEPdqryfJh3vNGDZ44vWiaSTgCGjjRDTf26l7hGfgHnHyBzrEsncFUxiLYEVhPegyXAydtYRz4e/u+2ABe6imuOGp4iqziA8P0/bQ2ObRN/6Pn50iie+Ium7blqcX0w9keeVyiO4rG/aFm+g20vjgMsZt3O2B+7XqE0bI+DhayttIZtI98tFkbV53RkTEWPnnM8gh/ze8/pZla3fQFNc+cHX7J9RD8xjOmpBqhf2uszxLlMk4Q+SYfIVxBHx/GZT+Pe4Y5VyTCJyxAKUeH1MswgjXRJfQNa6GYm+Pz4H7Wr1UdTFcZVOuRt0ba8CaIVz+RRM6FtniacEgS6tvobGDFk1WGgIbcfkwFryi9vK7JGKfyTiCRTW/+5d0ZcblCskNdlIPecn6/ZZIXA7+kUx1D+gPGLsiiUyoTwy4ARwt4ja7Kiil3k+JjyfR8jBsiUCx1J6c634OIKWZEyb3ONDHFvc9Lt0mXpo+gAJoKChAuYxEJrQTgyDJYtGE2EJKcCr11ATDIu2sfTba8oZRru0RZqGPJTmwl6ak3VYzhJN8mG0I5kOkqm6NlCZqQ2DQOhJBwVZxkI++CT999DdcI1rjkLD45O/vqKTD5erxbn7Co3EtnLU6Ktadp2z1qbUTSUYODIY3KXMg05UCflop/vDO4IPZTeyGQKVJzFl5DtjNBXlEQhoYcBgSQVEJZopmlQclaWj7XQqVJLYVqhvDIkuBdPNAaWqRCizRgOBMiKHA/SWyAVxdR8FhPXPmfFOrKuTJtUkVGeHFrjynIa5oDFWuK4lmx9HQegCvIWkjH1+w7eWV70sAK4pSA44jH0Qr+dxZiUojkUahyhSKJQZSbxsROH+idOcPPixXu/ebE/Pn7RtQYXX301i8/df9/9IeGoewbqXiQVJamdttMEIZbwtgPjJC0DTdI2Mk+SRuxtb/vE5bd+/P77n758ebB8+cmnrj6Fs7k0eun06ct33nnvmdvPnzxZL5dOwhdg/dx9t+088AU4Wa3hfTDL2H0FduH7OEd0DzeA2MdsG7MdFx4rFWKG9Lpnv9LWlBAmgmYnGPR8Dx0cd/4N5tvbdjzCufNLDyydm4uiuXNYOD8XducPRYZd8JcKpm0oapCvblRD3+XcMgolNx8VooPdec8rlztz3bn5dqXseV+8vHy+E0Wd8/37+xfmwnDuwr1HVleSuaqF9GeUj7aLlQZhnoqGjgE0KsX2ahmlhNiVuWR19caFDo7i+r5brrQ7Ess86su4L21Uk3XpoHSj9ADyXxhnLrMxD42WcBT4JBgYaDPwWZgwT0LXbZhkWYxwUXxqqFm95YsSFigmAOkw6qO4Z15qi2SBsASjNu5/Y4y7vnV2375FxIdpNgeyo+arNFdqT/KhbSWlzdhxYvxGxWYR/z6Ta+RyDXs7VyZOGDCO3hXlFWIT2Q9pY2lps5zO9HoztZ5RcMho1jaovO6641ZuzvJDPzTqX6zncvXcH1lBYNlBAFfEeLmdb7322p897sY6Q3+ryEMOwPH76HhpaerfSRfXZhYzhxRXpbUpb0FkK840r5OrEPWUseKlXiBkrQo8GWfiAMX50ahrWeV+JWdy4RVYsT5b1vTByf6sq4F81KNBGBtG95OT6Fix+HQtnS25BpAt4sb5HD4fVw3dz0UWkuZYKdSajbL6OfjrwU4HuOAB1ev8YjUuEsHhXPgBeAJ5nGOEOIjeBGOkKknROOEzuAtNDLExRkv7p74YKryNcdHZ+dHzzyvPy182/9x6On42ub3xrlmzO9Ot/S187rN/8/PzxxfC7oPz6fxvNS+3vpH/VP6f+V/wLFZ8SScJ/Im0IX0AIzq+nr+kk71jD/r/c6A2XI+D6wfSYxLG6eiNi5A2JxVZjDN8oykRVnI6uqDf69fuDbvcChkz3Up3brQ6Thfm6zrjKDFIRVY+rlabYWJaClFdRQgFM80kbtcqUajho9dRILlHDY37LlMMqlMVbI1zbmACrdsKUyhVwshxfY2F4GsAfr+7ikzf6qK1gAdV7pg5y0Zjyjyvoqm6qjksUOSVfne2ERpc+DjceUVzivOd0WAVs0LREKM15GFJ8Ww1p6BgoaUBR6agmaWGYRPBySA7kRvErtakVZ9ALXARnIrjlbhGhV95QqrQy/B53OO2tCSUG+oMcYfLO+6PWhigfQy7zHxl/0ctud7KojLe+03a6XjSw8yxz9v9Hmpd0k94n1WQtPppgtduQpvkOwd9/0BnqeUmHpxa6xzw/YOdtVOndn54eDA43P/L7P9rR45w2U/45hZPfMqOHEH6R3RtYk3msDJXr8+V3m24rvHK2ptE5fQ7T73cz67M/m9cuABaYlHt9GmNWol2zwU9tqc1O0Z3piC2/wHj+9uZT1MlU3LRp/TTiCdRe5w2Iwui5vgb+Pk+JDvfy75PlV+A+IXy5/9l7sc0/+POX009nin58BNcs560Ld0lPSxJAeZJEwEpgbJNwNIb0Opl1B8P46xnCmVlggi8fkJ93NoD52B6pQ3t+h4is3Y+mUKWh3tI7YFJHM3nbJ8PcFSTA03TaO5ux3bifF0zCHpgH2LL1FHN6VlHhic0Dzedt5p51+YIaDVMqsUR0RVFMwnidHGm7KMoE6Kauea7ZG7lOn0LXEMLZmuuyuA3NQs8+1NdAl/JaapMA33tWtsLuKqAqzkiBTH0PLXQVfzjrBZTpBRfCV2RpRN0GJ4f+78i0OppOA5F7cf0FjMWmZ9GQdfcAvNcJjOzkHNUtJKSsvv67t/jPr2MHKQjNxSkuiQ1G7yRDpPGEvBZoQwIPVZnQloESLNfmDttHL/z5J03FwsFKF196erVl/LPPPLIM4+854lLl5649Ez71VfP3nrrO0T71QOPiJ4Ll0SPtHfPf4N/ha9LMWrXDZh93IiR0AOx4gwXPoqjCmQ+L51QhpuQbTPuFPYy3Ju96iR7N5CZwbag9XQicn54JTnWqRQeeKaoG/HjF868k0LUfW3fB5otdaHzvhSc+MYHNPXWjcMPGNQowy2HzmxsdjoHAN6xvZ0/ppBmBT5dCSydxfdexjShBG++T1ev3Fmr37Tzh0F/de3KpN9IQofqtx5be6uqv+nGhMOJh756w1xnH8CBuflHzf0HLBJsoZaLZ1Uznf4malFJulW6T3pQelT6iPSM9KcCx3Q4tSHCbgrbKnJmEP5E5IBZJrNJpnDNTqsQRKx412hTgdlGXbxCEka4nb1HSqcp+3DcFv6MX5dzLsbCBCASdhlZuwpDIeF4ow1oBD+V2kVisGkwjJKReCeLxtlWuiAyeSCm7aDQxl6IXjFBoTN116GkjplmYtmQr+ia64WK7CIAZXdURn5F6LG4PKoGMfcMS9G0vBlqkPN8dhC4Ud5fbjg5qtZ6tVrPRrp1SgXVJOccVT1Wq8oMqkUaBz6VY9dUQi9H5ZLB4a4Vr2BhpCmq4Wk0tCyTwmJQtFXww1BFSq7nZZxS2dFU5cca5t1xHvOoqOa7hpFRNQsnsV4p5dGSa5GB9oGI5EVk7p7nH+bcdWL2NHQjA9j+Xm//0usYOpot7zMUS7coefgMoOc+BkouHyn5EFWjnITomWM3Vj96sxOLOFWoa9g6ZjksH0qZ5n5w93U4C19DfZ9BpGdOLEEoo73aQhsd4u/YG9HrL7siOHN4cuSWuzEj6jJypiq35F5hptetVuFrp46fbzwrM+XTn1YUeIHtSuNxmv6dJFmSs/sa/AhexDj20EW0MLI2MK5OS3dLb5HeLr1XuiJJswISNtTTEJkwE5T2ng+st5TrjpC1mqJYgezVd9aQZn3pnk/EmKtP31GIOp0OhKXJtHM44G+Yy9a0BwsjvqdgDA6GlRii8tXIdqKoGjwbOXYUlaOdF0M0jaICQ1GCGIsfxpPwZMcJDzpRXM66I9uO8IQwKof4wTbbuRpm7U74nkoYTk+OsPRwOYxK4YdxxBDPvQ0vKUXhbW4QliIc0w7xN7TtEGLbCXAo0VIOr2BTFFlOuPMw9uPNwo/hTylsOKI3eF1cEZaWAyxXAtQ5S7oLXoWLmKdWpa40kNYwsjFSY8xUCaaYdqYxQkcmqPRIanFaIVNtGU04qhhrT7CKHRX4rFr0uemaqlfEfNh2882iZ6gy+VCix6NG8pPeupJozkQlUDK6dDWtfmiyZrQ4a8FFRCfT8c+SnYP1fjBDK2EhXNj3YvnIxpLyO7+rb5+ed/Xmpju79PvWSM7nW61czlpS1Z4k/Tc/tXiPAHicY2BkYGAA4qooY554fpuvDNxMDCBwrpLjDIz+//P/TeYMxtdALgcDWBoAKlkMKXicY2BkYGB8/f8mgx4Lw/+f/xiYMxiAIihAHgCk1AZ5eJxjYoCCVRCK8RMDAxOQZooDsjsYGBnXAGkvIF/k/z+m3P9/mEqBbBC/HIgPAbERUH4RQz8T2/9fIH2MD4BiWkB6ItgcIRYGhklg8xgYeJgY/v8GYcYrYH4DAz8DLwDcABUuAAAAAAAAAAAAAA4AWAC0ASQBYAIYAogCxAOMA9QENASwBSIF5gYEBjgGsgdAB5QHzgiMCQIJJgnWChAKhguIC7oMdgzYeJxjYGRgYFBk2M3AywACTEDMyAAScwDzGQAZIgEvAAB4nHWOMWoDMRBF39prh+AQUoWUgjRpdpE2jfEB9gAp3BsjlgXbAtkGnyRVjpAyx8gBcoQcI9/raVJYMOjN15/5Au54p+B8Cm54MB6JX4zHPHMyLqV/Gk+Y8W08lf4rZ1HeSrkfps48Ej8Zj2nxxqX0D+MJj3wZT6X/0LMmsVUldtCv0zYlwRuRjiMbVmS1sTtuVoJ28B2GO8sRcTTUSnMsVP/3XbQ5FUGOSk4vetWatDu0KXfRNbV3C2e5onkVfNX4INO1vy2Vmtnr/ZIRhnyWMe977Qi1vzr7BwDvOdMAAHicY2BiwA8UgZiRgYmRiYGdgZeBj0GJQYNBi0GfwZDBnMGSwYrBhsGFwZPBnaGQwYshiKGUwZUhmiGWgYVBmIGVIYKBk4GNIZS9NC/TzcDAAADphwhaAAA=) format('woff'),\n         url('zocial-regular-webfont.ttf') format('truetype'),\n         url('zocial-regular-webfont.svg#zocialregular') format('svg');\n    font-weight: normal;\n    font-style: normal;\n}");
insertCss("html, body {\n  padding: 0;\n  margin: 0;\n}\n\n.zocial.auth0:before {\n  content: \"?\";\n}\n\n.zocial.auth0 {\n  background-color: #ff4500;\n  width: auto;\n}\n\n.zocial.block {\n  display: block;\n  margin: 10px 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.zocial.primary, .zocial.secondary {margin: 0; padding: 0 1em; font-size: 14px; line-height: 42px;}\n.zocial.primary:before, .zocial.secondary:before {display: none;}\n.zocial.primary {background-color: rgb(116, 126, 133);}\n.zocial.secondary {background-color: #f0f0eb; color: #222; text-shadow: 0 1px 0 rgba(255,255,255,0.8);}\n\n.zocial { -webkit-font-smoothing: antialiased; }");
insertCss("/*! normalize.css v1.0.1 | MIT License | git.io/normalize */\n\n/* ==========================================================================\n   HTML5 display definitions\n   ========================================================================== */\n\n/*\n * Corrects `block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nsection,\nsummary {\n    display: block;\n}\n\n/*\n * Corrects `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n}\n\n/*\n * Prevents modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/*\n * Addresses styling for `hidden` attribute not present in IE 7/8/9, Firefox 3,\n * and Safari 4.\n * Known issue: no IE 6 support.\n */\n\n[hidden] {\n    display: none;\n}\n\n/* ==========================================================================\n   Base\n   ========================================================================== */\n\n/*\n * 1. Corrects text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevents iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n}\n\n/*\n * Addresses `font-family` inconsistency between `textarea` and other form\n * elements.\n */\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: sans-serif;\n}\n\n/*\n * Addresses margins handled incorrectly in IE 6/7.\n */\n\nbody {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Links\n   ========================================================================== */\n\n/*\n * Addresses `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/*\n * Improves readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/* ==========================================================================\n   Typography\n   ========================================================================== */\n\n/*\n * Addresses font sizes and margins set differently in IE 6/7.\n * Addresses font sizes within `section` and `article` in Firefox 4+, Safari 5,\n * and Chrome.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\nh2 {\n    font-size: 1.5em;\n    margin: 0.83em 0;\n}\n\nh3 {\n    font-size: 1.17em;\n    margin: 1em 0;\n}\n\nh4 {\n    font-size: 1em;\n    margin: 1.33em 0;\n}\n\nh5 {\n    font-size: 0.83em;\n    margin: 1.67em 0;\n}\n\nh6 {\n    font-size: 0.75em;\n    margin: 2.33em 0;\n}\n\n/*\n * Addresses styling not present in IE 7/8/9, Safari 5, and Chrome.\n */\n\nabbr[title] {\n    border-bottom: 1px dotted;\n}\n\n/*\n * Addresses style set to `bolder` in Firefox 3+, Safari 4/5, and Chrome.\n */\n\nb,\nstrong {\n    font-weight: bold;\n}\n\nblockquote {\n    margin: 1em 40px;\n}\n\n/*\n * Addresses styling not present in Safari 5 and Chrome.\n */\n\ndfn {\n    font-style: italic;\n}\n\n/*\n * Addresses styling not present in IE 6/7/8/9.\n */\n\nmark {\n    background: #ff0;\n    color: #000;\n}\n\n/*\n * Addresses margins set differently in IE 6/7.\n */\n\np,\npre {\n    margin: 1em 0;\n}\n\n/*\n * Corrects font family set oddly in IE 6, Safari 4/5, and Chrome.\n */\n\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, serif;\n    _font-family: 'courier new', monospace;\n    font-size: 1em;\n}\n\n/*\n * Improves readability of pre-formatted text in all browsers.\n */\n\npre {\n    white-space: pre;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n}\n\n/*\n * Addresses CSS quotes not supported in IE 6/7.\n */\n\nq {\n    quotes: none;\n}\n\n/*\n * Addresses `quotes` property not supported in Safari 4.\n */\n\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\n/*\n * Addresses inconsistent and variable font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/*\n * Prevents `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsup {\n    top: -0.5em;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\n/* ==========================================================================\n   Lists\n   ========================================================================== */\n\n/*\n * Addresses margins set differently in IE 6/7.\n */\n\ndl,\nmenu,\nol,\nul {\n    margin: 1em 0;\n}\n\ndd {\n    margin: 0 0 0 40px;\n}\n\n/*\n * Addresses paddings set differently in IE 6/7.\n */\n\nmenu,\nol,\nul {\n    padding: 0 0 0 40px;\n}\n\n/*\n * Corrects list images handled incorrectly in IE 7.\n */\n\nnav ul,\nnav ol {\n    list-style: none;\n    list-style-image: none;\n}\n\n/* ==========================================================================\n   Embedded content\n   ========================================================================== */\n\n/*\n * 1. Removes border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improves image quality when scaled in IE 7.\n */\n\nimg {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n}\n\n/*\n * Corrects overflow displayed oddly in IE 9.\n */\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\n/* ==========================================================================\n   Figures\n   ========================================================================== */\n\n/*\n * Addresses margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\n\nfigure {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Forms\n   ========================================================================== */\n\n/*\n * Corrects margin displayed oddly in IE 6/7.\n */\n\nform {\n    margin: 0;\n}\n\n/*\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/*\n * 1. Corrects color not being inherited in IE 6/7/8/9.\n * 2. Corrects text not wrapping in Firefox 3.\n * 3. Corrects alignment displayed oddly in IE 6/7.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    *margin-left: -7px; /* 3 */\n}\n\n/*\n * 1. Corrects font size not being inherited in all browsers.\n * 2. Addresses margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improves appearance and consistency in all browsers.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    *vertical-align: middle; /* 3 */\n}\n\n/*\n * Addresses Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/*\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Corrects inability to style clickable `input` types in iOS.\n * 3. Improves usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Removes inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    *overflow: visible;  /* 4 */\n}\n\n/*\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\ninput[disabled] {\n    cursor: default;\n}\n\n/*\n * 1. Addresses box sizing set to content-box in IE 8/9.\n * 2. Removes excess padding in IE 8/9.\n * 3. Removes excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    *height: 13px; /* 3 */\n    *width: 13px; /* 3 */\n}\n\n/*\n * 1. Addresses `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Addresses `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/*\n * Removes inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/*\n * Removes inner padding and border in Firefox 3+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/*\n * 1. Removes default vertical scrollbar in IE 6/7/8/9.\n * 2. Improves readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/* ==========================================================================\n   Tables\n   ========================================================================== */\n\n/*\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}");

if (global.window) {
  global.window.Auth0Widget = Auth0Widget;
}

module.exports = Auth0Widget;

},{"./widget":25,"fs":15,"insert-css":16}],2:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};var assert_required   = require('./lib/assert_required');
var base64_url_decode = require('./lib/base64_url_decode');
var qs                = require('qs');
var reqwest           = require('reqwest');

var jsonp             = require('jsonp');

var use_jsonp         = require('./lib/use_jsonp');
var LoginError        = require('./lib/LoginError');
var json_parse        = require('./lib/json_parse');

function Auth0 (options) {
  if (!(this instanceof Auth0)) {
    return new Auth0(options);
  }

  assert_required(options, 'clientID');
  assert_required(options, 'callbackURL');
  assert_required(options, 'domain');

  this._clientID = options.clientID;
  this._callbackURL = options.callbackURL;
  this._domain = options.domain;
  if (options.success) {
    this.parseHash(options.success);
  }
  this._failure = options.failure;
}

Auth0.prototype._redirect = function (url) {
  global.window.location = url;
};

Auth0.prototype._renderAndSubmitWSFedForm = function (formHtml) {
  var div = document.createElement('div');
  div.innerHTML = formHtml;
  var form = document.body.appendChild(div).children[0];
  form.submit();
};

Auth0.prototype.parseHash = function (callback) {
  if(!window.location.hash.match(/access_token/)) return;
  var hash = window.location.hash.substr(1);
  var parsed_qs = qs.parse(hash);
  var id_token = parsed_qs.id_token;
  var encoded = id_token.split('.')[1];
  var prof = json_parse(base64_url_decode(encoded));
  callback(prof, id_token, parsed_qs.access_token, parsed_qs.state);
};

Auth0.prototype.signup = function (options, callback) {
  var self = this;

  var query = {
    response_type: 'token',
    client_id:     this._clientID,
    connection:    options.connection,
    redirect_uri:  this._callbackURL,
    scope:         'openid profile'
  };

  if (options.state) {
    query.state = options.state;
  }

  query.email = options.username || options.email;
  query.password = options.password;

  query.tenant = this._domain.split('.')[0];

  function success () {
    if ('auto_login' in options && !options.auto_login) {
      if (callback) callback();
      return;
    }
    self.login(options, callback);
  }

  function fail (status, resp) {
    var error = new LoginError(status, resp);
    if (callback)      return callback(error);
    if (self._failure) return self._failure(error);
  }

  if (use_jsonp()) {
    return jsonp('https://' + this._domain + '/dbconnections/signup?' + qs.stringify(query), {
      param: 'cbx',
      timeout: 15000
    }, function (err, resp) {
      if (err) {
        return fail(0, err);
      }
      return resp.status == 200 ?
              success() :
              fail(resp.status, resp.err);
    });
  }

  reqwest({
    url:     'https://' + this._domain + '/dbconnections/signup',
    method:  'post',
    type:    'html',
    data:    query,
    success: success,
    crossOrigin: true
  }).fail(function (err) {
    fail(err.status, err.responseText);
  });
};

Auth0.prototype.login = function (options, callback) {
  if (options.username || options.email) {
    return this.loginWithDbConnection(options, callback);
  }

  var query = {
    response_type: 'token',
    client_id:     this._clientID,
    connection:    options.connection,
    redirect_uri:  this._callbackURL,
    scope:         'openid profile'
  };

  if (options.state) {
    query.state = options.state;
  }

  this._redirect('https://' + this._domain + '/authorize?' + qs.stringify(query));
};

Auth0.prototype.loginWithDbConnection = function (options, callback) {
  var self = this;

  var query = {
    response_type: 'token',
    client_id:     this._clientID,
    connection:    options.connection,
    redirect_uri:  this._callbackURL,
    scope:         'openid profile'
  };

  if (options.state) {
    query.state = options.state;
  }

  query.username = options.username || options.email;
  query.password = options.password;

  query.tenant = this._domain.split('.')[0];

  function return_error (error) {
    if (callback)      return callback(error);
    if (self._failure) return self._failure(error);
  }

  if (use_jsonp()) {
    return jsonp('https://' + this._domain + '/dbconnections/login?' + qs.stringify(query), {
      param: 'cbx',
      timeout: 15000
    }, function (err, resp) {
      if (err) {
        return return_error(err);
      }
      if('error' in resp) {
        var error = new LoginError(resp.status, resp.error);
        return return_error(error);
      }
      self._renderAndSubmitWSFedForm(resp.form);
    });
  }

  reqwest({
    url:     'https://' + this._domain + '/dbconnections/login',
    method:  'post',
    type:    'html',
    data:    query,
    crossOrigin: true,
    success: function (resp) {
      self._renderAndSubmitWSFedForm(resp);
    }
  }).fail(function (err) {
    var er = err;
    if (!er.status || er.status === 0) { //ie10 trick
      er = {};
      er.status = 401;
      er.responseText = {
        code: 'invalid_user_password'
      };
    }
    var error = new LoginError(er.status, er.responseText);
    return return_error(error);
  });
};

Auth0.prototype.getSSOData = function (callback) {
  return jsonp('https://' + this._domain + '/user/ssodata', {
    param: 'cbx',
    timeout: 15000
  }, function (err, resp) {
    callback(null, err ? {} : resp); // Always return OK, regardless of any errors
  });
};

Auth0.prototype.getConnections = function (callback) {
  return jsonp('https://' + this._domain + '/public/api/' + this._clientID + '/connections', {
    param: 'cbx',
    timeout: 15000
  }, callback);
};

if (global.window) {
  global.window.Auth0 = Auth0;
}

module.exports = Auth0;
},{"./lib/LoginError":3,"./lib/assert_required":4,"./lib/base64_url_decode":5,"./lib/json_parse":6,"./lib/use_jsonp":7,"jsonp":9,"qs":11,"reqwest":12}],3:[function(require,module,exports){
var json_parse = require('./json_parse');

function LoginError(status, details) {
  var obj;

  if (typeof details == 'string') {
    try {
      obj = json_parse(details);
    } catch (er) {
      obj = {message: details};      
    }
  } else {
    obj = details;
  }

  var err = Error.call(this, obj.description || obj.message || obj.error);

  err.status = status;
  err.name = obj.code;
  err.code = obj.code;
  err.details = obj;
  
  if (status === 0) {
    err.code = "Unknown";
    err.message = "Unknown error.";
  }

  return err;
}

if (Object && Object.create) {
  LoginError.prototype = Object.create(Error.prototype, { 
    constructor: { value: LoginError } 
  });
}

module.exports = LoginError;
},{"./json_parse":6}],4:[function(require,module,exports){
module.exports = function (obj, prop) {
  if (!obj[prop]) {
    throw new Error(prop + ' is required.');
  }
};
},{}],5:[function(require,module,exports){
var Base64 = require('Base64');

module.exports = function(str) {
  var output = str.replace("-", "+").replace("_", "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }
  return Base64.atob(output);
};
},{"Base64":8}],6:[function(require,module,exports){
module.exports = function (str) {
  return window.JSON ? window.JSON.parse(str) : eval('(' + str + ')');
};
},{}],7:[function(require,module,exports){
module.exports = function () {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : null;
  
  if (xhr && 'withCredentials' in xhr) {
    return false;
  }

  return 'XDomainRequest' in window && window.location.protocol === 'http:';
};
},{}],8:[function(require,module,exports){
;(function () {

  var
    object = typeof exports != 'undefined' ? exports : this, // #8: web workers
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    INVALID_CHARACTER_ERR = (function () {
      // fabricate a suitable error object
      try { document.createElement('$'); }
      catch (error) { return error; }}());

  // encoder
  // [https://gist.github.com/999166] by [https://github.com/nignag]
  object.btoa || (
  object.btoa = function (input) {
    for (
      // initialize result and counter
      var block, charCode, idx = 0, map = chars, output = '';
      // if the next input index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      input.charAt(idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = input.charCodeAt(idx += 3/4);
      if (charCode > 0xFF) throw INVALID_CHARACTER_ERR;
      block = block << 8 | charCode;
    }
    return output;
  });

  // decoder
  // [https://gist.github.com/1020396] by [https://github.com/atk]
  object.atob || (
  object.atob = function (input) {
    input = input.replace(/=+$/, '')
    if (input.length % 4 == 1) throw INVALID_CHARACTER_ERR;
    for (
      // initialize result and counters
      var bc = 0, bs, buffer, idx = 0, output = '';
      // get next character
      buffer = input.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }
    return output;
  });

}());

},{}],9:[function(require,module,exports){

/**
 * Module dependencies
 */

var debug = require('debug')('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){};

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }

  var opts = opts || {};
  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0];
  var script;
  var timer;

  // generate a unique id for this request
  var id = count++;

  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      fn && fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    target.parentNode.removeChild(script);
    window['__jp' + id] = noop;
  }

  window['__jp' + id] = function(data){
    debug('jsonp got', data);
    if (timer) clearTimeout(timer);
    cleanup();
    fn && fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc('__jp' + id + '');
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);
};

},{"debug":10}],10:[function(require,module,exports){

/**
 * Expose `debug()` as the module.
 */

module.exports = debug;

/**
 * Create a debugger with the given `name`.
 *
 * @param {String} name
 * @return {Type}
 * @api public
 */

function debug(name) {
  if (!debug.enabled(name)) return function(){};

  return function(fmt){
    var curr = new Date;
    var ms = curr - (debug[name] || curr);
    debug[name] = curr;

    fmt = name
      + ' '
      + fmt
      + ' +' + debug.humanize(ms);

    // This hackery is required for IE8
    // where `console.log` doesn't have 'apply'
    window.console
      && console.log
      && Function.prototype.apply.call(console.log, console, arguments);
  }
}

/**
 * The currently active debug mode names.
 */

debug.names = [];
debug.skips = [];

/**
 * Enables a debug mode by name. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} name
 * @api public
 */

debug.enable = function(name) {
  try {
    localStorage.debug = name;
  } catch(e){}

  var split = (name || '').split(/[\s,]+/)
    , len = split.length;

  for (var i = 0; i < len; i++) {
    name = split[i].replace('*', '.*?');
    if (name[0] === '-') {
      debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
    }
    else {
      debug.names.push(new RegExp('^' + name + '$'));
    }
  }
};

/**
 * Disable debug output.
 *
 * @api public
 */

debug.disable = function(){
  debug.enable('');
};

/**
 * Humanize the given `ms`.
 *
 * @param {Number} m
 * @return {String}
 * @api private
 */

debug.humanize = function(ms) {
  var sec = 1000
    , min = 60 * 1000
    , hour = 60 * min;

  if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
  if (ms >= min) return (ms / min).toFixed(1) + 'm';
  if (ms >= sec) return (ms / sec | 0) + 's';
  return ms + 'ms';
};

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

debug.enabled = function(name) {
  for (var i = 0, len = debug.skips.length; i < len; i++) {
    if (debug.skips[i].test(name)) {
      return false;
    }
  }
  for (var i = 0, len = debug.names.length; i < len; i++) {
    if (debug.names[i].test(name)) {
      return true;
    }
  }
  return false;
};

// persist

if (window.localStorage) debug.enable(localStorage.debug);

},{}],11:[function(require,module,exports){
/**
 * Object#toString() ref for stringify().
 */

var toString = Object.prototype.toString;

/**
 * Object#hasOwnProperty ref
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * see issue #70
 */
var isRestorableProto = (function () {
  var o;

  if (!Object.create) return false;

  o = Object.create(null);
  o.__proto__ = Object.prototype;

  return o.hasOwnProperty === hasOwnProperty;
})();

/**
 * Array#indexOf shim.
 */

var indexOf = typeof Array.prototype.indexOf === 'function'
  ? function(arr, el) { return arr.indexOf(el); }
  : function(arr, el) {
      if (typeof arr == 'string' && typeof "a"[0] == 'undefined') {
        arr = arr.split('');
      }
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el) return i;
      }
      return -1;
    };

/**
 * Array.isArray shim.
 */

var isArray = Array.isArray || function(arr) {
  return toString.call(arr) == '[object Array]';
};

/**
 * Object.keys shim.
 */

var objectKeys = Object.keys || function(obj) {
  var ret = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret.push(key);
    }
  }
  return ret;
};

/**
 * Array#forEach shim.
 */

var forEach = typeof Array.prototype.forEach === 'function'
  ? function(arr, fn) { return arr.forEach(fn); }
  : function(arr, fn) {
      for (var i = 0; i < arr.length; i++) fn(arr[i]);
    };

/**
 * Array#reduce shim.
 */

var reduce = function(arr, fn, initial) {
  if (typeof arr.reduce === 'function') return arr.reduce(fn, initial);
  var res = initial;
  for (var i = 0; i < arr.length; i++) res = fn(res, arr[i]);
  return res;
};

/**
 * Create a nullary object if possible
 */

function createObject() {
  return isRestorableProto
    ? Object.create(null)
    : {};
}

/**
 * Cache non-integer test regexp.
 */

var isint = /^[0-9]+$/;

function promote(parent, key) {
  if (parent[key].length == 0) return parent[key] = createObject();
  var t = createObject();
  for (var i in parent[key]) {
    if (hasOwnProperty.call(parent[key], i)) {
      t[i] = parent[key][i];
    }
  }
  parent[key] = t;
  return t;
}

function parse(parts, parent, key, val) {
  var part = parts.shift();
  // end
  if (!part) {
    if (isArray(parent[key])) {
      parent[key].push(val);
    } else if ('object' == typeof parent[key]) {
      parent[key] = val;
    } else if ('undefined' == typeof parent[key]) {
      parent[key] = val;
    } else {
      parent[key] = [parent[key], val];
    }
    // array
  } else {
    var obj = parent[key] = parent[key] || [];
    if (']' == part) {
      if (isArray(obj)) {
        if ('' != val) obj.push(val);
      } else if ('object' == typeof obj) {
        obj[objectKeys(obj).length] = val;
      } else {
        obj = parent[key] = [parent[key], val];
      }
      // prop
    } else if (~indexOf(part, ']')) {
      part = part.substr(0, part.length - 1);
      if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
      parse(parts, obj, part, val);
      // key
    } else {
      if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
      parse(parts, obj, part, val);
    }
  }
}

/**
 * Merge parent key/val pair.
 */

function merge(parent, key, val){
  if (~indexOf(key, ']')) {
    var parts = key.split('[')
      , len = parts.length
      , last = len - 1;
    parse(parts, parent, 'base', val);
    // optimize
  } else {
    if (!isint.test(key) && isArray(parent.base)) {
      var t = createObject();
      for (var k in parent.base) t[k] = parent.base[k];
      parent.base = t;
    }
    set(parent.base, key, val);
  }

  return parent;
}

/**
 * Compact sparse arrays.
 */

function compact(obj) {
  if ('object' != typeof obj) return obj;

  if (isArray(obj)) {
    var ret = [];

    for (var i in obj) {
      if (hasOwnProperty.call(obj, i)) {
        ret.push(obj[i]);
      }
    }

    return ret;
  }

  for (var key in obj) {
    obj[key] = compact(obj[key]);
  }

  return obj;
}

/**
 * Restore Object.prototype.
 * see pull-request #58
 */

function restoreProto(obj) {
  if (!isRestorableProto) return obj;
  if (isArray(obj)) return obj;
  if (obj && 'object' != typeof obj) return obj;

  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      obj[key] = restoreProto(obj[key]);
    }
  }

  obj.__proto__ = Object.prototype;
  return obj;
}

/**
 * Parse the given obj.
 */

function parseObject(obj){
  var ret = { base: {} };

  forEach(objectKeys(obj), function(name){
    merge(ret, name, obj[name]);
  });

  return compact(ret.base);
}

/**
 * Parse the given str.
 */

function parseString(str){
  var ret = reduce(String(str).split('&'), function(ret, pair){
    var eql = indexOf(pair, '=')
      , brace = lastBraceInKey(pair)
      , key = pair.substr(0, brace || eql)
      , val = pair.substr(brace || eql, pair.length)
      , val = val.substr(indexOf(val, '=') + 1, val.length);

    // ?foo
    if ('' == key) key = pair, val = '';
    if ('' == key) return ret;

    return merge(ret, decode(key), decode(val));
  }, { base: createObject() }).base;

  return restoreProto(compact(ret));
}

/**
 * Parse the given query `str` or `obj`, returning an object.
 *
 * @param {String} str | {Object} obj
 * @return {Object}
 * @api public
 */

exports.parse = function(str){
  if (null == str || '' == str) return {};
  return 'object' == typeof str
    ? parseObject(str)
    : parseString(str);
};

/**
 * Turn the given `obj` into a query string
 *
 * @param {Object} obj
 * @return {String}
 * @api public
 */

var stringify = exports.stringify = function(obj, prefix) {
  if (isArray(obj)) {
    return stringifyArray(obj, prefix);
  } else if ('[object Object]' == toString.call(obj)) {
    return stringifyObject(obj, prefix);
  } else if ('string' == typeof obj) {
    return stringifyString(obj, prefix);
  } else {
    return prefix + '=' + encodeURIComponent(String(obj));
  }
};

/**
 * Stringify the given `str`.
 *
 * @param {String} str
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyString(str, prefix) {
  if (!prefix) throw new TypeError('stringify expects an object');
  return prefix + '=' + encodeURIComponent(str);
}

/**
 * Stringify the given `arr`.
 *
 * @param {Array} arr
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyArray(arr, prefix) {
  var ret = [];
  if (!prefix) throw new TypeError('stringify expects an object');
  for (var i = 0; i < arr.length; i++) {
    ret.push(stringify(arr[i], prefix + '[' + i + ']'));
  }
  return ret.join('&');
}

/**
 * Stringify the given `obj`.
 *
 * @param {Object} obj
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyObject(obj, prefix) {
  var ret = []
    , keys = objectKeys(obj)
    , key;

  for (var i = 0, len = keys.length; i < len; ++i) {
    key = keys[i];
    if ('' == key) continue;
    if (null == obj[key]) {
      ret.push(encodeURIComponent(key) + '=');
    } else {
      ret.push(stringify(obj[key], prefix
        ? prefix + '[' + encodeURIComponent(key) + ']'
        : encodeURIComponent(key)));
    }
  }

  return ret.join('&');
}

/**
 * Set `obj`'s `key` to `val` respecting
 * the weird and wonderful syntax of a qs,
 * where "foo=bar&foo=baz" becomes an array.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {String} val
 * @api private
 */

function set(obj, key, val) {
  var v = obj[key];
  if (undefined === v) {
    obj[key] = val;
  } else if (isArray(v)) {
    v.push(val);
  } else {
    obj[key] = [v, val];
  }
}

/**
 * Locate last brace in `str` within the key.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function lastBraceInKey(str) {
  var len = str.length
    , brace
    , c;
  for (var i = 0; i < len; ++i) {
    c = str[i];
    if (']' == c) brace = false;
    if ('[' == c) brace = true;
    if ('=' == c && !brace) return i;
  }
}

/**
 * Decode `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function decode(str) {
  try {
    return decodeURIComponent(str.replace(/\+/g, ' '));
  } catch (err) {
    return str;
  }
}

},{}],12:[function(require,module,exports){
/*!
  * Reqwest! A general purpose XHR connection manager
  * (c) Dustin Diaz 2013
  * https://github.com/ded/reqwest
  * license MIT
  */
!function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(definition)
  else context[name] = definition()
}('reqwest', this, function () {

  var win = window
    , doc = document
    , twoHundo = /^20\d$/
    , byTag = 'getElementsByTagName'
    , readyState = 'readyState'
    , contentType = 'Content-Type'
    , requestedWith = 'X-Requested-With'
    , head = doc[byTag]('head')[0]
    , uniqid = 0
    , callbackPrefix = 'reqwest_' + (+new Date())
    , lastValue // data stored by the most recent JSONP callback
    , xmlHttpRequest = 'XMLHttpRequest'
    , xDomainRequest = 'XDomainRequest'
    , noop = function () {}

    , isArray = typeof Array.isArray == 'function'
        ? Array.isArray
        : function (a) {
            return a instanceof Array
          }

    , defaultHeaders = {
          contentType: 'application/x-www-form-urlencoded'
        , requestedWith: xmlHttpRequest
        , accept: {
              '*':  'text/javascript, text/html, application/xml, text/xml, */*'
            , xml:  'application/xml, text/xml'
            , html: 'text/html'
            , text: 'text/plain'
            , json: 'application/json, text/javascript'
            , js:   'application/javascript, text/javascript'
          }
      }

    , xhr = function(o) {
        // is it x-domain
        if (o.crossOrigin === true) {
          var xhr = win[xmlHttpRequest] ? new XMLHttpRequest() : null
          if (xhr && 'withCredentials' in xhr) {
            return xhr
          } else if (win[xDomainRequest]) {
            return new XDomainRequest()
          } else {
            throw new Error('Browser does not support cross-origin requests')
          }
        } else if (win[xmlHttpRequest]) {
          return new XMLHttpRequest()
        } else {
          return new ActiveXObject('Microsoft.XMLHTTP')
        }
      }
    , globalSetupOptions = {
        dataFilter: function (data) {
          return data
        }
      }

  function handleReadyState(r, success, error) {
    return function () {
      // use _aborted to mitigate against IE err c00c023f
      // (can't read props on aborted request objects)
      if (r._aborted) return error(r.request)
      if (r.request && r.request[readyState] == 4) {
        r.request.onreadystatechange = noop
        if (twoHundo.test(r.request.status))
          success(r.request)
        else
          error(r.request)
      }
    }
  }

  function setHeaders(http, o) {
    var headers = o.headers || {}
      , h

    headers.Accept = headers.Accept
      || defaultHeaders.accept[o.type]
      || defaultHeaders.accept['*']

    // breaks cross-origin requests with legacy browsers
    if (!o.crossOrigin && !headers[requestedWith]) headers[requestedWith] = defaultHeaders.requestedWith
    if (!headers[contentType]) headers[contentType] = o.contentType || defaultHeaders.contentType
    for (h in headers)
      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h])
  }

  function setCredentials(http, o) {
    if (typeof o.withCredentials !== 'undefined' && typeof http.withCredentials !== 'undefined') {
      http.withCredentials = !!o.withCredentials
    }
  }

  function generalCallback(data) {
    lastValue = data
  }

  function urlappend (url, s) {
    return url + (/\?/.test(url) ? '&' : '?') + s
  }

  function handleJsonp(o, fn, err, url) {
    var reqId = uniqid++
      , cbkey = o.jsonpCallback || 'callback' // the 'callback' key
      , cbval = o.jsonpCallbackName || reqwest.getcallbackPrefix(reqId)
      // , cbval = o.jsonpCallbackName || ('reqwest_' + reqId) // the 'callback' value
      , cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)')
      , match = url.match(cbreg)
      , script = doc.createElement('script')
      , loaded = 0
      , isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1

    if (match) {
      if (match[3] === '?') {
        url = url.replace(cbreg, '$1=' + cbval) // wildcard callback func name
      } else {
        cbval = match[3] // provided callback func name
      }
    } else {
      url = urlappend(url, cbkey + '=' + cbval) // no callback details, add 'em
    }

    win[cbval] = generalCallback

    script.type = 'text/javascript'
    script.src = url
    script.async = true
    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
      // need this for IE due to out-of-order onreadystatechange(), binding script
      // execution to an event listener gives us control over when the script
      // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
      //
      // if this hack is used in IE10 jsonp callback are never called
      script.event = 'onclick'
      script.htmlFor = script.id = '_reqwest_' + reqId
    }

    script.onload = script.onreadystatechange = function () {
      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
        return false
      }
      script.onload = script.onreadystatechange = null
      script.onclick && script.onclick()
      // Call the user callback with the last value stored and clean up values and scripts.
      fn(lastValue)
      lastValue = undefined
      head.removeChild(script)
      loaded = 1
    }

    // Add the script to the DOM head
    head.appendChild(script)

    // Enable JSONP timeout
    return {
      abort: function () {
        script.onload = script.onreadystatechange = null
        err({}, 'Request is aborted: timeout', {})
        lastValue = undefined
        head.removeChild(script)
        loaded = 1
      }
    }
  }

  function getRequest(fn, err) {
    var o = this.o
      , method = (o.method || 'GET').toUpperCase()
      , url = typeof o === 'string' ? o : o.url
      // convert non-string objects to query-string form unless o.processData is false
      , data = (o.processData !== false && o.data && typeof o.data !== 'string')
        ? reqwest.toQueryString(o.data)
        : (o.data || null)
      , http
      , sendWait = false

    // if we're working on a GET request and we have data then we should append
    // query string to end of URL and not post data
    if ((o.type == 'jsonp' || method == 'GET') && data) {
      url = urlappend(url, data)
      data = null
    }

    if (o.type == 'jsonp') return handleJsonp(o, fn, err, url)

    http = xhr(o)
    http.open(method, url, o.async === false ? false : true)
    setHeaders(http, o)
    setCredentials(http, o)
    if (win[xDomainRequest] && http instanceof win[xDomainRequest]) {
        http.onload = fn
        http.onerror = err
        // NOTE: see
        // http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e
        http.onprogress = function() {}
        sendWait = true
    } else {
      http.onreadystatechange = handleReadyState(this, fn, err)
    }
    o.before && o.before(http)
    if (sendWait) {
      setTimeout(function () {
        http.send(data)
      }, 200)
    } else {
      http.send(data)
    }
    return http
  }

  function Reqwest(o, fn) {
    this.o = o
    this.fn = fn

    init.apply(this, arguments)
  }

  function setType(url) {
    var m = url.match(/\.(json|jsonp|html|xml)(\?|$)/)
    return m ? m[1] : 'js'
  }

  function init(o, fn) {

    this.url = typeof o == 'string' ? o : o.url
    this.timeout = null

    // whether request has been fulfilled for purpose
    // of tracking the Promises
    this._fulfilled = false
    // success handlers
    this._successHandler = function(){}
    this._fulfillmentHandlers = []
    // error handlers
    this._errorHandlers = []
    // complete (both success and fail) handlers
    this._completeHandlers = []
    this._erred = false
    this._responseArgs = {}

    var self = this
      , type = o.type || setType(this.url)

    fn = fn || function () {}

    if (o.timeout) {
      this.timeout = setTimeout(function () {
        self.abort()
      }, o.timeout)
    }

    if (o.success) {
      this._successHandler = function () {
        o.success.apply(o, arguments)
      }
    }

    if (o.error) {
      this._errorHandlers.push(function () {
        o.error.apply(o, arguments)
      })
    }

    if (o.complete) {
      this._completeHandlers.push(function () {
        o.complete.apply(o, arguments)
      })
    }

    function complete (resp) {
      o.timeout && clearTimeout(self.timeout)
      self.timeout = null
      while (self._completeHandlers.length > 0) {
        self._completeHandlers.shift()(resp)
      }
    }

    function success (resp) {
      resp = (type !== 'jsonp') ? self.request : resp
      // use global data filter on response text
      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type)
        , r = filteredResponse
      try {
        resp.responseText = r
      } catch (e) {
        // can't assign this in IE<=8, just ignore
      }
      if (r) {
        switch (type) {
        case 'json':
          try {
            resp = win.JSON ? win.JSON.parse(r) : eval('(' + r + ')')
          } catch (err) {
            return error(resp, 'Could not parse JSON in response', err)
          }
          break
        case 'js':
          resp = eval(r)
          break
        case 'html':
          resp = r
          break
        case 'xml':
          resp = resp.responseXML
              && resp.responseXML.parseError // IE trololo
              && resp.responseXML.parseError.errorCode
              && resp.responseXML.parseError.reason
            ? null
            : resp.responseXML
          break
        }
      }

      self._responseArgs.resp = resp
      self._fulfilled = true
      fn(resp)
      self._successHandler(resp)
      while (self._fulfillmentHandlers.length > 0) {
        resp = self._fulfillmentHandlers.shift()(resp)
      }

      complete(resp)
    }

    function error(resp, msg, t) {
      resp = self.request
      self._responseArgs.resp = resp
      self._responseArgs.msg = msg
      self._responseArgs.t = t
      self._erred = true
      while (self._errorHandlers.length > 0) {
        self._errorHandlers.shift()(resp, msg, t)
      }
      complete(resp)
    }

    this.request = getRequest.call(this, success, error)
  }

  Reqwest.prototype = {
    abort: function () {
      this._aborted = true
      this.request.abort()
    }

  , retry: function () {
      init.call(this, this.o, this.fn)
    }

    /**
     * Small deviation from the Promises A CommonJs specification
     * http://wiki.commonjs.org/wiki/Promises/A
     */

    /**
     * `then` will execute upon successful requests
     */
  , then: function (success, fail) {
      success = success || function () {}
      fail = fail || function () {}
      if (this._fulfilled) {
        this._responseArgs.resp = success(this._responseArgs.resp)
      } else if (this._erred) {
        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._fulfillmentHandlers.push(success)
        this._errorHandlers.push(fail)
      }
      return this
    }

    /**
     * `always` will execute whether the request succeeds or fails
     */
  , always: function (fn) {
      if (this._fulfilled || this._erred) {
        fn(this._responseArgs.resp)
      } else {
        this._completeHandlers.push(fn)
      }
      return this
    }

    /**
     * `fail` will execute when the request fails
     */
  , fail: function (fn) {
      if (this._erred) {
        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._errorHandlers.push(fn)
      }
      return this
    }
  }

  function reqwest(o, fn) {
    return new Reqwest(o, fn)
  }

  // normalize newline variants according to spec -> CRLF
  function normalize(s) {
    return s ? s.replace(/\r?\n/g, '\r\n') : ''
  }

  function serial(el, cb) {
    var n = el.name
      , t = el.tagName.toLowerCase()
      , optCb = function (o) {
          // IE gives value="" even where there is no value attribute
          // 'specified' ref: http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-862529273
          if (o && !o.disabled)
            cb(n, normalize(o.attributes.value && o.attributes.value.specified ? o.value : o.text))
        }
      , ch, ra, val, i

    // don't serialize elements that are disabled or without a name
    if (el.disabled || !n) return

    switch (t) {
    case 'input':
      if (!/reset|button|image|file/i.test(el.type)) {
        ch = /checkbox/i.test(el.type)
        ra = /radio/i.test(el.type)
        val = el.value
        // WebKit gives us "" instead of "on" if a checkbox has no value, so correct it here
        ;(!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val))
      }
      break
    case 'textarea':
      cb(n, normalize(el.value))
      break
    case 'select':
      if (el.type.toLowerCase() === 'select-one') {
        optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
      } else {
        for (i = 0; el.length && i < el.length; i++) {
          el.options[i].selected && optCb(el.options[i])
        }
      }
      break
    }
  }

  // collect up all form elements found from the passed argument elements all
  // the way down to child elements; pass a '<form>' or form fields.
  // called with 'this'=callback to use for serial() on each element
  function eachFormElement() {
    var cb = this
      , e, i
      , serializeSubtags = function (e, tags) {
          var i, j, fa
          for (i = 0; i < tags.length; i++) {
            fa = e[byTag](tags[i])
            for (j = 0; j < fa.length; j++) serial(fa[j], cb)
          }
        }

    for (i = 0; i < arguments.length; i++) {
      e = arguments[i]
      if (/input|select|textarea/i.test(e.tagName)) serial(e, cb)
      serializeSubtags(e, [ 'input', 'select', 'textarea' ])
    }
  }

  // standard query string style serialization
  function serializeQueryString() {
    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
  }

  // { 'name': 'value', ... } style serialization
  function serializeHash() {
    var hash = {}
    eachFormElement.apply(function (name, value) {
      if (name in hash) {
        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]])
        hash[name].push(value)
      } else hash[name] = value
    }, arguments)
    return hash
  }

  // [ { name: 'name', value: 'value' }, ... ] style serialization
  reqwest.serializeArray = function () {
    var arr = []
    eachFormElement.apply(function (name, value) {
      arr.push({name: name, value: value})
    }, arguments)
    return arr
  }

  reqwest.serialize = function () {
    if (arguments.length === 0) return ''
    var opt, fn
      , args = Array.prototype.slice.call(arguments, 0)

    opt = args.pop()
    opt && opt.nodeType && args.push(opt) && (opt = null)
    opt && (opt = opt.type)

    if (opt == 'map') fn = serializeHash
    else if (opt == 'array') fn = reqwest.serializeArray
    else fn = serializeQueryString

    return fn.apply(null, args)
  }

  reqwest.toQueryString = function (o, trad) {
    var prefix, i
      , traditional = trad || false
      , s = []
      , enc = encodeURIComponent
      , add = function (key, value) {
          // If value is a function, invoke it and return its value
          value = ('function' === typeof value) ? value() : (value == null ? '' : value)
          s[s.length] = enc(key) + '=' + enc(value)
        }
    // If an array was passed in, assume that it is an array of form elements.
    if (isArray(o)) {
      for (i = 0; o && i < o.length; i++) add(o[i].name, o[i].value)
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in o) {
        buildParams(prefix, o[prefix], traditional, add)
      }
    }

    // spaces should be + according to spec
    return s.join('&').replace(/%20/g, '+')
  }

  function buildParams(prefix, obj, traditional, add) {
    var name, i, v
      , rbracket = /\[\]$/

    if (isArray(obj)) {
      // Serialize array item.
      for (i = 0; obj && i < obj.length; i++) {
        v = obj[i]
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v)
        } else {
          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add)
        }
      }
    } else if (obj && obj.toString() === '[object Object]') {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
      }

    } else {
      // Serialize scalar item.
      add(prefix, obj)
    }
  }

  reqwest.getcallbackPrefix = function () {
    return callbackPrefix
  }

  // jQuery and Zepto compatibility, differences can be remapped here so you can call
  // .ajax.compat(options, callback)
  reqwest.compat = function (o, fn) {
    if (o) {
      o.type && (o.method = o.type) && delete o.type
      o.dataType && (o.type = o.dataType)
      o.jsonpCallback && (o.jsonpCallbackName = o.jsonpCallback) && delete o.jsonpCallback
      o.jsonp && (o.jsonpCallback = o.jsonp)
    }
    return new Reqwest(o, fn)
  }

  reqwest.ajaxSetup = function (options) {
    options = options || {}
    for (var k in options) {
      globalSetupOptions[k] = options[k]
    }
  }

  return reqwest
});

},{}],13:[function(require,module,exports){
/*!
  * Bean - copyright (c) Jacob Thornton 2011-2012
  * https://github.com/fat/bean
  * MIT license
  */
(function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(definition)
  else context[name] = definition()
})('bean', this, function (name, context) {
  name    = name    || 'bean'
  context = context || this

  var win            = window
    , old            = context[name]
    , namespaceRegex = /[^\.]*(?=\..*)\.|.*/
    , nameRegex      = /\..*/
    , addEvent       = 'addEventListener'
    , removeEvent    = 'removeEventListener'
    , doc            = document || {}
    , root           = doc.documentElement || {}
    , W3C_MODEL      = root[addEvent]
    , eventSupport   = W3C_MODEL ? addEvent : 'attachEvent'
    , ONE            = {} // singleton for quick matching making add() do one()

    , slice          = Array.prototype.slice
    , str2arr        = function (s, d) { return s.split(d || ' ') }
    , isString       = function (o) { return typeof o == 'string' }
    , isFunction     = function (o) { return typeof o == 'function' }

      // events that we consider to be 'native', anything not in this list will
      // be treated as a custom event
    , standardNativeEvents =
        'click dblclick mouseup mousedown contextmenu '                  + // mouse buttons
        'mousewheel mousemultiwheel DOMMouseScroll '                     + // mouse wheel
        'mouseover mouseout mousemove selectstart selectend '            + // mouse movement
        'keydown keypress keyup '                                        + // keyboard
        'orientationchange '                                             + // mobile
        'focus blur change reset select submit '                         + // form elements
        'load unload beforeunload resize move DOMContentLoaded '         + // window
        'readystatechange message '                                      + // window
        'error abort scroll '                                              // misc
      // element.fireEvent('onXYZ'... is not forgiving if we try to fire an event
      // that doesn't actually exist, so make sure we only do these on newer browsers
    , w3cNativeEvents =
        'show '                                                          + // mouse buttons
        'input invalid '                                                 + // form elements
        'touchstart touchmove touchend touchcancel '                     + // touch
        'gesturestart gesturechange gestureend '                         + // gesture
        'textinput'                                                      + // TextEvent
        'readystatechange pageshow pagehide popstate '                   + // window
        'hashchange offline online '                                     + // window
        'afterprint beforeprint '                                        + // printing
        'dragstart dragenter dragover dragleave drag drop dragend '      + // dnd
        'loadstart progress suspend emptied stalled loadmetadata '       + // media
        'loadeddata canplay canplaythrough playing waiting seeking '     + // media
        'seeked ended durationchange timeupdate play pause ratechange '  + // media
        'volumechange cuechange '                                        + // media
        'checking noupdate downloading cached updateready obsolete '       // appcache

      // convert to a hash for quick lookups
    , nativeEvents = (function (hash, events, i) {
        for (i = 0; i < events.length; i++) events[i] && (hash[events[i]] = 1)
        return hash
      }({}, str2arr(standardNativeEvents + (W3C_MODEL ? w3cNativeEvents : ''))))

      // custom events are events that we *fake*, they are not provided natively but
      // we can use native events to generate them
    , customEvents = (function () {
        var isAncestor = 'compareDocumentPosition' in root
              ? function (element, container) {
                  return container.compareDocumentPosition && (container.compareDocumentPosition(element) & 16) === 16
                }
              : 'contains' in root
                ? function (element, container) {
                    container = container.nodeType === 9 || container === window ? root : container
                    return container !== element && container.contains(element)
                  }
                : function (element, container) {
                    while (element = element.parentNode) if (element === container) return 1
                    return 0
                  }
          , check = function (event) {
              var related = event.relatedTarget
              return !related
                ? related == null
                : (related !== this && related.prefix !== 'xul' && !/document/.test(this.toString())
                    && !isAncestor(related, this))
            }

        return {
            mouseenter: { base: 'mouseover', condition: check }
          , mouseleave: { base: 'mouseout', condition: check }
          , mousewheel: { base: /Firefox/.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel' }
        }
      }())

      // we provide a consistent Event object across browsers by taking the actual DOM
      // event object and generating a new one from its properties.
    , Event = (function () {
            // a whitelist of properties (for different event types) tells us what to check for and copy
        var commonProps  = str2arr('altKey attrChange attrName bubbles cancelable ctrlKey currentTarget ' +
              'detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey '  +
              'srcElement target timeStamp type view which propertyName')
          , mouseProps   = commonProps.concat(str2arr('button buttons clientX clientY dataTransfer '      +
              'fromElement offsetX offsetY pageX pageY screenX screenY toElement'))
          , mouseWheelProps = mouseProps.concat(str2arr('wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ ' +
              'axis')) // 'axis' is FF specific
          , keyProps     = commonProps.concat(str2arr('char charCode key keyCode keyIdentifier '          +
              'keyLocation location'))
          , textProps    = commonProps.concat(str2arr('data'))
          , touchProps   = commonProps.concat(str2arr('touches targetTouches changedTouches scale rotation'))
          , messageProps = commonProps.concat(str2arr('data origin source'))
          , stateProps   = commonProps.concat(str2arr('state'))
          , overOutRegex = /over|out/
            // some event types need special handling and some need special properties, do that all here
          , typeFixers   = [
                { // key events
                    reg: /key/i
                  , fix: function (event, newEvent) {
                      newEvent.keyCode = event.keyCode || event.which
                      return keyProps
                    }
                }
              , { // mouse events
                    reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i
                  , fix: function (event, newEvent, type) {
                      newEvent.rightClick = event.which === 3 || event.button === 2
                      newEvent.pos = { x: 0, y: 0 }
                      if (event.pageX || event.pageY) {
                        newEvent.clientX = event.pageX
                        newEvent.clientY = event.pageY
                      } else if (event.clientX || event.clientY) {
                        newEvent.clientX = event.clientX + doc.body.scrollLeft + root.scrollLeft
                        newEvent.clientY = event.clientY + doc.body.scrollTop + root.scrollTop
                      }
                      if (overOutRegex.test(type)) {
                        newEvent.relatedTarget = event.relatedTarget
                          || event[(type == 'mouseover' ? 'from' : 'to') + 'Element']
                      }
                      return mouseProps
                    }
                }
              , { // mouse wheel events
                    reg: /mouse.*(wheel|scroll)/i
                  , fix: function () { return mouseWheelProps }
                }
              , { // TextEvent
                    reg: /^text/i
                  , fix: function () { return textProps }
                }
              , { // touch and gesture events
                    reg: /^touch|^gesture/i
                  , fix: function () { return touchProps }
                }
              , { // message events
                    reg: /^message$/i
                  , fix: function () { return messageProps }
                }
              , { // popstate events
                    reg: /^popstate$/i
                  , fix: function () { return stateProps }
                }
              , { // everything else
                    reg: /.*/
                  , fix: function () { return commonProps }
                }
            ]
          , typeFixerMap = {} // used to map event types to fixer functions (above), a basic cache mechanism

          , Event = function (event, element, isNative) {
              if (!arguments.length) return
              event = event || ((element.ownerDocument || element.document || element).parentWindow || win).event
              this.originalEvent = event
              this.isNative       = isNative
              this.isBean         = true

              if (!event) return

              var type   = event.type
                , target = event.target || event.srcElement
                , i, l, p, props, fixer

              this.target = target && target.nodeType === 3 ? target.parentNode : target

              if (isNative) { // we only need basic augmentation on custom events, the rest expensive & pointless
                fixer = typeFixerMap[type]
                if (!fixer) { // haven't encountered this event type before, map a fixer function for it
                  for (i = 0, l = typeFixers.length; i < l; i++) {
                    if (typeFixers[i].reg.test(type)) { // guaranteed to match at least one, last is .*
                      typeFixerMap[type] = fixer = typeFixers[i].fix
                      break
                    }
                  }
                }

                props = fixer(event, this, type)
                for (i = props.length; i--;) {
                  if (!((p = props[i]) in this) && p in event) this[p] = event[p]
                }
              }
            }

        // preventDefault() and stopPropagation() are a consistent interface to those functions
        // on the DOM, stop() is an alias for both of them together
        Event.prototype.preventDefault = function () {
          if (this.originalEvent.preventDefault) this.originalEvent.preventDefault()
          else this.originalEvent.returnValue = false
        }
        Event.prototype.stopPropagation = function () {
          if (this.originalEvent.stopPropagation) this.originalEvent.stopPropagation()
          else this.originalEvent.cancelBubble = true
        }
        Event.prototype.stop = function () {
          this.preventDefault()
          this.stopPropagation()
          this.stopped = true
        }
        // stopImmediatePropagation() has to be handled internally because we manage the event list for
        // each element
        // note that originalElement may be a Bean#Event object in some situations
        Event.prototype.stopImmediatePropagation = function () {
          if (this.originalEvent.stopImmediatePropagation) this.originalEvent.stopImmediatePropagation()
          this.isImmediatePropagationStopped = function () { return true }
        }
        Event.prototype.isImmediatePropagationStopped = function () {
          return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped()
        }
        Event.prototype.clone = function (currentTarget) {
          //TODO: this is ripe for optimisation, new events are *expensive*
          // improving this will speed up delegated events
          var ne = new Event(this, this.element, this.isNative)
          ne.currentTarget = currentTarget
          return ne
        }

        return Event
      }())

      // if we're in old IE we can't do onpropertychange on doc or win so we use doc.documentElement for both
    , targetElement = function (element, isNative) {
        return !W3C_MODEL && !isNative && (element === doc || element === win) ? root : element
      }

      /**
        * Bean maintains an internal registry for event listeners. We don't touch elements, objects
        * or functions to identify them, instead we store everything in the registry.
        * Each event listener has a RegEntry object, we have one 'registry' for the whole instance.
        */
    , RegEntry = (function () {
        // each handler is wrapped so we can handle delegation and custom events
        var wrappedHandler = function (element, fn, condition, args) {
            var call = function (event, eargs) {
                  return fn.apply(element, args ? slice.call(eargs, event ? 0 : 1).concat(args) : eargs)
                }
              , findTarget = function (event, eventElement) {
                  return fn.__beanDel ? fn.__beanDel.ft(event.target, element) : eventElement
                }
              , handler = condition
                  ? function (event) {
                      var target = findTarget(event, this) // deleated event
                      if (condition.apply(target, arguments)) {
                        if (event) event.currentTarget = target
                        return call(event, arguments)
                      }
                    }
                  : function (event) {
                      if (fn.__beanDel) event = event.clone(findTarget(event)) // delegated event, fix the fix
                      return call(event, arguments)
                    }
            handler.__beanDel = fn.__beanDel
            return handler
          }

        , RegEntry = function (element, type, handler, original, namespaces, args, root) {
            var customType     = customEvents[type]
              , isNative

            if (type == 'unload') {
              // self clean-up
              handler = once(removeListener, element, type, handler, original)
            }

            if (customType) {
              if (customType.condition) {
                handler = wrappedHandler(element, handler, customType.condition, args)
              }
              type = customType.base || type
            }

            this.isNative      = isNative = nativeEvents[type] && !!element[eventSupport]
            this.customType    = !W3C_MODEL && !isNative && type
            this.element       = element
            this.type          = type
            this.original      = original
            this.namespaces    = namespaces
            this.eventType     = W3C_MODEL || isNative ? type : 'propertychange'
            this.target        = targetElement(element, isNative)
            this[eventSupport] = !!this.target[eventSupport]
            this.root          = root
            this.handler       = wrappedHandler(element, handler, null, args)
          }

        // given a list of namespaces, is our entry in any of them?
        RegEntry.prototype.inNamespaces = function (checkNamespaces) {
          var i, j, c = 0
          if (!checkNamespaces) return true
          if (!this.namespaces) return false
          for (i = checkNamespaces.length; i--;) {
            for (j = this.namespaces.length; j--;) {
              if (checkNamespaces[i] == this.namespaces[j]) c++
            }
          }
          return checkNamespaces.length === c
        }

        // match by element, original fn (opt), handler fn (opt)
        RegEntry.prototype.matches = function (checkElement, checkOriginal, checkHandler) {
          return this.element === checkElement &&
            (!checkOriginal || this.original === checkOriginal) &&
            (!checkHandler || this.handler === checkHandler)
        }

        return RegEntry
      }())

    , registry = (function () {
        // our map stores arrays by event type, just because it's better than storing
        // everything in a single array.
        // uses '$' as a prefix for the keys for safety and 'r' as a special prefix for
        // rootListeners so we can look them up fast
        var map = {}

          // generic functional search of our registry for matching listeners,
          // `fn` returns false to break out of the loop
          , forAll = function (element, type, original, handler, root, fn) {
              var pfx = root ? 'r' : '$'
              if (!type || type == '*') {
                // search the whole registry
                for (var t in map) {
                  if (t.charAt(0) == pfx) {
                    forAll(element, t.substr(1), original, handler, root, fn)
                  }
                }
              } else {
                var i = 0, l, list = map[pfx + type], all = element == '*'
                if (!list) return
                for (l = list.length; i < l; i++) {
                  if ((all || list[i].matches(element, original, handler)) && !fn(list[i], list, i, type)) return
                }
              }
            }

          , has = function (element, type, original, root) {
              // we're not using forAll here simply because it's a bit slower and this
              // needs to be fast
              var i, list = map[(root ? 'r' : '$') + type]
              if (list) {
                for (i = list.length; i--;) {
                  if (!list[i].root && list[i].matches(element, original, null)) return true
                }
              }
              return false
            }

          , get = function (element, type, original, root) {
              var entries = []
              forAll(element, type, original, null, root, function (entry) {
                return entries.push(entry)
              })
              return entries
            }

          , put = function (entry) {
              var has = !entry.root && !this.has(entry.element, entry.type, null, false)
                , key = (entry.root ? 'r' : '$') + entry.type
              ;(map[key] || (map[key] = [])).push(entry)
              return has
            }

          , del = function (entry) {
              forAll(entry.element, entry.type, null, entry.handler, entry.root, function (entry, list, i) {
                list.splice(i, 1)
                entry.removed = true
                if (list.length === 0) delete map[(entry.root ? 'r' : '$') + entry.type]
                return false
              })
            }

            // dump all entries, used for onunload
          , entries = function () {
              var t, entries = []
              for (t in map) {
                if (t.charAt(0) == '$') entries = entries.concat(map[t])
              }
              return entries
            }

        return { has: has, get: get, put: put, del: del, entries: entries }
      }())

      // we need a selector engine for delegated events, use querySelectorAll if it exists
      // but for older browsers we need Qwery, Sizzle or similar
    , selectorEngine
    , setSelectorEngine = function (e) {
        if (!arguments.length) {
          selectorEngine = doc.querySelectorAll
            ? function (s, r) {
                return r.querySelectorAll(s)
              }
            : function () {
                throw new Error('Bean: No selector engine installed') // eeek
              }
        } else {
          selectorEngine = e
        }
      }

      // we attach this listener to each DOM event that we need to listen to, only once
      // per event type per DOM element
    , rootListener = function (event, type) {
        if (!W3C_MODEL && type && event && event.propertyName != '_on' + type) return

        var listeners = registry.get(this, type || event.type, null, false)
          , l = listeners.length
          , i = 0

        event = new Event(event, this, true)
        if (type) event.type = type

        // iterate through all handlers registered for this type, calling them unless they have
        // been removed by a previous handler or stopImmediatePropagation() has been called
        for (; i < l && !event.isImmediatePropagationStopped(); i++) {
          if (!listeners[i].removed) listeners[i].handler.call(this, event)
        }
      }

      // add and remove listeners to DOM elements
    , listener = W3C_MODEL
        ? function (element, type, add) {
            // new browsers
            element[add ? addEvent : removeEvent](type, rootListener, false)
          }
        : function (element, type, add, custom) {
            // IE8 and below, use attachEvent/detachEvent and we have to piggy-back propertychange events
            // to simulate event bubbling etc.
            var entry
            if (add) {
              registry.put(entry = new RegEntry(
                  element
                , custom || type
                , function (event) { // handler
                    rootListener.call(element, event, custom)
                  }
                , rootListener
                , null
                , null
                , true // is root
              ))
              if (custom && element['_on' + custom] == null) element['_on' + custom] = 0
              entry.target.attachEvent('on' + entry.eventType, entry.handler)
            } else {
              entry = registry.get(element, custom || type, rootListener, true)[0]
              if (entry) {
                entry.target.detachEvent('on' + entry.eventType, entry.handler)
                registry.del(entry)
              }
            }
          }

    , once = function (rm, element, type, fn, originalFn) {
        // wrap the handler in a handler that does a remove as well
        return function () {
          fn.apply(this, arguments)
          rm(element, type, originalFn)
        }
      }

    , removeListener = function (element, orgType, handler, namespaces) {
        var type     = orgType && orgType.replace(nameRegex, '')
          , handlers = registry.get(element, type, null, false)
          , removed  = {}
          , i, l

        for (i = 0, l = handlers.length; i < l; i++) {
          if ((!handler || handlers[i].original === handler) && handlers[i].inNamespaces(namespaces)) {
            // TODO: this is problematic, we have a registry.get() and registry.del() that
            // both do registry searches so we waste cycles doing this. Needs to be rolled into
            // a single registry.forAll(fn) that removes while finding, but the catch is that
            // we'll be splicing the arrays that we're iterating over. Needs extra tests to
            // make sure we don't screw it up. @rvagg
            registry.del(handlers[i])
            if (!removed[handlers[i].eventType] && handlers[i][eventSupport])
              removed[handlers[i].eventType] = { t: handlers[i].eventType, c: handlers[i].type }
          }
        }
        // check each type/element for removed listeners and remove the rootListener where it's no longer needed
        for (i in removed) {
          if (!registry.has(element, removed[i].t, null, false)) {
            // last listener of this type, remove the rootListener
            listener(element, removed[i].t, false, removed[i].c)
          }
        }
      }

      // set up a delegate helper using the given selector, wrap the handler function
    , delegate = function (selector, fn) {
        //TODO: findTarget (therefore $) is called twice, once for match and once for
        // setting e.currentTarget, fix this so it's only needed once
        var findTarget = function (target, root) {
              var i, array = isString(selector) ? selectorEngine(selector, root) : selector
              for (; target && target !== root; target = target.parentNode) {
                for (i = array.length; i--;) {
                  if (array[i] === target) return target
                }
              }
            }
          , handler = function (e) {
              var match = findTarget(e.target, this)
              if (match) fn.apply(match, arguments)
            }

        // __beanDel isn't pleasant but it's a private function, not exposed outside of Bean
        handler.__beanDel = {
            ft       : findTarget // attach it here for customEvents to use too
          , selector : selector
        }
        return handler
      }

    , fireListener = W3C_MODEL ? function (isNative, type, element) {
        // modern browsers, do a proper dispatchEvent()
        var evt = doc.createEvent(isNative ? 'HTMLEvents' : 'UIEvents')
        evt[isNative ? 'initEvent' : 'initUIEvent'](type, true, true, win, 1)
        element.dispatchEvent(evt)
      } : function (isNative, type, element) {
        // old browser use onpropertychange, just increment a custom property to trigger the event
        element = targetElement(element, isNative)
        isNative ? element.fireEvent('on' + type, doc.createEventObject()) : element['_on' + type]++
      }

      /**
        * Public API: off(), on(), add(), (remove()), one(), fire(), clone()
        */

      /**
        * off(element[, eventType(s)[, handler ]])
        */
    , off = function (element, typeSpec, fn) {
        var isTypeStr = isString(typeSpec)
          , k, type, namespaces, i

        if (isTypeStr && typeSpec.indexOf(' ') > 0) {
          // off(el, 't1 t2 t3', fn) or off(el, 't1 t2 t3')
          typeSpec = str2arr(typeSpec)
          for (i = typeSpec.length; i--;)
            off(element, typeSpec[i], fn)
          return element
        }

        type = isTypeStr && typeSpec.replace(nameRegex, '')
        if (type && customEvents[type]) type = customEvents[type].base

        if (!typeSpec || isTypeStr) {
          // off(el) or off(el, t1.ns) or off(el, .ns) or off(el, .ns1.ns2.ns3)
          if (namespaces = isTypeStr && typeSpec.replace(namespaceRegex, '')) namespaces = str2arr(namespaces, '.')
          removeListener(element, type, fn, namespaces)
        } else if (isFunction(typeSpec)) {
          // off(el, fn)
          removeListener(element, null, typeSpec)
        } else {
          // off(el, { t1: fn1, t2, fn2 })
          for (k in typeSpec) {
            if (typeSpec.hasOwnProperty(k)) off(element, k, typeSpec[k])
          }
        }

        return element
      }

      /**
        * on(element, eventType(s)[, selector], handler[, args ])
        */
    , on = function(element, events, selector, fn) {
        var originalFn, type, types, i, args, entry, first

        //TODO: the undefined check means you can't pass an 'args' argument, fix this perhaps?
        if (selector === undefined && typeof events == 'object') {
          //TODO: this can't handle delegated events
          for (type in events) {
            if (events.hasOwnProperty(type)) {
              on.call(this, element, type, events[type])
            }
          }
          return
        }

        if (!isFunction(selector)) {
          // delegated event
          originalFn = fn
          args       = slice.call(arguments, 4)
          fn         = delegate(selector, originalFn, selectorEngine)
        } else {
          args       = slice.call(arguments, 3)
          fn         = originalFn = selector
        }

        types = str2arr(events)

        // special case for one(), wrap in a self-removing handler
        if (this === ONE) {
          fn = once(off, element, events, fn, originalFn)
        }

        for (i = types.length; i--;) {
          // add new handler to the registry and check if it's the first for this element/type
          first = registry.put(entry = new RegEntry(
              element
            , types[i].replace(nameRegex, '') // event type
            , fn
            , originalFn
            , str2arr(types[i].replace(namespaceRegex, ''), '.') // namespaces
            , args
            , false // not root
          ))
          if (entry[eventSupport] && first) {
            // first event of this type on this element, add root listener
            listener(element, entry.eventType, true, entry.customType)
          }
        }

        return element
      }

      /**
        * add(element[, selector], eventType(s), handler[, args ])
        *
        * Deprecated: kept (for now) for backward-compatibility
        */
    , add = function (element, events, fn, delfn) {
        return on.apply(
            null
          , !isString(fn)
              ? slice.call(arguments)
              : [ element, fn, events, delfn ].concat(arguments.length > 3 ? slice.call(arguments, 5) : [])
        )
      }

      /**
        * one(element, eventType(s)[, selector], handler[, args ])
        */
    , one = function () {
        return on.apply(ONE, arguments)
      }

      /**
        * fire(element, eventType(s)[, args ])
        *
        * The optional 'args' argument must be an array, if no 'args' argument is provided
        * then we can use the browser's DOM event system, otherwise we trigger handlers manually
        */
    , fire = function (element, type, args) {
        var types = str2arr(type)
          , i, j, l, names, handlers

        for (i = types.length; i--;) {
          type = types[i].replace(nameRegex, '')
          if (names = types[i].replace(namespaceRegex, '')) names = str2arr(names, '.')
          if (!names && !args && element[eventSupport]) {
            fireListener(nativeEvents[type], type, element)
          } else {
            // non-native event, either because of a namespace, arguments or a non DOM element
            // iterate over all listeners and manually 'fire'
            handlers = registry.get(element, type, null, false)
            args = [false].concat(args)
            for (j = 0, l = handlers.length; j < l; j++) {
              if (handlers[j].inNamespaces(names)) {
                handlers[j].handler.apply(element, args)
              }
            }
          }
        }
        return element
      }

      /**
        * clone(dstElement, srcElement[, eventType ])
        *
        * TODO: perhaps for consistency we should allow the same flexibility in type specifiers?
        */
    , clone = function (element, from, type) {
        var handlers = registry.get(from, type, null, false)
          , l = handlers.length
          , i = 0
          , args, beanDel

        for (; i < l; i++) {
          if (handlers[i].original) {
            args = [ element, handlers[i].type ]
            if (beanDel = handlers[i].handler.__beanDel) args.push(beanDel.selector)
            args.push(handlers[i].original)
            on.apply(null, args)
          }
        }
        return element
      }

    , bean = {
          on                : on
        , add               : add
        , one               : one
        , off               : off
        , remove            : off
        , clone             : clone
        , fire              : fire
        , Event             : Event
        , setSelectorEngine : setSelectorEngine
        , noConflict        : function () {
            context[name] = old
            return this
          }
      }

  // for IE, clean up on unload to avoid leaks
  if (win.attachEvent) {
    var cleanup = function () {
      var i, entries = registry.entries()
      for (i in entries) {
        if (entries[i].type && entries[i].type !== 'unload') off(entries[i].element, entries[i].type)
      }
      win.detachEvent('onunload', cleanup)
      win.CollectGarbage && win.CollectGarbage()
    }
    win.attachEvent('onunload', cleanup)
  }

  // initialize selector engine to internal default (qSA or throw Error)
  setSelectorEngine()

  return bean
});
},{}],14:[function(require,module,exports){
/*!
  * Bonzo: DOM Utility (c) Dustin Diaz 2012
  * https://github.com/ded/bonzo
  * License MIT
  */
(function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(definition)
  else context[name] = definition()
})('bonzo', this, function() {
  var win = window
    , doc = win.document
    , html = doc.documentElement
    , parentNode = 'parentNode'
    , specialAttributes = /^(checked|value|selected|disabled)$/i
      // tags that we have trouble inserting *into*
    , specialTags = /^(select|fieldset|table|tbody|tfoot|td|tr|colgroup)$/i
    , simpleScriptTagRe = /\s*<script +src=['"]([^'"]+)['"]>/
    , table = ['<table>', '</table>', 1]
    , td = ['<table><tbody><tr>', '</tr></tbody></table>', 3]
    , option = ['<select>', '</select>', 1]
    , noscope = ['_', '', 0, 1]
    , tagMap = { // tags that we have trouble *inserting*
          thead: table, tbody: table, tfoot: table, colgroup: table, caption: table
        , tr: ['<table><tbody>', '</tbody></table>', 2]
        , th: td , td: td
        , col: ['<table><colgroup>', '</colgroup></table>', 2]
        , fieldset: ['<form>', '</form>', 1]
        , legend: ['<form><fieldset>', '</fieldset></form>', 2]
        , option: option, optgroup: option
        , script: noscope, style: noscope, link: noscope, param: noscope, base: noscope
      }
    , stateAttributes = /^(checked|selected|disabled)$/
    , ie = /msie/i.test(navigator.userAgent)
    , hasClass, addClass, removeClass
    , uidMap = {}
    , uuids = 0
    , digit = /^-?[\d\.]+$/
    , dattr = /^data-(.+)$/
    , px = 'px'
    , setAttribute = 'setAttribute'
    , getAttribute = 'getAttribute'
    , byTag = 'getElementsByTagName'
    , features = function() {
        var e = doc.createElement('p')
        e.innerHTML = '<a href="#x">x</a><table style="float:left;"></table>'
        return {
          hrefExtended: e[byTag]('a')[0][getAttribute]('href') != '#x' // IE < 8
        , autoTbody: e[byTag]('tbody').length !== 0 // IE < 8
        , computedStyle: doc.defaultView && doc.defaultView.getComputedStyle
        , cssFloat: e[byTag]('table')[0].style.styleFloat ? 'styleFloat' : 'cssFloat'
        , transform: function () {
            var props = ['transform', 'webkitTransform', 'MozTransform', 'OTransform', 'msTransform'], i
            for (i = 0; i < props.length; i++) {
              if (props[i] in e.style) return props[i]
            }
          }()
        , classList: 'classList' in e
        , opasity: function () {
            return typeof doc.createElement('a').style.opacity !== 'undefined'
          }()
        }
      }()
    , trimReplace = /(^\s*|\s*$)/g
    , whitespaceRegex = /\s+/
    , toString = String.prototype.toString
    , unitless = { lineHeight: 1, zoom: 1, zIndex: 1, opacity: 1, boxFlex: 1, WebkitBoxFlex: 1, MozBoxFlex: 1 }
    , query = doc.querySelectorAll && function (selector) { return doc.querySelectorAll(selector) }
    , trim = String.prototype.trim ?
        function (s) {
          return s.trim()
        } :
        function (s) {
          return s.replace(trimReplace, '')
        }

    , getStyle = features.computedStyle
        ? function (el, property) {
            var value = null
              , computed = doc.defaultView.getComputedStyle(el, '')
            computed && (value = computed[property])
            return el.style[property] || value
          }
        : !(ie && html.currentStyle)
          ? function (el, property) {
              return el.style[property]
            }
          :
          /**
           * @param {Element} el
           * @param {string} property
           * @return {string|number}
           */
          function (el, property) {
            var val, value
            if (property == 'opacity' && !features.opasity) {
              val = 100
              try {
                val = el['filters']['DXImageTransform.Microsoft.Alpha'].opacity
              } catch (e1) {
                try {
                  val = el['filters']('alpha').opacity
                } catch (e2) {}
              }
              return val / 100
            }
            value = el.currentStyle ? el.currentStyle[property] : null
            return el.style[property] || value
          }

  function isNode(node) {
    return node && node.nodeName && (node.nodeType == 1 || node.nodeType == 11)
  }


  function normalize(node, host, clone) {
    var i, l, ret
    if (typeof node == 'string') return bonzo.create(node)
    if (isNode(node)) node = [ node ]
    if (clone) {
      ret = [] // don't change original array
      for (i = 0, l = node.length; i < l; i++) ret[i] = cloneNode(host, node[i])
      return ret
    }
    return node
  }

  /**
   * @param {string} c a class name to test
   * @return {boolean}
   */
  function classReg(c) {
    return new RegExp('(^|\\s+)' + c + '(\\s+|$)')
  }


  /**
   * @param {Bonzo|Array} ar
   * @param {function(Object, number, (Bonzo|Array))} fn
   * @param {Object=} opt_scope
   * @param {boolean=} opt_rev
   * @return {Bonzo|Array}
   */
  function each(ar, fn, opt_scope, opt_rev) {
    var ind, i = 0, l = ar.length
    for (; i < l; i++) {
      ind = opt_rev ? ar.length - i - 1 : i
      fn.call(opt_scope || ar[ind], ar[ind], ind, ar)
    }
    return ar
  }


  /**
   * @param {Bonzo|Array} ar
   * @param {function(Object, number, (Bonzo|Array))} fn
   * @param {Object=} opt_scope
   * @return {Bonzo|Array}
   */
  function deepEach(ar, fn, opt_scope) {
    for (var i = 0, l = ar.length; i < l; i++) {
      if (isNode(ar[i])) {
        deepEach(ar[i].childNodes, fn, opt_scope)
        fn.call(opt_scope || ar[i], ar[i], i, ar)
      }
    }
    return ar
  }


  /**
   * @param {string} s
   * @return {string}
   */
  function camelize(s) {
    return s.replace(/-(.)/g, function (m, m1) {
      return m1.toUpperCase()
    })
  }


  /**
   * @param {string} s
   * @return {string}
   */
  function decamelize(s) {
    return s ? s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() : s
  }


  /**
   * @param {Element} el
   * @return {*}
   */
  function data(el) {
    el[getAttribute]('data-node-uid') || el[setAttribute]('data-node-uid', ++uuids)
    var uid = el[getAttribute]('data-node-uid')
    return uidMap[uid] || (uidMap[uid] = {})
  }


  /**
   * removes the data associated with an element
   * @param {Element} el
   */
  function clearData(el) {
    var uid = el[getAttribute]('data-node-uid')
    if (uid) delete uidMap[uid]
  }


  function dataValue(d) {
    var f
    try {
      return (d === null || d === undefined) ? undefined :
        d === 'true' ? true :
          d === 'false' ? false :
            d === 'null' ? null :
              (f = parseFloat(d)) == d ? f : d;
    } catch(e) {}
    return undefined
  }


  /**
   * @param {Bonzo|Array} ar
   * @param {function(Object, number, (Bonzo|Array))} fn
   * @param {Object=} opt_scope
   * @return {boolean} whether `some`thing was found
   */
  function some(ar, fn, opt_scope) {
    for (var i = 0, j = ar.length; i < j; ++i) if (fn.call(opt_scope || null, ar[i], i, ar)) return true
    return false
  }


  /**
   * this could be a giant enum of CSS properties
   * but in favor of file size sans-closure deadcode optimizations
   * we're just asking for any ol string
   * then it gets transformed into the appropriate style property for JS access
   * @param {string} p
   * @return {string}
   */
  function styleProperty(p) {
      (p == 'transform' && (p = features.transform)) ||
        (/^transform-?[Oo]rigin$/.test(p) && (p = features.transform + 'Origin')) ||
        (p == 'float' && (p = features.cssFloat))
      return p ? camelize(p) : null
  }

  // this insert method is intense
  function insert(target, host, fn, rev) {
    var i = 0, self = host || this, r = []
      // target nodes could be a css selector if it's a string and a selector engine is present
      // otherwise, just use target
      , nodes = query && typeof target == 'string' && target.charAt(0) != '<' ? query(target) : target
    // normalize each node in case it's still a string and we need to create nodes on the fly
    each(normalize(nodes), function (t, j) {
      each(self, function (el) {
        fn(t, r[i++] = j > 0 ? cloneNode(self, el) : el)
      }, null, rev)
    }, this, rev)
    self.length = i
    each(r, function (e) {
      self[--i] = e
    }, null, !rev)
    return self
  }


  /**
   * sets an element to an explicit x/y position on the page
   * @param {Element} el
   * @param {?number} x
   * @param {?number} y
   */
  function xy(el, x, y) {
    var $el = bonzo(el)
      , style = $el.css('position')
      , offset = $el.offset()
      , rel = 'relative'
      , isRel = style == rel
      , delta = [parseInt($el.css('left'), 10), parseInt($el.css('top'), 10)]

    if (style == 'static') {
      $el.css('position', rel)
      style = rel
    }

    isNaN(delta[0]) && (delta[0] = isRel ? 0 : el.offsetLeft)
    isNaN(delta[1]) && (delta[1] = isRel ? 0 : el.offsetTop)

    x != null && (el.style.left = x - offset.left + delta[0] + px)
    y != null && (el.style.top = y - offset.top + delta[1] + px)

  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  if (features.classList) {
    hasClass = function (el, c) {
      return el.classList.contains(c)
    }
    addClass = function (el, c) {
      el.classList.add(c)
    }
    removeClass = function (el, c) {
      el.classList.remove(c)
    }
  }
  else {
    hasClass = function (el, c) {
      return classReg(c).test(el.className)
    }
    addClass = function (el, c) {
      el.className = trim(el.className + ' ' + c)
    }
    removeClass = function (el, c) {
      el.className = trim(el.className.replace(classReg(c), ' '))
    }
  }


  /**
   * this allows method calling for setting values
   *
   * @example
   * bonzo(elements).css('color', function (el) {
   *   return el.getAttribute('data-original-color')
   * })
   *
   * @param {Element} el
   * @param {function (Element)|string}
   * @return {string}
   */
  function setter(el, v) {
    return typeof v == 'function' ? v(el) : v
  }

  function scroll(x, y, type) {
    var el = this[0]
    if (!el) return this
    if (x == null && y == null) {
      return (isBody(el) ? getWindowScroll() : { x: el.scrollLeft, y: el.scrollTop })[type]
    }
    if (isBody(el)) {
      win.scrollTo(x, y)
    } else {
      x != null && (el.scrollLeft = x)
      y != null && (el.scrollTop = y)
    }
    return this
  }

  /**
   * @constructor
   * @param {Array.<Element>|Element|Node|string} elements
   */
  function Bonzo(elements) {
    this.length = 0
    if (elements) {
      elements = typeof elements !== 'string' &&
        !elements.nodeType &&
        typeof elements.length !== 'undefined' ?
          elements :
          [elements]
      this.length = elements.length
      for (var i = 0; i < elements.length; i++) this[i] = elements[i]
    }
  }

  Bonzo.prototype = {

      /**
       * @param {number} index
       * @return {Element|Node}
       */
      get: function (index) {
        return this[index] || null
      }

      // itetators
      /**
       * @param {function(Element|Node)} fn
       * @param {Object=} opt_scope
       * @return {Bonzo}
       */
    , each: function (fn, opt_scope) {
        return each(this, fn, opt_scope)
      }

      /**
       * @param {Function} fn
       * @param {Object=} opt_scope
       * @return {Bonzo}
       */
    , deepEach: function (fn, opt_scope) {
        return deepEach(this, fn, opt_scope)
      }


      /**
       * @param {Function} fn
       * @param {Function=} opt_reject
       * @return {Array}
       */
    , map: function (fn, opt_reject) {
        var m = [], n, i
        for (i = 0; i < this.length; i++) {
          n = fn.call(this, this[i], i)
          opt_reject ? (opt_reject(n) && m.push(n)) : m.push(n)
        }
        return m
      }

    // text and html inserters!

    /**
     * @param {string} h the HTML to insert
     * @param {boolean=} opt_text whether to set or get text content
     * @return {Bonzo|string}
     */
    , html: function (h, opt_text) {
        var method = opt_text
              ? html.textContent === undefined ? 'innerText' : 'textContent'
              : 'innerHTML'
          , that = this
          , append = function (el, i) {
              each(normalize(h, that, i), function (node) {
                el.appendChild(node)
              })
            }
          , updateElement = function (el, i) {
              try {
                if (opt_text || (typeof h == 'string' && !specialTags.test(el.tagName))) {
                  return el[method] = h
                }
              } catch (e) {}
              append(el, i)
            }
        return typeof h != 'undefined'
          ? this.empty().each(updateElement)
          : this[0] ? this[0][method] : ''
      }

      /**
       * @param {string=} opt_text the text to set, otherwise this is a getter
       * @return {Bonzo|string}
       */
    , text: function (opt_text) {
        return this.html(opt_text, true)
      }

      // more related insertion methods

      /**
       * @param {Bonzo|string|Element|Array} node
       * @return {Bonzo}
       */
    , append: function (node) {
        var that = this
        return this.each(function (el, i) {
          each(normalize(node, that, i), function (i) {
            el.appendChild(i)
          })
        })
      }


      /**
       * @param {Bonzo|string|Element|Array} node
       * @return {Bonzo}
       */
    , prepend: function (node) {
        var that = this
        return this.each(function (el, i) {
          var first = el.firstChild
          each(normalize(node, that, i), function (i) {
            el.insertBefore(i, first)
          })
        })
      }


      /**
       * @param {Bonzo|string|Element|Array} target the location for which you'll insert your new content
       * @param {Object=} opt_host an optional host scope (primarily used when integrated with Ender)
       * @return {Bonzo}
       */
    , appendTo: function (target, opt_host) {
        return insert.call(this, target, opt_host, function (t, el) {
          t.appendChild(el)
        })
      }


      /**
       * @param {Bonzo|string|Element|Array} target the location for which you'll insert your new content
       * @param {Object=} opt_host an optional host scope (primarily used when integrated with Ender)
       * @return {Bonzo}
       */
    , prependTo: function (target, opt_host) {
        return insert.call(this, target, opt_host, function (t, el) {
          t.insertBefore(el, t.firstChild)
        }, 1)
      }


      /**
       * @param {Bonzo|string|Element|Array} node
       * @return {Bonzo}
       */
    , before: function (node) {
        var that = this
        return this.each(function (el, i) {
          each(normalize(node, that, i), function (i) {
            el[parentNode].insertBefore(i, el)
          })
        })
      }


      /**
       * @param {Bonzo|string|Element|Array} node
       * @return {Bonzo}
       */
    , after: function (node) {
        var that = this
        return this.each(function (el, i) {
          each(normalize(node, that, i), function (i) {
            el[parentNode].insertBefore(i, el.nextSibling)
          }, null, 1)
        })
      }


      /**
       * @param {Bonzo|string|Element|Array} target the location for which you'll insert your new content
       * @param {Object=} opt_host an optional host scope (primarily used when integrated with Ender)
       * @return {Bonzo}
       */
    , insertBefore: function (target, opt_host) {
        return insert.call(this, target, opt_host, function (t, el) {
          t[parentNode].insertBefore(el, t)
        })
      }


      /**
       * @param {Bonzo|string|Element|Array} target the location for which you'll insert your new content
       * @param {Object=} opt_host an optional host scope (primarily used when integrated with Ender)
       * @return {Bonzo}
       */
    , insertAfter: function (target, opt_host) {
        return insert.call(this, target, opt_host, function (t, el) {
          var sibling = t.nextSibling
          sibling ?
            t[parentNode].insertBefore(el, sibling) :
            t[parentNode].appendChild(el)
        }, 1)
      }


      /**
       * @param {Bonzo|string|Element|Array} node
       * @return {Bonzo}
       */
    , replaceWith: function (node) {
        bonzo(normalize(node)).insertAfter(this)
        return this.remove()
      }

      /**
       * @param {Object=} opt_host an optional host scope (primarily used when integrated with Ender)
       * @return {Bonzo}
       */
    , clone: function (opt_host) {
        var ret = [] // don't change original array
          , l, i
        for (i = 0, l = this.length; i < l; i++) ret[i] = cloneNode(opt_host || this, this[i])
        return bonzo(ret)
      }

      // class management

      /**
       * @param {string} c
       * @return {Bonzo}
       */
    , addClass: function (c) {
        c = toString.call(c).split(whitespaceRegex)
        return this.each(function (el) {
          // we `each` here so you can do $el.addClass('foo bar')
          each(c, function (c) {
            if (c && !hasClass(el, setter(el, c)))
              addClass(el, setter(el, c))
          })
        })
      }


      /**
       * @param {string} c
       * @return {Bonzo}
       */
    , removeClass: function (c) {
        c = toString.call(c).split(whitespaceRegex)
        return this.each(function (el) {
          each(c, function (c) {
            if (c && hasClass(el, setter(el, c)))
              removeClass(el, setter(el, c))
          })
        })
      }


      /**
       * @param {string} c
       * @return {boolean}
       */
    , hasClass: function (c) {
        c = toString.call(c).split(whitespaceRegex)
        return some(this, function (el) {
          return some(c, function (c) {
            return c && hasClass(el, c)
          })
        })
      }


      /**
       * @param {string} c classname to toggle
       * @param {boolean=} opt_condition whether to add or remove the class straight away
       * @return {Bonzo}
       */
    , toggleClass: function (c, opt_condition) {
        c = toString.call(c).split(whitespaceRegex)
        return this.each(function (el) {
          each(c, function (c) {
            if (c) {
              typeof opt_condition !== 'undefined' ?
                opt_condition ? !hasClass(el, c) && addClass(el, c) : removeClass(el, c) :
                hasClass(el, c) ? removeClass(el, c) : addClass(el, c)
            }
          })
        })
      }

      // display togglers

      /**
       * @param {string=} opt_type useful to set back to anything other than an empty string
       * @return {Bonzo}
       */
    , show: function (opt_type) {
        opt_type = typeof opt_type == 'string' ? opt_type : ''
        return this.each(function (el) {
          el.style.display = opt_type
        })
      }


      /**
       * @return {Bonzo}
       */
    , hide: function () {
        return this.each(function (el) {
          el.style.display = 'none'
        })
      }


      /**
       * @param {Function=} opt_callback
       * @param {string=} opt_type
       * @return {Bonzo}
       */
    , toggle: function (opt_callback, opt_type) {
        opt_type = typeof opt_type == 'string' ? opt_type : '';
        typeof opt_callback != 'function' && (opt_callback = null)
        return this.each(function (el) {
          el.style.display = (el.offsetWidth || el.offsetHeight) ? 'none' : opt_type;
          opt_callback && opt_callback.call(el)
        })
      }


      // DOM Walkers & getters

      /**
       * @return {Element|Node}
       */
    , first: function () {
        return bonzo(this.length ? this[0] : [])
      }


      /**
       * @return {Element|Node}
       */
    , last: function () {
        return bonzo(this.length ? this[this.length - 1] : [])
      }


      /**
       * @return {Element|Node}
       */
    , next: function () {
        return this.related('nextSibling')
      }


      /**
       * @return {Element|Node}
       */
    , previous: function () {
        return this.related('previousSibling')
      }


      /**
       * @return {Element|Node}
       */
    , parent: function() {
        return this.related(parentNode)
      }


      /**
       * @private
       * @param {string} method the directional DOM method
       * @return {Element|Node}
       */
    , related: function (method) {
        return bonzo(this.map(
          function (el) {
            el = el[method]
            while (el && el.nodeType !== 1) {
              el = el[method]
            }
            return el || 0
          },
          function (el) {
            return el
          }
        ))
      }


      /**
       * @return {Bonzo}
       */
    , focus: function () {
        this.length && this[0].focus()
        return this
      }


      /**
       * @return {Bonzo}
       */
    , blur: function () {
        this.length && this[0].blur()
        return this
      }

      // style getter setter & related methods

      /**
       * @param {Object|string} o
       * @param {string=} opt_v
       * @return {Bonzo|string}
       */
    , css: function (o, opt_v) {
        var p, iter = o
        // is this a request for just getting a style?
        if (opt_v === undefined && typeof o == 'string') {
          // repurpose 'v'
          opt_v = this[0]
          if (!opt_v) return null
          if (opt_v === doc || opt_v === win) {
            p = (opt_v === doc) ? bonzo.doc() : bonzo.viewport()
            return o == 'width' ? p.width : o == 'height' ? p.height : ''
          }
          return (o = styleProperty(o)) ? getStyle(opt_v, o) : null
        }

        if (typeof o == 'string') {
          iter = {}
          iter[o] = opt_v
        }

        if (!features.opasity && 'opacity' in iter) {
          // oh this 'ol gamut
          iter.filter = iter.opacity != null && iter.opacity !== ''
            ? 'alpha(opacity=' + (iter.opacity * 100) + ')'
            : ''
          // give it layout
          iter.zoom = o.zoom || 1
          ;delete iter.opacity
        }

        function fn(el, p, v) {
          for (var k in iter) {
            if (iter.hasOwnProperty(k)) {
              v = iter[k];
              // change "5" to "5px" - unless you're line-height, which is allowed
              (p = styleProperty(k)) && digit.test(v) && !(p in unitless) && (v += px)
              try { el.style[p] = setter(el, v) } catch(e) {}
            }
          }
        }
        return this.each(fn)
      }


      /**
       * @param {number=} opt_x
       * @param {number=} opt_y
       * @return {Bonzo|number}
       */
    , offset: function (opt_x, opt_y) {
        if (opt_x && typeof opt_x == 'object' && (typeof opt_x.top == 'number' || typeof opt_x.left == 'number')) {
          return this.each(function (el) {
            xy(el, opt_x.left, opt_x.top)
          })
        } else if (typeof opt_x == 'number' || typeof opt_y == 'number') {
          return this.each(function (el) {
            xy(el, opt_x, opt_y)
          })
        }
        if (!this[0]) return {
            top: 0
          , left: 0
          , height: 0
          , width: 0
        }
        var el = this[0]
          , de = el.ownerDocument.documentElement
          , bcr = el.getBoundingClientRect()
          , scroll = getWindowScroll()
          , width = el.offsetWidth
          , height = el.offsetHeight
          , top = bcr.top + scroll.y - Math.max(0, de && de.clientTop, doc.body.clientTop)
          , left = bcr.left + scroll.x - Math.max(0, de && de.clientLeft, doc.body.clientLeft)

        return {
            top: top
          , left: left
          , height: height
          , width: width
        }
      }


      /**
       * @return {number}
       */
    , dim: function () {
        if (!this.length) return { height: 0, width: 0 }
        var el = this[0]
          , de = el.nodeType == 9 && el.documentElement // document
          , orig = !de && !!el.style && !el.offsetWidth && !el.offsetHeight ?
             // el isn't visible, can't be measured properly, so fix that
             function (t) {
               var s = {
                   position: el.style.position || ''
                 , visibility: el.style.visibility || ''
                 , display: el.style.display || ''
               }
               t.first().css({
                   position: 'absolute'
                 , visibility: 'hidden'
                 , display: 'block'
               })
               return s
            }(this) : null
          , width = de
              ? Math.max(el.body.scrollWidth, el.body.offsetWidth, de.scrollWidth, de.offsetWidth, de.clientWidth)
              : el.offsetWidth
          , height = de
              ? Math.max(el.body.scrollHeight, el.body.offsetHeight, de.scrollHeight, de.offsetHeight, de.clientHeight)
              : el.offsetHeight

        orig && this.first().css(orig)
        return {
            height: height
          , width: width
        }
      }

      // attributes are hard. go shopping

      /**
       * @param {string} k an attribute to get or set
       * @param {string=} opt_v the value to set
       * @return {Bonzo|string}
       */
    , attr: function (k, opt_v) {
        var el = this[0]
          , n

        if (typeof k != 'string' && !(k instanceof String)) {
          for (n in k) {
            k.hasOwnProperty(n) && this.attr(n, k[n])
          }
          return this
        }

        return typeof opt_v == 'undefined' ?
          !el ? null : specialAttributes.test(k) ?
            stateAttributes.test(k) && typeof el[k] == 'string' ?
              true : el[k] : (k == 'href' || k =='src') && features.hrefExtended ?
                el[getAttribute](k, 2) : el[getAttribute](k) :
          this.each(function (el) {
            specialAttributes.test(k) ? (el[k] = setter(el, opt_v)) : el[setAttribute](k, setter(el, opt_v))
          })
      }


      /**
       * @param {string} k
       * @return {Bonzo}
       */
    , removeAttr: function (k) {
        return this.each(function (el) {
          stateAttributes.test(k) ? (el[k] = false) : el.removeAttribute(k)
        })
      }


      /**
       * @param {string=} opt_s
       * @return {Bonzo|string}
       */
    , val: function (s) {
        return (typeof s == 'string' || typeof s == 'number') ?
          this.attr('value', s) :
          this.length ? this[0].value : null
      }

      // use with care and knowledge. this data() method uses data attributes on the DOM nodes
      // to do this differently costs a lot more code. c'est la vie
      /**
       * @param {string|Object=} opt_k the key for which to get or set data
       * @param {Object=} opt_v
       * @return {Bonzo|Object}
       */
    , data: function (opt_k, opt_v) {
        var el = this[0], o, m
        if (typeof opt_v === 'undefined') {
          if (!el) return null
          o = data(el)
          if (typeof opt_k === 'undefined') {
            each(el.attributes, function (a) {
              (m = ('' + a.name).match(dattr)) && (o[camelize(m[1])] = dataValue(a.value))
            })
            return o
          } else {
            if (typeof o[opt_k] === 'undefined')
              o[opt_k] = dataValue(this.attr('data-' + decamelize(opt_k)))
            return o[opt_k]
          }
        } else {
          return this.each(function (el) { data(el)[opt_k] = opt_v })
        }
      }

      // DOM detachment & related

      /**
       * @return {Bonzo}
       */
    , remove: function () {
        this.deepEach(clearData)
        return this.detach()
      }


      /**
       * @return {Bonzo}
       */
    , empty: function () {
        return this.each(function (el) {
          deepEach(el.childNodes, clearData)

          while (el.firstChild) {
            el.removeChild(el.firstChild)
          }
        })
      }


      /**
       * @return {Bonzo}
       */
    , detach: function () {
        return this.each(function (el) {
          el[parentNode] && el[parentNode].removeChild(el)
        })
      }

      // who uses a mouse anyway? oh right.

      /**
       * @param {number} y
       */
    , scrollTop: function (y) {
        return scroll.call(this, null, y, 'y')
      }


      /**
       * @param {number} x
       */
    , scrollLeft: function (x) {
        return scroll.call(this, x, null, 'x')
      }

  }


  function cloneNode(host, el) {
    var c = el.cloneNode(true)
      , cloneElems
      , elElems
      , i

    // check for existence of an event cloner
    // preferably https://github.com/fat/bean
    // otherwise Bonzo won't do this for you
    if (host.$ && typeof host.cloneEvents == 'function') {
      host.$(c).cloneEvents(el)

      // clone events from every child node
      cloneElems = host.$(c).find('*')
      elElems = host.$(el).find('*')

      for (i = 0; i < elElems.length; i++)
        host.$(cloneElems[i]).cloneEvents(elElems[i])
    }
    return c
  }

  function isBody(element) {
    return element === win || (/^(?:body|html)$/i).test(element.tagName)
  }

  function getWindowScroll() {
    return { x: win.pageXOffset || html.scrollLeft, y: win.pageYOffset || html.scrollTop }
  }

  function createScriptFromHtml(html) {
    var scriptEl = document.createElement('script')
      , matches = html.match(simpleScriptTagRe)
    scriptEl.src = matches[1]
    return scriptEl
  }

  /**
   * @param {Array.<Element>|Element|Node|string} els
   * @return {Bonzo}
   */
  function bonzo(els) {
    return new Bonzo(els)
  }

  bonzo.setQueryEngine = function (q) {
    query = q;
    delete bonzo.setQueryEngine
  }

  bonzo.aug = function (o, target) {
    // for those standalone bonzo users. this love is for you.
    for (var k in o) {
      o.hasOwnProperty(k) && ((target || Bonzo.prototype)[k] = o[k])
    }
  }

  bonzo.create = function (node) {
    // hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    return typeof node == 'string' && node !== '' ?
      function () {
        if (simpleScriptTagRe.test(node)) return [createScriptFromHtml(node)]
        var tag = node.match(/^\s*<([^\s>]+)/)
          , el = doc.createElement('div')
          , els = []
          , p = tag ? tagMap[tag[1].toLowerCase()] : null
          , dep = p ? p[2] + 1 : 1
          , ns = p && p[3]
          , pn = parentNode
          , tb = features.autoTbody && p && p[0] == '<table>' && !(/<tbody/i).test(node)

        el.innerHTML = p ? (p[0] + node + p[1]) : node
        while (dep--) el = el.firstChild
        // for IE NoScope, we may insert cruft at the begining just to get it to work
        if (ns && el && el.nodeType !== 1) el = el.nextSibling
        do {
          // tbody special case for IE<8, creates tbody on any empty table
          // we don't want it if we're just after a <thead>, <caption>, etc.
          if ((!tag || el.nodeType == 1) && (!tb || (el.tagName && el.tagName != 'TBODY'))) {
            els.push(el)
          }
        } while (el = el.nextSibling)
        // IE < 9 gives us a parentNode which messes up insert() check for cloning
        // `dep` > 1 can also cause problems with the insert() check (must do this last)
        each(els, function(el) { el[pn] && el[pn].removeChild(el) })
        return els
      }() : isNode(node) ? [node.cloneNode(true)] : []
  }

  bonzo.doc = function () {
    var vp = bonzo.viewport()
    return {
        width: Math.max(doc.body.scrollWidth, html.scrollWidth, vp.width)
      , height: Math.max(doc.body.scrollHeight, html.scrollHeight, vp.height)
    }
  }

  bonzo.firstChild = function (el) {
    for (var c = el.childNodes, i = 0, j = (c && c.length) || 0, e; i < j; i++) {
      if (c[i].nodeType === 1) e = c[j = i]
    }
    return e
  }

  bonzo.viewport = function () {
    return {
        width: ie ? html.clientWidth : self.innerWidth
      , height: ie ? html.clientHeight : self.innerHeight
    }
  }

  bonzo.isAncestor = 'compareDocumentPosition' in html ?
    function (container, element) {
      return (container.compareDocumentPosition(element) & 16) == 16
    } : 'contains' in html ?
    function (container, element) {
      return container !== element && container.contains(element);
    } :
    function (container, element) {
      while (element = element[parentNode]) {
        if (element === container) {
          return true
        }
      }
      return false
    }

  return bonzo
}); // the only line we care about using a semi-colon. placed here for concatenation tools

},{}],15:[function(require,module,exports){

// not implemented
// The reason for having an empty file and not throwing is to allow
// untraditional implementation of this module.

},{}],16:[function(require,module,exports){
var inserted = [];

module.exports = function (css) {
    if (inserted.indexOf(css) >= 0) return;
    inserted.push(css);
    
    var elem = document.createElement('style');
    var text = document.createTextNode(css);
    elem.appendChild(text);
    
    if (document.head.childNodes.length) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
    }
    else {
        document.head.appendChild(elem);
    }
};

},{}],17:[function(require,module,exports){
/*!
  * @preserve Qwery - A Blazing Fast query selector engine
  * https://github.com/ded/qwery
  * copyright Dustin Diaz 2012
  * MIT License
  */

(function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(definition)
  else context[name] = definition()
})('qwery', this, function () {
  var doc = document
    , html = doc.documentElement
    , byClass = 'getElementsByClassName'
    , byTag = 'getElementsByTagName'
    , qSA = 'querySelectorAll'
    , useNativeQSA = 'useNativeQSA'
    , tagName = 'tagName'
    , nodeType = 'nodeType'
    , select // main select() method, assign later

    , id = /#([\w\-]+)/
    , clas = /\.[\w\-]+/g
    , idOnly = /^#([\w\-]+)$/
    , classOnly = /^\.([\w\-]+)$/
    , tagOnly = /^([\w\-]+)$/
    , tagAndOrClass = /^([\w]+)?\.([\w\-]+)$/
    , splittable = /(^|,)\s*[>~+]/
    , normalizr = /^\s+|\s*([,\s\+\~>]|$)\s*/g
    , splitters = /[\s\>\+\~]/
    , splittersMore = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/
    , specialChars = /([.*+?\^=!:${}()|\[\]\/\\])/g
    , simple = /^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/
    , attr = /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/
    , pseudo = /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/
    , easy = new RegExp(idOnly.source + '|' + tagOnly.source + '|' + classOnly.source)
    , dividers = new RegExp('(' + splitters.source + ')' + splittersMore.source, 'g')
    , tokenizr = new RegExp(splitters.source + splittersMore.source)
    , chunker = new RegExp(simple.source + '(' + attr.source + ')?' + '(' + pseudo.source + ')?')

  var walker = {
      ' ': function (node) {
        return node && node !== html && node.parentNode
      }
    , '>': function (node, contestant) {
        return node && node.parentNode == contestant.parentNode && node.parentNode
      }
    , '~': function (node) {
        return node && node.previousSibling
      }
    , '+': function (node, contestant, p1, p2) {
        if (!node) return false
        return (p1 = previous(node)) && (p2 = previous(contestant)) && p1 == p2 && p1
      }
    }

  function cache() {
    this.c = {}
  }
  cache.prototype = {
    g: function (k) {
      return this.c[k] || undefined
    }
  , s: function (k, v, r) {
      v = r ? new RegExp(v) : v
      return (this.c[k] = v)
    }
  }

  var classCache = new cache()
    , cleanCache = new cache()
    , attrCache = new cache()
    , tokenCache = new cache()

  function classRegex(c) {
    return classCache.g(c) || classCache.s(c, '(^|\\s+)' + c + '(\\s+|$)', 1)
  }

  // not quite as fast as inline loops in older browsers so don't use liberally
  function each(a, fn) {
    var i = 0, l = a.length
    for (; i < l; i++) fn(a[i])
  }

  function flatten(ar) {
    for (var r = [], i = 0, l = ar.length; i < l; ++i) arrayLike(ar[i]) ? (r = r.concat(ar[i])) : (r[r.length] = ar[i])
    return r
  }

  function arrayify(ar) {
    var i = 0, l = ar.length, r = []
    for (; i < l; i++) r[i] = ar[i]
    return r
  }

  function previous(n) {
    while (n = n.previousSibling) if (n[nodeType] == 1) break;
    return n
  }

  function q(query) {
    return query.match(chunker)
  }

  // called using `this` as element and arguments from regex group results.
  // given => div.hello[title="world"]:foo('bar')
  // div.hello[title="world"]:foo('bar'), div, .hello, [title="world"], title, =, world, :foo('bar'), foo, ('bar'), bar]
  function interpret(whole, tag, idsAndClasses, wholeAttribute, attribute, qualifier, value, wholePseudo, pseudo, wholePseudoVal, pseudoVal) {
    var i, m, k, o, classes
    if (this[nodeType] !== 1) return false
    if (tag && tag !== '*' && this[tagName] && this[tagName].toLowerCase() !== tag) return false
    if (idsAndClasses && (m = idsAndClasses.match(id)) && m[1] !== this.id) return false
    if (idsAndClasses && (classes = idsAndClasses.match(clas))) {
      for (i = classes.length; i--;) if (!classRegex(classes[i].slice(1)).test(this.className)) return false
    }
    if (pseudo && qwery.pseudos[pseudo] && !qwery.pseudos[pseudo](this, pseudoVal)) return false
    if (wholeAttribute && !value) { // select is just for existance of attrib
      o = this.attributes
      for (k in o) {
        if (Object.prototype.hasOwnProperty.call(o, k) && (o[k].name || k) == attribute) {
          return this
        }
      }
    }
    if (wholeAttribute && !checkAttr(qualifier, getAttr(this, attribute) || '', value)) {
      // select is for attrib equality
      return false
    }
    return this
  }

  function clean(s) {
    return cleanCache.g(s) || cleanCache.s(s, s.replace(specialChars, '\\$1'))
  }

  function checkAttr(qualify, actual, val) {
    switch (qualify) {
    case '=':
      return actual == val
    case '^=':
      return actual.match(attrCache.g('^=' + val) || attrCache.s('^=' + val, '^' + clean(val), 1))
    case '$=':
      return actual.match(attrCache.g('$=' + val) || attrCache.s('$=' + val, clean(val) + '$', 1))
    case '*=':
      return actual.match(attrCache.g(val) || attrCache.s(val, clean(val), 1))
    case '~=':
      return actual.match(attrCache.g('~=' + val) || attrCache.s('~=' + val, '(?:^|\\s+)' + clean(val) + '(?:\\s+|$)', 1))
    case '|=':
      return actual.match(attrCache.g('|=' + val) || attrCache.s('|=' + val, '^' + clean(val) + '(-|$)', 1))
    }
    return 0
  }

  // given a selector, first check for simple cases then collect all base candidate matches and filter
  function _qwery(selector, _root) {
    var r = [], ret = [], i, l, m, token, tag, els, intr, item, root = _root
      , tokens = tokenCache.g(selector) || tokenCache.s(selector, selector.split(tokenizr))
      , dividedTokens = selector.match(dividers)

    if (!tokens.length) return r

    token = (tokens = tokens.slice(0)).pop() // copy cached tokens, take the last one
    if (tokens.length && (m = tokens[tokens.length - 1].match(idOnly))) root = byId(_root, m[1])
    if (!root) return r

    intr = q(token)
    // collect base candidates to filter
    els = root !== _root && root[nodeType] !== 9 && dividedTokens && /^[+~]$/.test(dividedTokens[dividedTokens.length - 1]) ?
      function (r) {
        while (root = root.nextSibling) {
          root[nodeType] == 1 && (intr[1] ? intr[1] == root[tagName].toLowerCase() : 1) && (r[r.length] = root)
        }
        return r
      }([]) :
      root[byTag](intr[1] || '*')
    // filter elements according to the right-most part of the selector
    for (i = 0, l = els.length; i < l; i++) {
      if (item = interpret.apply(els[i], intr)) r[r.length] = item
    }
    if (!tokens.length) return r

    // filter further according to the rest of the selector (the left side)
    each(r, function (e) { if (ancestorMatch(e, tokens, dividedTokens)) ret[ret.length] = e })
    return ret
  }

  // compare element to a selector
  function is(el, selector, root) {
    if (isNode(selector)) return el == selector
    if (arrayLike(selector)) return !!~flatten(selector).indexOf(el) // if selector is an array, is el a member?

    var selectors = selector.split(','), tokens, dividedTokens
    while (selector = selectors.pop()) {
      tokens = tokenCache.g(selector) || tokenCache.s(selector, selector.split(tokenizr))
      dividedTokens = selector.match(dividers)
      tokens = tokens.slice(0) // copy array
      if (interpret.apply(el, q(tokens.pop())) && (!tokens.length || ancestorMatch(el, tokens, dividedTokens, root))) {
        return true
      }
    }
    return false
  }

  // given elements matching the right-most part of a selector, filter out any that don't match the rest
  function ancestorMatch(el, tokens, dividedTokens, root) {
    var cand
    // recursively work backwards through the tokens and up the dom, covering all options
    function crawl(e, i, p) {
      while (p = walker[dividedTokens[i]](p, e)) {
        if (isNode(p) && (interpret.apply(p, q(tokens[i])))) {
          if (i) {
            if (cand = crawl(p, i - 1, p)) return cand
          } else return p
        }
      }
    }
    return (cand = crawl(el, tokens.length - 1, el)) && (!root || isAncestor(cand, root))
  }

  function isNode(el, t) {
    return el && typeof el === 'object' && (t = el[nodeType]) && (t == 1 || t == 9)
  }

  function uniq(ar) {
    var a = [], i, j;
    o:
    for (i = 0; i < ar.length; ++i) {
      for (j = 0; j < a.length; ++j) if (a[j] == ar[i]) continue o
      a[a.length] = ar[i]
    }
    return a
  }

  function arrayLike(o) {
    return (typeof o === 'object' && isFinite(o.length))
  }

  function normalizeRoot(root) {
    if (!root) return doc
    if (typeof root == 'string') return qwery(root)[0]
    if (!root[nodeType] && arrayLike(root)) return root[0]
    return root
  }

  function byId(root, id, el) {
    // if doc, query on it, else query the parent doc or if a detached fragment rewrite the query and run on the fragment
    return root[nodeType] === 9 ? root.getElementById(id) :
      root.ownerDocument &&
        (((el = root.ownerDocument.getElementById(id)) && isAncestor(el, root) && el) ||
          (!isAncestor(root, root.ownerDocument) && select('[id="' + id + '"]', root)[0]))
  }

  function qwery(selector, _root) {
    var m, el, root = normalizeRoot(_root)

    // easy, fast cases that we can dispatch with simple DOM calls
    if (!root || !selector) return []
    if (selector === window || isNode(selector)) {
      return !_root || (selector !== window && isNode(root) && isAncestor(selector, root)) ? [selector] : []
    }
    if (selector && arrayLike(selector)) return flatten(selector)
    if (m = selector.match(easy)) {
      if (m[1]) return (el = byId(root, m[1])) ? [el] : []
      if (m[2]) return arrayify(root[byTag](m[2]))
      if (hasByClass && m[3]) return arrayify(root[byClass](m[3]))
    }

    return select(selector, root)
  }

  // where the root is not document and a relationship selector is first we have to
  // do some awkward adjustments to get it to work, even with qSA
  function collectSelector(root, collector) {
    return function (s) {
      var oid, nid
      if (splittable.test(s)) {
        if (root[nodeType] !== 9) {
          // make sure the el has an id, rewrite the query, set root to doc and run it
          if (!(nid = oid = root.getAttribute('id'))) root.setAttribute('id', nid = '__qwerymeupscotty')
          s = '[id="' + nid + '"]' + s // avoid byId and allow us to match context element
          collector(root.parentNode || root, s, true)
          oid || root.removeAttribute('id')
        }
        return;
      }
      s.length && collector(root, s, false)
    }
  }

  var isAncestor = 'compareDocumentPosition' in html ?
    function (element, container) {
      return (container.compareDocumentPosition(element) & 16) == 16
    } : 'contains' in html ?
    function (element, container) {
      container = container[nodeType] === 9 || container == window ? html : container
      return container !== element && container.contains(element)
    } :
    function (element, container) {
      while (element = element.parentNode) if (element === container) return 1
      return 0
    }
  , getAttr = function () {
      // detect buggy IE src/href getAttribute() call
      var e = doc.createElement('p')
      return ((e.innerHTML = '<a href="#x">x</a>') && e.firstChild.getAttribute('href') != '#x') ?
        function (e, a) {
          return a === 'class' ? e.className : (a === 'href' || a === 'src') ?
            e.getAttribute(a, 2) : e.getAttribute(a)
        } :
        function (e, a) { return e.getAttribute(a) }
    }()
  , hasByClass = !!doc[byClass]
    // has native qSA support
  , hasQSA = doc.querySelector && doc[qSA]
    // use native qSA
  , selectQSA = function (selector, root) {
      var result = [], ss, e
      try {
        if (root[nodeType] === 9 || !splittable.test(selector)) {
          // most work is done right here, defer to qSA
          return arrayify(root[qSA](selector))
        }
        // special case where we need the services of `collectSelector()`
        each(ss = selector.split(','), collectSelector(root, function (ctx, s) {
          e = ctx[qSA](s)
          if (e.length == 1) result[result.length] = e.item(0)
          else if (e.length) result = result.concat(arrayify(e))
        }))
        return ss.length > 1 && result.length > 1 ? uniq(result) : result
      } catch (ex) { }
      return selectNonNative(selector, root)
    }
    // no native selector support
  , selectNonNative = function (selector, root) {
      var result = [], items, m, i, l, r, ss
      selector = selector.replace(normalizr, '$1')
      if (m = selector.match(tagAndOrClass)) {
        r = classRegex(m[2])
        items = root[byTag](m[1] || '*')
        for (i = 0, l = items.length; i < l; i++) {
          if (r.test(items[i].className)) result[result.length] = items[i]
        }
        return result
      }
      // more complex selector, get `_qwery()` to do the work for us
      each(ss = selector.split(','), collectSelector(root, function (ctx, s, rewrite) {
        r = _qwery(s, ctx)
        for (i = 0, l = r.length; i < l; i++) {
          if (ctx[nodeType] === 9 || rewrite || isAncestor(r[i], root)) result[result.length] = r[i]
        }
      }))
      return ss.length > 1 && result.length > 1 ? uniq(result) : result
    }
  , configure = function (options) {
      // configNativeQSA: use fully-internal selector or native qSA where present
      if (typeof options[useNativeQSA] !== 'undefined')
        select = !options[useNativeQSA] ? selectNonNative : hasQSA ? selectQSA : selectNonNative
    }

  configure({ useNativeQSA: true })

  qwery.configure = configure
  qwery.uniq = uniq
  qwery.is = is
  qwery.pseudos = {}

  return qwery
});

},{}],18:[function(require,module,exports){
module.exports = hasKeys

function hasKeys(source) {
    return source !== null &&
        (typeof source === "object" ||
        typeof source === "function")
}

},{}],19:[function(require,module,exports){
var Keys = require("object-keys")
var hasKeys = require("./has-keys")

module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        if (!hasKeys(source)) {
            continue
        }

        var keys = Keys(source)

        for (var j = 0; j < keys.length; j++) {
            var name = keys[j]
            target[name] = source[name]
        }
    }

    return target
}

},{"./has-keys":18,"object-keys":21}],20:[function(require,module,exports){
var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

var isFunction = function (fn) {
	var isFunc = (typeof fn === 'function' && !(fn instanceof RegExp)) || toString.call(fn) === '[object Function]';
	if (!isFunc && typeof window !== 'undefined') {
		isFunc = fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt;
	}
	return isFunc;
};

module.exports = function forEach(obj, fn) {
	if (!isFunction(fn)) {
		throw new TypeError('iterator must be a function');
	}
	var i, k,
		isString = typeof obj === 'string',
		l = obj.length,
		context = arguments.length > 2 ? arguments[2] : null;
	if (l === +l) {
		for (i = 0; i < l; i++) {
			if (context === null) {
				fn(isString ? obj.charAt(i) : obj[i], i, obj);
			} else {
				fn.call(context, isString ? obj.charAt(i) : obj[i], i, obj);
			}
		}
	} else {
		for (k in obj) {
			if (hasOwn.call(obj, k)) {
				if (context === null) {
					fn(obj[k], k, obj);
				} else {
					fn.call(context, obj[k], k, obj);
				}
			}
		}
	}
};


},{}],21:[function(require,module,exports){
module.exports = Object.keys || require('./shim');


},{"./shim":23}],22:[function(require,module,exports){
var toString = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toString.call(value);
	var isArguments = str === '[object Arguments]';
	if (!isArguments) {
		isArguments = str !== '[object Array]'
			&& value !== null
			&& typeof value === 'object'
			&& typeof value.length === 'number'
			&& value.length >= 0
			&& toString.call(value.callee) === '[object Function]';
	}
	return isArguments;
};


},{}],23:[function(require,module,exports){
(function () {
	"use strict";

	// modified from https://github.com/kriskowal/es5-shim
	var has = Object.prototype.hasOwnProperty,
		toString = Object.prototype.toString,
		forEach = require('./foreach'),
		isArgs = require('./isArguments'),
		hasDontEnumBug = !({'toString': null}).propertyIsEnumerable('toString'),
		hasProtoEnumBug = (function () {}).propertyIsEnumerable('prototype'),
		dontEnums = [
			"toString",
			"toLocaleString",
			"valueOf",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"constructor"
		],
		keysShim;

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object',
			isFunction = toString.call(object) === '[object Function]',
			isArguments = isArgs(object),
			theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError("Object.keys called on a non-object");
		}

		if (isArguments) {
			forEach(object, function (value) {
				theKeys.push(value);
			});
		} else {
			var name,
				skipProto = hasProtoEnumBug && isFunction;

			for (name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(name);
				}
			}
		}

		if (hasDontEnumBug) {
			var ctor = object.constructor,
				skipConstructor = ctor && ctor.prototype === object;

			forEach(dontEnums, function (dontEnum) {
				if (!(skipConstructor && dontEnum === 'constructor') && has.call(object, dontEnum)) {
					theKeys.push(dontEnum);
				}
			});
		}
		return theKeys;
	};

	module.exports = keysShim;
}());


},{"./foreach":20,"./isArguments":22}],24:[function(require,module,exports){
module.exports=(function() {var t = function anonymous(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<div class="mode signin">\n    <div class="popup">\n      	<div class="overlay">\n        	<div id="onestep" class="panel onestep">\n          		<header class="header">\n            		<div class="image" style="display: none">\n            			<img src="">\n            		</div>\n            		<h1>Sign In</h1>\n		            <h2 class="error" style="display: none">&nbsp;</h2>\n		            <h2 class="success" style="display: none">&nbsp;</h2>\n		            <a class="close">Close</a>\n          		</header>\n\n          		<div class="loggedin">\n		            <form>\n						<span class="centered last-time"></span>\n						<div class="strategy"></div>\n						<div class="emailPassword" style="display:none">\n							<div class="email">\n								<span class="email-readonly"></span>\n								<input name="email" type="email" value="" disabled placeholder="Email" title="Email" style="display:none">\n							</div>\n							<div class="password">\n								<input name="password" type="password" value="" autofocus placeholder="Password" title="Password">\n							</div>\n							<div class="action">\n								<button type="submit" class="zocial primary next" style="width: 100%;">Sign In</button>\n							  	<button type="submit" class="spinner" style="display: none"></button>\n							  	<label class="create-account"><a href="javascript: {}" class="forgot-pass">Forgot your password?</a></label>\n							</div>\n						</div>\n						<span class="centered all">Show all</span>\n		            </form>\n          		</div>\n\n	          	<div class="notloggedin">\n		            <form>\n		            	<div class="iconlist" style="display: none"><p style="display:none">... or sign in using</p></div>\n		              	<div class="separator" style="display: none"><span>or</span></div>\n		              	<div class="emailPassword">\n		                	<div class="email">\n		                  		<input name="email" id="signin_easy_email" type="email" required placeholder="Email" title="Email">\n		                	</div>\n		                	<div class="password" style="display:none">\n		                  		<input name="password" id="signin_easy_password" type="password" placeholder="Password" title="Password">\n		                	</div>\n			                <div class="action">\n			                  	<button type="submit" class="zocial primary next" style="width: 100%;">Sign In</button>\n			                  	<button type="submit" class="spinner" style="display: none"></button>\n			                  	<label class="create-account"><a href="javascript: {}" class="sign-up">Sign Up</a><span class="divider" style="display:none">&nbsp;•&nbsp;</span><a href="javascript: {}" class="forgot-pass">Forgot your password?</a></label>\n			                </div>\n		              	</div>\n		            </form>\n	          	</div>\n\n	          	<div class="signup">\n		            <form>\n		              	<div class="header"></div>\n		              	<div class="emailPassword">\n		                	<div class="email">\n		                  		<input name="email" id="signup_easy_email" type="email" value="" required placeholder="Email" title="Email">\n		                	</div>\n		                	<div class="password">\n		                  		<input name="password" id="signup_easy_password" type="password" value="" required placeholder="Create a Password" title="Password">\n		                	</div>\n			                <div class="action">\n			                  	<button type="submit" class="zocial primary next" style="width: 100%;">Sign Up</button>\n			                  	<button type="submit" class="spinner" style="display: none"></button>\n			                  	<div class="footer"></div>\n			                  	<div class="options">\n			                    	<a href="javascript: {}" class="centered cancel">Cancel</a>\n			                  	</div>\n			                </div>\n		              	</div>\n		            </form>\n	          	</div>\n\n				<div class="reset">\n					<form id="change_password">\n					  	<div class="header"></div>\n					  	<div class="emailPassword">\n					    	<div class="email">\n					      		<input name="email" id="reset_easy_email" type="email" value="" required placeholder="Email" title="Email">\n					    	</div>\n					    	<div class="password">\n					      		<input name="password" id="reset_easy_password" type="password" value="" required placeholder="New Password" title="New Password">\n					    	</div>\n					    	<div class="repeatPassword">\n					      		<input name="repeat_password" id="reset_easy_repeat_password" type="password" value="" required placeholder="Confirm New Password" title="Confirm New Password">\n					    	</div>\n					    	<div class="action">\n					      		<button type="submit" class="zocial primary next" style="width: 100%;">Send</button>\n					      		<button type="submit" class="spinner" style="display: none"></button>\n					      		<div class="options">\n					        		<a href="javascript: {}" class="centered cancel">Cancel</a>\n					      		</div>\n					    	</div>\n					  	</div>\n					</form>\n				</div>\n				\n          		<footer>\n            		<span>Powered by <a href="http://auth0.com" target="_new">Auth0</a></span>\n          		</footer>\n        	</div>\n      	</div>\n    </div>\n</div>\n'); })();
} 
return buf.join('');
}; return function(l) { return t(l) }}())
},{}],25:[function(require,module,exports){
var global=typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};var Auth0     = require('auth0-js');
var qwery     = require('qwery');
var bonzo     = require('bonzo');
var bean      = require('bean');
var xtend     = require('xtend');

var loginTmpl = require('./html/login.html');

var $ = function (selector, root) {
  return bonzo(qwery(selector, root));
};

function Auth0Widget (options) {
  if (!(this instanceof Auth0Widget)) {
    return new Auth0Widget(options);
  }

  this._options = options;
  this._auth0 = new Auth0({
    clientID:     this._options.clientID, 
    callbackURL:  this._options.callbackURL,
    domain:       this._options.domain
  });
  
  this._strategies = {
    'google-openid': { css: 'google', name: 'Google OpenId', social: true },
    'google-apps': { css: 'google', name: 'Google Apps', social: false },
    'google-oauth2': { css: 'googleplus', name: 'Google', social: true },
    'facebook': { css: 'facebook', name: 'Facebook', social: true },
    'windowslive': { css: 'windows', name: 'Microsoft Account', social: true },
    'linkedin': { css: 'linkedin', name: 'LinkedIn', social: true },
    'github': { css: 'github', name: 'GitHub', social: true },
    'paypal': { css: 'paypal', name: 'PayPal', social: true },
    'twitter': { css: 'twitter', name: 'Twitter', social: true },
    'amazon': { css: 'amazon', name: 'Amazon', social: true },
    'vkontakte': { css: 'vk', name: 'vKontakte', social: true },
    'yandex': { css: 'yandex', name: 'Yandex', social: true },
    'office365': { css: 'office365', name: 'Office365', social: false },
    'waad': { css: 'waad', name: 'Windows Azure AD', social: false },
    'adfs': { css: 'windows', name: 'ADFS', social: false },
    'samlp': { css: 'guest', name: 'SAML', social: false },
    'mscrm': { css: 'guest', name: 'Dynamics CRM', social: false },
    'ad': { css: 'windows', name: 'AD / LDAP', social: false },
    'custom': { css: 'guest', name: 'Custom Auth', social: false },
    'auth0': { css: 'guest', name: 'Auth0', social: false },
    'auth0-adldap': { css: 'guest', name: 'AD/LDAP', social: false },
    'thirtysevensignals': { css: 'thirtysevensignals', name: '37 Signals', social: true },
    'box': { css: 'box', name: 'Box', social: true, imageicon: true },
    'salesforce': { css: 'salesforce', name: 'Salesforce', social: true },
    'fitbit': { css: 'fitbit', name: 'Fitbit', social: true }
  };
}

// helper methods
Auth0Widget.prototype._redirect = function (url) {
  global.window.location = url;
};

Auth0Widget.prototype._setTop = function (onTop, element) {
  if (!onTop) {
    setTimeout(function() {
      element.css({
        'marginTop': '-' + (element.offset().height / 2) + 'px',
        'top': '50%'
      });
    }, 1);
  } else {
    element.css({
      'marginTop': '2px',
      'top': '0'
    });
  }
};

Auth0Widget.prototype._showError = function (error) {
  $('.signin h1').css('display', 'none');
  $('.signin .success').css('display', 'none');
  $('.signin .error').html(error).css('display', '');
};

Auth0Widget.prototype._showSuccess = function (message) {
  $('.signin h1').css('display', 'none');
  $('.signin .error').css('display', 'none');
  $('.signin .success').html(message).css('display', '');
};

Auth0Widget.prototype._isAuth0Conn = function (strategy) {
  return strategy === 'auth0' || strategy === 'auth0-adldap';
};

Auth0Widget.prototype._setTitle = function(title) {
  $('.signin .error').css('display', 'none');
  $('.signin .success').css('display', 'none');
  $('.signin h1').html(title).css('display', '');
};

Auth0Widget.prototype._isAdLdapConn = function (connection) {
  return connection === 'adldap';
};

Auth0Widget.prototype._areThereAnySocialConn = function () {
  for (var s in this._client.strategies) {
    if (this._strategies[this._client.strategies[s].name] && this._strategies[this._client.strategies[s].name].social) {
      return true;
    }
  }

  return false;
};

Auth0Widget.prototype._areThereAnyEnterpriseOrDbConn = function() {
  for (var s in this._client.strategies) {
    if (this._strategies[this._client.strategies[s].name] && 
        !this._strategies[this._client.strategies[s].name].social) {
      return true;
    }
  }

  return false;
};

Auth0Widget.prototype._isEnterpriseConnection = function (email, output) {
  var emailM = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    .exec(email.toLowerCase());

  for (var s in this._client.strategies) {
    var strategy = this._client.strategies[s];
    if (this._isAuth0Conn(strategy.name)) continue;

    for (var c in strategy.connections) {
      if (emailM && emailM.slice(-2)[0] == strategy.connections[c].domain) {
        output = output || {};
        output.domain = strategy.connections[c].domain;
        return true;
      }
    }
  }

  return false;
};

Auth0Widget.prototype._isEnterpriseStrategy = function (strategy) { 
  for (var s in this._strategies) {
    if (s === strategy && !this._strategies[s].social) { 
      return true; 
    } 
  } 

  return false; 
};

Auth0Widget.prototype._getConfiguredStrategy = function (name) {
  for (var s in this._client.strategies) {
    if (this._client.strategies[s] && this._client.strategies[s].name === name) {
      return this._client.strategies[s];
    }
  }
};

Auth0Widget.prototype._getAuth0Connection = function() {
  // if specified, use it, otherwise return first
  if (this._signinOptions['userPwdConnectionName']) {
    for (var i in this._auth0Strategy.connections) {
      if (this._auth0Strategy.connections[i].name === this._signinOptions['userPwdConnectionName']) {
        return this._auth0Strategy.connections[i];
      }
    }
  }

  return this._auth0Strategy ? this._auth0Strategy.connections[0] : null;
};

Auth0Widget.prototype._showOrHidePassword = function () {
  var mailField = $('.notloggedin .email input');
  var pwdField  = $('.notloggedin .password input').first();
  
  var isEnterpriseConnection = this._isEnterpriseConnection(mailField.val());

  if (isEnterpriseConnection) {
    pwdField.attr('disabled', true);
    pwdField.attr('placeholder', '');
    pwdField.removeAttr('required');
  } else {
    pwdField.removeAttr('disabled');
    pwdField.attr('required', true);
  }
};

Auth0Widget.prototype._hideSignIn = function (cb) {
  $('div.overlay').removeClass('active');
  setTimeout(function () {
    $('html').removeClass('mode-signin');
    if (cb) cb();
  }, 500);
};

Auth0Widget.prototype._getActiveLoginView = function() {
  var container = this._hasLoggedInBefore ? $('.loggedin') : $('.notloggedin');
  return container;
};

Auth0Widget.prototype._toggleSpinner = function (container) {
  container = container || this._getActiveLoginView();
  var spinner = $('.spinner', container);
  var signin = $('.zocial.primary', container);

  spinner.css('display', spinner.css('display') === 'none' ? '' : 'none');
  signin.css('display', signin.css('display') === 'none' ? '' : 'none');
};

Auth0Widget.prototype._setLoginView = function(options) {
  this._hasLoggedInBefore = options.isReturningUser;
  this._setTitle(this._signinOptions['title']);

  $('.loggedin').css('display', 'none');
  $('.notloggedin').css('display', 'none');
  $('.signup').css('display', 'none');
  $('.reset').css('display', 'none');

  $('.loggedin').css('display', options.isReturningUser ? '' : 'none');
  $('.notloggedin').css('display', options.isReturningUser ? 'none' : '');

  this._setTop(this._signinOptions.top, $('.signin div.panel.onestep'));
  $('.notloggedin .email input').first().focus();
};

Auth0Widget.prototype._showLoggedInExperience = function() {
  var self = this;
  var strategy = this._ssoData.lastUsedConnection.strategy;
  this._setLoginView({ isReturningUser: !!strategy });

  if (!strategy) return;

  var loginView = this._getActiveLoginView();
  bean.on($('form', loginView)[0], 'submit', this._signInEnterprise);
  
  var button;
  if (strategy !== 'auth0') {
    button = bonzo(bonzo.create('<span></span>'))
      .attr('tabindex', 0)
      .attr('data-strategy', strategy)
      .attr('title', this._strategies[strategy].name)
      .addClass('zocial').addClass('block')
      .addClass(this._strategies[strategy].css)
      .addClass(this._strategies[strategy].imageicon ? 'image-icon' : '')
      .html(this._strategies[strategy].name);
    
    bean.on(button[0], 'click', function (e) { self._signInSocial(e.target); });

    $('.strategy span', loginView).each(function (el) { if (el) el.remove(); });
    $('.strategy', loginView).append(button);
  }

  $('.all', loginView).html(this._signinOptions['allButtonTemplate']);

  bean.on($('.all', loginView)[0], 'click', function () {
    self._setLoginView({ isReturningUser: false });
  });

  if (this._ssoData.lastUsedUsername) {
    if (strategy === 'auth0') {
      $('.email-readonly', loginView).html(this._ssoData.lastUsedUsername); 
      $('.email input', loginView).css('display', 'none');
      $('.emailPassword', loginView).css('display', '');
    } 
    else if (this._isEnterpriseStrategy(strategy)) {
      button.html(_ssoData.lastUsedUsername || this._strategies[strategy].name)
            .attr('title', _ssoData.lastUsedUsername || this._strategies[strategy].name);
    }
  }
};

// sign in methods
Auth0Widget.prototype._signInSocial = function (target) {
  var strategyName = typeof target === 'string' ? target : target.getAttribute('data-strategy');
  var strategy = this._getConfiguredStrategy(strategyName);

  if (strategy) {
    this._auth0.login({
      connection: strategy.connections[0].name
    });
  }
};

Auth0Widget.prototype._signInEnterprise = function (e) {
  e.preventDefault();
  e.stopPropagation();

  var container = this._getActiveLoginView();
  var form = $('form', container);
  var valid = true;

  var emailD = $('.email', form),
      emailE = $('input[name=email]', form),
      emailM = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.exec(emailE.val().toLowerCase()),
      emailP = /^\s*$/.test(emailE.val()),
      domain, url, email = null, strategy;

  for (var s in this._client.strategies) {
    strategy = this._client.strategies[s];

    if (this._isAuth0Conn(strategy.name)) continue;

    for (var c in strategy.connections) {
      if(!emailP && emailM && emailM.slice(-2)[0] == strategy.connections[c].domain) {
        domain = strategy.connections[c].domain;
        url = strategy.connections[c].url;
        email = emailE.val();
        break;
      }
    }

    if (domain) break;
  }

  if (emailP) {
    // _showError(global.tlite.find(self._signInOptions['strategyEmailEmpty']));
  } 
  else if (!emailM) {
    // _showError(global.tlite.find(self._signInOptions['strategyEmailInvalid']));
  } 
  else if (!domain) {
    if (this._auth0Strategy) {
      return this._signInWithAuth0(emailE.val());
    }

    if (emailM && emailM.slice(-2)[0] === 'gmail.com') {
      return this._signInSocial('google-oauth2');
    }

    // _showError(global.tlite.find(self._signInOptions['strategyDomainInvalid'], { domain: emailM && emailM.slice(-2)[0] }));
  }

  valid &= (!domain && !emailD.addClass('invalid')) || (!!domain && !!emailD.removeClass('invalid'));

  if (valid) {
    this._redirect(url);
  }
};

Auth0Widget.prototype._signInWithAuth0 = function (userName, signInPassword) {
  this._toggleSpinner();

  var self = this;
  var container = this._getActiveLoginView();
  var connection  = this._getAuth0Connection();
  
  var loginOptions = {
    connection: connection.name,
    username: this._isAdLdapConn(connection.name) ? userName.replace('@' + connection.domain, '') : userName,
    password: signInPassword || $('.password input', container).val()
  };

  for (var k in this._auth0ConnectionParams) {
    loginOptions[k] = this._auth0ConnectionParams[k];
  }

  this._auth0.login(loginOptions, function (err) {
    if (err) alert(err);
    self._toggleSpinner();
  });
};

// initialize
Auth0Widget.prototype._initialize = function () {
  // TODO: support css option for non free subscriptions

  var self = this;
  bean.on($('.popup .panel.onestep a.close')[0], 'click', this._hideSignIn);
  bean.on($('.popup .panel.onestep .notloggedin form')[0], 'submit', function (e) { self._signInEnterprise(e); });
  bean.on($('html')[0], 'keyup', function (e) {
    if ($('html').hasClass('mode-signin')) {
      if ((e.which == 27 || e.keycode == 27) && !self._signinOptions.standalone) {
        self._hideSignIn(); // close popup with ESC key
      }
    }
  });

  // load social buttons
  var list = $('.popup .panel.onestep .iconlist');
  for (var s in this._client.strategies) {
    var strategy = this._client.strategies[s];

    if (this._isAuth0Conn(strategy.name) && strategy.connections.length > 0) {
      this._auth0Strategy = strategy;
      $('.create-account, .password').css('display', 'block');

      bean.on($('.notloggedin .email input')[0], 'input', function (e) { self._showOrHidePassword(e); });
    }

    if (this._strategies[strategy.name] && this._strategies[strategy.name].social) {
      var button = bonzo(bonzo.create('<span></span>'))
        .attr('tabindex', 0)
        .attr('data-strategy', strategy.name)
        .attr('title', this._strategies[strategy.name].name)
        .addClass('zocial').addClass('icon')
        .addClass(this._strategies[strategy.name].css)
        .addClass(this._strategies[strategy.name].imageicon ? 'image-icon' : '')
        .html(this._strategies[strategy.name].name);

      list.append(button);
      list.css('display', 'block');

      $('.popup .panel.onestep .separator').css('display', 'block');
    }
  }

  $('.popup .panel.onestep .iconlist span').each(function (button) {
    bean.on(button, 'click', function (e) {
      self._signInSocial(e.target);
    });
  });

  this._showSignIn();
};

Auth0Widget.prototype._showSignIn = function () {
  $('html').addClass('mode-signin');

  // if no social connections and one enterprise connection only, redirect
  if (!this._areThereAnySocialConn() && 
    this._client.strategies.length === 1 &&
    this._client.strategies[0].name !== 'auth0' &&
    this._client.strategies[0].connections.length === 1) {
    
    this._redirect(_client.strategies[0].connections[0].url);
  }

  // labels text
  var options = this._signinOptions || {};
  options['onestep'] = typeof options['onestep'] !== 'undefined' ? options['onestep'] : false;
  options['top'] = options['top'] || false;
  options['title'] = options['title'] || 'Sign In';
  options['strategyButtonTemplate'] = options['strategyButtonTemplate'] || "{name}";
  options['allButtonTemplate'] = options['allButtonTemplate'] || "Show all";
  options['strategyBack'] = options['strategyBack'] || "Back";
  options['strategyEmailLabel'] = options['strategyEmailLabel'] || "Email:";
  options['strategyEmailEmpty'] = options['strategyEmailEmpty'] || "The email is empty.";
  options['strategyEmailInvalid'] = options['strategyEmailInvalid'] || "The email is invalid.";

  options['icon'] = options['icon'] || "img/logo-32.png";
  options['showIcon'] = typeof options['showIcon'] !== 'undefined' ? options['showIcon'] : false;
  options['showSignup'] = typeof options['showSignup'] !== 'undefined' ? options['showSignup'] : true;
  options['showForgot'] = typeof options['showForgot'] !== 'undefined' ? options['showForgot'] : true;
  options['signupText'] = options['signupText'] || 'Sign Up';
  options['forgotText'] = options['forgotText'] || 'Forgot your password?';
  options['useAppSignInCallback'] = typeof options['useAppSignInCallback'] !== 'undefined' ? options['useAppSignInCallback'] : false;
  options['signInButtonText'] = options['signInButtonText'] || 'Sign In';
  options['emailPlaceholder'] = options['emailPlaceholder'] || 'Email';
  options['passwordPlaceholder'] = options['passwordPlaceholder'] || 'Password';
  options['separatorText'] = options['separatorText'] || 'or';
  options['serverErrorText'] = options['serverErrorText'] || 'There was an error processing the sign in.';
  options['showEmail'] = typeof options['showEmail'] !== 'undefined' ? options['showEmail'] : true;
  options['showPassword'] = typeof options['showPassword'] !== 'undefined' ? options['showPassword'] : true;
  options['socialBigButtons'] = typeof options['socialBigButtons'] !== 'undefined' ? options['socialBigButtons'] : !this._areThereAnyEnterpriseOrDbConn();
  options['enableReturnUserExperience'] = typeof options['enableReturnUserExperience'] !== 'undefined' ? options['enableReturnUserExperience'] : true;
  options['returnUserLabel'] = options['returnUserLabel'] || 'Last time you signed in using...';
  options['wrongEmailPasswordErrorText'] = options['wrongEmailPasswordErrorText'] || 'Wrong email or password.';

  // theme
  if (options.theme) {
    $('html').addClass('theme-' + options.theme);
  }

  $('.panel a.close').css('display', options.standalone ? 'none' : 'block');

  // show icon
  if (options.showIcon) {
    $('.panel .image img').attr('src', options.icon);
    $('.panel .image').css('display', options.showIcon ? 'block' : 'none');
  }

  // hide divider dot if there are one of two
  $('.panel .create-account .divider')
    .css('display', options.showEmail && options.showSignup && options.showForgot ? '' : 'none');

  $('div.panel input').each(function (e) { e.value = ''; });

  // placeholders and buttons
  $('.panel .zocial.primary').html(options.signInButtonText);
  $('.panel .email input').attr('placeholder', options.emailPlaceholder);
  $('.panel .password input').attr('placeholder', options.passwordPlaceholder);
  $('.panel .separator span').html(options.separatorText);

  // show email, password, separator and button if there are enterprise/db connections
  var anyEnterpriseOrDbConnection = this._areThereAnyEnterpriseOrDbConn();
  var anySocialConnection = this._areThereAnySocialConn();

  $('.panel .email input').css('display', options.showEmail && anyEnterpriseOrDbConnection ? '' : 'none');
  $('.panel .zocial.primary').css('display', options.showEmail && anyEnterpriseOrDbConnection ? '' : 'none');
  $('.panel .password input').css('display', options.showEmail && options.showPassword && anyEnterpriseOrDbConnection ? '' : 'none');
  $('.panel .create-account .forgot-pass').css('display', options.showEmail && options.showForgot && anyEnterpriseOrDbConnection ? '' : 'none');
  $('.panel .create-account .sign-up').css('display', options.showEmail && options.showSignup && anyEnterpriseOrDbConnection ? '' : 'none');
  $('.panel .separator').css('display', options.showEmail && anyEnterpriseOrDbConnection && anySocialConnection ? '' : 'none');
  $('.panel .last-time').html(options.returnUserLabel);

  // TODO: show placeholders for IE9

  // activate panel
  $('div.panel').removeClass('active');
  $('div.overlay').addClass('active');
  $('div.panel.onestep').addClass('active');

  $('.popup h1').html(options.title);
  $('.popup .invalid').removeClass('invalid');

  // if user logged in show logged in experience
  if (this._ssoData.sso && options['enableReturnUserExperience']) {
    this._showLoggedInExperience();
  }

  if (options['socialBigButtons']) {
    $('.popup .panel.onestep .iconlist span').removeClass('icon').addClass('block');
  } else {
    $('.popup .panel.onestep .iconlist span').addClass('icon').removeClass('block');
  }

  $('div.panel.onestep h1').html(options['title']);
  $('div.panel.onestep').addClass('active');

  if (this._ssoData.sso && this._ssoData.lastUsedUsername) {
    $('div.panel.onestep input').val(this._ssoData.lastUsedUsername);
  }

  this._setTop(options.top, $('div.panel.onestep'));
  this._setLoginView({ isReturningUser: this._ssoData.sso });
};

Auth0Widget.prototype._getConfiguredStrategies = function (conns) {
  var strategies = [];
  for (var conn in conns) {
    if (typeof(conns[conn].status) !== 'undefined' && !conns[conn].status) continue;

    var strategy = strategies.filter(function (s) { 
      return s.name === conns[conn].strategy; 
    })[0];

    if (!strategy) {
      strategy = {
        name: conns[conn].strategy,
        connections: []
      };

      strategies.push(strategy);
    }

    var connData = {
      name: conns[conn].name,
      domain: conns[conn].domain
    };

    strategy.connections.push(connData);
  }

  return strategies;
};

Auth0Widget.prototype.getClient = function () {
  return this._auth0;
};

Auth0Widget.prototype.show = function (signinOptions) {
  var self = this;
  this._signinOptions = xtend(this._options, signinOptions);
  this._auth0 = new Auth0({
    clientID:     this._signinOptions.clientID, 
    callbackURL:  this._signinOptions.callbackURL,
    domain:       this._signinOptions.domain
  });

  // TODO: set auth0 connection parameters
  this._auth0ConnectionParams = null;

  // get configured strategies/connections
  this._auth0.getConnections(function (err, connections) {
    var allowedConnections = [];

    // use only specified connections
    if (self._signinOptions.connections) {
      for (var i in connections) {
        if (self._signinOptions.connections.indexOf(connections[i].name) > -1) {
          allowedConnections.push(connections[i]);
        }
      }
    }
    else {
      allowedConnections = connections;
    }

    self._client = {
      strategies: self._getConfiguredStrategies(allowedConnections)
    };

    // get SSO data
    self._auth0.getSSOData(function (err, ssoData) {
      self._ssoData = ssoData;
      
      // widget container
      var div = document.createElement('div');
      div.innerHTML = loginTmpl({});
      document.body.appendChild(div);
      
      self._initialize();
    });
  });
};

module.exports = Auth0Widget;

},{"./html/login.html":24,"auth0-js":2,"bean":13,"bonzo":14,"qwery":17,"xtend":19}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvc2ViYXMvRG9jdW1lbnRzL1Byb2plY3RzL2F1dGgwLXdpZGdldC5qcy9pbmRleC5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy9hdXRoMC1qcy9pbmRleC5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy9hdXRoMC1qcy9saWIvTG9naW5FcnJvci5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy9hdXRoMC1qcy9saWIvYXNzZXJ0X3JlcXVpcmVkLmpzIiwiL1VzZXJzL3NlYmFzL0RvY3VtZW50cy9Qcm9qZWN0cy9hdXRoMC13aWRnZXQuanMvbm9kZV9tb2R1bGVzL2F1dGgwLWpzL2xpYi9iYXNlNjRfdXJsX2RlY29kZS5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy9hdXRoMC1qcy9saWIvanNvbl9wYXJzZS5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy9hdXRoMC1qcy9saWIvdXNlX2pzb25wLmpzIiwiL1VzZXJzL3NlYmFzL0RvY3VtZW50cy9Qcm9qZWN0cy9hdXRoMC13aWRnZXQuanMvbm9kZV9tb2R1bGVzL2F1dGgwLWpzL25vZGVfbW9kdWxlcy9CYXNlNjQvYmFzZTY0LmpzIiwiL1VzZXJzL3NlYmFzL0RvY3VtZW50cy9Qcm9qZWN0cy9hdXRoMC13aWRnZXQuanMvbm9kZV9tb2R1bGVzL2F1dGgwLWpzL25vZGVfbW9kdWxlcy9qc29ucC9pbmRleC5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy9hdXRoMC1qcy9ub2RlX21vZHVsZXMvanNvbnAvbm9kZV9tb2R1bGVzL2RlYnVnL2RlYnVnLmpzIiwiL1VzZXJzL3NlYmFzL0RvY3VtZW50cy9Qcm9qZWN0cy9hdXRoMC13aWRnZXQuanMvbm9kZV9tb2R1bGVzL2F1dGgwLWpzL25vZGVfbW9kdWxlcy9xcy9pbmRleC5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy9hdXRoMC1qcy9ub2RlX21vZHVsZXMvcmVxd2VzdC9yZXF3ZXN0LmpzIiwiL1VzZXJzL3NlYmFzL0RvY3VtZW50cy9Qcm9qZWN0cy9hdXRoMC13aWRnZXQuanMvbm9kZV9tb2R1bGVzL2JlYW4vYmVhbi5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy9ib256by9ib256by5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLWJ1aWx0aW5zL2J1aWx0aW4vZnMuanMiLCIvVXNlcnMvc2ViYXMvRG9jdW1lbnRzL1Byb2plY3RzL2F1dGgwLXdpZGdldC5qcy9ub2RlX21vZHVsZXMvaW5zZXJ0LWNzcy9pbmRleC5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy9xd2VyeS9xd2VyeS5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy94dGVuZC9oYXMta2V5cy5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy94dGVuZC9pbmRleC5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy94dGVuZC9ub2RlX21vZHVsZXMvb2JqZWN0LWtleXMvZm9yZWFjaC5qcyIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL25vZGVfbW9kdWxlcy94dGVuZC9ub2RlX21vZHVsZXMvb2JqZWN0LWtleXMvaW5kZXguanMiLCIvVXNlcnMvc2ViYXMvRG9jdW1lbnRzL1Byb2plY3RzL2F1dGgwLXdpZGdldC5qcy9ub2RlX21vZHVsZXMveHRlbmQvbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzIiwiL1VzZXJzL3NlYmFzL0RvY3VtZW50cy9Qcm9qZWN0cy9hdXRoMC13aWRnZXQuanMvbm9kZV9tb2R1bGVzL3h0ZW5kL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9zaGltLmpzIiwiL1VzZXJzL3NlYmFzL0RvY3VtZW50cy9Qcm9qZWN0cy9hdXRoMC13aWRnZXQuanMvd2lkZ2V0L2h0bWwvbG9naW4uaHRtbCIsIi9Vc2Vycy9zZWJhcy9Eb2N1bWVudHMvUHJvamVjdHMvYXV0aDAtd2lkZ2V0LmpzL3dpZGdldC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4WkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3B1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbInZhciBnbG9iYWw9dHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9O3ZhciBmcyAgICAgICAgICA9IHJlcXVpcmUoJ2ZzJyk7XG52YXIgaW5zZXJ0Q3NzICAgPSByZXF1aXJlKCdpbnNlcnQtY3NzJyk7XG5cbnZhciBBdXRoMFdpZGdldCA9IHJlcXVpcmUoJy4vd2lkZ2V0Jyk7XG5cbmluc2VydENzcyhcIi5wb3B1cCAub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNTAlIDUwJSwgZWxsaXBzZSBjbG9zZXN0LWNvcm5lciwgcmdiYSgwLDAsMCwwLjQ1KSAxJSwgcmdiYSgwLDAsMCwwLjgpIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoNTAlIDUwJSwgZWxsaXBzZSBjbG9zZXN0LWNvcm5lciwgcmdiYSgwLDAsMCwwLjQ1KSAxJSwgcmdiYSgwLDAsMCwwLjgpIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudCg1MCUgNTAlLCBlbGxpcHNlIGNsb3Nlc3QtY29ybmVyLCByZ2JhKDAsMCwwLDAuNDUpIDElLCByZ2JhKDAsMCwwLDAuOCkgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoNTAlIDUwJSwgZWxsaXBzZSBjbG9zZXN0LWNvcm5lciwgcmdiYSgwLDAsMCwwLjQ1KSAxJSwgcmdiYSgwLDAsMCwwLjgpIDEwMCUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogNDAwbXMgb3BhY2l0eSBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiA0MDBtcyBvcGFjaXR5IGVhc2U7XFxuICB0cmFuc2l0aW9uOiA0MDBtcyBvcGFjaXR5IGVhc2U7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG5cXG4ucG9wdXAgLm92ZXJsYXkuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wb3B1cCAub3ZlcmxheSAucGFuZWwge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wb3B1cCAub3ZlcmxheSAucGFuZWwuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hvd1BhbmVsO1xcbn1cXG5cXG4ucG9wdXAgLm92ZXJsYXkgLnBhbmVsIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhpZGVQYW5lbDtcXG4gIHdpZHRoOiAyODBweDtcXG4gIG1hcmdpbjogMCAwIDAgLTE0MHB4O1xcbn1cXG5cXG4ucG9wdXAgLm92ZXJsYXkgLmVtYWlsIHtcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxufVxcblxcbi5wb3B1cCAub3ZlcmxheSAucGFzc3dvcmQsIC5wb3B1cCAub3ZlcmxheSAucmVwZWF0UGFzc3dvcmQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuLnBvcHVwIC5vdmVybGF5IC5lbWFpbC1yZWFkb25seSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmhlcml0O1xcbiAgY29sb3I6ICM0MTQ0NGE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbi5wYW5lbCAuc2lnbnVwIC5oZWFkZXIsIC5wYW5lbCAucmVzZXQgLmhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4OyBcXG4gIGZvbnQtc2l6ZTogMTRweDsgXFxuICBjb2xvcjogIzQxNDQ0YTtcXG59XFxuXFxuLnBhbmVsIC5zaWdudXAgLmZvb3RlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4OyBcXG4gIGZvbnQtc2l6ZTogMTJweDsgXFxuICBjb2xvcjogIzQxNDQ0YTsgXFxuICB0ZXh0LWFsaWduOiBsZWZ0OyBcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyBzaG93UGFuZWwge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hvd1BhbmVsIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpIHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQC1vLWtleWZyYW1lcyBzaG93UGFuZWwge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5ALW1zLWtleWZyYW1lcyBzaG93UGFuZWwge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNob3dQYW5lbCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkAtbW96LWtleWZyYW1lcyBoaWRlUGFuZWwge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGlkZVBhbmVsIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQC1vLWtleWZyYW1lcyBoaWRlUGFuZWwge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5ALW1zLWtleWZyYW1lcyBoaWRlUGFuZWwge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGhpZGVQYW5lbCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCkgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcblxcbi5wb3B1cCAucGFuZWwge1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmZmYsICNmYWZhZmEpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoI2ZmZiwgI2ZhZmFmYSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KCNmZmYsICNmYWZhZmEpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCNmZmYsICNmYWZhZmEpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZmYsICNmYWZhZmEpO1xcbiAgei1pbmRleDogMTA7XFxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4yKSwgMCAxMHB4IDI3cHggcmdiYSgwLDAsMCwwLjcpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMiksIDAgMTBweCAyN3B4IHJnYmEoMCwwLDAsMC43KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4yKSwgMCAxMHB4IDI3cHggcmdiYSgwLDAsMCwwLjcpO1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA2cHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG59XFxuXFxuLnBvcHVwIC5wYW5lbDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDE7XFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAycHggcmdiYSg4Miw5MywxMTIsMC40KTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDJweCByZ2JhKDgyLDkzLDExMiwwLjQpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDJweCByZ2JhKDgyLDkzLDExMiwwLjQpO1xcbn1cXG5cXG4ucG9wdXAgLnBhbmVsIGhlYWRlciB7XFxuZGlzcGxheTogYmxvY2s7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbm1pbi1oZWlnaHQ6IDY1cHg7XFxub3ZlcmZsb3c6IGhpZGRlbjtcXG4tbW96LWJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xcbi13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XFxuYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XFxuYmFja2dyb3VuZDogI2YxZjRmNjtcXG5iYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZjFmNGY2LCAjZTllZGYwKTtcXG5iYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgjZjFmNGY2LCAjZTllZGYwKTtcXG5iYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KCNmMWY0ZjYsICNlOWVkZjApO1xcbmJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCgjZjFmNGY2LCAjZTllZGYwKTtcXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2YxZjRmNiwgI2U5ZWRmMCk7XFxuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDAsNjksODUsMC4xMSk7XFxufVxcblxcbi5wb3B1cCAucGFuZWwgaGVhZGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogNXB4O1xcbiAgYm90dG9tOiAtMXB4O1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiYSg0MCw2OSw4NSwwKSwgcmdiYSg0MCw2OSw4NSwwLjEpKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHJnYmEoNDAsNjksODUsMCksIHJnYmEoNDAsNjksODUsMC4xKSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHJnYmEoNDAsNjksODUsMCksIHJnYmEoNDAsNjksODUsMC4xKSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQocmdiYSg0MCw2OSw4NSwwKSwgcmdiYSg0MCw2OSw4NSwwLjEpKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDQwLDY5LDg1LDApLCByZ2JhKDQwLDY5LDg1LDAuMSkpO1xcbn1cXG5cXG4ucG9wdXAgLnBhbmVsIGhlYWRlcjphZnRlciB7XFxuY29udGVudDogJyc7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmhlaWdodDogNHB4O1xcbmJvdHRvbTogMDtcXG5sZWZ0OiAwO1xcbnJpZ2h0OiAwO1xcbmJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNlOWVkZjAsIHJnYmEoMjQxLDI0NCwyNDYsMCksICNlOWVkZjApO1xcbmJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNlOWVkZjAsIHJnYmEoMjQxLDI0NCwyNDYsMCksICNlOWVkZjApO1xcbmJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgI2U5ZWRmMCwgcmdiYSgyNDEsMjQ0LDI0NiwwKSwgI2U5ZWRmMCk7XFxuYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNlOWVkZjAsIHJnYmEoMjQxLDI0NCwyNDYsMCksICNlOWVkZjApO1xcbmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChsZWZ0LCAjZTllZGYwLCByZ2JhKDI0MSwyNDQsMjQ2LDApLCAjZTllZGYwKTtcXG59XFxuXFxuLnBvcHVwIC5wYW5lbCBoZWFkZXIgaDEge1xcbiAgcGFkZGluZzogMjFweCAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICM0MTQ0NGE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRERFM0U2O1xcbn1cXG5cXG4ucG9wdXAgLnBhbmVsIGhlYWRlciBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtaW5kZW50OiAyMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEycHg7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG4ucG9wdXAgLnBhbmVsIGhlYWRlciBhOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNjY7XFxufVxcblxcbi5wb3B1cCAucGFuZWwgaGVhZGVyIGE6YWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5wb3B1cCAucGFuZWwgaGVhZGVyIGEuY2xvc2Uge1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJpbWcvY2xvc2UucG5nXFxcIikgNTAlIDUwJSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEycHggMTJweDtcXG4gIHJpZ2h0OiAxOXB4O1xcbiAgdG9wOiAyMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucG9wdXAgLnBhbmVsIGhlYWRlciBhLmNsb3NlOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNjY7XFxufVxcblxcbi5wb3B1cCAucGFuZWwgaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBtYXJnaW46IDE2cHggMTBweCAxMHB4IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLmFjdGlvbiAuc3Bpbm5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2QTc3N0Y7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltZy9zcGlubmVyLmdpZicpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogNDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc7IFxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7IFxcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzMzMzsgXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7ICBcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwLjA4ZW0gMCByZ2JhKDI1NSwyNTUsMjU1LDAuNCksIGluc2V0IDAgMCAwLjFlbSByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7IFxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAuMDhlbSAwIHJnYmEoMjU1LDI1NSwyNTUsMC40KSwgaW5zZXQgMCAwIDAuMWVtIHJnYmEoMjU1LDI1NSwyNTUsMC45KTsgXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAuMDhlbSAwIHJnYmEoMjU1LDI1NSwyNTUsMC40KSwgaW5zZXQgMCAwIDAuMWVtIHJnYmEoMjU1LDI1NSwyNTUsMC45KTsgICAgICAgICBcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICBcXG4gIHVzZXItc2VsZWN0OiBub25lOyAgXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IC4zZW07IFxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAuM2VtOyBcXG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XFxufVxcblxcbi5wb3B1cCAucGFuZWwgZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbjogMCAxNXB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEREUzRTY7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG4ucG9wdXAgLnBhbmVsIGZvb3RlciBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG5cXG4ucG9wdXAgLnBhbmVsIGZvb3RlciBhIHtcXG4gIGZvbnQtc2l6ZTogOXB4O1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QsIC5pY29ubGlzdCB7XFxuICBtYXJnaW46IDI1cHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDU7XFxufVxcblxcbi5saXN0OmJlZm9yZSwgLmxpc3Q6YWZ0ZXIsXFxuLmljb25saXN0OmJlZm9yZSwgLmljb25saXN0OmFmdGVyIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5saXN0OmFmdGVyLCAuaWNvbmxpc3Q6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5saXN0IHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmljb25saXN0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmljb25saXN0IHNwYW4ge1xcbiAgbWFyZ2luOiAwIDJweDtcXG59XFxuXFxuLmZvcmdvdC1wYXNzIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uY3JlYXRlLWFjY291bnQge1xcbiAgZGlzcGxheTogbm9uZSA7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY3JlYXRlLWFjY291bnQgYSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiKDEwOSwgMTA5LCAxMDkpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY3JlYXRlLWFjY291bnQgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmxvZ2dlZGluIHNwYW4uY2VudGVyZWQuYWxsIHtcXG4gIGNvbG9yOiAjMDA4Q0REO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nZ2VkaW4gc3Bhbi5jZW50ZXJlZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIG1hcmdpbjogMTVweCAwIDVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubG9nZ2VkaW4gc3Bhbi5jZW50ZXJlZC5hbGw6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IFxcbn1cXG5cXG4uc2lnbnVwIC5vcHRpb25zIGEuY2FuY2VsLCAucmVzZXQgLm9wdGlvbnMgYS5jYW5jZWwge1xcbiAgY29sb3I6ICMwMDhDREQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zaWdudXAgLm9wdGlvbnMgYS5jYW5jZWw6aG92ZXIsIC5yZXNldCAub3B0aW9ucyBhLmNhbmNlbDpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgXFxufVxcblxcbi5zaWdudXAgLm9wdGlvbnMsIC5yZXNldCAub3B0aW9ucyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIG1hcmdpbjogMTVweCAwIDVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5mb3JtIHtcXG4gIG1hcmdpbjogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG5mb3JtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICM3Rjg4OTk7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMCAwIDdweCAwO1xcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgd2hpdGU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMTBweCAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0I0QkVDRDtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNCMEJBQ0E7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjRDNEOUUyO1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgxMzAsMTM3LDE1MCwwLjIzKSwgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuODUpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgxMzAsIDEzNywgMTUwLCAwLjIzKSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMTMwLCAxMzcsIDE1MCwgMC4yMyksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCBHZW5ldmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuZm9ybSBpbnB1dDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM1Njk1REIgIzcwQTdFNCAjODlCOEVDICM3MEE3RTQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSg3MCwxMjMsMTgxLDAuMzUpLCAwIDAgNHB4ICM1Njk1ZGI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDcwLCAxMjMsIDE4MSwgMC4zNSksIDAgMCA0cHggIzU2OTVEQjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDcwLCAxMjMsIDE4MSwgMC4zNSksIDAgMCA0cHggIzU2OTVEQjtcXG59XFxuXFxuZm9ybSAuaW52YWxpZCBpbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiAjRkY3MDc2O1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI0ZGNUM2MTtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yKSwgMCAwIDRweCAwIHJnYmEoMjU1LDAsMCwwLjUpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAgNHB4IDAgcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAgNHB4IDAgcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcblxcbmhlYWRlciAuZXJyb3Ige1xcbiAgcGFkZGluZzogOXB4IDBweDtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xcbiAgY29sb3I6IHJnYigxODUsIDgzLCA4Myk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAuc3VjY2VzcyB7XFxuICBwYWRkaW5nOiA5cHggMHB4O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB3aWR0aDogNzAlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XFxuICBjb2xvcjogcmdiKDE1LCAxNzMsIDQxKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9ybSAubm90ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjN0Y4ODk5O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDAgMCA3cHggMDtcXG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHdoaXRlO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtby11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5mb3JtIC5ub3RlIGEge1xcbiAgY29sb3I6ICMwMDhDREQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmZvcm0gLmludmFsaWQgLmVycm9yIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hY3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW46IDAgMzBweCAzMHB4IDMwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG5mb3JtIC5hY3Rpb24ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYWN0aW9uIGJ1dHRvbiB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMCAyNXB4IDA7XFxufVxcblxcbi5zZXBhcmF0b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiOyAgXFxuICBkaXNwbGF5OiBibG9jazsgIFxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3Rjg4OTk7XFxuICB3aWR0aDogMjAwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTEwMHB4O1xcbiAgaGVpZ2h0OiAxcHg7ICBcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxcbiAgdG9wOiA1MCU7ICBcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5zZXBhcmF0b3Igc3BhbiB7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhOyAgXFxuICBwYWRkaW5nOiAwIDEwcHg7ICBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxcbiAgei1pbmRleDogNTtcXG4gIGNvbG9yOiAjN0Y4ODk5O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMCB3aGl0ZTtcXG59XFxuXFxuXFxuc3Bhbi5iYWNrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICMwMDhDREQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIG1hcmdpbjogMTVweCAwIDVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDU7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG5zcGFuLmJhY2s6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IFxcbn1cXG5cXG4uc2lnbmluIC5wYW5lbC5zdHJhdGVnaWVzIC5saXN0IC5lbWFpbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjN0Y4ODk5O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDAgMCA3cHggMDtcXG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uem9jaWFsLm9mZmljZTM2NTpiZWZvcmUge2NvbnRlbnQ6IFxcXCJXXFxcIjt9XFxuLnpvY2lhbC5vZmZpY2UzNjUge2JhY2tncm91bmQtY29sb3I6ICMwMEFDRUQ7IGNvbG9yOiAjZmZmO31cXG4uem9jaWFsLndhYWQ6YmVmb3JlIHtjb250ZW50OiBcXFwielxcXCI7fVxcbi56b2NpYWwud2FhZCB7YmFja2dyb3VuZC1jb2xvcjogIzAwQURFRjsgY29sb3I6ICNmZmY7fVxcbi56b2NpYWwudGhpcnR5c2V2ZW5zaWduYWxzOmJlZm9yZSB7Y29udGVudDogXFxcImJcXFwiO31cXG4uem9jaWFsLnRoaXJ0eXNldmVuc2lnbmFscyB7YmFja2dyb3VuZC1jb2xvcjogIzZBQzA3MTsgY29sb3I6ICNmZmY7fVxcbi56b2NpYWwuYm94OmJlZm9yZSB7Y29udGVudDogXFxcInhcXFwiO31cXG4uem9jaWFsLmJveCB7YmFja2dyb3VuZC1jb2xvcjogIzI2N2JiNjsgY29sb3I6ICNmZmY7fVxcbi56b2NpYWwuc2FsZXNmb3JjZTpiZWZvcmUge2NvbnRlbnQ6IFxcXCIqXFxcIjt9XFxuLnpvY2lhbC5zYWxlc2ZvcmNlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBjb2xvcjogI2ZmMDAwMDt9XFxuLnpvY2lhbC53aW5kb3dzIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMjY3MkVDOyBjb2xvcjogI2ZmZjt9XFxuLnpvY2lhbC5maXRiaXQ6YmVmb3JlIHtjb250ZW50OiBcXFwiI1xcXCI7fVxcbi56b2NpYWwuZml0Yml0IHtiYWNrZ3JvdW5kLWNvbG9yOiAjNDVDMkM1OyBjb2xvcjogI2ZmZjt9XFxuLnpvY2lhbC55YW5kZXg6YmVmb3JlIHtjb250ZW50OiBcXFwiJlxcXCI7fVxcbi56b2NpYWwueWFuZGV4IHtiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwOyBjb2xvcjogI2ZmZjt9XFxuLnpvY2lhbC5yZW5yZW46YmVmb3JlIHtjb250ZW50OiBcXFwiclxcXCI7fVxcbi56b2NpYWwucmVucmVuIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NkI1OyBjb2xvcjogI2ZmZjt9XFxuLnpvY2lhbC5iYWlkdTpiZWZvcmUge2NvbnRlbnQ6IFxcXCJ1XFxcIjt9XFxuLnpvY2lhbC5iYWlkdSB7YmFja2dyb3VuZC1jb2xvcjogIzI4MzJFMTsgY29sb3I6ICNmZmY7fVxcblxcbi5wb3B1cCAub3ZlcmxheSAub25lc3RlcCB7XFxuICB3aWR0aDogMzQ1cHg7XFxuICBtYXJnaW46IDAgMCAwIC0xNzJweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDI4MHB4KSB7XFxuICAucG9wdXAgLm92ZXJsYXkgLnBhbmVsIHtcXG4gICAgd2lkdGg6IDI0MHB4O1xcbiAgICBtYXJnaW46IDAgMCAwIC0xMjBweDtcXG4gIH1cXG4gIC5wb3B1cCAuem9jaWFsLCAucG9wdXAgYS56b2NpYWwge1xcbiAgICAvKlxcbiAgICBpdCBkb2VzbnQgbG9vayByaWdodC5cXG4gICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICAgKi9cXG4gIH1cXG4gIC5zaWduaW4gLnBvcHVwIC5wYW5lbC5zdHJhdGVnaWVzIC5saXN0IHtcXG4gICAgbWFyZ2luOiAxMnB4O1xcbiAgfVxcbiAgZm9ybSB7XFxuICAgIG1hcmdpbjogMTJweDtcXG4gIH1cXG4gIGZvcm0gaW5wdXQge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICAucG9wdXAgLnBhbmVsIGhlYWRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC5wb3B1cCAucGFuZWwgaGVhZGVyIGgxIHtcXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gIH1cXG4gIC5wb3B1cCAucGFuZWwgaGVhZGVyIGEuY2xvc2Uge1xcbiAgICByaWdodDogMTRweDtcXG4gICAgdG9wOiAxNnB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgIChtaW4td2lkdGg6IDI4MXB4KSBhbmQgKG1heC13aWR0aDogMzQwcHgpIHtcXG4gIC5wb3B1cCAub3ZlcmxheSAucGFuZWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICB9XFxuICAucG9wdXAgLnpvY2lhbCwgLnBvcHVwIGEuem9jaWFsIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbiAgLnNpZ25pbiAucG9wdXAgLnBhbmVsLnN0cmF0ZWdpZXMgLmxpc3Qge1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICB9XFxuICBmb3JtIHtcXG4gICAgbWFyZ2luOiAxNXB4IDI1cHg7XFxuICB9XFxuICBmb3JtIGlucHV0IHtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAucG9wdXAgLnBhbmVsIGhlYWRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWluLWhlaWdodDogMzJweDtcXG4gIH1cXG4gIC5wb3B1cCAucGFuZWwgaGVhZGVyIGgxIHtcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG5cXG4gIC5wb3B1cCAucGFuZWwgaGVhZGVyIGltZyB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgbWFyZ2luOiA5cHggMTBweCA2cHggMThweDtcXG4gIH1cXG5cXG4gIC56b2NpYWwucHJpbWFyeSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xcbiAgfVxcblxcbiAgLmFjdGlvbiAuc3Bpbm5lciB7XFxuICAgIGhlaWdodDogMzRweDtcXG4gIH1cXG5cXG4gIC5jcmVhdGUtYWNjb3VudCB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICB9XFxuXFxuICAucG9wdXAgLm92ZXJsYXkgLmVtYWlsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgfVxcblxcbiAgLnBvcHVwIC5vdmVybGF5IC5wYXNzd29yZCwgLnBvcHVwIC5vdmVybGF5IC5yZXBlYXRQYXNzd29yZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIH1cXG59XFxuXFxuLmxvYWRpbmcge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxufVxcblxcbi5sb2FkaW5nIC5tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTExMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBhcmlhbCwgZnJlZXNhbnMsIGNsZWFuLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5sb2FkaW5nIC5iYWxscyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNDVweDtcXG4gIG1hcmdpbi10b3A6IC00NXB4O1xcbiAgd2lkdGg6IDkwcHg7XFxuICBoZWlnaHQ6OTBweDtcXG59XFxuXFxuLmxvYWRpbmcgLmJhbGxzID4gZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA4NnB4O1xcbiAgaGVpZ2h0OiA4NnB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcXG4gIC1tb3otYW5pbWF0aW9uOiBvcmJpdCA3LjE1cyBpbmZpbml0ZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBvcmJpdCA3LjE1cyBpbmZpbml0ZTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xcbiAgLW1zLWFuaW1hdGlvbjogb3JiaXQgNy4xNXMgaW5maW5pdGU7XFxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xcbiAgLW8tYW5pbWF0aW9uOiBvcmJpdCA3LjE1cyBpbmZpbml0ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XFxuICBhbmltYXRpb246IG9yYml0IDcuMTVzIGluZmluaXRlO1xcbn1cXG5cXG4ubG9hZGluZyAuYmFsbHMgPiBkaXYgPiBkaXZ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTFweDtcXG4gIGhlaWdodDogMTFweDtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBsZWZ0OjBweDtcXG4gIHRvcDowcHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDExcHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDExcHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogMTFweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDExcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbn1cXG5cXG4ubG9hZGluZyAuYmFsbHMgLmJhbGwwMSB7XFxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMS41NnM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS41NnM7XFxuICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAxLjU2cztcXG4gIC1vLWFuaW1hdGlvbi1kZWxheTogMS41NnM7XFxuICBhbmltYXRpb24tZGVsYXk6IDEuNTZzO1xcbn1cXG5cXG4ubG9hZGluZyAuYmFsbHMgLmJhbGwwMiB7XFxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC4zMXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zMXM7XFxuICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAwLjMxcztcXG4gIC1vLWFuaW1hdGlvbi1kZWxheTogMC4zMXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuMzFzO1xcbn1cXG5cXG4ubG9hZGluZyAuYmFsbHMgLmJhbGwwMyB7XFxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42MnM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42MnM7XFxuICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAwLjYycztcXG4gIC1vLWFuaW1hdGlvbi1kZWxheTogMC42MnM7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuNjJzO1xcbn1cXG5cXG4ubG9hZGluZyAuYmFsbHMgLmJhbGwwNCB7XFxuLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOTRzO1xcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjk0cztcXG4tbXMtYW5pbWF0aW9uLWRlbGF5OiAwLjk0cztcXG4tby1hbmltYXRpb24tZGVsYXk6IDAuOTRzO1xcbmFuaW1hdGlvbi1kZWxheTogMC45NHM7XFxufVxcblxcbi5sb2FkaW5nIC5iYWxscyAuYmFsbDA1IHtcXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxLjI1cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjI1cztcXG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDEuMjVzO1xcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiAxLjI1cztcXG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNXM7XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyBvcmJpdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHotaW5kZXg6OTk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIH1cXG5cXG4gIDclIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xcbiAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgLW1vei1vcmlnaW46MCU7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtbW96LXRyYW5zZm9ybTpyb3RhdGUoNDEwZGVnKTtcXG4gICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgLW1vei1vcmlnaW46NyU7XFxuICB9XFxuXFxuICAzOSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDY0NWRlZyk7XFxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICAtbW96LW9yaWdpbjozMCU7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDc3MGRlZyk7XFxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIC1tb3otb3JpZ2luOjM5JTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTAwZGVnKTtcXG4gICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgLW1vei1vcmlnaW46NzAlO1xcbiAgfVxcblxcbiAgNzYlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLW1vei10cmFuc2Zvcm06cm90YXRlKDkwMGRlZyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MDBkZWcpO1xcbiAgfVxcblxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3JiaXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB6LWluZGV4Ojk5O1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICB9XFxuXFxuICA3JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICAgIC13ZWJraXQtb3JpZ2luOjAlO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQxMGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIC13ZWJraXQtb3JpZ2luOjclO1xcbiAgfVxcblxcbiAgMzklIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2NDVkZWcpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgLXdlYmtpdC1vcmlnaW46MzAlO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3NzBkZWcpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICAtd2Via2l0LW9yaWdpbjozOSU7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwMGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIC13ZWJraXQtb3JpZ2luOjcwJTtcXG4gIH1cXG5cXG4gIDc2JSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MDBkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTAwZGVnKTtcXG4gIH1cXG5cXG59XFxuXFxuQC1tcy1rZXlmcmFtZXMgb3JiaXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB6LWluZGV4Ojk5O1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgfVxcblxcbiAgNyUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcXG4gICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgLW1zLW9yaWdpbjowJTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC1tcy10cmFuc2Zvcm06cm90YXRlKDQxMGRlZyk7XFxuICAgIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgLW1zLW9yaWdpbjo3JTtcXG4gIH1cXG5cXG4gIDM5JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2NDVkZWcpO1xcbiAgICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICAtbXMtb3JpZ2luOjMwJTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3NzBkZWcpO1xcbiAgICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIC1tcy1vcmlnaW46MzklO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwMGRlZyk7XFxuICAgIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgLW1zLW9yaWdpbjo3MCU7XFxuICB9XFxuXFxuICA3NiUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtbXMtdHJhbnNmb3JtOnJvdGF0ZSg5MDBkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MDBkZWcpO1xcbiAgfVxcblxcbn1cXG5cXG5ALW8ta2V5ZnJhbWVzIG9yYml0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgei1pbmRleDo5OTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgLW8tYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICB9XFxuXFxuICA3JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XFxuICAgIC1vLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgLW8tb3JpZ2luOjAlO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLW8tdHJhbnNmb3JtOnJvdGF0ZSg0MTBkZWcpO1xcbiAgICAtby1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgLW8tb3JpZ2luOjclO1xcbiAgfVxcblxcbiAgMzklIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNjQ1ZGVnKTtcXG4gICAgLW8tYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICAtby1vcmlnaW46MzAlO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNzcwZGVnKTtcXG4gICAgLW8tYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIC1vLW9yaWdpbjozOSU7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MDBkZWcpO1xcbiAgICAtby1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgLW8tb3JpZ2luOjcwJTtcXG4gIH1cXG5cXG4gIDc2JSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC1vLXRyYW5zZm9ybTpyb3RhdGUoOTAwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MDBkZWcpO1xcbiAgfVxcblxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG9yYml0IHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgei1pbmRleDo5OTtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICB9XFxuXFxuICA3JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gICAgb3JpZ2luOjAlO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSg0MTBkZWcpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgb3JpZ2luOjclO1xcbiAgfVxcblxcbiAgMzklIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjQ1ZGVnKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICBvcmlnaW46MzAlO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzcwZGVnKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIG9yaWdpbjozOSU7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MDBkZWcpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgb3JpZ2luOjcwJTtcXG4gIH1cXG5cXG4gIDc2JSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTpyb3RhdGUoOTAwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MDBkZWcpO1xcbiAgfVxcblxcbn1cXG5cXG5pbnB1dFtkaXNhYmxlZF17XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCAyMjIsIDIyNCk7XFxufVwiKTtcbmluc2VydENzcyhcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuXFxuLyohXFxuXFx0Wm9jaWFsIEJ1dG9uc1xcblxcdGh0dHA6Ly96b2NpYWwuc21jbGxucy5jb21cXG5cXHRieSBTYW0gQ29sbGlucyAoQHNtY2xsbnMpXFxuXFx0TGljZW5zZTogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxcblxcdFxcblxcdFlvdSBhcmUgZnJlZSB0byB1c2UgYW5kIG1vZGlmeSwgYXMgbG9uZyBhcyB5b3Uga2VlcCB0aGlzIGxpY2Vuc2UgY29tbWVudCBpbnRhY3Qgb3IgbGluayBiYWNrIHRvIHpvY2lhbC5zbWNsbG5zLmNvbSBvbiB5b3VyIHNpdGUuXFxuKi9cXG5cXG5cXG4vKiBCdXR0b24gc3RydWN0dXJlICovXFxuXFxuLnpvY2lhbCxcXG5hLnpvY2lhbCB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzc3NztcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcXG5cXHRib3JkZXItYm90dG9tLWNvbG9yOiAjMzMzO1xcblxcdGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMC4wOGVtIDAgcmdiYSgyNTUsMjU1LDI1NSwwLjQpLCBpbnNldCAwIDAgMC4xZW0gcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwLjA4ZW0gMCByZ2JhKDI1NSwyNTUsMjU1LDAuNCksIGluc2V0IDAgMCAwLjFlbSByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XFxuXFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwLjA4ZW0gMCByZ2JhKDI1NSwyNTUsMjU1LDAuNCksIGluc2V0IDAgMCAwLjFlbSByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmb250OiBib2xkIDEwMCUvMi4xIFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgVGFob21hLCBzYW5zLXNlcmlmO1xcblxcdHBhZGRpbmc6IDAgLjk1ZW0gMCAwO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0dGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLDAsMCwwLjUpO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0XFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdFxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXG5cXHQtbW96LWJvcmRlci1yYWRpdXM6IC4zZW07XFxuXFx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAuM2VtO1xcblxcdGJvcmRlci1yYWRpdXM6IC4zZW07XFxufVxcblxcbi56b2NpYWw6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRib3JkZXItcmlnaHQ6IDAuMDc1ZW0gc29saWQgcmdiYSgwLDAsMCwwLjEpO1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdGZvbnQ6IDEyMCUvMS42NSB6b2NpYWw7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFx0bWFyZ2luOiAwIDAuNWVtIDAgMDtcXG5cXHRwYWRkaW5nOiAwIDAuNWVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuXFx0XFxuXFx0LW1vei1ib3gtc2hhZG93OiAwLjA3NWVtIDAgMCByZ2JhKDI1NSwyNTUsMjU1LDAuMjUpO1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMC4wNzVlbSAwIDAgcmdiYSgyNTUsMjU1LDI1NSwwLjI1KTtcXG5cXHRib3gtc2hhZG93OiAwLjA3NWVtIDAgMCByZ2JhKDI1NSwyNTUsMjU1LDAuMjUpO1xcblxcdFxcblxcdC1tb3otZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcblxcdGZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLnpvY2lhbDphY3RpdmUge1xcblxcdG91dGxpbmU6IG5vbmU7IC8qIG91dGxpbmUgaXMgdmlzaWJsZSBvbiA6Zm9jdXMgKi9cXG59XFxuXFxuLyogQnV0dG9ucyBjYW4gYmUgZGlzcGxheWVkIGFzIHN0YW5kYWxvbmUgaWNvbnMgYnkgYWRkaW5nIGEgY2xhc3Mgb2YgXFxcImljb25cXFwiICovXFxuXFxuLnpvY2lhbC5pY29uIHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdG1heC13aWR0aDogMi40ZW07XFxuXFx0cGFkZGluZy1sZWZ0OiAwO1xcblxcdHBhZGRpbmctcmlnaHQ6IDA7XFxuXFx0bWF4LWhlaWdodDogMi4xNWVtO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi56b2NpYWwuaWNvbjpiZWZvcmUge1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0d2lkdGg6IDJlbTtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHRcXG5cXHRib3gtc2hhZG93OiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLyogR3JhZGllbnRzICovXFxuXFxuLnpvY2lhbCB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwuMSksIHJnYmEoMjU1LDI1NSwyNTUsLjA1KSA0OSUsIHJnYmEoMCwwLDAsLjA1KSA1MSUsIHJnYmEoMCwwLDAsLjEpKTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsLjEpLCByZ2JhKDI1NSwyNTUsMjU1LC4wNSkgNDklLCByZ2JhKDAsMCwwLC4wNSkgNTElLCByZ2JhKDAsMCwwLC4xKSk7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsLjEpLCByZ2JhKDI1NSwyNTUsMjU1LC4wNSkgNDklLCByZ2JhKDAsMCwwLC4wNSkgNTElLCByZ2JhKDAsMCwwLC4xKSk7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDI1NSwyNTUsMjU1LC4xKSksIGNvbG9yLXN0b3AoNDklLCByZ2JhKDI1NSwyNTUsMjU1LC4wNSkpLCBjb2xvci1zdG9wKDUxJSwgcmdiYSgwLDAsMCwuMDUpKSwgdG8ocmdiYSgwLDAsMCwuMSkpKTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LC4xKSwgcmdiYSgyNTUsMjU1LDI1NSwuMDUpIDQ5JSwgcmdiYSgwLDAsMCwuMDUpIDUxJSwgcmdiYSgwLDAsMCwuMSkpO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LC4xKSwgcmdiYSgyNTUsMjU1LDI1NSwuMDUpIDQ5JSwgcmdiYSgwLDAsMCwuMDUpIDUxJSwgcmdiYSgwLDAsMCwuMSkpO1xcbn1cXG5cXG4uem9jaWFsOmhvdmVyLCAuem9jaWFsOmZvY3VzIHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNDklLCByZ2JhKDAsMCwwLC4xKSA1MSUsIHJnYmEoMCwwLDAsLjE1KSk7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNDklLCByZ2JhKDAsMCwwLC4xKSA1MSUsIHJnYmEoMCwwLDAsLjE1KSk7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsLjE1KSA0OSUsIHJnYmEoMCwwLDAsLjEpIDUxJSwgcmdiYSgwLDAsMCwuMTUpKTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoMjU1LDI1NSwyNTUsLjE1KSksIGNvbG9yLXN0b3AoNDklLCByZ2JhKDI1NSwyNTUsMjU1LC4xNSkpLCBjb2xvci1zdG9wKDUxJSwgcmdiYSgwLDAsMCwuMSkpLCB0byhyZ2JhKDAsMCwwLC4xNSkpKTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNDklLCByZ2JhKDAsMCwwLC4xKSA1MSUsIHJnYmEoMCwwLDAsLjE1KSk7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsLjE1KSA0OSUsIHJnYmEoMCwwLDAsLjEpIDUxJSwgcmdiYSgwLDAsMCwuMTUpKTtcXG59XFxuXFxuLnpvY2lhbDphY3RpdmUge1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgyNTUsMjU1LDI1NSwuMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkgMzAlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMCwwLDAsLjEpKTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgyNTUsMjU1LDI1NSwuMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkgMzAlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMCwwLDAsLjEpKTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LC4xKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAzMCUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgwLDAsMCwuMSkpO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSgyNTUsMjU1LDI1NSwuMSkpLCBjb2xvci1zdG9wKDMwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSksIGNvbG9yLXN0b3AoNTAlLCB0cmFuc3BhcmVudCksIHRvKHJnYmEoMCwwLDAsLjEpKSk7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LC4xKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAzMCUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgwLDAsMCwuMSkpO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChib3R0b20sIHJnYmEoMjU1LDI1NSwyNTUsLjEpLCByZ2JhKDI1NSwyNTUsMjU1LDApIDMwJSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDAsMCwwLC4xKSk7XFxufVxcblxcbi8qIEFkanVzdG1lbnRzIGZvciBsaWdodCBiYWNrZ3JvdW5kIGJ1dHRvbnMgKi9cXG5cXG4uem9jaWFsLmRyb3Bib3gsXFxuLnpvY2lhbC5naXRodWIsXFxuLnpvY2lhbC5nbWFpbCxcXG4uem9jaWFsLm9wZW5pZCxcXG4uem9jaWFsLnNlY29uZGFyeSxcXG4uem9jaWFsLnN0YWNrb3ZlcmZsb3csXFxuLnpvY2lhbC5zYWxlc2ZvcmNlIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xcblxcdGJvcmRlci1ib3R0b20tY29sb3I6ICM3Nzc7XFxuXFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcblxcdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwLjA4ZW0gMCByZ2JhKDI1NSwyNTUsMjU1LDAuNyksIGluc2V0IDAgMCAwLjA4ZW0gcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwLjA4ZW0gMCByZ2JhKDI1NSwyNTUsMjU1LDAuNyksIGluc2V0IDAgMCAwLjA4ZW0gcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcblxcdGJveC1zaGFkb3c6IGluc2V0IDAgMC4wOGVtIDAgcmdiYSgyNTUsMjU1LDI1NSwwLjcpLCBpbnNldCAwIDAgMC4wOGVtIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG5cXHR0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XFxufVxcblxcbi8qIDpob3ZlciBhZGp1c3RtZW50cyBmb3IgbGlnaHQgYmFja2dyb3VuZCBidXR0b25zICovXFxuXFxuLnpvY2lhbC5kcm9wYm94OmZvY3VzLFxcbi56b2NpYWwuZHJvcGJveDpob3ZlcixcXG4uem9jaWFsLmdpdGh1Yjpmb2N1cyxcXG4uem9jaWFsLmdpdGh1Yjpob3ZlcixcXG4uem9jaWFsLmdtYWlsOmZvY3VzLFxcbi56b2NpYWwuZ21haWw6aG92ZXIsXFxuLnpvY2lhbC5vcGVuaWQ6Zm9jdXMsXFxuLnpvY2lhbC5vcGVuaWQ6aG92ZXIsXFxuLnpvY2lhbC5zZWNvbmRhcnk6Zm9jdXMsXFxuLnpvY2lhbC5zZWNvbmRhcnk6aG92ZXIsXFxuLnpvY2lhbC5zdGFja292ZXJmbG93OmZvY3VzLFxcbi56b2NpYWwuc3RhY2tvdmVyZmxvdzpob3ZlcixcXG4uem9jaWFsLnR3aXR0ZXI6Zm9jdXMgXFxuLnpvY2lhbC50d2l0dGVyOmhvdmVyLFxcbi56b2NpYWwuc2FsZXNmb3JjZTpmb2N1cyBcXG4uem9jaWFsLnNhbGVzZm9yY2U6aG92ZXIge1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSgyNTUsMjU1LDI1NSwwLjUpKSwgY29sb3Itc3RvcCg0OSUsIHJnYmEoMjU1LDI1NSwyNTUsMC4yKSksIGNvbG9yLXN0b3AoNTElLCByZ2JhKDAsMCwwLDAuMDUpKSwgdG8ocmdiYSgwLDAsMCwwLjE1KSkpO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwwLjUpLCByZ2JhKDI1NSwyNTUsMjU1LDAuMikgNDklLCByZ2JhKDAsMCwwLDAuMDUpIDUxJSwgcmdiYSgwLDAsMCwwLjE1KSk7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDAuNSksIHJnYmEoMjU1LDI1NSwyNTUsMC4yKSA0OSUsIHJnYmEoMCwwLDAsMC4wNSkgNTElLCByZ2JhKDAsMCwwLDAuMTUpKTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDAuNSksIHJnYmEoMjU1LDI1NSwyNTUsMC4yKSA0OSUsIHJnYmEoMCwwLDAsMC4wNSkgNTElLCByZ2JhKDAsMCwwLDAuMTUpKTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwwLjUpLCByZ2JhKDI1NSwyNTUsMjU1LDAuMikgNDklLCByZ2JhKDAsMCwwLDAuMDUpIDUxJSwgcmdiYSgwLDAsMCwwLjE1KSk7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwwLjUpLCByZ2JhKDI1NSwyNTUsMjU1LDAuMikgNDklLCByZ2JhKDAsMCwwLDAuMDUpIDUxJSwgcmdiYSgwLDAsMCwwLjE1KSk7XFxufVxcblxcbi8qIDphY3RpdmUgYWRqdXN0bWVudHMgZm9yIGxpZ2h0IGJhY2tncm91bmQgYnV0dG9ucyAqL1xcblxcbi56b2NpYWwuZHJvcGJveDphY3RpdmUsXFxuLnpvY2lhbC5naXRodWI6YWN0aXZlLFxcbi56b2NpYWwuZ21haWw6YWN0aXZlLFxcbi56b2NpYWwub3BlbmlkOmFjdGl2ZSxcXG4uem9jaWFsLnNlY29uZGFyeTphY3RpdmUsXFxuLnpvY2lhbC5zdGFja292ZXJmbG93OmFjdGl2ZSxcXG4uem9jaWFsLndpa2lwZWRpYTphY3RpdmUsXFxuLnpvY2lhbC5zYWxlc2ZvcmNlOmFjdGl2ZSB7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDI1NSwyNTUsMjU1LDApKSwgY29sb3Itc3RvcCgzMCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkpLCBjb2xvci1zdG9wKDUwJSwgcmdiYSgwLDAsMCwwKSksIHRvKHJnYmEoMCwwLDAsMC4xKSkpO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgyNTUsMjU1LDI1NSwwKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAzMCUsIHJnYmEoMCwwLDAsMCkgNTAlLCByZ2JhKDAsMCwwLDAuMSkpO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgyNTUsMjU1LDI1NSwwKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAzMCUsIHJnYmEoMCwwLDAsMCkgNTAlLCByZ2JhKDAsMCwwLDAuMSkpO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChib3R0b20sIHJnYmEoMjU1LDI1NSwyNTUsMCksIHJnYmEoMjU1LDI1NSwyNTUsMCkgMzAlLCByZ2JhKDAsMCwwLDApIDUwJSwgcmdiYSgwLDAsMCwwLjEpKTtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgyNTUsMjU1LDI1NSwwKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAzMCUsIHJnYmEoMCwwLDAsMCkgNTAlLCByZ2JhKDAsMCwwLDAuMSkpO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChib3R0b20sIHJnYmEoMjU1LDI1NSwyNTUsMCksIHJnYmEoMjU1LDI1NSwyNTUsMCkgMzAlLCByZ2JhKDAsMCwwLDApIDUwJSwgcmdiYSgwLDAsMCwwLjEpKTtcXG59XFxuXFxuLyogQnV0dG9uIGljb24gYW5kIGNvbG9yICovXFxuLyogSWNvbiBjaGFyYWN0ZXJzIGFyZSBzdG9yZWQgaW4gdW5pY29kZSBwcml2YXRlIGFyZWEgKi9cXG4uem9jaWFsLmFtYXpvbjpiZWZvcmUge2NvbnRlbnQ6IFxcXCJhXFxcIjt9XFxuLnpvY2lhbC5kcm9wYm94OmJlZm9yZSB7Y29udGVudDogXFxcImRcXFwiOyBjb2xvcjogIzFmNzVjYzt9XFxuLnpvY2lhbC5mYWNlYm9vazpiZWZvcmUge2NvbnRlbnQ6IFxcXCJmXFxcIjt9XFxuLnpvY2lhbC5naXRodWI6YmVmb3JlIHtjb250ZW50OiBcXFwiXFxcXDAwRThcXFwiO31cXG4uem9jaWFsLmdtYWlsOmJlZm9yZSB7Y29udGVudDogXFxcIm1cXFwiOyBjb2xvcjogI2YwMDt9XFxuLnpvY2lhbC5nb29nbGU6YmVmb3JlIHtjb250ZW50OiBcXFwiR1xcXCI7fVxcbi56b2NpYWwuZ29vZ2xlcGx1czpiZWZvcmUge2NvbnRlbnQ6IFxcXCIrXFxcIjt9XFxuLnpvY2lhbC5ndWVzdDpiZWZvcmUge2NvbnRlbnQ6IFxcXCI/XFxcIjt9XFxuLnpvY2lhbC5pZTpiZWZvcmUge2NvbnRlbnQ6IFxcXCI2XFxcIjt9XFxuLnpvY2lhbC5saW5rZWRpbjpiZWZvcmUge2NvbnRlbnQ6IFxcXCJMXFxcIjt9XFxuLnpvY2lhbC5vcGVuaWQ6YmVmb3JlIHtjb250ZW50OiBcXFwib1xcXCI7IGNvbG9yOiAjZmY5MjFkO31cXG4uem9jaWFsLnBheXBhbDpiZWZvcmUge2NvbnRlbnQ6IFxcXCIkXFxcIjt9XFxuLnpvY2lhbC5zdGFja292ZXJmbG93OmJlZm9yZSB7Y29udGVudDogXFxcIlxcXFwwMEVDXFxcIjsgY29sb3I6ICNmZjdhMTU7fVxcbi56b2NpYWwudHdpdHRlcjpiZWZvcmUge2NvbnRlbnQ6IFxcXCJUXFxcIjt9XFxuLnpvY2lhbC52azpiZWZvcmUge2NvbnRlbnQ6IFxcXCJOXFxcIjt9XFxuLnpvY2lhbC53aW5kb3dzOmJlZm9yZSB7Y29udGVudDogXFxcIldcXFwiO31cXG4uem9jaWFsLnlhaG9vOmJlZm9yZSB7Y29udGVudDogXFxcIllcXFwiO31cXG4uem9jaWFsLm9mZmljZTM2NTpiZWZvcmUge2NvbnRlbnQ6IFxcXCJ6XFxcIjt9XFxuLnpvY2lhbC50aGlydHlzZXZlbnNpZ25hbHM6YmVmb3JlIHtjb250ZW50OiBcXFwiYlxcXCI7fVxcbi56b2NpYWwuc2FsZXNmb3JjZTpiZWZvcmUge2NvbnRlbnQ6IFxcXCIqXFxcIjt9XFxuLnpvY2lhbC53YWFkOmJlZm9yZSB7Y29udGVudDogXFxcInpcXFwiO31cXG4uem9jaWFsLmJveDpiZWZvcmUge2NvbnRlbnQ6IFxcXCJ4XFxcIjt9XFxuXFxuLyogQnV0dG9uIGJhY2tncm91bmQgYW5kIHRleHQgY29sb3IgKi9cXG5cXG4uem9jaWFsLmFtYXpvbiB7YmFja2dyb3VuZC1jb2xvcjogI2ZmYWQxZDsgY29sb3I6ICMwMzAwMzc7IHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC41KTt9XFxuLnpvY2lhbC5kcm9wYm94IHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBjb2xvcjogIzMxMmMyYTt9XFxuLnpvY2lhbC5mYWNlYm9vayB7YmFja2dyb3VuZC1jb2xvcjogIzQ4NjNhZTt9XFxuLnpvY2lhbC5naXRodWIge2JhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7IGNvbG9yOiAjMDUwNTA1O31cXG4uem9jaWFsLmdtYWlsIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmOyBjb2xvcjogIzIyMjt9XFxuLnpvY2lhbC5nb29nbGUge2JhY2tncm91bmQtY29sb3I6ICM0ZTZjZjc7fVxcbi56b2NpYWwuZ29vZ2xlcGx1cyB7YmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTt9XFxuLnpvY2lhbC5ndWVzdCB7YmFja2dyb3VuZC1jb2xvcjogIzFiNGQ2ZDt9XFxuLnpvY2lhbC5pZSB7YmFja2dyb3VuZC1jb2xvcjogIzAwYTFkOTt9XFxuLnpvY2lhbC5saW5rZWRpbiB7YmFja2dyb3VuZC1jb2xvcjogIzAwODNhODt9XFxuLnpvY2lhbC5vcGVuaWQge2JhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IGNvbG9yOiAjMzMzO31cXG4uem9jaWFsLnBheXBhbCB7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgY29sb3I6ICMzMjY4OWE7IHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC41KTt9XFxuLnpvY2lhbC50d2l0dGVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjNDZjMGZiO31cXG4uem9jaWFsLnZrIHtiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2ODhFO31cXG4uem9jaWFsLndpbmRvd3Mge2JhY2tncm91bmQtY29sb3I6ICMwMDUyYTQ7IGNvbG9yOiAjZmZmO31cXG4uem9jaWFsLm9mZmljZTM2NSB7YmFja2dyb3VuZC1jb2xvcjogIzAwQUNFRDsgY29sb3I6ICNmZmY7fVxcbi56b2NpYWwud2FhZCB7YmFja2dyb3VuZC1jb2xvcjogIzAwQURFRjsgY29sb3I6ICNmZmY7fVxcbi56b2NpYWwudGhpcnR5c2V2ZW5zaWduYWxzIHtiYWNrZ3JvdW5kLWNvbG9yOiAjNkFDMDcxOyBjb2xvcjogI2ZmZjt9XFxuLnpvY2lhbC5ib3gge2JhY2tncm91bmQtY29sb3I6ICMyNjdiYjY7IGNvbG9yOiAjZmZmO31cXG4uem9jaWFsLnNhbGVzZm9yY2Uge2JhY2tncm91bmQtY29sb3I6ICNmZmY7IGNvbG9yOiAjZmYwMDAwO31cXG4uem9jaWFsLndpbmRvd3Mge2JhY2tncm91bmQtY29sb3I6ICMyNjcyRUM7IGNvbG9yOiAjZmZmO31cXG5cXG4vKlxcblRoZSBNaXNjZWxsYW5lb3VzIEJ1dHRvbnNcXG5UaGVzZSBidXR0b24gaGF2ZSBubyBpY29ucyBhbmQgY2FuIGJlIGdlbmVyYWwgcHVycG9zZSBidXR0b25zIHdoaWxlIGVuc3VyaW5nIGNvbnNpc3RlbnQgYnV0dG9uIHN0eWxlXFxuQ3JlZGl0IHRvIEBndWlsbGVybW92cyBmb3Igc3VnZ2VzdGluZ1xcbiovXFxuXFxuLnpvY2lhbC5wcmltYXJ5LCAuem9jaWFsLnNlY29uZGFyeSB7bWFyZ2luOiAwLjFlbSAwOyBwYWRkaW5nOiAwIDFlbTt9XFxuLnpvY2lhbC5wcmltYXJ5OmJlZm9yZSwgLnpvY2lhbC5zZWNvbmRhcnk6YmVmb3JlIHtkaXNwbGF5OiBub25lO31cXG4uem9jaWFsLnByaW1hcnkge2JhY2tncm91bmQtY29sb3I6ICMzMzM7fVxcbi56b2NpYWwuc2Vjb25kYXJ5IHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGViOyBjb2xvcjogIzIyMjsgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjgpO31cXG5cXG4vKiBBbnkgYnJvd3Nlci1zcGVjaWZpYyBhZGp1c3RtZW50cyAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXI6IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuXFxuLyogUmVmZXJlbmNlIGljb25zIGZyb20gZm9udC1maWxlc1xcbioqIEJhc2UgNjQtZW5jb2RlZCB2ZXJzaW9uIHJlY29tbWVuZGVkIHRvIHJlc29sdmUgY3Jvc3Mtc2l0ZSBmb250LWxvYWRpbmcgaXNzdWVzXFxuKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICd6b2NpYWwnO1xcbiAgICBzcmM6IHVybCgnL3Nkay9mb250L3pvY2lhbC1yZWd1bGFyLXdlYmZvbnQuZW90Jyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3pvY2lhbCc7XFxuXFx0XFx0c3JjOiB1cmwoZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsZDA5R1JnQUJBQUFBQUJlUUFBMEFBQUFBSUdnQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUJNQUFBQUJvQUFBQWNabnVBeWtkRVJVWUFBQUZNQUFBQUh3QUFBQ0FBVGdBR1QxTXZNZ0FBQVd3QUFBQklBQUFBVmsvbDNFQmpiV0Z3QUFBQnRBQUFBUFlBQUFJS25sNTY3R2RoYzNBQUFBS3NBQUFBQ0FBQUFBai8vd0FEWjJ4NVpnQUFBclFBQUJLTEFBQVpzQU1wSnJCb1pXRmtBQUFWUUFBQUFEQUFBQUEyLzNKU1dXaG9aV0VBQUJWd0FBQUFJQUFBQUNRRmZRSDVhRzEwZUFBQUZaQUFBQUJqQUFBQWdEdE9BYmRzYjJOaEFBQVY5QUFBQUVRQUFBQkVXWlpmK0cxaGVIQUFBQlk0QUFBQUhnQUFBQ0FBY0FDK2JtRnRaUUFBRmxnQUFBRGVBQUFCaGxiRDkvSndiM04wQUFBWE9BQUFBRllBQUFCc1VlbWhoSGljWTJCZ1lHUUFncE9kK1lZZytsd2x4eGtZRFFCQStRWXFBQUI0bkdOZ1pHQmc0QU5pQ1FZUVlHSmdaR0JtVUFDU0xHQWVBd0FGeEFCVkFIaWNZMkJrRW1PY3dNREt3TUhvdzVqR3dNRGdEcVcvTWtneXREQXdNREd3TWpQQUFMTUFBd0lFcExtbU1EZ3dLSDVnWUh6dy93R0RIdU5yQnZVR0JnWkdrQndBajZZTFNIaWN0WkM5TGtSUkZJVy9PNjd4engyR1lRd3pFbEhNTkJNdm9CS05xSVFvaVZCS0pCTHhNbFNpbW5Kb0tHaThneGVRVUNoMXk3by9qWnVydEpPMTkxN243SFd5MXdFR1NORWdjQ1lJellLRWg3eTdydE55TisxdWxUVTZkTmxna3kyMjJXR1hmUTQ0NHBoVHpqam5na3V1clByOFFvcGZZOFdhZGs2elo4MmhOU2ZGR24zclRSOTYxWXVlOWFSSFBlaGVmWi8zakZ2MWRLY2JYYXVqZHBSdTJxVTRXaG55VWJlM3BqMUYxS2hRdGVjeXFmbllmOG1wbEZQRWwvVkdNMlRaeldBNVBscjhQVEdVNUdGRzRqTEtXRUxIbVpoa0twdUlhdjdFU2pWanM4bHFTekRQUXRIdU04YmNINzcrSlg0QTYvWTdOd0FBQUFBQUFmLy9BQUo0bkoxWWVZd2tWMzJ1MzN0Vjc5VjlIMzEzVC9mME1kTXpQZE5uemVHWjJXTjJ2WWZ0WFhiWEYydnZydGMydXc3R0RrWkFEQVJJMkJDaGlGaDJoTDFCY3NBS2ljTGhrRWdKUkpFd1JFRktMTWNSb0JBblVrS3dFc0ZpNUFBU09JcVR6T1QzcW1jZGt2OUkxL1QwTzZwZXZYcnYrMzNmOXlzSkpHbjMyMFNDYjB0RWtqeVlJZElPVm5ZazhaR3g3N3Z3QTdnbVdWSkY2a2pMa2pRT2hvTUs0VFowZ1RlU1lUb2NUTkpKTzk1ckNFUkQwc055c2ducGFESnUzUHR5ZnJudHFNNWJ0cy9Wcmd5djFNNGR1dCsxWjEzZGVjdWh1MmNlZXY5OHZBKzRuSFAzemVhNkNsbXZ3dk5CYTcxOStPVFY5S21UaHc1MVcvMURKNThDNnh4eC9QZEJvd0F5U0dSM2QvY2F6dmQ3VWszYXhCbVBKbHZBb2pDcDBDaGtqWHFyemVQRUpxSkFXK05rTkJrTzRpUnR0UWViSUVwQmpHYzVNQm1QV3UyV2E5MWYreVduVVBZYlNXVi9ORmRlVkdKUHRTSjZCbDVxUlBrdHU5cnJ3MEtaWnkydWRTeDNkTzEyZUFocnVXYi8zRkN4bzZJVDU1TGdyT3NDa3owVExqQ2FCSkh2M0pGVFRlWmFPNTlrRkUvMlp1ZFhqZ1VWU2NaNWY0ZWNoKzlLYmVrRzZiQjBDdGR5TkZtSDFuaVVpbmxuRmQ2b1FCVGlZa1pobkloaTFwT0dNUzd6ZU5UdXNYYXIwV0pwQllieHBFZVlNaDZPaDlFd2FrU044ZG45eFVoVjlQSDJtY2tuWmdlNTRtSmdsT3hxN3N5UjdYT3JOeXh1cEJSa2xWdXFMNGZCMHFFNkcxUXJzL3B3WXhabUx1VXZYY3B2THh3T2M0NERCNWVYRGhlMFlXMXAxdll0cmFMSHZVWnZlemp2emZZWG16cFhkSjBaaWtrWjlQOXpiZzNTTjYyUXlVaGNmdW1TQkJJZ1ZuNFYvaGh4SXFXakZQZGZQTk1BRjV4bkQ4VzRMVGZxckF1NE5ka3hCbWJ1NzNiMjNiR3ZNem5hSkFyMWEwRUxRSUhOd2tsRmt5MHRPR1hFQzBlOTJtQmhZMk5oVUF2dVNwZFVSVlV0VlZiQXN6V1RxbXBEb29qUmEvQXM0dUVoNmYzU1J3UWlVb1RrT29nVjI0QzlTcHpFeVFDaEdVK1BONmFEVThTSmlyTmptK0Npc3k1MWxMQkNwcGRQcHptcVI2RURqRGZxMmJ4NzBHNmw0M1RVNXdKMklUNFBaOHBrR0NlamRnT0xxcXhwenJKcU1PNnpTSytFSWJXTll0RDNJcWJJbEtnMmQ2eGNHS1p0UFdlcWxrMEFnQkNnaXZqSVdKSmxoM3BsTHdnWDNTTFJaY1dtcHJPL2FYSTFvSVNlQXdiS3NtOVNtREhNSktnU2g2dHdMTlE1VlF6Vk1DdVdaaWdVVkRVaGpMTlM2VVN2RXR0M3pNZEZsNVBDZkZJMDhGNVVWcW1zVTFGU0dOY1VZdWZiUmJ5OVBnU29GeTBUVWVJeXh6OGZlWWZoTHFDR2Jjd3JESjRrb0haQk41QVRxTUF4SE05d3ZQbi9SbkcyYW9oalhPYzBhNE5zOGFMd1o0QXhYYWczQkpCSjJiTkJHVlpJeGJOL1Joem5jb2pqUWx4V3Ria1ZLRVJsVlR6ZmYrMitRbHo0RG5LZUo4MUxFaEVjTW9VTXpwcDZRMjhkeGdMZncwRVpoZ2dTbkhqVTM0QkdITkxaY3NuM1BMOE1wZElqVzIrWDFYSzgrc2lSOVFQTnR3TThQcHh4dldMZTlYYmVDN2Z0Zk9iTHZ1N2xidjdpVjIrNlpRVmcyZjBzUnM5L1NHM3lObmhNZWhJbk1VV3dnR3k2aHNHTzdJYXdyVEFFODBpc0ZtbHZ3anF0MGpoQkJPS3lDU1Fpd0RmcGVMSWxaMWVLdFI1VUlKdTNqWHhOa3pBYkkzc09nV1NjZFFQQlRFV3ZhTUF4c1NvaktCRE9Da2NnSVJjcUJxTmM0UkNXZ0ZHbU1FWnRvbExObFhtemF0bVdiZWhjemdBTXhNTElwSG91aHllcHFxSG9sc2VWd0haMVFuek5MeWxnTWdhVXlUbzBvN0NBVnhxNlp1bTAzcVNXWm5PVEU1blg3YUN6djVXTWwwR1ZHWVYzaTNBQW9FVFhQRG8vUjFTRnl6S0d5cXF1dG13bXBxSWhtcmx1SXA2OVNERk5UVTlVcXNvV1ZFZW1sVTBNeVVTbXNsTjJjZzBPcnVvd21XdXlCalBGb3VISll0SktsM2lhQ3FUUTRDYVJaMmJMMi9kUVQzTnN4UGxVRjkrRnV0aEhqT055cHNoYjRxY0hHeEFQZXdJRHVMNEM4UWlQU2NxNCtFYWhUWEV4SGZmTmgrY09tcnJ0dTR2cnhWcXg2aS8vMmdsNmZMTFNXbXphODgxbXZsM1p2TzNSUTI4OVd5QXJnelpSMUNNOTRucXJNNDNLK2hIWnM4WTN6V25KVWw1eDJ5VnZkUG44MFlXMTZYeXVrZVBJYy91UjR6YnBGb2o3VmhRTXNFeURFUmF0YkZleFBCd01wenR0eTV6VkJXRVIzRjhiZUdsbGZrYlZHTk5WeTdNMHBsSXZOTXlGZ2dWeXJIQS9iNjR1TERJMkRqU3FqN2FPVG9LNFdVOVU3WlFxZUNDeDRlNlpVY21sZ3EzeTFXNXp3ZDQzV2Uzblk2WVVPYkVQZHFyeWZKaDN2TkdEWjQ0dldpYVNUZ0NHampSRFRmMjZsN2hHZmdIbkh5QnpyRXNuY0ZVeGlMWUVWaFBlZ3lYQXlkdFlSejRlL3UrMkFCZTZpbXVPR3A0aXF6aUE4UDAvYlEyT2JSTi82UG41MGlpZStJdW03YmxxY1gwdzlrZWVWeWlPNHJHL2FGbStnMjB2amdNc1p0M08yQis3WHFFMGJJK0RoYXl0dEladEk5OHRGa2JWNTNSa1RFV1Bubk04Z2gvemU4L3BabGEzZlFGTmMrY0hYN0o5UkQ4eGpPbXBCcWhmMnVzenhMbE1rNFErU1lmSVZ4Qkh4L0daVCtQZTRZNVZ5VENKeXhBS1VlSDFNc3dnalhSSmZRTmE2R1ltK1B6NEg3V3IxVWRURmNaVk91UnQwYmE4Q2FJVnorUlJNNkZ0bmlhY0VnUzZ0dm9iR0RGazFXR2dJYmNma3dGcnlpOXZLN0pHS2Z5VGlDUlRXLys1ZDBaY2JsQ3NrTmRsSVBlY242L1paSVhBNytrVXgxRCtnUEdMc2lpVXlvVHd5NEFSd3Q0amE3S2lpbDNrK0pqeWZSOGpCc2lVQ3gxSjZjNjM0T0lLV1pFeWIzT05ESEZ2YzlMdDBtWHBvK2dBSm9LQ2hBdVl4RUpyUVRneURKWXRHRTJFSktjQ3IxMUFUREl1MnNmVGJhOG9aUnJ1MFJacUdQSlRtd2w2YWszVll6aEpOOG1HMEk1a09rcW02TmxDWnFRMkRRT2hKQndWWnhrSSsrQ1Q5OTlEZGNJMXJqa0xENDVPL3ZxS1RENWVyeGJuN0NvM0V0bkxVNkt0YWRwMnoxcWJVVFNVWU9ESVkzS1hNZzA1VUNmbG9wL3ZETzRJUFpUZXlHUUtWSnpGbDVEdGpOQlhsRVFob1ljQmdTUVZFSlpvcG1sUWNsYVdqN1hRcVZKTFlWcWh2RElrdUJkUE5BYVdxUkNpelJnT0JNaUtIQS9TV3lBVnhkUjhGaFBYUG1mRk9yS3VUSnRVa1ZHZUhGcmp5bklhNW9ERld1SzRsbXg5SFFlZ0N2SVdrakgxK3c3ZVdWNzBzQUs0cFNBNDRqSDBRcitkeFppVW9qa1VhaHloU0tKUVpTYnhzUk9IK2lkT2NQUGl4WHUvZWJFL1BuN1J0UVlYWDMwMWk4L2RmOS85SWVHb2V3YnFYaVFWSmFtZHR0TUVJWmJ3dGdQakpDMERUZEkyTWsrU1J1eHRiL3ZFNWJkKy9QNzduNzU4ZWJCOCtjbW5yajZGczdrMGV1bjA2Y3QzM25udm1kdlBuenhaTDVkT3doZGcvZHg5dCswODhBVTRXYTNoZlRETDJIMEZkdUg3T0VkMER6ZUEyTWRzRzdNZEZ4NHJGV0tHOUxwbnY5TFdsQkFtZ21ZbkdQUjhEeDBjZC80TjV0dmJkanpDdWZOTER5eWRtNHVpdVhOWU9EOFhkdWNQUllaZDhKY0twbTBvYXBDdmJsUkQzK1hjTWdvbE54OFZvb1BkZWM4cmx6dHozYm41ZHFYc2VWKzh2SHkrRTBXZDgvMzcreGZtd25EdXdyMUhWbGVTdWFxRjlHZVVqN2FMbFFaaG5vcUdqZ0UwS3NYMmFobWxoTmlWdVdSMTljYUZEbzdpK3I1YnJyUTdFc3M4NnN1NEwyMVVrM1hwb0hTajlBRHlYeGhuTHJNeEQ0MldjQlQ0SkJnWWFEUHdXWmd3VDBMWGJaaGtXWXh3VVh4cXFGbTk1WXNTRmlnbUFPa3c2cU80WjE1cWkyU0JzQVNqTnU1L1k0eTd2blYyMzc1RnhJZHBOZ2V5bythck5GZHFUL0toYlNXbHpkaHhZdnhHeFdZUi96NlRhK1J5RFhzN1Z5Wk9HRENPM2hYbEZXSVQyUTlwWTJscHM1ek85SG96dFo1UmNNaG8xamFvdk82NjQxWnV6dkpEUHpUcVg2em5jdlhjSDFsQllObEJBRmZFZUxtZGI3MzIycDg5N3NZNlEzK3J5RU1Pd1BINzZIaHBhZXJmU1JmWFpoWXpoeFJYcGJVcGIwRmtLODQwcjVPckVQV1VzZUtsWGlCa3JRbzhHV2ZpQU1YNTBhaHJXZVYrSldkeTRSVllzVDViMXZUQnlmNnNxNEY4MUtOQkdCdEc5NU9UNkZpeCtIUXRuUzI1QnBBdDRzYjVIRDRmVnczZHowVVdrdVpZS2RTYWpiTDZPZmpyd1U0SHVPQUIxZXY4WWpVdUVzSGhYUGdCZUFKNW5HT0VPSWplQkdPa0trblJPT0V6dUF0TkRMRXhSa3Y3cDc0WUtyeU5jZEhaK2RIenp5dlB5MTgyLzl4Nk9uNDJ1YjN4cmxtek85T3QvUzE4N3JOLzgvUHp4eGZDN29QejZmeHZOUyszdnBIL1ZQNmYrVi93TEZaOFNTY0ovSW0wSVgwQUl6cStucitrazcxakQvci9jNkEyWEkrRDZ3ZlNZeExHNmVpTmk1QTJKeFZaakROOG95a1JWbkk2dXFEZjY5ZnVEYnZjQ2hrejNVcDNiclE2VGhmbTZ6cmpLREZJUlZZK3JsYWJZV0phQ2xGZFJRZ0ZNODBrYnRjcVVhamhvOWRSSUxsSERZMzdMbE1NcWxNVmJJMXpibUFDcmRzS1V5aFZ3c2h4ZlkyRjRHc0Fmcis3aWt6ZjZxSzFnQWRWN3BnNXkwWmp5anl2b3FtNnFqa3NVT1NWZm5lMkVScGMrRGpjZVVWeml2T2QwV0FWczBMUkVLTTE1R0ZKOFd3MXA2QmdvYVVCUjZhZ21hV0dZUlBCeVNBN2tSdkVydGFrVlo5QUxYQVJuSXJqbGJoR2hWOTVRcXJReS9CNTNPTzJ0Q1NVRytvTWNZZkxPKzZQV2hpZ2ZReTd6SHhsLzBjdHVkN0tvakxlKzAzYTZYalN3OHl4ejl2OUhtcGQwazk0bjFXUXRQcHBndGR1UXB2a093ZDkvMEJucWVVbUhweGE2eHp3L1lPZHRWT25kbjU0ZURBNDNQL0w3UDlyUjQ1dzJVLzQ1aFpQZk1xT0hFSDZSM1J0WWszbXNESlhyOCtWM20yNHJ2SEsycHRFNWZRN1Q3M2N6NjdNL205Y3VBQmFZbEh0OUdtTldvbDJ6d1U5dHFjMU8wWjNwaUMyL3dIais5dVpUMU1sVTNMUnAvVFRpQ2RSZTV3Mkl3dWk1dmdiK1BrK0pEdmZ5NzVQbFYrQStJWHk1LzlsN3NjMC8rUE9YMDA5bmluNThCTmNzNTYwTGQwbFBTeEpBZVpKRXdFcGdiSk53TkliME9wbDFCOFA0NnhuQ21WbGdnaThma0o5M05vRDUyQjZwUTN0K2g0aXMzWSttVUtXaDN0STdZRkpITTNuYko4UGNGU1RBMDNUYU81dXgzYmlmRjB6Q0hwZ0gyTEwxRkhONlZsSGhpYzBEemVkdDVwNTErWUlhRFZNcXNVUjBSVkZNd25pZEhHbTdLTW9FNkthdWVhN1pHN2xPbjBMWEVNTFptdXV5dUEzTlFzOCsxTmRBbC9KYWFwTUEzM3RXdHNMdUtxQXF6a2lCVEgwUExYUVZmempyQlpUcEJSZkNWMlJwUk4wR0o0Zis3OGkwT3BwT0E1RjdjZjBGak1XbVo5R1FkZmNBdk5jSmpPemtITlV0SktTc3Z2Njd0L2pQcjJNSEtRak54U2t1aVExRzd5UkRwUEdFdkJab1F3SVBWWm5RbG9FU0xOZm1EdHRITC96NUowM0Z3c0ZLRjE5NmVyVmwvTFBQUExJTTQrODU0bExsNTY0OUV6NzFWZlAzbnJyTzBUNzFRT1BpSjRMbDBTUHRIZlBmNE4vaGE5TE1XclhEWmg5M0lpUjBBT3g0Z3dYUG9xakNtUStMNTFRaHB1UWJUUHVGUFl5M0p1OTZpUjdONUNad2JhZzlYUWljbjU0SlRuV3FSUWVlS2FvRy9IakY4NjhrMExVZlczZkI1b3RkYUh6dmhTYytNWUhOUFhXamNNUEdOUW93eTJIem14c2Rqb0hBTjZ4dlowL3BwQm1CVDVkQ1N5ZHhmZGV4alNoQkcrK1QxZXYzRm1yMzdUemgwRi9kZTNLcE45SVFvZnF0eDViZTZ1cXYrbkdoTU9KaDc1NncxeG5IOENCdWZsSHpmMEhMQkpzb1phTFoxVXpuZjRtYWxGSnVsVzZUM3BRZWxUNmlQU005S2NDeDNRNHRTSENiZ3JiS25KbUVQNUU1SUJaSnJOSnBuRE5UcXNRUkt4NDEyaFRnZGxHWGJ4Q0VrYTRuYjFIU3FjcCszRGNGdjZNWDVkekxzYkNCQ0FTZGhsWnV3cERJZUY0b3cxb0JEK1Yya1Zpc0drd2pKS1JlQ2VMeHRsV3VpQXllU0NtN2FEUXhsNklYakZCb1ROMTE2R2tqcGxtWXRtUXIraWE2NFdLN0NJQVpYZFVSbjVGNkxHNFBLb0dNZmNNUzlHMHZCbHFrUE44ZGhDNFVkNWZiamc1cXRaNnRWclBScnAxU2dYVkpPY2NWVDFXcThvTXFrVWFCejZWWTlkVVFpOUg1WkxCNGE0VnIyQmhwQ21xNFdrMHRDeVR3bUpRdEZYd3cxQkZTcTduWlp4UzJkRlU1Y2NhNXQxeEh2T29xT2E3aHBGUk5Rc25zVjRwNWRHU2E1R0I5b0dJNUVWazdwN25IK2JjZFdMMk5IUWpBOWorWG0vLzB1c1lPcG90N3pNVVM3Y29lZmdNb09jK0Jrb3VIeW41RUZXam5JVG9tV00zVmo5NnN4T0xPRldvYTlnNlpqa3NIMHFaNW41dzkzVTRDMTlEZlo5QnBHZE9MRUVvbzczYVFoc2Q0dS9ZRzlIckw3c2lPSE40Y3VTV3V6RWo2akp5cGlxMzVGNWhwdGV0VnVGcnA0NmZiendyTStYVG4xWVVlSUh0U3VOeG12NmRKRm1Tcy9zYS9BaGV4RGoyMEVXME1MSTJNSzVPUzNkTGI1SGVMcjFYdWlKSnN3SVNOdFRURUprd0U1VDJuZytzdDVUcmpwQzFtcUpZZ2V6VmQ5YVFabjNwbmsvRW1LdFAzMUdJT3AwT2hLWEp0SE00NEcrWXk5YTBCd3NqdnFkZ0RBNkdsUmlpOHRYSWRxS29HandiT1hZVWxhT2RGME0wamFJQ1ExR0NHSXNmeHBQd1pNY0pEenBSWE02Nkk5dU84SVF3S29mNHdUYmJ1UnBtN1U3NG5rb1lUaytPc1BSd09ZeEs0WWR4eEJEUHZRMHZLVVhoYlc0UWxpSWMwdzd4TjdUdEVHTGJDWEFvMFZJT3IyQlRGRmxPdVBNdzl1UE53by9oVHlsc09LSTNlRjFjRVphV0F5eFhBdFE1UzdvTFhvV0xtS2RXcGE0MGtOWXdzakZTWTh4VUNhYVlkcVl4UWtjbXFQUklhbkZhSVZOdEdVMDRxaGhyVDdDS0hSWDRyRnIwdWVtYXFsZkVmTmgyODgyaVo2Z3krVkNpeDZORzhwUGV1cEpvemtRbFVESzZkRFd0Zm1peVpyUTRhOEZGUkNmVDhjK1NuWVAxZmpCREsyRWhYTmozWXZuSXhwTHlPNytyYjUrZWQvWG1wanU3OVB2V1NNN25XNjFjemxwUzFaNGsvVGMvdFhpUEFIaWNZMkJrWUdBQTRxb29ZNTU0ZnB1dkROeE1EQ0J3cnBMakRJeisvL1AvVGVZTXh0ZEFMZ2NEV0JvQUtsa01LWGljWTJCa1lHQjgvZjhtZ3g0THcvK2YveGlZTXhpQUlpaEFIZ0NrMUFaNWVKeGpZb0NDVlJDSzhSTURBeE9RWm9vRHNqc1lHQm5YQUdrdklGL2sveittM1A5L21FcUJiQkMvSElnUEFiRVJVSDRSUXo4VDIvOWZJSDJNRDRCaVdrQjZJdGdjSVJZR2hrbGc4eGdZZUpnWS92OEdZY1lyWUg0REF6OERMd0RjQUJVdUFBQUFBQUFBQUFBQUFBNEFXQUMwQVNRQllBSVlBb2dDeEFPTUE5UUVOQVN3QlNJRjVnWUVCamdHc2dkQUI1UUh6Z2lNQ1FJSkpnbldDaEFLaGd1SUM3b01kZ3pZZUp4allHUmdZRkJrMk0zQXl3QUNURURNeUFBU2N3RHpHUUFaSWdFdkFBQjRuSFdPTVdvRE1SQkYzOXByaCtBUVVvV1VnalJwZHBFMmpmRUI5Z0FwM0JzamxnWGJBdGtHbnlSVmpwQXl4OGdCY29RY0k5L3JhVkpZTU9qTjE1LzVBdTU0cCtCOENtNTRNQjZKWDR6SFBITXlMcVYvR2srWThXMDhsZjRyWjFIZVNya2ZwczQ4RWo4Wmoybnh4cVgwRCtNSmozd1pUNlgvMExNbXNWVWxkdEN2MHpZbHdSdVJqaU1iVm1TMXNUdHVWb0oyOEIyR084c1JjVFRVU25Nc1ZQLzNYYlE1RlVHT1NrNHZldFdhdER1MEtYZlJOYlYzQzJlNW9ua1ZmTlg0SU5PMXZ5MlZtdG5yL1pJUmhueVdNZTk3N1FpMXZ6cjdCd0R2T2RNQUFIaWNZMkJpd0E4VWdaaVJnWW1SaVlHZGdaZUJqMEdKUVlOQmkwR2Z3WkRCbk1HU3dZckJoc0dGd1pQQm5hR1F3WXNoaUtHVXdaVWhtaUdXZ1lWQm1JR1ZJWUtCazRHTklaUzlOQy9UemNEQUFBRHBod2hhQUFBPSkgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICAgdXJsKCd6b2NpYWwtcmVndWxhci13ZWJmb250LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgICAgICB1cmwoJ3pvY2lhbC1yZWd1bGFyLXdlYmZvbnQuc3ZnI3pvY2lhbHJlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVwiKTtcbmluc2VydENzcyhcImh0bWwsIGJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnpvY2lhbC5hdXRoMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIj9cXFwiO1xcbn1cXG5cXG4uem9jaWFsLmF1dGgwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ1MDA7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnpvY2lhbC5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uem9jaWFsLnByaW1hcnksIC56b2NpYWwuc2Vjb25kYXJ5IHttYXJnaW46IDA7IHBhZGRpbmc6IDAgMWVtOyBmb250LXNpemU6IDE0cHg7IGxpbmUtaGVpZ2h0OiA0MnB4O31cXG4uem9jaWFsLnByaW1hcnk6YmVmb3JlLCAuem9jaWFsLnNlY29uZGFyeTpiZWZvcmUge2Rpc3BsYXk6IG5vbmU7fVxcbi56b2NpYWwucHJpbWFyeSB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDExNiwgMTI2LCAxMzMpO31cXG4uem9jaWFsLnNlY29uZGFyeSB7YmFja2dyb3VuZC1jb2xvcjogI2YwZjBlYjsgY29sb3I6ICMyMjI7IHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC44KTt9XFxuXFxuLnpvY2lhbCB7IC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyB9XCIpO1xuaW5zZXJ0Q3NzKFwiLyohIG5vcm1hbGl6ZS5jc3MgdjEuMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXQuaW8vbm9ybWFsaXplICovXFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIENvcnJlY3RzIGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXFxuICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBDb3JyZWN0cyBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXG4gKi9cXG5cXG5hdWRpbyxcXG5jYW52YXMsXFxudmlkZW8ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICpkaXNwbGF5OiBpbmxpbmU7XFxuICAgICp6b29tOiAxO1xcbn1cXG5cXG4vKlxcbiAqIFByZXZlbnRzIG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKlxcbiAqIEFkZHJlc3NlcyBzdHlsaW5nIGZvciBgaGlkZGVuYCBhdHRyaWJ1dGUgbm90IHByZXNlbnQgaW4gSUUgNy84LzksIEZpcmVmb3ggMyxcXG4gKiBhbmQgU2FmYXJpIDQuXFxuICogS25vd24gaXNzdWU6IG5vIElFIDYgc3VwcG9ydC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgQmFzZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiAxLiBDb3JyZWN0cyB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXFxuICogICAgYGVtYCB1bml0cy5cXG4gKiAyLiBQcmV2ZW50cyBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxuICogICAgdXNlciB6b29tLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qXFxuICogQWRkcmVzc2VzIGBmb250LWZhbWlseWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIGB0ZXh0YXJlYWAgYW5kIG90aGVyIGZvcm1cXG4gKiBlbGVtZW50cy5cXG4gKi9cXG5cXG5odG1sLFxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLypcXG4gKiBBZGRyZXNzZXMgbWFyZ2lucyBoYW5kbGVkIGluY29ycmVjdGx5IGluIElFIDYvNy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIExpbmtzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZHJlc3NlcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICovXFxuXFxuYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IHRoaW4gZG90dGVkO1xcbn1cXG5cXG4vKlxcbiAqIEltcHJvdmVzIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5hOmFjdGl2ZSxcXG5hOmhvdmVyIHtcXG4gICAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBUeXBvZ3JhcGh5XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZHJlc3NlcyBmb250IHNpemVzIGFuZCBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcuXFxuICogQWRkcmVzc2VzIGZvbnQgc2l6ZXMgd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgIGluIEZpcmVmb3ggNCssIFNhZmFyaSA1LFxcbiAqIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBtYXJnaW46IDAuODNlbSAwO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4xN2VtO1xcbiAgICBtYXJnaW46IDFlbSAwO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBtYXJnaW46IDEuMzNlbSAwO1xcbn1cXG5cXG5oNSB7XFxuICAgIGZvbnQtc2l6ZTogMC44M2VtO1xcbiAgICBtYXJnaW46IDEuNjdlbSAwO1xcbn1cXG5cXG5oNiB7XFxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgICBtYXJnaW46IDIuMzNlbSAwO1xcbn1cXG5cXG4vKlxcbiAqIEFkZHJlc3NlcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuICogQWRkcmVzc2VzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDMrLCBTYWZhcmkgNC81LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmJsb2NrcXVvdGUge1xcbiAgICBtYXJnaW46IDFlbSA0MHB4O1xcbn1cXG5cXG4vKlxcbiAqIEFkZHJlc3NlcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXFxuICovXFxuXFxuZGZuIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKlxcbiAqIEFkZHJlc3NlcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzkuXFxuICovXFxuXFxubWFyayB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjA7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKlxcbiAqIEFkZHJlc3NlcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcuXFxuICovXFxuXFxucCxcXG5wcmUge1xcbiAgICBtYXJnaW46IDFlbSAwO1xcbn1cXG5cXG4vKlxcbiAqIENvcnJlY3RzIGZvbnQgZmFtaWx5IHNldCBvZGRseSBpbiBJRSA2LCBTYWZhcmkgNC81LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnByZSxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgc2VyaWY7XFxuICAgIF9mb250LWZhbWlseTogJ2NvdXJpZXIgbmV3JywgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLypcXG4gKiBJbXByb3ZlcyByZWFkYWJpbGl0eSBvZiBwcmUtZm9ybWF0dGVkIHRleHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4vKlxcbiAqIEFkZHJlc3NlcyBDU1MgcXVvdGVzIG5vdCBzdXBwb3J0ZWQgaW4gSUUgNi83LlxcbiAqL1xcblxcbnEge1xcbiAgICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbi8qXFxuICogQWRkcmVzc2VzIGBxdW90ZXNgIHByb3BlcnR5IG5vdCBzdXBwb3J0ZWQgaW4gU2FmYXJpIDQuXFxuICovXFxuXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBjb250ZW50OiBub25lO1xcbn1cXG5cXG4vKlxcbiAqIEFkZHJlc3NlcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG4gKiBQcmV2ZW50cyBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIExpc3RzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZHJlc3NlcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcuXFxuICovXFxuXFxuZGwsXFxubWVudSxcXG5vbCxcXG51bCB7XFxuICAgIG1hcmdpbjogMWVtIDA7XFxufVxcblxcbmRkIHtcXG4gICAgbWFyZ2luOiAwIDAgMCA0MHB4O1xcbn1cXG5cXG4vKlxcbiAqIEFkZHJlc3NlcyBwYWRkaW5ncyBzZXQgZGlmZmVyZW50bHkgaW4gSUUgNi83LlxcbiAqL1xcblxcbm1lbnUsXFxub2wsXFxudWwge1xcbiAgICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xcbn1cXG5cXG4vKlxcbiAqIENvcnJlY3RzIGxpc3QgaW1hZ2VzIGhhbmRsZWQgaW5jb3JyZWN0bHkgaW4gSUUgNy5cXG4gKi9cXG5cXG5uYXYgdWwsXFxubmF2IG9sIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbGlzdC1zdHlsZS1pbWFnZTogbm9uZTtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIDEuIFJlbW92ZXMgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXG4gKiAyLiBJbXByb3ZlcyBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXFxuICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXFxuICAgIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4gKiBDb3JyZWN0cyBvdmVyZmxvdyBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgOS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgRmlndXJlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGRyZXNzZXMgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIENvcnJlY3RzIG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcbiAqL1xcblxcbmZvcm0ge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKlxcbiAqIDEuIENvcnJlY3RzIGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cXG4gKiAyLiBDb3JyZWN0cyB0ZXh0IG5vdCB3cmFwcGluZyBpbiBGaXJlZm94IDMuXFxuICogMy4gQ29ycmVjdHMgYWxpZ25tZW50IGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDIgKi9cXG4gICAgKm1hcmdpbi1sZWZ0OiAtN3B4OyAvKiAzICovXFxufVxcblxcbi8qXFxuICogMS4gQ29ycmVjdHMgZm9udCBzaXplIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIEFkZHJlc3NlcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxcbiAqICAgIGFuZCBDaHJvbWUuXFxuICogMy4gSW1wcm92ZXMgYXBwZWFyYW5jZSBhbmQgY29uc2lzdGVuY3kgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMyAqL1xcbiAgICAqdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbiAqIEFkZHJlc3NlcyBGaXJlZm94IDMrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXG4gKiAyLiBDb3JyZWN0cyBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcbiAqIDMuIEltcHJvdmVzIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKiA0LiBSZW1vdmVzIGlubmVyIHNwYWNpbmcgaW4gSUUgNyB3aXRob3V0IGFmZmVjdGluZyBub3JtYWwgdGV4dCBpbnB1dHMuXFxuICogICAgS25vd24gaXNzdWU6IGlubmVyIHNwYWNpbmcgcmVtYWlucyBpbiBJRSA2LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcbiAgICAqb3ZlcmZsb3c6IHZpc2libGU7ICAvKiA0ICovXFxufVxcblxcbi8qXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5cXG5idXR0b25bZGlzYWJsZWRdLFxcbmlucHV0W2Rpc2FibGVkXSB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLypcXG4gKiAxLiBBZGRyZXNzZXMgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxcbiAqIDIuIFJlbW92ZXMgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxcbiAqIDMuIFJlbW92ZXMgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcbiAgICAqaGVpZ2h0OiAxM3B4OyAvKiAzICovXFxuICAgICp3aWR0aDogMTNweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbiAqIDEuIEFkZHJlc3NlcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzZXMgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmVzIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiBvbiBPUyBYLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbiAqIFJlbW92ZXMgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggMysuXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcbiAqIDEuIFJlbW92ZXMgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cXG4gKiAyLiBJbXByb3ZlcyByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiAxICovXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IC8qIDIgKi9cXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBUYWJsZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVwiKTtcblxuaWYgKGdsb2JhbC53aW5kb3cpIHtcbiAgZ2xvYmFsLndpbmRvdy5BdXRoMFdpZGdldCA9IEF1dGgwV2lkZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEF1dGgwV2lkZ2V0O1xuIiwidmFyIGdsb2JhbD10eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge307dmFyIGFzc2VydF9yZXF1aXJlZCAgID0gcmVxdWlyZSgnLi9saWIvYXNzZXJ0X3JlcXVpcmVkJyk7XG52YXIgYmFzZTY0X3VybF9kZWNvZGUgPSByZXF1aXJlKCcuL2xpYi9iYXNlNjRfdXJsX2RlY29kZScpO1xudmFyIHFzICAgICAgICAgICAgICAgID0gcmVxdWlyZSgncXMnKTtcbnZhciByZXF3ZXN0ICAgICAgICAgICA9IHJlcXVpcmUoJ3JlcXdlc3QnKTtcblxudmFyIGpzb25wICAgICAgICAgICAgID0gcmVxdWlyZSgnanNvbnAnKTtcblxudmFyIHVzZV9qc29ucCAgICAgICAgID0gcmVxdWlyZSgnLi9saWIvdXNlX2pzb25wJyk7XG52YXIgTG9naW5FcnJvciAgICAgICAgPSByZXF1aXJlKCcuL2xpYi9Mb2dpbkVycm9yJyk7XG52YXIganNvbl9wYXJzZSAgICAgICAgPSByZXF1aXJlKCcuL2xpYi9qc29uX3BhcnNlJyk7XG5cbmZ1bmN0aW9uIEF1dGgwIChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBBdXRoMCkpIHtcbiAgICByZXR1cm4gbmV3IEF1dGgwKG9wdGlvbnMpO1xuICB9XG5cbiAgYXNzZXJ0X3JlcXVpcmVkKG9wdGlvbnMsICdjbGllbnRJRCcpO1xuICBhc3NlcnRfcmVxdWlyZWQob3B0aW9ucywgJ2NhbGxiYWNrVVJMJyk7XG4gIGFzc2VydF9yZXF1aXJlZChvcHRpb25zLCAnZG9tYWluJyk7XG5cbiAgdGhpcy5fY2xpZW50SUQgPSBvcHRpb25zLmNsaWVudElEO1xuICB0aGlzLl9jYWxsYmFja1VSTCA9IG9wdGlvbnMuY2FsbGJhY2tVUkw7XG4gIHRoaXMuX2RvbWFpbiA9IG9wdGlvbnMuZG9tYWluO1xuICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgdGhpcy5wYXJzZUhhc2gob3B0aW9ucy5zdWNjZXNzKTtcbiAgfVxuICB0aGlzLl9mYWlsdXJlID0gb3B0aW9ucy5mYWlsdXJlO1xufVxuXG5BdXRoMC5wcm90b3R5cGUuX3JlZGlyZWN0ID0gZnVuY3Rpb24gKHVybCkge1xuICBnbG9iYWwud2luZG93LmxvY2F0aW9uID0gdXJsO1xufTtcblxuQXV0aDAucHJvdG90eXBlLl9yZW5kZXJBbmRTdWJtaXRXU0ZlZEZvcm0gPSBmdW5jdGlvbiAoZm9ybUh0bWwpIHtcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuaW5uZXJIVE1MID0gZm9ybUh0bWw7XG4gIHZhciBmb3JtID0gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpLmNoaWxkcmVuWzBdO1xuICBmb3JtLnN1Ym1pdCgpO1xufTtcblxuQXV0aDAucHJvdG90eXBlLnBhcnNlSGFzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBpZighd2luZG93LmxvY2F0aW9uLmhhc2gubWF0Y2goL2FjY2Vzc190b2tlbi8pKSByZXR1cm47XG4gIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpO1xuICB2YXIgcGFyc2VkX3FzID0gcXMucGFyc2UoaGFzaCk7XG4gIHZhciBpZF90b2tlbiA9IHBhcnNlZF9xcy5pZF90b2tlbjtcbiAgdmFyIGVuY29kZWQgPSBpZF90b2tlbi5zcGxpdCgnLicpWzFdO1xuICB2YXIgcHJvZiA9IGpzb25fcGFyc2UoYmFzZTY0X3VybF9kZWNvZGUoZW5jb2RlZCkpO1xuICBjYWxsYmFjayhwcm9mLCBpZF90b2tlbiwgcGFyc2VkX3FzLmFjY2Vzc190b2tlbiwgcGFyc2VkX3FzLnN0YXRlKTtcbn07XG5cbkF1dGgwLnByb3RvdHlwZS5zaWdudXAgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHZhciBxdWVyeSA9IHtcbiAgICByZXNwb25zZV90eXBlOiAndG9rZW4nLFxuICAgIGNsaWVudF9pZDogICAgIHRoaXMuX2NsaWVudElELFxuICAgIGNvbm5lY3Rpb246ICAgIG9wdGlvbnMuY29ubmVjdGlvbixcbiAgICByZWRpcmVjdF91cmk6ICB0aGlzLl9jYWxsYmFja1VSTCxcbiAgICBzY29wZTogICAgICAgICAnb3BlbmlkIHByb2ZpbGUnXG4gIH07XG5cbiAgaWYgKG9wdGlvbnMuc3RhdGUpIHtcbiAgICBxdWVyeS5zdGF0ZSA9IG9wdGlvbnMuc3RhdGU7XG4gIH1cblxuICBxdWVyeS5lbWFpbCA9IG9wdGlvbnMudXNlcm5hbWUgfHwgb3B0aW9ucy5lbWFpbDtcbiAgcXVlcnkucGFzc3dvcmQgPSBvcHRpb25zLnBhc3N3b3JkO1xuXG4gIHF1ZXJ5LnRlbmFudCA9IHRoaXMuX2RvbWFpbi5zcGxpdCgnLicpWzBdO1xuXG4gIGZ1bmN0aW9uIHN1Y2Nlc3MgKCkge1xuICAgIGlmICgnYXV0b19sb2dpbicgaW4gb3B0aW9ucyAmJiAhb3B0aW9ucy5hdXRvX2xvZ2luKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNlbGYubG9naW4ob3B0aW9ucywgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gZmFpbCAoc3RhdHVzLCByZXNwKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IExvZ2luRXJyb3Ioc3RhdHVzLCByZXNwKTtcbiAgICBpZiAoY2FsbGJhY2spICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICBpZiAoc2VsZi5fZmFpbHVyZSkgcmV0dXJuIHNlbGYuX2ZhaWx1cmUoZXJyb3IpO1xuICB9XG5cbiAgaWYgKHVzZV9qc29ucCgpKSB7XG4gICAgcmV0dXJuIGpzb25wKCdodHRwczovLycgKyB0aGlzLl9kb21haW4gKyAnL2RiY29ubmVjdGlvbnMvc2lnbnVwPycgKyBxcy5zdHJpbmdpZnkocXVlcnkpLCB7XG4gICAgICBwYXJhbTogJ2NieCcsXG4gICAgICB0aW1lb3V0OiAxNTAwMFxuICAgIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3ApIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGZhaWwoMCwgZXJyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNwLnN0YXR1cyA9PSAyMDAgP1xuICAgICAgICAgICAgICBzdWNjZXNzKCkgOlxuICAgICAgICAgICAgICBmYWlsKHJlc3Auc3RhdHVzLCByZXNwLmVycik7XG4gICAgfSk7XG4gIH1cblxuICByZXF3ZXN0KHtcbiAgICB1cmw6ICAgICAnaHR0cHM6Ly8nICsgdGhpcy5fZG9tYWluICsgJy9kYmNvbm5lY3Rpb25zL3NpZ251cCcsXG4gICAgbWV0aG9kOiAgJ3Bvc3QnLFxuICAgIHR5cGU6ICAgICdodG1sJyxcbiAgICBkYXRhOiAgICBxdWVyeSxcbiAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgIGNyb3NzT3JpZ2luOiB0cnVlXG4gIH0pLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICAgIGZhaWwoZXJyLnN0YXR1cywgZXJyLnJlc3BvbnNlVGV4dCk7XG4gIH0pO1xufTtcblxuQXV0aDAucHJvdG90eXBlLmxvZ2luID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGlmIChvcHRpb25zLnVzZXJuYW1lIHx8IG9wdGlvbnMuZW1haWwpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dpbldpdGhEYkNvbm5lY3Rpb24ob3B0aW9ucywgY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIHF1ZXJ5ID0ge1xuICAgIHJlc3BvbnNlX3R5cGU6ICd0b2tlbicsXG4gICAgY2xpZW50X2lkOiAgICAgdGhpcy5fY2xpZW50SUQsXG4gICAgY29ubmVjdGlvbjogICAgb3B0aW9ucy5jb25uZWN0aW9uLFxuICAgIHJlZGlyZWN0X3VyaTogIHRoaXMuX2NhbGxiYWNrVVJMLFxuICAgIHNjb3BlOiAgICAgICAgICdvcGVuaWQgcHJvZmlsZSdcbiAgfTtcblxuICBpZiAob3B0aW9ucy5zdGF0ZSkge1xuICAgIHF1ZXJ5LnN0YXRlID0gb3B0aW9ucy5zdGF0ZTtcbiAgfVxuXG4gIHRoaXMuX3JlZGlyZWN0KCdodHRwczovLycgKyB0aGlzLl9kb21haW4gKyAnL2F1dGhvcml6ZT8nICsgcXMuc3RyaW5naWZ5KHF1ZXJ5KSk7XG59O1xuXG5BdXRoMC5wcm90b3R5cGUubG9naW5XaXRoRGJDb25uZWN0aW9uID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB2YXIgcXVlcnkgPSB7XG4gICAgcmVzcG9uc2VfdHlwZTogJ3Rva2VuJyxcbiAgICBjbGllbnRfaWQ6ICAgICB0aGlzLl9jbGllbnRJRCxcbiAgICBjb25uZWN0aW9uOiAgICBvcHRpb25zLmNvbm5lY3Rpb24sXG4gICAgcmVkaXJlY3RfdXJpOiAgdGhpcy5fY2FsbGJhY2tVUkwsXG4gICAgc2NvcGU6ICAgICAgICAgJ29wZW5pZCBwcm9maWxlJ1xuICB9O1xuXG4gIGlmIChvcHRpb25zLnN0YXRlKSB7XG4gICAgcXVlcnkuc3RhdGUgPSBvcHRpb25zLnN0YXRlO1xuICB9XG5cbiAgcXVlcnkudXNlcm5hbWUgPSBvcHRpb25zLnVzZXJuYW1lIHx8IG9wdGlvbnMuZW1haWw7XG4gIHF1ZXJ5LnBhc3N3b3JkID0gb3B0aW9ucy5wYXNzd29yZDtcblxuICBxdWVyeS50ZW5hbnQgPSB0aGlzLl9kb21haW4uc3BsaXQoJy4nKVswXTtcblxuICBmdW5jdGlvbiByZXR1cm5fZXJyb3IgKGVycm9yKSB7XG4gICAgaWYgKGNhbGxiYWNrKSAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgaWYgKHNlbGYuX2ZhaWx1cmUpIHJldHVybiBzZWxmLl9mYWlsdXJlKGVycm9yKTtcbiAgfVxuXG4gIGlmICh1c2VfanNvbnAoKSkge1xuICAgIHJldHVybiBqc29ucCgnaHR0cHM6Ly8nICsgdGhpcy5fZG9tYWluICsgJy9kYmNvbm5lY3Rpb25zL2xvZ2luPycgKyBxcy5zdHJpbmdpZnkocXVlcnkpLCB7XG4gICAgICBwYXJhbTogJ2NieCcsXG4gICAgICB0aW1lb3V0OiAxNTAwMFxuICAgIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3ApIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJldHVybl9lcnJvcihlcnIpO1xuICAgICAgfVxuICAgICAgaWYoJ2Vycm9yJyBpbiByZXNwKSB7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBMb2dpbkVycm9yKHJlc3Auc3RhdHVzLCByZXNwLmVycm9yKTtcbiAgICAgICAgcmV0dXJuIHJldHVybl9lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgICBzZWxmLl9yZW5kZXJBbmRTdWJtaXRXU0ZlZEZvcm0ocmVzcC5mb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlcXdlc3Qoe1xuICAgIHVybDogICAgICdodHRwczovLycgKyB0aGlzLl9kb21haW4gKyAnL2RiY29ubmVjdGlvbnMvbG9naW4nLFxuICAgIG1ldGhvZDogICdwb3N0JyxcbiAgICB0eXBlOiAgICAnaHRtbCcsXG4gICAgZGF0YTogICAgcXVlcnksXG4gICAgY3Jvc3NPcmlnaW46IHRydWUsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgIHNlbGYuX3JlbmRlckFuZFN1Ym1pdFdTRmVkRm9ybShyZXNwKTtcbiAgICB9XG4gIH0pLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICAgIHZhciBlciA9IGVycjtcbiAgICBpZiAoIWVyLnN0YXR1cyB8fCBlci5zdGF0dXMgPT09IDApIHsgLy9pZTEwIHRyaWNrXG4gICAgICBlciA9IHt9O1xuICAgICAgZXIuc3RhdHVzID0gNDAxO1xuICAgICAgZXIucmVzcG9uc2VUZXh0ID0ge1xuICAgICAgICBjb2RlOiAnaW52YWxpZF91c2VyX3Bhc3N3b3JkJ1xuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGVycm9yID0gbmV3IExvZ2luRXJyb3IoZXIuc3RhdHVzLCBlci5yZXNwb25zZVRleHQpO1xuICAgIHJldHVybiByZXR1cm5fZXJyb3IoZXJyb3IpO1xuICB9KTtcbn07XG5cbkF1dGgwLnByb3RvdHlwZS5nZXRTU09EYXRhID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHJldHVybiBqc29ucCgnaHR0cHM6Ly8nICsgdGhpcy5fZG9tYWluICsgJy91c2VyL3Nzb2RhdGEnLCB7XG4gICAgcGFyYW06ICdjYngnLFxuICAgIHRpbWVvdXQ6IDE1MDAwXG4gIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3ApIHtcbiAgICBjYWxsYmFjayhudWxsLCBlcnIgP8Kge30gOiByZXNwKTsgLy8gQWx3YXlzIHJldHVybiBPSywgcmVnYXJkbGVzcyBvZiBhbnkgZXJyb3JzXG4gIH0pO1xufTtcblxuQXV0aDAucHJvdG90eXBlLmdldENvbm5lY3Rpb25zID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHJldHVybiBqc29ucCgnaHR0cHM6Ly8nICsgdGhpcy5fZG9tYWluICsgJy9wdWJsaWMvYXBpLycgKyB0aGlzLl9jbGllbnRJRCArICcvY29ubmVjdGlvbnMnLCB7XG4gICAgcGFyYW06ICdjYngnLFxuICAgIHRpbWVvdXQ6IDE1MDAwXG4gIH0sIGNhbGxiYWNrKTtcbn07XG5cbmlmIChnbG9iYWwud2luZG93KSB7XG4gIGdsb2JhbC53aW5kb3cuQXV0aDAgPSBBdXRoMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBdXRoMDsiLCJ2YXIganNvbl9wYXJzZSA9IHJlcXVpcmUoJy4vanNvbl9wYXJzZScpO1xuXG5mdW5jdGlvbiBMb2dpbkVycm9yKHN0YXR1cywgZGV0YWlscykge1xuICB2YXIgb2JqO1xuXG4gIGlmICh0eXBlb2YgZGV0YWlscyA9PSAnc3RyaW5nJykge1xuICAgIHRyeSB7XG4gICAgICBvYmogPSBqc29uX3BhcnNlKGRldGFpbHMpO1xuICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICBvYmogPSB7bWVzc2FnZTogZGV0YWlsc307ICAgICAgXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9iaiA9IGRldGFpbHM7XG4gIH1cblxuICB2YXIgZXJyID0gRXJyb3IuY2FsbCh0aGlzLCBvYmouZGVzY3JpcHRpb24gfHwgb2JqLm1lc3NhZ2UgfHwgb2JqLmVycm9yKTtcblxuICBlcnIuc3RhdHVzID0gc3RhdHVzO1xuICBlcnIubmFtZSA9IG9iai5jb2RlO1xuICBlcnIuY29kZSA9IG9iai5jb2RlO1xuICBlcnIuZGV0YWlscyA9IG9iajtcbiAgXG4gIGlmIChzdGF0dXMgPT09IDApIHtcbiAgICBlcnIuY29kZSA9IFwiVW5rbm93blwiO1xuICAgIGVyci5tZXNzYWdlID0gXCJVbmtub3duIGVycm9yLlwiO1xuICB9XG5cbiAgcmV0dXJuIGVycjtcbn1cblxuaWYgKE9iamVjdCAmJiBPYmplY3QuY3JlYXRlKSB7XG4gIExvZ2luRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUsIHsgXG4gICAgY29uc3RydWN0b3I6IHsgdmFsdWU6IExvZ2luRXJyb3IgfSBcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9naW5FcnJvcjsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIHByb3ApIHtcbiAgaWYgKCFvYmpbcHJvcF0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvcCArICcgaXMgcmVxdWlyZWQuJyk7XG4gIH1cbn07IiwidmFyIEJhc2U2NCA9IHJlcXVpcmUoJ0Jhc2U2NCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cikge1xuICB2YXIgb3V0cHV0ID0gc3RyLnJlcGxhY2UoXCItXCIsIFwiK1wiKS5yZXBsYWNlKFwiX1wiLCBcIi9cIik7XG4gIHN3aXRjaCAob3V0cHV0Lmxlbmd0aCAlIDQpIHtcbiAgICBjYXNlIDA6XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBvdXRwdXQgKz0gXCI9PVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgb3V0cHV0ICs9IFwiPVwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IFwiSWxsZWdhbCBiYXNlNjR1cmwgc3RyaW5nIVwiO1xuICB9XG4gIHJldHVybiBCYXNlNjQuYXRvYihvdXRwdXQpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHdpbmRvdy5KU09OID8gd2luZG93LkpTT04ucGFyc2Uoc3RyKSA6IGV2YWwoJygnICsgc3RyICsgJyknKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB4aHIgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgPyBuZXcgWE1MSHR0cFJlcXVlc3QoKSA6IG51bGw7XG4gIFxuICBpZiAoeGhyICYmICd3aXRoQ3JlZGVudGlhbHMnIGluIHhocikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAnWERvbWFpblJlcXVlc3QnIGluIHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwOic7XG59OyIsIjsoZnVuY3Rpb24gKCkge1xuXG4gIHZhclxuICAgIG9iamVjdCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnID8gZXhwb3J0cyA6IHRoaXMsIC8vICM4OiB3ZWIgd29ya2Vyc1xuICAgIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JyxcbiAgICBJTlZBTElEX0NIQVJBQ1RFUl9FUlIgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZmFicmljYXRlIGEgc3VpdGFibGUgZXJyb3Igb2JqZWN0XG4gICAgICB0cnkgeyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCckJyk7IH1cbiAgICAgIGNhdGNoIChlcnJvcikgeyByZXR1cm4gZXJyb3I7IH19KCkpO1xuXG4gIC8vIGVuY29kZXJcbiAgLy8gW2h0dHBzOi8vZ2lzdC5naXRodWIuY29tLzk5OTE2Nl0gYnkgW2h0dHBzOi8vZ2l0aHViLmNvbS9uaWduYWddXG4gIG9iamVjdC5idG9hIHx8IChcbiAgb2JqZWN0LmJ0b2EgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBmb3IgKFxuICAgICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzLCBvdXRwdXQgPSAnJztcbiAgICAgIC8vIGlmIHRoZSBuZXh0IGlucHV0IGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICAgIGlucHV0LmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgICApIHtcbiAgICAgIGNoYXJDb2RlID0gaW5wdXQuY2hhckNvZGVBdChpZHggKz0gMy80KTtcbiAgICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHRocm93IElOVkFMSURfQ0hBUkFDVEVSX0VSUjtcbiAgICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9KTtcblxuICAvLyBkZWNvZGVyXG4gIC8vIFtodHRwczovL2dpc3QuZ2l0aHViLmNvbS8xMDIwMzk2XSBieSBbaHR0cHM6Ly9naXRodWIuY29tL2F0a11cbiAgb2JqZWN0LmF0b2IgfHwgKFxuICBvYmplY3QuYXRvYiA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvPSskLywgJycpXG4gICAgaWYgKGlucHV0Lmxlbmd0aCAlIDQgPT0gMSkgdGhyb3cgSU5WQUxJRF9DSEFSQUNURVJfRVJSO1xuICAgIGZvciAoXG4gICAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlcnNcbiAgICAgIHZhciBiYyA9IDAsIGJzLCBidWZmZXIsIGlkeCA9IDAsIG91dHB1dCA9ICcnO1xuICAgICAgLy8gZ2V0IG5leHQgY2hhcmFjdGVyXG4gICAgICBidWZmZXIgPSBpbnB1dC5jaGFyQXQoaWR4KyspO1xuICAgICAgLy8gY2hhcmFjdGVyIGZvdW5kIGluIHRhYmxlPyBpbml0aWFsaXplIGJpdCBzdG9yYWdlIGFuZCBhZGQgaXRzIGFzY2lpIHZhbHVlO1xuICAgICAgfmJ1ZmZlciAmJiAoYnMgPSBiYyAlIDQgPyBicyAqIDY0ICsgYnVmZmVyIDogYnVmZmVyLFxuICAgICAgICAvLyBhbmQgaWYgbm90IGZpcnN0IG9mIGVhY2ggNCBjaGFyYWN0ZXJzLFxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxuICAgICAgICBiYysrICUgNCkgPyBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUgJiBicyA+PiAoLTIgKiBiYyAmIDYpKSA6IDBcbiAgICApIHtcbiAgICAgIC8vIHRyeSB0byBmaW5kIGNoYXJhY3RlciBpbiB0YWJsZSAoMC02Mywgbm90IGZvdW5kID0+IC0xKVxuICAgICAgYnVmZmVyID0gY2hhcnMuaW5kZXhPZihidWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9KTtcblxufSgpKTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnanNvbnAnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzb25wO1xuXG4vKipcbiAqIENhbGxiYWNrIGluZGV4LlxuICovXG5cbnZhciBjb3VudCA9IDA7XG5cbi8qKlxuICogTm9vcCBmdW5jdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCl7fTtcblxuLyoqXG4gKiBKU09OUCBoYW5kbGVyXG4gKlxuICogT3B0aW9uczpcbiAqICAtIHBhcmFtIHtTdHJpbmd9IHFzIHBhcmFtZXRlciAoYGNhbGxiYWNrYClcbiAqICAtIHRpbWVvdXQge051bWJlcn0gaG93IGxvbmcgYWZ0ZXIgYSB0aW1lb3V0IGVycm9yIGlzIGVtaXR0ZWQgKGA2MDAwMGApXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IG9wdGlvbmFsIG9wdGlvbnMgLyBjYWxsYmFja1xuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9uYWwgY2FsbGJhY2tcbiAqL1xuXG5mdW5jdGlvbiBqc29ucCh1cmwsIG9wdHMsIGZuKXtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIG9wdHMpIHtcbiAgICBmbiA9IG9wdHM7XG4gICAgb3B0cyA9IHt9O1xuICB9XG5cbiAgdmFyIG9wdHMgPSBvcHRzIHx8IHt9O1xuICB2YXIgcGFyYW0gPSBvcHRzLnBhcmFtIHx8ICdjYWxsYmFjayc7XG4gIHZhciB0aW1lb3V0ID0gbnVsbCAhPSBvcHRzLnRpbWVvdXQgPyBvcHRzLnRpbWVvdXQgOiA2MDAwMDtcbiAgdmFyIGVuYyA9IGVuY29kZVVSSUNvbXBvbmVudDtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgdmFyIHNjcmlwdDtcbiAgdmFyIHRpbWVyO1xuXG4gIC8vIGdlbmVyYXRlIGEgdW5pcXVlIGlkIGZvciB0aGlzIHJlcXVlc3RcbiAgdmFyIGlkID0gY291bnQrKztcblxuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgY2xlYW51cCgpO1xuICAgICAgZm4gJiYgZm4obmV3IEVycm9yKCdUaW1lb3V0JykpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpe1xuICAgIHRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgd2luZG93WydfX2pwJyArIGlkXSA9IG5vb3A7XG4gIH1cblxuICB3aW5kb3dbJ19fanAnICsgaWRdID0gZnVuY3Rpb24oZGF0YSl7XG4gICAgZGVidWcoJ2pzb25wIGdvdCcsIGRhdGEpO1xuICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICBjbGVhbnVwKCk7XG4gICAgZm4gJiYgZm4obnVsbCwgZGF0YSk7XG4gIH07XG5cbiAgLy8gYWRkIHFzIGNvbXBvbmVudFxuICB1cmwgKz0gKH51cmwuaW5kZXhPZignPycpID8gJyYnIDogJz8nKSArIHBhcmFtICsgJz0nICsgZW5jKCdfX2pwJyArIGlkICsgJycpO1xuICB1cmwgPSB1cmwucmVwbGFjZSgnPyYnLCAnPycpO1xuXG4gIGRlYnVnKCdqc29ucCByZXEgXCIlc1wiJywgdXJsKTtcblxuICAvLyBjcmVhdGUgc2NyaXB0XG4gIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gdXJsO1xuICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCB0YXJnZXQpO1xufTtcbiIsIlxuLyoqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJ1ZztcblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge1R5cGV9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRlYnVnKG5hbWUpIHtcbiAgaWYgKCFkZWJ1Zy5lbmFibGVkKG5hbWUpKSByZXR1cm4gZnVuY3Rpb24oKXt9O1xuXG4gIHJldHVybiBmdW5jdGlvbihmbXQpe1xuICAgIHZhciBjdXJyID0gbmV3IERhdGU7XG4gICAgdmFyIG1zID0gY3VyciAtIChkZWJ1Z1tuYW1lXSB8fCBjdXJyKTtcbiAgICBkZWJ1Z1tuYW1lXSA9IGN1cnI7XG5cbiAgICBmbXQgPSBuYW1lXG4gICAgICArICcgJ1xuICAgICAgKyBmbXRcbiAgICAgICsgJyArJyArIGRlYnVnLmh1bWFuaXplKG1zKTtcblxuICAgIC8vIFRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4XG4gICAgLy8gd2hlcmUgYGNvbnNvbGUubG9nYCBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICAgIHdpbmRvdy5jb25zb2xlXG4gICAgICAmJiBjb25zb2xlLmxvZ1xuICAgICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLlxuICovXG5cbmRlYnVnLm5hbWVzID0gW107XG5kZWJ1Zy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWUuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZGVidWcuZW5hYmxlID0gZnVuY3Rpb24obmFtZSkge1xuICB0cnkge1xuICAgIGxvY2FsU3RvcmFnZS5kZWJ1ZyA9IG5hbWU7XG4gIH0gY2F0Y2goZSl7fVxuXG4gIHZhciBzcGxpdCA9IChuYW1lIHx8ICcnKS5zcGxpdCgvW1xccyxdKy8pXG4gICAgLCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG5hbWUgPSBzcGxpdFtpXS5yZXBsYWNlKCcqJywgJy4qPycpO1xuICAgIGlmIChuYW1lWzBdID09PSAnLScpIHtcbiAgICAgIGRlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lLnN1YnN0cigxKSArICckJykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lICsgJyQnKSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZGVidWcuZGlzYWJsZSA9IGZ1bmN0aW9uKCl7XG4gIGRlYnVnLmVuYWJsZSgnJyk7XG59O1xuXG4vKipcbiAqIEh1bWFuaXplIHRoZSBnaXZlbiBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5kZWJ1Zy5odW1hbml6ZSA9IGZ1bmN0aW9uKG1zKSB7XG4gIHZhciBzZWMgPSAxMDAwXG4gICAgLCBtaW4gPSA2MCAqIDEwMDBcbiAgICAsIGhvdXIgPSA2MCAqIG1pbjtcblxuICBpZiAobXMgPj0gaG91cikgcmV0dXJuIChtcyAvIGhvdXIpLnRvRml4ZWQoMSkgKyAnaCc7XG4gIGlmIChtcyA+PSBtaW4pIHJldHVybiAobXMgLyBtaW4pLnRvRml4ZWQoMSkgKyAnbSc7XG4gIGlmIChtcyA+PSBzZWMpIHJldHVybiAobXMgLyBzZWMgfCAwKSArICdzJztcbiAgcmV0dXJuIG1zICsgJ21zJztcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5kZWJ1Zy5lbmFibGVkID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGVidWcuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIHBlcnNpc3RcblxuaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UpIGRlYnVnLmVuYWJsZShsb2NhbFN0b3JhZ2UuZGVidWcpO1xuIiwiLyoqXG4gKiBPYmplY3QjdG9TdHJpbmcoKSByZWYgZm9yIHN0cmluZ2lmeSgpLlxuICovXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogT2JqZWN0I2hhc093blByb3BlcnR5IHJlZlxuICovXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogc2VlIGlzc3VlICM3MFxuICovXG52YXIgaXNSZXN0b3JhYmxlUHJvdG8gPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgbztcblxuICBpZiAoIU9iamVjdC5jcmVhdGUpIHJldHVybiBmYWxzZTtcblxuICBvID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgby5fX3Byb3RvX18gPSBPYmplY3QucHJvdG90eXBlO1xuXG4gIHJldHVybiBvLmhhc093blByb3BlcnR5ID09PSBoYXNPd25Qcm9wZXJ0eTtcbn0pKCk7XG5cbi8qKlxuICogQXJyYXkjaW5kZXhPZiBzaGltLlxuICovXG5cbnZhciBpbmRleE9mID0gdHlwZW9mIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nXG4gID8gZnVuY3Rpb24oYXJyLCBlbCkgeyByZXR1cm4gYXJyLmluZGV4T2YoZWwpOyB9XG4gIDogZnVuY3Rpb24oYXJyLCBlbCkge1xuICAgICAgaWYgKHR5cGVvZiBhcnIgPT0gJ3N0cmluZycgJiYgdHlwZW9mIFwiYVwiWzBdID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGFyciA9IGFyci5zcGxpdCgnJyk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyW2ldID09PSBlbCkgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcblxuLyoqXG4gKiBBcnJheS5pc0FycmF5IHNoaW0uXG4gKi9cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG4vKipcbiAqIE9iamVjdC5rZXlzIHNoaW0uXG4gKi9cblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbihvYmopIHtcbiAgdmFyIHJldCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufTtcblxuLyoqXG4gKiBBcnJheSNmb3JFYWNoIHNoaW0uXG4gKi9cblxudmFyIGZvckVhY2ggPSB0eXBlb2YgQXJyYXkucHJvdG90eXBlLmZvckVhY2ggPT09ICdmdW5jdGlvbidcbiAgPyBmdW5jdGlvbihhcnIsIGZuKSB7IHJldHVybiBhcnIuZm9yRWFjaChmbik7IH1cbiAgOiBmdW5jdGlvbihhcnIsIGZuKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgZm4oYXJyW2ldKTtcbiAgICB9O1xuXG4vKipcbiAqIEFycmF5I3JlZHVjZSBzaGltLlxuICovXG5cbnZhciByZWR1Y2UgPSBmdW5jdGlvbihhcnIsIGZuLCBpbml0aWFsKSB7XG4gIGlmICh0eXBlb2YgYXJyLnJlZHVjZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGFyci5yZWR1Y2UoZm4sIGluaXRpYWwpO1xuICB2YXIgcmVzID0gaW5pdGlhbDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHJlcyA9IGZuKHJlcywgYXJyW2ldKTtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgbnVsbGFyeSBvYmplY3QgaWYgcG9zc2libGVcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVPYmplY3QoKSB7XG4gIHJldHVybiBpc1Jlc3RvcmFibGVQcm90b1xuICAgID8gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIDoge307XG59XG5cbi8qKlxuICogQ2FjaGUgbm9uLWludGVnZXIgdGVzdCByZWdleHAuXG4gKi9cblxudmFyIGlzaW50ID0gL15bMC05XSskLztcblxuZnVuY3Rpb24gcHJvbW90ZShwYXJlbnQsIGtleSkge1xuICBpZiAocGFyZW50W2tleV0ubGVuZ3RoID09IDApIHJldHVybiBwYXJlbnRba2V5XSA9IGNyZWF0ZU9iamVjdCgpO1xuICB2YXIgdCA9IGNyZWF0ZU9iamVjdCgpO1xuICBmb3IgKHZhciBpIGluIHBhcmVudFtrZXldKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocGFyZW50W2tleV0sIGkpKSB7XG4gICAgICB0W2ldID0gcGFyZW50W2tleV1baV07XG4gICAgfVxuICB9XG4gIHBhcmVudFtrZXldID0gdDtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlKHBhcnRzLCBwYXJlbnQsIGtleSwgdmFsKSB7XG4gIHZhciBwYXJ0ID0gcGFydHMuc2hpZnQoKTtcbiAgLy8gZW5kXG4gIGlmICghcGFydCkge1xuICAgIGlmIChpc0FycmF5KHBhcmVudFtrZXldKSkge1xuICAgICAgcGFyZW50W2tleV0ucHVzaCh2YWwpO1xuICAgIH0gZWxzZSBpZiAoJ29iamVjdCcgPT0gdHlwZW9mIHBhcmVudFtrZXldKSB7XG4gICAgICBwYXJlbnRba2V5XSA9IHZhbDtcbiAgICB9IGVsc2UgaWYgKCd1bmRlZmluZWQnID09IHR5cGVvZiBwYXJlbnRba2V5XSkge1xuICAgICAgcGFyZW50W2tleV0gPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudFtrZXldID0gW3BhcmVudFtrZXldLCB2YWxdO1xuICAgIH1cbiAgICAvLyBhcnJheVxuICB9IGVsc2Uge1xuICAgIHZhciBvYmogPSBwYXJlbnRba2V5XSA9IHBhcmVudFtrZXldIHx8IFtdO1xuICAgIGlmICgnXScgPT0gcGFydCkge1xuICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBpZiAoJycgIT0gdmFsKSBvYmoucHVzaCh2YWwpO1xuICAgICAgfSBlbHNlIGlmICgnb2JqZWN0JyA9PSB0eXBlb2Ygb2JqKSB7XG4gICAgICAgIG9ialtvYmplY3RLZXlzKG9iaikubGVuZ3RoXSA9IHZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iaiA9IHBhcmVudFtrZXldID0gW3BhcmVudFtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgLy8gcHJvcFxuICAgIH0gZWxzZSBpZiAofmluZGV4T2YocGFydCwgJ10nKSkge1xuICAgICAgcGFydCA9IHBhcnQuc3Vic3RyKDAsIHBhcnQubGVuZ3RoIC0gMSk7XG4gICAgICBpZiAoIWlzaW50LnRlc3QocGFydCkgJiYgaXNBcnJheShvYmopKSBvYmogPSBwcm9tb3RlKHBhcmVudCwga2V5KTtcbiAgICAgIHBhcnNlKHBhcnRzLCBvYmosIHBhcnQsIHZhbCk7XG4gICAgICAvLyBrZXlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFpc2ludC50ZXN0KHBhcnQpICYmIGlzQXJyYXkob2JqKSkgb2JqID0gcHJvbW90ZShwYXJlbnQsIGtleSk7XG4gICAgICBwYXJzZShwYXJ0cywgb2JqLCBwYXJ0LCB2YWwpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1lcmdlIHBhcmVudCBrZXkvdmFsIHBhaXIuXG4gKi9cblxuZnVuY3Rpb24gbWVyZ2UocGFyZW50LCBrZXksIHZhbCl7XG4gIGlmICh+aW5kZXhPZihrZXksICddJykpIHtcbiAgICB2YXIgcGFydHMgPSBrZXkuc3BsaXQoJ1snKVxuICAgICAgLCBsZW4gPSBwYXJ0cy5sZW5ndGhcbiAgICAgICwgbGFzdCA9IGxlbiAtIDE7XG4gICAgcGFyc2UocGFydHMsIHBhcmVudCwgJ2Jhc2UnLCB2YWwpO1xuICAgIC8vIG9wdGltaXplXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc2ludC50ZXN0KGtleSkgJiYgaXNBcnJheShwYXJlbnQuYmFzZSkpIHtcbiAgICAgIHZhciB0ID0gY3JlYXRlT2JqZWN0KCk7XG4gICAgICBmb3IgKHZhciBrIGluIHBhcmVudC5iYXNlKSB0W2tdID0gcGFyZW50LmJhc2Vba107XG4gICAgICBwYXJlbnQuYmFzZSA9IHQ7XG4gICAgfVxuICAgIHNldChwYXJlbnQuYmFzZSwga2V5LCB2YWwpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudDtcbn1cblxuLyoqXG4gKiBDb21wYWN0IHNwYXJzZSBhcnJheXMuXG4gKi9cblxuZnVuY3Rpb24gY29tcGFjdChvYmopIHtcbiAgaWYgKCdvYmplY3QnICE9IHR5cGVvZiBvYmopIHJldHVybiBvYmo7XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIHZhciByZXQgPSBbXTtcblxuICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSB7XG4gICAgICAgIHJldC5wdXNoKG9ialtpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBvYmpba2V5XSA9IGNvbXBhY3Qob2JqW2tleV0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBSZXN0b3JlIE9iamVjdC5wcm90b3R5cGUuXG4gKiBzZWUgcHVsbC1yZXF1ZXN0ICM1OFxuICovXG5cbmZ1bmN0aW9uIHJlc3RvcmVQcm90byhvYmopIHtcbiAgaWYgKCFpc1Jlc3RvcmFibGVQcm90bykgcmV0dXJuIG9iajtcbiAgaWYgKGlzQXJyYXkob2JqKSkgcmV0dXJuIG9iajtcbiAgaWYgKG9iaiAmJiAnb2JqZWN0JyAhPSB0eXBlb2Ygb2JqKSByZXR1cm4gb2JqO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIG9ialtrZXldID0gcmVzdG9yZVByb3RvKG9ialtrZXldKTtcbiAgICB9XG4gIH1cblxuICBvYmouX19wcm90b19fID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gb2JqLlxuICovXG5cbmZ1bmN0aW9uIHBhcnNlT2JqZWN0KG9iail7XG4gIHZhciByZXQgPSB7IGJhc2U6IHt9IH07XG5cbiAgZm9yRWFjaChvYmplY3RLZXlzKG9iaiksIGZ1bmN0aW9uKG5hbWUpe1xuICAgIG1lcmdlKHJldCwgbmFtZSwgb2JqW25hbWVdKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbXBhY3QocmV0LmJhc2UpO1xufVxuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHIuXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyKXtcbiAgdmFyIHJldCA9IHJlZHVjZShTdHJpbmcoc3RyKS5zcGxpdCgnJicpLCBmdW5jdGlvbihyZXQsIHBhaXIpe1xuICAgIHZhciBlcWwgPSBpbmRleE9mKHBhaXIsICc9JylcbiAgICAgICwgYnJhY2UgPSBsYXN0QnJhY2VJbktleShwYWlyKVxuICAgICAgLCBrZXkgPSBwYWlyLnN1YnN0cigwLCBicmFjZSB8fCBlcWwpXG4gICAgICAsIHZhbCA9IHBhaXIuc3Vic3RyKGJyYWNlIHx8IGVxbCwgcGFpci5sZW5ndGgpXG4gICAgICAsIHZhbCA9IHZhbC5zdWJzdHIoaW5kZXhPZih2YWwsICc9JykgKyAxLCB2YWwubGVuZ3RoKTtcblxuICAgIC8vID9mb29cbiAgICBpZiAoJycgPT0ga2V5KSBrZXkgPSBwYWlyLCB2YWwgPSAnJztcbiAgICBpZiAoJycgPT0ga2V5KSByZXR1cm4gcmV0O1xuXG4gICAgcmV0dXJuIG1lcmdlKHJldCwgZGVjb2RlKGtleSksIGRlY29kZSh2YWwpKTtcbiAgfSwgeyBiYXNlOiBjcmVhdGVPYmplY3QoKSB9KS5iYXNlO1xuXG4gIHJldHVybiByZXN0b3JlUHJvdG8oY29tcGFjdChyZXQpKTtcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gcXVlcnkgYHN0cmAgb3IgYG9iamAsIHJldHVybmluZyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciB8IHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24oc3RyKXtcbiAgaWYgKG51bGwgPT0gc3RyIHx8ICcnID09IHN0cikgcmV0dXJuIHt9O1xuICByZXR1cm4gJ29iamVjdCcgPT0gdHlwZW9mIHN0clxuICAgID8gcGFyc2VPYmplY3Qoc3RyKVxuICAgIDogcGFyc2VTdHJpbmcoc3RyKTtcbn07XG5cbi8qKlxuICogVHVybiB0aGUgZ2l2ZW4gYG9iamAgaW50byBhIHF1ZXJ5IHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxudmFyIHN0cmluZ2lmeSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24ob2JqLCBwcmVmaXgpIHtcbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBzdHJpbmdpZnlBcnJheShvYmosIHByZWZpeCk7XG4gIH0gZWxzZSBpZiAoJ1tvYmplY3QgT2JqZWN0XScgPT0gdG9TdHJpbmcuY2FsbChvYmopKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeU9iamVjdChvYmosIHByZWZpeCk7XG4gIH0gZWxzZSBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIG9iaikge1xuICAgIHJldHVybiBzdHJpbmdpZnlTdHJpbmcob2JqLCBwcmVmaXgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwcmVmaXggKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKG9iaikpO1xuICB9XG59O1xuXG4vKipcbiAqIFN0cmluZ2lmeSB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHBhcmFtIHtTdHJpbmd9IHByZWZpeFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc3RyaW5naWZ5U3RyaW5nKHN0ciwgcHJlZml4KSB7XG4gIGlmICghcHJlZml4KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzdHJpbmdpZnkgZXhwZWN0cyBhbiBvYmplY3QnKTtcbiAgcmV0dXJuIHByZWZpeCArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChzdHIpO1xufVxuXG4vKipcbiAqIFN0cmluZ2lmeSB0aGUgZ2l2ZW4gYGFycmAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJlZml4XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlBcnJheShhcnIsIHByZWZpeCkge1xuICB2YXIgcmV0ID0gW107XG4gIGlmICghcHJlZml4KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzdHJpbmdpZnkgZXhwZWN0cyBhbiBvYmplY3QnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICByZXQucHVzaChzdHJpbmdpZnkoYXJyW2ldLCBwcmVmaXggKyAnWycgKyBpICsgJ10nKSk7XG4gIH1cbiAgcmV0dXJuIHJldC5qb2luKCcmJyk7XG59XG5cbi8qKlxuICogU3RyaW5naWZ5IHRoZSBnaXZlbiBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJlZml4XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlPYmplY3Qob2JqLCBwcmVmaXgpIHtcbiAgdmFyIHJldCA9IFtdXG4gICAgLCBrZXlzID0gb2JqZWN0S2V5cyhvYmopXG4gICAgLCBrZXk7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICgnJyA9PSBrZXkpIGNvbnRpbnVlO1xuICAgIGlmIChudWxsID09IG9ialtrZXldKSB7XG4gICAgICByZXQucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldC5wdXNoKHN0cmluZ2lmeShvYmpba2V5XSwgcHJlZml4XG4gICAgICAgID8gcHJlZml4ICsgJ1snICsgZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnXSdcbiAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQuam9pbignJicpO1xufVxuXG4vKipcbiAqIFNldCBgb2JqYCdzIGBrZXlgIHRvIGB2YWxgIHJlc3BlY3RpbmdcbiAqIHRoZSB3ZWlyZCBhbmQgd29uZGVyZnVsIHN5bnRheCBvZiBhIHFzLFxuICogd2hlcmUgXCJmb289YmFyJmZvbz1iYXpcIiBiZWNvbWVzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNldChvYmosIGtleSwgdmFsKSB7XG4gIHZhciB2ID0gb2JqW2tleV07XG4gIGlmICh1bmRlZmluZWQgPT09IHYpIHtcbiAgICBvYmpba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHYpKSB7XG4gICAgdi5wdXNoKHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSBbdiwgdmFsXTtcbiAgfVxufVxuXG4vKipcbiAqIExvY2F0ZSBsYXN0IGJyYWNlIGluIGBzdHJgIHdpdGhpbiB0aGUga2V5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxhc3RCcmFjZUluS2V5KHN0cikge1xuICB2YXIgbGVuID0gc3RyLmxlbmd0aFxuICAgICwgYnJhY2VcbiAgICAsIGM7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBjID0gc3RyW2ldO1xuICAgIGlmICgnXScgPT0gYykgYnJhY2UgPSBmYWxzZTtcbiAgICBpZiAoJ1snID09IGMpIGJyYWNlID0gdHJ1ZTtcbiAgICBpZiAoJz0nID09IGMgJiYgIWJyYWNlKSByZXR1cm4gaTtcbiAgfVxufVxuXG4vKipcbiAqIERlY29kZSBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBkZWNvZGUoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG4iLCIvKiFcbiAgKiBSZXF3ZXN0ISBBIGdlbmVyYWwgcHVycG9zZSBYSFIgY29ubmVjdGlvbiBtYW5hZ2VyXG4gICogKGMpIER1c3RpbiBEaWF6IDIwMTNcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vZGVkL3JlcXdlc3RcbiAgKiBsaWNlbnNlIE1JVFxuICAqL1xuIWZ1bmN0aW9uIChuYW1lLCBjb250ZXh0LCBkZWZpbml0aW9uKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKGRlZmluaXRpb24pXG4gIGVsc2UgY29udGV4dFtuYW1lXSA9IGRlZmluaXRpb24oKVxufSgncmVxd2VzdCcsIHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuICB2YXIgd2luID0gd2luZG93XG4gICAgLCBkb2MgPSBkb2N1bWVudFxuICAgICwgdHdvSHVuZG8gPSAvXjIwXFxkJC9cbiAgICAsIGJ5VGFnID0gJ2dldEVsZW1lbnRzQnlUYWdOYW1lJ1xuICAgICwgcmVhZHlTdGF0ZSA9ICdyZWFkeVN0YXRlJ1xuICAgICwgY29udGVudFR5cGUgPSAnQ29udGVudC1UeXBlJ1xuICAgICwgcmVxdWVzdGVkV2l0aCA9ICdYLVJlcXVlc3RlZC1XaXRoJ1xuICAgICwgaGVhZCA9IGRvY1tieVRhZ10oJ2hlYWQnKVswXVxuICAgICwgdW5pcWlkID0gMFxuICAgICwgY2FsbGJhY2tQcmVmaXggPSAncmVxd2VzdF8nICsgKCtuZXcgRGF0ZSgpKVxuICAgICwgbGFzdFZhbHVlIC8vIGRhdGEgc3RvcmVkIGJ5IHRoZSBtb3N0IHJlY2VudCBKU09OUCBjYWxsYmFja1xuICAgICwgeG1sSHR0cFJlcXVlc3QgPSAnWE1MSHR0cFJlcXVlc3QnXG4gICAgLCB4RG9tYWluUmVxdWVzdCA9ICdYRG9tYWluUmVxdWVzdCdcbiAgICAsIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuXG4gICAgLCBpc0FycmF5ID0gdHlwZW9mIEFycmF5LmlzQXJyYXkgPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IEFycmF5LmlzQXJyYXlcbiAgICAgICAgOiBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBBcnJheVxuICAgICAgICAgIH1cblxuICAgICwgZGVmYXVsdEhlYWRlcnMgPSB7XG4gICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICwgcmVxdWVzdGVkV2l0aDogeG1sSHR0cFJlcXVlc3RcbiAgICAgICAgLCBhY2NlcHQ6IHtcbiAgICAgICAgICAgICAgJyonOiAgJ3RleHQvamF2YXNjcmlwdCwgdGV4dC9odG1sLCBhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sLCAqLyonXG4gICAgICAgICAgICAsIHhtbDogICdhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sJ1xuICAgICAgICAgICAgLCBodG1sOiAndGV4dC9odG1sJ1xuICAgICAgICAgICAgLCB0ZXh0OiAndGV4dC9wbGFpbidcbiAgICAgICAgICAgICwganNvbjogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCdcbiAgICAgICAgICAgICwganM6ICAgJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQsIHRleHQvamF2YXNjcmlwdCdcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAsIHhociA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgLy8gaXMgaXQgeC1kb21haW5cbiAgICAgICAgaWYgKG8uY3Jvc3NPcmlnaW4gPT09IHRydWUpIHtcbiAgICAgICAgICB2YXIgeGhyID0gd2luW3htbEh0dHBSZXF1ZXN0XSA/IG5ldyBYTUxIdHRwUmVxdWVzdCgpIDogbnVsbFxuICAgICAgICAgIGlmICh4aHIgJiYgJ3dpdGhDcmVkZW50aWFscycgaW4geGhyKSB7XG4gICAgICAgICAgICByZXR1cm4geGhyXG4gICAgICAgICAgfSBlbHNlIGlmICh3aW5beERvbWFpblJlcXVlc3RdKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFhEb21haW5SZXF1ZXN0KClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzJylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAod2luW3htbEh0dHBSZXF1ZXN0XSkge1xuICAgICAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgLCBnbG9iYWxTZXR1cE9wdGlvbnMgPSB7XG4gICAgICAgIGRhdGFGaWx0ZXI6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgfVxuICAgICAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlYWR5U3RhdGUociwgc3VjY2VzcywgZXJyb3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gdXNlIF9hYm9ydGVkIHRvIG1pdGlnYXRlIGFnYWluc3QgSUUgZXJyIGMwMGMwMjNmXG4gICAgICAvLyAoY2FuJ3QgcmVhZCBwcm9wcyBvbiBhYm9ydGVkIHJlcXVlc3Qgb2JqZWN0cylcbiAgICAgIGlmIChyLl9hYm9ydGVkKSByZXR1cm4gZXJyb3Ioci5yZXF1ZXN0KVxuICAgICAgaWYgKHIucmVxdWVzdCAmJiByLnJlcXVlc3RbcmVhZHlTdGF0ZV0gPT0gNCkge1xuICAgICAgICByLnJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gbm9vcFxuICAgICAgICBpZiAodHdvSHVuZG8udGVzdChyLnJlcXVlc3Quc3RhdHVzKSlcbiAgICAgICAgICBzdWNjZXNzKHIucmVxdWVzdClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGVycm9yKHIucmVxdWVzdClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRIZWFkZXJzKGh0dHAsIG8pIHtcbiAgICB2YXIgaGVhZGVycyA9IG8uaGVhZGVycyB8fCB7fVxuICAgICAgLCBoXG5cbiAgICBoZWFkZXJzLkFjY2VwdCA9IGhlYWRlcnMuQWNjZXB0XG4gICAgICB8fCBkZWZhdWx0SGVhZGVycy5hY2NlcHRbby50eXBlXVxuICAgICAgfHwgZGVmYXVsdEhlYWRlcnMuYWNjZXB0WycqJ11cblxuICAgIC8vIGJyZWFrcyBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgd2l0aCBsZWdhY3kgYnJvd3NlcnNcbiAgICBpZiAoIW8uY3Jvc3NPcmlnaW4gJiYgIWhlYWRlcnNbcmVxdWVzdGVkV2l0aF0pIGhlYWRlcnNbcmVxdWVzdGVkV2l0aF0gPSBkZWZhdWx0SGVhZGVycy5yZXF1ZXN0ZWRXaXRoXG4gICAgaWYgKCFoZWFkZXJzW2NvbnRlbnRUeXBlXSkgaGVhZGVyc1tjb250ZW50VHlwZV0gPSBvLmNvbnRlbnRUeXBlIHx8IGRlZmF1bHRIZWFkZXJzLmNvbnRlbnRUeXBlXG4gICAgZm9yIChoIGluIGhlYWRlcnMpXG4gICAgICBoZWFkZXJzLmhhc093blByb3BlcnR5KGgpICYmICdzZXRSZXF1ZXN0SGVhZGVyJyBpbiBodHRwICYmIGh0dHAuc2V0UmVxdWVzdEhlYWRlcihoLCBoZWFkZXJzW2hdKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q3JlZGVudGlhbHMoaHR0cCwgbykge1xuICAgIGlmICh0eXBlb2Ygby53aXRoQ3JlZGVudGlhbHMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBodHRwLndpdGhDcmVkZW50aWFscyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGh0dHAud2l0aENyZWRlbnRpYWxzID0gISFvLndpdGhDcmVkZW50aWFsc1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYWxDYWxsYmFjayhkYXRhKSB7XG4gICAgbGFzdFZhbHVlID0gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gdXJsYXBwZW5kICh1cmwsIHMpIHtcbiAgICByZXR1cm4gdXJsICsgKC9cXD8vLnRlc3QodXJsKSA/ICcmJyA6ICc/JykgKyBzXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVKc29ucChvLCBmbiwgZXJyLCB1cmwpIHtcbiAgICB2YXIgcmVxSWQgPSB1bmlxaWQrK1xuICAgICAgLCBjYmtleSA9IG8uanNvbnBDYWxsYmFjayB8fCAnY2FsbGJhY2snIC8vIHRoZSAnY2FsbGJhY2snIGtleVxuICAgICAgLCBjYnZhbCA9IG8uanNvbnBDYWxsYmFja05hbWUgfHwgcmVxd2VzdC5nZXRjYWxsYmFja1ByZWZpeChyZXFJZClcbiAgICAgIC8vICwgY2J2YWwgPSBvLmpzb25wQ2FsbGJhY2tOYW1lIHx8ICgncmVxd2VzdF8nICsgcmVxSWQpIC8vIHRoZSAnY2FsbGJhY2snIHZhbHVlXG4gICAgICAsIGNicmVnID0gbmV3IFJlZ0V4cCgnKChefFxcXFw/fCYpJyArIGNia2V5ICsgJyk9KFteJl0rKScpXG4gICAgICAsIG1hdGNoID0gdXJsLm1hdGNoKGNicmVnKVxuICAgICAgLCBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICAgICwgbG9hZGVkID0gMFxuICAgICAgLCBpc0lFMTAgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01TSUUgMTAuMCcpICE9PSAtMVxuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpZiAobWF0Y2hbM10gPT09ICc/Jykge1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShjYnJlZywgJyQxPScgKyBjYnZhbCkgLy8gd2lsZGNhcmQgY2FsbGJhY2sgZnVuYyBuYW1lXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYnZhbCA9IG1hdGNoWzNdIC8vIHByb3ZpZGVkIGNhbGxiYWNrIGZ1bmMgbmFtZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSB1cmxhcHBlbmQodXJsLCBjYmtleSArICc9JyArIGNidmFsKSAvLyBubyBjYWxsYmFjayBkZXRhaWxzLCBhZGQgJ2VtXG4gICAgfVxuXG4gICAgd2luW2NidmFsXSA9IGdlbmVyYWxDYWxsYmFja1xuXG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgIHNjcmlwdC5zcmMgPSB1cmxcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlXG4gICAgaWYgKHR5cGVvZiBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlICE9PSAndW5kZWZpbmVkJyAmJiAhaXNJRTEwKSB7XG4gICAgICAvLyBuZWVkIHRoaXMgZm9yIElFIGR1ZSB0byBvdXQtb2Ytb3JkZXIgb25yZWFkeXN0YXRlY2hhbmdlKCksIGJpbmRpbmcgc2NyaXB0XG4gICAgICAvLyBleGVjdXRpb24gdG8gYW4gZXZlbnQgbGlzdGVuZXIgZ2l2ZXMgdXMgY29udHJvbCBvdmVyIHdoZW4gdGhlIHNjcmlwdFxuICAgICAgLy8gaXMgZXhlY3V0ZWQuIFNlZSBodHRwOi8vamF1Ym91cmcubmV0LzIwMTAvMDcvbG9hZGluZy1zY3JpcHQtYXMtb25jbGljay1oYW5kbGVyLW9mLmh0bWxcbiAgICAgIC8vXG4gICAgICAvLyBpZiB0aGlzIGhhY2sgaXMgdXNlZCBpbiBJRTEwIGpzb25wIGNhbGxiYWNrIGFyZSBuZXZlciBjYWxsZWRcbiAgICAgIHNjcmlwdC5ldmVudCA9ICdvbmNsaWNrJ1xuICAgICAgc2NyaXB0Lmh0bWxGb3IgPSBzY3JpcHQuaWQgPSAnX3JlcXdlc3RfJyArIHJlcUlkXG4gICAgfVxuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoKHNjcmlwdFtyZWFkeVN0YXRlXSAmJiBzY3JpcHRbcmVhZHlTdGF0ZV0gIT09ICdjb21wbGV0ZScgJiYgc2NyaXB0W3JlYWR5U3RhdGVdICE9PSAnbG9hZGVkJykgfHwgbG9hZGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsXG4gICAgICBzY3JpcHQub25jbGljayAmJiBzY3JpcHQub25jbGljaygpXG4gICAgICAvLyBDYWxsIHRoZSB1c2VyIGNhbGxiYWNrIHdpdGggdGhlIGxhc3QgdmFsdWUgc3RvcmVkIGFuZCBjbGVhbiB1cCB2YWx1ZXMgYW5kIHNjcmlwdHMuXG4gICAgICBmbihsYXN0VmFsdWUpXG4gICAgICBsYXN0VmFsdWUgPSB1bmRlZmluZWRcbiAgICAgIGhlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuICAgICAgbG9hZGVkID0gMVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgc2NyaXB0IHRvIHRoZSBET00gaGVhZFxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXG4gICAgLy8gRW5hYmxlIEpTT05QIHRpbWVvdXRcbiAgICByZXR1cm4ge1xuICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsXG4gICAgICAgIGVycih7fSwgJ1JlcXVlc3QgaXMgYWJvcnRlZDogdGltZW91dCcsIHt9KVxuICAgICAgICBsYXN0VmFsdWUgPSB1bmRlZmluZWRcbiAgICAgICAgaGVhZC5yZW1vdmVDaGlsZChzY3JpcHQpXG4gICAgICAgIGxvYWRlZCA9IDFcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSZXF1ZXN0KGZuLCBlcnIpIHtcbiAgICB2YXIgbyA9IHRoaXMub1xuICAgICAgLCBtZXRob2QgPSAoby5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKClcbiAgICAgICwgdXJsID0gdHlwZW9mIG8gPT09ICdzdHJpbmcnID8gbyA6IG8udXJsXG4gICAgICAvLyBjb252ZXJ0IG5vbi1zdHJpbmcgb2JqZWN0cyB0byBxdWVyeS1zdHJpbmcgZm9ybSB1bmxlc3Mgby5wcm9jZXNzRGF0YSBpcyBmYWxzZVxuICAgICAgLCBkYXRhID0gKG8ucHJvY2Vzc0RhdGEgIT09IGZhbHNlICYmIG8uZGF0YSAmJiB0eXBlb2Ygby5kYXRhICE9PSAnc3RyaW5nJylcbiAgICAgICAgPyByZXF3ZXN0LnRvUXVlcnlTdHJpbmcoby5kYXRhKVxuICAgICAgICA6IChvLmRhdGEgfHwgbnVsbClcbiAgICAgICwgaHR0cFxuICAgICAgLCBzZW5kV2FpdCA9IGZhbHNlXG5cbiAgICAvLyBpZiB3ZSdyZSB3b3JraW5nIG9uIGEgR0VUIHJlcXVlc3QgYW5kIHdlIGhhdmUgZGF0YSB0aGVuIHdlIHNob3VsZCBhcHBlbmRcbiAgICAvLyBxdWVyeSBzdHJpbmcgdG8gZW5kIG9mIFVSTCBhbmQgbm90IHBvc3QgZGF0YVxuICAgIGlmICgoby50eXBlID09ICdqc29ucCcgfHwgbWV0aG9kID09ICdHRVQnKSAmJiBkYXRhKSB7XG4gICAgICB1cmwgPSB1cmxhcHBlbmQodXJsLCBkYXRhKVxuICAgICAgZGF0YSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAoby50eXBlID09ICdqc29ucCcpIHJldHVybiBoYW5kbGVKc29ucChvLCBmbiwgZXJyLCB1cmwpXG5cbiAgICBodHRwID0geGhyKG8pXG4gICAgaHR0cC5vcGVuKG1ldGhvZCwgdXJsLCBvLmFzeW5jID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSlcbiAgICBzZXRIZWFkZXJzKGh0dHAsIG8pXG4gICAgc2V0Q3JlZGVudGlhbHMoaHR0cCwgbylcbiAgICBpZiAod2luW3hEb21haW5SZXF1ZXN0XSAmJiBodHRwIGluc3RhbmNlb2Ygd2luW3hEb21haW5SZXF1ZXN0XSkge1xuICAgICAgICBodHRwLm9ubG9hZCA9IGZuXG4gICAgICAgIGh0dHAub25lcnJvciA9IGVyclxuICAgICAgICAvLyBOT1RFOiBzZWVcbiAgICAgICAgLy8gaHR0cDovL3NvY2lhbC5tc2RuLm1pY3Jvc29mdC5jb20vRm9ydW1zL2VuLVVTL2lld2ViZGV2ZWxvcG1lbnQvdGhyZWFkLzMwZWYzYWRkLTc2N2MtNDQzNi1iOGE5LWYxY2ExOWI0ODEyZVxuICAgICAgICBodHRwLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHt9XG4gICAgICAgIHNlbmRXYWl0ID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGhhbmRsZVJlYWR5U3RhdGUodGhpcywgZm4sIGVycilcbiAgICB9XG4gICAgby5iZWZvcmUgJiYgby5iZWZvcmUoaHR0cClcbiAgICBpZiAoc2VuZFdhaXQpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBodHRwLnNlbmQoZGF0YSlcbiAgICAgIH0sIDIwMClcbiAgICB9IGVsc2Uge1xuICAgICAgaHR0cC5zZW5kKGRhdGEpXG4gICAgfVxuICAgIHJldHVybiBodHRwXG4gIH1cblxuICBmdW5jdGlvbiBSZXF3ZXN0KG8sIGZuKSB7XG4gICAgdGhpcy5vID0gb1xuICAgIHRoaXMuZm4gPSBmblxuXG4gICAgaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRUeXBlKHVybCkge1xuICAgIHZhciBtID0gdXJsLm1hdGNoKC9cXC4oanNvbnxqc29ucHxodG1sfHhtbCkoXFw/fCQpLylcbiAgICByZXR1cm4gbSA/IG1bMV0gOiAnanMnXG4gIH1cblxuICBmdW5jdGlvbiBpbml0KG8sIGZuKSB7XG5cbiAgICB0aGlzLnVybCA9IHR5cGVvZiBvID09ICdzdHJpbmcnID8gbyA6IG8udXJsXG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbFxuXG4gICAgLy8gd2hldGhlciByZXF1ZXN0IGhhcyBiZWVuIGZ1bGZpbGxlZCBmb3IgcHVycG9zZVxuICAgIC8vIG9mIHRyYWNraW5nIHRoZSBQcm9taXNlc1xuICAgIHRoaXMuX2Z1bGZpbGxlZCA9IGZhbHNlXG4gICAgLy8gc3VjY2VzcyBoYW5kbGVyc1xuICAgIHRoaXMuX3N1Y2Nlc3NIYW5kbGVyID0gZnVuY3Rpb24oKXt9XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVycyA9IFtdXG4gICAgLy8gZXJyb3IgaGFuZGxlcnNcbiAgICB0aGlzLl9lcnJvckhhbmRsZXJzID0gW11cbiAgICAvLyBjb21wbGV0ZSAoYm90aCBzdWNjZXNzIGFuZCBmYWlsKSBoYW5kbGVyc1xuICAgIHRoaXMuX2NvbXBsZXRlSGFuZGxlcnMgPSBbXVxuICAgIHRoaXMuX2VycmVkID0gZmFsc2VcbiAgICB0aGlzLl9yZXNwb25zZUFyZ3MgPSB7fVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAsIHR5cGUgPSBvLnR5cGUgfHwgc2V0VHlwZSh0aGlzLnVybClcblxuICAgIGZuID0gZm4gfHwgZnVuY3Rpb24gKCkge31cblxuICAgIGlmIChvLnRpbWVvdXQpIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLmFib3J0KClcbiAgICAgIH0sIG8udGltZW91dClcbiAgICB9XG5cbiAgICBpZiAoby5zdWNjZXNzKSB7XG4gICAgICB0aGlzLl9zdWNjZXNzSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgby5zdWNjZXNzLmFwcGx5KG8sIGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoby5lcnJvcikge1xuICAgICAgdGhpcy5fZXJyb3JIYW5kbGVycy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgby5lcnJvci5hcHBseShvLCBhcmd1bWVudHMpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChvLmNvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9jb21wbGV0ZUhhbmRsZXJzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICBvLmNvbXBsZXRlLmFwcGx5KG8sIGFyZ3VtZW50cylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcGxldGUgKHJlc3ApIHtcbiAgICAgIG8udGltZW91dCAmJiBjbGVhclRpbWVvdXQoc2VsZi50aW1lb3V0KVxuICAgICAgc2VsZi50aW1lb3V0ID0gbnVsbFxuICAgICAgd2hpbGUgKHNlbGYuX2NvbXBsZXRlSGFuZGxlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBzZWxmLl9jb21wbGV0ZUhhbmRsZXJzLnNoaWZ0KCkocmVzcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWNjZXNzIChyZXNwKSB7XG4gICAgICByZXNwID0gKHR5cGUgIT09ICdqc29ucCcpID8gc2VsZi5yZXF1ZXN0IDogcmVzcFxuICAgICAgLy8gdXNlIGdsb2JhbCBkYXRhIGZpbHRlciBvbiByZXNwb25zZSB0ZXh0XG4gICAgICB2YXIgZmlsdGVyZWRSZXNwb25zZSA9IGdsb2JhbFNldHVwT3B0aW9ucy5kYXRhRmlsdGVyKHJlc3AucmVzcG9uc2VUZXh0LCB0eXBlKVxuICAgICAgICAsIHIgPSBmaWx0ZXJlZFJlc3BvbnNlXG4gICAgICB0cnkge1xuICAgICAgICByZXNwLnJlc3BvbnNlVGV4dCA9IHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gY2FuJ3QgYXNzaWduIHRoaXMgaW4gSUU8PTgsIGp1c3QgaWdub3JlXG4gICAgICB9XG4gICAgICBpZiAocikge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3AgPSB3aW4uSlNPTiA/IHdpbi5KU09OLnBhcnNlKHIpIDogZXZhbCgnKCcgKyByICsgJyknKVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKHJlc3AsICdDb3VsZCBub3QgcGFyc2UgSlNPTiBpbiByZXNwb25zZScsIGVycilcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnanMnOlxuICAgICAgICAgIHJlc3AgPSBldmFsKHIpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnaHRtbCc6XG4gICAgICAgICAgcmVzcCA9IHJcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICd4bWwnOlxuICAgICAgICAgIHJlc3AgPSByZXNwLnJlc3BvbnNlWE1MXG4gICAgICAgICAgICAgICYmIHJlc3AucmVzcG9uc2VYTUwucGFyc2VFcnJvciAvLyBJRSB0cm9sb2xvXG4gICAgICAgICAgICAgICYmIHJlc3AucmVzcG9uc2VYTUwucGFyc2VFcnJvci5lcnJvckNvZGVcbiAgICAgICAgICAgICAgJiYgcmVzcC5yZXNwb25zZVhNTC5wYXJzZUVycm9yLnJlYXNvblxuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IHJlc3AucmVzcG9uc2VYTUxcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX3Jlc3BvbnNlQXJncy5yZXNwID0gcmVzcFxuICAgICAgc2VsZi5fZnVsZmlsbGVkID0gdHJ1ZVxuICAgICAgZm4ocmVzcClcbiAgICAgIHNlbGYuX3N1Y2Nlc3NIYW5kbGVyKHJlc3ApXG4gICAgICB3aGlsZSAoc2VsZi5fZnVsZmlsbG1lbnRIYW5kbGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3AgPSBzZWxmLl9mdWxmaWxsbWVudEhhbmRsZXJzLnNoaWZ0KCkocmVzcClcbiAgICAgIH1cblxuICAgICAgY29tcGxldGUocmVzcClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvcihyZXNwLCBtc2csIHQpIHtcbiAgICAgIHJlc3AgPSBzZWxmLnJlcXVlc3RcbiAgICAgIHNlbGYuX3Jlc3BvbnNlQXJncy5yZXNwID0gcmVzcFxuICAgICAgc2VsZi5fcmVzcG9uc2VBcmdzLm1zZyA9IG1zZ1xuICAgICAgc2VsZi5fcmVzcG9uc2VBcmdzLnQgPSB0XG4gICAgICBzZWxmLl9lcnJlZCA9IHRydWVcbiAgICAgIHdoaWxlIChzZWxmLl9lcnJvckhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VsZi5fZXJyb3JIYW5kbGVycy5zaGlmdCgpKHJlc3AsIG1zZywgdClcbiAgICAgIH1cbiAgICAgIGNvbXBsZXRlKHJlc3ApXG4gICAgfVxuXG4gICAgdGhpcy5yZXF1ZXN0ID0gZ2V0UmVxdWVzdC5jYWxsKHRoaXMsIHN1Y2Nlc3MsIGVycm9yKVxuICB9XG5cbiAgUmVxd2VzdC5wcm90b3R5cGUgPSB7XG4gICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2Fib3J0ZWQgPSB0cnVlXG4gICAgICB0aGlzLnJlcXVlc3QuYWJvcnQoKVxuICAgIH1cblxuICAsIHJldHJ5OiBmdW5jdGlvbiAoKSB7XG4gICAgICBpbml0LmNhbGwodGhpcywgdGhpcy5vLCB0aGlzLmZuKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNtYWxsIGRldmlhdGlvbiBmcm9tIHRoZSBQcm9taXNlcyBBIENvbW1vbkpzIHNwZWNpZmljYXRpb25cbiAgICAgKiBodHRwOi8vd2lraS5jb21tb25qcy5vcmcvd2lraS9Qcm9taXNlcy9BXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBgdGhlbmAgd2lsbCBleGVjdXRlIHVwb24gc3VjY2Vzc2Z1bCByZXF1ZXN0c1xuICAgICAqL1xuICAsIHRoZW46IGZ1bmN0aW9uIChzdWNjZXNzLCBmYWlsKSB7XG4gICAgICBzdWNjZXNzID0gc3VjY2VzcyB8fCBmdW5jdGlvbiAoKSB7fVxuICAgICAgZmFpbCA9IGZhaWwgfHwgZnVuY3Rpb24gKCkge31cbiAgICAgIGlmICh0aGlzLl9mdWxmaWxsZWQpIHtcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VBcmdzLnJlc3AgPSBzdWNjZXNzKHRoaXMuX3Jlc3BvbnNlQXJncy5yZXNwKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9lcnJlZCkge1xuICAgICAgICBmYWlsKHRoaXMuX3Jlc3BvbnNlQXJncy5yZXNwLCB0aGlzLl9yZXNwb25zZUFyZ3MubXNnLCB0aGlzLl9yZXNwb25zZUFyZ3MudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcnMucHVzaChzdWNjZXNzKVxuICAgICAgICB0aGlzLl9lcnJvckhhbmRsZXJzLnB1c2goZmFpbClcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYGFsd2F5c2Agd2lsbCBleGVjdXRlIHdoZXRoZXIgdGhlIHJlcXVlc3Qgc3VjY2VlZHMgb3IgZmFpbHNcbiAgICAgKi9cbiAgLCBhbHdheXM6IGZ1bmN0aW9uIChmbikge1xuICAgICAgaWYgKHRoaXMuX2Z1bGZpbGxlZCB8fCB0aGlzLl9lcnJlZCkge1xuICAgICAgICBmbih0aGlzLl9yZXNwb25zZUFyZ3MucmVzcClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlSGFuZGxlcnMucHVzaChmbilcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYGZhaWxgIHdpbGwgZXhlY3V0ZSB3aGVuIHRoZSByZXF1ZXN0IGZhaWxzXG4gICAgICovXG4gICwgZmFpbDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICBpZiAodGhpcy5fZXJyZWQpIHtcbiAgICAgICAgZm4odGhpcy5fcmVzcG9uc2VBcmdzLnJlc3AsIHRoaXMuX3Jlc3BvbnNlQXJncy5tc2csIHRoaXMuX3Jlc3BvbnNlQXJncy50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZXJyb3JIYW5kbGVycy5wdXNoKGZuKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXF3ZXN0KG8sIGZuKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF3ZXN0KG8sIGZuKVxuICB9XG5cbiAgLy8gbm9ybWFsaXplIG5ld2xpbmUgdmFyaWFudHMgYWNjb3JkaW5nIHRvIHNwZWMgLT4gQ1JMRlxuICBmdW5jdGlvbiBub3JtYWxpemUocykge1xuICAgIHJldHVybiBzID8gcy5yZXBsYWNlKC9cXHI/XFxuL2csICdcXHJcXG4nKSA6ICcnXG4gIH1cblxuICBmdW5jdGlvbiBzZXJpYWwoZWwsIGNiKSB7XG4gICAgdmFyIG4gPSBlbC5uYW1lXG4gICAgICAsIHQgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICwgb3B0Q2IgPSBmdW5jdGlvbiAobykge1xuICAgICAgICAgIC8vIElFIGdpdmVzIHZhbHVlPVwiXCIgZXZlbiB3aGVyZSB0aGVyZSBpcyBubyB2YWx1ZSBhdHRyaWJ1dGVcbiAgICAgICAgICAvLyAnc3BlY2lmaWVkJyByZWY6IGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUNvcmUvY29yZS5odG1sI0lELTg2MjUyOTI3M1xuICAgICAgICAgIGlmIChvICYmICFvLmRpc2FibGVkKVxuICAgICAgICAgICAgY2Iobiwgbm9ybWFsaXplKG8uYXR0cmlidXRlcy52YWx1ZSAmJiBvLmF0dHJpYnV0ZXMudmFsdWUuc3BlY2lmaWVkID8gby52YWx1ZSA6IG8udGV4dCkpXG4gICAgICAgIH1cbiAgICAgICwgY2gsIHJhLCB2YWwsIGlcblxuICAgIC8vIGRvbid0IHNlcmlhbGl6ZSBlbGVtZW50cyB0aGF0IGFyZSBkaXNhYmxlZCBvciB3aXRob3V0IGEgbmFtZVxuICAgIGlmIChlbC5kaXNhYmxlZCB8fCAhbikgcmV0dXJuXG5cbiAgICBzd2l0Y2ggKHQpIHtcbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICBpZiAoIS9yZXNldHxidXR0b258aW1hZ2V8ZmlsZS9pLnRlc3QoZWwudHlwZSkpIHtcbiAgICAgICAgY2ggPSAvY2hlY2tib3gvaS50ZXN0KGVsLnR5cGUpXG4gICAgICAgIHJhID0gL3JhZGlvL2kudGVzdChlbC50eXBlKVxuICAgICAgICB2YWwgPSBlbC52YWx1ZVxuICAgICAgICAvLyBXZWJLaXQgZ2l2ZXMgdXMgXCJcIiBpbnN0ZWFkIG9mIFwib25cIiBpZiBhIGNoZWNrYm94IGhhcyBubyB2YWx1ZSwgc28gY29ycmVjdCBpdCBoZXJlXG4gICAgICAgIDsoIShjaCB8fCByYSkgfHwgZWwuY2hlY2tlZCkgJiYgY2Iobiwgbm9ybWFsaXplKGNoICYmIHZhbCA9PT0gJycgPyAnb24nIDogdmFsKSlcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgY2Iobiwgbm9ybWFsaXplKGVsLnZhbHVlKSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgIGlmIChlbC50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3Qtb25lJykge1xuICAgICAgICBvcHRDYihlbC5zZWxlY3RlZEluZGV4ID49IDAgPyBlbC5vcHRpb25zW2VsLnNlbGVjdGVkSW5kZXhdIDogbnVsbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGVsLmxlbmd0aCAmJiBpIDwgZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBlbC5vcHRpb25zW2ldLnNlbGVjdGVkICYmIG9wdENiKGVsLm9wdGlvbnNbaV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgLy8gY29sbGVjdCB1cCBhbGwgZm9ybSBlbGVtZW50cyBmb3VuZCBmcm9tIHRoZSBwYXNzZWQgYXJndW1lbnQgZWxlbWVudHMgYWxsXG4gIC8vIHRoZSB3YXkgZG93biB0byBjaGlsZCBlbGVtZW50czsgcGFzcyBhICc8Zm9ybT4nIG9yIGZvcm0gZmllbGRzLlxuICAvLyBjYWxsZWQgd2l0aCAndGhpcyc9Y2FsbGJhY2sgdG8gdXNlIGZvciBzZXJpYWwoKSBvbiBlYWNoIGVsZW1lbnRcbiAgZnVuY3Rpb24gZWFjaEZvcm1FbGVtZW50KCkge1xuICAgIHZhciBjYiA9IHRoaXNcbiAgICAgICwgZSwgaVxuICAgICAgLCBzZXJpYWxpemVTdWJ0YWdzID0gZnVuY3Rpb24gKGUsIHRhZ3MpIHtcbiAgICAgICAgICB2YXIgaSwgaiwgZmFcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZmEgPSBlW2J5VGFnXSh0YWdzW2ldKVxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGZhLmxlbmd0aDsgaisrKSBzZXJpYWwoZmFbal0sIGNiKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZSA9IGFyZ3VtZW50c1tpXVxuICAgICAgaWYgKC9pbnB1dHxzZWxlY3R8dGV4dGFyZWEvaS50ZXN0KGUudGFnTmFtZSkpIHNlcmlhbChlLCBjYilcbiAgICAgIHNlcmlhbGl6ZVN1YnRhZ3MoZSwgWyAnaW5wdXQnLCAnc2VsZWN0JywgJ3RleHRhcmVhJyBdKVxuICAgIH1cbiAgfVxuXG4gIC8vIHN0YW5kYXJkIHF1ZXJ5IHN0cmluZyBzdHlsZSBzZXJpYWxpemF0aW9uXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZVF1ZXJ5U3RyaW5nKCkge1xuICAgIHJldHVybiByZXF3ZXN0LnRvUXVlcnlTdHJpbmcocmVxd2VzdC5zZXJpYWxpemVBcnJheS5hcHBseShudWxsLCBhcmd1bWVudHMpKVxuICB9XG5cbiAgLy8geyAnbmFtZSc6ICd2YWx1ZScsIC4uLiB9IHN0eWxlIHNlcmlhbGl6YXRpb25cbiAgZnVuY3Rpb24gc2VyaWFsaXplSGFzaCgpIHtcbiAgICB2YXIgaGFzaCA9IHt9XG4gICAgZWFjaEZvcm1FbGVtZW50LmFwcGx5KGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgaWYgKG5hbWUgaW4gaGFzaCkge1xuICAgICAgICBoYXNoW25hbWVdICYmICFpc0FycmF5KGhhc2hbbmFtZV0pICYmIChoYXNoW25hbWVdID0gW2hhc2hbbmFtZV1dKVxuICAgICAgICBoYXNoW25hbWVdLnB1c2godmFsdWUpXG4gICAgICB9IGVsc2UgaGFzaFtuYW1lXSA9IHZhbHVlXG4gICAgfSwgYXJndW1lbnRzKVxuICAgIHJldHVybiBoYXNoXG4gIH1cblxuICAvLyBbIHsgbmFtZTogJ25hbWUnLCB2YWx1ZTogJ3ZhbHVlJyB9LCAuLi4gXSBzdHlsZSBzZXJpYWxpemF0aW9uXG4gIHJlcXdlc3Quc2VyaWFsaXplQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyciA9IFtdXG4gICAgZWFjaEZvcm1FbGVtZW50LmFwcGx5KGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgYXJyLnB1c2goe25hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZX0pXG4gICAgfSwgYXJndW1lbnRzKVxuICAgIHJldHVybiBhcnJcbiAgfVxuXG4gIHJlcXdlc3Quc2VyaWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgICB2YXIgb3B0LCBmblxuICAgICAgLCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxuXG4gICAgb3B0ID0gYXJncy5wb3AoKVxuICAgIG9wdCAmJiBvcHQubm9kZVR5cGUgJiYgYXJncy5wdXNoKG9wdCkgJiYgKG9wdCA9IG51bGwpXG4gICAgb3B0ICYmIChvcHQgPSBvcHQudHlwZSlcblxuICAgIGlmIChvcHQgPT0gJ21hcCcpIGZuID0gc2VyaWFsaXplSGFzaFxuICAgIGVsc2UgaWYgKG9wdCA9PSAnYXJyYXknKSBmbiA9IHJlcXdlc3Quc2VyaWFsaXplQXJyYXlcbiAgICBlbHNlIGZuID0gc2VyaWFsaXplUXVlcnlTdHJpbmdcblxuICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhcmdzKVxuICB9XG5cbiAgcmVxd2VzdC50b1F1ZXJ5U3RyaW5nID0gZnVuY3Rpb24gKG8sIHRyYWQpIHtcbiAgICB2YXIgcHJlZml4LCBpXG4gICAgICAsIHRyYWRpdGlvbmFsID0gdHJhZCB8fCBmYWxzZVxuICAgICAgLCBzID0gW11cbiAgICAgICwgZW5jID0gZW5jb2RlVVJJQ29tcG9uZW50XG4gICAgICAsIGFkZCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgLy8gSWYgdmFsdWUgaXMgYSBmdW5jdGlvbiwgaW52b2tlIGl0IGFuZCByZXR1cm4gaXRzIHZhbHVlXG4gICAgICAgICAgdmFsdWUgPSAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHZhbHVlKSA/IHZhbHVlKCkgOiAodmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWUpXG4gICAgICAgICAgc1tzLmxlbmd0aF0gPSBlbmMoa2V5KSArICc9JyArIGVuYyh2YWx1ZSlcbiAgICAgICAgfVxuICAgIC8vIElmIGFuIGFycmF5IHdhcyBwYXNzZWQgaW4sIGFzc3VtZSB0aGF0IGl0IGlzIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMuXG4gICAgaWYgKGlzQXJyYXkobykpIHtcbiAgICAgIGZvciAoaSA9IDA7IG8gJiYgaSA8IG8ubGVuZ3RoOyBpKyspIGFkZChvW2ldLm5hbWUsIG9baV0udmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRyYWRpdGlvbmFsLCBlbmNvZGUgdGhlIFwib2xkXCIgd2F5ICh0aGUgd2F5IDEuMy4yIG9yIG9sZGVyXG4gICAgICAvLyBkaWQgaXQpLCBvdGhlcndpc2UgZW5jb2RlIHBhcmFtcyByZWN1cnNpdmVseS5cbiAgICAgIGZvciAocHJlZml4IGluIG8pIHtcbiAgICAgICAgYnVpbGRQYXJhbXMocHJlZml4LCBvW3ByZWZpeF0sIHRyYWRpdGlvbmFsLCBhZGQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3BhY2VzIHNob3VsZCBiZSArIGFjY29yZGluZyB0byBzcGVjXG4gICAgcmV0dXJuIHMuam9pbignJicpLnJlcGxhY2UoLyUyMC9nLCAnKycpXG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFBhcmFtcyhwcmVmaXgsIG9iaiwgdHJhZGl0aW9uYWwsIGFkZCkge1xuICAgIHZhciBuYW1lLCBpLCB2XG4gICAgICAsIHJicmFja2V0ID0gL1xcW1xcXSQvXG5cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAvLyBTZXJpYWxpemUgYXJyYXkgaXRlbS5cbiAgICAgIGZvciAoaSA9IDA7IG9iaiAmJiBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHYgPSBvYmpbaV1cbiAgICAgICAgaWYgKHRyYWRpdGlvbmFsIHx8IHJicmFja2V0LnRlc3QocHJlZml4KSkge1xuICAgICAgICAgIC8vIFRyZWF0IGVhY2ggYXJyYXkgaXRlbSBhcyBhIHNjYWxhci5cbiAgICAgICAgICBhZGQocHJlZml4LCB2KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1aWxkUGFyYW1zKHByZWZpeCArICdbJyArICh0eXBlb2YgdiA9PT0gJ29iamVjdCcgPyBpIDogJycpICsgJ10nLCB2LCB0cmFkaXRpb25hbCwgYWRkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvYmogJiYgb2JqLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAvLyBTZXJpYWxpemUgb2JqZWN0IGl0ZW0uXG4gICAgICBmb3IgKG5hbWUgaW4gb2JqKSB7XG4gICAgICAgIGJ1aWxkUGFyYW1zKHByZWZpeCArICdbJyArIG5hbWUgKyAnXScsIG9ialtuYW1lXSwgdHJhZGl0aW9uYWwsIGFkZClcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXJpYWxpemUgc2NhbGFyIGl0ZW0uXG4gICAgICBhZGQocHJlZml4LCBvYmopXG4gICAgfVxuICB9XG5cbiAgcmVxd2VzdC5nZXRjYWxsYmFja1ByZWZpeCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2tQcmVmaXhcbiAgfVxuXG4gIC8vIGpRdWVyeSBhbmQgWmVwdG8gY29tcGF0aWJpbGl0eSwgZGlmZmVyZW5jZXMgY2FuIGJlIHJlbWFwcGVkIGhlcmUgc28geW91IGNhbiBjYWxsXG4gIC8vIC5hamF4LmNvbXBhdChvcHRpb25zLCBjYWxsYmFjaylcbiAgcmVxd2VzdC5jb21wYXQgPSBmdW5jdGlvbiAobywgZm4pIHtcbiAgICBpZiAobykge1xuICAgICAgby50eXBlICYmIChvLm1ldGhvZCA9IG8udHlwZSkgJiYgZGVsZXRlIG8udHlwZVxuICAgICAgby5kYXRhVHlwZSAmJiAoby50eXBlID0gby5kYXRhVHlwZSlcbiAgICAgIG8uanNvbnBDYWxsYmFjayAmJiAoby5qc29ucENhbGxiYWNrTmFtZSA9IG8uanNvbnBDYWxsYmFjaykgJiYgZGVsZXRlIG8uanNvbnBDYWxsYmFja1xuICAgICAgby5qc29ucCAmJiAoby5qc29ucENhbGxiYWNrID0gby5qc29ucClcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZXF3ZXN0KG8sIGZuKVxuICB9XG5cbiAgcmVxd2VzdC5hamF4U2V0dXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgZm9yICh2YXIgayBpbiBvcHRpb25zKSB7XG4gICAgICBnbG9iYWxTZXR1cE9wdGlvbnNba10gPSBvcHRpb25zW2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcXdlc3Rcbn0pO1xuIiwiLyohXG4gICogQmVhbiAtIGNvcHlyaWdodCAoYykgSmFjb2IgVGhvcm50b24gMjAxMS0yMDEyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2ZhdC9iZWFuXG4gICogTUlUIGxpY2Vuc2VcbiAgKi9cbihmdW5jdGlvbiAobmFtZSwgY29udGV4dCwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIGNvbnRleHRbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0pKCdiZWFuJywgdGhpcywgZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQpIHtcbiAgbmFtZSAgICA9IG5hbWUgICAgfHwgJ2JlYW4nXG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXNcblxuICB2YXIgd2luICAgICAgICAgICAgPSB3aW5kb3dcbiAgICAsIG9sZCAgICAgICAgICAgID0gY29udGV4dFtuYW1lXVxuICAgICwgbmFtZXNwYWNlUmVnZXggPSAvW15cXC5dKig/PVxcLi4qKVxcLnwuKi9cbiAgICAsIG5hbWVSZWdleCAgICAgID0gL1xcLi4qL1xuICAgICwgYWRkRXZlbnQgICAgICAgPSAnYWRkRXZlbnRMaXN0ZW5lcidcbiAgICAsIHJlbW92ZUV2ZW50ICAgID0gJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgLCBkb2MgICAgICAgICAgICA9IGRvY3VtZW50IHx8IHt9XG4gICAgLCByb290ICAgICAgICAgICA9IGRvYy5kb2N1bWVudEVsZW1lbnQgfHwge31cbiAgICAsIFczQ19NT0RFTCAgICAgID0gcm9vdFthZGRFdmVudF1cbiAgICAsIGV2ZW50U3VwcG9ydCAgID0gVzNDX01PREVMID8gYWRkRXZlbnQgOiAnYXR0YWNoRXZlbnQnXG4gICAgLCBPTkUgICAgICAgICAgICA9IHt9IC8vIHNpbmdsZXRvbiBmb3IgcXVpY2sgbWF0Y2hpbmcgbWFraW5nIGFkZCgpIGRvIG9uZSgpXG5cbiAgICAsIHNsaWNlICAgICAgICAgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgLCBzdHIyYXJyICAgICAgICA9IGZ1bmN0aW9uIChzLCBkKSB7IHJldHVybiBzLnNwbGl0KGQgfHwgJyAnKSB9XG4gICAgLCBpc1N0cmluZyAgICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnc3RyaW5nJyB9XG4gICAgLCBpc0Z1bmN0aW9uICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnZnVuY3Rpb24nIH1cblxuICAgICAgLy8gZXZlbnRzIHRoYXQgd2UgY29uc2lkZXIgdG8gYmUgJ25hdGl2ZScsIGFueXRoaW5nIG5vdCBpbiB0aGlzIGxpc3Qgd2lsbFxuICAgICAgLy8gYmUgdHJlYXRlZCBhcyBhIGN1c3RvbSBldmVudFxuICAgICwgc3RhbmRhcmROYXRpdmVFdmVudHMgPVxuICAgICAgICAnY2xpY2sgZGJsY2xpY2sgbW91c2V1cCBtb3VzZWRvd24gY29udGV4dG1lbnUgJyAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnbW91c2V3aGVlbCBtb3VzZW11bHRpd2hlZWwgRE9NTW91c2VTY3JvbGwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2Ugd2hlZWxcbiAgICAgICAgJ21vdXNlb3ZlciBtb3VzZW91dCBtb3VzZW1vdmUgc2VsZWN0c3RhcnQgc2VsZWN0ZW5kICcgICAgICAgICAgICArIC8vIG1vdXNlIG1vdmVtZW50XG4gICAgICAgICdrZXlkb3duIGtleXByZXNzIGtleXVwICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBrZXlib2FyZFxuICAgICAgICAnb3JpZW50YXRpb25jaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW9iaWxlXG4gICAgICAgICdmb2N1cyBibHVyIGNoYW5nZSByZXNldCBzZWxlY3Qgc3VibWl0ICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBmb3JtIGVsZW1lbnRzXG4gICAgICAgICdsb2FkIHVubG9hZCBiZWZvcmV1bmxvYWQgcmVzaXplIG1vdmUgRE9NQ29udGVudExvYWRlZCAnICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgbWVzc2FnZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnZXJyb3IgYWJvcnQgc2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWlzY1xuICAgICAgLy8gZWxlbWVudC5maXJlRXZlbnQoJ29uWFlaJy4uLiBpcyBub3QgZm9yZ2l2aW5nIGlmIHdlIHRyeSB0byBmaXJlIGFuIGV2ZW50XG4gICAgICAvLyB0aGF0IGRvZXNuJ3QgYWN0dWFsbHkgZXhpc3QsIHNvIG1ha2Ugc3VyZSB3ZSBvbmx5IGRvIHRoZXNlIG9uIG5ld2VyIGJyb3dzZXJzXG4gICAgLCB3M2NOYXRpdmVFdmVudHMgPVxuICAgICAgICAnc2hvdyAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnaW5wdXQgaW52YWxpZCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gdG91Y2hcbiAgICAgICAgJ2dlc3R1cmVzdGFydCBnZXN0dXJlY2hhbmdlIGdlc3R1cmVlbmQgJyAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGdlc3R1cmVcbiAgICAgICAgJ3RleHRpbnB1dCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIFRleHRFdmVudFxuICAgICAgICAncmVhZHlzdGF0ZWNoYW5nZSBwYWdlc2hvdyBwYWdlaGlkZSBwb3BzdGF0ZSAnICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdoYXNoY2hhbmdlIG9mZmxpbmUgb25saW5lICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2FmdGVycHJpbnQgYmVmb3JlcHJpbnQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHByaW50aW5nXG4gICAgICAgICdkcmFnc3RhcnQgZHJhZ2VudGVyIGRyYWdvdmVyIGRyYWdsZWF2ZSBkcmFnIGRyb3AgZHJhZ2VuZCAnICAgICAgKyAvLyBkbmRcbiAgICAgICAgJ2xvYWRzdGFydCBwcm9ncmVzcyBzdXNwZW5kIGVtcHRpZWQgc3RhbGxlZCBsb2FkbWV0YWRhdGEgJyAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdsb2FkZWRkYXRhIGNhbnBsYXkgY2FucGxheXRocm91Z2ggcGxheWluZyB3YWl0aW5nIHNlZWtpbmcgJyAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnc2Vla2VkIGVuZGVkIGR1cmF0aW9uY2hhbmdlIHRpbWV1cGRhdGUgcGxheSBwYXVzZSByYXRlY2hhbmdlICcgICsgLy8gbWVkaWFcbiAgICAgICAgJ3ZvbHVtZWNoYW5nZSBjdWVjaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdjaGVja2luZyBub3VwZGF0ZSBkb3dubG9hZGluZyBjYWNoZWQgdXBkYXRlcmVhZHkgb2Jzb2xldGUgJyAgICAgICAvLyBhcHBjYWNoZVxuXG4gICAgICAvLyBjb252ZXJ0IHRvIGEgaGFzaCBmb3IgcXVpY2sgbG9va3Vwc1xuICAgICwgbmF0aXZlRXZlbnRzID0gKGZ1bmN0aW9uIChoYXNoLCBldmVudHMsIGkpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykgZXZlbnRzW2ldICYmIChoYXNoW2V2ZW50c1tpXV0gPSAxKVxuICAgICAgICByZXR1cm4gaGFzaFxuICAgICAgfSh7fSwgc3RyMmFycihzdGFuZGFyZE5hdGl2ZUV2ZW50cyArIChXM0NfTU9ERUwgPyB3M2NOYXRpdmVFdmVudHMgOiAnJykpKSlcblxuICAgICAgLy8gY3VzdG9tIGV2ZW50cyBhcmUgZXZlbnRzIHRoYXQgd2UgKmZha2UqLCB0aGV5IGFyZSBub3QgcHJvdmlkZWQgbmF0aXZlbHkgYnV0XG4gICAgICAvLyB3ZSBjYW4gdXNlIG5hdGl2ZSBldmVudHMgdG8gZ2VuZXJhdGUgdGhlbVxuICAgICwgY3VzdG9tRXZlbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzQW5jZXN0b3IgPSAnY29tcGFyZURvY3VtZW50UG9zaXRpb24nIGluIHJvb3RcbiAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICYmIChjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudCkgJiAxNikgPT09IDE2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6ICdjb250YWlucycgaW4gcm9vdFxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBjb250YWluZXIubm9kZVR5cGUgPT09IDkgfHwgY29udGFpbmVyID09PSB3aW5kb3cgPyByb290IDogY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIgIT09IGVsZW1lbnQgJiYgY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlKSBpZiAoZWxlbWVudCA9PT0gY29udGFpbmVyKSByZXR1cm4gMVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICwgY2hlY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyIHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgIHJldHVybiAhcmVsYXRlZFxuICAgICAgICAgICAgICAgID8gcmVsYXRlZCA9PSBudWxsXG4gICAgICAgICAgICAgICAgOiAocmVsYXRlZCAhPT0gdGhpcyAmJiByZWxhdGVkLnByZWZpeCAhPT0gJ3h1bCcgJiYgIS9kb2N1bWVudC8udGVzdCh0aGlzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgICYmICFpc0FuY2VzdG9yKHJlbGF0ZWQsIHRoaXMpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiB7IGJhc2U6ICdtb3VzZW92ZXInLCBjb25kaXRpb246IGNoZWNrIH1cbiAgICAgICAgICAsIG1vdXNlbGVhdmU6IHsgYmFzZTogJ21vdXNlb3V0JywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZXdoZWVsOiB7IGJhc2U6IC9GaXJlZm94Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gJ0RPTU1vdXNlU2Nyb2xsJyA6ICdtb3VzZXdoZWVsJyB9XG4gICAgICAgIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgcHJvdmlkZSBhIGNvbnNpc3RlbnQgRXZlbnQgb2JqZWN0IGFjcm9zcyBicm93c2VycyBieSB0YWtpbmcgdGhlIGFjdHVhbCBET01cbiAgICAgIC8vIGV2ZW50IG9iamVjdCBhbmQgZ2VuZXJhdGluZyBhIG5ldyBvbmUgZnJvbSBpdHMgcHJvcGVydGllcy5cbiAgICAsIEV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGEgd2hpdGVsaXN0IG9mIHByb3BlcnRpZXMgKGZvciBkaWZmZXJlbnQgZXZlbnQgdHlwZXMpIHRlbGxzIHVzIHdoYXQgdG8gY2hlY2sgZm9yIGFuZCBjb3B5XG4gICAgICAgIHZhciBjb21tb25Qcm9wcyAgPSBzdHIyYXJyKCdhbHRLZXkgYXR0ckNoYW5nZSBhdHRyTmFtZSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0ICcgK1xuICAgICAgICAgICAgICAnZGV0YWlsIGV2ZW50UGhhc2UgZ2V0TW9kaWZpZXJTdGF0ZSBpc1RydXN0ZWQgbWV0YUtleSByZWxhdGVkTm9kZSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5ICcgICtcbiAgICAgICAgICAgICAgJ3NyY0VsZW1lbnQgdGFyZ2V0IHRpbWVTdGFtcCB0eXBlIHZpZXcgd2hpY2ggcHJvcGVydHlOYW1lJylcbiAgICAgICAgICAsIG1vdXNlUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgZGF0YVRyYW5zZmVyICcgICAgICArXG4gICAgICAgICAgICAgICdmcm9tRWxlbWVudCBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudCcpKVxuICAgICAgICAgICwgbW91c2VXaGVlbFByb3BzID0gbW91c2VQcm9wcy5jb25jYXQoc3RyMmFycignd2hlZWxEZWx0YSB3aGVlbERlbHRhWCB3aGVlbERlbHRhWSB3aGVlbERlbHRhWiAnICtcbiAgICAgICAgICAgICAgJ2F4aXMnKSkgLy8gJ2F4aXMnIGlzIEZGIHNwZWNpZmljXG4gICAgICAgICAgLCBrZXlQcm9wcyAgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZSBrZXlJZGVudGlmaWVyICcgICAgICAgICAgK1xuICAgICAgICAgICAgICAna2V5TG9jYXRpb24gbG9jYXRpb24nKSlcbiAgICAgICAgICAsIHRleHRQcm9wcyAgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdkYXRhJykpXG4gICAgICAgICAgLCB0b3VjaFByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycigndG91Y2hlcyB0YXJnZXRUb3VjaGVzIGNoYW5nZWRUb3VjaGVzIHNjYWxlIHJvdGF0aW9uJykpXG4gICAgICAgICAgLCBtZXNzYWdlUHJvcHMgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YSBvcmlnaW4gc291cmNlJykpXG4gICAgICAgICAgLCBzdGF0ZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignc3RhdGUnKSlcbiAgICAgICAgICAsIG92ZXJPdXRSZWdleCA9IC9vdmVyfG91dC9cbiAgICAgICAgICAgIC8vIHNvbWUgZXZlbnQgdHlwZXMgbmVlZCBzcGVjaWFsIGhhbmRsaW5nIGFuZCBzb21lIG5lZWQgc3BlY2lhbCBwcm9wZXJ0aWVzLCBkbyB0aGF0IGFsbCBoZXJlXG4gICAgICAgICAgLCB0eXBlRml4ZXJzICAgPSBbXG4gICAgICAgICAgICAgICAgeyAvLyBrZXkgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2tleS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmtleUNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvY2xpY2t8bW91c2UoPyEoLip3aGVlbHxzY3JvbGwpKXxtZW51fGRyYWd8ZHJvcC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCwgdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJpZ2h0Q2xpY2sgPSBldmVudC53aGljaCA9PT0gMyB8fCBldmVudC5idXR0b24gPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5wb3MgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wYWdlWCB8fCBldmVudC5wYWdlWSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LnBhZ2VYXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFggKyBkb2MuYm9keS5zY3JvbGxMZWZ0ICsgcm9vdC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQuY2xpZW50WSArIGRvYy5ib2R5LnNjcm9sbFRvcCArIHJvb3Quc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChvdmVyT3V0UmVnZXgudGVzdCh0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucmVsYXRlZFRhcmdldCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbKHR5cGUgPT0gJ21vdXNlb3ZlcicgPyAnZnJvbScgOiAndG8nKSArICdFbGVtZW50J11cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1vdXNlIHdoZWVsIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9tb3VzZS4qKHdoZWVsfHNjcm9sbCkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vdXNlV2hlZWxQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gVGV4dEV2ZW50XG4gICAgICAgICAgICAgICAgICAgIHJlZzogL150ZXh0L2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0ZXh0UHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIHRvdWNoIGFuZCBnZXN0dXJlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9edG91Y2h8Xmdlc3R1cmUvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRvdWNoUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1lc3NhZ2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15tZXNzYWdlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWVzc2FnZVByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBwb3BzdGF0ZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnBvcHN0YXRlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdGVQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlZzogLy4qL1xuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbW1vblByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgLCB0eXBlRml4ZXJNYXAgPSB7fSAvLyB1c2VkIHRvIG1hcCBldmVudCB0eXBlcyB0byBmaXhlciBmdW5jdGlvbnMgKGFib3ZlKSwgYSBiYXNpYyBjYWNoZSBtZWNoYW5pc21cblxuICAgICAgICAgICwgRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuXG4gICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgKChlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50KS5wYXJlbnRXaW5kb3cgfHwgd2luKS5ldmVudFxuICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsRXZlbnQgPSBldmVudFxuICAgICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgID0gaXNOYXRpdmVcbiAgICAgICAgICAgICAgdGhpcy5pc0JlYW4gICAgICAgICA9IHRydWVcblxuICAgICAgICAgICAgICBpZiAoIWV2ZW50KSByZXR1cm5cblxuICAgICAgICAgICAgICB2YXIgdHlwZSAgID0gZXZlbnQudHlwZVxuICAgICAgICAgICAgICAgICwgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnRcbiAgICAgICAgICAgICAgICAsIGksIGwsIHAsIHByb3BzLCBmaXhlclxuXG4gICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0ICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMyA/IHRhcmdldC5wYXJlbnROb2RlIDogdGFyZ2V0XG5cbiAgICAgICAgICAgICAgaWYgKGlzTmF0aXZlKSB7IC8vIHdlIG9ubHkgbmVlZCBiYXNpYyBhdWdtZW50YXRpb24gb24gY3VzdG9tIGV2ZW50cywgdGhlIHJlc3QgZXhwZW5zaXZlICYgcG9pbnRsZXNzXG4gICAgICAgICAgICAgICAgZml4ZXIgPSB0eXBlRml4ZXJNYXBbdHlwZV1cbiAgICAgICAgICAgICAgICBpZiAoIWZpeGVyKSB7IC8vIGhhdmVuJ3QgZW5jb3VudGVyZWQgdGhpcyBldmVudCB0eXBlIGJlZm9yZSwgbWFwIGEgZml4ZXIgZnVuY3Rpb24gZm9yIGl0XG4gICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gdHlwZUZpeGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVGaXhlcnNbaV0ucmVnLnRlc3QodHlwZSkpIHsgLy8gZ3VhcmFudGVlZCB0byBtYXRjaCBhdCBsZWFzdCBvbmUsIGxhc3QgaXMgLipcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlRml4ZXJNYXBbdHlwZV0gPSBmaXhlciA9IHR5cGVGaXhlcnNbaV0uZml4XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByb3BzID0gZml4ZXIoZXZlbnQsIHRoaXMsIHR5cGUpXG4gICAgICAgICAgICAgICAgZm9yIChpID0gcHJvcHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoISgocCA9IHByb3BzW2ldKSBpbiB0aGlzKSAmJiBwIGluIGV2ZW50KSB0aGlzW3BdID0gZXZlbnRbcF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdCgpIGFuZCBzdG9wUHJvcGFnYXRpb24oKSBhcmUgYSBjb25zaXN0ZW50IGludGVyZmFjZSB0byB0aG9zZSBmdW5jdGlvbnNcbiAgICAgICAgLy8gb24gdGhlIERPTSwgc3RvcCgpIGlzIGFuIGFsaWFzIGZvciBib3RoIG9mIHRoZW0gdG9nZXRoZXJcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQpIHRoaXMub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZWxzZSB0aGlzLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24pIHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIC8vIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyB0byBiZSBoYW5kbGVkIGludGVybmFsbHkgYmVjYXVzZSB3ZSBtYW5hZ2UgdGhlIGV2ZW50IGxpc3QgZm9yXG4gICAgICAgIC8vIGVhY2ggZWxlbWVudFxuICAgICAgICAvLyBub3RlIHRoYXQgb3JpZ2luYWxFbGVtZW50IG1heSBiZSBhIEJlYW4jRXZlbnQgb2JqZWN0IGluIHNvbWUgc2l0dWF0aW9uc1xuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZSB9XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgJiYgdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBpcyByaXBlIGZvciBvcHRpbWlzYXRpb24sIG5ldyBldmVudHMgYXJlICpleHBlbnNpdmUqXG4gICAgICAgICAgLy8gaW1wcm92aW5nIHRoaXMgd2lsbCBzcGVlZCB1cCBkZWxlZ2F0ZWQgZXZlbnRzXG4gICAgICAgICAgdmFyIG5lID0gbmV3IEV2ZW50KHRoaXMsIHRoaXMuZWxlbWVudCwgdGhpcy5pc05hdGl2ZSlcbiAgICAgICAgICBuZS5jdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldFxuICAgICAgICAgIHJldHVybiBuZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEV2ZW50XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIGlmIHdlJ3JlIGluIG9sZCBJRSB3ZSBjYW4ndCBkbyBvbnByb3BlcnR5Y2hhbmdlIG9uIGRvYyBvciB3aW4gc28gd2UgdXNlIGRvYy5kb2N1bWVudEVsZW1lbnQgZm9yIGJvdGhcbiAgICAsIHRhcmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgaXNOYXRpdmUpIHtcbiAgICAgICAgcmV0dXJuICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIChlbGVtZW50ID09PSBkb2MgfHwgZWxlbWVudCA9PT0gd2luKSA/IHJvb3QgOiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIEJlYW4gbWFpbnRhaW5zIGFuIGludGVybmFsIHJlZ2lzdHJ5IGZvciBldmVudCBsaXN0ZW5lcnMuIFdlIGRvbid0IHRvdWNoIGVsZW1lbnRzLCBvYmplY3RzXG4gICAgICAgICogb3IgZnVuY3Rpb25zIHRvIGlkZW50aWZ5IHRoZW0sIGluc3RlYWQgd2Ugc3RvcmUgZXZlcnl0aGluZyBpbiB0aGUgcmVnaXN0cnkuXG4gICAgICAgICogRWFjaCBldmVudCBsaXN0ZW5lciBoYXMgYSBSZWdFbnRyeSBvYmplY3QsIHdlIGhhdmUgb25lICdyZWdpc3RyeScgZm9yIHRoZSB3aG9sZSBpbnN0YW5jZS5cbiAgICAgICAgKi9cbiAgICAsIFJlZ0VudHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZWFjaCBoYW5kbGVyIGlzIHdyYXBwZWQgc28gd2UgY2FuIGhhbmRsZSBkZWxlZ2F0aW9uIGFuZCBjdXN0b20gZXZlbnRzXG4gICAgICAgIHZhciB3cmFwcGVkSGFuZGxlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBmbiwgY29uZGl0aW9uLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2FsbCA9IGZ1bmN0aW9uIChldmVudCwgZWFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBhcmdzID8gc2xpY2UuY2FsbChlYXJncywgZXZlbnQgPyAwIDogMSkuY29uY2F0KGFyZ3MpIDogZWFyZ3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGZpbmRUYXJnZXQgPSBmdW5jdGlvbiAoZXZlbnQsIGV2ZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuLl9fYmVhbkRlbCA/IGZuLl9fYmVhbkRlbC5mdChldmVudC50YXJnZXQsIGVsZW1lbnQpIDogZXZlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGhhbmRsZXIgPSBjb25kaXRpb25cbiAgICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGZpbmRUYXJnZXQoZXZlbnQsIHRoaXMpIC8vIGRlbGVhdGVkIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkgZXZlbnQuY3VycmVudFRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGwoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGZuLl9fYmVhbkRlbCkgZXZlbnQgPSBldmVudC5jbG9uZShmaW5kVGFyZ2V0KGV2ZW50KSkgLy8gZGVsZWdhdGVkIGV2ZW50LCBmaXggdGhlIGZpeFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXIuX19iZWFuRGVsID0gZm4uX19iZWFuRGVsXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgICAgIH1cblxuICAgICAgICAsIFJlZ0VudHJ5ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIG9yaWdpbmFsLCBuYW1lc3BhY2VzLCBhcmdzLCByb290KSB7XG4gICAgICAgICAgICB2YXIgY3VzdG9tVHlwZSAgICAgPSBjdXN0b21FdmVudHNbdHlwZV1cbiAgICAgICAgICAgICAgLCBpc05hdGl2ZVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAndW5sb2FkJykge1xuICAgICAgICAgICAgICAvLyBzZWxmIGNsZWFuLXVwXG4gICAgICAgICAgICAgIGhhbmRsZXIgPSBvbmNlKHJlbW92ZUxpc3RlbmVyLCBlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUuY29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHdyYXBwZWRIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGN1c3RvbVR5cGUuY29uZGl0aW9uLCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHR5cGUgPSBjdXN0b21UeXBlLmJhc2UgfHwgdHlwZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgPSBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50c1t0eXBlXSAmJiAhIWVsZW1lbnRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5jdXN0b21UeXBlICAgID0gIVczQ19NT0RFTCAmJiAhaXNOYXRpdmUgJiYgdHlwZVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ICAgICAgID0gZWxlbWVudFxuICAgICAgICAgICAgdGhpcy50eXBlICAgICAgICAgID0gdHlwZVxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbCAgICAgID0gb3JpZ2luYWxcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlcyAgICA9IG5hbWVzcGFjZXNcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlICAgICA9IFczQ19NT0RFTCB8fCBpc05hdGl2ZSA/IHR5cGUgOiAncHJvcGVydHljaGFuZ2UnXG4gICAgICAgICAgICB0aGlzLnRhcmdldCAgICAgICAgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICAgICAgdGhpc1tldmVudFN1cHBvcnRdID0gISF0aGlzLnRhcmdldFtldmVudFN1cHBvcnRdXG4gICAgICAgICAgICB0aGlzLnJvb3QgICAgICAgICAgPSByb290XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIgICAgICAgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBudWxsLCBhcmdzKVxuICAgICAgICAgIH1cblxuICAgICAgICAvLyBnaXZlbiBhIGxpc3Qgb2YgbmFtZXNwYWNlcywgaXMgb3VyIGVudHJ5IGluIGFueSBvZiB0aGVtP1xuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUuaW5OYW1lc3BhY2VzID0gZnVuY3Rpb24gKGNoZWNrTmFtZXNwYWNlcykge1xuICAgICAgICAgIHZhciBpLCBqLCBjID0gMFxuICAgICAgICAgIGlmICghY2hlY2tOYW1lc3BhY2VzKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgIGlmICghdGhpcy5uYW1lc3BhY2VzKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBmb3IgKGkgPSBjaGVja05hbWVzcGFjZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICBmb3IgKGogPSB0aGlzLm5hbWVzcGFjZXMubGVuZ3RoOyBqLS07KSB7XG4gICAgICAgICAgICAgIGlmIChjaGVja05hbWVzcGFjZXNbaV0gPT0gdGhpcy5uYW1lc3BhY2VzW2pdKSBjKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNoZWNrTmFtZXNwYWNlcy5sZW5ndGggPT09IGNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hdGNoIGJ5IGVsZW1lbnQsIG9yaWdpbmFsIGZuIChvcHQpLCBoYW5kbGVyIGZuIChvcHQpXG4gICAgICAgIFJlZ0VudHJ5LnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gKGNoZWNrRWxlbWVudCwgY2hlY2tPcmlnaW5hbCwgY2hlY2tIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudCA9PT0gY2hlY2tFbGVtZW50ICYmXG4gICAgICAgICAgICAoIWNoZWNrT3JpZ2luYWwgfHwgdGhpcy5vcmlnaW5hbCA9PT0gY2hlY2tPcmlnaW5hbCkgJiZcbiAgICAgICAgICAgICghY2hlY2tIYW5kbGVyIHx8IHRoaXMuaGFuZGxlciA9PT0gY2hlY2tIYW5kbGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZ0VudHJ5XG4gICAgICB9KCkpXG5cbiAgICAsIHJlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gb3VyIG1hcCBzdG9yZXMgYXJyYXlzIGJ5IGV2ZW50IHR5cGUsIGp1c3QgYmVjYXVzZSBpdCdzIGJldHRlciB0aGFuIHN0b3JpbmdcbiAgICAgICAgLy8gZXZlcnl0aGluZyBpbiBhIHNpbmdsZSBhcnJheS5cbiAgICAgICAgLy8gdXNlcyAnJCcgYXMgYSBwcmVmaXggZm9yIHRoZSBrZXlzIGZvciBzYWZldHkgYW5kICdyJyBhcyBhIHNwZWNpYWwgcHJlZml4IGZvclxuICAgICAgICAvLyByb290TGlzdGVuZXJzIHNvIHdlIGNhbiBsb29rIHRoZW0gdXAgZmFzdFxuICAgICAgICB2YXIgbWFwID0ge31cblxuICAgICAgICAgIC8vIGdlbmVyaWMgZnVuY3Rpb25hbCBzZWFyY2ggb2Ygb3VyIHJlZ2lzdHJ5IGZvciBtYXRjaGluZyBsaXN0ZW5lcnMsXG4gICAgICAgICAgLy8gYGZuYCByZXR1cm5zIGZhbHNlIHRvIGJyZWFrIG91dCBvZiB0aGUgbG9vcFxuICAgICAgICAgICwgZm9yQWxsID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCBoYW5kbGVyLCByb290LCBmbikge1xuICAgICAgICAgICAgICB2YXIgcGZ4ID0gcm9vdCA/ICdyJyA6ICckJ1xuICAgICAgICAgICAgICBpZiAoIXR5cGUgfHwgdHlwZSA9PSAnKicpIHtcbiAgICAgICAgICAgICAgICAvLyBzZWFyY2ggdGhlIHdob2xlIHJlZ2lzdHJ5XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCBpbiBtYXApIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSBwZngpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yQWxsKGVsZW1lbnQsIHQuc3Vic3RyKDEpLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpID0gMCwgbCwgbGlzdCA9IG1hcFtwZnggKyB0eXBlXSwgYWxsID0gZWxlbWVudCA9PSAnKidcbiAgICAgICAgICAgICAgICBpZiAoIWxpc3QpIHJldHVyblxuICAgICAgICAgICAgICAgIGZvciAobCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoKGFsbCB8fCBsaXN0W2ldLm1hdGNoZXMoZWxlbWVudCwgb3JpZ2luYWwsIGhhbmRsZXIpKSAmJiAhZm4obGlzdFtpXSwgbGlzdCwgaSwgdHlwZSkpIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBoYXMgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgLy8gd2UncmUgbm90IHVzaW5nIGZvckFsbCBoZXJlIHNpbXBseSBiZWNhdXNlIGl0J3MgYSBiaXQgc2xvd2VyIGFuZCB0aGlzXG4gICAgICAgICAgICAgIC8vIG5lZWRzIHRvIGJlIGZhc3RcbiAgICAgICAgICAgICAgdmFyIGksIGxpc3QgPSBtYXBbKHJvb3QgPyAncicgOiAnJCcpICsgdHlwZV1cbiAgICAgICAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFsaXN0W2ldLnJvb3QgJiYgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBudWxsKSkgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGdldCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgZW50cmllcyA9IFtdXG4gICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgbnVsbCwgcm9vdCwgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXMucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgcHV0ID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgIHZhciBoYXMgPSAhZW50cnkucm9vdCAmJiAhdGhpcy5oYXMoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLCBrZXkgPSAoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXG4gICAgICAgICAgICAgIDsobWFwW2tleV0gfHwgKG1hcFtrZXldID0gW10pKS5wdXNoKGVudHJ5KVxuICAgICAgICAgICAgICByZXR1cm4gaGFzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGRlbCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICBmb3JBbGwoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZW50cnkuaGFuZGxlciwgZW50cnkucm9vdCwgZnVuY3Rpb24gKGVudHJ5LCBsaXN0LCBpKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICBlbnRyeS5yZW1vdmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgZGVsZXRlIG1hcFsoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkdW1wIGFsbCBlbnRyaWVzLCB1c2VkIGZvciBvbnVubG9hZFxuICAgICAgICAgICwgZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHQsIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3IgKHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQuY2hhckF0KDApID09ICckJykgZW50cmllcyA9IGVudHJpZXMuY29uY2F0KG1hcFt0XSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZW50cmllc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGhhczogaGFzLCBnZXQ6IGdldCwgcHV0OiBwdXQsIGRlbDogZGVsLCBlbnRyaWVzOiBlbnRyaWVzIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgbmVlZCBhIHNlbGVjdG9yIGVuZ2luZSBmb3IgZGVsZWdhdGVkIGV2ZW50cywgdXNlIHF1ZXJ5U2VsZWN0b3JBbGwgaWYgaXQgZXhpc3RzXG4gICAgICAvLyBidXQgZm9yIG9sZGVyIGJyb3dzZXJzIHdlIG5lZWQgUXdlcnksIFNpenpsZSBvciBzaW1pbGFyXG4gICAgLCBzZWxlY3RvckVuZ2luZVxuICAgICwgc2V0U2VsZWN0b3JFbmdpbmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChzLCByKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIucXVlcnlTZWxlY3RvckFsbChzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JlYW46IE5vIHNlbGVjdG9yIGVuZ2luZSBpbnN0YWxsZWQnKSAvLyBlZWVrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhdHRhY2ggdGhpcyBsaXN0ZW5lciB0byBlYWNoIERPTSBldmVudCB0aGF0IHdlIG5lZWQgdG8gbGlzdGVuIHRvLCBvbmx5IG9uY2VcbiAgICAgIC8vIHBlciBldmVudCB0eXBlIHBlciBET00gZWxlbWVudFxuICAgICwgcm9vdExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCB0eXBlKSB7XG4gICAgICAgIGlmICghVzNDX01PREVMICYmIHR5cGUgJiYgZXZlbnQgJiYgZXZlbnQucHJvcGVydHlOYW1lICE9ICdfb24nICsgdHlwZSkgcmV0dXJuXG5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHJlZ2lzdHJ5LmdldCh0aGlzLCB0eXBlIHx8IGV2ZW50LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgbCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG5cbiAgICAgICAgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnQsIHRoaXMsIHRydWUpXG4gICAgICAgIGlmICh0eXBlKSBldmVudC50eXBlID0gdHlwZVxuXG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgaGFuZGxlcnMgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlLCBjYWxsaW5nIHRoZW0gdW5sZXNzIHRoZXkgaGF2ZVxuICAgICAgICAvLyBiZWVuIHJlbW92ZWQgYnkgYSBwcmV2aW91cyBoYW5kbGVyIG9yIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyBiZWVuIGNhbGxlZFxuICAgICAgICBmb3IgKDsgaSA8IGwgJiYgIWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCk7IGkrKykge1xuICAgICAgICAgIGlmICghbGlzdGVuZXJzW2ldLnJlbW92ZWQpIGxpc3RlbmVyc1tpXS5oYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGFuZCByZW1vdmUgbGlzdGVuZXJzIHRvIERPTSBlbGVtZW50c1xuICAgICwgbGlzdGVuZXIgPSBXM0NfTU9ERUxcbiAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYWRkKSB7XG4gICAgICAgICAgICAvLyBuZXcgYnJvd3NlcnNcbiAgICAgICAgICAgIGVsZW1lbnRbYWRkID8gYWRkRXZlbnQgOiByZW1vdmVFdmVudF0odHlwZSwgcm9vdExpc3RlbmVyLCBmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCwgY3VzdG9tKSB7XG4gICAgICAgICAgICAvLyBJRTggYW5kIGJlbG93LCB1c2UgYXR0YWNoRXZlbnQvZGV0YWNoRXZlbnQgYW5kIHdlIGhhdmUgdG8gcGlnZ3ktYmFjayBwcm9wZXJ0eWNoYW5nZSBldmVudHNcbiAgICAgICAgICAgIC8vIHRvIHNpbXVsYXRlIGV2ZW50IGJ1YmJsaW5nIGV0Yy5cbiAgICAgICAgICAgIHZhciBlbnRyeVxuICAgICAgICAgICAgaWYgKGFkZCkge1xuICAgICAgICAgICAgICByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLCBjdXN0b20gfHwgdHlwZVxuICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKGV2ZW50KSB7IC8vIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgcm9vdExpc3RlbmVyLmNhbGwoZWxlbWVudCwgZXZlbnQsIGN1c3RvbSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAsIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgdHJ1ZSAvLyBpcyByb290XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIGlmIChjdXN0b20gJiYgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPT0gbnVsbCkgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPSAwXG4gICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5hdHRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZW50cnkgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgY3VzdG9tIHx8IHR5cGUsIHJvb3RMaXN0ZW5lciwgdHJ1ZSlbMF1cbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBlbnRyeS5ldmVudFR5cGUsIGVudHJ5LmhhbmRsZXIpXG4gICAgICAgICAgICAgICAgcmVnaXN0cnkuZGVsKGVudHJ5KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgLCBvbmNlID0gZnVuY3Rpb24gKHJtLCBlbGVtZW50LCB0eXBlLCBmbiwgb3JpZ2luYWxGbikge1xuICAgICAgICAvLyB3cmFwIHRoZSBoYW5kbGVyIGluIGEgaGFuZGxlciB0aGF0IGRvZXMgYSByZW1vdmUgYXMgd2VsbFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgICBybShlbGVtZW50LCB0eXBlLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAsIHJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9yZ1R5cGUsIGhhbmRsZXIsIG5hbWVzcGFjZXMpIHtcbiAgICAgICAgdmFyIHR5cGUgICAgID0gb3JnVHlwZSAmJiBvcmdUeXBlLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICAsIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgcmVtb3ZlZCAgPSB7fVxuICAgICAgICAgICwgaSwgbFxuXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoKCFoYW5kbGVyIHx8IGhhbmRsZXJzW2ldLm9yaWdpbmFsID09PSBoYW5kbGVyKSAmJiBoYW5kbGVyc1tpXS5pbk5hbWVzcGFjZXMobmFtZXNwYWNlcykpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgaXMgcHJvYmxlbWF0aWMsIHdlIGhhdmUgYSByZWdpc3RyeS5nZXQoKSBhbmQgcmVnaXN0cnkuZGVsKCkgdGhhdFxuICAgICAgICAgICAgLy8gYm90aCBkbyByZWdpc3RyeSBzZWFyY2hlcyBzbyB3ZSB3YXN0ZSBjeWNsZXMgZG9pbmcgdGhpcy4gTmVlZHMgdG8gYmUgcm9sbGVkIGludG9cbiAgICAgICAgICAgIC8vIGEgc2luZ2xlIHJlZ2lzdHJ5LmZvckFsbChmbikgdGhhdCByZW1vdmVzIHdoaWxlIGZpbmRpbmcsIGJ1dCB0aGUgY2F0Y2ggaXMgdGhhdFxuICAgICAgICAgICAgLy8gd2UnbGwgYmUgc3BsaWNpbmcgdGhlIGFycmF5cyB0aGF0IHdlJ3JlIGl0ZXJhdGluZyBvdmVyLiBOZWVkcyBleHRyYSB0ZXN0cyB0b1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNjcmV3IGl0IHVwLiBAcnZhZ2dcbiAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChoYW5kbGVyc1tpXSlcbiAgICAgICAgICAgIGlmICghcmVtb3ZlZFtoYW5kbGVyc1tpXS5ldmVudFR5cGVdICYmIGhhbmRsZXJzW2ldW2V2ZW50U3VwcG9ydF0pXG4gICAgICAgICAgICAgIHJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSA9IHsgdDogaGFuZGxlcnNbaV0uZXZlbnRUeXBlLCBjOiBoYW5kbGVyc1tpXS50eXBlIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgZWFjaCB0eXBlL2VsZW1lbnQgZm9yIHJlbW92ZWQgbGlzdGVuZXJzIGFuZCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lciB3aGVyZSBpdCdzIG5vIGxvbmdlciBuZWVkZWRcbiAgICAgICAgZm9yIChpIGluIHJlbW92ZWQpIHtcbiAgICAgICAgICBpZiAoIXJlZ2lzdHJ5LmhhcyhlbGVtZW50LCByZW1vdmVkW2ldLnQsIG51bGwsIGZhbHNlKSkge1xuICAgICAgICAgICAgLy8gbGFzdCBsaXN0ZW5lciBvZiB0aGlzIHR5cGUsIHJlbW92ZSB0aGUgcm9vdExpc3RlbmVyXG4gICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50LCByZW1vdmVkW2ldLnQsIGZhbHNlLCByZW1vdmVkW2ldLmMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB1cCBhIGRlbGVnYXRlIGhlbHBlciB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0b3IsIHdyYXAgdGhlIGhhbmRsZXIgZnVuY3Rpb25cbiAgICAsIGRlbGVnYXRlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmbikge1xuICAgICAgICAvL1RPRE86IGZpbmRUYXJnZXQgKHRoZXJlZm9yZSAkKSBpcyBjYWxsZWQgdHdpY2UsIG9uY2UgZm9yIG1hdGNoIGFuZCBvbmNlIGZvclxuICAgICAgICAvLyBzZXR0aW5nIGUuY3VycmVudFRhcmdldCwgZml4IHRoaXMgc28gaXQncyBvbmx5IG5lZWRlZCBvbmNlXG4gICAgICAgIHZhciBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgaSwgYXJyYXkgPSBpc1N0cmluZyhzZWxlY3RvcikgPyBzZWxlY3RvckVuZ2luZShzZWxlY3Rvciwgcm9vdCkgOiBzZWxlY3RvclxuICAgICAgICAgICAgICBmb3IgKDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gcm9vdDsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBhcnJheS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXSA9PT0gdGFyZ2V0KSByZXR1cm4gdGFyZ2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLCBoYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoID0gZmluZFRhcmdldChlLnRhcmdldCwgdGhpcylcbiAgICAgICAgICAgICAgaWYgKG1hdGNoKSBmbi5hcHBseShtYXRjaCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIF9fYmVhbkRlbCBpc24ndCBwbGVhc2FudCBidXQgaXQncyBhIHByaXZhdGUgZnVuY3Rpb24sIG5vdCBleHBvc2VkIG91dHNpZGUgb2YgQmVhblxuICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IHtcbiAgICAgICAgICAgIGZ0ICAgICAgIDogZmluZFRhcmdldCAvLyBhdHRhY2ggaXQgaGVyZSBmb3IgY3VzdG9tRXZlbnRzIHRvIHVzZSB0b29cbiAgICAgICAgICAsIHNlbGVjdG9yIDogc2VsZWN0b3JcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgfVxuXG4gICAgLCBmaXJlTGlzdGVuZXIgPSBXM0NfTU9ERUwgPyBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gbW9kZXJuIGJyb3dzZXJzLCBkbyBhIHByb3BlciBkaXNwYXRjaEV2ZW50KClcbiAgICAgICAgdmFyIGV2dCA9IGRvYy5jcmVhdGVFdmVudChpc05hdGl2ZSA/ICdIVE1MRXZlbnRzJyA6ICdVSUV2ZW50cycpXG4gICAgICAgIGV2dFtpc05hdGl2ZSA/ICdpbml0RXZlbnQnIDogJ2luaXRVSUV2ZW50J10odHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luLCAxKVxuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgICAgfSA6IGZ1bmN0aW9uIChpc05hdGl2ZSwgdHlwZSwgZWxlbWVudCkge1xuICAgICAgICAvLyBvbGQgYnJvd3NlciB1c2Ugb25wcm9wZXJ0eWNoYW5nZSwganVzdCBpbmNyZW1lbnQgYSBjdXN0b20gcHJvcGVydHkgdG8gdHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgICAgZWxlbWVudCA9IHRhcmdldEVsZW1lbnQoZWxlbWVudCwgaXNOYXRpdmUpXG4gICAgICAgIGlzTmF0aXZlID8gZWxlbWVudC5maXJlRXZlbnQoJ29uJyArIHR5cGUsIGRvYy5jcmVhdGVFdmVudE9iamVjdCgpKSA6IGVsZW1lbnRbJ19vbicgKyB0eXBlXSsrXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIFB1YmxpYyBBUEk6IG9mZigpLCBvbigpLCBhZGQoKSwgKHJlbW92ZSgpKSwgb25lKCksIGZpcmUoKSwgY2xvbmUoKVxuICAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAgKiBvZmYoZWxlbWVudFssIGV2ZW50VHlwZShzKVssIGhhbmRsZXIgXV0pXG4gICAgICAgICovXG4gICAgLCBvZmYgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZVNwZWMsIGZuKSB7XG4gICAgICAgIHZhciBpc1R5cGVTdHIgPSBpc1N0cmluZyh0eXBlU3BlYylcbiAgICAgICAgICAsIGssIHR5cGUsIG5hbWVzcGFjZXMsIGlcblxuICAgICAgICBpZiAoaXNUeXBlU3RyICYmIHR5cGVTcGVjLmluZGV4T2YoJyAnKSA+IDApIHtcbiAgICAgICAgICAvLyBvZmYoZWwsICd0MSB0MiB0MycsIGZuKSBvciBvZmYoZWwsICd0MSB0MiB0MycpXG4gICAgICAgICAgdHlwZVNwZWMgPSBzdHIyYXJyKHR5cGVTcGVjKVxuICAgICAgICAgIGZvciAoaSA9IHR5cGVTcGVjLmxlbmd0aDsgaS0tOylcbiAgICAgICAgICAgIG9mZihlbGVtZW50LCB0eXBlU3BlY1tpXSwgZm4pXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGUgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICBpZiAodHlwZSAmJiBjdXN0b21FdmVudHNbdHlwZV0pIHR5cGUgPSBjdXN0b21FdmVudHNbdHlwZV0uYmFzZVxuXG4gICAgICAgIGlmICghdHlwZVNwZWMgfHwgaXNUeXBlU3RyKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsKSBvciBvZmYoZWwsIHQxLm5zKSBvciBvZmYoZWwsIC5ucykgb3Igb2ZmKGVsLCAubnMxLm5zMi5uczMpXG4gICAgICAgICAgaWYgKG5hbWVzcGFjZXMgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKSBuYW1lc3BhY2VzID0gc3RyMmFycihuYW1lc3BhY2VzLCAnLicpXG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZm4sIG5hbWVzcGFjZXMpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0eXBlU3BlYykpIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIGZuKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIG51bGwsIHR5cGVTcGVjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG9mZihlbCwgeyB0MTogZm4xLCB0MiwgZm4yIH0pXG4gICAgICAgICAgZm9yIChrIGluIHR5cGVTcGVjKSB7XG4gICAgICAgICAgICBpZiAodHlwZVNwZWMuaGFzT3duUHJvcGVydHkoaykpIG9mZihlbGVtZW50LCBrLCB0eXBlU3BlY1trXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBvbihlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50cywgc2VsZWN0b3IsIGZuKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbEZuLCB0eXBlLCB0eXBlcywgaSwgYXJncywgZW50cnksIGZpcnN0XG5cbiAgICAgICAgLy9UT0RPOiB0aGUgdW5kZWZpbmVkIGNoZWNrIG1lYW5zIHlvdSBjYW4ndCBwYXNzIGFuICdhcmdzJyBhcmd1bWVudCwgZml4IHRoaXMgcGVyaGFwcz9cbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIGV2ZW50cyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBjYW4ndCBoYW5kbGUgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIGZvciAodHlwZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgICAgICAgICAgb24uY2FsbCh0aGlzLCBlbGVtZW50LCB0eXBlLCBldmVudHNbdHlwZV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgICAgIC8vIGRlbGVnYXRlZCBldmVudFxuICAgICAgICAgIG9yaWdpbmFsRm4gPSBmblxuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgNClcbiAgICAgICAgICBmbiAgICAgICAgID0gZGVsZWdhdGUoc2VsZWN0b3IsIG9yaWdpbmFsRm4sIHNlbGVjdG9yRW5naW5lKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMylcbiAgICAgICAgICBmbiAgICAgICAgID0gb3JpZ2luYWxGbiA9IHNlbGVjdG9yXG4gICAgICAgIH1cblxuICAgICAgICB0eXBlcyA9IHN0cjJhcnIoZXZlbnRzKVxuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3Igb25lKCksIHdyYXAgaW4gYSBzZWxmLXJlbW92aW5nIGhhbmRsZXJcbiAgICAgICAgaWYgKHRoaXMgPT09IE9ORSkge1xuICAgICAgICAgIGZuID0gb25jZShvZmYsIGVsZW1lbnQsIGV2ZW50cywgZm4sIG9yaWdpbmFsRm4pXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAvLyBhZGQgbmV3IGhhbmRsZXIgdG8gdGhlIHJlZ2lzdHJ5IGFuZCBjaGVjayBpZiBpdCdzIHRoZSBmaXJzdCBmb3IgdGhpcyBlbGVtZW50L3R5cGVcbiAgICAgICAgICBmaXJzdCA9IHJlZ2lzdHJ5LnB1dChlbnRyeSA9IG5ldyBSZWdFbnRyeShcbiAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLCB0eXBlc1tpXS5yZXBsYWNlKG5hbWVSZWdleCwgJycpIC8vIGV2ZW50IHR5cGVcbiAgICAgICAgICAgICwgZm5cbiAgICAgICAgICAgICwgb3JpZ2luYWxGblxuICAgICAgICAgICAgLCBzdHIyYXJyKHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSwgJy4nKSAvLyBuYW1lc3BhY2VzXG4gICAgICAgICAgICAsIGFyZ3NcbiAgICAgICAgICAgICwgZmFsc2UgLy8gbm90IHJvb3RcbiAgICAgICAgICApKVxuICAgICAgICAgIGlmIChlbnRyeVtldmVudFN1cHBvcnRdICYmIGZpcnN0KSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBldmVudCBvZiB0aGlzIHR5cGUgb24gdGhpcyBlbGVtZW50LCBhZGQgcm9vdCBsaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgZW50cnkuZXZlbnRUeXBlLCB0cnVlLCBlbnRyeS5jdXN0b21UeXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGFkZChlbGVtZW50Wywgc2VsZWN0b3JdLCBldmVudFR5cGUocyksIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBEZXByZWNhdGVkOiBrZXB0IChmb3Igbm93KSBmb3IgYmFja3dhcmQtY29tcGF0aWJpbGl0eVxuICAgICAgICAqL1xuICAgICwgYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50cywgZm4sIGRlbGZuKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAsICFpc1N0cmluZyhmbilcbiAgICAgICAgICAgICAgPyBzbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgOiBbIGVsZW1lbnQsIGZuLCBldmVudHMsIGRlbGZuIF0uY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDUpIDogW10pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb25lKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIHNlbGVjdG9yXSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKi9cbiAgICAsIG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG9uLmFwcGx5KE9ORSwgYXJndW1lbnRzKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBmaXJlKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIGFyZ3MgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRoZSBvcHRpb25hbCAnYXJncycgYXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheSwgaWYgbm8gJ2FyZ3MnIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgICAgICogdGhlbiB3ZSBjYW4gdXNlIHRoZSBicm93c2VyJ3MgRE9NIGV2ZW50IHN5c3RlbSwgb3RoZXJ3aXNlIHdlIHRyaWdnZXIgaGFuZGxlcnMgbWFudWFsbHlcbiAgICAgICAgKi9cbiAgICAsIGZpcmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYXJncykge1xuICAgICAgICB2YXIgdHlwZXMgPSBzdHIyYXJyKHR5cGUpXG4gICAgICAgICAgLCBpLCBqLCBsLCBuYW1lcywgaGFuZGxlcnNcblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICB0eXBlID0gdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICAgIGlmIChuYW1lcyA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXMgPSBzdHIyYXJyKG5hbWVzLCAnLicpXG4gICAgICAgICAgaWYgKCFuYW1lcyAmJiAhYXJncyAmJiBlbGVtZW50W2V2ZW50U3VwcG9ydF0pIHtcbiAgICAgICAgICAgIGZpcmVMaXN0ZW5lcihuYXRpdmVFdmVudHNbdHlwZV0sIHR5cGUsIGVsZW1lbnQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vbi1uYXRpdmUgZXZlbnQsIGVpdGhlciBiZWNhdXNlIG9mIGEgbmFtZXNwYWNlLCBhcmd1bWVudHMgb3IgYSBub24gRE9NIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBhbGwgbGlzdGVuZXJzIGFuZCBtYW51YWxseSAnZmlyZSdcbiAgICAgICAgICAgIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgYXJncyA9IFtmYWxzZV0uY29uY2F0KGFyZ3MpXG4gICAgICAgICAgICBmb3IgKGogPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChoYW5kbGVyc1tqXS5pbk5hbWVzcGFjZXMobmFtZXMpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnNbal0uaGFuZGxlci5hcHBseShlbGVtZW50LCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGNsb25lKGRzdEVsZW1lbnQsIHNyY0VsZW1lbnRbLCBldmVudFR5cGUgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRPRE86IHBlcmhhcHMgZm9yIGNvbnNpc3RlbmN5IHdlIHNob3VsZCBhbGxvdyB0aGUgc2FtZSBmbGV4aWJpbGl0eSBpbiB0eXBlIHNwZWNpZmllcnM/XG4gICAgICAgICovXG4gICAgLCBjbG9uZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBmcm9tLCB0eXBlKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChmcm9tLCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBoYW5kbGVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG4gICAgICAgICAgLCBhcmdzLCBiZWFuRGVsXG5cbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0ub3JpZ2luYWwpIHtcbiAgICAgICAgICAgIGFyZ3MgPSBbIGVsZW1lbnQsIGhhbmRsZXJzW2ldLnR5cGUgXVxuICAgICAgICAgICAgaWYgKGJlYW5EZWwgPSBoYW5kbGVyc1tpXS5oYW5kbGVyLl9fYmVhbkRlbCkgYXJncy5wdXNoKGJlYW5EZWwuc2VsZWN0b3IpXG4gICAgICAgICAgICBhcmdzLnB1c2goaGFuZGxlcnNbaV0ub3JpZ2luYWwpXG4gICAgICAgICAgICBvbi5hcHBseShudWxsLCBhcmdzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgLCBiZWFuID0ge1xuICAgICAgICAgIG9uICAgICAgICAgICAgICAgIDogb25cbiAgICAgICAgLCBhZGQgICAgICAgICAgICAgICA6IGFkZFxuICAgICAgICAsIG9uZSAgICAgICAgICAgICAgIDogb25lXG4gICAgICAgICwgb2ZmICAgICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCByZW1vdmUgICAgICAgICAgICA6IG9mZlxuICAgICAgICAsIGNsb25lICAgICAgICAgICAgIDogY2xvbmVcbiAgICAgICAgLCBmaXJlICAgICAgICAgICAgICA6IGZpcmVcbiAgICAgICAgLCBFdmVudCAgICAgICAgICAgICA6IEV2ZW50XG4gICAgICAgICwgc2V0U2VsZWN0b3JFbmdpbmUgOiBzZXRTZWxlY3RvckVuZ2luZVxuICAgICAgICAsIG5vQ29uZmxpY3QgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29udGV4dFtuYW1lXSA9IG9sZFxuICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgLy8gZm9yIElFLCBjbGVhbiB1cCBvbiB1bmxvYWQgdG8gYXZvaWQgbGVha3NcbiAgaWYgKHdpbi5hdHRhY2hFdmVudCkge1xuICAgIHZhciBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGksIGVudHJpZXMgPSByZWdpc3RyeS5lbnRyaWVzKClcbiAgICAgIGZvciAoaSBpbiBlbnRyaWVzKSB7XG4gICAgICAgIGlmIChlbnRyaWVzW2ldLnR5cGUgJiYgZW50cmllc1tpXS50eXBlICE9PSAndW5sb2FkJykgb2ZmKGVudHJpZXNbaV0uZWxlbWVudCwgZW50cmllc1tpXS50eXBlKVxuICAgICAgfVxuICAgICAgd2luLmRldGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gICAgICB3aW4uQ29sbGVjdEdhcmJhZ2UgJiYgd2luLkNvbGxlY3RHYXJiYWdlKClcbiAgICB9XG4gICAgd2luLmF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gIH1cblxuICAvLyBpbml0aWFsaXplIHNlbGVjdG9yIGVuZ2luZSB0byBpbnRlcm5hbCBkZWZhdWx0IChxU0Egb3IgdGhyb3cgRXJyb3IpXG4gIHNldFNlbGVjdG9yRW5naW5lKClcblxuICByZXR1cm4gYmVhblxufSk7IiwiLyohXG4gICogQm9uem86IERPTSBVdGlsaXR5IChjKSBEdXN0aW4gRGlheiAyMDEyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2RlZC9ib256b1xuICAqIExpY2Vuc2UgTUlUXG4gICovXG4oZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQsIGRlZmluaXRpb24pIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoZGVmaW5pdGlvbilcbiAgZWxzZSBjb250ZXh0W25hbWVdID0gZGVmaW5pdGlvbigpXG59KSgnYm9uem8nLCB0aGlzLCBmdW5jdGlvbigpIHtcbiAgdmFyIHdpbiA9IHdpbmRvd1xuICAgICwgZG9jID0gd2luLmRvY3VtZW50XG4gICAgLCBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudFxuICAgICwgcGFyZW50Tm9kZSA9ICdwYXJlbnROb2RlJ1xuICAgICwgc3BlY2lhbEF0dHJpYnV0ZXMgPSAvXihjaGVja2VkfHZhbHVlfHNlbGVjdGVkfGRpc2FibGVkKSQvaVxuICAgICAgLy8gdGFncyB0aGF0IHdlIGhhdmUgdHJvdWJsZSBpbnNlcnRpbmcgKmludG8qXG4gICAgLCBzcGVjaWFsVGFncyA9IC9eKHNlbGVjdHxmaWVsZHNldHx0YWJsZXx0Ym9keXx0Zm9vdHx0ZHx0cnxjb2xncm91cCkkL2lcbiAgICAsIHNpbXBsZVNjcmlwdFRhZ1JlID0gL1xccyo8c2NyaXB0ICtzcmM9WydcIl0oW14nXCJdKylbJ1wiXT4vXG4gICAgLCB0YWJsZSA9IFsnPHRhYmxlPicsICc8L3RhYmxlPicsIDFdXG4gICAgLCB0ZCA9IFsnPHRhYmxlPjx0Ym9keT48dHI+JywgJzwvdHI+PC90Ym9keT48L3RhYmxlPicsIDNdXG4gICAgLCBvcHRpb24gPSBbJzxzZWxlY3Q+JywgJzwvc2VsZWN0PicsIDFdXG4gICAgLCBub3Njb3BlID0gWydfJywgJycsIDAsIDFdXG4gICAgLCB0YWdNYXAgPSB7IC8vIHRhZ3MgdGhhdCB3ZSBoYXZlIHRyb3VibGUgKmluc2VydGluZypcbiAgICAgICAgICB0aGVhZDogdGFibGUsIHRib2R5OiB0YWJsZSwgdGZvb3Q6IHRhYmxlLCBjb2xncm91cDogdGFibGUsIGNhcHRpb246IHRhYmxlXG4gICAgICAgICwgdHI6IFsnPHRhYmxlPjx0Ym9keT4nLCAnPC90Ym9keT48L3RhYmxlPicsIDJdXG4gICAgICAgICwgdGg6IHRkICwgdGQ6IHRkXG4gICAgICAgICwgY29sOiBbJzx0YWJsZT48Y29sZ3JvdXA+JywgJzwvY29sZ3JvdXA+PC90YWJsZT4nLCAyXVxuICAgICAgICAsIGZpZWxkc2V0OiBbJzxmb3JtPicsICc8L2Zvcm0+JywgMV1cbiAgICAgICAgLCBsZWdlbmQ6IFsnPGZvcm0+PGZpZWxkc2V0PicsICc8L2ZpZWxkc2V0PjwvZm9ybT4nLCAyXVxuICAgICAgICAsIG9wdGlvbjogb3B0aW9uLCBvcHRncm91cDogb3B0aW9uXG4gICAgICAgICwgc2NyaXB0OiBub3Njb3BlLCBzdHlsZTogbm9zY29wZSwgbGluazogbm9zY29wZSwgcGFyYW06IG5vc2NvcGUsIGJhc2U6IG5vc2NvcGVcbiAgICAgIH1cbiAgICAsIHN0YXRlQXR0cmlidXRlcyA9IC9eKGNoZWNrZWR8c2VsZWN0ZWR8ZGlzYWJsZWQpJC9cbiAgICAsIGllID0gL21zaWUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgLCBoYXNDbGFzcywgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzXG4gICAgLCB1aWRNYXAgPSB7fVxuICAgICwgdXVpZHMgPSAwXG4gICAgLCBkaWdpdCA9IC9eLT9bXFxkXFwuXSskL1xuICAgICwgZGF0dHIgPSAvXmRhdGEtKC4rKSQvXG4gICAgLCBweCA9ICdweCdcbiAgICAsIHNldEF0dHJpYnV0ZSA9ICdzZXRBdHRyaWJ1dGUnXG4gICAgLCBnZXRBdHRyaWJ1dGUgPSAnZ2V0QXR0cmlidXRlJ1xuICAgICwgYnlUYWcgPSAnZ2V0RWxlbWVudHNCeVRhZ05hbWUnXG4gICAgLCBmZWF0dXJlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgZS5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiN4XCI+eDwvYT48dGFibGUgc3R5bGU9XCJmbG9hdDpsZWZ0O1wiPjwvdGFibGU+J1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWZFeHRlbmRlZDogZVtieVRhZ10oJ2EnKVswXVtnZXRBdHRyaWJ1dGVdKCdocmVmJykgIT0gJyN4JyAvLyBJRSA8IDhcbiAgICAgICAgLCBhdXRvVGJvZHk6IGVbYnlUYWddKCd0Ym9keScpLmxlbmd0aCAhPT0gMCAvLyBJRSA8IDhcbiAgICAgICAgLCBjb21wdXRlZFN0eWxlOiBkb2MuZGVmYXVsdFZpZXcgJiYgZG9jLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcbiAgICAgICAgLCBjc3NGbG9hdDogZVtieVRhZ10oJ3RhYmxlJylbMF0uc3R5bGUuc3R5bGVGbG9hdCA/ICdzdHlsZUZsb2F0JyA6ICdjc3NGbG9hdCdcbiAgICAgICAgLCB0cmFuc2Zvcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IFsndHJhbnNmb3JtJywgJ3dlYmtpdFRyYW5zZm9ybScsICdNb3pUcmFuc2Zvcm0nLCAnT1RyYW5zZm9ybScsICdtc1RyYW5zZm9ybSddLCBpXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHByb3BzW2ldIGluIGUuc3R5bGUpIHJldHVybiBwcm9wc1tpXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0oKVxuICAgICAgICAsIGNsYXNzTGlzdDogJ2NsYXNzTGlzdCcgaW4gZVxuICAgICAgICAsIG9wYXNpdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZG9jLmNyZWF0ZUVsZW1lbnQoJ2EnKS5zdHlsZS5vcGFjaXR5ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgIH0oKVxuICAgICAgICB9XG4gICAgICB9KClcbiAgICAsIHRyaW1SZXBsYWNlID0gLyheXFxzKnxcXHMqJCkvZ1xuICAgICwgd2hpdGVzcGFjZVJlZ2V4ID0gL1xccysvXG4gICAgLCB0b1N0cmluZyA9IFN0cmluZy5wcm90b3R5cGUudG9TdHJpbmdcbiAgICAsIHVuaXRsZXNzID0geyBsaW5lSGVpZ2h0OiAxLCB6b29tOiAxLCB6SW5kZXg6IDEsIG9wYWNpdHk6IDEsIGJveEZsZXg6IDEsIFdlYmtpdEJveEZsZXg6IDEsIE1vekJveEZsZXg6IDEgfVxuICAgICwgcXVlcnkgPSBkb2MucXVlcnlTZWxlY3RvckFsbCAmJiBmdW5jdGlvbiAoc2VsZWN0b3IpIHsgcmV0dXJuIGRvYy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSB9XG4gICAgLCB0cmltID0gU3RyaW5nLnByb3RvdHlwZS50cmltID9cbiAgICAgICAgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICByZXR1cm4gcy50cmltKClcbiAgICAgICAgfSA6XG4gICAgICAgIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSh0cmltUmVwbGFjZSwgJycpXG4gICAgICAgIH1cblxuICAgICwgZ2V0U3R5bGUgPSBmZWF0dXJlcy5jb21wdXRlZFN0eWxlXG4gICAgICAgID8gZnVuY3Rpb24gKGVsLCBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gbnVsbFxuICAgICAgICAgICAgICAsIGNvbXB1dGVkID0gZG9jLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWwsICcnKVxuICAgICAgICAgICAgY29tcHV0ZWQgJiYgKHZhbHVlID0gY29tcHV0ZWRbcHJvcGVydHldKVxuICAgICAgICAgICAgcmV0dXJuIGVsLnN0eWxlW3Byb3BlcnR5XSB8fCB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgOiAhKGllICYmIGh0bWwuY3VycmVudFN0eWxlKVxuICAgICAgICAgID8gZnVuY3Rpb24gKGVsLCBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICByZXR1cm4gZWwuc3R5bGVbcHJvcGVydHldXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOlxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlcbiAgICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVtYmVyfVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGZ1bmN0aW9uIChlbCwgcHJvcGVydHkpIHtcbiAgICAgICAgICAgIHZhciB2YWwsIHZhbHVlXG4gICAgICAgICAgICBpZiAocHJvcGVydHkgPT0gJ29wYWNpdHknICYmICFmZWF0dXJlcy5vcGFzaXR5KSB7XG4gICAgICAgICAgICAgIHZhbCA9IDEwMFxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhbCA9IGVsWydmaWx0ZXJzJ11bJ0RYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhJ10ub3BhY2l0eVxuICAgICAgICAgICAgICB9IGNhdGNoIChlMSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICB2YWwgPSBlbFsnZmlsdGVycyddKCdhbHBoYScpLm9wYWNpdHlcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlMikge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdmFsIC8gMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IGVsLmN1cnJlbnRTdHlsZSA/IGVsLmN1cnJlbnRTdHlsZVtwcm9wZXJ0eV0gOiBudWxsXG4gICAgICAgICAgICByZXR1cm4gZWwuc3R5bGVbcHJvcGVydHldIHx8IHZhbHVlXG4gICAgICAgICAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlTmFtZSAmJiAobm9kZS5ub2RlVHlwZSA9PSAxIHx8IG5vZGUubm9kZVR5cGUgPT0gMTEpXG4gIH1cblxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZShub2RlLCBob3N0LCBjbG9uZSkge1xuICAgIHZhciBpLCBsLCByZXRcbiAgICBpZiAodHlwZW9mIG5vZGUgPT0gJ3N0cmluZycpIHJldHVybiBib256by5jcmVhdGUobm9kZSlcbiAgICBpZiAoaXNOb2RlKG5vZGUpKSBub2RlID0gWyBub2RlIF1cbiAgICBpZiAoY2xvbmUpIHtcbiAgICAgIHJldCA9IFtdIC8vIGRvbid0IGNoYW5nZSBvcmlnaW5hbCBhcnJheVxuICAgICAgZm9yIChpID0gMCwgbCA9IG5vZGUubGVuZ3RoOyBpIDwgbDsgaSsrKSByZXRbaV0gPSBjbG9uZU5vZGUoaG9zdCwgbm9kZVtpXSlcbiAgICAgIHJldHVybiByZXRcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYyBhIGNsYXNzIG5hbWUgdG8gdGVzdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gY2xhc3NSZWcoYykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoXnxcXFxccyspJyArIGMgKyAnKFxcXFxzK3wkKScpXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0JvbnpvfEFycmF5fSBhclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCwgbnVtYmVyLCAoQm9uem98QXJyYXkpKX0gZm5cbiAgICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfc2NvcGVcbiAgICogQHBhcmFtIHtib29sZWFuPX0gb3B0X3JldlxuICAgKiBAcmV0dXJuIHtCb256b3xBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uIGVhY2goYXIsIGZuLCBvcHRfc2NvcGUsIG9wdF9yZXYpIHtcbiAgICB2YXIgaW5kLCBpID0gMCwgbCA9IGFyLmxlbmd0aFxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpbmQgPSBvcHRfcmV2ID8gYXIubGVuZ3RoIC0gaSAtIDEgOiBpXG4gICAgICBmbi5jYWxsKG9wdF9zY29wZSB8fCBhcltpbmRdLCBhcltpbmRdLCBpbmQsIGFyKVxuICAgIH1cbiAgICByZXR1cm4gYXJcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Qm9uem98QXJyYXl9IGFyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LCBudW1iZXIsIChCb256b3xBcnJheSkpfSBmblxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9zY29wZVxuICAgKiBAcmV0dXJuIHtCb256b3xBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uIGRlZXBFYWNoKGFyLCBmbiwgb3B0X3Njb3BlKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChpc05vZGUoYXJbaV0pKSB7XG4gICAgICAgIGRlZXBFYWNoKGFyW2ldLmNoaWxkTm9kZXMsIGZuLCBvcHRfc2NvcGUpXG4gICAgICAgIGZuLmNhbGwob3B0X3Njb3BlIHx8IGFyW2ldLCBhcltpXSwgaSwgYXIpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhclxuICB9XG5cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gY2FtZWxpemUocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoLy0oLikvZywgZnVuY3Rpb24gKG0sIG0xKSB7XG4gICAgICByZXR1cm4gbTEudG9VcHBlckNhc2UoKVxuICAgIH0pXG4gIH1cblxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBkZWNhbWVsaXplKHMpIHtcbiAgICByZXR1cm4gcyA/IHMucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKSA6IHNcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGZ1bmN0aW9uIGRhdGEoZWwpIHtcbiAgICBlbFtnZXRBdHRyaWJ1dGVdKCdkYXRhLW5vZGUtdWlkJykgfHwgZWxbc2V0QXR0cmlidXRlXSgnZGF0YS1ub2RlLXVpZCcsICsrdXVpZHMpXG4gICAgdmFyIHVpZCA9IGVsW2dldEF0dHJpYnV0ZV0oJ2RhdGEtbm9kZS11aWQnKVxuICAgIHJldHVybiB1aWRNYXBbdWlkXSB8fCAodWlkTWFwW3VpZF0gPSB7fSlcbiAgfVxuXG5cbiAgLyoqXG4gICAqIHJlbW92ZXMgdGhlIGRhdGEgYXNzb2NpYXRlZCB3aXRoIGFuIGVsZW1lbnRcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYXJEYXRhKGVsKSB7XG4gICAgdmFyIHVpZCA9IGVsW2dldEF0dHJpYnV0ZV0oJ2RhdGEtbm9kZS11aWQnKVxuICAgIGlmICh1aWQpIGRlbGV0ZSB1aWRNYXBbdWlkXVxuICB9XG5cblxuICBmdW5jdGlvbiBkYXRhVmFsdWUoZCkge1xuICAgIHZhciBmXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZCA9PT0gbnVsbCB8fCBkID09PSB1bmRlZmluZWQpID8gdW5kZWZpbmVkIDpcbiAgICAgICAgZCA9PT0gJ3RydWUnID8gdHJ1ZSA6XG4gICAgICAgICAgZCA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDpcbiAgICAgICAgICAgIGQgPT09ICdudWxsJyA/IG51bGwgOlxuICAgICAgICAgICAgICAoZiA9IHBhcnNlRmxvYXQoZCkpID09IGQgPyBmIDogZDtcbiAgICB9IGNhdGNoKGUpIHt9XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cblxuICAvKipcbiAgICogQHBhcmFtIHtCb256b3xBcnJheX0gYXJcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsIG51bWJlciwgKEJvbnpvfEFycmF5KSl9IGZuXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X3Njb3BlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHdoZXRoZXIgYHNvbWVgdGhpbmcgd2FzIGZvdW5kXG4gICAqL1xuICBmdW5jdGlvbiBzb21lKGFyLCBmbiwgb3B0X3Njb3BlKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSBhci5sZW5ndGg7IGkgPCBqOyArK2kpIGlmIChmbi5jYWxsKG9wdF9zY29wZSB8fCBudWxsLCBhcltpXSwgaSwgYXIpKSByZXR1cm4gdHJ1ZVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cblxuICAvKipcbiAgICogdGhpcyBjb3VsZCBiZSBhIGdpYW50IGVudW0gb2YgQ1NTIHByb3BlcnRpZXNcbiAgICogYnV0IGluIGZhdm9yIG9mIGZpbGUgc2l6ZSBzYW5zLWNsb3N1cmUgZGVhZGNvZGUgb3B0aW1pemF0aW9uc1xuICAgKiB3ZSdyZSBqdXN0IGFza2luZyBmb3IgYW55IG9sIHN0cmluZ1xuICAgKiB0aGVuIGl0IGdldHMgdHJhbnNmb3JtZWQgaW50byB0aGUgYXBwcm9wcmlhdGUgc3R5bGUgcHJvcGVydHkgZm9yIEpTIGFjY2Vzc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBzdHlsZVByb3BlcnR5KHApIHtcbiAgICAgIChwID09ICd0cmFuc2Zvcm0nICYmIChwID0gZmVhdHVyZXMudHJhbnNmb3JtKSkgfHxcbiAgICAgICAgKC9edHJhbnNmb3JtLT9bT29dcmlnaW4kLy50ZXN0KHApICYmIChwID0gZmVhdHVyZXMudHJhbnNmb3JtICsgJ09yaWdpbicpKSB8fFxuICAgICAgICAocCA9PSAnZmxvYXQnICYmIChwID0gZmVhdHVyZXMuY3NzRmxvYXQpKVxuICAgICAgcmV0dXJuIHAgPyBjYW1lbGl6ZShwKSA6IG51bGxcbiAgfVxuXG4gIC8vIHRoaXMgaW5zZXJ0IG1ldGhvZCBpcyBpbnRlbnNlXG4gIGZ1bmN0aW9uIGluc2VydCh0YXJnZXQsIGhvc3QsIGZuLCByZXYpIHtcbiAgICB2YXIgaSA9IDAsIHNlbGYgPSBob3N0IHx8IHRoaXMsIHIgPSBbXVxuICAgICAgLy8gdGFyZ2V0IG5vZGVzIGNvdWxkIGJlIGEgY3NzIHNlbGVjdG9yIGlmIGl0J3MgYSBzdHJpbmcgYW5kIGEgc2VsZWN0b3IgZW5naW5lIGlzIHByZXNlbnRcbiAgICAgIC8vIG90aGVyd2lzZSwganVzdCB1c2UgdGFyZ2V0XG4gICAgICAsIG5vZGVzID0gcXVlcnkgJiYgdHlwZW9mIHRhcmdldCA9PSAnc3RyaW5nJyAmJiB0YXJnZXQuY2hhckF0KDApICE9ICc8JyA/IHF1ZXJ5KHRhcmdldCkgOiB0YXJnZXRcbiAgICAvLyBub3JtYWxpemUgZWFjaCBub2RlIGluIGNhc2UgaXQncyBzdGlsbCBhIHN0cmluZyBhbmQgd2UgbmVlZCB0byBjcmVhdGUgbm9kZXMgb24gdGhlIGZseVxuICAgIGVhY2gobm9ybWFsaXplKG5vZGVzKSwgZnVuY3Rpb24gKHQsIGopIHtcbiAgICAgIGVhY2goc2VsZiwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGZuKHQsIHJbaSsrXSA9IGogPiAwID8gY2xvbmVOb2RlKHNlbGYsIGVsKSA6IGVsKVxuICAgICAgfSwgbnVsbCwgcmV2KVxuICAgIH0sIHRoaXMsIHJldilcbiAgICBzZWxmLmxlbmd0aCA9IGlcbiAgICBlYWNoKHIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZWxmWy0taV0gPSBlXG4gICAgfSwgbnVsbCwgIXJldilcbiAgICByZXR1cm4gc2VsZlxuICB9XG5cblxuICAvKipcbiAgICogc2V0cyBhbiBlbGVtZW50IHRvIGFuIGV4cGxpY2l0IHgveSBwb3NpdGlvbiBvbiB0aGUgcGFnZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7P251bWJlcn0geFxuICAgKiBAcGFyYW0gez9udW1iZXJ9IHlcbiAgICovXG4gIGZ1bmN0aW9uIHh5KGVsLCB4LCB5KSB7XG4gICAgdmFyICRlbCA9IGJvbnpvKGVsKVxuICAgICAgLCBzdHlsZSA9ICRlbC5jc3MoJ3Bvc2l0aW9uJylcbiAgICAgICwgb2Zmc2V0ID0gJGVsLm9mZnNldCgpXG4gICAgICAsIHJlbCA9ICdyZWxhdGl2ZSdcbiAgICAgICwgaXNSZWwgPSBzdHlsZSA9PSByZWxcbiAgICAgICwgZGVsdGEgPSBbcGFyc2VJbnQoJGVsLmNzcygnbGVmdCcpLCAxMCksIHBhcnNlSW50KCRlbC5jc3MoJ3RvcCcpLCAxMCldXG5cbiAgICBpZiAoc3R5bGUgPT0gJ3N0YXRpYycpIHtcbiAgICAgICRlbC5jc3MoJ3Bvc2l0aW9uJywgcmVsKVxuICAgICAgc3R5bGUgPSByZWxcbiAgICB9XG5cbiAgICBpc05hTihkZWx0YVswXSkgJiYgKGRlbHRhWzBdID0gaXNSZWwgPyAwIDogZWwub2Zmc2V0TGVmdClcbiAgICBpc05hTihkZWx0YVsxXSkgJiYgKGRlbHRhWzFdID0gaXNSZWwgPyAwIDogZWwub2Zmc2V0VG9wKVxuXG4gICAgeCAhPSBudWxsICYmIChlbC5zdHlsZS5sZWZ0ID0geCAtIG9mZnNldC5sZWZ0ICsgZGVsdGFbMF0gKyBweClcbiAgICB5ICE9IG51bGwgJiYgKGVsLnN0eWxlLnRvcCA9IHkgLSBvZmZzZXQudG9wICsgZGVsdGFbMV0gKyBweClcblxuICB9XG5cbiAgLy8gY2xhc3NMaXN0IHN1cHBvcnQgZm9yIGNsYXNzIG1hbmFnZW1lbnRcbiAgLy8gYWx0aG8gdG8gYmUgZmFpciwgdGhlIGFwaSBzdWNrcyBiZWNhdXNlIGl0IHdvbid0IGFjY2VwdCBtdWx0aXBsZSBjbGFzc2VzIGF0IG9uY2VcbiAgaWYgKGZlYXR1cmVzLmNsYXNzTGlzdCkge1xuICAgIGhhc0NsYXNzID0gZnVuY3Rpb24gKGVsLCBjKSB7XG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGMpXG4gICAgfVxuICAgIGFkZENsYXNzID0gZnVuY3Rpb24gKGVsLCBjKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGMpXG4gICAgfVxuICAgIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsLCBjKSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGMpXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGhhc0NsYXNzID0gZnVuY3Rpb24gKGVsLCBjKSB7XG4gICAgICByZXR1cm4gY2xhc3NSZWcoYykudGVzdChlbC5jbGFzc05hbWUpXG4gICAgfVxuICAgIGFkZENsYXNzID0gZnVuY3Rpb24gKGVsLCBjKSB7XG4gICAgICBlbC5jbGFzc05hbWUgPSB0cmltKGVsLmNsYXNzTmFtZSArICcgJyArIGMpXG4gICAgfVxuICAgIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsLCBjKSB7XG4gICAgICBlbC5jbGFzc05hbWUgPSB0cmltKGVsLmNsYXNzTmFtZS5yZXBsYWNlKGNsYXNzUmVnKGMpLCAnICcpKVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIHRoaXMgYWxsb3dzIG1ldGhvZCBjYWxsaW5nIGZvciBzZXR0aW5nIHZhbHVlc1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBib256byhlbGVtZW50cykuY3NzKCdjb2xvcicsIGZ1bmN0aW9uIChlbCkge1xuICAgKiAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtY29sb3InKVxuICAgKiB9KVxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24gKEVsZW1lbnQpfHN0cmluZ31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gc2V0dGVyKGVsLCB2KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09ICdmdW5jdGlvbicgPyB2KGVsKSA6IHZcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbCh4LCB5LCB0eXBlKSB7XG4gICAgdmFyIGVsID0gdGhpc1swXVxuICAgIGlmICghZWwpIHJldHVybiB0aGlzXG4gICAgaWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwpIHtcbiAgICAgIHJldHVybiAoaXNCb2R5KGVsKSA/IGdldFdpbmRvd1Njcm9sbCgpIDogeyB4OiBlbC5zY3JvbGxMZWZ0LCB5OiBlbC5zY3JvbGxUb3AgfSlbdHlwZV1cbiAgICB9XG4gICAgaWYgKGlzQm9keShlbCkpIHtcbiAgICAgIHdpbi5zY3JvbGxUbyh4LCB5KVxuICAgIH0gZWxzZSB7XG4gICAgICB4ICE9IG51bGwgJiYgKGVsLnNjcm9sbExlZnQgPSB4KVxuICAgICAgeSAhPSBudWxsICYmIChlbC5zY3JvbGxUb3AgPSB5KVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0FycmF5LjxFbGVtZW50PnxFbGVtZW50fE5vZGV8c3RyaW5nfSBlbGVtZW50c1xuICAgKi9cbiAgZnVuY3Rpb24gQm9uem8oZWxlbWVudHMpIHtcbiAgICB0aGlzLmxlbmd0aCA9IDBcbiAgICBpZiAoZWxlbWVudHMpIHtcbiAgICAgIGVsZW1lbnRzID0gdHlwZW9mIGVsZW1lbnRzICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAhZWxlbWVudHMubm9kZVR5cGUgJiZcbiAgICAgICAgdHlwZW9mIGVsZW1lbnRzLmxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICAgIGVsZW1lbnRzIDpcbiAgICAgICAgICBbZWxlbWVudHNdXG4gICAgICB0aGlzLmxlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykgdGhpc1tpXSA9IGVsZW1lbnRzW2ldXG4gICAgfVxuICB9XG5cbiAgQm9uem8ucHJvdG90eXBlID0ge1xuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgICAgICogQHJldHVybiB7RWxlbWVudHxOb2RlfVxuICAgICAgICovXG4gICAgICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpc1tpbmRleF0gfHwgbnVsbFxuICAgICAgfVxuXG4gICAgICAvLyBpdGV0YXRvcnNcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbihFbGVtZW50fE5vZGUpfSBmblxuICAgICAgICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfc2NvcGVcbiAgICAgICAqIEByZXR1cm4ge0JvbnpvfVxuICAgICAgICovXG4gICAgLCBlYWNoOiBmdW5jdGlvbiAoZm4sIG9wdF9zY29wZSkge1xuICAgICAgICByZXR1cm4gZWFjaCh0aGlzLCBmbiwgb3B0X3Njb3BlKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9zY29wZVxuICAgICAgICogQHJldHVybiB7Qm9uem99XG4gICAgICAgKi9cbiAgICAsIGRlZXBFYWNoOiBmdW5jdGlvbiAoZm4sIG9wdF9zY29wZSkge1xuICAgICAgICByZXR1cm4gZGVlcEVhY2godGhpcywgZm4sIG9wdF9zY29wZSlcbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9uPX0gb3B0X3JlamVjdFxuICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgKi9cbiAgICAsIG1hcDogZnVuY3Rpb24gKGZuLCBvcHRfcmVqZWN0KSB7XG4gICAgICAgIHZhciBtID0gW10sIG4sIGlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBuID0gZm4uY2FsbCh0aGlzLCB0aGlzW2ldLCBpKVxuICAgICAgICAgIG9wdF9yZWplY3QgPyAob3B0X3JlamVjdChuKSAmJiBtLnB1c2gobikpIDogbS5wdXNoKG4pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1cbiAgICAgIH1cblxuICAgIC8vIHRleHQgYW5kIGh0bWwgaW5zZXJ0ZXJzIVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGggdGhlIEhUTUwgdG8gaW5zZXJ0XG4gICAgICogQHBhcmFtIHtib29sZWFuPX0gb3B0X3RleHQgd2hldGhlciB0byBzZXQgb3IgZ2V0IHRleHQgY29udGVudFxuICAgICAqIEByZXR1cm4ge0JvbnpvfHN0cmluZ31cbiAgICAgKi9cbiAgICAsIGh0bWw6IGZ1bmN0aW9uIChoLCBvcHRfdGV4dCkge1xuICAgICAgICB2YXIgbWV0aG9kID0gb3B0X3RleHRcbiAgICAgICAgICAgICAgPyBodG1sLnRleHRDb250ZW50ID09PSB1bmRlZmluZWQgPyAnaW5uZXJUZXh0JyA6ICd0ZXh0Q29udGVudCdcbiAgICAgICAgICAgICAgOiAnaW5uZXJIVE1MJ1xuICAgICAgICAgICwgdGhhdCA9IHRoaXNcbiAgICAgICAgICAsIGFwcGVuZCA9IGZ1bmN0aW9uIChlbCwgaSkge1xuICAgICAgICAgICAgICBlYWNoKG5vcm1hbGl6ZShoLCB0aGF0LCBpKSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChub2RlKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICwgdXBkYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChlbCwgaSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRfdGV4dCB8fCAodHlwZW9mIGggPT0gJ3N0cmluZycgJiYgIXNwZWNpYWxUYWdzLnRlc3QoZWwudGFnTmFtZSkpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZWxbbWV0aG9kXSA9IGhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICAgIGFwcGVuZChlbCwgaSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBoICE9ICd1bmRlZmluZWQnXG4gICAgICAgICAgPyB0aGlzLmVtcHR5KCkuZWFjaCh1cGRhdGVFbGVtZW50KVxuICAgICAgICAgIDogdGhpc1swXSA/IHRoaXNbMF1bbWV0aG9kXSA6ICcnXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfdGV4dCB0aGUgdGV4dCB0byBzZXQsIG90aGVyd2lzZSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgICAgKiBAcmV0dXJuIHtCb256b3xzdHJpbmd9XG4gICAgICAgKi9cbiAgICAsIHRleHQ6IGZ1bmN0aW9uIChvcHRfdGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sKG9wdF90ZXh0LCB0cnVlKVxuICAgICAgfVxuXG4gICAgICAvLyBtb3JlIHJlbGF0ZWQgaW5zZXJ0aW9uIG1ldGhvZHNcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge0JvbnpvfHN0cmluZ3xFbGVtZW50fEFycmF5fSBub2RlXG4gICAgICAgKiBAcmV0dXJuIHtCb256b31cbiAgICAgICAqL1xuICAgICwgYXBwZW5kOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICAgICAgICBlYWNoKG5vcm1hbGl6ZShub2RlLCB0aGF0LCBpKSwgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7Qm9uem98c3RyaW5nfEVsZW1lbnR8QXJyYXl9IG5vZGVcbiAgICAgICAqIEByZXR1cm4ge0JvbnpvfVxuICAgICAgICovXG4gICAgLCBwcmVwZW5kOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICAgICAgICB2YXIgZmlyc3QgPSBlbC5maXJzdENoaWxkXG4gICAgICAgICAgZWFjaChub3JtYWxpemUobm9kZSwgdGhhdCwgaSksIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICBlbC5pbnNlcnRCZWZvcmUoaSwgZmlyc3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7Qm9uem98c3RyaW5nfEVsZW1lbnR8QXJyYXl9IHRhcmdldCB0aGUgbG9jYXRpb24gZm9yIHdoaWNoIHlvdSdsbCBpbnNlcnQgeW91ciBuZXcgY29udGVudFxuICAgICAgICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfaG9zdCBhbiBvcHRpb25hbCBob3N0IHNjb3BlIChwcmltYXJpbHkgdXNlZCB3aGVuIGludGVncmF0ZWQgd2l0aCBFbmRlcilcbiAgICAgICAqIEByZXR1cm4ge0JvbnpvfVxuICAgICAgICovXG4gICAgLCBhcHBlbmRUbzogZnVuY3Rpb24gKHRhcmdldCwgb3B0X2hvc3QpIHtcbiAgICAgICAgcmV0dXJuIGluc2VydC5jYWxsKHRoaXMsIHRhcmdldCwgb3B0X2hvc3QsIGZ1bmN0aW9uICh0LCBlbCkge1xuICAgICAgICAgIHQuYXBwZW5kQ2hpbGQoZWwpXG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge0JvbnpvfHN0cmluZ3xFbGVtZW50fEFycmF5fSB0YXJnZXQgdGhlIGxvY2F0aW9uIGZvciB3aGljaCB5b3UnbGwgaW5zZXJ0IHlvdXIgbmV3IGNvbnRlbnRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X2hvc3QgYW4gb3B0aW9uYWwgaG9zdCBzY29wZSAocHJpbWFyaWx5IHVzZWQgd2hlbiBpbnRlZ3JhdGVkIHdpdGggRW5kZXIpXG4gICAgICAgKiBAcmV0dXJuIHtCb256b31cbiAgICAgICAqL1xuICAgICwgcHJlcGVuZFRvOiBmdW5jdGlvbiAodGFyZ2V0LCBvcHRfaG9zdCkge1xuICAgICAgICByZXR1cm4gaW5zZXJ0LmNhbGwodGhpcywgdGFyZ2V0LCBvcHRfaG9zdCwgZnVuY3Rpb24gKHQsIGVsKSB7XG4gICAgICAgICAgdC5pbnNlcnRCZWZvcmUoZWwsIHQuZmlyc3RDaGlsZClcbiAgICAgICAgfSwgMSlcbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7Qm9uem98c3RyaW5nfEVsZW1lbnR8QXJyYXl9IG5vZGVcbiAgICAgICAqIEByZXR1cm4ge0JvbnpvfVxuICAgICAgICovXG4gICAgLCBiZWZvcmU6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xuICAgICAgICAgIGVhY2gobm9ybWFsaXplKG5vZGUsIHRoYXQsIGkpLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgZWxbcGFyZW50Tm9kZV0uaW5zZXJ0QmVmb3JlKGksIGVsKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge0JvbnpvfHN0cmluZ3xFbGVtZW50fEFycmF5fSBub2RlXG4gICAgICAgKiBAcmV0dXJuIHtCb256b31cbiAgICAgICAqL1xuICAgICwgYWZ0ZXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xuICAgICAgICAgIGVhY2gobm9ybWFsaXplKG5vZGUsIHRoYXQsIGkpLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgZWxbcGFyZW50Tm9kZV0uaW5zZXJ0QmVmb3JlKGksIGVsLm5leHRTaWJsaW5nKVxuICAgICAgICAgIH0sIG51bGwsIDEpXG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge0JvbnpvfHN0cmluZ3xFbGVtZW50fEFycmF5fSB0YXJnZXQgdGhlIGxvY2F0aW9uIGZvciB3aGljaCB5b3UnbGwgaW5zZXJ0IHlvdXIgbmV3IGNvbnRlbnRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X2hvc3QgYW4gb3B0aW9uYWwgaG9zdCBzY29wZSAocHJpbWFyaWx5IHVzZWQgd2hlbiBpbnRlZ3JhdGVkIHdpdGggRW5kZXIpXG4gICAgICAgKiBAcmV0dXJuIHtCb256b31cbiAgICAgICAqL1xuICAgICwgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiAodGFyZ2V0LCBvcHRfaG9zdCkge1xuICAgICAgICByZXR1cm4gaW5zZXJ0LmNhbGwodGhpcywgdGFyZ2V0LCBvcHRfaG9zdCwgZnVuY3Rpb24gKHQsIGVsKSB7XG4gICAgICAgICAgdFtwYXJlbnROb2RlXS5pbnNlcnRCZWZvcmUoZWwsIHQpXG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge0JvbnpvfHN0cmluZ3xFbGVtZW50fEFycmF5fSB0YXJnZXQgdGhlIGxvY2F0aW9uIGZvciB3aGljaCB5b3UnbGwgaW5zZXJ0IHlvdXIgbmV3IGNvbnRlbnRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X2hvc3QgYW4gb3B0aW9uYWwgaG9zdCBzY29wZSAocHJpbWFyaWx5IHVzZWQgd2hlbiBpbnRlZ3JhdGVkIHdpdGggRW5kZXIpXG4gICAgICAgKiBAcmV0dXJuIHtCb256b31cbiAgICAgICAqL1xuICAgICwgaW5zZXJ0QWZ0ZXI6IGZ1bmN0aW9uICh0YXJnZXQsIG9wdF9ob3N0KSB7XG4gICAgICAgIHJldHVybiBpbnNlcnQuY2FsbCh0aGlzLCB0YXJnZXQsIG9wdF9ob3N0LCBmdW5jdGlvbiAodCwgZWwpIHtcbiAgICAgICAgICB2YXIgc2libGluZyA9IHQubmV4dFNpYmxpbmdcbiAgICAgICAgICBzaWJsaW5nID9cbiAgICAgICAgICAgIHRbcGFyZW50Tm9kZV0uaW5zZXJ0QmVmb3JlKGVsLCBzaWJsaW5nKSA6XG4gICAgICAgICAgICB0W3BhcmVudE5vZGVdLmFwcGVuZENoaWxkKGVsKVxuICAgICAgICB9LCAxKVxuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtCb256b3xzdHJpbmd8RWxlbWVudHxBcnJheX0gbm9kZVxuICAgICAgICogQHJldHVybiB7Qm9uem99XG4gICAgICAgKi9cbiAgICAsIHJlcGxhY2VXaXRoOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBib256byhub3JtYWxpemUobm9kZSkpLmluc2VydEFmdGVyKHRoaXMpXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZSgpXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfaG9zdCBhbiBvcHRpb25hbCBob3N0IHNjb3BlIChwcmltYXJpbHkgdXNlZCB3aGVuIGludGVncmF0ZWQgd2l0aCBFbmRlcilcbiAgICAgICAqIEByZXR1cm4ge0JvbnpvfVxuICAgICAgICovXG4gICAgLCBjbG9uZTogZnVuY3Rpb24gKG9wdF9ob3N0KSB7XG4gICAgICAgIHZhciByZXQgPSBbXSAvLyBkb24ndCBjaGFuZ2Ugb3JpZ2luYWwgYXJyYXlcbiAgICAgICAgICAsIGwsIGlcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSByZXRbaV0gPSBjbG9uZU5vZGUob3B0X2hvc3QgfHwgdGhpcywgdGhpc1tpXSlcbiAgICAgICAgcmV0dXJuIGJvbnpvKHJldClcbiAgICAgIH1cblxuICAgICAgLy8gY2xhc3MgbWFuYWdlbWVudFxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjXG4gICAgICAgKiBAcmV0dXJuIHtCb256b31cbiAgICAgICAqL1xuICAgICwgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGMgPSB0b1N0cmluZy5jYWxsKGMpLnNwbGl0KHdoaXRlc3BhY2VSZWdleClcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAvLyB3ZSBgZWFjaGAgaGVyZSBzbyB5b3UgY2FuIGRvICRlbC5hZGRDbGFzcygnZm9vIGJhcicpXG4gICAgICAgICAgZWFjaChjLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgaWYgKGMgJiYgIWhhc0NsYXNzKGVsLCBzZXR0ZXIoZWwsIGMpKSlcbiAgICAgICAgICAgICAgYWRkQ2xhc3MoZWwsIHNldHRlcihlbCwgYykpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjXG4gICAgICAgKiBAcmV0dXJuIHtCb256b31cbiAgICAgICAqL1xuICAgICwgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGMgPSB0b1N0cmluZy5jYWxsKGMpLnNwbGl0KHdoaXRlc3BhY2VSZWdleClcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlYWNoKGMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBpZiAoYyAmJiBoYXNDbGFzcyhlbCwgc2V0dGVyKGVsLCBjKSkpXG4gICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsLCBzZXR0ZXIoZWwsIGMpKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY1xuICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgICAqL1xuICAgICwgaGFzQ2xhc3M6IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGMgPSB0b1N0cmluZy5jYWxsKGMpLnNwbGl0KHdoaXRlc3BhY2VSZWdleClcbiAgICAgICAgcmV0dXJuIHNvbWUodGhpcywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgcmV0dXJuIHNvbWUoYywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBjICYmIGhhc0NsYXNzKGVsLCBjKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYyBjbGFzc25hbWUgdG8gdG9nZ2xlXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfY29uZGl0aW9uIHdoZXRoZXIgdG8gYWRkIG9yIHJlbW92ZSB0aGUgY2xhc3Mgc3RyYWlnaHQgYXdheVxuICAgICAgICogQHJldHVybiB7Qm9uem99XG4gICAgICAgKi9cbiAgICAsIHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiAoYywgb3B0X2NvbmRpdGlvbikge1xuICAgICAgICBjID0gdG9TdHJpbmcuY2FsbChjKS5zcGxpdCh3aGl0ZXNwYWNlUmVnZXgpXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWFjaChjLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgdHlwZW9mIG9wdF9jb25kaXRpb24gIT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgICAgICAgICBvcHRfY29uZGl0aW9uID8gIWhhc0NsYXNzKGVsLCBjKSAmJiBhZGRDbGFzcyhlbCwgYykgOiByZW1vdmVDbGFzcyhlbCwgYykgOlxuICAgICAgICAgICAgICAgIGhhc0NsYXNzKGVsLCBjKSA/IHJlbW92ZUNsYXNzKGVsLCBjKSA6IGFkZENsYXNzKGVsLCBjKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIGRpc3BsYXkgdG9nZ2xlcnNcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdF90eXBlIHVzZWZ1bCB0byBzZXQgYmFjayB0byBhbnl0aGluZyBvdGhlciB0aGFuIGFuIGVtcHR5IHN0cmluZ1xuICAgICAgICogQHJldHVybiB7Qm9uem99XG4gICAgICAgKi9cbiAgICAsIHNob3c6IGZ1bmN0aW9uIChvcHRfdHlwZSkge1xuICAgICAgICBvcHRfdHlwZSA9IHR5cGVvZiBvcHRfdHlwZSA9PSAnc3RyaW5nJyA/IG9wdF90eXBlIDogJydcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gb3B0X3R5cGVcbiAgICAgICAgfSlcbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICAqIEByZXR1cm4ge0JvbnpvfVxuICAgICAgICovXG4gICAgLCBoaWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtGdW5jdGlvbj19IG9wdF9jYWxsYmFja1xuICAgICAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfdHlwZVxuICAgICAgICogQHJldHVybiB7Qm9uem99XG4gICAgICAgKi9cbiAgICAsIHRvZ2dsZTogZnVuY3Rpb24gKG9wdF9jYWxsYmFjaywgb3B0X3R5cGUpIHtcbiAgICAgICAgb3B0X3R5cGUgPSB0eXBlb2Ygb3B0X3R5cGUgPT0gJ3N0cmluZycgPyBvcHRfdHlwZSA6ICcnO1xuICAgICAgICB0eXBlb2Ygb3B0X2NhbGxiYWNrICE9ICdmdW5jdGlvbicgJiYgKG9wdF9jYWxsYmFjayA9IG51bGwpXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IChlbC5vZmZzZXRXaWR0aCB8fCBlbC5vZmZzZXRIZWlnaHQpID8gJ25vbmUnIDogb3B0X3R5cGU7XG4gICAgICAgICAgb3B0X2NhbGxiYWNrICYmIG9wdF9jYWxsYmFjay5jYWxsKGVsKVxuICAgICAgICB9KVxuICAgICAgfVxuXG5cbiAgICAgIC8vIERPTSBXYWxrZXJzICYgZ2V0dGVyc1xuXG4gICAgICAvKipcbiAgICAgICAqIEByZXR1cm4ge0VsZW1lbnR8Tm9kZX1cbiAgICAgICAqL1xuICAgICwgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGJvbnpvKHRoaXMubGVuZ3RoID8gdGhpc1swXSA6IFtdKVxuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgICogQHJldHVybiB7RWxlbWVudHxOb2RlfVxuICAgICAgICovXG4gICAgLCBsYXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBib256byh0aGlzLmxlbmd0aCA/IHRoaXNbdGhpcy5sZW5ndGggLSAxXSA6IFtdKVxuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgICogQHJldHVybiB7RWxlbWVudHxOb2RlfVxuICAgICAgICovXG4gICAgLCBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZWQoJ25leHRTaWJsaW5nJylcbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICAqIEByZXR1cm4ge0VsZW1lbnR8Tm9kZX1cbiAgICAgICAqL1xuICAgICwgcHJldmlvdXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZCgncHJldmlvdXNTaWJsaW5nJylcbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICAqIEByZXR1cm4ge0VsZW1lbnR8Tm9kZX1cbiAgICAgICAqL1xuICAgICwgcGFyZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlZChwYXJlbnROb2RlKVxuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgdGhlIGRpcmVjdGlvbmFsIERPTSBtZXRob2RcbiAgICAgICAqIEByZXR1cm4ge0VsZW1lbnR8Tm9kZX1cbiAgICAgICAqL1xuICAgICwgcmVsYXRlZDogZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICByZXR1cm4gYm9uem8odGhpcy5tYXAoXG4gICAgICAgICAgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBlbCA9IGVsW21ldGhvZF1cbiAgICAgICAgICAgIHdoaWxlIChlbCAmJiBlbC5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICAgICAgICBlbCA9IGVsW21ldGhvZF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbCB8fCAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBlbFxuICAgICAgICAgIH1cbiAgICAgICAgKSlcbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICAqIEByZXR1cm4ge0JvbnpvfVxuICAgICAgICovXG4gICAgLCBmb2N1czogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxlbmd0aCAmJiB0aGlzWzBdLmZvY3VzKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICAqIEByZXR1cm4ge0JvbnpvfVxuICAgICAgICovXG4gICAgLCBibHVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoICYmIHRoaXNbMF0uYmx1cigpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9XG5cbiAgICAgIC8vIHN0eWxlIGdldHRlciBzZXR0ZXIgJiByZWxhdGVkIG1ldGhvZHNcblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IG9cbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0X3ZcbiAgICAgICAqIEByZXR1cm4ge0JvbnpvfHN0cmluZ31cbiAgICAgICAqL1xuICAgICwgY3NzOiBmdW5jdGlvbiAobywgb3B0X3YpIHtcbiAgICAgICAgdmFyIHAsIGl0ZXIgPSBvXG4gICAgICAgIC8vIGlzIHRoaXMgYSByZXF1ZXN0IGZvciBqdXN0IGdldHRpbmcgYSBzdHlsZT9cbiAgICAgICAgaWYgKG9wdF92ID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG8gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyByZXB1cnBvc2UgJ3YnXG4gICAgICAgICAgb3B0X3YgPSB0aGlzWzBdXG4gICAgICAgICAgaWYgKCFvcHRfdikgcmV0dXJuIG51bGxcbiAgICAgICAgICBpZiAob3B0X3YgPT09IGRvYyB8fCBvcHRfdiA9PT0gd2luKSB7XG4gICAgICAgICAgICBwID0gKG9wdF92ID09PSBkb2MpID8gYm9uem8uZG9jKCkgOiBib256by52aWV3cG9ydCgpXG4gICAgICAgICAgICByZXR1cm4gbyA9PSAnd2lkdGgnID8gcC53aWR0aCA6IG8gPT0gJ2hlaWdodCcgPyBwLmhlaWdodCA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAobyA9IHN0eWxlUHJvcGVydHkobykpID8gZ2V0U3R5bGUob3B0X3YsIG8pIDogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaXRlciA9IHt9XG4gICAgICAgICAgaXRlcltvXSA9IG9wdF92XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZlYXR1cmVzLm9wYXNpdHkgJiYgJ29wYWNpdHknIGluIGl0ZXIpIHtcbiAgICAgICAgICAvLyBvaCB0aGlzICdvbCBnYW11dFxuICAgICAgICAgIGl0ZXIuZmlsdGVyID0gaXRlci5vcGFjaXR5ICE9IG51bGwgJiYgaXRlci5vcGFjaXR5ICE9PSAnJ1xuICAgICAgICAgICAgPyAnYWxwaGEob3BhY2l0eT0nICsgKGl0ZXIub3BhY2l0eSAqIDEwMCkgKyAnKSdcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICAvLyBnaXZlIGl0IGxheW91dFxuICAgICAgICAgIGl0ZXIuem9vbSA9IG8uem9vbSB8fCAxXG4gICAgICAgICAgO2RlbGV0ZSBpdGVyLm9wYWNpdHlcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZuKGVsLCBwLCB2KSB7XG4gICAgICAgICAgZm9yICh2YXIgayBpbiBpdGVyKSB7XG4gICAgICAgICAgICBpZiAoaXRlci5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICB2ID0gaXRlcltrXTtcbiAgICAgICAgICAgICAgLy8gY2hhbmdlIFwiNVwiIHRvIFwiNXB4XCIgLSB1bmxlc3MgeW91J3JlIGxpbmUtaGVpZ2h0LCB3aGljaCBpcyBhbGxvd2VkXG4gICAgICAgICAgICAgIChwID0gc3R5bGVQcm9wZXJ0eShrKSkgJiYgZGlnaXQudGVzdCh2KSAmJiAhKHAgaW4gdW5pdGxlc3MpICYmICh2ICs9IHB4KVxuICAgICAgICAgICAgICB0cnkgeyBlbC5zdHlsZVtwXSA9IHNldHRlcihlbCwgdikgfSBjYXRjaChlKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZuKVxuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBvcHRfeFxuICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBvcHRfeVxuICAgICAgICogQHJldHVybiB7Qm9uem98bnVtYmVyfVxuICAgICAgICovXG4gICAgLCBvZmZzZXQ6IGZ1bmN0aW9uIChvcHRfeCwgb3B0X3kpIHtcbiAgICAgICAgaWYgKG9wdF94ICYmIHR5cGVvZiBvcHRfeCA9PSAnb2JqZWN0JyAmJiAodHlwZW9mIG9wdF94LnRvcCA9PSAnbnVtYmVyJyB8fCB0eXBlb2Ygb3B0X3gubGVmdCA9PSAnbnVtYmVyJykpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgeHkoZWwsIG9wdF94LmxlZnQsIG9wdF94LnRvcClcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRfeCA9PSAnbnVtYmVyJyB8fCB0eXBlb2Ygb3B0X3kgPT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgeHkoZWwsIG9wdF94LCBvcHRfeSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpc1swXSkgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgICwgbGVmdDogMFxuICAgICAgICAgICwgaGVpZ2h0OiAwXG4gICAgICAgICAgLCB3aWR0aDogMFxuICAgICAgICB9XG4gICAgICAgIHZhciBlbCA9IHRoaXNbMF1cbiAgICAgICAgICAsIGRlID0gZWwub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICAgICAgICAsIGJjciA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgLCBzY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoKVxuICAgICAgICAgICwgd2lkdGggPSBlbC5vZmZzZXRXaWR0aFxuICAgICAgICAgICwgaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgLCB0b3AgPSBiY3IudG9wICsgc2Nyb2xsLnkgLSBNYXRoLm1heCgwLCBkZSAmJiBkZS5jbGllbnRUb3AsIGRvYy5ib2R5LmNsaWVudFRvcClcbiAgICAgICAgICAsIGxlZnQgPSBiY3IubGVmdCArIHNjcm9sbC54IC0gTWF0aC5tYXgoMCwgZGUgJiYgZGUuY2xpZW50TGVmdCwgZG9jLmJvZHkuY2xpZW50TGVmdClcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiB0b3BcbiAgICAgICAgICAsIGxlZnQ6IGxlZnRcbiAgICAgICAgICAsIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgLCB3aWR0aDogd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICovXG4gICAgLCBkaW06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuIHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9XG4gICAgICAgIHZhciBlbCA9IHRoaXNbMF1cbiAgICAgICAgICAsIGRlID0gZWwubm9kZVR5cGUgPT0gOSAmJiBlbC5kb2N1bWVudEVsZW1lbnQgLy8gZG9jdW1lbnRcbiAgICAgICAgICAsIG9yaWcgPSAhZGUgJiYgISFlbC5zdHlsZSAmJiAhZWwub2Zmc2V0V2lkdGggJiYgIWVsLm9mZnNldEhlaWdodCA/XG4gICAgICAgICAgICAgLy8gZWwgaXNuJ3QgdmlzaWJsZSwgY2FuJ3QgYmUgbWVhc3VyZWQgcHJvcGVybHksIHNvIGZpeCB0aGF0XG4gICAgICAgICAgICAgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgIHZhciBzID0ge1xuICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBlbC5zdHlsZS5wb3NpdGlvbiB8fCAnJ1xuICAgICAgICAgICAgICAgICAsIHZpc2liaWxpdHk6IGVsLnN0eWxlLnZpc2liaWxpdHkgfHwgJydcbiAgICAgICAgICAgICAgICAgLCBkaXNwbGF5OiBlbC5zdHlsZS5kaXNwbGF5IHx8ICcnXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB0LmZpcnN0KCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgICAgICAgICAgICAsIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgICwgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIHJldHVybiBzXG4gICAgICAgICAgICB9KHRoaXMpIDogbnVsbFxuICAgICAgICAgICwgd2lkdGggPSBkZVxuICAgICAgICAgICAgICA/IE1hdGgubWF4KGVsLmJvZHkuc2Nyb2xsV2lkdGgsIGVsLmJvZHkub2Zmc2V0V2lkdGgsIGRlLnNjcm9sbFdpZHRoLCBkZS5vZmZzZXRXaWR0aCwgZGUuY2xpZW50V2lkdGgpXG4gICAgICAgICAgICAgIDogZWwub2Zmc2V0V2lkdGhcbiAgICAgICAgICAsIGhlaWdodCA9IGRlXG4gICAgICAgICAgICAgID8gTWF0aC5tYXgoZWwuYm9keS5zY3JvbGxIZWlnaHQsIGVsLmJvZHkub2Zmc2V0SGVpZ2h0LCBkZS5zY3JvbGxIZWlnaHQsIGRlLm9mZnNldEhlaWdodCwgZGUuY2xpZW50SGVpZ2h0KVxuICAgICAgICAgICAgICA6IGVsLm9mZnNldEhlaWdodFxuXG4gICAgICAgIG9yaWcgJiYgdGhpcy5maXJzdCgpLmNzcyhvcmlnKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICAsIHdpZHRoOiB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGF0dHJpYnV0ZXMgYXJlIGhhcmQuIGdvIHNob3BwaW5nXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGsgYW4gYXR0cmlidXRlIHRvIGdldCBvciBzZXRcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0X3YgdGhlIHZhbHVlIHRvIHNldFxuICAgICAgICogQHJldHVybiB7Qm9uem98c3RyaW5nfVxuICAgICAgICovXG4gICAgLCBhdHRyOiBmdW5jdGlvbiAoaywgb3B0X3YpIHtcbiAgICAgICAgdmFyIGVsID0gdGhpc1swXVxuICAgICAgICAgICwgblxuXG4gICAgICAgIGlmICh0eXBlb2YgayAhPSAnc3RyaW5nJyAmJiAhKGsgaW5zdGFuY2VvZiBTdHJpbmcpKSB7XG4gICAgICAgICAgZm9yIChuIGluIGspIHtcbiAgICAgICAgICAgIGsuaGFzT3duUHJvcGVydHkobikgJiYgdGhpcy5hdHRyKG4sIGtbbl0pXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZW9mIG9wdF92ID09ICd1bmRlZmluZWQnID9cbiAgICAgICAgICAhZWwgPyBudWxsIDogc3BlY2lhbEF0dHJpYnV0ZXMudGVzdChrKSA/XG4gICAgICAgICAgICBzdGF0ZUF0dHJpYnV0ZXMudGVzdChrKSAmJiB0eXBlb2YgZWxba10gPT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgICB0cnVlIDogZWxba10gOiAoayA9PSAnaHJlZicgfHwgayA9PSdzcmMnKSAmJiBmZWF0dXJlcy5ocmVmRXh0ZW5kZWQgP1xuICAgICAgICAgICAgICAgIGVsW2dldEF0dHJpYnV0ZV0oaywgMikgOiBlbFtnZXRBdHRyaWJ1dGVdKGspIDpcbiAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBzcGVjaWFsQXR0cmlidXRlcy50ZXN0KGspID8gKGVsW2tdID0gc2V0dGVyKGVsLCBvcHRfdikpIDogZWxbc2V0QXR0cmlidXRlXShrLCBzZXR0ZXIoZWwsIG9wdF92KSlcbiAgICAgICAgICB9KVxuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtcbiAgICAgICAqIEByZXR1cm4ge0JvbnpvfVxuICAgICAgICovXG4gICAgLCByZW1vdmVBdHRyOiBmdW5jdGlvbiAoaykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIHN0YXRlQXR0cmlidXRlcy50ZXN0KGspID8gKGVsW2tdID0gZmFsc2UpIDogZWwucmVtb3ZlQXR0cmlidXRlKGspXG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdF9zXG4gICAgICAgKiBAcmV0dXJuIHtCb256b3xzdHJpbmd9XG4gICAgICAgKi9cbiAgICAsIHZhbDogZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgcyA9PSAnc3RyaW5nJyB8fCB0eXBlb2YgcyA9PSAnbnVtYmVyJykgP1xuICAgICAgICAgIHRoaXMuYXR0cigndmFsdWUnLCBzKSA6XG4gICAgICAgICAgdGhpcy5sZW5ndGggPyB0aGlzWzBdLnZhbHVlIDogbnVsbFxuICAgICAgfVxuXG4gICAgICAvLyB1c2Ugd2l0aCBjYXJlIGFuZCBrbm93bGVkZ2UuIHRoaXMgZGF0YSgpIG1ldGhvZCB1c2VzIGRhdGEgYXR0cmlidXRlcyBvbiB0aGUgRE9NIG5vZGVzXG4gICAgICAvLyB0byBkbyB0aGlzIGRpZmZlcmVudGx5IGNvc3RzIGEgbG90IG1vcmUgY29kZS4gYydlc3QgbGEgdmllXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdD19IG9wdF9rIHRoZSBrZXkgZm9yIHdoaWNoIHRvIGdldCBvciBzZXQgZGF0YVxuICAgICAgICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfdlxuICAgICAgICogQHJldHVybiB7Qm9uem98T2JqZWN0fVxuICAgICAgICovXG4gICAgLCBkYXRhOiBmdW5jdGlvbiAob3B0X2ssIG9wdF92KSB7XG4gICAgICAgIHZhciBlbCA9IHRoaXNbMF0sIG8sIG1cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRfdiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAoIWVsKSByZXR1cm4gbnVsbFxuICAgICAgICAgIG8gPSBkYXRhKGVsKVxuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0X2sgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBlYWNoKGVsLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgIChtID0gKCcnICsgYS5uYW1lKS5tYXRjaChkYXR0cikpICYmIChvW2NhbWVsaXplKG1bMV0pXSA9IGRhdGFWYWx1ZShhLnZhbHVlKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gb1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9bb3B0X2tdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgb1tvcHRfa10gPSBkYXRhVmFsdWUodGhpcy5hdHRyKCdkYXRhLScgKyBkZWNhbWVsaXplKG9wdF9rKSkpXG4gICAgICAgICAgICByZXR1cm4gb1tvcHRfa11cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoZWwpIHsgZGF0YShlbClbb3B0X2tdID0gb3B0X3YgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBET00gZGV0YWNobWVudCAmIHJlbGF0ZWRcblxuICAgICAgLyoqXG4gICAgICAgKiBAcmV0dXJuIHtCb256b31cbiAgICAgICAqL1xuICAgICwgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVlcEVhY2goY2xlYXJEYXRhKVxuICAgICAgICByZXR1cm4gdGhpcy5kZXRhY2goKVxuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgICogQHJldHVybiB7Qm9uem99XG4gICAgICAgKi9cbiAgICAsIGVtcHR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZGVlcEVhY2goZWwuY2hpbGROb2RlcywgY2xlYXJEYXRhKVxuXG4gICAgICAgICAgd2hpbGUgKGVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgICogQHJldHVybiB7Qm9uem99XG4gICAgICAgKi9cbiAgICAsIGRldGFjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGVsW3BhcmVudE5vZGVdICYmIGVsW3BhcmVudE5vZGVdLnJlbW92ZUNoaWxkKGVsKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyB3aG8gdXNlcyBhIG1vdXNlIGFueXdheT8gb2ggcmlnaHQuXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgICAqL1xuICAgICwgc2Nyb2xsVG9wOiBmdW5jdGlvbiAoeSkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsLmNhbGwodGhpcywgbnVsbCwgeSwgJ3knKVxuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgICAqL1xuICAgICwgc2Nyb2xsTGVmdDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHNjcm9sbC5jYWxsKHRoaXMsIHgsIG51bGwsICd4JylcbiAgICAgIH1cblxuICB9XG5cblxuICBmdW5jdGlvbiBjbG9uZU5vZGUoaG9zdCwgZWwpIHtcbiAgICB2YXIgYyA9IGVsLmNsb25lTm9kZSh0cnVlKVxuICAgICAgLCBjbG9uZUVsZW1zXG4gICAgICAsIGVsRWxlbXNcbiAgICAgICwgaVxuXG4gICAgLy8gY2hlY2sgZm9yIGV4aXN0ZW5jZSBvZiBhbiBldmVudCBjbG9uZXJcbiAgICAvLyBwcmVmZXJhYmx5IGh0dHBzOi8vZ2l0aHViLmNvbS9mYXQvYmVhblxuICAgIC8vIG90aGVyd2lzZSBCb256byB3b24ndCBkbyB0aGlzIGZvciB5b3VcbiAgICBpZiAoaG9zdC4kICYmIHR5cGVvZiBob3N0LmNsb25lRXZlbnRzID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGhvc3QuJChjKS5jbG9uZUV2ZW50cyhlbClcblxuICAgICAgLy8gY2xvbmUgZXZlbnRzIGZyb20gZXZlcnkgY2hpbGQgbm9kZVxuICAgICAgY2xvbmVFbGVtcyA9IGhvc3QuJChjKS5maW5kKCcqJylcbiAgICAgIGVsRWxlbXMgPSBob3N0LiQoZWwpLmZpbmQoJyonKVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZWxFbGVtcy5sZW5ndGg7IGkrKylcbiAgICAgICAgaG9zdC4kKGNsb25lRWxlbXNbaV0pLmNsb25lRXZlbnRzKGVsRWxlbXNbaV0pXG4gICAgfVxuICAgIHJldHVybiBjXG4gIH1cblxuICBmdW5jdGlvbiBpc0JvZHkoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50ID09PSB3aW4gfHwgKC9eKD86Ym9keXxodG1sKSQvaSkudGVzdChlbGVtZW50LnRhZ05hbWUpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwoKSB7XG4gICAgcmV0dXJuIHsgeDogd2luLnBhZ2VYT2Zmc2V0IHx8IGh0bWwuc2Nyb2xsTGVmdCwgeTogd2luLnBhZ2VZT2Zmc2V0IHx8IGh0bWwuc2Nyb2xsVG9wIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNjcmlwdEZyb21IdG1sKGh0bWwpIHtcbiAgICB2YXIgc2NyaXB0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgLCBtYXRjaGVzID0gaHRtbC5tYXRjaChzaW1wbGVTY3JpcHRUYWdSZSlcbiAgICBzY3JpcHRFbC5zcmMgPSBtYXRjaGVzWzFdXG4gICAgcmV0dXJuIHNjcmlwdEVsXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBcnJheS48RWxlbWVudD58RWxlbWVudHxOb2RlfHN0cmluZ30gZWxzXG4gICAqIEByZXR1cm4ge0JvbnpvfVxuICAgKi9cbiAgZnVuY3Rpb24gYm9uem8oZWxzKSB7XG4gICAgcmV0dXJuIG5ldyBCb256byhlbHMpXG4gIH1cblxuICBib256by5zZXRRdWVyeUVuZ2luZSA9IGZ1bmN0aW9uIChxKSB7XG4gICAgcXVlcnkgPSBxO1xuICAgIGRlbGV0ZSBib256by5zZXRRdWVyeUVuZ2luZVxuICB9XG5cbiAgYm9uem8uYXVnID0gZnVuY3Rpb24gKG8sIHRhcmdldCkge1xuICAgIC8vIGZvciB0aG9zZSBzdGFuZGFsb25lIGJvbnpvIHVzZXJzLiB0aGlzIGxvdmUgaXMgZm9yIHlvdS5cbiAgICBmb3IgKHZhciBrIGluIG8pIHtcbiAgICAgIG8uaGFzT3duUHJvcGVydHkoaykgJiYgKCh0YXJnZXQgfHwgQm9uem8ucHJvdG90eXBlKVtrXSA9IG9ba10pXG4gICAgfVxuICB9XG5cbiAgYm9uem8uY3JlYXRlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAvLyBoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaFxuICAgIHJldHVybiB0eXBlb2Ygbm9kZSA9PSAnc3RyaW5nJyAmJiBub2RlICE9PSAnJyA/XG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzaW1wbGVTY3JpcHRUYWdSZS50ZXN0KG5vZGUpKSByZXR1cm4gW2NyZWF0ZVNjcmlwdEZyb21IdG1sKG5vZGUpXVxuICAgICAgICB2YXIgdGFnID0gbm9kZS5tYXRjaCgvXlxccyo8KFteXFxzPl0rKS8pXG4gICAgICAgICAgLCBlbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICwgZWxzID0gW11cbiAgICAgICAgICAsIHAgPSB0YWcgPyB0YWdNYXBbdGFnWzFdLnRvTG93ZXJDYXNlKCldIDogbnVsbFxuICAgICAgICAgICwgZGVwID0gcCA/IHBbMl0gKyAxIDogMVxuICAgICAgICAgICwgbnMgPSBwICYmIHBbM11cbiAgICAgICAgICAsIHBuID0gcGFyZW50Tm9kZVxuICAgICAgICAgICwgdGIgPSBmZWF0dXJlcy5hdXRvVGJvZHkgJiYgcCAmJiBwWzBdID09ICc8dGFibGU+JyAmJiAhKC88dGJvZHkvaSkudGVzdChub2RlKVxuXG4gICAgICAgIGVsLmlubmVySFRNTCA9IHAgPyAocFswXSArIG5vZGUgKyBwWzFdKSA6IG5vZGVcbiAgICAgICAgd2hpbGUgKGRlcC0tKSBlbCA9IGVsLmZpcnN0Q2hpbGRcbiAgICAgICAgLy8gZm9yIElFIE5vU2NvcGUsIHdlIG1heSBpbnNlcnQgY3J1ZnQgYXQgdGhlIGJlZ2luaW5nIGp1c3QgdG8gZ2V0IGl0IHRvIHdvcmtcbiAgICAgICAgaWYgKG5zICYmIGVsICYmIGVsLm5vZGVUeXBlICE9PSAxKSBlbCA9IGVsLm5leHRTaWJsaW5nXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAvLyB0Ym9keSBzcGVjaWFsIGNhc2UgZm9yIElFPDgsIGNyZWF0ZXMgdGJvZHkgb24gYW55IGVtcHR5IHRhYmxlXG4gICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCBpdCBpZiB3ZSdyZSBqdXN0IGFmdGVyIGEgPHRoZWFkPiwgPGNhcHRpb24+LCBldGMuXG4gICAgICAgICAgaWYgKCghdGFnIHx8IGVsLm5vZGVUeXBlID09IDEpICYmICghdGIgfHwgKGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZSAhPSAnVEJPRFknKSkpIHtcbiAgICAgICAgICAgIGVscy5wdXNoKGVsKVxuICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoZWwgPSBlbC5uZXh0U2libGluZylcbiAgICAgICAgLy8gSUUgPCA5IGdpdmVzIHVzIGEgcGFyZW50Tm9kZSB3aGljaCBtZXNzZXMgdXAgaW5zZXJ0KCkgY2hlY2sgZm9yIGNsb25pbmdcbiAgICAgICAgLy8gYGRlcGAgPiAxIGNhbiBhbHNvIGNhdXNlIHByb2JsZW1zIHdpdGggdGhlIGluc2VydCgpIGNoZWNrIChtdXN0IGRvIHRoaXMgbGFzdClcbiAgICAgICAgZWFjaChlbHMsIGZ1bmN0aW9uKGVsKSB7IGVsW3BuXSAmJiBlbFtwbl0ucmVtb3ZlQ2hpbGQoZWwpIH0pXG4gICAgICAgIHJldHVybiBlbHNcbiAgICAgIH0oKSA6IGlzTm9kZShub2RlKSA/IFtub2RlLmNsb25lTm9kZSh0cnVlKV0gOiBbXVxuICB9XG5cbiAgYm9uem8uZG9jID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2cCA9IGJvbnpvLnZpZXdwb3J0KClcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogTWF0aC5tYXgoZG9jLmJvZHkuc2Nyb2xsV2lkdGgsIGh0bWwuc2Nyb2xsV2lkdGgsIHZwLndpZHRoKVxuICAgICAgLCBoZWlnaHQ6IE1hdGgubWF4KGRvYy5ib2R5LnNjcm9sbEhlaWdodCwgaHRtbC5zY3JvbGxIZWlnaHQsIHZwLmhlaWdodClcbiAgICB9XG4gIH1cblxuICBib256by5maXJzdENoaWxkID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgZm9yICh2YXIgYyA9IGVsLmNoaWxkTm9kZXMsIGkgPSAwLCBqID0gKGMgJiYgYy5sZW5ndGgpIHx8IDAsIGU7IGkgPCBqOyBpKyspIHtcbiAgICAgIGlmIChjW2ldLm5vZGVUeXBlID09PSAxKSBlID0gY1tqID0gaV1cbiAgICB9XG4gICAgcmV0dXJuIGVcbiAgfVxuXG4gIGJvbnpvLnZpZXdwb3J0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBpZSA/IGh0bWwuY2xpZW50V2lkdGggOiBzZWxmLmlubmVyV2lkdGhcbiAgICAgICwgaGVpZ2h0OiBpZSA/IGh0bWwuY2xpZW50SGVpZ2h0IDogc2VsZi5pbm5lckhlaWdodFxuICAgIH1cbiAgfVxuXG4gIGJvbnpvLmlzQW5jZXN0b3IgPSAnY29tcGFyZURvY3VtZW50UG9zaXRpb24nIGluIGh0bWwgP1xuICAgIGZ1bmN0aW9uIChjb250YWluZXIsIGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQpICYgMTYpID09IDE2XG4gICAgfSA6ICdjb250YWlucycgaW4gaHRtbCA/XG4gICAgZnVuY3Rpb24gKGNvbnRhaW5lciwgZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGNvbnRhaW5lciAhPT0gZWxlbWVudCAmJiBjb250YWluZXIuY29udGFpbnMoZWxlbWVudCk7XG4gICAgfSA6XG4gICAgZnVuY3Rpb24gKGNvbnRhaW5lciwgZWxlbWVudCkge1xuICAgICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50W3BhcmVudE5vZGVdKSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBjb250YWluZXIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgcmV0dXJuIGJvbnpvXG59KTsgLy8gdGhlIG9ubHkgbGluZSB3ZSBjYXJlIGFib3V0IHVzaW5nIGEgc2VtaS1jb2xvbi4gcGxhY2VkIGhlcmUgZm9yIGNvbmNhdGVuYXRpb24gdG9vbHNcbiIsIlxuLy8gbm90IGltcGxlbWVudGVkXG4vLyBUaGUgcmVhc29uIGZvciBoYXZpbmcgYW4gZW1wdHkgZmlsZSBhbmQgbm90IHRocm93aW5nIGlzIHRvIGFsbG93XG4vLyB1bnRyYWRpdGlvbmFsIGltcGxlbWVudGF0aW9uIG9mIHRoaXMgbW9kdWxlLlxuIiwidmFyIGluc2VydGVkID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAgIGlmIChpbnNlcnRlZC5pbmRleE9mKGNzcykgPj0gMCkgcmV0dXJuO1xuICAgIGluc2VydGVkLnB1c2goY3NzKTtcbiAgICBcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgXG4gICAgaWYgKGRvY3VtZW50LmhlYWQuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoZWxlbSwgZG9jdW1lbnQuaGVhZC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfVxufTtcbiIsIi8qIVxuICAqIEBwcmVzZXJ2ZSBRd2VyeSAtIEEgQmxhemluZyBGYXN0IHF1ZXJ5IHNlbGVjdG9yIGVuZ2luZVxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZWQvcXdlcnlcbiAgKiBjb3B5cmlnaHQgRHVzdGluIERpYXogMjAxMlxuICAqIE1JVCBMaWNlbnNlXG4gICovXG5cbihmdW5jdGlvbiAobmFtZSwgY29udGV4dCwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIGNvbnRleHRbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0pKCdxd2VyeScsIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRvYyA9IGRvY3VtZW50XG4gICAgLCBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudFxuICAgICwgYnlDbGFzcyA9ICdnZXRFbGVtZW50c0J5Q2xhc3NOYW1lJ1xuICAgICwgYnlUYWcgPSAnZ2V0RWxlbWVudHNCeVRhZ05hbWUnXG4gICAgLCBxU0EgPSAncXVlcnlTZWxlY3RvckFsbCdcbiAgICAsIHVzZU5hdGl2ZVFTQSA9ICd1c2VOYXRpdmVRU0EnXG4gICAgLCB0YWdOYW1lID0gJ3RhZ05hbWUnXG4gICAgLCBub2RlVHlwZSA9ICdub2RlVHlwZSdcbiAgICAsIHNlbGVjdCAvLyBtYWluIHNlbGVjdCgpIG1ldGhvZCwgYXNzaWduIGxhdGVyXG5cbiAgICAsIGlkID0gLyMoW1xcd1xcLV0rKS9cbiAgICAsIGNsYXMgPSAvXFwuW1xcd1xcLV0rL2dcbiAgICAsIGlkT25seSA9IC9eIyhbXFx3XFwtXSspJC9cbiAgICAsIGNsYXNzT25seSA9IC9eXFwuKFtcXHdcXC1dKykkL1xuICAgICwgdGFnT25seSA9IC9eKFtcXHdcXC1dKykkL1xuICAgICwgdGFnQW5kT3JDbGFzcyA9IC9eKFtcXHddKyk/XFwuKFtcXHdcXC1dKykkL1xuICAgICwgc3BsaXR0YWJsZSA9IC8oXnwsKVxccypbPn4rXS9cbiAgICAsIG5vcm1hbGl6ciA9IC9eXFxzK3xcXHMqKFssXFxzXFwrXFx+Pl18JClcXHMqL2dcbiAgICAsIHNwbGl0dGVycyA9IC9bXFxzXFw+XFwrXFx+XS9cbiAgICAsIHNwbGl0dGVyc01vcmUgPSAvKD8hW1xcc1xcd1xcLVxcL1xcP1xcJlxcPVxcOlxcLlxcKFxcKVxcISxAIyU8Plxce1xcfVxcJFxcKlxcXidcIl0qXFxdfFtcXHNcXHdcXCtcXC1dKlxcKSkvXG4gICAgLCBzcGVjaWFsQ2hhcnMgPSAvKFsuKis/XFxePSE6JHt9KCl8XFxbXFxdXFwvXFxcXF0pL2dcbiAgICAsIHNpbXBsZSA9IC9eKFxcKnxbYS16MC05XSspPyg/OihbXFwuXFwjXStbXFx3XFwtXFwuI10rKT8pL1xuICAgICwgYXR0ciA9IC9cXFsoW1xcd1xcLV0rKSg/OihbXFx8XFxeXFwkXFwqXFx+XT9cXD0pWydcIl0/KFsgXFx3XFwtXFwvXFw/XFwmXFw9XFw6XFwuXFwoXFwpXFwhLEAjJTw+XFx7XFx9XFwkXFwqXFxeXSspW1wiJ10/KT9cXF0vXG4gICAgLCBwc2V1ZG8gPSAvOihbXFx3XFwtXSspKFxcKFsnXCJdPyhbXigpXSspWydcIl0/XFwpKT8vXG4gICAgLCBlYXN5ID0gbmV3IFJlZ0V4cChpZE9ubHkuc291cmNlICsgJ3wnICsgdGFnT25seS5zb3VyY2UgKyAnfCcgKyBjbGFzc09ubHkuc291cmNlKVxuICAgICwgZGl2aWRlcnMgPSBuZXcgUmVnRXhwKCcoJyArIHNwbGl0dGVycy5zb3VyY2UgKyAnKScgKyBzcGxpdHRlcnNNb3JlLnNvdXJjZSwgJ2cnKVxuICAgICwgdG9rZW5penIgPSBuZXcgUmVnRXhwKHNwbGl0dGVycy5zb3VyY2UgKyBzcGxpdHRlcnNNb3JlLnNvdXJjZSlcbiAgICAsIGNodW5rZXIgPSBuZXcgUmVnRXhwKHNpbXBsZS5zb3VyY2UgKyAnKCcgKyBhdHRyLnNvdXJjZSArICcpPycgKyAnKCcgKyBwc2V1ZG8uc291cmNlICsgJyk/JylcblxuICB2YXIgd2Fsa2VyID0ge1xuICAgICAgJyAnOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZSAmJiBub2RlICE9PSBodG1sICYmIG5vZGUucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICwgJz4nOiBmdW5jdGlvbiAobm9kZSwgY29udGVzdGFudCkge1xuICAgICAgICByZXR1cm4gbm9kZSAmJiBub2RlLnBhcmVudE5vZGUgPT0gY29udGVzdGFudC5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICwgJ34nOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZSAmJiBub2RlLnByZXZpb3VzU2libGluZ1xuICAgICAgfVxuICAgICwgJysnOiBmdW5jdGlvbiAobm9kZSwgY29udGVzdGFudCwgcDEsIHAyKSB7XG4gICAgICAgIGlmICghbm9kZSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiAocDEgPSBwcmV2aW91cyhub2RlKSkgJiYgKHAyID0gcHJldmlvdXMoY29udGVzdGFudCkpICYmIHAxID09IHAyICYmIHAxXG4gICAgICB9XG4gICAgfVxuXG4gIGZ1bmN0aW9uIGNhY2hlKCkge1xuICAgIHRoaXMuYyA9IHt9XG4gIH1cbiAgY2FjaGUucHJvdG90eXBlID0ge1xuICAgIGc6IGZ1bmN0aW9uIChrKSB7XG4gICAgICByZXR1cm4gdGhpcy5jW2tdIHx8IHVuZGVmaW5lZFxuICAgIH1cbiAgLCBzOiBmdW5jdGlvbiAoaywgdiwgcikge1xuICAgICAgdiA9IHIgPyBuZXcgUmVnRXhwKHYpIDogdlxuICAgICAgcmV0dXJuICh0aGlzLmNba10gPSB2KVxuICAgIH1cbiAgfVxuXG4gIHZhciBjbGFzc0NhY2hlID0gbmV3IGNhY2hlKClcbiAgICAsIGNsZWFuQ2FjaGUgPSBuZXcgY2FjaGUoKVxuICAgICwgYXR0ckNhY2hlID0gbmV3IGNhY2hlKClcbiAgICAsIHRva2VuQ2FjaGUgPSBuZXcgY2FjaGUoKVxuXG4gIGZ1bmN0aW9uIGNsYXNzUmVnZXgoYykge1xuICAgIHJldHVybiBjbGFzc0NhY2hlLmcoYykgfHwgY2xhc3NDYWNoZS5zKGMsICcoXnxcXFxccyspJyArIGMgKyAnKFxcXFxzK3wkKScsIDEpXG4gIH1cblxuICAvLyBub3QgcXVpdGUgYXMgZmFzdCBhcyBpbmxpbmUgbG9vcHMgaW4gb2xkZXIgYnJvd3NlcnMgc28gZG9uJ3QgdXNlIGxpYmVyYWxseVxuICBmdW5jdGlvbiBlYWNoKGEsIGZuKSB7XG4gICAgdmFyIGkgPSAwLCBsID0gYS5sZW5ndGhcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgZm4oYVtpXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsYXR0ZW4oYXIpIHtcbiAgICBmb3IgKHZhciByID0gW10sIGkgPSAwLCBsID0gYXIubGVuZ3RoOyBpIDwgbDsgKytpKSBhcnJheUxpa2UoYXJbaV0pID8gKHIgPSByLmNvbmNhdChhcltpXSkpIDogKHJbci5sZW5ndGhdID0gYXJbaV0pXG4gICAgcmV0dXJuIHJcbiAgfVxuXG4gIGZ1bmN0aW9uIGFycmF5aWZ5KGFyKSB7XG4gICAgdmFyIGkgPSAwLCBsID0gYXIubGVuZ3RoLCByID0gW11cbiAgICBmb3IgKDsgaSA8IGw7IGkrKykgcltpXSA9IGFyW2ldXG4gICAgcmV0dXJuIHJcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXZpb3VzKG4pIHtcbiAgICB3aGlsZSAobiA9IG4ucHJldmlvdXNTaWJsaW5nKSBpZiAobltub2RlVHlwZV0gPT0gMSkgYnJlYWs7XG4gICAgcmV0dXJuIG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHEocXVlcnkpIHtcbiAgICByZXR1cm4gcXVlcnkubWF0Y2goY2h1bmtlcilcbiAgfVxuXG4gIC8vIGNhbGxlZCB1c2luZyBgdGhpc2AgYXMgZWxlbWVudCBhbmQgYXJndW1lbnRzIGZyb20gcmVnZXggZ3JvdXAgcmVzdWx0cy5cbiAgLy8gZ2l2ZW4gPT4gZGl2LmhlbGxvW3RpdGxlPVwid29ybGRcIl06Zm9vKCdiYXInKVxuICAvLyBkaXYuaGVsbG9bdGl0bGU9XCJ3b3JsZFwiXTpmb28oJ2JhcicpLCBkaXYsIC5oZWxsbywgW3RpdGxlPVwid29ybGRcIl0sIHRpdGxlLCA9LCB3b3JsZCwgOmZvbygnYmFyJyksIGZvbywgKCdiYXInKSwgYmFyXVxuICBmdW5jdGlvbiBpbnRlcnByZXQod2hvbGUsIHRhZywgaWRzQW5kQ2xhc3Nlcywgd2hvbGVBdHRyaWJ1dGUsIGF0dHJpYnV0ZSwgcXVhbGlmaWVyLCB2YWx1ZSwgd2hvbGVQc2V1ZG8sIHBzZXVkbywgd2hvbGVQc2V1ZG9WYWwsIHBzZXVkb1ZhbCkge1xuICAgIHZhciBpLCBtLCBrLCBvLCBjbGFzc2VzXG4gICAgaWYgKHRoaXNbbm9kZVR5cGVdICE9PSAxKSByZXR1cm4gZmFsc2VcbiAgICBpZiAodGFnICYmIHRhZyAhPT0gJyonICYmIHRoaXNbdGFnTmFtZV0gJiYgdGhpc1t0YWdOYW1lXS50b0xvd2VyQ2FzZSgpICE9PSB0YWcpIHJldHVybiBmYWxzZVxuICAgIGlmIChpZHNBbmRDbGFzc2VzICYmIChtID0gaWRzQW5kQ2xhc3Nlcy5tYXRjaChpZCkpICYmIG1bMV0gIT09IHRoaXMuaWQpIHJldHVybiBmYWxzZVxuICAgIGlmIChpZHNBbmRDbGFzc2VzICYmIChjbGFzc2VzID0gaWRzQW5kQ2xhc3Nlcy5tYXRjaChjbGFzKSkpIHtcbiAgICAgIGZvciAoaSA9IGNsYXNzZXMubGVuZ3RoOyBpLS07KSBpZiAoIWNsYXNzUmVnZXgoY2xhc3Nlc1tpXS5zbGljZSgxKSkudGVzdCh0aGlzLmNsYXNzTmFtZSkpIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAocHNldWRvICYmIHF3ZXJ5LnBzZXVkb3NbcHNldWRvXSAmJiAhcXdlcnkucHNldWRvc1twc2V1ZG9dKHRoaXMsIHBzZXVkb1ZhbCkpIHJldHVybiBmYWxzZVxuICAgIGlmICh3aG9sZUF0dHJpYnV0ZSAmJiAhdmFsdWUpIHsgLy8gc2VsZWN0IGlzIGp1c3QgZm9yIGV4aXN0YW5jZSBvZiBhdHRyaWJcbiAgICAgIG8gPSB0aGlzLmF0dHJpYnV0ZXNcbiAgICAgIGZvciAoayBpbiBvKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykgJiYgKG9ba10ubmFtZSB8fCBrKSA9PSBhdHRyaWJ1dGUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3aG9sZUF0dHJpYnV0ZSAmJiAhY2hlY2tBdHRyKHF1YWxpZmllciwgZ2V0QXR0cih0aGlzLCBhdHRyaWJ1dGUpIHx8ICcnLCB2YWx1ZSkpIHtcbiAgICAgIC8vIHNlbGVjdCBpcyBmb3IgYXR0cmliIGVxdWFsaXR5XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFuKHMpIHtcbiAgICByZXR1cm4gY2xlYW5DYWNoZS5nKHMpIHx8IGNsZWFuQ2FjaGUucyhzLCBzLnJlcGxhY2Uoc3BlY2lhbENoYXJzLCAnXFxcXCQxJykpXG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0F0dHIocXVhbGlmeSwgYWN0dWFsLCB2YWwpIHtcbiAgICBzd2l0Y2ggKHF1YWxpZnkpIHtcbiAgICBjYXNlICc9JzpcbiAgICAgIHJldHVybiBhY3R1YWwgPT0gdmFsXG4gICAgY2FzZSAnXj0nOlxuICAgICAgcmV0dXJuIGFjdHVhbC5tYXRjaChhdHRyQ2FjaGUuZygnXj0nICsgdmFsKSB8fCBhdHRyQ2FjaGUucygnXj0nICsgdmFsLCAnXicgKyBjbGVhbih2YWwpLCAxKSlcbiAgICBjYXNlICckPSc6XG4gICAgICByZXR1cm4gYWN0dWFsLm1hdGNoKGF0dHJDYWNoZS5nKCckPScgKyB2YWwpIHx8IGF0dHJDYWNoZS5zKCckPScgKyB2YWwsIGNsZWFuKHZhbCkgKyAnJCcsIDEpKVxuICAgIGNhc2UgJyo9JzpcbiAgICAgIHJldHVybiBhY3R1YWwubWF0Y2goYXR0ckNhY2hlLmcodmFsKSB8fCBhdHRyQ2FjaGUucyh2YWwsIGNsZWFuKHZhbCksIDEpKVxuICAgIGNhc2UgJ349JzpcbiAgICAgIHJldHVybiBhY3R1YWwubWF0Y2goYXR0ckNhY2hlLmcoJ349JyArIHZhbCkgfHwgYXR0ckNhY2hlLnMoJ349JyArIHZhbCwgJyg/Ol58XFxcXHMrKScgKyBjbGVhbih2YWwpICsgJyg/OlxcXFxzK3wkKScsIDEpKVxuICAgIGNhc2UgJ3w9JzpcbiAgICAgIHJldHVybiBhY3R1YWwubWF0Y2goYXR0ckNhY2hlLmcoJ3w9JyArIHZhbCkgfHwgYXR0ckNhY2hlLnMoJ3w9JyArIHZhbCwgJ14nICsgY2xlYW4odmFsKSArICcoLXwkKScsIDEpKVxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gZ2l2ZW4gYSBzZWxlY3RvciwgZmlyc3QgY2hlY2sgZm9yIHNpbXBsZSBjYXNlcyB0aGVuIGNvbGxlY3QgYWxsIGJhc2UgY2FuZGlkYXRlIG1hdGNoZXMgYW5kIGZpbHRlclxuICBmdW5jdGlvbiBfcXdlcnkoc2VsZWN0b3IsIF9yb290KSB7XG4gICAgdmFyIHIgPSBbXSwgcmV0ID0gW10sIGksIGwsIG0sIHRva2VuLCB0YWcsIGVscywgaW50ciwgaXRlbSwgcm9vdCA9IF9yb290XG4gICAgICAsIHRva2VucyA9IHRva2VuQ2FjaGUuZyhzZWxlY3RvcikgfHwgdG9rZW5DYWNoZS5zKHNlbGVjdG9yLCBzZWxlY3Rvci5zcGxpdCh0b2tlbml6cikpXG4gICAgICAsIGRpdmlkZWRUb2tlbnMgPSBzZWxlY3Rvci5tYXRjaChkaXZpZGVycylcblxuICAgIGlmICghdG9rZW5zLmxlbmd0aCkgcmV0dXJuIHJcblxuICAgIHRva2VuID0gKHRva2VucyA9IHRva2Vucy5zbGljZSgwKSkucG9wKCkgLy8gY29weSBjYWNoZWQgdG9rZW5zLCB0YWtlIHRoZSBsYXN0IG9uZVxuICAgIGlmICh0b2tlbnMubGVuZ3RoICYmIChtID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS5tYXRjaChpZE9ubHkpKSkgcm9vdCA9IGJ5SWQoX3Jvb3QsIG1bMV0pXG4gICAgaWYgKCFyb290KSByZXR1cm4gclxuXG4gICAgaW50ciA9IHEodG9rZW4pXG4gICAgLy8gY29sbGVjdCBiYXNlIGNhbmRpZGF0ZXMgdG8gZmlsdGVyXG4gICAgZWxzID0gcm9vdCAhPT0gX3Jvb3QgJiYgcm9vdFtub2RlVHlwZV0gIT09IDkgJiYgZGl2aWRlZFRva2VucyAmJiAvXlsrfl0kLy50ZXN0KGRpdmlkZWRUb2tlbnNbZGl2aWRlZFRva2Vucy5sZW5ndGggLSAxXSkgP1xuICAgICAgZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgd2hpbGUgKHJvb3QgPSByb290Lm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgcm9vdFtub2RlVHlwZV0gPT0gMSAmJiAoaW50clsxXSA/IGludHJbMV0gPT0gcm9vdFt0YWdOYW1lXS50b0xvd2VyQ2FzZSgpIDogMSkgJiYgKHJbci5sZW5ndGhdID0gcm9vdClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gclxuICAgICAgfShbXSkgOlxuICAgICAgcm9vdFtieVRhZ10oaW50clsxXSB8fCAnKicpXG4gICAgLy8gZmlsdGVyIGVsZW1lbnRzIGFjY29yZGluZyB0byB0aGUgcmlnaHQtbW9zdCBwYXJ0IG9mIHRoZSBzZWxlY3RvclxuICAgIGZvciAoaSA9IDAsIGwgPSBlbHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoaXRlbSA9IGludGVycHJldC5hcHBseShlbHNbaV0sIGludHIpKSByW3IubGVuZ3RoXSA9IGl0ZW1cbiAgICB9XG4gICAgaWYgKCF0b2tlbnMubGVuZ3RoKSByZXR1cm4gclxuXG4gICAgLy8gZmlsdGVyIGZ1cnRoZXIgYWNjb3JkaW5nIHRvIHRoZSByZXN0IG9mIHRoZSBzZWxlY3RvciAodGhlIGxlZnQgc2lkZSlcbiAgICBlYWNoKHIsIGZ1bmN0aW9uIChlKSB7IGlmIChhbmNlc3Rvck1hdGNoKGUsIHRva2VucywgZGl2aWRlZFRva2VucykpIHJldFtyZXQubGVuZ3RoXSA9IGUgfSlcbiAgICByZXR1cm4gcmV0XG4gIH1cblxuICAvLyBjb21wYXJlIGVsZW1lbnQgdG8gYSBzZWxlY3RvclxuICBmdW5jdGlvbiBpcyhlbCwgc2VsZWN0b3IsIHJvb3QpIHtcbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSkgcmV0dXJuIGVsID09IHNlbGVjdG9yXG4gICAgaWYgKGFycmF5TGlrZShzZWxlY3RvcikpIHJldHVybiAhIX5mbGF0dGVuKHNlbGVjdG9yKS5pbmRleE9mKGVsKSAvLyBpZiBzZWxlY3RvciBpcyBhbiBhcnJheSwgaXMgZWwgYSBtZW1iZXI/XG5cbiAgICB2YXIgc2VsZWN0b3JzID0gc2VsZWN0b3Iuc3BsaXQoJywnKSwgdG9rZW5zLCBkaXZpZGVkVG9rZW5zXG4gICAgd2hpbGUgKHNlbGVjdG9yID0gc2VsZWN0b3JzLnBvcCgpKSB7XG4gICAgICB0b2tlbnMgPSB0b2tlbkNhY2hlLmcoc2VsZWN0b3IpIHx8IHRva2VuQ2FjaGUucyhzZWxlY3Rvciwgc2VsZWN0b3Iuc3BsaXQodG9rZW5penIpKVxuICAgICAgZGl2aWRlZFRva2VucyA9IHNlbGVjdG9yLm1hdGNoKGRpdmlkZXJzKVxuICAgICAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKDApIC8vIGNvcHkgYXJyYXlcbiAgICAgIGlmIChpbnRlcnByZXQuYXBwbHkoZWwsIHEodG9rZW5zLnBvcCgpKSkgJiYgKCF0b2tlbnMubGVuZ3RoIHx8IGFuY2VzdG9yTWF0Y2goZWwsIHRva2VucywgZGl2aWRlZFRva2Vucywgcm9vdCkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gZ2l2ZW4gZWxlbWVudHMgbWF0Y2hpbmcgdGhlIHJpZ2h0LW1vc3QgcGFydCBvZiBhIHNlbGVjdG9yLCBmaWx0ZXIgb3V0IGFueSB0aGF0IGRvbid0IG1hdGNoIHRoZSByZXN0XG4gIGZ1bmN0aW9uIGFuY2VzdG9yTWF0Y2goZWwsIHRva2VucywgZGl2aWRlZFRva2Vucywgcm9vdCkge1xuICAgIHZhciBjYW5kXG4gICAgLy8gcmVjdXJzaXZlbHkgd29yayBiYWNrd2FyZHMgdGhyb3VnaCB0aGUgdG9rZW5zIGFuZCB1cCB0aGUgZG9tLCBjb3ZlcmluZyBhbGwgb3B0aW9uc1xuICAgIGZ1bmN0aW9uIGNyYXdsKGUsIGksIHApIHtcbiAgICAgIHdoaWxlIChwID0gd2Fsa2VyW2RpdmlkZWRUb2tlbnNbaV1dKHAsIGUpKSB7XG4gICAgICAgIGlmIChpc05vZGUocCkgJiYgKGludGVycHJldC5hcHBseShwLCBxKHRva2Vuc1tpXSkpKSkge1xuICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICBpZiAoY2FuZCA9IGNyYXdsKHAsIGkgLSAxLCBwKSkgcmV0dXJuIGNhbmRcbiAgICAgICAgICB9IGVsc2UgcmV0dXJuIHBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKGNhbmQgPSBjcmF3bChlbCwgdG9rZW5zLmxlbmd0aCAtIDEsIGVsKSkgJiYgKCFyb290IHx8IGlzQW5jZXN0b3IoY2FuZCwgcm9vdCkpXG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUoZWwsIHQpIHtcbiAgICByZXR1cm4gZWwgJiYgdHlwZW9mIGVsID09PSAnb2JqZWN0JyAmJiAodCA9IGVsW25vZGVUeXBlXSkgJiYgKHQgPT0gMSB8fCB0ID09IDkpXG4gIH1cblxuICBmdW5jdGlvbiB1bmlxKGFyKSB7XG4gICAgdmFyIGEgPSBbXSwgaSwgajtcbiAgICBvOlxuICAgIGZvciAoaSA9IDA7IGkgPCBhci5sZW5ndGg7ICsraSkge1xuICAgICAgZm9yIChqID0gMDsgaiA8IGEubGVuZ3RoOyArK2opIGlmIChhW2pdID09IGFyW2ldKSBjb250aW51ZSBvXG4gICAgICBhW2EubGVuZ3RoXSA9IGFyW2ldXG4gICAgfVxuICAgIHJldHVybiBhXG4gIH1cblxuICBmdW5jdGlvbiBhcnJheUxpa2Uobykge1xuICAgIHJldHVybiAodHlwZW9mIG8gPT09ICdvYmplY3QnICYmIGlzRmluaXRlKG8ubGVuZ3RoKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVJvb3Qocm9vdCkge1xuICAgIGlmICghcm9vdCkgcmV0dXJuIGRvY1xuICAgIGlmICh0eXBlb2Ygcm9vdCA9PSAnc3RyaW5nJykgcmV0dXJuIHF3ZXJ5KHJvb3QpWzBdXG4gICAgaWYgKCFyb290W25vZGVUeXBlXSAmJiBhcnJheUxpa2Uocm9vdCkpIHJldHVybiByb290WzBdXG4gICAgcmV0dXJuIHJvb3RcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ5SWQocm9vdCwgaWQsIGVsKSB7XG4gICAgLy8gaWYgZG9jLCBxdWVyeSBvbiBpdCwgZWxzZSBxdWVyeSB0aGUgcGFyZW50IGRvYyBvciBpZiBhIGRldGFjaGVkIGZyYWdtZW50IHJld3JpdGUgdGhlIHF1ZXJ5IGFuZCBydW4gb24gdGhlIGZyYWdtZW50XG4gICAgcmV0dXJuIHJvb3Rbbm9kZVR5cGVdID09PSA5ID8gcm9vdC5nZXRFbGVtZW50QnlJZChpZCkgOlxuICAgICAgcm9vdC5vd25lckRvY3VtZW50ICYmXG4gICAgICAgICgoKGVsID0gcm9vdC5vd25lckRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkgJiYgaXNBbmNlc3RvcihlbCwgcm9vdCkgJiYgZWwpIHx8XG4gICAgICAgICAgKCFpc0FuY2VzdG9yKHJvb3QsIHJvb3Qub3duZXJEb2N1bWVudCkgJiYgc2VsZWN0KCdbaWQ9XCInICsgaWQgKyAnXCJdJywgcm9vdClbMF0pKVxuICB9XG5cbiAgZnVuY3Rpb24gcXdlcnkoc2VsZWN0b3IsIF9yb290KSB7XG4gICAgdmFyIG0sIGVsLCByb290ID0gbm9ybWFsaXplUm9vdChfcm9vdClcblxuICAgIC8vIGVhc3ksIGZhc3QgY2FzZXMgdGhhdCB3ZSBjYW4gZGlzcGF0Y2ggd2l0aCBzaW1wbGUgRE9NIGNhbGxzXG4gICAgaWYgKCFyb290IHx8ICFzZWxlY3RvcikgcmV0dXJuIFtdXG4gICAgaWYgKHNlbGVjdG9yID09PSB3aW5kb3cgfHwgaXNOb2RlKHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuICFfcm9vdCB8fCAoc2VsZWN0b3IgIT09IHdpbmRvdyAmJiBpc05vZGUocm9vdCkgJiYgaXNBbmNlc3RvcihzZWxlY3Rvciwgcm9vdCkpID8gW3NlbGVjdG9yXSA6IFtdXG4gICAgfVxuICAgIGlmIChzZWxlY3RvciAmJiBhcnJheUxpa2Uoc2VsZWN0b3IpKSByZXR1cm4gZmxhdHRlbihzZWxlY3RvcilcbiAgICBpZiAobSA9IHNlbGVjdG9yLm1hdGNoKGVhc3kpKSB7XG4gICAgICBpZiAobVsxXSkgcmV0dXJuIChlbCA9IGJ5SWQocm9vdCwgbVsxXSkpID8gW2VsXSA6IFtdXG4gICAgICBpZiAobVsyXSkgcmV0dXJuIGFycmF5aWZ5KHJvb3RbYnlUYWddKG1bMl0pKVxuICAgICAgaWYgKGhhc0J5Q2xhc3MgJiYgbVszXSkgcmV0dXJuIGFycmF5aWZ5KHJvb3RbYnlDbGFzc10obVszXSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdChzZWxlY3Rvciwgcm9vdClcbiAgfVxuXG4gIC8vIHdoZXJlIHRoZSByb290IGlzIG5vdCBkb2N1bWVudCBhbmQgYSByZWxhdGlvbnNoaXAgc2VsZWN0b3IgaXMgZmlyc3Qgd2UgaGF2ZSB0b1xuICAvLyBkbyBzb21lIGF3a3dhcmQgYWRqdXN0bWVudHMgdG8gZ2V0IGl0IHRvIHdvcmssIGV2ZW4gd2l0aCBxU0FcbiAgZnVuY3Rpb24gY29sbGVjdFNlbGVjdG9yKHJvb3QsIGNvbGxlY3Rvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAocykge1xuICAgICAgdmFyIG9pZCwgbmlkXG4gICAgICBpZiAoc3BsaXR0YWJsZS50ZXN0KHMpKSB7XG4gICAgICAgIGlmIChyb290W25vZGVUeXBlXSAhPT0gOSkge1xuICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgZWwgaGFzIGFuIGlkLCByZXdyaXRlIHRoZSBxdWVyeSwgc2V0IHJvb3QgdG8gZG9jIGFuZCBydW4gaXRcbiAgICAgICAgICBpZiAoIShuaWQgPSBvaWQgPSByb290LmdldEF0dHJpYnV0ZSgnaWQnKSkpIHJvb3Quc2V0QXR0cmlidXRlKCdpZCcsIG5pZCA9ICdfX3F3ZXJ5bWV1cHNjb3R0eScpXG4gICAgICAgICAgcyA9ICdbaWQ9XCInICsgbmlkICsgJ1wiXScgKyBzIC8vIGF2b2lkIGJ5SWQgYW5kIGFsbG93IHVzIHRvIG1hdGNoIGNvbnRleHQgZWxlbWVudFxuICAgICAgICAgIGNvbGxlY3Rvcihyb290LnBhcmVudE5vZGUgfHwgcm9vdCwgcywgdHJ1ZSlcbiAgICAgICAgICBvaWQgfHwgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzLmxlbmd0aCAmJiBjb2xsZWN0b3Iocm9vdCwgcywgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlzQW5jZXN0b3IgPSAnY29tcGFyZURvY3VtZW50UG9zaXRpb24nIGluIGh0bWwgP1xuICAgIGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgIHJldHVybiAoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQpICYgMTYpID09IDE2XG4gICAgfSA6ICdjb250YWlucycgaW4gaHRtbCA/XG4gICAgZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgY29udGFpbmVyID0gY29udGFpbmVyW25vZGVUeXBlXSA9PT0gOSB8fCBjb250YWluZXIgPT0gd2luZG93ID8gaHRtbCA6IGNvbnRhaW5lclxuICAgICAgcmV0dXJuIGNvbnRhaW5lciAhPT0gZWxlbWVudCAmJiBjb250YWluZXIuY29udGFpbnMoZWxlbWVudClcbiAgICB9IDpcbiAgICBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkgaWYgKGVsZW1lbnQgPT09IGNvbnRhaW5lcikgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICAsIGdldEF0dHIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBkZXRlY3QgYnVnZ3kgSUUgc3JjL2hyZWYgZ2V0QXR0cmlidXRlKCkgY2FsbFxuICAgICAgdmFyIGUgPSBkb2MuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICByZXR1cm4gKChlLmlubmVySFRNTCA9ICc8YSBocmVmPVwiI3hcIj54PC9hPicpICYmIGUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSAhPSAnI3gnKSA/XG4gICAgICAgIGZ1bmN0aW9uIChlLCBhKSB7XG4gICAgICAgICAgcmV0dXJuIGEgPT09ICdjbGFzcycgPyBlLmNsYXNzTmFtZSA6IChhID09PSAnaHJlZicgfHwgYSA9PT0gJ3NyYycpID9cbiAgICAgICAgICAgIGUuZ2V0QXR0cmlidXRlKGEsIDIpIDogZS5nZXRBdHRyaWJ1dGUoYSlcbiAgICAgICAgfSA6XG4gICAgICAgIGZ1bmN0aW9uIChlLCBhKSB7IHJldHVybiBlLmdldEF0dHJpYnV0ZShhKSB9XG4gICAgfSgpXG4gICwgaGFzQnlDbGFzcyA9ICEhZG9jW2J5Q2xhc3NdXG4gICAgLy8gaGFzIG5hdGl2ZSBxU0Egc3VwcG9ydFxuICAsIGhhc1FTQSA9IGRvYy5xdWVyeVNlbGVjdG9yICYmIGRvY1txU0FdXG4gICAgLy8gdXNlIG5hdGl2ZSBxU0FcbiAgLCBzZWxlY3RRU0EgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHJvb3QpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXSwgc3MsIGVcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChyb290W25vZGVUeXBlXSA9PT0gOSB8fCAhc3BsaXR0YWJsZS50ZXN0KHNlbGVjdG9yKSkge1xuICAgICAgICAgIC8vIG1vc3Qgd29yayBpcyBkb25lIHJpZ2h0IGhlcmUsIGRlZmVyIHRvIHFTQVxuICAgICAgICAgIHJldHVybiBhcnJheWlmeShyb290W3FTQV0oc2VsZWN0b3IpKVxuICAgICAgICB9XG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZSB3aGVyZSB3ZSBuZWVkIHRoZSBzZXJ2aWNlcyBvZiBgY29sbGVjdFNlbGVjdG9yKClgXG4gICAgICAgIGVhY2goc3MgPSBzZWxlY3Rvci5zcGxpdCgnLCcpLCBjb2xsZWN0U2VsZWN0b3Iocm9vdCwgZnVuY3Rpb24gKGN0eCwgcykge1xuICAgICAgICAgIGUgPSBjdHhbcVNBXShzKVxuICAgICAgICAgIGlmIChlLmxlbmd0aCA9PSAxKSByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBlLml0ZW0oMClcbiAgICAgICAgICBlbHNlIGlmIChlLmxlbmd0aCkgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhcnJheWlmeShlKSlcbiAgICAgICAgfSkpXG4gICAgICAgIHJldHVybiBzcy5sZW5ndGggPiAxICYmIHJlc3VsdC5sZW5ndGggPiAxID8gdW5pcShyZXN1bHQpIDogcmVzdWx0XG4gICAgICB9IGNhdGNoIChleCkgeyB9XG4gICAgICByZXR1cm4gc2VsZWN0Tm9uTmF0aXZlKHNlbGVjdG9yLCByb290KVxuICAgIH1cbiAgICAvLyBubyBuYXRpdmUgc2VsZWN0b3Igc3VwcG9ydFxuICAsIHNlbGVjdE5vbk5hdGl2ZSA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgcm9vdCkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdLCBpdGVtcywgbSwgaSwgbCwgciwgc3NcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZShub3JtYWxpenIsICckMScpXG4gICAgICBpZiAobSA9IHNlbGVjdG9yLm1hdGNoKHRhZ0FuZE9yQ2xhc3MpKSB7XG4gICAgICAgIHIgPSBjbGFzc1JlZ2V4KG1bMl0pXG4gICAgICAgIGl0ZW1zID0gcm9vdFtieVRhZ10obVsxXSB8fCAnKicpXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoci50ZXN0KGl0ZW1zW2ldLmNsYXNzTmFtZSkpIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGl0ZW1zW2ldXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgICAgLy8gbW9yZSBjb21wbGV4IHNlbGVjdG9yLCBnZXQgYF9xd2VyeSgpYCB0byBkbyB0aGUgd29yayBmb3IgdXNcbiAgICAgIGVhY2goc3MgPSBzZWxlY3Rvci5zcGxpdCgnLCcpLCBjb2xsZWN0U2VsZWN0b3Iocm9vdCwgZnVuY3Rpb24gKGN0eCwgcywgcmV3cml0ZSkge1xuICAgICAgICByID0gX3F3ZXJ5KHMsIGN0eClcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGN0eFtub2RlVHlwZV0gPT09IDkgfHwgcmV3cml0ZSB8fCBpc0FuY2VzdG9yKHJbaV0sIHJvb3QpKSByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSByW2ldXG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgICAgcmV0dXJuIHNzLmxlbmd0aCA+IDEgJiYgcmVzdWx0Lmxlbmd0aCA+IDEgPyB1bmlxKHJlc3VsdCkgOiByZXN1bHRcbiAgICB9XG4gICwgY29uZmlndXJlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIC8vIGNvbmZpZ05hdGl2ZVFTQTogdXNlIGZ1bGx5LWludGVybmFsIHNlbGVjdG9yIG9yIG5hdGl2ZSBxU0Egd2hlcmUgcHJlc2VudFxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW3VzZU5hdGl2ZVFTQV0gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICBzZWxlY3QgPSAhb3B0aW9uc1t1c2VOYXRpdmVRU0FdID8gc2VsZWN0Tm9uTmF0aXZlIDogaGFzUVNBID8gc2VsZWN0UVNBIDogc2VsZWN0Tm9uTmF0aXZlXG4gICAgfVxuXG4gIGNvbmZpZ3VyZSh7IHVzZU5hdGl2ZVFTQTogdHJ1ZSB9KVxuXG4gIHF3ZXJ5LmNvbmZpZ3VyZSA9IGNvbmZpZ3VyZVxuICBxd2VyeS51bmlxID0gdW5pcVxuICBxd2VyeS5pcyA9IGlzXG4gIHF3ZXJ5LnBzZXVkb3MgPSB7fVxuXG4gIHJldHVybiBxd2VyeVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGhhc0tleXNcblxuZnVuY3Rpb24gaGFzS2V5cyhzb3VyY2UpIHtcbiAgICByZXR1cm4gc291cmNlICE9PSBudWxsICYmXG4gICAgICAgICh0eXBlb2Ygc291cmNlID09PSBcIm9iamVjdFwiIHx8XG4gICAgICAgIHR5cGVvZiBzb3VyY2UgPT09IFwiZnVuY3Rpb25cIilcbn1cbiIsInZhciBLZXlzID0gcmVxdWlyZShcIm9iamVjdC1rZXlzXCIpXG52YXIgaGFzS2V5cyA9IHJlcXVpcmUoXCIuL2hhcy1rZXlzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBpZiAoIWhhc0tleXMoc291cmNlKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXlzID0gS2V5cyhzb3VyY2UpXG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IGtleXNbal1cbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IHNvdXJjZVtuYW1lXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwidmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgaXNGdW5jID0gKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiAhKGZuIGluc3RhbmNlb2YgUmVnRXhwKSkgfHwgdG9TdHJpbmcuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdGlmICghaXNGdW5jICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aXNGdW5jID0gZm4gPT09IHdpbmRvdy5zZXRUaW1lb3V0IHx8IGZuID09PSB3aW5kb3cuYWxlcnQgfHwgZm4gPT09IHdpbmRvdy5jb25maXJtIHx8IGZuID09PSB3aW5kb3cucHJvbXB0O1xuXHR9XG5cdHJldHVybiBpc0Z1bmM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuXHRpZiAoIWlzRnVuY3Rpb24oZm4pKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaXRlcmF0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdH1cblx0dmFyIGksIGssXG5cdFx0aXNTdHJpbmcgPSB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyxcblx0XHRsID0gb2JqLmxlbmd0aCxcblx0XHRjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuXHRpZiAobCA9PT0gK2wpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRpZiAoY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0XHRmbihpc1N0cmluZyA/IG9iai5jaGFyQXQoaSkgOiBvYmpbaV0sIGksIG9iaik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmbi5jYWxsKGNvbnRleHQsIGlzU3RyaW5nID8gb2JqLmNoYXJBdChpKSA6IG9ialtpXSwgaSwgb2JqKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yIChrIGluIG9iaikge1xuXHRcdFx0aWYgKGhhc093bi5jYWxsKG9iaiwgaykpIHtcblx0XHRcdFx0aWYgKGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRmbihvYmpba10sIGssIG9iaik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm4uY2FsbChjb250ZXh0LCBvYmpba10sIGssIG9iaik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgcmVxdWlyZSgnLi9zaGltJyk7XG5cbiIsInZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0dmFyIHN0ciA9IHRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXHR2YXIgaXNBcmd1bWVudHMgPSBzdHIgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXHRpZiAoIWlzQXJndW1lbnRzKSB7XG5cdFx0aXNBcmd1bWVudHMgPSBzdHIgIT09ICdbb2JqZWN0IEFycmF5XSdcblx0XHRcdCYmIHZhbHVlICE9PSBudWxsXG5cdFx0XHQmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG5cdFx0XHQmJiB0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJ1xuXHRcdFx0JiYgdmFsdWUubGVuZ3RoID49IDBcblx0XHRcdCYmIHRvU3RyaW5nLmNhbGwodmFsdWUuY2FsbGVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0fVxuXHRyZXR1cm4gaXNBcmd1bWVudHM7XG59O1xuXG4iLCIoZnVuY3Rpb24gKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHQvLyBtb2RpZmllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlza293YWwvZXM1LXNoaW1cblx0dmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG5cdFx0dG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuXHRcdGZvckVhY2ggPSByZXF1aXJlKCcuL2ZvcmVhY2gnKSxcblx0XHRpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG5cdFx0aGFzRG9udEVudW1CdWcgPSAhKHsndG9TdHJpbmcnOiBudWxsfSkucHJvcGVydHlJc0VudW1lcmFibGUoJ3RvU3RyaW5nJyksXG5cdFx0aGFzUHJvdG9FbnVtQnVnID0gKGZ1bmN0aW9uICgpIHt9KS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgncHJvdG90eXBlJyksXG5cdFx0ZG9udEVudW1zID0gW1xuXHRcdFx0XCJ0b1N0cmluZ1wiLFxuXHRcdFx0XCJ0b0xvY2FsZVN0cmluZ1wiLFxuXHRcdFx0XCJ2YWx1ZU9mXCIsXG5cdFx0XHRcImhhc093blByb3BlcnR5XCIsXG5cdFx0XHRcImlzUHJvdG90eXBlT2ZcIixcblx0XHRcdFwicHJvcGVydHlJc0VudW1lcmFibGVcIixcblx0XHRcdFwiY29uc3RydWN0b3JcIlxuXHRcdF0sXG5cdFx0a2V5c1NoaW07XG5cblx0a2V5c1NoaW0gPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHRcdHZhciBpc09iamVjdCA9IG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jyxcblx0XHRcdGlzRnVuY3Rpb24gPSB0b1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG5cdFx0XHRpc0FyZ3VtZW50cyA9IGlzQXJncyhvYmplY3QpLFxuXHRcdFx0dGhlS2V5cyA9IFtdO1xuXG5cdFx0aWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbiAmJiAhaXNBcmd1bWVudHMpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0XCIpO1xuXHRcdH1cblxuXHRcdGlmIChpc0FyZ3VtZW50cykge1xuXHRcdFx0Zm9yRWFjaChvYmplY3QsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2godmFsdWUpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBuYW1lLFxuXHRcdFx0XHRza2lwUHJvdG8gPSBoYXNQcm90b0VudW1CdWcgJiYgaXNGdW5jdGlvbjtcblxuXHRcdFx0Zm9yIChuYW1lIGluIG9iamVjdCkge1xuXHRcdFx0XHRpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIGhhcy5jYWxsKG9iamVjdCwgbmFtZSkpIHtcblx0XHRcdFx0XHR0aGVLZXlzLnB1c2gobmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaGFzRG9udEVudW1CdWcpIHtcblx0XHRcdHZhciBjdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuXHRcdFx0XHRza2lwQ29uc3RydWN0b3IgPSBjdG9yICYmIGN0b3IucHJvdG90eXBlID09PSBvYmplY3Q7XG5cblx0XHRcdGZvckVhY2goZG9udEVudW1zLCBmdW5jdGlvbiAoZG9udEVudW0pIHtcblx0XHRcdFx0aWYgKCEoc2tpcENvbnN0cnVjdG9yICYmIGRvbnRFbnVtID09PSAnY29uc3RydWN0b3InKSAmJiBoYXMuY2FsbChvYmplY3QsIGRvbnRFbnVtKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChkb250RW51bSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhlS2V5cztcblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xufSgpKTtcblxuIiwibW9kdWxlLmV4cG9ydHM9KGZ1bmN0aW9uKCkge3ZhciB0ID0gZnVuY3Rpb24gYW5vbnltb3VzKGxvY2FscywgZmlsdGVycywgZXNjYXBlKSB7XG5lc2NhcGUgPSBlc2NhcGUgfHwgZnVuY3Rpb24gKGh0bWwpe1xuICByZXR1cm4gU3RyaW5nKGh0bWwpXG4gICAgLnJlcGxhY2UoLyYoPyFcXHcrOykvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59O1xudmFyIGJ1ZiA9IFtdO1xud2l0aCAobG9jYWxzIHx8IHt9KSB7IChmdW5jdGlvbigpeyBcbiBidWYucHVzaCgnPGRpdiBjbGFzcz1cIm1vZGUgc2lnbmluXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJwb3B1cFwiPlxcbiAgICAgIFx0PGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cXG4gICAgICAgIFx0PGRpdiBpZD1cIm9uZXN0ZXBcIiBjbGFzcz1cInBhbmVsIG9uZXN0ZXBcIj5cXG4gICAgICAgICAgXHRcdDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cXG4gICAgICAgICAgICBcdFx0PGRpdiBjbGFzcz1cImltYWdlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XFxuICAgICAgICAgICAgXHRcdFx0PGltZyBzcmM9XCJcIj5cXG4gICAgICAgICAgICBcdFx0PC9kaXY+XFxuICAgICAgICAgICAgXHRcdDxoMT5TaWduIEluPC9oMT5cXG5cdFx0ICAgICAgICAgICAgPGgyIGNsYXNzPVwiZXJyb3JcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj4mbmJzcDs8L2gyPlxcblx0XHQgICAgICAgICAgICA8aDIgY2xhc3M9XCJzdWNjZXNzXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+Jm5ic3A7PC9oMj5cXG5cdFx0ICAgICAgICAgICAgPGEgY2xhc3M9XCJjbG9zZVwiPkNsb3NlPC9hPlxcbiAgICAgICAgICBcdFx0PC9oZWFkZXI+XFxuXFxuICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzPVwibG9nZ2VkaW5cIj5cXG5cdFx0ICAgICAgICAgICAgPGZvcm0+XFxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjZW50ZXJlZCBsYXN0LXRpbWVcIj48L3NwYW4+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN0cmF0ZWd5XCI+PC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImVtYWlsUGFzc3dvcmRcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImVtYWlsXCI+XFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZW1haWwtcmVhZG9ubHlcIj48L3NwYW4+XFxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiB2YWx1ZT1cIlwiIGRpc2FibGVkIHBsYWNlaG9sZGVyPVwiRW1haWxcIiB0aXRsZT1cIkVtYWlsXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cXG5cdFx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBhc3N3b3JkXCI+XFxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT1cIlwiIGF1dG9mb2N1cyBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgdGl0bGU9XCJQYXNzd29yZFwiPlxcblx0XHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aW9uXCI+XFxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiem9jaWFsIHByaW1hcnkgbmV4dFwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+U2lnbiBJbjwvYnV0dG9uPlxcblx0XHRcdFx0XHRcdFx0ICBcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3Bpbm5lclwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPjwvYnV0dG9uPlxcblx0XHRcdFx0XHRcdFx0ICBcdDxsYWJlbCBjbGFzcz1cImNyZWF0ZS1hY2NvdW50XCI+PGEgaHJlZj1cImphdmFzY3JpcHQ6IHt9XCIgY2xhc3M9XCJmb3Jnb3QtcGFzc1wiPkZvcmdvdCB5b3VyIHBhc3N3b3JkPzwvYT48L2xhYmVsPlxcblx0XHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjZW50ZXJlZCBhbGxcIj5TaG93IGFsbDwvc3Bhbj5cXG5cdFx0ICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgICBcdFx0PC9kaXY+XFxuXFxuXHQgICAgICAgICAgXHQ8ZGl2IGNsYXNzPVwibm90bG9nZ2VkaW5cIj5cXG5cdFx0ICAgICAgICAgICAgPGZvcm0+XFxuXHRcdCAgICAgICAgICAgIFx0PGRpdiBjbGFzcz1cImljb25saXN0XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+PHAgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj4uLi4gb3Igc2lnbiBpbiB1c2luZzwvcD48L2Rpdj5cXG5cdFx0ICAgICAgICAgICAgICBcdDxkaXYgY2xhc3M9XCJzZXBhcmF0b3JcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj48c3Bhbj5vcjwvc3Bhbj48L2Rpdj5cXG5cdFx0ICAgICAgICAgICAgICBcdDxkaXYgY2xhc3M9XCJlbWFpbFBhc3N3b3JkXCI+XFxuXHRcdCAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3M9XCJlbWFpbFwiPlxcblx0XHQgICAgICAgICAgICAgICAgICBcdFx0PGlucHV0IG5hbWU9XCJlbWFpbFwiIGlkPVwic2lnbmluX2Vhc3lfZW1haWxcIiB0eXBlPVwiZW1haWxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdGl0bGU9XCJFbWFpbFwiPlxcblx0XHQgICAgICAgICAgICAgICAgXHQ8L2Rpdj5cXG5cdFx0ICAgICAgICAgICAgICAgIFx0PGRpdiBjbGFzcz1cInBhc3N3b3JkXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cXG5cdFx0ICAgICAgICAgICAgICAgICAgXHRcdDxpbnB1dCBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInNpZ25pbl9lYXN5X3Bhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHRpdGxlPVwiUGFzc3dvcmRcIj5cXG5cdFx0ICAgICAgICAgICAgICAgIFx0PC9kaXY+XFxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25cIj5cXG5cdFx0XHQgICAgICAgICAgICAgICAgICBcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiem9jaWFsIHByaW1hcnkgbmV4dFwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+U2lnbiBJbjwvYnV0dG9uPlxcblx0XHRcdCAgICAgICAgICAgICAgICAgIFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzcGlubmVyXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+PC9idXR0b24+XFxuXHRcdFx0ICAgICAgICAgICAgICAgICAgXHQ8bGFiZWwgY2xhc3M9XCJjcmVhdGUtYWNjb3VudFwiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OiB7fVwiIGNsYXNzPVwic2lnbi11cFwiPlNpZ24gVXA8L2E+PHNwYW4gY2xhc3M9XCJkaXZpZGVyXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj4mbmJzcDvigKImbmJzcDs8L3NwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6IHt9XCIgY2xhc3M9XCJmb3Jnb3QtcGFzc1wiPkZvcmdvdCB5b3VyIHBhc3N3b3JkPzwvYT48L2xhYmVsPlxcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cdFx0ICAgICAgICAgICAgICBcdDwvZGl2Plxcblx0XHQgICAgICAgICAgICA8L2Zvcm0+XFxuXHQgICAgICAgICAgXHQ8L2Rpdj5cXG5cXG5cdCAgICAgICAgICBcdDxkaXYgY2xhc3M9XCJzaWdudXBcIj5cXG5cdFx0ICAgICAgICAgICAgPGZvcm0+XFxuXHRcdCAgICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+PC9kaXY+XFxuXHRcdCAgICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzPVwiZW1haWxQYXNzd29yZFwiPlxcblx0XHQgICAgICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzPVwiZW1haWxcIj5cXG5cdFx0ICAgICAgICAgICAgICAgICAgXHRcdDxpbnB1dCBuYW1lPVwiZW1haWxcIiBpZD1cInNpZ251cF9lYXN5X2VtYWlsXCIgdHlwZT1cImVtYWlsXCIgdmFsdWU9XCJcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdGl0bGU9XCJFbWFpbFwiPlxcblx0XHQgICAgICAgICAgICAgICAgXHQ8L2Rpdj5cXG5cdFx0ICAgICAgICAgICAgICAgIFx0PGRpdiBjbGFzcz1cInBhc3N3b3JkXCI+XFxuXHRcdCAgICAgICAgICAgICAgICAgIFx0XHQ8aW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJzaWdudXBfZWFzeV9wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPVwiXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJDcmVhdGUgYSBQYXNzd29yZFwiIHRpdGxlPVwiUGFzc3dvcmRcIj5cXG5cdFx0ICAgICAgICAgICAgICAgIFx0PC9kaXY+XFxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25cIj5cXG5cdFx0XHQgICAgICAgICAgICAgICAgICBcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiem9jaWFsIHByaW1hcnkgbmV4dFwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+U2lnbiBVcDwvYnV0dG9uPlxcblx0XHRcdCAgICAgICAgICAgICAgICAgIFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzcGlubmVyXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+PC9idXR0b24+XFxuXHRcdFx0ICAgICAgICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+PC9kaXY+XFxuXHRcdFx0ICAgICAgICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzPVwib3B0aW9uc1wiPlxcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgXHQ8YSBocmVmPVwiamF2YXNjcmlwdDoge31cIiBjbGFzcz1cImNlbnRlcmVkIGNhbmNlbFwiPkNhbmNlbDwvYT5cXG5cdFx0XHQgICAgICAgICAgICAgICAgICBcdDwvZGl2Plxcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cdFx0ICAgICAgICAgICAgICBcdDwvZGl2Plxcblx0XHQgICAgICAgICAgICA8L2Zvcm0+XFxuXHQgICAgICAgICAgXHQ8L2Rpdj5cXG5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyZXNldFwiPlxcblx0XHRcdFx0XHQ8Zm9ybSBpZD1cImNoYW5nZV9wYXNzd29yZFwiPlxcblx0XHRcdFx0XHQgIFx0PGRpdiBjbGFzcz1cImhlYWRlclwiPjwvZGl2Plxcblx0XHRcdFx0XHQgIFx0PGRpdiBjbGFzcz1cImVtYWlsUGFzc3dvcmRcIj5cXG5cdFx0XHRcdFx0ICAgIFx0PGRpdiBjbGFzcz1cImVtYWlsXCI+XFxuXHRcdFx0XHRcdCAgICAgIFx0XHQ8aW5wdXQgbmFtZT1cImVtYWlsXCIgaWQ9XCJyZXNldF9lYXN5X2VtYWlsXCIgdHlwZT1cImVtYWlsXCIgdmFsdWU9XCJcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdGl0bGU9XCJFbWFpbFwiPlxcblx0XHRcdFx0XHQgICAgXHQ8L2Rpdj5cXG5cdFx0XHRcdFx0ICAgIFx0PGRpdiBjbGFzcz1cInBhc3N3b3JkXCI+XFxuXHRcdFx0XHRcdCAgICAgIFx0XHQ8aW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJyZXNldF9lYXN5X3Bhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9XCJcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIk5ldyBQYXNzd29yZFwiIHRpdGxlPVwiTmV3IFBhc3N3b3JkXCI+XFxuXHRcdFx0XHRcdCAgICBcdDwvZGl2Plxcblx0XHRcdFx0XHQgICAgXHQ8ZGl2IGNsYXNzPVwicmVwZWF0UGFzc3dvcmRcIj5cXG5cdFx0XHRcdFx0ICAgICAgXHRcdDxpbnB1dCBuYW1lPVwicmVwZWF0X3Bhc3N3b3JkXCIgaWQ9XCJyZXNldF9lYXN5X3JlcGVhdF9wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPVwiXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJDb25maXJtIE5ldyBQYXNzd29yZFwiIHRpdGxlPVwiQ29uZmlybSBOZXcgUGFzc3dvcmRcIj5cXG5cdFx0XHRcdFx0ICAgIFx0PC9kaXY+XFxuXHRcdFx0XHRcdCAgICBcdDxkaXYgY2xhc3M9XCJhY3Rpb25cIj5cXG5cdFx0XHRcdFx0ICAgICAgXHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiem9jaWFsIHByaW1hcnkgbmV4dFwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+U2VuZDwvYnV0dG9uPlxcblx0XHRcdFx0XHQgICAgICBcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzcGlubmVyXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+PC9idXR0b24+XFxuXHRcdFx0XHRcdCAgICAgIFx0XHQ8ZGl2IGNsYXNzPVwib3B0aW9uc1wiPlxcblx0XHRcdFx0XHQgICAgICAgIFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDoge31cIiBjbGFzcz1cImNlbnRlcmVkIGNhbmNlbFwiPkNhbmNlbDwvYT5cXG5cdFx0XHRcdFx0ICAgICAgXHRcdDwvZGl2Plxcblx0XHRcdFx0XHQgICAgXHQ8L2Rpdj5cXG5cdFx0XHRcdFx0ICBcdDwvZGl2Plxcblx0XHRcdFx0XHQ8L2Zvcm0+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFxcbiAgICAgICAgICBcdFx0PGZvb3Rlcj5cXG4gICAgICAgICAgICBcdFx0PHNwYW4+UG93ZXJlZCBieSA8YSBocmVmPVwiaHR0cDovL2F1dGgwLmNvbVwiIHRhcmdldD1cIl9uZXdcIj5BdXRoMDwvYT48L3NwYW4+XFxuICAgICAgICAgIFx0XHQ8L2Zvb3Rlcj5cXG4gICAgICAgIFx0PC9kaXY+XFxuICAgICAgXHQ8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuJyk7IH0pKCk7XG59IFxucmV0dXJuIGJ1Zi5qb2luKCcnKTtcbn07IHJldHVybiBmdW5jdGlvbihsKSB7IHJldHVybiB0KGwpIH19KCkpIiwidmFyIGdsb2JhbD10eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge307dmFyIEF1dGgwICAgICA9IHJlcXVpcmUoJ2F1dGgwLWpzJyk7XG52YXIgcXdlcnkgICAgID0gcmVxdWlyZSgncXdlcnknKTtcbnZhciBib256byAgICAgPSByZXF1aXJlKCdib256bycpO1xudmFyIGJlYW4gICAgICA9IHJlcXVpcmUoJ2JlYW4nKTtcbnZhciB4dGVuZCAgICAgPSByZXF1aXJlKCd4dGVuZCcpO1xuXG52YXIgbG9naW5UbXBsID0gcmVxdWlyZSgnLi9odG1sL2xvZ2luLmh0bWwnKTtcblxudmFyICQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHJvb3QpIHtcbiAgcmV0dXJuIGJvbnpvKHF3ZXJ5KHNlbGVjdG9yLCByb290KSk7XG59O1xuXG5mdW5jdGlvbiBBdXRoMFdpZGdldCAob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQXV0aDBXaWRnZXQpKSB7XG4gICAgcmV0dXJuIG5ldyBBdXRoMFdpZGdldChvcHRpb25zKTtcbiAgfVxuXG4gIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLl9hdXRoMCA9IG5ldyBBdXRoMCh7XG4gICAgY2xpZW50SUQ6ICAgICB0aGlzLl9vcHRpb25zLmNsaWVudElELCBcbiAgICBjYWxsYmFja1VSTDogIHRoaXMuX29wdGlvbnMuY2FsbGJhY2tVUkwsXG4gICAgZG9tYWluOiAgICAgICB0aGlzLl9vcHRpb25zLmRvbWFpblxuICB9KTtcbiAgXG4gIHRoaXMuX3N0cmF0ZWdpZXMgPSB7XG4gICAgJ2dvb2dsZS1vcGVuaWQnOiB7IGNzczogJ2dvb2dsZScsIG5hbWU6ICdHb29nbGUgT3BlbklkJywgc29jaWFsOiB0cnVlIH0sXG4gICAgJ2dvb2dsZS1hcHBzJzogeyBjc3M6ICdnb29nbGUnLCBuYW1lOiAnR29vZ2xlIEFwcHMnLCBzb2NpYWw6IGZhbHNlIH0sXG4gICAgJ2dvb2dsZS1vYXV0aDInOiB7IGNzczogJ2dvb2dsZXBsdXMnLCBuYW1lOiAnR29vZ2xlJywgc29jaWFsOiB0cnVlIH0sXG4gICAgJ2ZhY2Vib29rJzogeyBjc3M6ICdmYWNlYm9vaycsIG5hbWU6ICdGYWNlYm9vaycsIHNvY2lhbDogdHJ1ZSB9LFxuICAgICd3aW5kb3dzbGl2ZSc6IHsgY3NzOiAnd2luZG93cycsIG5hbWU6ICdNaWNyb3NvZnQgQWNjb3VudCcsIHNvY2lhbDogdHJ1ZSB9LFxuICAgICdsaW5rZWRpbic6IHsgY3NzOiAnbGlua2VkaW4nLCBuYW1lOiAnTGlua2VkSW4nLCBzb2NpYWw6IHRydWUgfSxcbiAgICAnZ2l0aHViJzogeyBjc3M6ICdnaXRodWInLCBuYW1lOiAnR2l0SHViJywgc29jaWFsOiB0cnVlIH0sXG4gICAgJ3BheXBhbCc6IHsgY3NzOiAncGF5cGFsJywgbmFtZTogJ1BheVBhbCcsIHNvY2lhbDogdHJ1ZSB9LFxuICAgICd0d2l0dGVyJzogeyBjc3M6ICd0d2l0dGVyJywgbmFtZTogJ1R3aXR0ZXInLCBzb2NpYWw6IHRydWUgfSxcbiAgICAnYW1hem9uJzogeyBjc3M6ICdhbWF6b24nLCBuYW1lOiAnQW1hem9uJywgc29jaWFsOiB0cnVlIH0sXG4gICAgJ3Zrb250YWt0ZSc6IHsgY3NzOiAndmsnLCBuYW1lOiAndktvbnRha3RlJywgc29jaWFsOiB0cnVlIH0sXG4gICAgJ3lhbmRleCc6IHsgY3NzOiAneWFuZGV4JywgbmFtZTogJ1lhbmRleCcsIHNvY2lhbDogdHJ1ZSB9LFxuICAgICdvZmZpY2UzNjUnOiB7IGNzczogJ29mZmljZTM2NScsIG5hbWU6ICdPZmZpY2UzNjUnLCBzb2NpYWw6IGZhbHNlIH0sXG4gICAgJ3dhYWQnOiB7IGNzczogJ3dhYWQnLCBuYW1lOiAnV2luZG93cyBBenVyZSBBRCcsIHNvY2lhbDogZmFsc2UgfSxcbiAgICAnYWRmcyc6IHsgY3NzOiAnd2luZG93cycsIG5hbWU6ICdBREZTJywgc29jaWFsOiBmYWxzZSB9LFxuICAgICdzYW1scCc6IHsgY3NzOiAnZ3Vlc3QnLCBuYW1lOiAnU0FNTCcsIHNvY2lhbDogZmFsc2UgfSxcbiAgICAnbXNjcm0nOiB7IGNzczogJ2d1ZXN0JywgbmFtZTogJ0R5bmFtaWNzIENSTScsIHNvY2lhbDogZmFsc2UgfSxcbiAgICAnYWQnOiB7IGNzczogJ3dpbmRvd3MnLCBuYW1lOiAnQUQgLyBMREFQJywgc29jaWFsOiBmYWxzZSB9LFxuICAgICdjdXN0b20nOiB7IGNzczogJ2d1ZXN0JywgbmFtZTogJ0N1c3RvbSBBdXRoJywgc29jaWFsOiBmYWxzZSB9LFxuICAgICdhdXRoMCc6IHsgY3NzOiAnZ3Vlc3QnLCBuYW1lOiAnQXV0aDAnLCBzb2NpYWw6IGZhbHNlIH0sXG4gICAgJ2F1dGgwLWFkbGRhcCc6IHsgY3NzOiAnZ3Vlc3QnLCBuYW1lOiAnQUQvTERBUCcsIHNvY2lhbDogZmFsc2UgfSxcbiAgICAndGhpcnR5c2V2ZW5zaWduYWxzJzogeyBjc3M6ICd0aGlydHlzZXZlbnNpZ25hbHMnLCBuYW1lOiAnMzcgU2lnbmFscycsIHNvY2lhbDogdHJ1ZSB9LFxuICAgICdib3gnOiB7IGNzczogJ2JveCcsIG5hbWU6ICdCb3gnLCBzb2NpYWw6IHRydWUsIGltYWdlaWNvbjogdHJ1ZSB9LFxuICAgICdzYWxlc2ZvcmNlJzogeyBjc3M6ICdzYWxlc2ZvcmNlJywgbmFtZTogJ1NhbGVzZm9yY2UnLCBzb2NpYWw6IHRydWUgfSxcbiAgICAnZml0Yml0JzogeyBjc3M6ICdmaXRiaXQnLCBuYW1lOiAnRml0Yml0Jywgc29jaWFsOiB0cnVlIH1cbiAgfTtcbn1cblxuLy8gaGVscGVyIG1ldGhvZHNcbkF1dGgwV2lkZ2V0LnByb3RvdHlwZS5fcmVkaXJlY3QgPSBmdW5jdGlvbiAodXJsKSB7XG4gIGdsb2JhbC53aW5kb3cubG9jYXRpb24gPSB1cmw7XG59O1xuXG5BdXRoMFdpZGdldC5wcm90b3R5cGUuX3NldFRvcCA9IGZ1bmN0aW9uIChvblRvcCwgZWxlbWVudCkge1xuICBpZiAoIW9uVG9wKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGVsZW1lbnQuY3NzKHtcbiAgICAgICAgJ21hcmdpblRvcCc6ICctJyArIChlbGVtZW50Lm9mZnNldCgpLmhlaWdodCAvIDIpICsgJ3B4JyxcbiAgICAgICAgJ3RvcCc6ICc1MCUnXG4gICAgICB9KTtcbiAgICB9LCAxKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNzcyh7XG4gICAgICAnbWFyZ2luVG9wJzogJzJweCcsXG4gICAgICAndG9wJzogJzAnXG4gICAgfSk7XG4gIH1cbn07XG5cbkF1dGgwV2lkZ2V0LnByb3RvdHlwZS5fc2hvd0Vycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICQoJy5zaWduaW4gaDEnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAkKCcuc2lnbmluIC5zdWNjZXNzJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgJCgnLnNpZ25pbiAuZXJyb3InKS5odG1sKGVycm9yKS5jc3MoJ2Rpc3BsYXknLCAnJyk7XG59O1xuXG5BdXRoMFdpZGdldC5wcm90b3R5cGUuX3Nob3dTdWNjZXNzID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgJCgnLnNpZ25pbiBoMScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICQoJy5zaWduaW4gLmVycm9yJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgJCgnLnNpZ25pbiAuc3VjY2VzcycpLmh0bWwobWVzc2FnZSkuY3NzKCdkaXNwbGF5JywgJycpO1xufTtcblxuQXV0aDBXaWRnZXQucHJvdG90eXBlLl9pc0F1dGgwQ29ubiA9IGZ1bmN0aW9uIChzdHJhdGVneSkge1xuICByZXR1cm4gc3RyYXRlZ3kgPT09ICdhdXRoMCcgfHwgc3RyYXRlZ3kgPT09ICdhdXRoMC1hZGxkYXAnO1xufTtcblxuQXV0aDBXaWRnZXQucHJvdG90eXBlLl9zZXRUaXRsZSA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICQoJy5zaWduaW4gLmVycm9yJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgJCgnLnNpZ25pbiAuc3VjY2VzcycpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICQoJy5zaWduaW4gaDEnKS5odG1sKHRpdGxlKS5jc3MoJ2Rpc3BsYXknLCAnJyk7XG59O1xuXG5BdXRoMFdpZGdldC5wcm90b3R5cGUuX2lzQWRMZGFwQ29ubiA9IGZ1bmN0aW9uIChjb25uZWN0aW9uKSB7XG4gIHJldHVybiBjb25uZWN0aW9uID09PSAnYWRsZGFwJztcbn07XG5cbkF1dGgwV2lkZ2V0LnByb3RvdHlwZS5fYXJlVGhlcmVBbnlTb2NpYWxDb25uID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBzIGluIHRoaXMuX2NsaWVudC5zdHJhdGVnaWVzKSB7XG4gICAgaWYgKHRoaXMuX3N0cmF0ZWdpZXNbdGhpcy5fY2xpZW50LnN0cmF0ZWdpZXNbc10ubmFtZV0gJiYgdGhpcy5fc3RyYXRlZ2llc1t0aGlzLl9jbGllbnQuc3RyYXRlZ2llc1tzXS5uYW1lXS5zb2NpYWwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkF1dGgwV2lkZ2V0LnByb3RvdHlwZS5fYXJlVGhlcmVBbnlFbnRlcnByaXNlT3JEYkNvbm4gPSBmdW5jdGlvbigpIHtcbiAgZm9yICh2YXIgcyBpbiB0aGlzLl9jbGllbnQuc3RyYXRlZ2llcykge1xuICAgIGlmICh0aGlzLl9zdHJhdGVnaWVzW3RoaXMuX2NsaWVudC5zdHJhdGVnaWVzW3NdLm5hbWVdICYmIFxuICAgICAgICAhdGhpcy5fc3RyYXRlZ2llc1t0aGlzLl9jbGllbnQuc3RyYXRlZ2llc1tzXS5uYW1lXS5zb2NpYWwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkF1dGgwV2lkZ2V0LnByb3RvdHlwZS5faXNFbnRlcnByaXNlQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChlbWFpbCwgb3V0cHV0KSB7XG4gIHZhciBlbWFpbE0gPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xuICAgICAgICAgICAgICAgICAgICAuZXhlYyhlbWFpbC50b0xvd2VyQ2FzZSgpKTtcblxuICBmb3IgKHZhciBzIGluIHRoaXMuX2NsaWVudC5zdHJhdGVnaWVzKSB7XG4gICAgdmFyIHN0cmF0ZWd5ID0gdGhpcy5fY2xpZW50LnN0cmF0ZWdpZXNbc107XG4gICAgaWYgKHRoaXMuX2lzQXV0aDBDb25uKHN0cmF0ZWd5Lm5hbWUpKSBjb250aW51ZTtcblxuICAgIGZvciAodmFyIGMgaW4gc3RyYXRlZ3kuY29ubmVjdGlvbnMpIHtcbiAgICAgIGlmIChlbWFpbE0gJiYgZW1haWxNLnNsaWNlKC0yKVswXSA9PSBzdHJhdGVneS5jb25uZWN0aW9uc1tjXS5kb21haW4pIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IHx8wqB7fTtcbiAgICAgICAgb3V0cHV0LmRvbWFpbiA9IHN0cmF0ZWd5LmNvbm5lY3Rpb25zW2NdLmRvbWFpbjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuQXV0aDBXaWRnZXQucHJvdG90eXBlLl9pc0VudGVycHJpc2VTdHJhdGVneSA9IGZ1bmN0aW9uIChzdHJhdGVneSkgeyBcbiAgZm9yICh2YXIgcyBpbiB0aGlzLl9zdHJhdGVnaWVzKSB7XG4gICAgaWYgKHMgPT09IHN0cmF0ZWd5ICYmICF0aGlzLl9zdHJhdGVnaWVzW3NdLnNvY2lhbCkgeyBcbiAgICAgIHJldHVybiB0cnVlOyBcbiAgICB9IFxuICB9IFxuXG4gIHJldHVybiBmYWxzZTsgXG59O1xuXG5BdXRoMFdpZGdldC5wcm90b3R5cGUuX2dldENvbmZpZ3VyZWRTdHJhdGVneSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAodmFyIHMgaW4gdGhpcy5fY2xpZW50LnN0cmF0ZWdpZXMpIHtcbiAgICBpZiAodGhpcy5fY2xpZW50LnN0cmF0ZWdpZXNbc10gJiYgdGhpcy5fY2xpZW50LnN0cmF0ZWdpZXNbc10ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudC5zdHJhdGVnaWVzW3NdO1xuICAgIH1cbiAgfVxufTtcblxuQXV0aDBXaWRnZXQucHJvdG90eXBlLl9nZXRBdXRoMENvbm5lY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgLy8gaWYgc3BlY2lmaWVkLCB1c2UgaXQsIG90aGVyd2lzZSByZXR1cm4gZmlyc3RcbiAgaWYgKHRoaXMuX3NpZ25pbk9wdGlvbnNbJ3VzZXJQd2RDb25uZWN0aW9uTmFtZSddKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLl9hdXRoMFN0cmF0ZWd5LmNvbm5lY3Rpb25zKSB7XG4gICAgICBpZiAodGhpcy5fYXV0aDBTdHJhdGVneS5jb25uZWN0aW9uc1tpXS5uYW1lID09PSB0aGlzLl9zaWduaW5PcHRpb25zWyd1c2VyUHdkQ29ubmVjdGlvbk5hbWUnXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aDBTdHJhdGVneS5jb25uZWN0aW9uc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5fYXV0aDBTdHJhdGVneSA/IHRoaXMuX2F1dGgwU3RyYXRlZ3kuY29ubmVjdGlvbnNbMF0gOiBudWxsO1xufTtcblxuQXV0aDBXaWRnZXQucHJvdG90eXBlLl9zaG93T3JIaWRlUGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtYWlsRmllbGQgPSAkKCcubm90bG9nZ2VkaW4gLmVtYWlsIGlucHV0Jyk7XG4gIHZhciBwd2RGaWVsZCAgPSAkKCcubm90bG9nZ2VkaW4gLnBhc3N3b3JkIGlucHV0JykuZmlyc3QoKTtcbiAgXG4gIHZhciBpc0VudGVycHJpc2VDb25uZWN0aW9uID0gdGhpcy5faXNFbnRlcnByaXNlQ29ubmVjdGlvbihtYWlsRmllbGQudmFsKCkpO1xuXG4gIGlmIChpc0VudGVycHJpc2VDb25uZWN0aW9uKSB7XG4gICAgcHdkRmllbGQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICBwd2RGaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICcnKTtcbiAgICBwd2RGaWVsZC5yZW1vdmVBdHRyKCdyZXF1aXJlZCcpO1xuICB9IGVsc2Uge1xuICAgIHB3ZEZpZWxkLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgcHdkRmllbGQuYXR0cigncmVxdWlyZWQnLCB0cnVlKTtcbiAgfVxufTtcblxuQXV0aDBXaWRnZXQucHJvdG90eXBlLl9oaWRlU2lnbkluID0gZnVuY3Rpb24gKGNiKSB7XG4gICQoJ2Rpdi5vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ21vZGUtc2lnbmluJyk7XG4gICAgaWYgKGNiKSBjYigpO1xuICB9LCA1MDApO1xufTtcblxuQXV0aDBXaWRnZXQucHJvdG90eXBlLl9nZXRBY3RpdmVMb2dpblZpZXcgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2hhc0xvZ2dlZEluQmVmb3JlID8gJCgnLmxvZ2dlZGluJykgOiAkKCcubm90bG9nZ2VkaW4nKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbkF1dGgwV2lkZ2V0LnByb3RvdHlwZS5fdG9nZ2xlU3Bpbm5lciA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgY29udGFpbmVyID0gY29udGFpbmVyIHx8IHRoaXMuX2dldEFjdGl2ZUxvZ2luVmlldygpO1xuICB2YXIgc3Bpbm5lciA9ICQoJy5zcGlubmVyJywgY29udGFpbmVyKTtcbiAgdmFyIHNpZ25pbiA9ICQoJy56b2NpYWwucHJpbWFyeScsIGNvbnRhaW5lcik7XG5cbiAgc3Bpbm5lci5jc3MoJ2Rpc3BsYXknLCBzcGlubmVyLmNzcygnZGlzcGxheScpID09PSAnbm9uZScgPyAnJyA6ICdub25lJyk7XG4gIHNpZ25pbi5jc3MoJ2Rpc3BsYXknLCBzaWduaW4uY3NzKCdkaXNwbGF5JykgPT09ICdub25lJyA/ICcnIDogJ25vbmUnKTtcbn07XG5cbkF1dGgwV2lkZ2V0LnByb3RvdHlwZS5fc2V0TG9naW5WaWV3ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB0aGlzLl9oYXNMb2dnZWRJbkJlZm9yZSA9IG9wdGlvbnMuaXNSZXR1cm5pbmdVc2VyO1xuICB0aGlzLl9zZXRUaXRsZSh0aGlzLl9zaWduaW5PcHRpb25zWyd0aXRsZSddKTtcblxuICAkKCcubG9nZ2VkaW4nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAkKCcubm90bG9nZ2VkaW4nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAkKCcuc2lnbnVwJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgJCgnLnJlc2V0JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuICAkKCcubG9nZ2VkaW4nKS5jc3MoJ2Rpc3BsYXknLCBvcHRpb25zLmlzUmV0dXJuaW5nVXNlciA/ICcnIDogJ25vbmUnKTtcbiAgJCgnLm5vdGxvZ2dlZGluJykuY3NzKCdkaXNwbGF5Jywgb3B0aW9ucy5pc1JldHVybmluZ1VzZXIgPyAnbm9uZScgOiAnJyk7XG5cbiAgdGhpcy5fc2V0VG9wKHRoaXMuX3NpZ25pbk9wdGlvbnMudG9wLCAkKCcuc2lnbmluIGRpdi5wYW5lbC5vbmVzdGVwJykpO1xuICAkKCcubm90bG9nZ2VkaW4gLmVtYWlsIGlucHV0JykuZmlyc3QoKS5mb2N1cygpO1xufTtcblxuQXV0aDBXaWRnZXQucHJvdG90eXBlLl9zaG93TG9nZ2VkSW5FeHBlcmllbmNlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHN0cmF0ZWd5ID0gdGhpcy5fc3NvRGF0YS5sYXN0VXNlZENvbm5lY3Rpb24uc3RyYXRlZ3k7XG4gIHRoaXMuX3NldExvZ2luVmlldyh7IGlzUmV0dXJuaW5nVXNlcjogISFzdHJhdGVneSB9KTtcblxuICBpZiAoIXN0cmF0ZWd5KSByZXR1cm47XG5cbiAgdmFyIGxvZ2luVmlldyA9IHRoaXMuX2dldEFjdGl2ZUxvZ2luVmlldygpO1xuICBiZWFuLm9uKCQoJ2Zvcm0nLCBsb2dpblZpZXcpWzBdLCAnc3VibWl0JywgdGhpcy5fc2lnbkluRW50ZXJwcmlzZSk7XG4gIFxuICB2YXIgYnV0dG9uO1xuICBpZiAoc3RyYXRlZ3kgIT09ICdhdXRoMCcpIHtcbiAgICBidXR0b24gPSBib256byhib256by5jcmVhdGUoJzxzcGFuPjwvc3Bhbj4nKSlcbiAgICAgIC5hdHRyKCd0YWJpbmRleCcsIDApXG4gICAgICAuYXR0cignZGF0YS1zdHJhdGVneScsIHN0cmF0ZWd5KVxuICAgICAgLmF0dHIoJ3RpdGxlJywgdGhpcy5fc3RyYXRlZ2llc1tzdHJhdGVneV0ubmFtZSlcbiAgICAgIC5hZGRDbGFzcygnem9jaWFsJykuYWRkQ2xhc3MoJ2Jsb2NrJylcbiAgICAgIC5hZGRDbGFzcyh0aGlzLl9zdHJhdGVnaWVzW3N0cmF0ZWd5XS5jc3MpXG4gICAgICAuYWRkQ2xhc3ModGhpcy5fc3RyYXRlZ2llc1tzdHJhdGVneV0uaW1hZ2VpY29uID8gJ2ltYWdlLWljb24nIDogJycpXG4gICAgICAuaHRtbCh0aGlzLl9zdHJhdGVnaWVzW3N0cmF0ZWd5XS5uYW1lKTtcbiAgICBcbiAgICBiZWFuLm9uKGJ1dHRvblswXSwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHsgc2VsZi5fc2lnbkluU29jaWFsKGUudGFyZ2V0KTsgfSk7XG5cbiAgICAkKCcuc3RyYXRlZ3kgc3BhbicsIGxvZ2luVmlldykuZWFjaChmdW5jdGlvbiAoZWwpIHsgaWYgKGVsKSBlbC5yZW1vdmUoKTsgfSk7XG4gICAgJCgnLnN0cmF0ZWd5JywgbG9naW5WaWV3KS5hcHBlbmQoYnV0dG9uKTtcbiAgfVxuXG4gICQoJy5hbGwnLCBsb2dpblZpZXcpLmh0bWwodGhpcy5fc2lnbmluT3B0aW9uc1snYWxsQnV0dG9uVGVtcGxhdGUnXSk7XG5cbiAgYmVhbi5vbigkKCcuYWxsJywgbG9naW5WaWV3KVswXSwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuX3NldExvZ2luVmlldyh7IGlzUmV0dXJuaW5nVXNlcjogZmFsc2UgfSk7XG4gIH0pO1xuXG4gIGlmICh0aGlzLl9zc29EYXRhLmxhc3RVc2VkVXNlcm5hbWUpIHtcbiAgICBpZiAoc3RyYXRlZ3kgPT09ICdhdXRoMCcpIHtcbiAgICAgICQoJy5lbWFpbC1yZWFkb25seScsIGxvZ2luVmlldykuaHRtbCh0aGlzLl9zc29EYXRhLmxhc3RVc2VkVXNlcm5hbWUpOyBcbiAgICAgICQoJy5lbWFpbCBpbnB1dCcsIGxvZ2luVmlldykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICQoJy5lbWFpbFBhc3N3b3JkJywgbG9naW5WaWV3KS5jc3MoJ2Rpc3BsYXknLCAnJyk7XG4gICAgfSBcbiAgICBlbHNlIGlmICh0aGlzLl9pc0VudGVycHJpc2VTdHJhdGVneShzdHJhdGVneSkpIHtcbiAgICAgIGJ1dHRvbi5odG1sKF9zc29EYXRhLmxhc3RVc2VkVXNlcm5hbWUgfHwgdGhpcy5fc3RyYXRlZ2llc1tzdHJhdGVneV0ubmFtZSlcbiAgICAgICAgICAgIC5hdHRyKCd0aXRsZScsIF9zc29EYXRhLmxhc3RVc2VkVXNlcm5hbWUgfHwgdGhpcy5fc3RyYXRlZ2llc1tzdHJhdGVneV0ubmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBzaWduIGluIG1ldGhvZHNcbkF1dGgwV2lkZ2V0LnByb3RvdHlwZS5fc2lnbkluU29jaWFsID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICB2YXIgc3RyYXRlZ3lOYW1lID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyB0YXJnZXQgOiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0cmF0ZWd5Jyk7XG4gIHZhciBzdHJhdGVneSA9IHRoaXMuX2dldENvbmZpZ3VyZWRTdHJhdGVneShzdHJhdGVneU5hbWUpO1xuXG4gIGlmIChzdHJhdGVneSkge1xuICAgIHRoaXMuX2F1dGgwLmxvZ2luKHtcbiAgICAgIGNvbm5lY3Rpb246IHN0cmF0ZWd5LmNvbm5lY3Rpb25zWzBdLm5hbWVcbiAgICB9KTtcbiAgfVxufTtcblxuQXV0aDBXaWRnZXQucHJvdG90eXBlLl9zaWduSW5FbnRlcnByaXNlID0gZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIHZhciBjb250YWluZXIgPSB0aGlzLl9nZXRBY3RpdmVMb2dpblZpZXcoKTtcbiAgdmFyIGZvcm0gPSAkKCdmb3JtJywgY29udGFpbmVyKTtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcblxuICB2YXIgZW1haWxEID0gJCgnLmVtYWlsJywgZm9ybSksXG4gICAgICBlbWFpbEUgPSAkKCdpbnB1dFtuYW1lPWVtYWlsXScsIGZvcm0pLFxuICAgICAgZW1haWxNID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8uZXhlYyhlbWFpbEUudmFsKCkudG9Mb3dlckNhc2UoKSksXG4gICAgICBlbWFpbFAgPSAvXlxccyokLy50ZXN0KGVtYWlsRS52YWwoKSksXG4gICAgICBkb21haW4sIHVybCwgZW1haWwgPSBudWxsLCBzdHJhdGVneTtcblxuICBmb3IgKHZhciBzIGluIHRoaXMuX2NsaWVudC5zdHJhdGVnaWVzKSB7XG4gICAgc3RyYXRlZ3kgPSB0aGlzLl9jbGllbnQuc3RyYXRlZ2llc1tzXTtcblxuICAgIGlmICh0aGlzLl9pc0F1dGgwQ29ubihzdHJhdGVneS5uYW1lKSkgY29udGludWU7XG5cbiAgICBmb3IgKHZhciBjIGluIHN0cmF0ZWd5LmNvbm5lY3Rpb25zKSB7XG4gICAgICBpZighZW1haWxQICYmIGVtYWlsTSAmJiBlbWFpbE0uc2xpY2UoLTIpWzBdID09IHN0cmF0ZWd5LmNvbm5lY3Rpb25zW2NdLmRvbWFpbikge1xuICAgICAgICBkb21haW4gPSBzdHJhdGVneS5jb25uZWN0aW9uc1tjXS5kb21haW47XG4gICAgICAgIHVybCA9IHN0cmF0ZWd5LmNvbm5lY3Rpb25zW2NdLnVybDtcbiAgICAgICAgZW1haWwgPSBlbWFpbEUudmFsKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkb21haW4pIGJyZWFrO1xuICB9XG5cbiAgaWYgKGVtYWlsUCkge1xuICAgIC8vIF9zaG93RXJyb3IoZ2xvYmFsLnRsaXRlLmZpbmQoc2VsZi5fc2lnbkluT3B0aW9uc1snc3RyYXRlZ3lFbWFpbEVtcHR5J10pKTtcbiAgfSBcbiAgZWxzZSBpZiAoIWVtYWlsTSkge1xuICAgIC8vIF9zaG93RXJyb3IoZ2xvYmFsLnRsaXRlLmZpbmQoc2VsZi5fc2lnbkluT3B0aW9uc1snc3RyYXRlZ3lFbWFpbEludmFsaWQnXSkpO1xuICB9IFxuICBlbHNlIGlmICghZG9tYWluKSB7XG4gICAgaWYgKHRoaXMuX2F1dGgwU3RyYXRlZ3kpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduSW5XaXRoQXV0aDAoZW1haWxFLnZhbCgpKTtcbiAgICB9XG5cbiAgICBpZiAoZW1haWxNICYmIGVtYWlsTS5zbGljZSgtMilbMF0gPT09ICdnbWFpbC5jb20nKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2lnbkluU29jaWFsKCdnb29nbGUtb2F1dGgyJyk7XG4gICAgfVxuXG4gICAgLy8gX3Nob3dFcnJvcihnbG9iYWwudGxpdGUuZmluZChzZWxmLl9zaWduSW5PcHRpb25zWydzdHJhdGVneURvbWFpbkludmFsaWQnXSwgeyBkb21haW46IGVtYWlsTSAmJiBlbWFpbE0uc2xpY2UoLTIpWzBdIH0pKTtcbiAgfVxuXG4gIHZhbGlkICY9ICghZG9tYWluICYmICFlbWFpbEQuYWRkQ2xhc3MoJ2ludmFsaWQnKSkgfHwgKCEhZG9tYWluICYmICEhZW1haWxELnJlbW92ZUNsYXNzKCdpbnZhbGlkJykpO1xuXG4gIGlmICh2YWxpZCkge1xuICAgIHRoaXMuX3JlZGlyZWN0KHVybCk7XG4gIH1cbn07XG5cbkF1dGgwV2lkZ2V0LnByb3RvdHlwZS5fc2lnbkluV2l0aEF1dGgwID0gZnVuY3Rpb24gKHVzZXJOYW1lLCBzaWduSW5QYXNzd29yZCkge1xuICB0aGlzLl90b2dnbGVTcGlubmVyKCk7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgY29udGFpbmVyID0gdGhpcy5fZ2V0QWN0aXZlTG9naW5WaWV3KCk7XG4gIHZhciBjb25uZWN0aW9uICA9IHRoaXMuX2dldEF1dGgwQ29ubmVjdGlvbigpO1xuICBcbiAgdmFyIGxvZ2luT3B0aW9ucyA9IHtcbiAgICBjb25uZWN0aW9uOiBjb25uZWN0aW9uLm5hbWUsXG4gICAgdXNlcm5hbWU6IHRoaXMuX2lzQWRMZGFwQ29ubihjb25uZWN0aW9uLm5hbWUpID8gdXNlck5hbWUucmVwbGFjZSgnQCcgKyBjb25uZWN0aW9uLmRvbWFpbiwgJycpIDogdXNlck5hbWUsXG4gICAgcGFzc3dvcmQ6IHNpZ25JblBhc3N3b3JkIHx8wqAkKCcucGFzc3dvcmQgaW5wdXQnLCBjb250YWluZXIpLnZhbCgpXG4gIH07XG5cbiAgZm9yICh2YXIgayBpbiB0aGlzLl9hdXRoMENvbm5lY3Rpb25QYXJhbXMpIHtcbiAgICBsb2dpbk9wdGlvbnNba10gPSB0aGlzLl9hdXRoMENvbm5lY3Rpb25QYXJhbXNba107XG4gIH1cblxuICB0aGlzLl9hdXRoMC5sb2dpbihsb2dpbk9wdGlvbnMsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyKSBhbGVydChlcnIpO1xuICAgIHNlbGYuX3RvZ2dsZVNwaW5uZXIoKTtcbiAgfSk7XG59O1xuXG4vLyBpbml0aWFsaXplXG5BdXRoMFdpZGdldC5wcm90b3R5cGUuX2luaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRPRE86IHN1cHBvcnQgY3NzIG9wdGlvbiBmb3Igbm9uIGZyZWUgc3Vic2NyaXB0aW9uc1xuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgYmVhbi5vbigkKCcucG9wdXAgLnBhbmVsLm9uZXN0ZXAgYS5jbG9zZScpWzBdLCAnY2xpY2snLCB0aGlzLl9oaWRlU2lnbkluKTtcbiAgYmVhbi5vbigkKCcucG9wdXAgLnBhbmVsLm9uZXN0ZXAgLm5vdGxvZ2dlZGluIGZvcm0nKVswXSwgJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7IHNlbGYuX3NpZ25JbkVudGVycHJpc2UoZSk7IH0pO1xuICBiZWFuLm9uKCQoJ2h0bWwnKVswXSwgJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoJCgnaHRtbCcpLmhhc0NsYXNzKCdtb2RlLXNpZ25pbicpKSB7XG4gICAgICBpZiAoKGUud2hpY2ggPT0gMjcgfHwgZS5rZXljb2RlID09IDI3KSAmJiAhc2VsZi5fc2lnbmluT3B0aW9ucy5zdGFuZGFsb25lKSB7XG4gICAgICAgIHNlbGYuX2hpZGVTaWduSW4oKTsgLy8gY2xvc2UgcG9wdXAgd2l0aCBFU0Mga2V5XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBsb2FkIHNvY2lhbCBidXR0b25zXG4gIHZhciBsaXN0ID0gJCgnLnBvcHVwIC5wYW5lbC5vbmVzdGVwIC5pY29ubGlzdCcpO1xuICBmb3IgKHZhciBzIGluIHRoaXMuX2NsaWVudC5zdHJhdGVnaWVzKSB7XG4gICAgdmFyIHN0cmF0ZWd5ID0gdGhpcy5fY2xpZW50LnN0cmF0ZWdpZXNbc107XG5cbiAgICBpZiAodGhpcy5faXNBdXRoMENvbm4oc3RyYXRlZ3kubmFtZSkgJiYgc3RyYXRlZ3kuY29ubmVjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fYXV0aDBTdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgICAgJCgnLmNyZWF0ZS1hY2NvdW50LCAucGFzc3dvcmQnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgICAgYmVhbi5vbigkKCcubm90bG9nZ2VkaW4gLmVtYWlsIGlucHV0JylbMF0sICdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7IHNlbGYuX3Nob3dPckhpZGVQYXNzd29yZChlKTsgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3N0cmF0ZWdpZXNbc3RyYXRlZ3kubmFtZV0gJiYgdGhpcy5fc3RyYXRlZ2llc1tzdHJhdGVneS5uYW1lXS5zb2NpYWwpIHtcbiAgICAgIHZhciBidXR0b24gPSBib256byhib256by5jcmVhdGUoJzxzcGFuPjwvc3Bhbj4nKSlcbiAgICAgICAgLmF0dHIoJ3RhYmluZGV4JywgMClcbiAgICAgICAgLmF0dHIoJ2RhdGEtc3RyYXRlZ3knLCBzdHJhdGVneS5uYW1lKVxuICAgICAgICAuYXR0cigndGl0bGUnLCB0aGlzLl9zdHJhdGVnaWVzW3N0cmF0ZWd5Lm5hbWVdLm5hbWUpXG4gICAgICAgIC5hZGRDbGFzcygnem9jaWFsJykuYWRkQ2xhc3MoJ2ljb24nKVxuICAgICAgICAuYWRkQ2xhc3ModGhpcy5fc3RyYXRlZ2llc1tzdHJhdGVneS5uYW1lXS5jc3MpXG4gICAgICAgIC5hZGRDbGFzcyh0aGlzLl9zdHJhdGVnaWVzW3N0cmF0ZWd5Lm5hbWVdLmltYWdlaWNvbiA/ICdpbWFnZS1pY29uJyA6ICcnKVxuICAgICAgICAuaHRtbCh0aGlzLl9zdHJhdGVnaWVzW3N0cmF0ZWd5Lm5hbWVdLm5hbWUpO1xuXG4gICAgICBsaXN0LmFwcGVuZChidXR0b24pO1xuICAgICAgbGlzdC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgICAgJCgnLnBvcHVwIC5wYW5lbC5vbmVzdGVwIC5zZXBhcmF0b3InKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICB9XG4gIH1cblxuICAkKCcucG9wdXAgLnBhbmVsLm9uZXN0ZXAgLmljb25saXN0IHNwYW4nKS5lYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICBiZWFuLm9uKGJ1dHRvbiwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHNlbGYuX3NpZ25JblNvY2lhbChlLnRhcmdldCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHRoaXMuX3Nob3dTaWduSW4oKTtcbn07XG5cbkF1dGgwV2lkZ2V0LnByb3RvdHlwZS5fc2hvd1NpZ25JbiA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnaHRtbCcpLmFkZENsYXNzKCdtb2RlLXNpZ25pbicpO1xuXG4gIC8vIGlmIG5vIHNvY2lhbCBjb25uZWN0aW9ucyBhbmQgb25lIGVudGVycHJpc2UgY29ubmVjdGlvbiBvbmx5LCByZWRpcmVjdFxuICBpZiAoIXRoaXMuX2FyZVRoZXJlQW55U29jaWFsQ29ubigpICYmIFxuICAgIHRoaXMuX2NsaWVudC5zdHJhdGVnaWVzLmxlbmd0aCA9PT0gMSAmJlxuICAgIHRoaXMuX2NsaWVudC5zdHJhdGVnaWVzWzBdLm5hbWUgIT09ICdhdXRoMCcgJiZcbiAgICB0aGlzLl9jbGllbnQuc3RyYXRlZ2llc1swXS5jb25uZWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICBcbiAgICB0aGlzLl9yZWRpcmVjdChfY2xpZW50LnN0cmF0ZWdpZXNbMF0uY29ubmVjdGlvbnNbMF0udXJsKTtcbiAgfVxuXG4gIC8vIGxhYmVscyB0ZXh0XG4gIHZhciBvcHRpb25zID0gdGhpcy5fc2lnbmluT3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9uc1snb25lc3RlcCddID0gdHlwZW9mIG9wdGlvbnNbJ29uZXN0ZXAnXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWydvbmVzdGVwJ10gOiBmYWxzZTtcbiAgb3B0aW9uc1sndG9wJ10gPSBvcHRpb25zWyd0b3AnXSB8fCBmYWxzZTtcbiAgb3B0aW9uc1sndGl0bGUnXSA9IG9wdGlvbnNbJ3RpdGxlJ10gfHwgJ1NpZ24gSW4nO1xuICBvcHRpb25zWydzdHJhdGVneUJ1dHRvblRlbXBsYXRlJ10gPSBvcHRpb25zWydzdHJhdGVneUJ1dHRvblRlbXBsYXRlJ10gfHwgXCJ7bmFtZX1cIjtcbiAgb3B0aW9uc1snYWxsQnV0dG9uVGVtcGxhdGUnXSA9IG9wdGlvbnNbJ2FsbEJ1dHRvblRlbXBsYXRlJ10gfHwgXCJTaG93IGFsbFwiO1xuICBvcHRpb25zWydzdHJhdGVneUJhY2snXSA9IG9wdGlvbnNbJ3N0cmF0ZWd5QmFjayddIHx8IFwiQmFja1wiO1xuICBvcHRpb25zWydzdHJhdGVneUVtYWlsTGFiZWwnXSA9IG9wdGlvbnNbJ3N0cmF0ZWd5RW1haWxMYWJlbCddIHx8IFwiRW1haWw6XCI7XG4gIG9wdGlvbnNbJ3N0cmF0ZWd5RW1haWxFbXB0eSddID0gb3B0aW9uc1snc3RyYXRlZ3lFbWFpbEVtcHR5J10gfHwgXCJUaGUgZW1haWwgaXMgZW1wdHkuXCI7XG4gIG9wdGlvbnNbJ3N0cmF0ZWd5RW1haWxJbnZhbGlkJ10gPSBvcHRpb25zWydzdHJhdGVneUVtYWlsSW52YWxpZCddIHx8IFwiVGhlIGVtYWlsIGlzIGludmFsaWQuXCI7XG5cbiAgb3B0aW9uc1snaWNvbiddID0gb3B0aW9uc1snaWNvbiddIHx8IFwiaW1nL2xvZ28tMzIucG5nXCI7XG4gIG9wdGlvbnNbJ3Nob3dJY29uJ10gPSB0eXBlb2Ygb3B0aW9uc1snc2hvd0ljb24nXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWydzaG93SWNvbiddIDogZmFsc2U7XG4gIG9wdGlvbnNbJ3Nob3dTaWdudXAnXSA9IHR5cGVvZiBvcHRpb25zWydzaG93U2lnbnVwJ10gIT09ICd1bmRlZmluZWQnID8gb3B0aW9uc1snc2hvd1NpZ251cCddIDogdHJ1ZTtcbiAgb3B0aW9uc1snc2hvd0ZvcmdvdCddID0gdHlwZW9mIG9wdGlvbnNbJ3Nob3dGb3Jnb3QnXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWydzaG93Rm9yZ290J10gOiB0cnVlO1xuICBvcHRpb25zWydzaWdudXBUZXh0J10gPSBvcHRpb25zWydzaWdudXBUZXh0J10gfHwgJ1NpZ24gVXAnO1xuICBvcHRpb25zWydmb3Jnb3RUZXh0J10gPSBvcHRpb25zWydmb3Jnb3RUZXh0J10gfHwgJ0ZvcmdvdCB5b3VyIHBhc3N3b3JkPyc7XG4gIG9wdGlvbnNbJ3VzZUFwcFNpZ25JbkNhbGxiYWNrJ10gPSB0eXBlb2Ygb3B0aW9uc1sndXNlQXBwU2lnbkluQ2FsbGJhY2snXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWyd1c2VBcHBTaWduSW5DYWxsYmFjayddIDogZmFsc2U7XG4gIG9wdGlvbnNbJ3NpZ25JbkJ1dHRvblRleHQnXSA9IG9wdGlvbnNbJ3NpZ25JbkJ1dHRvblRleHQnXSB8fCAnU2lnbiBJbic7XG4gIG9wdGlvbnNbJ2VtYWlsUGxhY2Vob2xkZXInXSA9IG9wdGlvbnNbJ2VtYWlsUGxhY2Vob2xkZXInXSB8fCAnRW1haWwnO1xuICBvcHRpb25zWydwYXNzd29yZFBsYWNlaG9sZGVyJ10gPSBvcHRpb25zWydwYXNzd29yZFBsYWNlaG9sZGVyJ10gfHwgJ1Bhc3N3b3JkJztcbiAgb3B0aW9uc1snc2VwYXJhdG9yVGV4dCddID0gb3B0aW9uc1snc2VwYXJhdG9yVGV4dCddIHx8ICdvcic7XG4gIG9wdGlvbnNbJ3NlcnZlckVycm9yVGV4dCddID0gb3B0aW9uc1snc2VydmVyRXJyb3JUZXh0J10gfHwgJ1RoZXJlIHdhcyBhbiBlcnJvciBwcm9jZXNzaW5nIHRoZSBzaWduIGluLic7XG4gIG9wdGlvbnNbJ3Nob3dFbWFpbCddID0gdHlwZW9mIG9wdGlvbnNbJ3Nob3dFbWFpbCddICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnNbJ3Nob3dFbWFpbCddIDogdHJ1ZTtcbiAgb3B0aW9uc1snc2hvd1Bhc3N3b3JkJ10gPSB0eXBlb2Ygb3B0aW9uc1snc2hvd1Bhc3N3b3JkJ10gIT09ICd1bmRlZmluZWQnID8gb3B0aW9uc1snc2hvd1Bhc3N3b3JkJ10gOiB0cnVlO1xuICBvcHRpb25zWydzb2NpYWxCaWdCdXR0b25zJ10gPSB0eXBlb2Ygb3B0aW9uc1snc29jaWFsQmlnQnV0dG9ucyddICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnNbJ3NvY2lhbEJpZ0J1dHRvbnMnXSA6ICF0aGlzLl9hcmVUaGVyZUFueUVudGVycHJpc2VPckRiQ29ubigpO1xuICBvcHRpb25zWydlbmFibGVSZXR1cm5Vc2VyRXhwZXJpZW5jZSddID0gdHlwZW9mIG9wdGlvbnNbJ2VuYWJsZVJldHVyblVzZXJFeHBlcmllbmNlJ10gIT09ICd1bmRlZmluZWQnID8gb3B0aW9uc1snZW5hYmxlUmV0dXJuVXNlckV4cGVyaWVuY2UnXSA6IHRydWU7XG4gIG9wdGlvbnNbJ3JldHVyblVzZXJMYWJlbCddID0gb3B0aW9uc1sncmV0dXJuVXNlckxhYmVsJ10gfHwgJ0xhc3QgdGltZSB5b3Ugc2lnbmVkIGluIHVzaW5nLi4uJztcbiAgb3B0aW9uc1snd3JvbmdFbWFpbFBhc3N3b3JkRXJyb3JUZXh0J10gPSBvcHRpb25zWyd3cm9uZ0VtYWlsUGFzc3dvcmRFcnJvclRleHQnXSB8fCAnV3JvbmcgZW1haWwgb3IgcGFzc3dvcmQuJztcblxuICAvLyB0aGVtZVxuICBpZiAob3B0aW9ucy50aGVtZSkge1xuICAgICQoJ2h0bWwnKS5hZGRDbGFzcygndGhlbWUtJyArIG9wdGlvbnMudGhlbWUpO1xuICB9XG5cbiAgJCgnLnBhbmVsIGEuY2xvc2UnKS5jc3MoJ2Rpc3BsYXknLCBvcHRpb25zLnN0YW5kYWxvbmUgPyAnbm9uZScgOiAnYmxvY2snKTtcblxuICAvLyBzaG93IGljb25cbiAgaWYgKG9wdGlvbnMuc2hvd0ljb24pIHtcbiAgICAkKCcucGFuZWwgLmltYWdlIGltZycpLmF0dHIoJ3NyYycsIG9wdGlvbnMuaWNvbik7XG4gICAgJCgnLnBhbmVsIC5pbWFnZScpLmNzcygnZGlzcGxheScsIG9wdGlvbnMuc2hvd0ljb24gPyAnYmxvY2snIDogJ25vbmUnKTtcbiAgfVxuXG4gIC8vIGhpZGUgZGl2aWRlciBkb3QgaWYgdGhlcmUgYXJlIG9uZSBvZiB0d29cbiAgJCgnLnBhbmVsIC5jcmVhdGUtYWNjb3VudCAuZGl2aWRlcicpXG4gICAgLmNzcygnZGlzcGxheScsIG9wdGlvbnMuc2hvd0VtYWlsICYmIG9wdGlvbnMuc2hvd1NpZ251cCAmJiBvcHRpb25zLnNob3dGb3Jnb3QgPyAnJyA6ICdub25lJyk7XG5cbiAgJCgnZGl2LnBhbmVsIGlucHV0JykuZWFjaChmdW5jdGlvbiAoZSkgeyBlLnZhbHVlID0gJyc7IH0pO1xuXG4gIC8vIHBsYWNlaG9sZGVycyBhbmQgYnV0dG9uc1xuICAkKCcucGFuZWwgLnpvY2lhbC5wcmltYXJ5JykuaHRtbChvcHRpb25zLnNpZ25JbkJ1dHRvblRleHQpO1xuICAkKCcucGFuZWwgLmVtYWlsIGlucHV0JykuYXR0cigncGxhY2Vob2xkZXInLCBvcHRpb25zLmVtYWlsUGxhY2Vob2xkZXIpO1xuICAkKCcucGFuZWwgLnBhc3N3b3JkIGlucHV0JykuYXR0cigncGxhY2Vob2xkZXInLCBvcHRpb25zLnBhc3N3b3JkUGxhY2Vob2xkZXIpO1xuICAkKCcucGFuZWwgLnNlcGFyYXRvciBzcGFuJykuaHRtbChvcHRpb25zLnNlcGFyYXRvclRleHQpO1xuXG4gIC8vIHNob3cgZW1haWwsIHBhc3N3b3JkLCBzZXBhcmF0b3IgYW5kIGJ1dHRvbiBpZiB0aGVyZSBhcmUgZW50ZXJwcmlzZS9kYiBjb25uZWN0aW9uc1xuICB2YXIgYW55RW50ZXJwcmlzZU9yRGJDb25uZWN0aW9uID0gdGhpcy5fYXJlVGhlcmVBbnlFbnRlcnByaXNlT3JEYkNvbm4oKTtcbiAgdmFyIGFueVNvY2lhbENvbm5lY3Rpb24gPSB0aGlzLl9hcmVUaGVyZUFueVNvY2lhbENvbm4oKTtcblxuICAkKCcucGFuZWwgLmVtYWlsIGlucHV0JykuY3NzKCdkaXNwbGF5Jywgb3B0aW9ucy5zaG93RW1haWwgJiYgYW55RW50ZXJwcmlzZU9yRGJDb25uZWN0aW9uID8gJycgOiAnbm9uZScpO1xuICAkKCcucGFuZWwgLnpvY2lhbC5wcmltYXJ5JykuY3NzKCdkaXNwbGF5Jywgb3B0aW9ucy5zaG93RW1haWwgJiYgYW55RW50ZXJwcmlzZU9yRGJDb25uZWN0aW9uID8gJycgOiAnbm9uZScpO1xuICAkKCcucGFuZWwgLnBhc3N3b3JkIGlucHV0JykuY3NzKCdkaXNwbGF5Jywgb3B0aW9ucy5zaG93RW1haWwgJiYgb3B0aW9ucy5zaG93UGFzc3dvcmQgJiYgYW55RW50ZXJwcmlzZU9yRGJDb25uZWN0aW9uID8gJycgOiAnbm9uZScpO1xuICAkKCcucGFuZWwgLmNyZWF0ZS1hY2NvdW50IC5mb3Jnb3QtcGFzcycpLmNzcygnZGlzcGxheScsIG9wdGlvbnMuc2hvd0VtYWlsICYmIG9wdGlvbnMuc2hvd0ZvcmdvdCAmJiBhbnlFbnRlcnByaXNlT3JEYkNvbm5lY3Rpb24gPyAnJyA6ICdub25lJyk7XG4gICQoJy5wYW5lbCAuY3JlYXRlLWFjY291bnQgLnNpZ24tdXAnKS5jc3MoJ2Rpc3BsYXknLCBvcHRpb25zLnNob3dFbWFpbCAmJiBvcHRpb25zLnNob3dTaWdudXAgJiYgYW55RW50ZXJwcmlzZU9yRGJDb25uZWN0aW9uID8gJycgOiAnbm9uZScpO1xuICAkKCcucGFuZWwgLnNlcGFyYXRvcicpLmNzcygnZGlzcGxheScsIG9wdGlvbnMuc2hvd0VtYWlsICYmIGFueUVudGVycHJpc2VPckRiQ29ubmVjdGlvbiAmJiBhbnlTb2NpYWxDb25uZWN0aW9uID8gJycgOiAnbm9uZScpO1xuICAkKCcucGFuZWwgLmxhc3QtdGltZScpLmh0bWwob3B0aW9ucy5yZXR1cm5Vc2VyTGFiZWwpO1xuXG4gIC8vIFRPRE86IHNob3cgcGxhY2Vob2xkZXJzIGZvciBJRTlcblxuICAvLyBhY3RpdmF0ZSBwYW5lbFxuICAkKCdkaXYucGFuZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICQoJ2Rpdi5vdmVybGF5JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAkKCdkaXYucGFuZWwub25lc3RlcCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAkKCcucG9wdXAgaDEnKS5odG1sKG9wdGlvbnMudGl0bGUpO1xuICAkKCcucG9wdXAgLmludmFsaWQnKS5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xuXG4gIC8vIGlmIHVzZXIgbG9nZ2VkIGluIHNob3cgbG9nZ2VkIGluIGV4cGVyaWVuY2VcbiAgaWYgKHRoaXMuX3Nzb0RhdGEuc3NvICYmIG9wdGlvbnNbJ2VuYWJsZVJldHVyblVzZXJFeHBlcmllbmNlJ10pIHtcbiAgICB0aGlzLl9zaG93TG9nZ2VkSW5FeHBlcmllbmNlKCk7XG4gIH1cblxuICBpZiAob3B0aW9uc1snc29jaWFsQmlnQnV0dG9ucyddKSB7XG4gICAgJCgnLnBvcHVwIC5wYW5lbC5vbmVzdGVwIC5pY29ubGlzdCBzcGFuJykucmVtb3ZlQ2xhc3MoJ2ljb24nKS5hZGRDbGFzcygnYmxvY2snKTtcbiAgfSBlbHNlIHtcbiAgICAkKCcucG9wdXAgLnBhbmVsLm9uZXN0ZXAgLmljb25saXN0IHNwYW4nKS5hZGRDbGFzcygnaWNvbicpLnJlbW92ZUNsYXNzKCdibG9jaycpO1xuICB9XG5cbiAgJCgnZGl2LnBhbmVsLm9uZXN0ZXAgaDEnKS5odG1sKG9wdGlvbnNbJ3RpdGxlJ10pO1xuICAkKCdkaXYucGFuZWwub25lc3RlcCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICBpZiAodGhpcy5fc3NvRGF0YS5zc28gJiYgdGhpcy5fc3NvRGF0YS5sYXN0VXNlZFVzZXJuYW1lKSB7XG4gICAgJCgnZGl2LnBhbmVsLm9uZXN0ZXAgaW5wdXQnKS52YWwodGhpcy5fc3NvRGF0YS5sYXN0VXNlZFVzZXJuYW1lKTtcbiAgfVxuXG4gIHRoaXMuX3NldFRvcChvcHRpb25zLnRvcCwgJCgnZGl2LnBhbmVsLm9uZXN0ZXAnKSk7XG4gIHRoaXMuX3NldExvZ2luVmlldyh7IGlzUmV0dXJuaW5nVXNlcjogdGhpcy5fc3NvRGF0YS5zc28gfSk7XG59O1xuXG5BdXRoMFdpZGdldC5wcm90b3R5cGUuX2dldENvbmZpZ3VyZWRTdHJhdGVnaWVzID0gZnVuY3Rpb24gKGNvbm5zKSB7XG4gIHZhciBzdHJhdGVnaWVzID0gW107XG4gIGZvciAodmFyIGNvbm4gaW4gY29ubnMpIHtcbiAgICBpZiAodHlwZW9mKGNvbm5zW2Nvbm5dLnN0YXR1cykgIT09ICd1bmRlZmluZWQnICYmICFjb25uc1tjb25uXS5zdGF0dXMpIGNvbnRpbnVlO1xuXG4gICAgdmFyIHN0cmF0ZWd5ID0gc3RyYXRlZ2llcy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgXG4gICAgICByZXR1cm4gcy5uYW1lID09PSBjb25uc1tjb25uXS5zdHJhdGVneTsgXG4gICAgfSlbMF07XG5cbiAgICBpZiAoIXN0cmF0ZWd5KSB7XG4gICAgICBzdHJhdGVneSA9IHtcbiAgICAgICAgbmFtZTogY29ubnNbY29ubl0uc3RyYXRlZ3ksXG4gICAgICAgIGNvbm5lY3Rpb25zOiBbXVxuICAgICAgfTtcblxuICAgICAgc3RyYXRlZ2llcy5wdXNoKHN0cmF0ZWd5KTtcbiAgICB9XG5cbiAgICB2YXIgY29ubkRhdGEgPSB7XG4gICAgICBuYW1lOiBjb25uc1tjb25uXS5uYW1lLFxuICAgICAgZG9tYWluOiBjb25uc1tjb25uXS5kb21haW5cbiAgICB9O1xuXG4gICAgc3RyYXRlZ3kuY29ubmVjdGlvbnMucHVzaChjb25uRGF0YSk7XG4gIH1cblxuICByZXR1cm4gc3RyYXRlZ2llcztcbn07XG5cbkF1dGgwV2lkZ2V0LnByb3RvdHlwZS5nZXRDbGllbnQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9hdXRoMDtcbn07XG5cbkF1dGgwV2lkZ2V0LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHNpZ25pbk9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9zaWduaW5PcHRpb25zID0geHRlbmQodGhpcy5fb3B0aW9ucywgc2lnbmluT3B0aW9ucyk7XG4gIHRoaXMuX2F1dGgwID0gbmV3IEF1dGgwKHtcbiAgICBjbGllbnRJRDogICAgIHRoaXMuX3NpZ25pbk9wdGlvbnMuY2xpZW50SUQsIFxuICAgIGNhbGxiYWNrVVJMOiAgdGhpcy5fc2lnbmluT3B0aW9ucy5jYWxsYmFja1VSTCxcbiAgICBkb21haW46ICAgICAgIHRoaXMuX3NpZ25pbk9wdGlvbnMuZG9tYWluXG4gIH0pO1xuXG4gIC8vIFRPRE86IHNldCBhdXRoMCBjb25uZWN0aW9uIHBhcmFtZXRlcnNcbiAgdGhpcy5fYXV0aDBDb25uZWN0aW9uUGFyYW1zID0gbnVsbDtcblxuICAvLyBnZXQgY29uZmlndXJlZCBzdHJhdGVnaWVzL2Nvbm5lY3Rpb25zXG4gIHRoaXMuX2F1dGgwLmdldENvbm5lY3Rpb25zKGZ1bmN0aW9uIChlcnIsIGNvbm5lY3Rpb25zKSB7XG4gICAgdmFyIGFsbG93ZWRDb25uZWN0aW9ucyA9IFtdO1xuXG4gICAgLy8gdXNlIG9ubHkgc3BlY2lmaWVkIGNvbm5lY3Rpb25zXG4gICAgaWYgKHNlbGYuX3NpZ25pbk9wdGlvbnMuY29ubmVjdGlvbnMpIHtcbiAgICAgIGZvciAodmFyIGkgaW4gY29ubmVjdGlvbnMpIHtcbiAgICAgICAgaWYgKHNlbGYuX3NpZ25pbk9wdGlvbnMuY29ubmVjdGlvbnMuaW5kZXhPZihjb25uZWN0aW9uc1tpXS5uYW1lKSA+IC0xKSB7XG4gICAgICAgICAgYWxsb3dlZENvbm5lY3Rpb25zLnB1c2goY29ubmVjdGlvbnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYWxsb3dlZENvbm5lY3Rpb25zID0gY29ubmVjdGlvbnM7XG4gICAgfVxuXG4gICAgc2VsZi5fY2xpZW50ID0ge1xuICAgICAgc3RyYXRlZ2llczogc2VsZi5fZ2V0Q29uZmlndXJlZFN0cmF0ZWdpZXMoYWxsb3dlZENvbm5lY3Rpb25zKVxuICAgIH07XG5cbiAgICAvLyBnZXQgU1NPIGRhdGFcbiAgICBzZWxmLl9hdXRoMC5nZXRTU09EYXRhKGZ1bmN0aW9uIChlcnIsIHNzb0RhdGEpIHtcbiAgICAgIHNlbGYuX3Nzb0RhdGEgPSBzc29EYXRhO1xuICAgICAgXG4gICAgICAvLyB3aWRnZXQgY29udGFpbmVyXG4gICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuaW5uZXJIVE1MID0gbG9naW5UbXBsKHt9KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIFxuICAgICAgc2VsZi5faW5pdGlhbGl6ZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXV0aDBXaWRnZXQ7XG4iXX0=
;