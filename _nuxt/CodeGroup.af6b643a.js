import v from"./TabsHeader.4ed8cb13.js";import{d as o,M as t,k as u}from"./entry.92093d23.js";const d=(n,i)=>n.type&&n.type.tag&&n.type.tag===i,f=o({data(){return{activeTabIndex:0,counter:0}},render(){var r,s;const n=((s=(r=this.$slots)==null?void 0:r.default)==null?void 0:s.call(r))||[],i=n.map((e,p)=>{var a,c,_;return{label:((a=e==null?void 0:e.props)==null?void 0:a.filename)||((c=e==null?void 0:e.props)==null?void 0:c.label)||`${p}`,active:((_=e==null?void 0:e.props)==null?void 0:_.active)||!1,component:e}});return t("div",{class:{"code-group":!0,"first-tab":this.activeTabIndex===0}},[t(v,{ref:"tabs-header",activeTabIndex:this.activeTabIndex,tabs:i,"onUpdate:activeTabIndex":e=>this.activeTabIndex=e}),t("div",{class:"code-group-content",text:this.activeTabIndex},n.map((e,p)=>{var a,c;return t("div",{style:{display:p===this.activeTabIndex?"block":"none"},class:{"":!d(e,"code")&&!d(e,"pre")}},[d(e,"code")||d(e,"pre")?e:t("div",{class:{"preview-canvas":!0}},[((c=(a=e.children)==null?void 0:a.default)==null?void 0:c.call(a))||e.children])])}))])}});const m=u(f,[["__scopeId","data-v-f1f0c0c4"]]);export{m as default};
