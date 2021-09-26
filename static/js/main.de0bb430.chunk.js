(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{22:function(n,e,t){"use strict";t.r(e);var i,c,r,o,s,d,a,l,b,h,j,x,p,g,u,O,v,f,m=t(0),F=t.n(m),w=t(11),y=t.n(w),k=t(2),S=t(3),D=Object(S.a)(i||(i=Object(k.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Helvetica;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n"]))),A=t(8),C=S.b.div(c||(c=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  background-color: ",";\n  cursor: pointer;\n  border-radius: 8px;\n\n  transition: background-color 300ms;\n"])),(function(n){var e=n.isActive;return void 0!==e&&e?"#EFEFEF":"#FDFDFD"})),E=S.b.div(r||(r=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  margin-right: 16px;\n  cursor: pointer;\n\n  > img {\n     width: 20px;\n     height: 20px;\n  }\n"]))),B=S.b.label(o||(o=Object(k.a)(["\n  font-weight: 600;\n  color: ",";\n  cursor: pointer;\n  white-space: nowrap;\n\n  transition: color 300ms;\n"])),(function(n){var e=n.isActive;return void 0!==e&&e?"#2B2F33":"#8F8F8F"})),I=t(1),J=function(n){var e=n.children,t=n.iconSrc,i=n.isActive,c=n.onClick;return Object(I.jsxs)(C,{isActive:i,onClick:c,children:[Object(I.jsx)(E,{children:Object(I.jsx)("img",{src:t,alt:"icon"})}),Object(I.jsx)(B,{isActive:i,children:e})]})},z=t(24),P=Object(S.b)(z.a.div)(s||(s=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  background-color: #FDFDFD;\n  box-shadow:\n      0 1px 1px hsl(0deg 0% 0% / 0.075),\n      0 2px 2px hsl(0deg 0% 0% / 0.075),\n      0 4px 4px hsl(0deg 0% 0% / 0.075),\n      0 8px 8px hsl(0deg 0% 0% / 0.075),\n      0 16px 16px hsl(0deg 0% 0% / 0.075)\n    ;\n  overflow: hidden;\n  z-index: 1;\n"]))),L=S.b.div(d||(d=Object(k.a)(["\n\n"]))),T=S.b.div(a||(a=Object(k.a)(["\n  width: 100%;\n  padding: 16px;\n"]))),H=S.b.div(l||(l=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background-color: #86D5A9;\n  cursor: pointer;\n\n  > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #FDFDFD;\n\n    > div {\n      width: 6px;\n      height: 6px;\n      border-radius: 50%;\n      background-color: #4ABF7F;\n    }\n  }\n"]))),M=S.b.div(b||(b=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n\n  div + div {\n    margin-top: 16px;\n  }\n"]))),q=S.b.div(h||(h=Object(k.a)(["\n  margin: 0 16px;\n"]))),G=Object(S.b)(z.a.div)(j||(j=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-top: 2px solid #E0E0E0;\n  overflow: hidden;\n\n  > div {\n    margin-top: 16px;\n    background-color: transparent;\n  }\n\n  div:last-child {\n    margin-bottom: 16px;\n  }\n"]))),K=S.b.div(x||(x=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  padding: 16px 0;\n  cursor: pointer;\n"]))),N=S.b.div(p||(p=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #FFC299;\n  margin-right: 16px;\n  color: #E05A00;\n  font-weight: 800;\n  cursor: pointer;\n"]))),Q=S.b.div(g||(g=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),R=S.b.label(u||(u=Object(k.a)(['\n  font-weight: 800;\n  color: "#2B2F33";\n  white-space: nowrap;\n  color: #2B2F33;\n  cursor: pointer;\n']))),U=S.b.label(O||(O=Object(k.a)(['\n  font-weight: 800;\n  font-size: 12px;\n  color: "#2B2F33";\n  white-space: nowrap;\n  color: #8F8F8F;\n  cursor: pointer;\n']))),V={open:{width:"300px"},closed:{width:"72px"}},W={open:{height:"auto"},closed:{height:"0"}},X=[{text:"Dashboard",iconSrc:"/dashboard.svg",passiveIconSrc:"/dashboardDisabled.svg"},{text:"Settings",iconSrc:"/settings.svg",passiveIconSrc:"/settingsDisabled.svg"}],Y=function(){var n=Object(m.useState)(!0),e=Object(A.a)(n,2),t=e[0],i=e[1],c=Object(m.useState)(!1),r=Object(A.a)(c,2),o=r[0],s=r[1],d=Object(m.useState)(0),a=Object(A.a)(d,2),l=a[0],b=a[1];return Object(I.jsxs)(P,{animate:t?"open":"closed",variants:V,transition:{type:"tween",ease:"easeInOut",duration:.2},initial:!1,children:[Object(I.jsxs)(L,{children:[Object(I.jsx)(T,{children:Object(I.jsx)(H,{onClick:function(){return i(!t)},children:Object(I.jsx)("div",{children:Object(I.jsx)("div",{})})})}),Object(I.jsx)(M,{children:X.map((function(n,e){return Object(I.jsx)(J,{iconSrc:e===l?n.iconSrc:n.passiveIconSrc,isActive:e===l,onClick:function(){return b(e)},children:n.text},n.text)}))})]}),Object(I.jsxs)(q,{children:[Object(I.jsxs)(G,{animate:o?"open":"closed",variants:W,transition:{type:"tween",ease:"easeInOut",duration:.2},initial:!1,children:[Object(I.jsx)(J,{iconSrc:"/logout.svg",isActive:!0,children:"Sign Out"}),Object(I.jsx)(J,{iconSrc:"/settings.svg",isActive:!0,children:"Profile"})]}),Object(I.jsxs)(K,{onClick:function(){return s(!o)},children:[Object(I.jsx)(N,{children:"JD"}),Object(I.jsxs)(Q,{children:[Object(I.jsx)(R,{children:"John Doe"}),Object(I.jsx)(U,{children:"john@doe.com"})]})]})]})]})},Z=S.b.main(v||(v=Object(k.a)(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  background-color: #F5F5F5;\n"]))),$=function(n){var e=n.children;return Object(I.jsx)(Z,{children:e})},_=S.b.div(f||(f=Object(k.a)(["\n  flex: 1;\n"]))),nn=function(){return Object(I.jsx)(_,{})};var en=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(D,{}),Object(I.jsxs)($,{children:[Object(I.jsx)(Y,{}),Object(I.jsx)(nn,{})]})]})},tn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),c(n),r(n),o(n)}))};y.a.render(Object(I.jsx)(F.a.StrictMode,{children:Object(I.jsx)(en,{})}),document.getElementById("root")),tn()}},[[22,1,2]]]);
//# sourceMappingURL=main.de0bb430.chunk.js.map