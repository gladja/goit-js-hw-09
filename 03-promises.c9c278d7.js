!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("6JpON");let l={formEl:document.querySelector(".form")};l.formEl.addEventListener("input",function(e){let t=e.target.name;"delay"===t&&(a=Number(e.target.value)),"step"===t&&(u=Number(e.target.value)),"amount"===t&&(f=e.target.value)}),l.formEl.addEventListener("submit",function(t){t.preventDefault();let n=a;for(let t=0;t<f;t+=1)(function(t,n){let o=Math.random()>.3,r=new Promise((e,r)=>{setTimeout(()=>{o?e({position:t,delay:n}):r({position:t,delay:n})},n)});r.then(({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)}).catch(({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})})(d+=1,a),a+=u;d=0,a=n});let a=0,u=0,f=0,d=0}();
//# sourceMappingURL=03-promises.c9c278d7.js.map
