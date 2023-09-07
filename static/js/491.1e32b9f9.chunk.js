"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[491],{9491:function(e,t,n){n.r(t),n.d(t,{default:function(){return he}});var r=n(2791),a=n(9434),o="NOT_FOUND";var i=function(e,t){return e===t};function s(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?i:r,s=n.maxSize,c=void 0===s?1:s,l=n.resultEqualityCheck,d=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),u=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:o},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(d):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return o}return{get:r,put:function(t,a){r(t)===o&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,d);function p(){var t=u.get(arguments);if(t===o){if(t=e.apply(null,arguments),l){var n=u.getEntries(),r=n.find((function(e){return l(e.value,t)}));r&&(t=r.value)}u.put(arguments,t)}return t}return p.clearCache=function(){return u.clear()},p}function c(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function l(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o,i=0,s={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(s=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var d=s,u=d.memoizeOptions,p=void 0===u?n:u,m=Array.isArray(p)?p:[p],v=c(r),f=e.apply(void 0,[function(){return i++,l.apply(null,arguments)}].concat(m)),y=e((function(){for(var e=[],t=v.length,n=0;n<t;n++)e.push(v[n].apply(null,arguments));return o=f.apply(null,e)}));return Object.assign(y,{resultFunc:l,memoizedResultFunc:f,dependencies:v,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),y};return a}var d=l(s),u=function(e){return e.contacts.loading},p=function(e){return e.contacts.items},m=function(e){return e.contacts.error},v=d([p,function(e){return e.contacts.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),f={list:"ContactsList_list__mmE3Y"},y=n(3634),h=n(4942),g=n(3366),b=n(7462),Z=n(3733),x=n(4419),I=n(627),C=n(2065),j=n(6934),S=n(1402),w=n(3701),A=n(9103),k=n(162),N=n(2071),L=n(9480),P=n(5878),F=n(1217);function M(e){return(0,F.Z)("MuiListItem",e)}var R=(0,P.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var T=(0,P.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function z(e){return(0,F.Z)("MuiListItemSecondaryAction",e)}(0,P.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var O=n(184),G=["className"],V=(0,j.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,b.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),_=r.forwardRef((function(e,t){var n=(0,S.Z)({props:e,name:"MuiListItemSecondaryAction"}),a=n.className,o=(0,g.Z)(n,G),i=r.useContext(L.Z),s=(0,b.Z)({},n,{disableGutters:i.disableGutters}),c=function(e){var t=e.disableGutters,n=e.classes,r={root:["root",t&&"disableGutters"]};return(0,x.Z)(r,z,n)}(s);return(0,O.jsx)(V,(0,b.Z)({className:(0,Z.Z)(c.root,a),ownerState:s,ref:t},o))}));_.muiName="ListItemSecondaryAction";var q=_,E=["className"],H=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],B=(0,j.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,b.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!r.disablePadding&&(0,b.Z)({paddingTop:8,paddingBottom:8},r.dense&&{paddingTop:4,paddingBottom:4},!r.disableGutters&&{paddingLeft:16,paddingRight:16},!!r.secondaryAction&&{paddingRight:48}),!!r.secondaryAction&&(0,h.Z)({},"& > .".concat(T.root),{paddingRight:48}),(t={},(0,h.Z)(t,"&.".concat(R.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,h.Z)(t,"&.".concat(R.selected),(0,h.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,C.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(R.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,C.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,h.Z)(t,"&.".concat(R.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===r.alignItems&&{alignItems:"flex-start"},r.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},r.button&&(0,h.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(R.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,C.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,C.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),r.hasSecondaryAction&&{paddingRight:48})})),D=(0,j.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),Y=r.forwardRef((function(e,t){var n=(0,S.Z)({props:e,name:"MuiListItem"}),a=n.alignItems,o=void 0===a?"center":a,i=n.autoFocus,s=void 0!==i&&i,c=n.button,l=void 0!==c&&c,d=n.children,u=n.className,p=n.component,m=n.components,v=void 0===m?{}:m,f=n.componentsProps,y=void 0===f?{}:f,h=n.ContainerComponent,C=void 0===h?"li":h,j=n.ContainerProps,P=(j=void 0===j?{}:j).className,F=n.dense,T=void 0!==F&&F,z=n.disabled,G=void 0!==z&&z,V=n.disableGutters,_=void 0!==V&&V,Y=n.disablePadding,K=void 0!==Y&&Y,W=n.divider,X=void 0!==W&&W,J=n.focusVisibleClassName,U=n.secondaryAction,$=n.selected,Q=void 0!==$&&$,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,re=void 0===ne?{}:ne,ae=(0,g.Z)(n.ContainerProps,E),oe=(0,g.Z)(n,H),ie=r.useContext(L.Z),se=r.useMemo((function(){return{dense:T||ie.dense||!1,alignItems:o,disableGutters:_}}),[o,ie.dense,T,_]),ce=r.useRef(null);(0,k.Z)((function(){s&&ce.current&&ce.current.focus()}),[s]);var le=r.Children.toArray(d),de=le.length&&(0,A.Z)(le[le.length-1],["ListItemSecondaryAction"]),ue=(0,b.Z)({},n,{alignItems:o,autoFocus:s,button:l,dense:se.dense,disabled:G,disableGutters:_,disablePadding:K,divider:X,hasSecondaryAction:de,selected:Q}),pe=function(e){var t=e.alignItems,n=e.button,r=e.classes,a=e.dense,o=e.disabled,i={root:["root",a&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,x.Z)(i,M,r)}(ue),me=(0,N.Z)(ce,t),ve=re.root||v.Root||B,fe=te.root||y.root||{},ye=(0,b.Z)({className:(0,Z.Z)(pe.root,fe.className,u),disabled:G},oe),he=p||"li";return l&&(ye.component=p||"div",ye.focusVisibleClassName=(0,Z.Z)(R.focusVisible,J),he=w.Z),de?(he=ye.component||p?he:"div","li"===C&&("li"===he?he="div":"li"===ye.component&&(ye.component="div")),(0,O.jsx)(L.Z.Provider,{value:se,children:(0,O.jsxs)(D,(0,b.Z)({as:C,className:(0,Z.Z)(pe.container,P),ref:me,ownerState:ue},ae,{children:[(0,O.jsx)(ve,(0,b.Z)({},fe,!(0,I.X)(ve)&&{as:he,ownerState:(0,b.Z)({},ue,fe.ownerState)},ye,{children:le})),le.pop()]}))})):(0,O.jsx)(L.Z.Provider,{value:se,children:(0,O.jsxs)(ve,(0,b.Z)({},fe,{as:he,ref:me},!(0,I.X)(ve)&&{ownerState:(0,b.Z)({},ue,fe.ownerState)},ye,{children:[le,U&&(0,O.jsx)(q,{children:U})]}))})}));function K(e){return(0,F.Z)("MuiListItemIcon",e)}(0,P.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var W=["className"],X=(0,j.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.theme,n=e.ownerState;return(0,b.Z)({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===n.alignItems&&{marginTop:8})})),J=r.forwardRef((function(e,t){var n=(0,S.Z)({props:e,name:"MuiListItemIcon"}),a=n.className,o=(0,g.Z)(n,W),i=r.useContext(L.Z),s=(0,b.Z)({},n,{alignItems:i.alignItems}),c=function(e){var t=e.alignItems,n=e.classes,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,x.Z)(r,K,n)}(s);return(0,O.jsx)(X,(0,b.Z)({className:(0,Z.Z)(c.root,a),ownerState:s,ref:t},o))})),U=n(890);function $(e){return(0,F.Z)("MuiListItemText",e)}var Q=(0,P.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),ee=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],te=(0,j.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,h.Z)({},"& .".concat(Q.primary),t.primary),(0,h.Z)({},"& .".concat(Q.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,b.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),ne=r.forwardRef((function(e,t){var n=(0,S.Z)({props:e,name:"MuiListItemText"}),a=n.children,o=n.className,i=n.disableTypography,s=void 0!==i&&i,c=n.inset,l=void 0!==c&&c,d=n.primary,u=n.primaryTypographyProps,p=n.secondary,m=n.secondaryTypographyProps,v=(0,g.Z)(n,ee),f=r.useContext(L.Z).dense,y=null!=d?d:a,h=p,I=(0,b.Z)({},n,{disableTypography:s,inset:l,primary:!!y,secondary:!!h,dense:f}),C=function(e){var t=e.classes,n=e.inset,r=e.primary,a=e.secondary,o={root:["root",n&&"inset",e.dense&&"dense",r&&a&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,x.Z)(o,$,t)}(I);return null==y||y.type===U.Z||s||(y=(0,O.jsx)(U.Z,(0,b.Z)({variant:f?"body2":"body1",className:C.primary,component:null!=u&&u.variant?void 0:"span",display:"block"},u,{children:y}))),null==h||h.type===U.Z||s||(h=(0,O.jsx)(U.Z,(0,b.Z)({variant:"body2",className:C.secondary,color:"text.secondary",display:"block"},m,{children:h}))),(0,O.jsxs)(te,(0,b.Z)({className:(0,Z.Z)(C.root,o),ownerState:I,ref:t},v,{children:[y,h]}))})),re=n(6151),ae=n(7247),oe=n(8535),ie=function(e){var t=e.contact,n=(0,a.I0)();return(0,O.jsxs)(Y,{children:[(0,O.jsx)(J,{children:(0,O.jsx)(oe.Z,{style:{color:"black"}})}),(0,O.jsx)(ne,{primary:"".concat(t.name," : ").concat(t.number)}),(0,O.jsx)(q,{children:(0,O.jsx)(re.Z,{variant:"contained",startIcon:(0,O.jsx)(ae.Z,{}),sx:{backgroundColor:"#D11A2A","&:hover":{backgroundColor:"#FF0000"}},onClick:function(){return n((0,y.GK)(t.id))},children:"Delete"})})]})},se=n(493),ce=function(){var e=(0,a.v9)(v),t=(0,a.v9)(u),n=(0,a.v9)(m);return(0,O.jsx)("div",{className:f.contactsContainer,children:t?(0,O.jsx)("p",{children:"...Loading"}):(0,O.jsx)(se.Z,{children:0!==e.length||n?e.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,O.jsx)(ie,{contact:{id:t,name:n,number:r}},t)})):(0,O.jsx)(U.Z,{children:"The phonebook is empty"})})})},le=n(9439),de="ContactsEditor_form__FHGYz",ue=n(8096),pe=n(4925),me=n(292),ve=n(7750),fe=function(){var e=(0,a.I0)(),t=(0,a.v9)(p),n=(0,r.useState)(""),o=(0,le.Z)(n,2),i=o[0],s=o[1],c=(0,r.useState)(""),l=(0,le.Z)(c,2),d=l[0],u=l[1],m=function(e){var t=e.target,n=t.name,r=t.value;"name"===n?s(r):"number"===n&&u(r)};return(0,O.jsxs)("form",{className:de,onSubmit:function(n){n.preventDefault();var r={name:i,number:d};if(!t.some((function(e){return e.name===i||e.number===d})))return e((0,y.uK)(r)),s(""),void u("");alert("This contact already exists!")},children:[(0,O.jsxs)(ue.Z,{sx:{margin:"40px 0 "},children:[(0,O.jsx)(pe.Z,{htmlFor:"name",children:"Name"}),(0,O.jsx)(me.Z,{id:"name",type:"text",name:"name",value:i,onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,O.jsxs)(ue.Z,{sx:{margin:"40px 0 "},children:[(0,O.jsx)(pe.Z,{htmlFor:"number",children:"Number"}),(0,O.jsx)(me.Z,{id:"number",type:"tel",name:"number",value:d,onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,O.jsx)(ue.Z,{sx:{margin:"30px 0 "},children:(0,O.jsx)(re.Z,{type:"submit",variant:"contained",color:"primary",startIcon:(0,O.jsx)(ve.Z,{}),sx:{height:"50px",marginLeft:"15px"},children:"Add contact"})})]})},ye=n(1538);function he(){var e=(0,a.I0)(),t=(0,a.v9)(u);(0,r.useEffect)((function(){e((0,y.yF)())}),[e]);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(fe,{}),(0,O.jsx)(U.Z,{variant:"h4",sx:{margin:"20px 0 "},children:"Your Contacts"}),(0,O.jsx)(me.Z,{type:"text",name:"filter",placeholder:"Search contacts by name",onChange:function(t){e((0,ye.T)(t.target.value))}}),(0,O.jsx)("div",{children:t&&"Request in progress..."}),(0,O.jsx)(ce,{})]})}},8535:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8H8v-.57c0-.81.48-1.53 1.22-1.85.85-.37 1.79-.58 2.78-.58.99 0 1.93.21 2.78.58.74.32 1.22 1.04 1.22 1.85V18z"}),"ContactPage");t.Z=i},7247:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},7750:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");t.Z=i}}]);
//# sourceMappingURL=491.1e32b9f9.chunk.js.map