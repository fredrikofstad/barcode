import{r,f as n,h as s,c as l,i,o as a}from"./index-CZK5oghP.js";const p={__name:"BackTop",setup(c){const o=r(!1),e=()=>{o.value=window.scrollY>300},t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return n(()=>{window.addEventListener("scroll",e)}),s(()=>{window.removeEventListener("scroll",e)}),(d,u)=>o.value?(a(),l("button",{key:0,onClick:t,class:"fixed bottom-4 right-4 bg-gradient-to-r from-primary to-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer transition-opacity duration-300 hover:bg-blue-600"}," ↑ ")):i("",!0)}};export{p as default};
