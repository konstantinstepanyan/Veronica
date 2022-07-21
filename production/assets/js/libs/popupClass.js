export class Popup{constructor(i){this.triggerSelectors=i.triggerSelectors,this.overlaySelector=i.overlaySelector,this.windowSelector=i.windowSelector,this.closeBtnSelectors=i.closeBtnSelectors,this.displayPopup=i.displayPopup||"flex",this.popupHeight=i.popupHeight||"100vh",this.popupWidth=i.popupWidth||"100%",this.disappearingTime=i.disappearingTime||600,this.disappearingType=i.disappearingType||"linear",this.slidingTime=i.slidingTime||500,this.slidingType=i.slidingType||"ease",this.slidingDir=i.slidingDir||"top",this.autocloseTime=i.autocloseTime,this.openOnKeys=i.openOnKeys,this.closeOnKeys=i.closeOnKeys,this.closeOnMiss=i.closeOnMiss||!0,this.appearType=i.appearType||"slide",this.popupOverlay=document.querySelector(`${this.overlaySelector}`),this.popupWindow=document.querySelector(`${this.windowSelector}`),console.log(this.appearType),this.init()}init(){if(this.hide(),this.triggerSelectors.forEach((i,e)=>{const s=document.querySelector(i);s.addEventListener("click",this.show.bind(this)),s.addEventListener("touchstart",this.show.bind(this))}),this.closeBtnSelectors.forEach((i,e)=>{const s=document.querySelector(i);console.log(s),s.addEventListener("click",this.hide.bind(this)),s.addEventListener("touchstart",this.hide.bind(this))}),this.closeOnMiss){const i=this.overlaySelector.slice(1);this.popupOverlay.addEventListener("click",e=>{e.target.classList.contains(`${i}`)&&this.hide()}),this.popupOverlay.addEventListener("touchstart",e=>{e.target.classList.contains(`${i}`)&&this.hide()})}const i=(i=!1,e,s)=>{i&&document.addEventListener(e,e=>{i.forEach(t=>{console.log(i),t==e.keyCode&&(console.log(this),s())})})};i(this.openOnKeys,"keydown",this.show.bind(this)),i(this.closeOnKeys,"keydown",this.hide.bind(this))}show(){if(this.popupOverlay.style.zIndex=999999,"slide"==this.appearType)switch(this.popupWindow.style.transition=`all ${this.slidingTime/1e3}s ${this.slidingType}, height 0s ${this.slidingType} 0s`,this.slidingTime&&this.slidingType&&this.slidingDir){case"left":this.popupWindow.style.left="0px";break;case"right":this.popupWindow.style.right="0px";break;case"top":this.popupWindow.style.top="0px";break;case"bottom":this.popupWindow.style.bottom="0px"}this.popupOverlay.style.height=this.popupHeight,this.popupOverlay.style.width=this.popupWidth,this.popupOverlay.style.opacity=1,this.popupOverlay.style.transition=`opacity ${this.disappearingTime/1e3}s ${this.disappearingType}, height 0s ${this.disappearingType} 0s`,this.autocloseTime&&setTimeout(()=>{this.hide()},this.autocloseTime)}hide(){if(this.popupOverlay.style.height=0,this.popupOverlay.style.opacity=0,console.log(this.popupOverlay),"slide"==this.appearType)switch(this.popupWindow.style.transition=`all ${this.slidingTime/1e3}s ${this.slidingType}, height 0s ${this.slidingType} ${this.slidingTime/1e3}s`,this.slidingDir){case"left":this.popupWindow.style.left="-100%";break;case"right":this.popupWindow.style.right="-100%";break;case"top":this.popupWindow.style.top="-100%";break;case"bottom":this.popupWindow.style.bottom="-100%"}this.popupOverlay.style.transition=`opacity ${this.disappearingTime/1e3}s ${this.disappearingType}, height 0s ${this.disappearingType} ${this.disappearingTime/1e3}s`}}