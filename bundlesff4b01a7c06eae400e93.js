/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
:root {
    --shadow-color: 0deg 0% 52%;
    --shadow-elevation-medium:
    0px 0.5px 0.5px hsl(var(--shadow-color) / 0.6),
    0px 1.3px 1.2px -1.2px hsl(var(--shadow-color) / 0.5),
    -0.1px 4px 3.8px -2.5px hsl(var(--shadow-color) / 0.4),
    -0.4px 10.9px 10.2px -3.7px hsl(var(--shadow-color) / 0.3);
  }
  
  
  
  
  
  
  
  
  
  
  /* Var callouts*/
  :root.light {
      --white: #fffbfb;
      --grey: #f0eef1;
      --black: #050505;
      --fillPerc:0;
    
      /* default root.light*/     
      --inverse-background-color:#222; 
      --background-color: #f6f6f6;
      --background-color2: #c9c9c9;
      --font-color: #222;
      --font-lighter-color: #666666;
      
    }
  
  
  :root.dark {
      --inverse-background-color:#f6f6f6;
      --background-color: #222;
      --background-color2: #4e4e4e;
      --font-color: #f6f6f6;
      --font-lighter-color: #ccc;
      --fillPerc:100;
    }
  
      
  
        /*system theme setup*/
    @media (prefers-color-scheme: light) {
    :root.dark {
      --inverse-background-color:#f6f6f6;
      --background-color: #222;
      --font-color: #f6f6f6;
      --font-lighter-color: #ccc;
      --fillPerc:100;
    }
  
    :root.light {
      --inverse-background-color:#222;
      --font-color: #f6f6f6;
      --background-color: #f6f6f6;
      --font-color: #222;
      --font-lighter-color: #444;
      --fillPerc:0;
    }
  }
  
  
  
  
  
    
  
    /*CSS RESET*/
    *, *::before, *::after {
      box-sizing: border-box;
    }
    * {
      margin: 0;
    }
    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }
    img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
    }
    input, button, textarea, select {
      font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
    }
    #root, #__next {
      isolation: isolate;
    }
  
    p:focus,
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
      outline: none;
    }
  
  
  
  /*holy grail format*/
  .wrapper {
      display: grid;
      grid-template-columns:
        100%
        min(1200px, 100%)
        1fr;
        
    }
  
  
    .wrapper > * {
      grid-column: 2;
     
    
      align-self: center;
      width:100%;
      max-width:1000PX;
      
    
    }
    
    .full-bleed {
      width: 100%;
      grid-column: 1 / 4;
    }
    
    .noDisplay{
      display: none;
    }
    
  
  body{
    display:grid;
    gap:1px;
    overflow-y:hidden
  }
  
  /*Header*/
  header{
      box-shadow: var(--shadow-elevation-medium);
      display:flex;
      justify-content: space-between;
      align-items: center;
      background-color:var(--background-color);
      z-index: 10;
      padding-left:2rem;
      padding-right:2rem;
      box-shadow: var(--shadow-elevation-medium);
     
  }
  
  #logo{
      height:50px;
      width:50px;
      color:var(--font-color);
      filter: invert(var(--fillPerc)) ;
  }
  
  
  
  .title-container{
      padding:15px;
      display:flex;
      justify-content: center;
      align-items: center;
      color:var(--font-color);
      white-space: nowrap;
      
  }
  
  
  /*---------Contanet container Main----------------*/
  main{
  display: grid;
  grid-template-columns:250px 1fr;
  transition: all 0.5s;
  background: var(--background-color);
  }
  
  /*-------------------------------------NavPanel--------------------------------------*/
  .NavPanel{
    padding-top:10px;
  grid-column: 1;
  z-index: 0;
  background: var(--background-color2);
  height:100vh;
  overflow:hidden;
  
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  
  
  .menuBar{
    font-weight: 500;
    margin-left:20px;
    cursor:pointer;
    display:flex;
    justify-content: left;
    align-items:center;
    gap:10px;
    padding:5px;
    white-space: nowrap;
    color:var(--font-color);
  }
  
  .menuBar:hover{
    fill: brightness(50%);
    background-color:rgba(255, 255, 255, 0.411);
  }
  
  .active-project{
    background-color:var(--background-color);
    color:var(--font-color) ;
    box-shadow: var(--shadow-elevation-medium);
  }
  
  .projectList .active-project{
    display:flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  
  }
  
  .active-project:hover{
    background-color:var(--background-color);
    color:var(--font-color) ;
    box-shadow: var(--shadow-elevation-medium);
    cursor:default;
  }
  
  
  
  .addProjectForm{
    font-weight: 500;
    margin-left:10px;
    cursor:pointer;
    display:flex;
    justify-content: left;
    align-items:center;
    gap:10px;
    padding:5px;
    white-space: nowrap;
    color:var(--font-color);
  }
  
  
  .addProject-input{
  width:100%;
  max-width:250px;
  }
  
  
  
  
  
  #panelHeader{
    font-weight: 500;
    font-size: 1.5em;
    padding-top:10px;
    margin-left:20px;
    cursor:default;
    display:flex;
    justify-content: left;
    align-items:center;
    color:var(--font-color);
  }
  
  .navIcon{
    display:none;
    transform: scale(0.7);
    cursor:pointer;
    }
  
  
  
  
  @media screen and (max-width: 800px) {
  main{
    display: grid;
    grid-template-columns:0px 100%;
    }
      
  .showPanel{
    grid-template-columns:50% 50%;
    transition: all 0.3s;
  }
  
  .navIcon{
  display:block;
  transform: scale(0.7);
  }
  
  .title-container{
  transform: scale(.8);
  transition: all 0.5s;
  }
  
  
  
  
  }
  
  
  /*--------------------Content-main------------------------*/
  .content{
  
  
  grid-column: 2;
  color:var(--font-color);
  background-color:var(--background-color);
  height:100vh;
  padding:10px;
  padding-top:10px;
  
  display:flex;
  flex-direction:column;
  
  
  gap:5px;
  overflow-y: scroll;
  scrollbar-width: 1px;
  }
  
  
  
  
  #currentActive{
    width:100%;
  
  }
  
  .taskList-container{
  
    align-self: center;
    width:100%;
    max-width:1000PX;
  }
  
  
  
  .addTask{
    display:flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    font-family: arial;
    font-weight: 600;
    color:var(--font-lighter-color);
  }
  
  .addTask:hover{
    cursor: pointer;
    background-color:rgba(255, 255, 255, 0.027);
    font-weight: 600;
    border-radius:5px solid var(--font-color);
    left:-2px;
    color:var(--font-color);
  }
  
  .addTask-form{
    display:grid;
    font-family: arial;
    font-size: 1em;
    width:100%;
    border:2px solid var(--font-lighter-color);
    border-radius:10px;
    padding: 8px;
    color:var(--font-color);
    gap:5px;
    overflow:scroll;
    scrollbar-width: none;
  }
  
  
  
  .input-add-task-button{
    font-weight: 500;
    white-space: nowrap;
  }
  
  #input-addTask-title{
    font-weight: 650;
  }
  
  .input-add-task-popup{
    font-family: arial;
    color:var(--font-color);
    width:100%;
    border-color: transparent;
    background:var(--background-color);
    resize: none;
  
  }
  
  /*----task Display Template------*/
  .deleteTasks{
    margin-left:auto;
    border-radius: 5px;
    color:var(--font-color);
    background-color: var(--background-color);
    border:3px solid var(--background-color2);
    padding: 5px;
    font-family: arial;
    transform: scale (0.5);
    transition: transform 200ms ease-in-out;
  
    display:flex;
    justify-content: center;
    align-items: center;
    gap:5px;
    width:auto;
    max-width: auto;
    margin-left: auto;
    margin-right: 0;
  }
  
  .deleteTasks:hover{
    cursor: pointer;
    transform: scale (1.2);
    color:var(--font-color);
    background-color: var(--background-color2);
  }
  
  
  .taskContainer {
    background-color: var(--background-color2);
    border-radius: 10px;
    padding: 10px;
    padding-bottom: 0.5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    
  }
  
  
  .taskContainer > label{
    font-weight: 600;
  
  }
  
  
  .taskDetails-Container{ 
    align-items: center;
    position: relative;
    margin-bottom: 1em;
    padding-top:5px;
  
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  
  
  .taskDetails-Container > .taskDetails {
    grid-column: 1/3; 
    grid-row: 1/2; 
  } 
  
  .taskDetails-Container > .date {
    grid-column: 1/3; 
    grid-row: 2/3; 
    background-color: rgba(5, 5, 5, 0.589);
    padding-left:5px;
    padding-right:5px;
    border-radius: 5px;
    margin-right:auto;
    color:whitesmoke;
    font-size: smaller;
  
  } 
  .taskDetails-Container > .prio {
    grid-column: 2/3; 
    grid-row: 2/3; 
    margin-left:auto;
    background-color: rgba(5, 5, 5, 0.589);
  
    border-radius: 5px;
    font:1rem;
    font-size: smaller;
    padding-left:5px;
    padding-right:5px;
  } 
  
  
  .taskContainer::after{
    content:"";
    position:absolute;
    right:0;
    left:0;
    bottom:-10%;
    height:1.5px;
    background-color: var(--font-lighter-color);
  }
  
  [type= "checkbox"] {
    opacity:0;
    position:absolute;
  }
  
  
  .custom-checkbox  {
    --size:0.5em;
    display: inline-block;
    width: var(--size);
    height: var(--size);
    cursor:pointer;
    border:2px  solid var(--font-color);
    border-radius: 50%;
    transform: scale (1);
    transition: transform 300ms ease-in-out;
    font-size:2em;
    position: relative;
    bottom: -3px;;
  }
  
  .taskContainer:hover label .custom-checkbox {
   transform: scale (1.2);
   cursor: pointer;
  }
  
  .taskContainer > label{
    display:flex-inline;
    gap:10px;
    align-items: center;
    position: relative;
    font-size: 1.4em;
    
  }
  
  .taskContainer {
    position: relative;
    margin-bottom:1.25em;
    
  }
  
  .taskContainer label::after {
  content:"";
  position: absolute;
  left:1.2em;
  right:0;
  top:calc(50% - 2px);
  height: 2px;
  background: var(--font-color);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 150ms ease-in-out;
  }
  
  [type="checkbox"]:checked + label .custom-checkbox {
  background: green;
  }
  
  [type="checkbox"]:checked ~ label, [type="checkbox"]:checked ~ p {
    opacity: 50%;
  }
  
  [type="checkbox"]:checked + label:after {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  
  
  
  
  /*-----------------------------------Utilities-----------------------------------------*/
  .ProjectDeleteIcon:hover , .ProjectCancelIcon:hover{
  
    cursor: pointer;
    fill: #ff0000;
    filter: invert(0.4) sepia(1) saturate(19.7) hue-rotate(309.6deg) brightness(0.91);
  }
  .projectEditIcon{
    cursor: pointer;
    fill: #ff0000;
    filter: invert(0.4) sepia(0) saturate(20) hue-rotate(0deg) brightness(0.83);
  }
  
  .projectEditIcon:hover{
    cursor: pointer;
    fill: #ff0000;
    filter: invert(0.4) sepia(1) saturate(19.7) hue-rotate(309.6deg) brightness(0.91);
  }
  
  .addTask-form > .cancel{
    height:18px;
    display:flex;
    justify-content: end;
    overflow: visible;
  }
  .ProjectCancel:hover{
    cursor: pointer;
    fill: #ff0000;
    filter: invert(0.4) sepia(1) saturate(19.7) hue-rotate(309.6deg) brightness(0.91);
  }
  .ProjectEnter:hover{
    cursor: pointer;
    fill: #DA4567;
    filter: invert(0.4) sepia(1) saturate(19.7) hue-rotate(309.6deg) brightness(0.91);
  }
  
  .addTask-form > .cancel > i:hover{
    cursor: pointer;
    fill: #DA4567;
    filter: invert(0.04) sepia(1) saturate(20) hue-rotate(302.4deg) brightness(0.73);
  }
  
  
  
  
  .icon{
      height:15px;
  }
  
  /*actual switch below*/ 
  .toggle-switch {
      display: block;
  }
  
  #toggle-input {
      display: none;
  }
  
  .toggle-switch__control {
    display: flex;
    justify-content: center;
    align-items: center;
  
      width: 50px;
      height: 18px;
      border-radius: 7px;
      position: relative;
  
      background: var(--inverse-background-color);
      cursor: pointer;
      margin: 50px auto;
  
      box-sizing:border-box;
      border-radius: 200px;
      border:1px solid rgba(0, 0, 0, 0.171);
   
  }
  
  
  
  
  .toggle-switch__control::after {
      content: '';
      display: block;
  
      width: 22px;
      height: 22px;
      border-radius: 20px;
  
      position: absolute;
      left: -8px;
      top: -3px;
  
  
      border:1px solid rgba(151, 146, 146, 0.726);
      background: rgb(204, 204, 204);
      transition: left 0.25s;
      box-shadow: var(--shadow-elevation-medium);
  }
  
  #toggle-input:checked + .toggle-switch__control::after {
      left: 38px;
     
  }
  
  
  #toggle-input:checked + .toggle-switch__control {
    background: var(--inverse-background-color)
  }
  
  *,
  *:before,
  *:after{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
  
  
  input[type="date"]{
      background-color: var(--background-color2);
      color: var(--font-color);
      padding: 1px;
  
      font-size: 1rem;
      border: none;
      outline: none;
      border-radius: 5px;
      text-align: center;
      height:2rem;
      margin-left:0;
  }
  
  .priority-input{
    background-color: var(--background-color2);
    color: var(--font-color);
    padding: 2px;
    font-family: "Roboto Mono",monospace;
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 5px;
    text-align: center;
    height:2rem; 
    font-weight: 600;
    
    
  }
  
  .low, .mid, .high{
    background-color: rgb(78, 78, 78);
    border-radius: 5px;
  }
  
  .low{
    color:var(--font-color);
  }
  
  .low{
    color:green;  
  }
  .mid{
    color:orange;
  
  }
  .high{
    color:red;
  
  }
  
  
  
  
  .input-add-task-button{
    background-color: var(--background-color);
    color: var(--font-color);
    padding: 2px;
    font-size: 18px;
    border: none;
    border:2px solid  gray;
    border-radius: 5px;
    text-align: center;
    height:2rem;
    padding-left:10px;
    padding-right:10px;
    margin-left:auto;
    margin-right:0;
  }
  
  
  
  .input-add-task-button:hover{
    cursor: pointer;
    background-color: var(--background-color2);
  }
  
  .addTaskInsideContainer{
    display:flex;
    gap:10px;
   
  }
  
  
  ::-webkit-calendar-picker-indicator{
      background-color: rgb(228, 228, 228);
      padding: 5px;
      cursor: pointer;
      border-radius: 3px;
  }
  
  .hide, #hide{
    display: none;
  }
  
  .ProjectDeleteIcon{
    margin-left:0;
    margin-right: auto;
  }
  
  .addTaskInsideContainer > *, .input-add-task-button{
    font-family: arial;
    font-size: 1em;
    font-weight: 600;
  }
  
  `, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["\n:root {\n    --shadow-color: 0deg 0% 52%;\n    --shadow-elevation-medium:\n    0px 0.5px 0.5px hsl(var(--shadow-color) / 0.6),\n    0px 1.3px 1.2px -1.2px hsl(var(--shadow-color) / 0.5),\n    -0.1px 4px 3.8px -2.5px hsl(var(--shadow-color) / 0.4),\n    -0.4px 10.9px 10.2px -3.7px hsl(var(--shadow-color) / 0.3);\n  }\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  /* Var callouts*/\n  :root.light {\n      --white: #fffbfb;\n      --grey: #f0eef1;\n      --black: #050505;\n      --fillPerc:0;\n    \n      /* default root.light*/     \n      --inverse-background-color:#222; \n      --background-color: #f6f6f6;\n      --background-color2: #c9c9c9;\n      --font-color: #222;\n      --font-lighter-color: #666666;\n      \n    }\n  \n  \n  :root.dark {\n      --inverse-background-color:#f6f6f6;\n      --background-color: #222;\n      --background-color2: #4e4e4e;\n      --font-color: #f6f6f6;\n      --font-lighter-color: #ccc;\n      --fillPerc:100;\n    }\n  \n      \n  \n        /*system theme setup*/\n    @media (prefers-color-scheme: light) {\n    :root.dark {\n      --inverse-background-color:#f6f6f6;\n      --background-color: #222;\n      --font-color: #f6f6f6;\n      --font-lighter-color: #ccc;\n      --fillPerc:100;\n    }\n  \n    :root.light {\n      --inverse-background-color:#222;\n      --font-color: #f6f6f6;\n      --background-color: #f6f6f6;\n      --font-color: #222;\n      --font-lighter-color: #444;\n      --fillPerc:0;\n    }\n  }\n  \n  \n  \n  \n  \n    \n  \n    /*CSS RESET*/\n    *, *::before, *::after {\n      box-sizing: border-box;\n    }\n    * {\n      margin: 0;\n    }\n    body {\n      line-height: 1.5;\n      -webkit-font-smoothing: antialiased;\n    }\n    img, picture, video, canvas, svg {\n      display: block;\n      max-width: 100%;\n    }\n    input, button, textarea, select {\n      font: inherit;\n    }\n    p, h1, h2, h3, h4, h5, h6 {\n      overflow-wrap: break-word;\n    }\n    #root, #__next {\n      isolation: isolate;\n    }\n  \n    p:focus,\n    input:focus,\n    select:focus,\n    textarea:focus,\n    button:focus {\n      outline: none;\n    }\n  \n  \n  \n  /*holy grail format*/\n  .wrapper {\n      display: grid;\n      grid-template-columns:\n        100%\n        min(1200px, 100%)\n        1fr;\n        \n    }\n  \n  \n    .wrapper > * {\n      grid-column: 2;\n     \n    \n      align-self: center;\n      width:100%;\n      max-width:1000PX;\n      \n    \n    }\n    \n    .full-bleed {\n      width: 100%;\n      grid-column: 1 / 4;\n    }\n    \n    .noDisplay{\n      display: none;\n    }\n    \n  \n  body{\n    display:grid;\n    gap:1px;\n    overflow-y:hidden\n  }\n  \n  /*Header*/\n  header{\n      box-shadow: var(--shadow-elevation-medium);\n      display:flex;\n      justify-content: space-between;\n      align-items: center;\n      background-color:var(--background-color);\n      z-index: 10;\n      padding-left:2rem;\n      padding-right:2rem;\n      box-shadow: var(--shadow-elevation-medium);\n     \n  }\n  \n  #logo{\n      height:50px;\n      width:50px;\n      color:var(--font-color);\n      filter: invert(var(--fillPerc)) ;\n  }\n  \n  \n  \n  .title-container{\n      padding:15px;\n      display:flex;\n      justify-content: center;\n      align-items: center;\n      color:var(--font-color);\n      white-space: nowrap;\n      \n  }\n  \n  \n  /*---------Contanet container Main----------------*/\n  main{\n  display: grid;\n  grid-template-columns:250px 1fr;\n  transition: all 0.5s;\n  background: var(--background-color);\n  }\n  \n  /*-------------------------------------NavPanel--------------------------------------*/\n  .NavPanel{\n    padding-top:10px;\n  grid-column: 1;\n  z-index: 0;\n  background: var(--background-color2);\n  height:100vh;\n  overflow:hidden;\n  \n  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n  \n  \n  \n  .menuBar{\n    font-weight: 500;\n    margin-left:20px;\n    cursor:pointer;\n    display:flex;\n    justify-content: left;\n    align-items:center;\n    gap:10px;\n    padding:5px;\n    white-space: nowrap;\n    color:var(--font-color);\n  }\n  \n  .menuBar:hover{\n    fill: brightness(50%);\n    background-color:rgba(255, 255, 255, 0.411);\n  }\n  \n  .active-project{\n    background-color:var(--background-color);\n    color:var(--font-color) ;\n    box-shadow: var(--shadow-elevation-medium);\n  }\n  \n  .projectList .active-project{\n    display:flex;\n    justify-content: space-between;\n    padding-left: 10px;\n    padding-right: 10px;\n  \n  }\n  \n  .active-project:hover{\n    background-color:var(--background-color);\n    color:var(--font-color) ;\n    box-shadow: var(--shadow-elevation-medium);\n    cursor:default;\n  }\n  \n  \n  \n  .addProjectForm{\n    font-weight: 500;\n    margin-left:10px;\n    cursor:pointer;\n    display:flex;\n    justify-content: left;\n    align-items:center;\n    gap:10px;\n    padding:5px;\n    white-space: nowrap;\n    color:var(--font-color);\n  }\n  \n  \n  .addProject-input{\n  width:100%;\n  max-width:250px;\n  }\n  \n  \n  \n  \n  \n  #panelHeader{\n    font-weight: 500;\n    font-size: 1.5em;\n    padding-top:10px;\n    margin-left:20px;\n    cursor:default;\n    display:flex;\n    justify-content: left;\n    align-items:center;\n    color:var(--font-color);\n  }\n  \n  .navIcon{\n    display:none;\n    transform: scale(0.7);\n    cursor:pointer;\n    }\n  \n  \n  \n  \n  @media screen and (max-width: 800px) {\n  main{\n    display: grid;\n    grid-template-columns:0px 100%;\n    }\n      \n  .showPanel{\n    grid-template-columns:50% 50%;\n    transition: all 0.3s;\n  }\n  \n  .navIcon{\n  display:block;\n  transform: scale(0.7);\n  }\n  \n  .title-container{\n  transform: scale(.8);\n  transition: all 0.5s;\n  }\n  \n  \n  \n  \n  }\n  \n  \n  /*--------------------Content-main------------------------*/\n  .content{\n  \n  \n  grid-column: 2;\n  color:var(--font-color);\n  background-color:var(--background-color);\n  height:100vh;\n  padding:10px;\n  padding-top:10px;\n  \n  display:flex;\n  flex-direction:column;\n  \n  \n  gap:5px;\n  overflow-y: scroll;\n  scrollbar-width: 1px;\n  }\n  \n  \n  \n  \n  #currentActive{\n    width:100%;\n  \n  }\n  \n  .taskList-container{\n  \n    align-self: center;\n    width:100%;\n    max-width:1000PX;\n  }\n  \n  \n  \n  .addTask{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    gap:10px;\n    font-family: arial;\n    font-weight: 600;\n    color:var(--font-lighter-color);\n  }\n  \n  .addTask:hover{\n    cursor: pointer;\n    background-color:rgba(255, 255, 255, 0.027);\n    font-weight: 600;\n    border-radius:5px solid var(--font-color);\n    left:-2px;\n    color:var(--font-color);\n  }\n  \n  .addTask-form{\n    display:grid;\n    font-family: arial;\n    font-size: 1em;\n    width:100%;\n    border:2px solid var(--font-lighter-color);\n    border-radius:10px;\n    padding: 8px;\n    color:var(--font-color);\n    gap:5px;\n    overflow:scroll;\n    scrollbar-width: none;\n  }\n  \n  \n  \n  .input-add-task-button{\n    font-weight: 500;\n    white-space: nowrap;\n  }\n  \n  #input-addTask-title{\n    font-weight: 650;\n  }\n  \n  .input-add-task-popup{\n    font-family: arial;\n    color:var(--font-color);\n    width:100%;\n    border-color: transparent;\n    background:var(--background-color);\n    resize: none;\n  \n  }\n  \n  /*----task Display Template------*/\n  .deleteTasks{\n    margin-left:auto;\n    border-radius: 5px;\n    color:var(--font-color);\n    background-color: var(--background-color);\n    border:3px solid var(--background-color2);\n    padding: 5px;\n    font-family: arial;\n    transform: scale (0.5);\n    transition: transform 200ms ease-in-out;\n  \n    display:flex;\n    justify-content: center;\n    align-items: center;\n    gap:5px;\n    width:auto;\n    max-width: auto;\n    margin-left: auto;\n    margin-right: 0;\n  }\n  \n  .deleteTasks:hover{\n    cursor: pointer;\n    transform: scale (1.2);\n    color:var(--font-color);\n    background-color: var(--background-color2);\n  }\n  \n  \n  .taskContainer {\n    background-color: var(--background-color2);\n    border-radius: 10px;\n    padding: 10px;\n    padding-bottom: 0.5px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1em;\n    \n  }\n  \n  \n  .taskContainer > label{\n    font-weight: 600;\n  \n  }\n  \n  \n  .taskDetails-Container{ \n    align-items: center;\n    position: relative;\n    margin-bottom: 1em;\n    padding-top:5px;\n  \n    display:grid;\n    grid-template-columns:1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n  \n  \n  .taskDetails-Container > .taskDetails {\n    grid-column: 1/3; \n    grid-row: 1/2; \n  } \n  \n  .taskDetails-Container > .date {\n    grid-column: 1/3; \n    grid-row: 2/3; \n    background-color: rgba(5, 5, 5, 0.589);\n    padding-left:5px;\n    padding-right:5px;\n    border-radius: 5px;\n    margin-right:auto;\n    color:whitesmoke;\n    font-size: smaller;\n  \n  } \n  .taskDetails-Container > .prio {\n    grid-column: 2/3; \n    grid-row: 2/3; \n    margin-left:auto;\n    background-color: rgba(5, 5, 5, 0.589);\n  \n    border-radius: 5px;\n    font:1rem;\n    font-size: smaller;\n    padding-left:5px;\n    padding-right:5px;\n  } \n  \n  \n  .taskContainer::after{\n    content:\"\";\n    position:absolute;\n    right:0;\n    left:0;\n    bottom:-10%;\n    height:1.5px;\n    background-color: var(--font-lighter-color);\n  }\n  \n  [type= \"checkbox\"] {\n    opacity:0;\n    position:absolute;\n  }\n  \n  \n  .custom-checkbox  {\n    --size:0.5em;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    cursor:pointer;\n    border:2px  solid var(--font-color);\n    border-radius: 50%;\n    transform: scale (1);\n    transition: transform 300ms ease-in-out;\n    font-size:2em;\n    position: relative;\n    bottom: -3px;;\n  }\n  \n  .taskContainer:hover label .custom-checkbox {\n   transform: scale (1.2);\n   cursor: pointer;\n  }\n  \n  .taskContainer > label{\n    display:flex-inline;\n    gap:10px;\n    align-items: center;\n    position: relative;\n    font-size: 1.4em;\n    \n  }\n  \n  .taskContainer {\n    position: relative;\n    margin-bottom:1.25em;\n    \n  }\n  \n  .taskContainer label::after {\n  content:\"\";\n  position: absolute;\n  left:1.2em;\n  right:0;\n  top:calc(50% - 2px);\n  height: 2px;\n  background: var(--font-color);\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 150ms ease-in-out;\n  }\n  \n  [type=\"checkbox\"]:checked + label .custom-checkbox {\n  background: green;\n  }\n  \n  [type=\"checkbox\"]:checked ~ label, [type=\"checkbox\"]:checked ~ p {\n    opacity: 50%;\n  }\n  \n  [type=\"checkbox\"]:checked + label:after {\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n  \n  \n  \n  \n  \n  /*-----------------------------------Utilities-----------------------------------------*/\n  .ProjectDeleteIcon:hover , .ProjectCancelIcon:hover{\n  \n    cursor: pointer;\n    fill: #ff0000;\n    filter: invert(0.4) sepia(1) saturate(19.7) hue-rotate(309.6deg) brightness(0.91);\n  }\n  .projectEditIcon{\n    cursor: pointer;\n    fill: #ff0000;\n    filter: invert(0.4) sepia(0) saturate(20) hue-rotate(0deg) brightness(0.83);\n  }\n  \n  .projectEditIcon:hover{\n    cursor: pointer;\n    fill: #ff0000;\n    filter: invert(0.4) sepia(1) saturate(19.7) hue-rotate(309.6deg) brightness(0.91);\n  }\n  \n  .addTask-form > .cancel{\n    height:18px;\n    display:flex;\n    justify-content: end;\n    overflow: visible;\n  }\n  .ProjectCancel:hover{\n    cursor: pointer;\n    fill: #ff0000;\n    filter: invert(0.4) sepia(1) saturate(19.7) hue-rotate(309.6deg) brightness(0.91);\n  }\n  .ProjectEnter:hover{\n    cursor: pointer;\n    fill: #DA4567;\n    filter: invert(0.4) sepia(1) saturate(19.7) hue-rotate(309.6deg) brightness(0.91);\n  }\n  \n  .addTask-form > .cancel > i:hover{\n    cursor: pointer;\n    fill: #DA4567;\n    filter: invert(0.04) sepia(1) saturate(20) hue-rotate(302.4deg) brightness(0.73);\n  }\n  \n  \n  \n  \n  .icon{\n      height:15px;\n  }\n  \n  /*actual switch below*/ \n  .toggle-switch {\n      display: block;\n  }\n  \n  #toggle-input {\n      display: none;\n  }\n  \n  .toggle-switch__control {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  \n      width: 50px;\n      height: 18px;\n      border-radius: 7px;\n      position: relative;\n  \n      background: var(--inverse-background-color);\n      cursor: pointer;\n      margin: 50px auto;\n  \n      box-sizing:border-box;\n      border-radius: 200px;\n      border:1px solid rgba(0, 0, 0, 0.171);\n   \n  }\n  \n  \n  \n  \n  .toggle-switch__control::after {\n      content: '';\n      display: block;\n  \n      width: 22px;\n      height: 22px;\n      border-radius: 20px;\n  \n      position: absolute;\n      left: -8px;\n      top: -3px;\n  \n  \n      border:1px solid rgba(151, 146, 146, 0.726);\n      background: rgb(204, 204, 204);\n      transition: left 0.25s;\n      box-shadow: var(--shadow-elevation-medium);\n  }\n  \n  #toggle-input:checked + .toggle-switch__control::after {\n      left: 38px;\n     \n  }\n  \n  \n  #toggle-input:checked + .toggle-switch__control {\n    background: var(--inverse-background-color)\n  }\n  \n  *,\n  *:before,\n  *:after{\n      padding: 0;\n      margin: 0;\n      box-sizing: border-box;\n  }\n  \n  \n  input[type=\"date\"]{\n      background-color: var(--background-color2);\n      color: var(--font-color);\n      padding: 1px;\n  \n      font-size: 1rem;\n      border: none;\n      outline: none;\n      border-radius: 5px;\n      text-align: center;\n      height:2rem;\n      margin-left:0;\n  }\n  \n  .priority-input{\n    background-color: var(--background-color2);\n    color: var(--font-color);\n    padding: 2px;\n    font-family: \"Roboto Mono\",monospace;\n    font-size: 18px;\n    border: none;\n    outline: none;\n    border-radius: 5px;\n    text-align: center;\n    height:2rem; \n    font-weight: 600;\n    \n    \n  }\n  \n  .low, .mid, .high{\n    background-color: rgb(78, 78, 78);\n    border-radius: 5px;\n  }\n  \n  .low{\n    color:var(--font-color);\n  }\n  \n  .low{\n    color:green;  \n  }\n  .mid{\n    color:orange;\n  \n  }\n  .high{\n    color:red;\n  \n  }\n  \n  \n  \n  \n  .input-add-task-button{\n    background-color: var(--background-color);\n    color: var(--font-color);\n    padding: 2px;\n    font-size: 18px;\n    border: none;\n    border:2px solid  gray;\n    border-radius: 5px;\n    text-align: center;\n    height:2rem;\n    padding-left:10px;\n    padding-right:10px;\n    margin-left:auto;\n    margin-right:0;\n  }\n  \n  \n  \n  .input-add-task-button:hover{\n    cursor: pointer;\n    background-color: var(--background-color2);\n  }\n  \n  .addTaskInsideContainer{\n    display:flex;\n    gap:10px;\n   \n  }\n  \n  \n  ::-webkit-calendar-picker-indicator{\n      background-color: rgb(228, 228, 228);\n      padding: 5px;\n      cursor: pointer;\n      border-radius: 3px;\n  }\n  \n  .hide, #hide{\n    display: none;\n  }\n  \n  .ProjectDeleteIcon{\n    margin-left:0;\n    margin-right: auto;\n  }\n  \n  .addTaskInsideContainer > *, .input-add-task-button{\n    font-family: arial;\n    font-size: 1em;\n    font-weight: 600;\n  }\n  \n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/navIcon.svg":
/*!********************************!*\
  !*** ./src/assets/navIcon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "navIcon.svg";

/***/ }),

/***/ "./src/assets/tickLogo.svg":
/*!*********************************!*\
  !*** ./src/assets/tickLogo.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tickLogo.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_tickLogo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/tickLogo.svg */ "./src/assets/tickLogo.svg");
/* harmony import */ var _assets_navIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/navIcon.svg */ "./src/assets/navIcon.svg");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
//import {addDays} from "date-fns";

//const date = new Date();
//const tom =addDays(date,1);
//console.log();




var tickLogo = document.querySelector('[tick-Logo]');
tickLogo.src = _assets_tickLogo_svg__WEBPACK_IMPORTED_MODULE_0__;
var navIcon = document.querySelector('[nav-Icon]');
navIcon.src = _assets_navIcon_svg__WEBPACK_IMPORTED_MODULE_1__;

// save point for overall Project List
var LOCAL_STORAGE_LIST_key = "project.lists";
var projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_key)) || [];

// save point for current Selected local
var LOCAL_STORAGE_SELECTED_PROJECT_KEY_ID = "project.selected.list";
var selectedProjectID = null;
selectedProjectID = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY_ID));
console.log("index:" + selectedProjectID);
function saveLocal() {
  localStorage.setItem(LOCAL_STORAGE_LIST_key, JSON.stringify(projectList));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY_ID, JSON.stringify(selectedProjectID));
}

//Project Constructor|| e.target.closest.firstChild.toLowerCase() === 'p'
function newProject(name) {
  var projectName = name;
  var ID = Date.now().toString();
  var taskArray = [];
  return {
    projectName: projectName,
    ID: ID,
    taskArray: taskArray
  };
}

//Task Constructor
function newTask(name, details, dueDate, priority) {
  var complete = false;
  var TaskName = name;
  var ID = Date.now().toString();
  return {
    TaskName: TaskName,
    details: details,
    dueDate: dueDate,
    priority: priority,
    ID: ID,
    complete: complete
  };
}
var createTask = function createTask(TaskName, details, dueDate, priority, ID) {
  var task = newTask(TaskName, details, dueDate, priority, ID);
  var activeProject = projectList.find(function (project) {
    return project.ID === selectedProjectID;
  });
  activeProject.taskArray.push(task);
  saveLocal();
  render.projectListDisplay(projectListContainer);
  console.log(projectList);
  addTaskForm.classList.add("hide");
  addTask.classList.remove("hide");
};

//for render DOM declerations
var taskTemplate = document.querySelector("#task-template");
var taskContainer = document.querySelector("[data-task-container]");

//RENDER AND DISPLAY IIFE module Pattern
var render = function () {
  var clearElements = function clearElements(element) {
    while (element.firstElementChild) {
      element.removeChild(element.firstElementChild);
    }
  };
  var projectListDisplay = function projectListDisplay() {
    render.clearElements(projectListContainer);
    projectList.forEach(function (project) {
      //generate Element for append   
      var listElement = document.createElement("li");
      listElement.dataset.listID = project.ID;
      listElement.classList.add("menuBar");
      var pElement = document.createElement("p");
      pElement.innerText = project.projectName;
      listElement.appendChild(pElement);
      if (project.ID == selectedProjectID) {
        listElement.classList.add("active-project");
        var editIcon = document.createElement("i");
        editIcon.classList.add("fa-solid");
        editIcon.classList.add("fa-pen-to-square");
        editIcon.classList.add("projectEditIcon");
        listElement.appendChild(editIcon);
        pElement.classList.add("activeTitle");
        //
        render.displayActiveTitle(project.projectName);
        render.taskListDisplay(project);
      }
      projectListContainer.appendChild(listElement);
    });
  };
  var taskListDisplay = function taskListDisplay(selectedProject) {
    //ongoing
    render.clearElements(taskContainer);
    selectedProject.taskArray.forEach(function (task) {
      var taskElement = document.importNode(taskTemplate.content, true);
      var checkbox = taskElement.querySelector("input");
      var label = taskElement.querySelector("label");
      var dueDate = taskElement.querySelector(".date");
      var prio = taskElement.querySelector(".prio");
      var taskDetails = taskElement.querySelector(".taskDetails");
      var taskDetailsContainer = taskElement.querySelector(".taskDetails-Container");
      checkbox.id = task.ID;
      checkbox.checked = task.complete;
      label.setAttribute("for", task.ID);
      label.append(task.TaskName);
      taskDetails.append(task.details);
      if (taskDetails === null || "") {
        taskDetails.append("do details provide");
      }
      dueDate.append("Due Date: " + task.dueDate);
      prio.append(task.priority.toUpperCase());
      if (task.priority === "low") {
        prio.style.color = "lightgreen";
      }
      if (task.priority === "mid") {
        prio.style.color = "orange";
      }
      if (task.priority === "high") {
        prio.style.color = "red";
      }
      taskDetailsContainer.append(taskDetails);
      taskDetailsContainer.append(dueDate);
      taskDetailsContainer.append(prio);
      taskContainer.appendChild(taskElement);
    });
  };
  var displayActiveTitle = function displayActiveTitle(title) {
    var displayTitle = document.querySelector("#currentActiveTitle");
    displayTitle.innerText = "";
    displayTitle.innerText = title;
  };
  return {
    clearElements: clearElements,
    projectListDisplay: projectListDisplay,
    displayActiveTitle: displayActiveTitle,
    taskListDisplay: taskListDisplay
  };
}();

//declare DOM  variables for New Project Form
var newProjectInput = document.querySelector('[data-new-project-input]');
var newprojectForm = document.querySelector('[data-new-project-form]');
var projectListContainer = document.querySelector("[data-project-list]");
//declare DOM  variables for New Task Form
var newTaskNameInput = document.querySelector('[data-new-taskName-input]');
var newTaskDetailsInput = document.querySelector('[data-new-taskDetails-input]');
var newTaskDateInput = document.querySelector('[data-new-taskDate-input]');
var newTaskPrioInput = document.querySelector('[data-new-prio-input]');
var addTaskBTN = document.querySelector('[input-add-task-button]');

//initial Load Calls
render.projectListDisplay(projectListContainer);

//Event listners and operations  IIFE module Pattern
var event = function () {
  //Submit New Task Form
  addTaskBTN.addEventListener("click", function (e) {
    console.log("add log");
    var taskName = newTaskNameInput.value;
    if (taskName == null || taskName === "") return;
    var TaskDetails = newTaskDetailsInput.value;
    //if (TaskDetails == null || TaskDetails === "") return
    var priority = 'high'; //newTaskPrioInput.value
    var date = newTaskDateInput.value.toString();
    createTask(taskName, TaskDetails, date, priority);
    newTaskNameInput.value = null;
    saveLocal();
    render.projectListDisplay(projectListContainer);
    //reset taskform
    newTaskPrioInput.value = "";
    newTaskDateInput.value = null;
    newTaskDetailsInput.value = null;
    addProjectBTN.classList.remove("hide");
    addProjectForm.classList.add("hide");
  });

  //Submit New Project Form
  newprojectForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var projectName = newProjectInput.value;
    if (projectName == null || projectName === "") return;
    var project = newProject(projectName);
    newProjectInput.value = null;
    projectList.push(project);
    saveLocal();
    render.projectListDisplay(projectListContainer);
    addProjectBTN.classList.remove("hide");
    addProjectForm.classList.add("hide");
  });

  //Event Listeners
  newprojectForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var projectName = newProjectInput.value;
    if (projectName == null || projectName === "") return;
    var project = newProject(projectName);
    newProjectInput.value = null;
    projectList.push(project);
    saveLocal();
    render.projectListDisplay(projectListContainer);
    addProjectBTN.classList.remove("hide");
    addProjectForm.classList.add("hide");
  });

  //Select Active Project-list
  projectListContainer.addEventListener('click', function (e) {
    //console.log( e.target.tagName.toLowerCase() ) 
    if (e.target.tagName.toLowerCase() === 'li' || e.target.tagName.toLowerCase() === 'p') {
      selectedProjectID = e.target.closest("li").dataset.listID;
      saveLocal();
      render.projectListDisplay();
      event.listenEditProject();
    }
  });

  //Listener for  task checkbox toggle
  var taskContainer = document.querySelector("[data-task-container]");
  taskContainer.addEventListener('click', function (e) {
    //console.log( e.target.tagName.toLowerCase() ) 
    if (e.target.tagName.toLowerCase() === 'input') {
      //console.log( e.target.closest("input").id ) 
      var selectedProject = projectList.find(function (project) {
        return selectedProjectID === project.ID;
      });
      var selectedTask = selectedProject.taskArray.find(function (task) {
        return task.ID === e.target.closest("input").id;
      });
      selectedTask.complete = e.target.checked;
      saveLocal();
      render.projectListDisplay();
    }
  });

  //listener for delete Completed Tasks
  var deleteCopmepletedBTN = document.querySelector("[delete-completed-BTN]");
  deleteCopmepletedBTN.addEventListener('click', function (e) {
    var selectedProject = projectList.find(function (project) {
      return selectedProjectID === project.ID;
    });
    selectedProject.taskArray = selectedProject.taskArray.filter(function (task) {
      return task.complete === false;
    });
    saveLocal();
    render.projectListDisplay();
  });

  //Select Active Project-list
  var listenEditProject = function listenEditProject() {
    //event Listeners for EDIT/DELETE active Projects
    var activeProjectContainer = document.querySelector(".active-project");
    var ProjectEditIcon = document.querySelector(".projectEditIcon");
    var activeTitle = document.querySelector(".activeTitle");
    //listener for edit/delete active project
    ProjectEditIcon.addEventListener('click', function (e) {
      activeProjectContainer.removeChild(ProjectEditIcon);
      //create trash icon
      var ProjectDeleteIcon = document.createElement("i");
      ProjectDeleteIcon.classList.add("fa-solid");
      ProjectDeleteIcon.classList.add("fa-trash-can");
      ProjectDeleteIcon.classList.add("ProjectDeleteIcon");
      //create Cancel icon
      var ProjectCancelIcon = document.createElement("i");
      ProjectCancelIcon.classList.add("fa-solid");
      ProjectCancelIcon.classList.add("fa-xmark");
      ProjectCancelIcon.classList.add("ProjectCancelIcon");
      activeProjectContainer.removeChild(activeTitle);
      //create rename form
      var renameInputForm = document.createElement("form");
      renameInputForm.setAttribute("action", "");
      //create rename input
      var renameInput = document.createElement("input");
      renameInput.setAttribute("type", "input");
      renameInput.classList.add("addProject-input");
      renameInput.value = activeTitle.textContent;
      //append everything to display
      activeProjectContainer.appendChild(renameInputForm);
      renameInputForm.appendChild(renameInput);
      activeProjectContainer.appendChild(ProjectDeleteIcon);
      activeProjectContainer.appendChild(ProjectCancelIcon);
      //eventlisteners  for Rename, delete and cancel (set everytime editIcon is clicked)
      renameInputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        projectList.forEach(function (project) {
          if (project.ID === selectedProjectID) project.projectName = renameInput.value;
        });
        saveLocal();
        render.projectListDisplay();
      });
      ProjectDeleteIcon.addEventListener('click', function (e) {
        if (confirm("Are you sure you want to delete this Project?")) {
          // User clicked OK
          projectList = projectList.filter(function (project) {
            return project.ID !== selectedProjectID;
          });
          selectedProjectID = null;
          saveLocal();
          render.projectListDisplay();
        } else {
          // Cancel
        }
      });
      ProjectCancelIcon.addEventListener('click', function (e) {
        saveLocal();
        render.projectListDisplay();
        event.listenEditProject();
      });
    });
  };
  return {
    listenEditProject: listenEditProject
  };
}();
if (selectedProjectID !== null) {
  event.listenEditProject();
}

//createTask("Jogging", "around gateway for 30mins / 5km", "02/26/2025"  ,"mid") ;

/* 
projectList.forEach(project => {
    if (project.ID === selectedProjectID) {
        project.projectName = "gumana";
    }
})
render.projectListDisplay();
*/

//out UI JS here due to variables  declared at main js is not recognized  by  UI JS after bundling

// Light/Dark Mode Theme  (HTML Color Change theme)
function setTheme(theme) {
  var persist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var on = theme;
  var off = theme === 'light' ? 'dark' : 'light';
  var htmlEl = document.documentElement;
  htmlEl.classList.add(on);
  htmlEl.classList.remove(off);
  if (persist) {
    localStorage.setItem('preferred-theme', theme);
  }
}

// Light/Dark Mode Theme (UI Switch change)
var toggle = document.getElementById('toggle-input');
var lightIcon = document.getElementById('light-icon');
var darkIcon = document.getElementById('dark-icon');
function updateUI(theme) {
  toggle.checked = theme === 'light';
  if (theme === 'dark') {
    lightIcon.classList.add('hide');
    darkIcon.classList.remove('hide');
  } else {
    darkIcon.classList.add('hide');
    lightIcon.classList.remove('hide');
  }
}
toggle.addEventListener('click', function () {
  var theme = toggle.checked ? 'light' : 'dark';
  setTheme(theme, true);
  updateUI(theme);
});
var osPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
var preferredTheme = localStorage.getItem('preferred-theme') || osPreference;
setTheme(preferredTheme, false);
updateUI(preferredTheme);

//Nav auto hide in small screen.
//open/close thru menu button
var menu = document.querySelector(".navIcon");
var main = document.querySelector("main");
var menuStatus = "closed";
menu.addEventListener('click', function () {
  if (menuStatus === "closed") {
    main.classList.add("showPanel");
    menuStatus = "open";
  } else {
    main.classList.remove("showPanel");
    menuStatus = "closed";
  }
});

//Show/Hide Add task form
var addTask = document.querySelector(".addTask");
var addTaskForm = document.querySelector(".addTask-form");
var addTaskcancel = document.querySelector(".Xcancel");
addTask.addEventListener("click", function () {
  console.log("hi");
  if (selectedProjectID === null) {
    alert("Select A Project");
    return;
  }
  addTask.classList.add("hide");
  addTaskForm.classList.remove("hide");
});
addTaskcancel.addEventListener("click", function () {
  addTaskForm.classList.add("hide");
  addTask.classList.remove("hide");
});

//Show/Hide Add Project form
var addProjectBTN = document.querySelector(".addProject");
var addProjectForm = document.querySelector(".addProjectForm");
var ProjectCancel = document.querySelector(".ProjectCancel");
addProjectBTN.addEventListener("click", function () {
  addProjectBTN.classList.add("hide");
  addProjectForm.classList.remove("hide");
});
ProjectCancel.addEventListener("click", function () {
  addProjectBTN.classList.remove("hide");
  addProjectForm.classList.add("hide");
});
function changeColor(value) {
  //change color for prior select on add task
  var prioInput = document.querySelector(".priority-input");
  if (value === "") {
    prioInput.style.border = "";
  }
  if (value === "low") {
    prioInput.style.border = "2px solid green";
  }
  if (value === "mid") {
    prioInput.style.border = "2px solid orange";
  }
  if (value === "high") {
    prioInput.style.border = "2px solid red";
  }
}

/*
<template id="task-template">
<div class="taskContainer">
    <input 
    id="task-1"
    type="checkbox">
    <label  for="task-1">
        <span class="custom-checkbox"></span>
        Pay Bills
    </label>
    
    <p class="taskDetails">primeWater , Meralco , FiberBlaze, Rent, Credit Card</p>
    <p class="date">Due Date: 02/26/2025</p>
</div>
</template>
*/
/******/ })()
;
//# sourceMappingURL=bundlesff4b01a7c06eae400e93.js.map