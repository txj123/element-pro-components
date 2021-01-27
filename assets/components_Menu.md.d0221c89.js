import{o as t,c as e,a}from"./app.f8e2e39a.js";const n='{"title":"Menu","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"配置","slug":"配置"},{"level":2,"title":"插槽","slug":"插槽"}],"relativePath":"components/Menu.md","lastUpdated":1611741708962}',s={},l=a('<h1 id="menu"><a class="header-anchor" href="#menu" aria-hidden="true">#</a> Menu</h1><blockquote><p>封装默认 Menu 通过传入路由或者自动获取路由生成导航，与 <code>vue-router</code> 高度绑定</p></blockquote><h2 id="使用"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pro-menu</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="配置"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">routes</td><td style="text-align:left;">自定义生成侧边菜单栏的路由，同 <code>vue-router</code> 中 routes (仅扩展 meta)</td><td style="text-align:left;">array</td><td style="text-align:left;">从 <code>vue-router</code> 中获取</td></tr></tbody></table><h2 id="插槽"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><table><thead><tr><th style="text-align:left;">name</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">-</td><td style="text-align:left;">控制菜单显示内容，参数为 { meta, path, redirect } 等</td></tr></tbody></table>',8);s.render=function(a,n,s,r,d,o){return t(),e("div",null,[l])};export default s;export{n as __pageData};