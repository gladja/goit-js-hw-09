const t={bodyEl:document.querySelector("body"),btnStartEl:document.querySelector("[data-start]"),btnStopEl:document.querySelector("[data-stop]")};t.btnStartEl.addEventListener("click",function(){e=setInterval(()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.btnStartEl.setAttribute("disabled","disabled"),console.log("start")},1e3)}),t.btnStopEl.addEventListener("click",function(){clearInterval(e),t.btnStartEl.removeAttribute("disabled"),console.log("stop")});let e=null;
//# sourceMappingURL=01-color-switcher.fbf389f0.js.map
