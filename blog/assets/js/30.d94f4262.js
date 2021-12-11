(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{385:function(t,a,s){"use strict";s.r(a);var e=s(45),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"前端性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化"}},[t._v("#")]),t._v(" 前端性能优化")]),t._v(" "),s("p",[t._v("作为一个用户，对网页的性能肯定特别敏感，如果遇到了一个性能很差的网页，比如白屏等待时间长，操作不流畅，卡顿等现象，那么肯定就不会有继续浏览下去的欲望了，直接点击右上角走人。因此，web 性能也是我们开发者比较关注的一个方面，前端攻城狮也必须要掌握一些 web 性能优化的技能，这样才能让网页有着更流畅，更极致的用户体验")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"带宽与下载速度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带宽与下载速度"}},[t._v("#")]),t._v(" 带宽与下载速度")]),t._v(" "),s("p",[t._v("带宽这个概念对很多人来说并不陌生，带宽与下载速度有着密切的关系，在这里我觉得有必要先讲一下带宽与下载速度")]),t._v(" "),s("p",[t._v("带宽其实就是用来传输信息的，可以把它想象成信息传输的一个管道，信息在这个管道中传输。"),s("strong",[t._v("带宽的单位是 bit/s(比特/秒)")]),t._v("，我们平常说的宽带 1M 其实就是带宽为 1 Mbit/s，简写为 1Mb/s，再简写为 1M，同理，10M 宽带也就是 10 Mbit/s 的带宽，100M 宽带也就是 100 Mbit/s 的带宽")]),t._v(" "),s("p",[t._v("下载速度是衡量下载资源快慢的，"),s("strong",[t._v("下载速度的单位是 B/s(字节/秒)")]),t._v("，看到这里肯定会有一个疑问，前面一直是小写的 b，到这里怎么变成大写的 B 了？"),s("strong",[t._v("其实大写的 B 和小写的 b 是有区别的，大写 B 代表 Byte，表示字节；小写 b 代表 bit，表示比特，1 B = 8 b")])]),t._v(" "),s("p",[t._v("那么问题来了，1M 宽带的下载速度是多少呢？")]),t._v(" "),s("p",[t._v("1M 宽带 => 带宽 1 Mbit/s = 1 _ 1024 Kbit/s = 1 _ 1024 / 8 KB/s = 128 KB/s")]),t._v(" "),s("p",[s("strong",[t._v("所以 1M 宽带真正的下载速度只有 128 KB/s")])]),t._v(" "),s("p",[t._v("同理，100M 宽带 => 带宽 100 Mbit/s = 100 / 8 MB/s = 12.5 MB/s")]),t._v(" "),s("p",[s("strong",[t._v("所以 100M 宽带真正的下载速度只有 12.5 MB/s")])]),t._v(" "),s("p",[t._v("当然上面所说的都是在理想状态下的，在实际情况下会略有差别，受多种因素影响，如用户计算机性能、网络设备质量、网络高峰期、网站服务能力、线路损耗、信号衰减等等，这就导致了实际的网速并没有理想情况下那么快，有一定的衰减")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"资源加载优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源加载优化"}},[t._v("#")]),t._v(" 资源加载优化")]),t._v(" "),s("p",[t._v("一个 web 网页从获取到完成渲染大致需要经过以下几个步骤，DNS 解析、获取资源、生成渲染树、绘制到网页上，资源加载优化主要就是对这个 web 网页的所有资源的获取优化，把各种资源的获取时间尽可能的压缩到最低，这样就可以在短时间内拿到页面中的各种资源，并完成渲染，呈现出页面")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"减小资源体积"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减小资源体积"}},[t._v("#")]),t._v(" 减小资源体积")]),t._v(" "),s("p",[t._v("网页中的资源主要有 HTML、CSS、JS 以及一些图片字体资源组成，如果他们的体积太大，要加载的资源就会非常多，加载的速度就会很慢，但是如果他们的体积足够小(在不影响功能的前提下)，就可以提高网页的加载速度了，以下给出了几种减小资源体积的方法：")]),t._v(" "),s("ol",[s("li",[t._v("对 HTML、CSS、JS 等资源进行压缩，去除注释、空行等，把所有代码压缩成一行，对 JS 还可以进行混淆变量的操作")]),t._v(" "),s("li",[t._v("对一些图片资源，可以进行压缩，比如使用"),s("a",{attrs:{href:"https://tinypng.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("熊猫压缩"),s("OutboundLink")],1),t._v("，但是压缩后图片清晰度会下降，根据实际情况进行权衡")]),t._v(" "),s("li",[t._v("服务端开启 GZIP 压缩，使文件以 GZIP 格式使用")])]),t._v(" "),s("p",[t._v("前面两点是指对资源的内容进行压缩，精简内容，第三点是对文件格式就行压缩，可以这样理解，前面两点的操作是把各种资源进行简化后，得到精简版的文件，第三点是把前面得到的精简版文件生成压缩文件，也就是我们常见的压缩包的形式，这些压缩方法通过一些打包工具(如 webpack)都是可以实现的")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"使用缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用缓存"}},[t._v("#")]),t._v(" 使用缓存")]),t._v(" "),s("p",[t._v("对于 web 网页来说，缓存可以提升页面性能，同时减少服务器压力。缓存的种类有两大类，强缓存和协商缓存，需要根据实际情况决定使用强缓存还是协商缓存，用了缓存的确能提高加载资源的速度，但是如果滥用缓存，则会导致资源无法及时更新，所以应该"),s("strong",[t._v("合理使用浏览器缓存")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"使用-cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-cdn"}},[t._v("#")]),t._v(" 使用 CDN")]),t._v(" "),s("p",[t._v("CDN 的全称是内容分发网络，它是一个服务器集群，当我们要请求我们想要的资源的时候，CDN 会根据特定的算法筛选出一个能最快给我们响应的服务器，然后将指定资源返回。因此我们可以利用 CDN 获取一些第三方库资源，自己的服务器只部署剩余的资源，这样不仅能缓解我们服务器的压力，还可以提高页面性能")]),t._v(" "),s("p",[t._v("CDN 其实也是可以自己搭建的，需要购买阿里云的 OSS 服务，借助阿里云的 OSS 服务自己搭建 CDN 还是比较可靠的")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"减少-http-请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少-http-请求"}},[t._v("#")]),t._v(" 减少 HTTP 请求")]),t._v(" "),s("p",[t._v("HTTP 请求是获取页面资源的手段，同时也是影响页面性能的重要因素之一，所以要尽量的减少一些不必要的 HTTP 缓存，以下给出几种方案：")]),t._v(" "),s("ol",[s("li",[t._v("合并资源，一些第三方库资源整合到一个文件中，通过一次 HTTP 请求全部获取")]),t._v(" "),s("li",[t._v("对于 10kb 以下的图片资源可以采用 base64 格式存储在内存中，不必再向服务器请求获取")]),t._v(" "),s("li",[t._v("一些图片资源尽量使用字体图标")])]),t._v(" "),s("p",[t._v("对于第一点合并资源，它也会带来一定的弊端，缓存失效和首屏渲染问题，因为所有资源都整合到了一个文件，如果我只改动了很微小的一部分，那么必须要重新获取这一整个文件；如果是 SPA 单页面应用则可能会造成首屏渲染时间过长的问题，所以给出解决方案是："),s("strong",[t._v("只把第三方库资源合并在一起")])]),t._v(" "),s("p",[t._v("对于第二点，小图片采用了 base64 格式存储确实减少了 HTTP 请求，但是使用 base64 格式会导致图片的体积增大，这也是需要权衡的因素")]),t._v(" "),s("p",[t._v("对于第三点，尽量使用字体图标，比如 "),s("a",{attrs:{href:"https://www.iconfont.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("iconfont"),s("OutboundLink")],1),t._v("，字体图标是轻量级的，使用字体图标代替图片也可以减少 HTTP 请求，它可以使用文字的 CSS 属性(如 "),s("code",[t._v("font-size")]),t._v("、"),s("code",[t._v("color")]),t._v(" 等)，修改属性可以直接用 CSS 属性修改，放大图片不会出现失真的情况。当然，使用字体图标也是有缺点的，它只支持单色或者是 CSS3 的渐变色，没有像图片资源那样绚丽多彩的颜色，而且后期维护成本也相对比较高")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"文件拆分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件拆分"}},[t._v("#")]),t._v(" 文件拆分")]),t._v(" "),s("p",[t._v("文件拆分常常用于 SPA 单页面应用的首屏渲染时间过长的场景，可以把文件拆分成一个路由对应一个 JS 文件，同时配合上"),s("strong",[t._v("路由懒加载")]),t._v("，这样一来，在首页的时候，只需要加载首页所用到的资源，切换到其他路由的时候，再去加载其他页面所用到的资源，这样可以把加载时间平均分配到各个页面，解决了首屏渲染时间过长的问题")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"资源按需引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源按需引入"}},[t._v("#")]),t._v(" 资源按需引入")]),t._v(" "),s("p",[t._v("有时候只使用了一些第三方库的一小部分资源，也需要把完整的库资源引入，这是大可不必的，比如 Element UI 它是非常庞大的，如果只使用了其中的几个组件则没必要把它全部引入，这对性能的影响是非常大的，所以可以使用按需加载，再利用 webpack 等打包工具进行 tree shaking，这也能提高性能")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只引入 Button 组件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Button "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("需要注意的是，"),s("strong",[t._v("必须要使用 ES6 的模块化")]),t._v("，这样在打包的时候才可以进行 tree shaking")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"资源预加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源预加载"}},[t._v("#")]),t._v(" 资源预加载")]),t._v(" "),s("p",[t._v("提前加载资源，当用户需要查看时可直接从本地缓存中渲染。对当前页面需要的资源，使用 "),s("code",[t._v("preload")]),t._v(" 进行预加载，对其它页面需要的资源进行 "),s("code",[t._v("prefetch")]),t._v(" 预加载")]),t._v(" "),s("p",[s("strong",[t._v("preload")])]),t._v(" "),s("p",[s("code",[t._v("preload")]),t._v(" 页面加载的过程中，在浏览器开始主体渲染之前加载")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 对 index.js 进行 preload 预加载 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("prefetch")])]),t._v(" "),s("p",[s("code",[t._v("prefetch")]),t._v(" 页面加载完成后，利用空闲时间提前加载")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--对 next.js 进行 prefetch 预加载--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("next.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("code",[t._v("vue-cli")]),t._v(" 默认已经开启了 "),s("code",[t._v("prefetch")]),t._v(" 功能，这给我们开发带来了很大的便利")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"dns-预解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-预解析"}},[t._v("#")]),t._v(" DNS 预解析")]),t._v(" "),s("p",[t._v("DNS 预解析也是前端优化中的一部分，即利用空闲时间提前解析，域名解析是耗时间的，使用 DNS 预解析可以有效的降低 DNS 解析的延迟，下面给出开启预解析的方法：")]),t._v(" "),s("p",[t._v("在 HTML 的 HEAD 中加入以下内容即可：")]),t._v(" "),s("p",[s("strong",[t._v("1.当前页面要做 DNS 预解析")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- on 表示开启，若想关闭则改为 off 即可 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x-dns-prefetch-control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("2.强制查找特定的主机名：")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 在此示例中，域名“ www.mozilla.org/contribute ”将被预先解析 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://www.mozilla.org/contribute/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("一些浏览器会对 a 标签的 "),s("code",[t._v("href")]),t._v(" 自动启用 DNS 预解析，所以 a 标签里包含的域名不需要在 HEAD 中手动设置 LINK。但是在 HTTPS 下不起作用，需要 META 来强制开启功能，更多详细配置可以参考 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN X-DNS-Prefetch-Control"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"资源渲染优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源渲染优化"}},[t._v("#")]),t._v(" 资源渲染优化")]),t._v(" "),s("p",[t._v("资源渲染优化是指拿到一个页面中的所有资源后，对页面资源的呈现过程进行优化，侧重点在渲染的过程")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"减少-dom-操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少-dom-操作"}},[t._v("#")]),t._v(" 减少 DOM 操作")]),t._v(" "),s("p",[t._v("DOM 操作是很耗性能的，某些 DOM 属性(如 "),s("code",[t._v("offsetTop")]),t._v("、"),s("code",[t._v("scrollTop")]),t._v(")的读取还会触发浏览器的"),s("strong",[t._v("重排")]),t._v("操作，一旦 DOM 操作多了，对网页的性能将会有很大的影响，所以应该尽可能的减少 DOM 操作")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"优化关键渲染路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化关键渲染路径"}},[t._v("#")]),t._v(" 优化关键渲染路径")]),t._v(" "),s("p",[t._v("关键渲染路径是浏览器将 HTML、CSS、JS 转换为在屏幕上呈现的像素内容所经历的一系列步骤，为了优化关键渲染路径，给出了以下几种方案：")]),t._v(" "),s("ol",[s("li",[t._v("CSS 放在 HEAD 中，与页面加载无关的 JS 放 BODY 后")]),t._v(" "),s("li",[t._v("行内脚本(script 标签引入)根据情况使用 async 或 defer 进行异步加载")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),s("p",[t._v("当数据量大的时候，为了页面的性能考虑，是有必要使用懒加载渲染的，懒加载指的就是，在需要时加载，比如 SPA 单页面应用的首屏问题，首屏的时候只加载首屏对应的内容，切换路由时再加载该路由对应的内容；还有假如后端一次性给你了几万条数据，这时候也是有必要使用懒加载的，懒加载的例子还有很多，比如图片懒加载、路由懒加载、滚动加载、下拉刷新加载等")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"防抖和节流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防抖和节流"}},[t._v("#")]),t._v(" 防抖和节流")]),t._v(" "),s("p",[t._v("防抖和节流也是前端性能优化中常用的手段，常见于需要频繁触发某一事件的场景，可以有效的控制事件触发的频率和时间，极大提高了页面性能")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"减少浏览器重绘和重排-回流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少浏览器重绘和重排-回流"}},[t._v("#")]),t._v(" 减少浏览器重绘和重排(回流)")]),t._v(" "),s("p",[t._v("如果只修改了元素的颜色会触发浏览器的重绘，如果修改了元素尺寸或位置会触发浏览器的重排(也叫回流)，重排的性能消耗要比重绘大得多，所以应该尽量减少浏览器的重绘和重排")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"结束语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),s("p",[t._v("以上就是关于前端性能优化的一些内容，这些内容是经过我精简的，如果想看详细的可以看下面的参考资料。如果本文中有说的不正确的地方，欢迎大佬鞭策!")]),t._v(" "),s("p",[s("strong",[t._v("参考资料：")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000017556203",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端性能优化总结"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("网页性能管理详解"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://segmentfault.com/a/1190000016745587",target:"_blank",rel:"noopener noreferrer"}},[t._v("页面性能优化办法有哪些？"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/FxZppdqfQMVpsy3EaQeHSg",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于前端性能优化一些总结"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/Q7YPgruUsJX_IQATAysQDA",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 项目性能优化指南（网上最完整）"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/i8GKUpnShSm1_6-4wj8o5Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端性能优化指南"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);