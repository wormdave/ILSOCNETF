import{d as _,u as d,a as h,c as m,b as p,r as u,e as s,f as t,t as a,g as r,F as f,h as g,n as v,i as x,o as n,j as y,k as b,l as N,m as k,_ as P}from"./index-8WZwgXqg.js";import{N as T}from"./NoteDisplay-eyconFzQ.js";const w={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},H={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},j=_({__name:"PresenterPrint",setup(z){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=p(()=>u.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),s("div",{id:"page-root",style:v(r(x))},[t("div",w,[t("div",L,[t("h1",S,a(r(m).title),1),t("div",V,a(new Date().toLocaleString()),1)]),(n(!0),s(f,null,g(i.value,(e,c)=>(n(),s("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",B,[t("div",C,a(e==null?void 0:e.no)+"/"+a(r(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),D])]),N(T,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),s("hr",F)):k("v-if",!0)]))),128))])],4))}}),M=P(j,[["__file","/home/dave/ILSOCNETFIGHT/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{M as default};
