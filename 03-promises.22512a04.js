function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var i=r("7Y9D8");const l={formEl:document.querySelector(".form")};l.formEl.addEventListener("input",function(e){let t=e.target.name;"delay"===t&&(a=Number(e.target.value)),"step"===t&&(u=Number(e.target.value)),"amount"===t&&(d=e.target.value)}),l.formEl.addEventListener("submit",function(t){t.preventDefault();let o=a;for(let t=0;t<d;t+=1)(function(t,o){let n=Math.random()>.3,r=new Promise((e,r)=>{setTimeout(()=>{n?e({position:t,delay:o}):r({position:t,delay:o})},o)});r.then(({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)}).catch(({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})})(f+=1,a),a+=u;f=0,a=o});let a=0,u=0,d=0,f=0;
//# sourceMappingURL=03-promises.22512a04.js.map
