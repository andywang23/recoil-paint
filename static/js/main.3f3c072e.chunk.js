(this["webpackJsonprecoil-paint"]=this["webpackJsonprecoil-paint"]||[]).push([[0],{131:function(e,t,n){e.exports=n(313)},313:function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),o=n(25),i=n.n(o),c=n(314),s=n(15),u=n(1),a=n(315),m="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/shapes/Element.js";function b({x:e,y:t,width:n,height:l,fill:o,label:i,style:s,onMouseDown:u,onClick:b}){return r.a.createElement(c.a,{style:[_.root,{top:t,left:e,width:n,height:l,backgroundColor:o},s],onMouseDown:u,onClick:b,__self:this,__source:{fileName:m,lineNumber:8,columnNumber:5}},i?r.a.createElement(a.a,{__self:this,__source:{fileName:m,lineNumber:26,columnNumber:9}},i):null)}const _=s.a.create({root:{position:"absolute",justifyContent:"center",alignItems:"center"}});const f=s.a.create({root:{}});const N=s.a.create({root:{borderRadius:"50%"}}),h={rect:function(e){return r.a.createElement(b,Object.assign({},e,{style:f.root,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/shapes/Rectangle.js",lineNumber:7,columnNumber:5}}))},ellipse:function(e){return r.a.createElement(b,Object.assign({},e,{style:N.root,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/shapes/Ellipse.js",lineNumber:7,columnNumber:5}}))}};const d={},g={type:"rect",x:0,y:0,label:"Recoil",fill:"#dbdde4",width:200,height:100};let p=1;function j(e){let t=p++;return d[t]=Object.assign({id:t},g,e),t}function y(e){return d[e]||g}const E=Object(u.atom)({key:"canvasLayoutState",default:{x:0,y:0,width:800,height:600}}),v=Object(u.atom)({key:"backgroundColorState",default:"white"}),w=Object(u.atom)({key:"itemIdsState",default:[]}),O=Object(u.atom)({key:"selectedIdsState",default:[]}),x=Object(u.atom)({key:"movingItemIdsState",default:[]}),k=Object(u.atom)({key:"movingItemsSnapshotState",default:{}}),S=function(e){let t=new Map;return(n,...l)=>{if(t.has(n))return t.get(n);const r=e(n,...l);return t.set(n,r),r}}(e=>Object(u.atom)({key:"item"+e,default:y(e)}));function C(e,t){return Object(u.selector)({key:e,get:({get:e})=>{const n=e(t);return n.length?n.map(t=>e(S(t))):[]},set:({set:e},t)=>{t.forEach(t=>{let n=t.id;e(S(n),t)})}})}const D=C("selectedItemsSelector",O),R=C("movingItemsSelector",x),H=(C("allItemsSelector",w),Object(u.selector)({key:"selectionBoundingBox",get:({get:e})=>function(e){if(!e.length)return null;let t=null,n=null,l=null,r=null;return e.forEach(e=>{(null===t||e.x<t)&&(t=e.x),(null===l||e.y<l)&&(l=e.y),(null===n||e.x+e.width>n)&&(n=e.x+e.width),(null===r||e.y+e.height>r)&&(r=e.y+e.height)}),{x:t,y:l,width:n-t,height:r-l,isMutilple:e.length>1}}(e(D))}));function I(e){const[t,n]=Object(l.useState)(!1),[r,o]=Object(l.useState)({clientX:0,clientY:0}),[i,c]=Object(l.useState)({x:0,y:0}),s=Object(l.useCallback)((t,n,l,r)=>{e({status:t,isMoving:n,origin:l,offset:r})},[e]),u=Object(l.useCallback)(({clientX:e,clientY:t,metaKey:l,shiftKey:r})=>{let c={clientX:e,clientY:t,metaKey:l,shiftKey:r};n(!0),o(c),s("start",!0,c,i)},[s,i]),a=Object(l.useCallback)(({clientX:e,clientY:n})=>{if(!t)return;const l={x:e-r.clientX,y:n-r.clientY};c(l),s("moving",!0,r,l)},[s,t,r]),m=Object(l.useCallback)(()=>{t&&(n(!1),c({x:0,y:0}),s("end",!1,r,i))},[s,t,i,r]);return Object(l.useEffect)(()=>{function e(){window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",m)}return t?(window.addEventListener("mousemove",a),window.addEventListener("mouseup",m)):e(),e},[a,m,t]),{onMouseDown:u}}function M(e){const[t,n]=Object(u.useRecoilState)(R),[r,o]=Object(u.useRecoilState)(k),i=Object(u.useRecoilValue)(x),{onMouseDown:c}=I(l=>{const{status:o,offset:c}=l;e(l),"moving"===o&&i.length&&n(t.map(e=>{let t=r[e.id];return t?{...t,x:t.x+c.x,y:t.y+c.y}:e}))});return Object(l.useEffect)(()=>{o(t.reduce((e,t)=>Object.assign(e,{[t.id]:t}),{}))},[i]),{onMouseDown:c}}function G({id:e}){const t=Object(u.useRecoilValue)(S(e)),n=Object(u.useSetRecoilState)(x),[l,o]=Object(u.useRecoilState)(O),{onMouseDown:i}=M(({status:t,origin:r})=>{if("start"===t){let t;t=r.metaKey||r.shiftKey?[...l,e]:[e],o(t),n([e])}"end"===t&&n([])}),c=function(e){const{type:t}=e;return h[t]}(t);return c?r.a.createElement(c,Object.assign({},t,{onMouseDown:i,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/CanvasItem.js",lineNumber:36,columnNumber:10}})):null}var U="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/ResizeHandler.js";function L(){const[e,t]=Object(u.useRecoilState)(D),[n,o]=Object(l.useState)(null),{onMouseDown:i}=I(({status:l,offset:r})=>{1===e.length&&("start"===l&&o(e),"moving"===l&&t(n.map(e=>function(e,t){let{x:n,y:l,width:r,height:o}=e;return r+=t.x,o+=t.y,r<0&&(r=-r,n-=r),o<0&&(o=-o,l-=o),{...e,x:n,y:l,width:r,height:o}}(e,r))))});if(1!==e.length)return null;const{x:s,y:a,width:m,height:b}=e[0];return r.a.createElement(c.a,{style:[V.resizeHandler,{left:s+m,top:a+b}],onMouseDown:i,__self:this,__source:{fileName:U,lineNumber:57,columnNumber:5}},r.a.createElement(c.a,{style:V.resizeHandlerDot,__self:this,__source:{fileName:U,lineNumber:64,columnNumber:7}}))}const V=s.a.create({resizeHandler:{width:24,height:24,marginLeft:-13,marginTop:-13,justifyContent:"center",alignItems:"center",cursor:"nwse-resize"},resizeHandlerDot:{width:10,height:10,borderRadius:4,backgroundColor:"white",borderWidth:2,borderColor:"blue",position:"absolute"}});var B="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/Selection.js";function W(){const e=Object(u.useRecoilValue)(O),t=Object(u.useRecoilValue)(H),n=Object(u.useSetRecoilState)(x),{onMouseDown:l}=M(({status:l})=>{if(!t)return null;"start"===l&&n(e),"end"===l&&n([])});if(!t)return null;const{x:o,y:i,width:s,height:a}=t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{style:[z.selection,{left:o,top:i,width:s,height:a}],onMouseDown:l,__self:this,__source:{fileName:B,lineNumber:36,columnNumber:7}}),r.a.createElement(L,{__self:this,__source:{fileName:B,lineNumber:45,columnNumber:7}}))}const z=s.a.create({selection:{borderWidth:2,borderStyle:"dashed",borderColor:"blue",position:"absolute",cursor:"move"}});function T(e){const t=Object(u.useSetRecoilState)(O),n=Object(u.useRecoilValue)(v),o=Object(l.useCallback)(()=>{t([])},[t]);return r.a.createElement(c.a,{style:[s.a.absoluteFill,{backgroundColor:n}],onClick:o,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/CanvasBackground.js",lineNumber:15,columnNumber:5}})}var X="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/Canvas.js";function Y(){const e=Object(l.useRef)(),t=Object(u.useRecoilValue)(w),n=Object(u.useSetRecoilState)(E);return r.a.createElement(c.a,{style:K.root,ref:e,onLayout:({nativeEvent:{layout:{x:e,y:t,width:l,height:r}}})=>n({x:e,y:t,width:l,height:r}),__self:this,__source:{fileName:X,lineNumber:21,columnNumber:5}},r.a.createElement(T,{__self:this,__source:{fileName:X,lineNumber:22,columnNumber:7}}),t.map(e=>r.a.createElement(G,{key:"item-"+e,id:e,__self:this,__source:{fileName:X,lineNumber:23,columnNumber:26}})),r.a.createElement(W,{__self:this,__source:{fileName:X,lineNumber:24,columnNumber:7}}))}const K=s.a.create({root:{flex:1,backgroundColor:"white"},svg:{flex:1}});var Z="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/toolbar/Button.js";function P({Icon:e,disabled:t,style:n,...l}){return r.a.createElement(c.a,Object.assign({accessibilityRole:"button",disabled:t,style:[$.root,t&&$.disabled,n]},l,{__self:this,__source:{fileName:Z,lineNumber:7,columnNumber:5}}),r.a.createElement(e,{style:[t&&$.disabledIcon],__self:this,__source:{fileName:Z,lineNumber:13,columnNumber:7}}))}const $=s.a.create({root:{borderWidth:1,borderColor:"#ccc",backgroundColor:"#fff",width:32,height:32,justifyContent:"center",alignItems:"center",borderRadius:4},disabled:{cursor:"default",opacity:.8},disabledIcon:{fill:"#ccc"}});var A=n(22);function F(e){const{ariaLabel:t,children:n,width:l,height:r,viewBox:o}=e,i=[J.root,e.style];return Object(A.a)("svg",{role:"presentation",width:l,height:r,"aria-label":t,style:i,viewBox:o||"0 0 24 24"},n)}F.defaultProps={width:24,height:24};const J=s.a.create({root:{display:"inline-block",fill:"currentcolor",height:"1.25em",maxWidth:"100%",position:"relative",userSelect:"none",textAlignVertical:"text-bottom"},iconRtl:{transform:[{scaleX:-1}]}});var q="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/icons/Image.js";function Q(e){return r.a.createElement(F,Object.assign({},e,{__self:this,__source:{fileName:q,lineNumber:7,columnNumber:5}}),r.a.createElement("g",{__self:this,__source:{fileName:q,lineNumber:10,columnNumber:7}},r.a.createElement("path",{d:"M19.235,1.75H4.765c-1.662,0-3.015,1.352-3.015,3.015v14.471c0,1.662,1.352,3.015,3.015,3.015h14.471  c1.662,0,3.015-1.352,3.015-3.015V4.765C22.25,3.102,20.898,1.75,19.235,1.75z M21.044,19.235c0,0.997-0.811,1.809-1.809,1.809  H4.765c-0.997,0-1.809-0.811-1.809-1.809v-2.181l4.866-5.407l6.573,5.975l3.635-3.029l3.015,2.512V19.235z M21.044,15.536  l-3.015-2.512l-3.601,3L7.737,9.94l-4.781,5.312V4.765c0-0.997,0.811-1.809,1.809-1.809h14.471c0.997,0,1.809,0.811,1.809,1.809  V15.536z",__self:this,__source:{fileName:q,lineNumber:11,columnNumber:9}}),r.a.createElement("path",{d:"M16.221,10.794c1.662,0,3.015-1.352,3.015-3.015s-1.352-3.015-3.015-3.015c-1.662,0-3.015,1.352-3.015,3.015  S14.558,10.794,16.221,10.794z M16.221,5.971c0.997,0,1.809,0.811,1.809,1.809s-0.811,1.809-1.809,1.809s-1.809-0.811-1.809-1.809  S15.223,5.971,16.221,5.971z",__self:this,__source:{fileName:q,lineNumber:12,columnNumber:9}})))}var ee="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/icons/Square.js";function te(e){return r.a.createElement(F,Object.assign({},e,{__self:this,__source:{fileName:ee,lineNumber:7,columnNumber:5}}),r.a.createElement("g",{transform:"matrix(.48 0 0 .48 0 0)",__self:this,__source:{fileName:ee,lineNumber:10,columnNumber:7}},r.a.createElement("path",{fill:"#000",d:"M44 1h-38c-2.757 0-5 2.243-5 5v38c0 2.757 2.243 5 5 5h38c2.757 0 5-2.243 5-5v-38c0-2.757-2.243-5-5-5Zm3 43c0 1.654-1.346 3-3 3h-38c-1.654 0-3-1.346-3-3v-38c0-1.654 1.346-3 3-3h38c1.654 0 3 1.346 3 3v38Z",__self:this,__source:{fileName:ee,lineNumber:11,columnNumber:9}})))}function ne({style:e}){const[t,n]=Object(u.useRecoilState)(w),[l,o]=Object(u.useRecoilState)(x),i=Object(u.useSetRecoilState)(O),c=Object(u.useRecoilValue)(E),{onMouseDown:s}=M(({status:e,origin:r})=>{if("start"===e){let e=j({x:r.clientX-c.x,y:r.clientY-c.y});n([...t,e]),i([]),o([e])}"end"===e&&(i([...l]),o([]))});return r.a.createElement(P,{Icon:te,style:e,onMouseDown:s,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/toolbar/NewRectangleButton.js",lineNumber:36,columnNumber:10}})}var le="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/icons/Statistics.js";function re(e){return r.a.createElement(F,Object.assign({},e,{__self:this,__source:{fileName:le,lineNumber:7,columnNumber:5}}),r.a.createElement("g",{transform:"matrix(.380952 0 0 .380952 0 0)",__self:this,__source:{fileName:le,lineNumber:10,columnNumber:7}},r.a.createElement("path",{d:"M10 9h-8c-1.104 0-2 .896-2 2v40c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-40c0-1.104-.896-2-2-2Z",__self:this,__source:{fileName:le,lineNumber:11,columnNumber:9}}),r.a.createElement("path",{d:"M27.833 23h-8c-1.104 0-2.833.11-2.833.864v27.273c0 .753 1.729 1.863 2.833 1.863h8c1.105 0 1.167-1.11 1.167-1.863v-27.273c0-.754-.062-.864-1.167-.864Z",__self:this,__source:{fileName:le,lineNumber:12,columnNumber:9}}),r.a.createElement("path",{d:"M44.5 12h-8c-1.104 0-2.5.334-2.5 1.364v37.273c0 1.029 1.396 2.363 2.5 2.363h8c1.104 0 1.5-1.334 1.5-2.363v-37.273c0-1.03-.396-1.364-1.5-1.364Z",__self:this,__source:{fileName:le,lineNumber:13,columnNumber:9}}),r.a.createElement("path",{d:"M61.5 37h-8c-1.104 0-2.5-.175-2.5.228v14.545c0 .402 1.396 1.227 2.5 1.227h8c1.104 0 1.5-.825 1.5-1.228v-14.544c0-.403-.396-.228-1.5-.228Z",__self:this,__source:{fileName:le,lineNumber:14,columnNumber:9}})))}var oe="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/toolbar/Toolbar.js";function ie(){return r.a.createElement(c.a,{style:ce.root,__self:this,__source:{fileName:oe,lineNumber:10,columnNumber:5}},r.a.createElement(ne,{style:ce.button,__self:this,__source:{fileName:oe,lineNumber:11,columnNumber:7}}),r.a.createElement(P,{disabled:!0,Icon:Q,style:ce.button,__self:this,__source:{fileName:oe,lineNumber:12,columnNumber:7}}),r.a.createElement(P,{disabled:!0,Icon:re,style:ce.button,__self:this,__source:{fileName:oe,lineNumber:13,columnNumber:7}}))}const ce=s.a.create({root:{flexDirection:"row",marginBottom:16},button:{marginRight:8}});var se="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/sidebar/ItemInfo.js";function ue({id:e}){const t=Object(u.useRecoilValue)(S(e)),{label:n,x:l,y:o}=t;return r.a.createElement(c.a,{style:ae.root,__self:this,__source:{fileName:se,lineNumber:11,columnNumber:5}},n&&r.a.createElement(a.a,{style:ae.label,__self:this,__source:{fileName:se,lineNumber:12,columnNumber:17}},n),r.a.createElement(a.a,{style:ae.subLabel,__self:this,__source:{fileName:se,lineNumber:13,columnNumber:7}},`(x = ${l} y = ${o})`))}const ae=s.a.create({root:{marginBottom:16},label:{fontWeight:"bold"},subLabel:{}});var me="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/sidebar/ItemInfoList.js";function be(){const e=Object(u.useRecoilValue)(w);return r.a.createElement(c.a,{style:_e.root,__self:this,__source:{fileName:me,lineNumber:11,columnNumber:5}},e.map(e=>r.a.createElement(ue,{key:"item-info-"+e,id:e,__self:this,__source:{fileName:me,lineNumber:12,columnNumber:26}})))}const _e=s.a.create({root:{flex:1,overflow:"auto"}});var fe="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/sidebar/Sidebar.js";function Ne(){return r.a.createElement(c.a,{style:he.root,__self:this,__source:{fileName:fe,lineNumber:8,columnNumber:5}},r.a.createElement(ie,{__self:this,__source:{fileName:fe,lineNumber:9,columnNumber:7}}),r.a.createElement(be,{__self:this,__source:{fileName:fe,lineNumber:10,columnNumber:7}}))}const he=s.a.create({root:{width:240,height:"100vh",borderRightWidth:1,borderRightColor:"#ccc",borderRightType:"solid",padding:16}});var de=n(130),ge="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/infobar/ColorPicker.js";function pe(){const[e,t]=Object(l.useState)(!1),[n,o]=Object(u.useRecoilState)(v),i=Object(l.useCallback)(e=>{o(e.hex)},[o]),s=Object(l.useCallback)(()=>{t(!0)},[]);return Object(l.useEffect)(()=>{function e(e){e.target.closest("#color-picker")||t(!1)}return document.body.addEventListener("click",e),()=>{document.body.removeEventListener("click",e)}},[]),r.a.createElement(c.a,{style:je.root,onClick:s,__self:this,__source:{fileName:ge,lineNumber:35,columnNumber:5}},r.a.createElement(c.a,{style:[je.inner,{backgroundColor:n}],__self:this,__source:{fileName:ge,lineNumber:36,columnNumber:7}}),e&&r.a.createElement(c.a,{style:je.popup,nativeID:"color-picker",__self:this,__source:{fileName:ge,lineNumber:38,columnNumber:9}},r.a.createElement(de.SketchPicker,{color:n,onChangeComplete:i,__self:this,__source:{fileName:ge,lineNumber:39,columnNumber:11}})))}const je=s.a.create({root:{borderRadius:"50%",backgroundColor:"white",borderWidth:1,borderColor:"#ccc",width:24,height:24,marginLeft:16,padding:2},inner:{borderRadius:"50%",width:18,height:18},popup:{position:"absolute",right:32}});var ye=n(316);function Ee(e){const{value:t,style:n,onChangeNumber:l,...o}=e;return r.a.createElement(ye.a,Object.assign({},o,{value:t,style:[ve.input,n],onChangeText:e=>{let t=parseInt(e);isNaN(t)||l(t)},__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/infobar/NumberInput.js",lineNumber:16,columnNumber:5}}))}const ve=s.a.create({input:{flex:1,paddingVertical:8,paddingHorizontal:8,backgroundColor:"white",borderRadius:4,borderColor:"#ccc",borderWidth:1,marginTop:8}});var we="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/infobar/SelectionInfo.js";function Oe(){const[e,t]=Object(u.useRecoilState)(D),n=Object(l.useCallback)((n,l)=>{t([{...e[0],[n]:l}])},[e,t]);if(1!==e.length)return null;const o=e[0];return r.a.createElement(c.a,{style:xe.root,__self:this,__source:{fileName:we,lineNumber:22,columnNumber:5}},r.a.createElement(c.a,{style:xe.row,__self:this,__source:{fileName:we,lineNumber:23,columnNumber:7}},r.a.createElement(a.a,{__self:this,__source:{fileName:we,lineNumber:24,columnNumber:9}},"Selection:")),r.a.createElement(c.a,{style:xe.row,__self:this,__source:{fileName:we,lineNumber:26,columnNumber:7}},r.a.createElement(c.a,{style:xe.column,__self:this,__source:{fileName:we,lineNumber:27,columnNumber:9}},r.a.createElement(a.a,{style:xe.bold,__self:this,__source:{fileName:we,lineNumber:28,columnNumber:11}},"X"),r.a.createElement(Ee,{value:o.x,style:xe.input,onChangeNumber:e=>n("x",e),__self:this,__source:{fileName:we,lineNumber:29,columnNumber:11}})),r.a.createElement(c.a,{style:xe.columnSpace,__self:this,__source:{fileName:we,lineNumber:35,columnNumber:9}}),r.a.createElement(c.a,{style:xe.column,__self:this,__source:{fileName:we,lineNumber:36,columnNumber:9}},r.a.createElement(a.a,{style:xe.bold,__self:this,__source:{fileName:we,lineNumber:37,columnNumber:11}},"Y"),r.a.createElement(Ee,{value:o.y,style:xe.input,onChangeNumber:e=>n("y",e),__self:this,__source:{fileName:we,lineNumber:38,columnNumber:11}}))),r.a.createElement(c.a,{style:xe.labelRow,__self:this,__source:{fileName:we,lineNumber:45,columnNumber:7}},r.a.createElement(a.a,{style:xe.bold,__self:this,__source:{fileName:we,lineNumber:46,columnNumber:9}},"Label:"),r.a.createElement(ye.a,{value:o.label,style:xe.input,onChangeText:e=>n("label",e),__self:this,__source:{fileName:we,lineNumber:47,columnNumber:9}})))}const xe=s.a.create({root:{},row:{marginBottom:24,flexDirection:"row",alignItems:"center"},labelRow:{},column:{flex:1},columnSpace:{width:8},bold:{fontWeight:"bold"},input:{flex:1,paddingVertical:8,paddingHorizontal:8,backgroundColor:"white",borderRadius:4,borderColor:"#ccc",borderWidth:1,marginTop:8}});var ke="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/infobar/InformationBar.js";function Se({children:e}){return r.a.createElement(c.a,{style:De.row,__self:this,__source:{fileName:ke,lineNumber:8,columnNumber:5}},e)}function Ce(){return r.a.createElement(c.a,{style:De.root,__self:this,__source:{fileName:ke,lineNumber:14,columnNumber:5}},r.a.createElement(Se,{__self:this,__source:{fileName:ke,lineNumber:15,columnNumber:7}},r.a.createElement(a.a,{__self:this,__source:{fileName:ke,lineNumber:16,columnNumber:9}},"Document:")),r.a.createElement(Se,{__self:this,__source:{fileName:ke,lineNumber:18,columnNumber:7}},r.a.createElement(a.a,{style:De.title,__self:this,__source:{fileName:ke,lineNumber:19,columnNumber:9}},"Background color:"),r.a.createElement(pe,{__self:this,__source:{fileName:ke,lineNumber:20,columnNumber:9}})),r.a.createElement(Oe,{__self:this,__source:{fileName:ke,lineNumber:22,columnNumber:7}}))}const De=s.a.create({root:{width:240,borderLeftWidth:1,borderLeftColor:"#ccc",borderLeftType:"solid",padding:16},row:{marginBottom:24,flexDirection:"row",alignItems:"center"},title:{fontWeight:"bold"}});var Re="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/Main.js";function He(){return r.a.createElement(c.a,{style:Ie.root,__self:this,__source:{fileName:Re,lineNumber:9,columnNumber:5}},r.a.createElement(Ne,{__self:this,__source:{fileName:Re,lineNumber:10,columnNumber:7}}),r.a.createElement(Y,{__self:this,__source:{fileName:Re,lineNumber:11,columnNumber:7}}),r.a.createElement(Ce,{__self:this,__source:{fileName:Re,lineNumber:12,columnNumber:7}}))}const Ie=s.a.create({root:{height:"100vh",flexDirection:"row",backgroundColor:"#ebeef2"}});var Me="/Users/junminliu/Documents/GitHub/recoil-paint/src/App.js";var Ge=function(){return r.a.createElement(u.RecoilRoot,{__self:this,__source:{fileName:Me,lineNumber:7,columnNumber:5}},r.a.createElement(He,{__self:this,__source:{fileName:Me,lineNumber:8,columnNumber:7}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue="/Users/junminliu/Documents/GitHub/recoil-paint/src/index.js";i.a.render(r.a.createElement(r.a.StrictMode,{__self:void 0,__source:{fileName:Ue,lineNumber:7,columnNumber:3}},r.a.createElement(Ge,{__self:void 0,__source:{fileName:Ue,lineNumber:8,columnNumber:5}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}},[[131,1,2]]]);
//# sourceMappingURL=main.3f3c072e.chunk.js.map