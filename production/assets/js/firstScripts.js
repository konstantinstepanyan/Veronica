import{MenuToggler}from"./libs/burger.js";import{cancelWebp}from"./libs/canUseWebp.js";import{lazyLoad}from"./libs/lazyLoad.js";document.addEventListener("DOMContentLoaded",()=>{window.addEventListener("keydown",e=>{if(116==e.keyCode)return console.log(e.key),e.preventDefault(),!1}),cancelWebp(),lazyLoad()});