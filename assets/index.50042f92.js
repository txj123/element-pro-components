import{o as n,c as s,ag as a}from"./vendor.6730c589.js";const t={class:"markdown-body"},p=a('<h1>快速上手</h1><h2>准备</h2><p>在开始前你可能需要 vue3 版本脚手架工具</p><ul><li><a href="https://vitejs.dev/">vite</a></li><li><a href="https://cli.vuejs.org/zh/">vue-cli</a></li><li><a href="https://zh.nuxtjs.org/">nuxt</a></li></ul><h2>安装</h2><div class="language-"><pre><code>yarn add element-pro-components\n# or\nnpm i element-pro-components\n</code></pre></div><h2>完整引入</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n<span class="token keyword">import</span> ElementPro <span class="token keyword">from</span> <span class="token string">&#39;element-pro-components&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;element-pro-components/lib/style.css&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPro<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><h2>按需引入</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ProLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-pro-components&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;element-pro-components/lib/style.css&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ProLayout<span class="token punctuation">)</span>\n<span class="token comment">// 或者</span>\napp<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;ProLayout&#39;</span><span class="token punctuation">,</span> ProLayout<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>与 <code>Element Plus</code> 不同，样式不支持按需引入。由于只包含少量必要样式，可能不会提供相同功能</p><p>完整组件列表<a href="https://github.com/tolking/element-pro-components/blob/master/src/index.ts">参考里面的 components</a></p></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>在导出组件的同时，一起导出的还包括内部使用的<a href="https://github.com/tolking/element-pro-components/blob/master/src/utils/index.ts">utils</a>与<a href="https://github.com/tolking/element-pro-components/blob/master/src/composables/public.ts">composables</a>，如果需要可以引用使用</p></div><h2>全局配置</h2><ul><li>参考</li></ul><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> InstallOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../types/index&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> config<span class="token operator">:</span> Required<span class="token operator">&lt;</span>InstallOptions<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  pagination<span class="token operator">:</span> <span class="token punctuation">{</span>\n    background<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    layout<span class="token operator">:</span> <span class="token string">&#39;total, sizes, prev, pager, next, jumper&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  menu<span class="token operator">:</span> <span class="token punctuation">{</span>\n    add<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    addText<span class="token operator">:</span> <span class="token string">&#39;Add&#39;</span><span class="token punctuation">,</span>\n    addProps<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">&#39;primary&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    edit<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    editText<span class="token operator">:</span> <span class="token string">&#39;Edit&#39;</span><span class="token punctuation">,</span>\n    editProps<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    del<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    delText<span class="token operator">:</span> <span class="token string">&#39;Delete&#39;</span><span class="token punctuation">,</span>\n    delProps<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    submit<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    submitText<span class="token operator">:</span> <span class="token string">&#39;Submit&#39;</span><span class="token punctuation">,</span>\n    submitProps<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">&#39;primary&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    reset<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    resetText<span class="token operator">:</span> <span class="token string">&#39;Reset&#39;</span><span class="token punctuation">,</span>\n    search<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    searchText<span class="token operator">:</span> <span class="token string">&#39;Search&#39;</span><span class="token punctuation">,</span>\n    searchProps<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">&#39;primary&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    searchReset<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    searchResetText<span class="token operator">:</span> <span class="token string">&#39;Reset&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ul><li>配置</li></ul><div class="language-js"><pre><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPro<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  pagination<span class="token operator">:</span> <span class="token punctuation">{</span>\n    small<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    hideOnSinglePage<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    layout<span class="token operator">:</span> <span class="token string">&#39;prev, pager, next&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2>开始使用</h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>文档示例基于 <a href="https://v3.cn.vuejs.org/guide/composition-api-introduction.html">组合式 API</a> 语法，如果不熟悉语法请前往官方文档查看</p><p>如果使用 VS Code 开发，配合 Vetur 使用提供完整的组件、属性、事件补全。例如：输入 <code>&lt;pro-</code> 将罗列出所有组件库组件</p><p>如果使用 TypeScript 编写，可以参考 <a href="https://github.com/tolking/element-pro-components/tree/master/docs/src/views/">example</a>。内部提供部分类型方便使用</p></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pro-layout</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#left-header</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pro-breadcrumb</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#right-header</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav-header</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#bottom-header</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pro-tabs</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pro-layout</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    {{ title }}\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute<span class="token punctuation">,</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>\n<span class="token comment">// import { isString } from &#39;@vue/shared&#39;</span>\n<span class="token keyword">import</span> NavHeader <span class="token keyword">from</span> <span class="token string">&#39;../components/NavHeader.vue&#39;</span>\n\n<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// const router = useRouter()</span>\n<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39; | element-pro-components&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// const routes = computed(() =&gt; {</span>\n<span class="token comment">//   const _routes = router.options.routes</span>\n<span class="token comment">//   const _path = route.path.match(/^\\/(.*)\\//)</span>\n<span class="token comment">//   const _redirect = _path &amp;&amp; _path[0] || &#39;&#39;</span>\n<span class="token comment">//   const ss = _routes.find(item =&gt; isString(item.redirect) &amp;&amp; item.redirect.startsWith(_redirect))</span>\n\n<span class="token comment">//   return ss?.children || _routes</span>\n<span class="token comment">// })</span>\n\n<span class="token comment">// onMounted(() =&gt; {</span>\n<span class="token comment">//   console.log(navigator.language)</span>\n<span class="token comment">// })</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',20),o={expose:[],setup:a=>(a,o)=>(n(),s("div",t,[p]))};export default o;
