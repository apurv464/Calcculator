(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Anish_OneDrive_Desktop_React_Calculator_calculator_reactjs_main_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),_components_ResultView__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_components_Keyboard__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),output="",history="",symbols=["*","-","+","/"];function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)({history:"",displayValue:""}),_useState2=Object(C_Users_Anish_OneDrive_Desktop_React_Calculator_calculator_reactjs_main_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),state=_useState2[0],setState=_useState2[1],updateState=function(){setState({history:history.toString(),displayValue:output.toString()})},onClick=function(e,t,_){var a=(output=output.toString()).slice(-1);switch(t){case"function":functionKey(e,a);break;case"operator":operatorKey(_,a);break;case"number":numberKey(_,a);break;default:return}},functionKey=function functionKey(id,lastInput){var resetOutput=function(e){history="",output="",e&&updateState()},calculate=function calculate(lastInput){if(!symbols.includes(lastInput)&&output)try{history=output,output=eval(output.replace(/%/g,"*0.01")),output=Number.isInteger(output)?output:output.toFixed(3),updateState(),history=output,output=""}catch(error){output="Error",updateState(),resetOutput()}};switch(id){case"clear":resetOutput(!0);break;case"clearBack":output=output.slice(0,-1),updateState();break;case"calc":calculate(lastInput);break;default:return}},operatorKey=function(e,t){""===output&&"-"!==e||(symbols.includes(t)?output=output.slice(0,-1)+e:output+=e,updateState())},numberKey=function(e,t){if("."===e||"%"===e){if(""===output&&"%"===e)return;"."===t||"%"===t||(output+=e)}else output+=e;updateState()};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"app"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ResultView__WEBPACK_IMPORTED_MODULE_3__.a,{history:state.history,output:state.displayValue}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Keyboard__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:onClick})))}__webpack_exports__.a=App},function(e,t,_){"use strict";var a=_(0),u=_.n(a);t.a=function(e){var t=e.history,_=e.output,a={color:"Error"===_?"#f11":"#fff"};return u.a.createElement("div",{style:a,className:"result"},u.a.createElement("div",{className:"history"},t),u.a.createElement("div",{className:"output"},_))}},function(e,t,_){"use strict";var a=_(0),u=_.n(a),r=[{id:"clear",class:"function",value:"C"},{id:"clearBack",class:"function",value:"CE"},{id:"multiply",class:"operator",value:"*"},{id:"9",class:"number",value:"9"},{id:"8",class:"number",value:"8"},{id:"7",class:"number",value:"7"},{id:"minus",class:"operator",value:"-"},{id:"6",class:"number",value:"6"},{id:"5",class:"number",value:"5"},{id:"4",class:"number",value:"4"},{id:"add",class:"operator",value:"+"},{id:"3",class:"number",value:"3"},{id:"2",class:"number",value:"2"},{id:"1",class:"number",value:"1"},{id:"divide",class:"operator",value:"/"},{id:"dot",class:"number",value:"."},{id:"0",class:"number",value:"0"},{id:"%",class:"number",value:"%"},{id:"calc",class:"function",value:"="}];t.a=function(e){var t=e.onClick;return u.a.createElement("div",{className:"keyboard"},r.map((function(e){return u.a.createElement("div",{className:"btn",id:e.id,key:e.id,onClick:function(){return t(e.id,e.class,e.value)}},e.value)})))}},,function(e,t,_){e.exports=_(8)},function(e,t,_){"use strict";_.r(t);var a=_(0),u=_.n(a),r=_(2),s=_.n(r),c=_(3);s.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(c.a,null)),document.getElementById("root"))},,,,,function(e,t,_){}],[[7,1,2]]]);
//# sourceMappingURL=main.2437682a.chunk.js.map