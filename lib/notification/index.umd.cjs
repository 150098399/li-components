(function(e,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("vue")):typeof define=="function"&&define.amd?define(["vue"],o):(e=typeof globalThis<"u"?globalThis:e||self,e.index=o(e.Vue))})(this,function(e){"use strict";const o=t=>t.replace(/(A-Z)g/,"-$1").toLocaleLowerCase(),r={class:"notificaton-popover"},s=e.defineComponent({__name:"index",props:{icon:{type:String,default:"Bell"},value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:{type:Boolean,default:!1}},setup(t){return(n,i)=>{const c=e.resolveComponent("el-badge"),l=e.resolveComponent("el-popover");return e.openBlock(),e.createElementBlock("div",r,[e.createVNode(l,{placement:"bottom",width:300,trigger:"click"},{default:e.withCtx(()=>[e.renderSlot(n.$slots,"default",{},void 0,!0)]),reference:e.withCtx(()=>[e.createVNode(c,{value:t.value,max:t.max,"is-dot":t.isDot,style:{cursor:"pointer"}},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(`el-icon-${e.unref(o)(t.icon)}`)))]),_:1},8,["value","max","is-dot"])]),_:3})])}}}),d="",a=((t,n)=>{const i=t.__vccOpts||t;for(const[c,l]of n)i[c]=l;return i})(s,[["__scopeId","data-v-18839092"]]);return{install(t){t.component("m-notification",a)}}});
