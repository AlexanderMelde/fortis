try{
var k="storybook/a11y",J=`${k}/panel`,de="a11y",et=`${k}/result`,tt=`${k}/request`,rt=`${k}/running`,nt=`${k}/error`,at=`${k}/manual`,w={RESULT:et,REQUEST:tt,RUNNING:rt,ERROR:nt,MANUAL:at};var a=__REACT__,{Children:_n,Component:it,Fragment:M,Profiler:Sn,PureComponent:me,StrictMode:vn,Suspense:On,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:xn,cloneElement:W,createContext:fe,createElement:g,createFactory:Cn,createRef:pe,forwardRef:ot,isValidElement:ge,lazy:In,memo:An,useCallback:I,useContext:he,useDebugValue:kn,useEffect:G,useImperativeHandle:Dn,useLayoutEffect:Ee,useMemo:j,useReducer:Nn,useRef:z,useState:A,version:wn}=__REACT__;var Bn=__STORYBOOKAPI__,{ActiveTabs:Mn,Consumer:Gn,ManagerContext:$n,Provider:Wn,addons:U,combineParameters:jn,controlOrMetaKey:zn,controlOrMetaSymbol:Fn,eventMatchesShortcut:Un,eventToShortcut:Yn,isMacLike:Vn,isShortcutTaken:Kn,keyToSymbol:Xn,merge:qn,mockChannel:Qn,optionOrAltSymbol:Jn,shortcutMatchesShortcut:Zn,shortcutToHumanString:ea,types:Z,useAddonState:Re,useArgTypes:ta,useArgs:ra,useChannel:Y,useGlobalTypes:na,useGlobals:aa,useParameter:ye,useSharedState:ia,useStoryPrepared:oa,useStorybookApi:be,useStorybookState:Te}=__STORYBOOKAPI__;var da=__STORYBOOKTHEMING__,{CacheProvider:ma,ClassNames:fa,Global:_e,ThemeProvider:pa,background:ga,color:ha,convert:V,create:Ea,createCache:Ra,createGlobal:ya,createReset:ba,css:Ta,darken:_a,ensure:Sa,ignoreSsrWarning:va,isPropValid:Oa,jsx:xa,keyframes:Ca,lighten:Ia,styled:o,themes:K,typography:Aa,useTheme:ka,withTheme:Da}=__STORYBOOKTHEMING__;var Pa=__STORYBOOKCOMPONENTS__,{A:Ba,ActionBar:ee,AddonPanel:Ma,Badge:Se,Bar:Ga,Blockquote:$a,Button:Wa,ClipboardCode:ja,Code:za,DL:Fa,Div:Ua,DocumentWrapper:Ya,ErrorFormatter:Va,FlexBar:Ka,Form:Xa,H1:qa,H2:Qa,H3:Ja,H4:Za,H5:ei,H6:ti,HR:ri,IconButton:ve,IconButtonSkeleton:ni,Icons:H,Img:ai,LI:ii,Link:oi,ListItem:li,Loader:ci,OL:si,P:ui,Placeholder:Oe,Pre:di,ResetWrapper:mi,ScrollArea:xe,Separator:fi,Spaced:pi,Span:gi,StorybookIcon:hi,StorybookLogo:Ei,Symbols:Ri,SyntaxHighlighter:yi,TT:bi,TabBar:Ti,TabButton:_i,TabWrapper:Si,Table:vi,Tabs:Oi,TabsState:xi,TooltipLinkList:Ce,TooltipMessage:Ci,TooltipNote:Ii,UL:Ai,WithTooltip:Ie,WithTooltipPure:ki,Zoom:Di,codeCommon:Ni,components:wi,createCopyToClipboardFunction:Hi,getStoryHref:Li,icons:Pi,interleaveSeparators:Bi,nameSpaceClassNames:Mi,resetComponents:Gi,withReset:$i}=__STORYBOOKCOMPONENTS__;var Ui=__REACTDOM__,{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Yi,createPortal:Vi,findDOMNode:Ae,flushSync:Ki,hydrate:Xi,render:qi,unmountComponentAtNode:Qi,unstable_batchedUpdates:Ji,unstable_createPortal:Zi,unstable_renderSubtreeIntoContainer:eo,version:to}=__REACTDOM__;var re=function(e,r){return re=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])},re(e,r)};function lt(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");re(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}var ne=function(){return ne=Object.assign||function(r){for(var n,t=1,i=arguments.length;t<i;t++){n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(r[c]=n[c])}return r},ne.apply(this,arguments)};function ct(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]]);return n}var X=typeof globalThis<"u"?globalThis:typeof window<"u"||typeof window<"u"?window:typeof self<"u"?self:{};function st(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var ie=st,ut=typeof X=="object"&&X&&X.Object===Object&&X,dt=ut,mt=dt,ft=typeof self=="object"&&self&&self.Object===Object&&self,pt=mt||ft||Function("return this")(),Be=pt,gt=Be,ht=function(){return gt.Date.now()},Et=ht,Rt=/\s/;function yt(e){for(var r=e.length;r--&&Rt.test(e.charAt(r)););return r}var bt=yt,Tt=bt,_t=/^\s+/;function St(e){return e&&e.slice(0,Tt(e)+1).replace(_t,"")}var vt=St,Ot=Be,xt=Ot.Symbol,Me=xt,ke=Me,Ge=Object.prototype,Ct=Ge.hasOwnProperty,It=Ge.toString,$=ke?ke.toStringTag:void 0;function At(e){var r=Ct.call(e,$),n=e[$];try{e[$]=void 0;var t=!0}catch{}var i=It.call(e);return t&&(r?e[$]=n:delete e[$]),i}var kt=At,Dt=Object.prototype,Nt=Dt.toString;function wt(e){return Nt.call(e)}var Ht=wt,De=Me,Lt=kt,Pt=Ht,Bt="[object Null]",Mt="[object Undefined]",Ne=De?De.toStringTag:void 0;function Gt(e){return e==null?e===void 0?Mt:Bt:Ne&&Ne in Object(e)?Lt(e):Pt(e)}var $t=Gt;function Wt(e){return e!=null&&typeof e=="object"}var jt=Wt,zt=$t,Ft=jt,Ut="[object Symbol]";function Yt(e){return typeof e=="symbol"||Ft(e)&&zt(e)==Ut}var Vt=Yt,Kt=vt,we=ie,Xt=Vt,He=0/0,qt=/^[-+]0x[0-9a-f]+$/i,Qt=/^0b[01]+$/i,Jt=/^0o[0-7]+$/i,Zt=parseInt;function er(e){if(typeof e=="number")return e;if(Xt(e))return He;if(we(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=we(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Kt(e);var n=Qt.test(e);return n||Jt.test(e)?Zt(e.slice(2),n?2:8):qt.test(e)?He:+e}var tr=er,rr=ie,te=Et,Le=tr,nr="Expected a function",ar=Math.max,ir=Math.min;function or(e,r,n){var t,i,c,u,s,f,p=0,d=!1,m=!1,l=!0;if(typeof e!="function")throw new TypeError(nr);r=Le(r)||0,rr(n)&&(d=!!n.leading,m="maxWait"in n,c=m?ar(Le(n.maxWait)||0,r):c,l="trailing"in n?!!n.trailing:l);function y(h){var S=t,v=i;return t=i=void 0,p=h,u=e.apply(v,S),u}function b(h){return p=h,s=setTimeout(R,r),d?y(h):u}function T(h){var S=h-f,v=h-p,B=r-S;return m?ir(B,c-v):B}function E(h){var S=h-f,v=h-p;return f===void 0||S>=r||S<0||m&&v>=c}function R(){var h=te();if(E(h))return _(h);s=setTimeout(R,T(h))}function _(h){return s=void 0,l&&t?y(h):(t=i=void 0,u)}function L(){s!==void 0&&clearTimeout(s),p=0,t=f=i=s=void 0}function P(){return s===void 0?u:_(te())}function N(){var h=te(),S=E(h);if(t=arguments,i=this,f=h,S){if(s===void 0)return b(f);if(m)return clearTimeout(s),s=setTimeout(R,r),y(f)}return s===void 0&&(s=setTimeout(R,r)),u}return N.cancel=L,N.flush=P,N}var $e=or,lr=$e,cr=ie,sr="Expected a function";function ur(e,r,n){var t=!0,i=!0;if(typeof e!="function")throw new TypeError(sr);return cr(n)&&(t="leading"in n?!!n.leading:t,i="trailing"in n?!!n.trailing:i),lr(e,r,{leading:t,maxWait:r,trailing:i})}var dr=ur,We=function(e,r,n,t){switch(r){case"debounce":return $e(e,n,t);case"throttle":return dr(e,n,t);default:return e}},ae=function(e){return typeof e=="function"},D=function(){return typeof window>"u"},Pe=function(e){return e instanceof Element||e instanceof HTMLDocument},je=function(e,r,n,t){return function(i){var c=i.width,u=i.height;r(function(s){return s.width===c&&s.height===u||s.width===c&&!t||s.height===u&&!n?s:(e&&ae(e)&&e(c,u),{width:c,height:u})})}},co=function(e){lt(r,e);function r(n){var t=e.call(this,n)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var p=t.props,d=p.targetRef,m=p.observerOptions;if(!D()){d&&d.current&&(t.targetRef.current=d.current);var l=t.getElement();l&&(t.observableElement&&t.observableElement===l||(t.observableElement=l,t.resizeObserver.observe(l,m)))}},t.getElement=function(){var p=t.props,d=p.querySelector,m=p.targetDomEl;if(D())return null;if(d)return document.querySelector(d);if(m&&Pe(m))return m;if(t.targetRef&&Pe(t.targetRef.current))return t.targetRef.current;var l=Ae(t);if(!l)return null;var y=t.getRenderType();switch(y){case"renderProp":return l;case"childFunction":return l;case"child":return l;case"childArray":return l;default:return l.parentElement}},t.createResizeHandler=function(p){var d=t.props,m=d.handleWidth,l=m===void 0?!0:m,y=d.handleHeight,b=y===void 0?!0:y,T=d.onResize;if(!(!l&&!b)){var E=je(T,t.setState.bind(t),l,b);p.forEach(function(R){var _=R&&R.contentRect||{},L=_.width,P=_.height,N=!t.skipOnMount&&!D();N&&E({width:L,height:P}),t.skipOnMount=!1})}},t.getRenderType=function(){var p=t.props,d=p.render,m=p.children;return ae(d)?"renderProp":ae(m)?"childFunction":ge(m)?"child":Array.isArray(m)?"childArray":"parent"};var i=n.skipOnMount,c=n.refreshMode,u=n.refreshRate,s=u===void 0?1e3:u,f=n.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=i,t.targetRef=pe(),t.observableElement=null,D()||(t.resizeHandler=We(t.createResizeHandler,c,s,f),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}return r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){D()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var n=this.props,t=n.render,i=n.children,c=n.nodeType,u=c===void 0?"div":c,s=this.state,f=s.width,p=s.height,d={width:f,height:p,targetRef:this.targetRef},m=this.getRenderType(),l;switch(m){case"renderProp":return t&&t(d);case"childFunction":return l=i,l(d);case"child":if(l=i,l.type&&typeof l.type=="string"){d.targetRef;var y=ct(d,["targetRef"]);return W(l,y)}return W(l,d);case"childArray":return l=i,l.map(function(b){return!!b&&W(b,d)});default:return g(u,null)}},r}(me);var mr=D()?G:Ee;function q(e){e===void 0&&(e={});var r=e.skipOnMount,n=r===void 0?!1:r,t=e.refreshMode,i=e.refreshRate,c=i===void 0?1e3:i,u=e.refreshOptions,s=e.handleWidth,f=s===void 0?!0:s,p=e.handleHeight,d=p===void 0?!0:p,m=e.targetRef,l=e.observerOptions,y=e.onResize,b=z(n),T=z(null),E=m??T,R=z(),_=A({width:void 0,height:void 0}),L=_[0],P=_[1];return mr(function(){if(!D()){var N=je(y,P,f,d),h=function(v){!f&&!d||v.forEach(function(B){var ue=B&&B.contentRect||{},Qe=ue.width,Je=ue.height,Ze=!b.current&&!D();Ze&&N({width:Qe,height:Je}),b.current=!1})};R.current=We(h,t,c,u);var S=new window.ResizeObserver(R.current);return E.current&&S.observe(E.current,l),function(){S.disconnect();var v=R.current;v&&v.cancel&&v.cancel()}}},[t,c,u,f,d,y,l,E.current]),ne({ref:E},L)}var po=__STORYBOOKCOREEVENTS__,{CHANNEL_CREATED:go,CONFIG_ERROR:ho,CURRENT_STORY_WAS_SET:Eo,DOCS_PREPARED:Ro,DOCS_RENDERED:yo,FORCE_REMOUNT:bo,FORCE_RE_RENDER:To,GLOBALS_UPDATED:_o,IGNORED_EXCEPTION:So,NAVIGATE_URL:vo,PLAY_FUNCTION_THREW_EXCEPTION:Oo,PRELOAD_ENTRIES:xo,PREVIEW_BUILDER_PROGRESS:Co,PREVIEW_KEYDOWN:Io,REGISTER_SUBSCRIPTION:Ao,REQUEST_WHATS_NEW_DATA:ko,RESET_STORY_ARGS:Do,RESULT_WHATS_NEW_DATA:No,SELECT_STORY:wo,SET_CONFIG:Ho,SET_CURRENT_STORY:Lo,SET_GLOBALS:Po,SET_INDEX:Bo,SET_STORIES:Mo,SET_WHATS_NEW_CACHE:Go,SHARED_STATE_CHANGED:$o,SHARED_STATE_SET:Wo,STORIES_COLLAPSE_ALL:jo,STORIES_EXPAND_ALL:zo,STORY_ARGS_UPDATED:Fo,STORY_CHANGED:ze,STORY_ERRORED:Uo,STORY_INDEX_INVALIDATED:Yo,STORY_MISSING:Vo,STORY_PREPARED:Ko,STORY_RENDERED:Fe,STORY_RENDER_PHASE_CHANGED:Xo,STORY_SPECIFIED:qo,STORY_THREW_EXCEPTION:Qo,STORY_UNCHANGED:Jo,TELEMETRY_ERROR:Zo,TOGGLE_WHATS_NEW_NOTIFICATIONS:el,UPDATE_GLOBALS:tl,UPDATE_QUERY_PARAMS:rl,UPDATE_STORY_ARGS:nl}=__STORYBOOKCOREEVENTS__;var Ue="storybook/highlight";var oe=`${Ue}/add`,fr=`${Ue}/reset`;var pr=e=>g("svg",{...e},g("defs",null,g("filter",{id:"protanopia"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"protanomaly"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"deuteranopia"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"deuteranomaly"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"tritanopia"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0"})),g("filter",{id:"tritanomaly"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"achromatopsia"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0"})))),gr="storybook-preview-iframe",hr=[{name:"blurred vision",percentage:22.9},{name:"deuteranomaly",percentage:2.7},{name:"deuteranopia",percentage:.56},{name:"protanomaly",percentage:.66},{name:"protanopia",percentage:.59},{name:"tritanomaly",percentage:.01},{name:"tritanopia",percentage:.016},{name:"achromatopsia",percentage:1e-4},{name:"grayscale"}],Ke=e=>e?e==="blurred vision"?"blur(2px)":e==="grayscale"?"grayscale(100%)":`url('#${e}')`:"none",Er=o.div(()=>({"&, & svg":{position:"absolute",width:0,height:0}})),Rr=o.span({background:"linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)",borderRadius:"1rem",display:"block",height:"1rem",width:"1rem"},({filter:e})=>({filter:Ke(e)}),({theme:e})=>({boxShadow:`${e.appBorderColor} 0 0 0 1px inset`})),yr=o.span({display:"flex",flexDirection:"column"}),br=o.span({textTransform:"capitalize"}),Tr=o.span(({theme:e})=>({fontSize:11,color:e.textMutedColor})),_r=(e,r)=>[...e!==null?[{id:"reset",title:"Reset color filter",onClick:()=>{r(null)},right:void 0,active:!1}]:[],...hr.map(n=>{let t=n.percentage!==void 0?`${n.percentage}% of users`:void 0;return{id:n.name,title:a.createElement(yr,null,a.createElement(br,null,n.name),t&&a.createElement(Tr,null,t)),onClick:()=>{r(n)},right:a.createElement(Rr,{filter:n.name}),active:e===n}})],Sr=()=>{let[e,r]=A(null);return a.createElement(a.Fragment,null,e&&a.createElement(_e,{styles:{[`#${gr}`]:{filter:Ke(e.name)}}}),a.createElement(Ie,{placement:"top",tooltip:({onHide:n})=>{let t=_r(e,i=>{r(i),n()});return a.createElement(Ce,{links:t})},closeOnOutsideClick:!0,onDoubleClick:()=>r(null)},a.createElement(ve,{key:"filter",active:!!e,title:"Vision simulator"},a.createElement(H,{icon:"accessibility"}))),a.createElement(Er,null,a.createElement(pr,null)))},vr=o.div({padding:12,marginBottom:10}),Or=o.p({margin:"0 0 12px"}),xr=o.a({marginTop:12,textDecoration:"underline",color:"inherit",display:"block"}),Cr=({item:e})=>a.createElement(vr,null,a.createElement(Or,null,e.description),a.createElement(xr,{href:e.helpUrl,target:"_blank"},"More info...")),Ir=o.div({display:"flex",flexDirection:"column",paddingBottom:4,paddingRight:4,paddingTop:4,fontWeight:400}),Ar=o.div(({elementWidth:e})=>({flexDirection:e>407?"row":"inherit",marginBottom:e>407?6:12,display:e>407?"flex":"block"})),kr=o(Se)({padding:"2px 8px",marginBottom:3,minWidth:65,maxWidth:"fit-content",width:"100%",textAlign:"center"}),Dr=o.div({paddingLeft:6,paddingRight:23}),Nr=e=>e.charAt(0).toUpperCase().concat(e.slice(1)),wr=({rule:e})=>{let{ref:r,width:n}=q({refreshMode:"debounce",handleHeight:!1,handleWidth:!0}),t=null;switch(e.impact){case"critical":t="critical";break;case"serious":t="negative";break;case"moderate":t="warning";break;case"minor":t="neutral";break;default:break}return a.createElement(Ar,{ref:r,elementWidth:n||0},a.createElement(kr,{status:t},Nr(e.impact)),a.createElement(Dr,null,e.message))},Hr=({rules:e})=>a.createElement(Ir,null,e.map((r,n)=>a.createElement(wr,{rule:r,key:n}))),Lr=[V(K.light).color.negative,V(K.light).color.positive,V(K.light).color.warning],Xe=fe({results:{passes:[],incomplete:[],violations:[]},setResults:()=>{},highlighted:[],toggleHighlight:()=>{},clearHighlights:()=>{},tab:0,setTab:()=>{}}),Ye={passes:[],incomplete:[],violations:[]},Pr=({active:e,...r})=>{let[n,t]=Re(k,Ye),[i,c]=A(0),[u,s]=A([]),f=be().getCurrentStoryData(),p=I((T,E)=>{s(R=>E?[...R,...T]:R.filter(_=>!T.includes(_)))},[]),d=T=>{b(w.REQUEST,T)},m=I(()=>s([]),[]),l=I(T=>{m(),c(T)},[]),y=I(()=>{c(0),t(Ye)},[]),b=Y({[Fe]:d,[ze]:y});return G(()=>{b(oe,{elements:u,color:Lr[i]})},[u,i]),G(()=>{e&&f?.type==="story"?d(f.id):m()},[e,m,b,f]),e?g(Xe.Provider,{value:{results:n,setResults:t,highlighted:u,toggleHighlight:p,clearHighlights:m,tab:i,setTab:l},...r}):null},ce=()=>he(Xe),Br=o.input(({disabled:e})=>({cursor:e?"not-allowed":"pointer"}));function Ve(e,r){let n=e.filter(t=>r.includes(t.target[0])).length;return n===0?1:n===e.length?0:2}var Mr=({toggleId:e,elementsToHighlight:r=[]})=>{let{toggleHighlight:n,highlighted:t}=ce(),i=a.useRef(null),[c,u]=a.useState(Ve(r,t));a.useEffect(()=>{let f=Ve(r,t);i.current&&(i.current.indeterminate=f===2),u(f)},[r,t]);let s=a.useCallback(()=>{n(r.map(f=>f.target[0]),c!==0)},[r,c,n]);return a.createElement(Br,{ref:i,id:e,type:"checkbox","aria-label":"Highlight result",disabled:!r.length,onChange:s,checked:c===0})},se=Mr,Gr=o.li({fontWeight:600}),$r=o.span(({theme:e})=>({borderBottom:`1px solid ${e.appBorderColor}`,width:"100%",display:"flex",paddingBottom:6,marginBottom:6,justifyContent:"space-between"})),Wr=o.span({fontWeight:"normal",alignSelf:"center",paddingRight:15,input:{margin:0,display:"block"}}),jr=({element:e,type:r})=>{let{any:n,all:t,none:i}=e,c=[...n,...t,...i],u=`${r}-${e.target[0]}`;return a.createElement(Gr,null,a.createElement($r,null,e.target[0],a.createElement(Wr,null,a.createElement(se,{toggleId:u,elementsToHighlight:[e]}))),a.createElement(Hr,{rules:c}))},zr=({elements:e,type:r})=>a.createElement("ol",null,e.map((n,t)=>a.createElement(jr,{element:n,key:t,type:r}))),Fr=o.div({display:"flex",flexWrap:"wrap",margin:"12px 0"}),Ur=o.div(({theme:e})=>({margin:"0 6px",padding:5,border:`1px solid ${e.appBorderColor}`,borderRadius:e.appBorderRadius})),Yr=({tags:e})=>a.createElement(Fr,null,e.map(r=>a.createElement(Ur,{key:r},r))),Vr=o.div(({theme:e})=>({display:"flex",width:"100%",borderBottom:`1px solid ${e.appBorderColor}`,"&:hover":{background:e.background.hoverable}})),Kr=o(H)(({theme:e})=>({height:10,width:10,minWidth:10,color:e.textMutedColor,marginRight:10,transition:"transform 0.1s ease-in-out",alignSelf:"center",display:"inline-flex"})),Xr=o.div(({theme:e})=>({padding:e.layoutMargin,paddingLeft:e.layoutMargin-3,lineHeight:"20px",background:"none",color:"inherit",textAlign:"left",cursor:"pointer",borderLeft:"3px solid transparent",width:"100%","&:focus":{outline:"0 none",borderLeft:`3px solid ${e.color.secondary}`}})),qr=o.span({fontWeight:"normal",float:"right",marginRight:15,alignSelf:"center",input:{margin:0,display:"block"}}),Qr=e=>{let[r,n]=A(!1),{item:t,type:i}=e,c=`${i}-${t.id}`;return a.createElement(M,null,a.createElement(Vr,null,a.createElement(Xr,{onClick:()=>n(!r),role:"button"},a.createElement(Kr,{icon:"arrowdown",color:"#9DA5AB",style:{transform:`rotate(${r?0:-90}deg)`}}),t.help),a.createElement(qr,null,a.createElement(se,{toggleId:c,elementsToHighlight:t.nodes}))),r?a.createElement(M,null,a.createElement(Cr,{item:t,key:"info"}),a.createElement(zr,{elements:t.nodes,type:i,key:"elements"}),a.createElement(Yr,{tags:t.tags,key:"tags"})):null)},le=({items:e,empty:r,type:n})=>a.createElement(M,null,e&&e.length?e.map(t=>a.createElement(Qr,{item:t,key:`${n}:${t.id}`,type:n})):a.createElement(Oe,{key:"placeholder"},r)),Jr=o.div({width:"100%",position:"relative",minHeight:"100%"}),Zr=o.label(({theme:e})=>({cursor:"pointer",userSelect:"none",color:e.color.dark})),en=o.div(({elementWidth:e,theme:r})=>({cursor:"pointer",fontSize:13,lineHeight:"20px",padding:e>450?"10px 15px 10px 0":"10px 0px 10px 15px",height:"40px",border:"none",marginTop:e>450?-40:0,float:e>450?"right":"left",display:"flex",alignItems:"center",width:e>450?"auto":"100%",borderBottom:e>450?"none":`1px solid ${r.appBorderColor}`,input:{marginLeft:10,marginRight:0,marginTop:-1,marginBottom:0}})),tn=o.button(({theme:e})=>({textDecoration:"none",padding:"10px 15px",cursor:"pointer",fontWeight:e.typography.weight.bold,fontSize:e.typography.size.s2-1,lineHeight:1,height:40,border:"none",borderTop:"3px solid transparent",borderBottom:"3px solid transparent",background:"transparent","&:focus":{outline:"0 none",borderBottom:`3px solid ${e.color.secondary}`}}),({active:e,theme:r})=>e?{opacity:1,borderBottom:`3px solid ${r.color.secondary}`}:{}),rn=o.div({}),nn=o.div(({theme:e})=>({boxShadow:`${e.appBorderColor} 0 -1px 0 0 inset`,background:e.background.app,display:"flex",justifyContent:"space-between",whiteSpace:"nowrap"}));function an(e){return e.reduce((r,n)=>r.concat(n.nodes),[])}var on=({tabs:e})=>{let{ref:r,width:n}=q({refreshMode:"debounce",handleHeight:!1,handleWidth:!0}),{tab:t,setTab:i}=ce(),c=I(f=>{i(parseInt(f.currentTarget.getAttribute("data-index")||"",10))},[i]),u=`${e[t].type}-global-checkbox`,s="Highlight results";return g(Jr,{ref:r},g(nn,null,g(rn,null,e.map((f,p)=>g(tn,{key:p,"data-index":p,active:t===p,onClick:c},f.label)))),e[t].items.length>0?g(en,{elementWidth:n||0},g(Zr,{htmlFor:u},s),g(se,{toggleId:u,elementsToHighlight:an(e[t].items)})):null,e[t].panel)},qe=o(H)({height:12,width:12,marginRight:4}),ln=o(qe)(({theme:e})=>({animation:`${e.animation.rotate360} 1s linear infinite;`})),cn=o.span(({theme:e})=>({color:e.color.positiveText})),sn=o.span(({theme:e})=>({color:e.color.negativeText})),un=o.span(({theme:e})=>({color:e.color.warningText})),Q=o.span({display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}),dn=()=>{let{manual:e}=ye("a11y",{manual:!1}),[r,n]=A(e?"manual":"initial"),[t,i]=a.useState(void 0),{setResults:c,results:u}=ce(),{storyId:s}=Te();a.useEffect(()=>{n(e?"manual":"initial")},[e]);let f=E=>{n("ran"),c(E),setTimeout(()=>{r==="ran"&&n("ready")},900)},p=I(()=>{n("running")},[]),d=I(E=>{n("error"),i(E)},[]),m=Y({[w.RUNNING]:p,[w.RESULT]:f,[w.ERROR]:d}),l=I(()=>{n("running"),m(w.MANUAL,s)},[s]),y=j(()=>[{title:"Run test",onClick:l}],[l]),b=j(()=>[{title:r==="ready"?"Rerun tests":a.createElement(a.Fragment,null,a.createElement(qe,{icon:"check"})," Tests completed"),onClick:l}],[r,l]),T=j(()=>{let{passes:E,incomplete:R,violations:_}=u;return[{label:a.createElement(sn,null,_.length," Violations"),panel:a.createElement(le,{items:_,type:0,empty:"No accessibility violations found."}),items:_,type:0},{label:a.createElement(cn,null,E.length," Passes"),panel:a.createElement(le,{items:E,type:1,empty:"No accessibility checks passed."}),items:E,type:1},{label:a.createElement(un,null,R.length," Incomplete"),panel:a.createElement(le,{items:R,type:2,empty:"No accessibility checks incomplete."}),items:R,type:2}]},[u]);return a.createElement(a.Fragment,null,r==="initial"&&a.createElement(Q,null,"Initializing..."),r==="manual"&&a.createElement(a.Fragment,null,a.createElement(Q,null,"Manually run the accessibility scan."),a.createElement(ee,{key:"actionbar",actionItems:y})),r==="running"&&a.createElement(Q,null,a.createElement(ln,{icon:"sync"})," Please wait while the accessibility scan is running ..."),(r==="ready"||r==="ran")&&a.createElement(a.Fragment,null,a.createElement(xe,{vertical:!0,horizontal:!0},a.createElement(on,{key:"tabs",tabs:T})),a.createElement(ee,{key:"actionbar",actionItems:b})),r==="error"&&a.createElement(Q,null,"The accessibility scan encountered an error.",a.createElement("br",null),typeof t=="string"?t:JSON.stringify(t)))};U.register(k,e=>{U.add(J,{title:"",type:Z.TOOL,match:({viewMode:r})=>r==="story",render:()=>a.createElement(Sr,null)}),U.add(J,{title(){let r=e?.getAddonState(k),n=r?.violations?.length||0,t=r?.incomplete?.length||0,i=n+t;return i!==0?`Accessibility (${i})`:"Accessibility"},id:"accessibility",type:Z.PANEL,render:({active:r=!0,key:n})=>a.createElement(Pr,{key:n,active:r},a.createElement(dn,null)),paramKey:de})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
