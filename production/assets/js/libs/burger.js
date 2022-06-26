export class MenuToggler{constructor(t){this.menuTriggerSelector=t.menuTriggerSelector,this.menuSelector=t.menuSelector,this.type=t.type||"appear",this.transitionTime=t.transitionTime||".25s",this.transitionType=t.transitionType||".ease",this.menuDisplay=t.menuDisplay||"block",this.slideBegin=t.slideBegin||"translate(-100%, 0px)",this.slideEnd=t.slideEnd||"translate(0px, 0px)",this.menuTrigger=document.querySelector(`${this.menuTriggerSelector}`),this.menu=document.querySelector(`${this.menuSelector}`),this.isChanging=!1,this.state="hide",this.init()}init(){this.menuTrigger.addEventListener("click",this.toggle.bind(this)),"appear"==this.type&&(this.menu.style.opacity=0,this.menu.style.display="none",this.menu.addEventListener("transitionend",t=>{t.target==this.menu&&(this.isChanging=!1,"hide"==this.state&&(this.menu.style.display="none"))})),"slide"==this.type&&(document.body.style.overflowX="hidden",this.setVendorStyleProperty(this.menu,"transform",this.slideBegin),setTimeout(()=>{this.setVendorStyleProperty(this.menu,"transition",`transform ${this.transitionTime} ${this.transitionType}`)},1))}setVendorStyleProperty(t,e,s){t.style["webkit"+e]=s,t.style["moz"+e]=s,t.style["ms"+e]=s,t.style["o"+e]=s,t.style[e]=s}toggle(){if("appear"==this.type&&!this.isChanging){if("1"==this.menu.style.opacity)return this.setVendorStyleProperty(this.menu,"transition",`opacity ${this.transitionTime} ${this.transitionType}`),this.menuTrigger.classList.contains("burger")&&this.menuTrigger.classList.remove("burger_close"),this.state="hide",this.menu.style.opacity="0",void(this.isChanging=!0);if("0"==this.menu.style.opacity)return this.menuTrigger.classList.contains("burger")&&this.menuTrigger.classList.add("burger_close"),this.state="show",this.menu.style.display=this.menuDisplay,void setTimeout(()=>{this.setVendorStyleProperty(this.menu,"transition",`opacity ${this.transitionTime} ${this.transitionType}`),this.menu.style.height="initial",this.menu.style.opacity="1",this.isChanging=!0},1)}"slide"!=this.type||this.isChanging||(this.menu.style.transform==this.slideBegin?(this.menuTrigger.classList.contains("burger")&&this.menuTrigger.classList.add("burger_close"),this.setVendorStyleProperty(this.menu,"transform",this.slideEnd),this.menu.style.transform=this.slideEnd,console.log(this.menu),console.log(this.menu.style.transform)):(this.menuTrigger.classList.contains("burger")&&this.menuTrigger.classList.remove("burger_close"),this.setVendorStyleProperty(this.menu,"transform",this.slideBegin),this.menu.style.transform=this.slideBegin,console.log(this.menu),console.log(this.menu.style.transform)))}}