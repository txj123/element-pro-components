import{b as n,B as t,l as a,f as s,g as e,D as o,_ as l,t as p,aa as c,s as u}from"./framework.9cb6416d.js";const k=c('<h1 id="form"><a class="header-anchor" href="#form" aria-hidden="true">#</a> Form</h1><blockquote><p>封装表单组件实现通过配置动态生成表单</p></blockquote><div class="tip custom-block"><p class="custom-block-title">提示</p><p>可以自动代理支持通过 <code>v-model</code> 绑定值的单一节点组件，例如：</p><ul><li>支持 <code>el-input</code> <code>el-switch</code> <code>pro-input-tag</code> 等</li><li>不支持 <code>el-upload</code> <code>el-select</code> <code>el-radio-group</code> <code>el-checkbox-group</code> 等</li></ul></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>组件内部并不包括相关能够使用的组件，所以在使用相关组件前，你必须通过全局注册它</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ElInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElInput<span class="token punctuation">)</span>\n<span class="token comment">// 或者</span>\napp<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>ElInput<span class="token punctuation">.</span>name<span class="token punctuation">,</span> ElInput<span class="token punctuation">)</span>\n</code></pre></div><p>TODO: 未来将封装不支持的常用组件，但现在你需要通过插槽使用不支持的组件</p></div><h2 id="使用"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ol><li>普通表单</li></ol>',6),i=e("p",null,"通过传入 columns 实现生成表单",-1),r=e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("template")]),e("span",{class:"token punctuation"},">")]),u("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("pro-form")]),u("\n    "),e("span",{class:"token attr-name"},"v-model"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),u("form"),e("span",{class:"token punctuation"},'"')]),u("\n    "),e("span",{class:"token attr-name"},":columns"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),u("columns"),e("span",{class:"token punctuation"},'"')]),u("\n    "),e("span",{class:"token attr-name"},"label-width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),u("120px"),e("span",{class:"token punctuation"},'"')]),u("\n  "),e("span",{class:"token punctuation"},">")]),u("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("template")]),u(),e("span",{class:"token attr-name"},"#date-label"),e("span",{class:"token punctuation"},">")]),u("\n      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("i")]),u(),e("span",{class:"token attr-name"},"class"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),u("el-icon-time"),e("span",{class:"token punctuation"},'"')]),u(),e("span",{class:"token punctuation"},"/>")]),u("\n      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("span")]),e("span",{class:"token punctuation"},">")]),u("Date"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("span")]),e("span",{class:"token punctuation"},">")]),u("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("template")]),e("span",{class:"token punctuation"},">")]),u("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("template")]),u(),e("span",{class:"token attr-name"},"#date"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),u("{ item, value, setValue }"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),u("\n      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("span")]),e("span",{class:"token punctuation"},">")]),u("{{ item }} - {{ value }} - {{ setValue }}"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("span")]),e("span",{class:"token punctuation"},">")]),u("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("template")]),e("span",{class:"token punctuation"},">")]),u("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("template")]),u(),e("span",{class:"token attr-name"},"#menu"),e("span",{class:"token punctuation"},">")]),u("\n      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("el-button")]),u(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),u("primary"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),u("\n        Submit\n      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("el-button")]),e("span",{class:"token punctuation"},">")]),u("\n      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("el-button")]),e("span",{class:"token punctuation"},">")]),u("Cancel"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("el-button")]),e("span",{class:"token punctuation"},">")]),u("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("template")]),e("span",{class:"token punctuation"},">")]),u("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("pro-form")]),e("span",{class:"token punctuation"},">")]),u("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("template")]),e("span",{class:"token punctuation"},">")]),u("\n\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("script")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[u("\n"),e("span",{class:"token keyword"},"export"),u(),e("span",{class:"token keyword"},"default"),u(),e("span",{class:"token punctuation"},"{"),u("\n  "),e("span",{class:"token function"},"data"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),u(),e("span",{class:"token punctuation"},"{"),u("\n    "),e("span",{class:"token keyword"},"return"),u(),e("span",{class:"token punctuation"},"{"),u("\n      form"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token punctuation"},"{"),u("\n        date"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'date'"),u("\n      "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),u("\n      columns"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token punctuation"},"["),u("\n        "),e("span",{class:"token punctuation"},"{"),u("\n          label"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'Date'"),e("span",{class:"token punctuation"},","),u("\n          prop"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'date'"),e("span",{class:"token punctuation"},","),u("\n          component"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'el-input'"),e("span",{class:"token punctuation"},","),u("\n          slot"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),u("\n        "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),u("\n        "),e("span",{class:"token punctuation"},"{"),u("\n          label"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'Name'"),e("span",{class:"token punctuation"},","),u("\n          prop"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'name'"),e("span",{class:"token punctuation"},","),u("\n          component"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'el-input'"),e("span",{class:"token punctuation"},","),u("\n          props"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token punctuation"},"{"),u("\n            clearable"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),u("\n            placeholder"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'placeholder'"),e("span",{class:"token punctuation"},","),u("\n          "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),u("\n        "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),u("\n        "),e("span",{class:"token punctuation"},"{"),u("\n          label"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'Address'"),e("span",{class:"token punctuation"},","),u("\n          prop"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'address'"),e("span",{class:"token punctuation"},","),u("\n          component"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'pro-input-tag'"),e("span",{class:"token punctuation"},","),u("\n        "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),u("\n      "),e("span",{class:"token punctuation"},"]"),u("\n    "),e("span",{class:"token punctuation"},"}"),u("\n  "),e("span",{class:"token punctuation"},"}"),u("\n"),e("span",{class:"token punctuation"},"}"),u("\n")])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("script")]),e("span",{class:"token punctuation"},">")]),u("\n")])],-1),d=e("i",{class:"el-icon-time"},null,-1),m=e("span",null,"Date",-1),g=u(" Submit "),f=u("Cancel"),h=e("ol",{start:"2"},[e("li",null,"嵌套组件")],-1),b=e("p",null,"通过配置 columns 的 children 自动生成子表单",-1),y=e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("template")]),e("span",{class:"token punctuation"},">")]),u("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("pro-form")]),u("\n    "),e("span",{class:"token attr-name"},"v-model"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),u("form1"),e("span",{class:"token punctuation"},'"')]),u("\n    "),e("span",{class:"token attr-name"},":columns"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),u("columns1"),e("span",{class:"token punctuation"},'"')]),u("\n    "),e("span",{class:"token attr-name"},"label-width"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),u("120px"),e("span",{class:"token punctuation"},'"')]),u("\n  "),e("span",{class:"token punctuation"},">")]),u("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("template")]),u(),e("span",{class:"token attr-name"},"#address"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),u("{ value, setValue }"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),u("\n      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("pro-input-tag")]),u("\n        "),e("span",{class:"token attr-name"},":model-value"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),u("value"),e("span",{class:"token punctuation"},'"')]),u("\n        "),e("span",{class:"token attr-name"},[e("span",{class:"token namespace"},"@update:"),u("modelValue")]),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),u("setValue"),e("span",{class:"token punctuation"},'"')]),u("\n      "),e("span",{class:"token punctuation"},"/>")]),u("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("template")]),e("span",{class:"token punctuation"},">")]),u("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("template")]),u(),e("span",{class:"token attr-name"},"#menu"),e("span",{class:"token punctuation"},">")]),u("\n      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("el-button")]),u(),e("span",{class:"token attr-name"},"type"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),u("primary"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),u("\n        Submit\n      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("el-button")]),e("span",{class:"token punctuation"},">")]),u("\n      "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("el-button")]),e("span",{class:"token punctuation"},">")]),u("Cancel"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("el-button")]),e("span",{class:"token punctuation"},">")]),u("\n    "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("template")]),e("span",{class:"token punctuation"},">")]),u("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("pro-form")]),e("span",{class:"token punctuation"},">")]),u("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("template")]),e("span",{class:"token punctuation"},">")]),u("\n\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),u("script")]),u(),e("span",{class:"token attr-name"},"setup"),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[u("\n"),e("span",{class:"token keyword"},"import"),u(),e("span",{class:"token punctuation"},"{"),u(" ref "),e("span",{class:"token punctuation"},"}"),u(),e("span",{class:"token keyword"},"from"),u(),e("span",{class:"token string"},"'vue'"),u("\n\n"),e("span",{class:"token keyword"},"const"),u(" form1 "),e("span",{class:"token operator"},"="),u(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),u("\n"),e("span",{class:"token keyword"},"const"),u(" columns1 "),e("span",{class:"token operator"},"="),u(),e("span",{class:"token punctuation"},"["),u("\n  "),e("span",{class:"token punctuation"},"{"),u("\n    label"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'Date'"),e("span",{class:"token punctuation"},","),u("\n    prop"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'date'"),e("span",{class:"token punctuation"},","),u("\n    component"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'el-input'"),e("span",{class:"token punctuation"},","),u("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),u("\n  "),e("span",{class:"token punctuation"},"{"),u("\n    label"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'User'"),e("span",{class:"token punctuation"},","),u("\n    prop"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'user'"),e("span",{class:"token punctuation"},","),u("\n    max"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token number"},"3"),e("span",{class:"token punctuation"},","),u("\n    children"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token punctuation"},"["),u("\n      "),e("span",{class:"token punctuation"},"{"),u("\n        label"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'Name'"),e("span",{class:"token punctuation"},","),u("\n        prop"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'name'"),e("span",{class:"token punctuation"},","),u("\n        component"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'el-input'"),e("span",{class:"token punctuation"},","),u("\n      "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),u("\n      "),e("span",{class:"token punctuation"},"{"),u("\n        label"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'Address'"),e("span",{class:"token punctuation"},","),u("\n        prop"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'address'"),e("span",{class:"token punctuation"},","),u("\n        component"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token string"},"'el-input'"),e("span",{class:"token punctuation"},","),u("\n        slot"),e("span",{class:"token operator"},":"),u(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),u("\n      "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),u("\n    "),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),u("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),u("\n"),e("span",{class:"token punctuation"},"]"),u("\n")])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),u("script")]),e("span",{class:"token punctuation"},">")]),u("\n")])],-1),v=u(" Submit "),x=u("Cancel"),_=c('<h2 id="配置"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="v-model"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h3><p>绑定表单数据，替代 <code>ElForm</code> 的 model</p><h3 id="columns"><a class="header-anchor" href="#columns" aria-hidden="true">#</a> columns</h3><p>自动生成表单的参数，由下面字段组成的数组</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">slot</td><td style="text-align:left;">是否开启自定义插槽功能</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">component</td><td style="text-align:left;">当前项对应的组件</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">props</td><td style="text-align:left;">传递的对应的组件的参数</td><td style="text-align:left;">object</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">children</td><td style="text-align:left;">实现子表单</td><td style="text-align:left;">array</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">与children一起使用，限制子表单的最大数量</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td></tr></tbody></table><p>以及 ElFormItem 的配置</p><h3 id="其它配置"><a class="header-anchor" href="#其它配置" aria-hidden="true">#</a> 其它配置</h3><p>同 <a href="https://element-plus.gitee.io/#/zh-CN/component/form" target="_blank" rel="noopener noreferrer">ElForm</a></p><h2 id="插槽"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><table><thead><tr><th style="text-align:left;">name</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">-</td><td style="text-align:left;">在底部菜单前插入的任意内容</td></tr><tr><td style="text-align:left;">menu</td><td style="text-align:left;">表单底部按钮</td></tr><tr><td style="text-align:left;">[prop]</td><td style="text-align:left;">当前这项的Form Item 的内容，参数为 { item, value, setValue }</td></tr><tr><td style="text-align:left;">[prop]-label</td><td style="text-align:left;">当前这项的标签文本的内容，参数为 { item }</td></tr><tr><td style="text-align:left;">[prop]-error</td><td style="text-align:left;">当前这项的自定义表单校验信息的显示方式，参数为 { error, item }</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">提示</p><p>[prop] 为 columns中定义的prop</p></div>',12),V={data:()=>({form:{date:"date"},columns:[{label:"Date",prop:"date",component:"el-input",slot:!0},{label:"Name",prop:"name",component:"el-input",props:{clearable:!0,placeholder:"placeholder"}},{label:"Address",prop:"address",component:"pro-input-tag"}]})},w='{"title":"Form","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"配置","slug":"配置"},{"level":3,"title":"v-model","slug":"v-model"},{"level":3,"title":"columns","slug":"columns"},{"level":3,"title":"其它配置","slug":"其它配置"},{"level":2,"title":"插槽","slug":"插槽"}],"relativePath":"components/Form.md","lastUpdated":1609816784191}';const q=Object.assign(V,{expose:[],setup:function(c){const u=n({}),V=[{label:"Date",prop:"date",component:"el-input"},{label:"User",prop:"user",max:3,children:[{label:"Name",prop:"name",component:"el-input"},{label:"Address",prop:"address",component:"el-input",slot:!0}]}];return(n,c)=>{const w=t("el-button"),q=t("pro-form"),T=t("pro-code"),A=t("pro-input-tag");return a(),s("div",null,[k,e(T,null,{description:o((()=>[i])),code:o((()=>[r])),default:o((()=>[e("template",null,[e(q,{modelValue:n.form,"onUpdate:modelValue":c[1]||(c[1]=n=>l(form)?form.value=n:null),columns:n.columns,"label-width":"120px"},{"date-label":o((()=>[d,m])),date:o((({item:n,value:t,setValue:a})=>[e("span",null,p(n)+" - "+p(t)+" - "+p(a),1)])),menu:o((()=>[e(w,{type:"primary"},{default:o((()=>[g])),_:1}),e(w,null,{default:o((()=>[f])),_:1})])),_:1},8,["modelValue","columns"])])])),_:1}),h,e(T,null,{description:o((()=>[b])),code:o((()=>[y])),default:o((()=>[e("template",null,[e(q,{modelValue:u.value,"onUpdate:modelValue":c[2]||(c[2]=n=>u.value=n),columns:V,"label-width":"120px"},{address:o((({value:n,setValue:t})=>[e(A,{"model-value":n,"onUpdate:modelValue":t},null,8,["model-value","onUpdate:modelValue"])])),menu:o((()=>[e(w,{type:"primary"},{default:o((()=>[v])),_:1}),e(w,null,{default:o((()=>[x])),_:1})])),_:1},8,["modelValue"])])])),_:1}),_])}}});export default q;export{w as __pageData};