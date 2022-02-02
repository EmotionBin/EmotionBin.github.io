(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{389:function(t,s,a){"use strict";a.r(s);var e=a(46),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"彻底弄懂-cookie、session、token、webstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#彻底弄懂-cookie、session、token、webstorage"}},[t._v("#")]),t._v(" 彻底弄懂 cookie、session、token、webstorage")]),t._v(" "),a("p",[t._v("本文要讲述的主要就是 cookie、session、token、webstorage 这四兄弟之间的关系与区别，他们都是我们前端攻城狮经常接触的，特别是关于鉴权、用户信息这一方面")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" cookie")]),t._v(" "),a("h3",{attrs:{id:"cookie-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-是什么"}},[t._v("#")]),t._v(" cookie 是什么")]),t._v(" "),a("p",[t._v("cookie 指某些网站为了辨别用户身份而储存在用户浏览器上的数据(通常经过加密)，以便于用户再次访问的时候对用户进行身份校验。cookie 是服务器保存在浏览器的一小段文本信息，每个 cookie 的大小一般不能超过 4KB。浏览器每次向服务器发出请求，就会自动附上这段信息")]),t._v(" "),a("p",[t._v("HTTP 是一种无状态传输协议，它不能以状态来区分和管理请求和响应。也就是说，服务器接收到了一个 HTTP 请求时，服务器并不知道这个请求是谁发来的，假如现在有三个人，A、B、C，他们的编号分别为 1、2、3，这三个人向服务器发送请求时，把自己的编号带过去，服务器就可以知道请求是谁发来的了。cookie 也是一样的道理，cookie 中存储用户的信息，在发送请求时把 cookie 存储的用户信息带到服务器，服务器就可以根据带过来的用户信息来区分请求来自哪个用户了")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"cookie-的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的属性"}},[t._v("#")]),t._v(" cookie 的属性")]),t._v(" "),a("p",[t._v("cookie 有以下重要参数")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://s1.ax1x.com/2020/10/10/0y0AWd.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2020/10/10/0y0AWd.png",alt:"0y0AWd.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("除了以上参数外，cookie 还新增了一个参数 "),a("code",[t._v("SameSite")]),t._v("，用来防止 CSRF 攻击和用户追踪")]),t._v(" "),a("p",[t._v("CSRF 可以看我之前的文章，这里就不多说了，这里引用阮一峰老师的文章解释一下 cookie 实现用户追踪的原理")]),t._v(" "),a("p",[t._v("比如，Facebook 在第三方网站插入一张看不见的图片")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("facebook.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("浏览器加载上面代码时，就会向 Facebook 发出带有 cookie 的请求，从而 Facebook 就会知道你是谁，访问了什么网站")]),t._v(" "),a("p",[t._v("cookie 的 SameSite 属性用来限制第三方 cookie，从而减少安全风险，它有三个值 "),a("strong",[t._v("Strict")]),t._v("、"),a("strong",[t._v("Lax")]),t._v("、"),a("strong",[t._v("None")])]),t._v(" "),a("ul",[a("li",[t._v("Strict，最为严格，完全禁止第三方 cookie，跨站点时，任何情况下都不会发送 cookie。换言之，只有当前网页的 url 与请求目标一致，才会带上 cookie")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Set"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Cookie"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CookieName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("CookieValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" SameSite"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Strict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("Lax，规则稍稍放宽，大多数情况也是不发送第三方 cookie，但是导航到目标网址的 get 请求(链接、预加载、get 表单)除外")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("请求类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("示例")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("正常情况")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Lax")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("链接")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('<a href="..."></a>')])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("发送 cookie")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("发送 cookie")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("预加载")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('<link rel="prerender" href="..."/>')])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("发送 cookie")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("发送 cookie")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("get 表单")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('<form method="GET" action="...">')])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("发送 cookie")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("发送 cookie")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("post 表单")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('<form method="POST" action="...">')])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("发送 cookie")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不发送")])])])]),t._v(" "),a("ul",[a("li",[t._v("None，显式关闭 SameSite 属性，前提是必须同时设置 Secure 属性（cookie 只能通过 HTTPS 协议发送），否则无效")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Set"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Cookie"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" widget_session"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("abc123"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" SameSite"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("None"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Secure\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("cookie 其中一个属性 "),a("code",[t._v("HttpOnly")]),t._v("，指定该 cookie 无法通过 js 脚本拿到，主要是 "),a("code",[t._v("document.cookie")]),t._v(" 属性、"),a("code",[t._v("XMLHttpRequest")]),t._v(" 对象和 "),a("code",[t._v("Request API")]),t._v(" 都拿不到该属性。这样就防止了该 cookie 被脚本读到，只有浏览器发出 HTTP 请求时，才会带上该 cookie")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"如何设置-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何设置-cookie"}},[t._v("#")]),t._v(" 如何设置 cookie")]),t._v(" "),a("p",[t._v("服务器通过 response 的 "),a("code",[t._v("set-cookie")]),t._v(" 字段告诉客户端去写入 cookie，后面的请求都会携带该 cookie")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://s1.ax1x.com/2020/10/10/0ydcC9.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2020/10/10/0ydcC9.png",alt:"0ydcC9.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("浏览器可以设置不接受 cookie，也可以设置不向服务器发送 cookie，"),a("code",[t._v("window.navigator.cookieEnabled")]),t._v(" 属性返回一个布尔值，表示浏览器是否打开 cookie 功能")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浏览器是否打开 cookie 功能")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookieEnabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"如何使用-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-cookie"}},[t._v("#")]),t._v(" 如何使用 cookie")]),t._v(" "),a("p",[t._v("浏览器每次向服务器发出请求，就会自动附上当前网页所存储的 cookie")]),t._v(" "),a("p",[a("code",[t._v("document.cookie")]),t._v(" 属性返回当前网页的 cookie")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前网页的 cookie")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("对 "),a("code",[t._v("document.cookie")]),t._v(" 属性以键值对的形式赋值可以写入 cookie")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写入 cookie 一次只能写入一个 cookie，而且写入并不是覆盖，而是添加")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test = 111'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("写入 cookie 的时候，可以一起写入 cookie 的属性")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo=bar; expires=Fri, 31 Dec 2020 23:59:59 GMT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("cookie 的属性一旦设置完成，就没有办法读取这些属性的值")]),t._v(" "),a("p",[t._v("不同浏览器对 cookie 数量和大小的限制，是不一样的。一般来说，单个域名设置的 cookie 不应超过 30 个，每个 cookie 的大小不能超过 4KB。超过限制以后，cookie 将被忽略，不会被设置")]),t._v(" "),a("p",[t._v("浏览器的同源政策规定，两个网址只要域名相同和端口相同，就可以共享 cookie。注意，这里不要求协议相同。也就是说，"),a("code",[t._v("http://example.com")]),t._v(" 设置的 cookie，可以被 "),a("code",[t._v("https://example.com")]),t._v(" 读取")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[t._v("#")]),t._v(" session")]),t._v(" "),a("p",[t._v("session 是另一种记录服务器和客户端会话状态的机制，只不过 session 存储在服务器端，该会话对应的 key 即 sessionId 会被存储到客户端的 cookie 中")]),t._v(" "),a("p",[t._v("在用户登录成功后，服务器在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等，并向客户端返回一个 session_id，写入客户端的 cookie，用户随后的每一次请求，都会通过 cookie，将 session_id 传回服务器，服务器收到 session_id，找到之前保存的数据，由此得知用户的身份")]),t._v(" "),a("p",[a("strong",[t._v("使用 session 有以下缺点")])]),t._v(" "),a("ul",[a("li",[t._v("占资源，需要为每个认证用户在内存中存储 session，如果用户数量很大，服务端的开销将会增大")]),t._v(" "),a("li",[t._v("扩展性差，如果后端是一个服务器集群，需要 session 数据共享，每台服务器都能够读取 session，这就要进行一定的处理(加一层持久层或者写入数据库的方式存储 session)")]),t._v(" "),a("li",[t._v("不能防止 CSRF 攻击，基于 cookie 来进行用户识别时，用户 cookie 如果被截获，就容易受到跨站请求伪造的攻击")])]),t._v(" "),a("p",[a("strong",[t._v("cookie 和 session 对比")])]),t._v(" "),a("ul",[a("li",[t._v("安全性：session 比 cookie 安全，session 是存储在服务器端的，cookie 是存储在客户端的，相比而言 session 更安全")]),t._v(" "),a("li",[t._v("存取值的类型：cookie 只支持存字符串数据，想要设置其他类型的数据，需要将其转换成字符串，session 可以存任意数据类型")]),t._v(" "),a("li",[t._v("有效期：cookie 可设置为长时间保持，比如我们经常使用的默认登录功能，session 一般失效时间较短，客户端关闭(默认情况下)或者 session 超时都会失效")]),t._v(" "),a("li",[t._v("存储大小：单个 cookie 保存的数据不能超过 4KB，session 可存储数据远高于 cookie，但是当访问量过多，会占用过多的服务器资源")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[t._v("#")]),t._v(" token")]),t._v(" "),a("p",[t._v("token 是一串字符串，通常作为鉴权凭据，最常用的使用场景是 API 鉴权")]),t._v(" "),a("p",[t._v("在用户登录成功后，服务端根据用户认证凭证使用特定算法生成一个字符串，这就是 token，然后把这个 token 返回给客户端，客户端每次向服务端请求资源的时候需要带着服务端签发的 token，服务端会对 token 进行验证，验证成功则返回数据，验证失败则返回具体内容，前端再进行对应操作(比如跳转到登录页面)")]),t._v(" "),a("p",[t._v("目前比较常用的就是 JWT(jsonwebtoken)，这里不再赘述，可以看看阮一峰老师的文章 "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Web Token 入门教程"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("对比 cookie 与 session，token 有以下优点")])]),t._v(" "),a("ul",[a("li",[t._v("适当减少服务端压力，服务端不需要像 session 那样为每个用户都存储一份认证信息")]),t._v(" "),a("li",[t._v("支持跨域访问，cookie 是不支持跨域访问的，也就是说 HTTP 请求在跨域的情况下不会自动携带 cookie，但是 token 支持跨域访问")]),t._v(" "),a("li",[t._v("防止 CSRF 攻击，CSRF 利用的就是 cookie，使用 token 可以很好的预防")]),t._v(" "),a("li",[t._v("无状态，可以在多个服务间共享")])]),t._v(" "),a("p",[t._v("关于 cookie 不支持跨域与 CSRF 攻击的联系，cookie 在跨域 HTTP 请求确实是不会自动带上的，根本原因就是浏览器同源策略，CSRF 攻击是利用钓鱼网站携带用户认证的 cookie 向源站服务器发送请求，这种情况下是跨域的，cookie 不会自动携带，那么可以利用不受浏览器同源策略限制的手段进行 CSRF 攻击，比如用 script，img 或者 iframe 之类的请求源站服务器，浏览器就会自动带上 cookie，从而进行 CSRF 攻击，"),a("strong",[t._v("script、image、iframe 的 src 都不受同源策略的影响，所以可以借助这一特点，实现跨域，进行 CSRF 攻击")])]),t._v(" "),a("p",[a("strong",[t._v("token 有以下缺点")])]),t._v(" "),a("ul",[a("li",[t._v("占带宽，token 是一个比较长的字符串，因此传输过程中会消耗比较多的带宽")]),t._v(" "),a("li",[t._v("无法在服务端注销，token 是无法手动注销的，只有 token 的时效过期，才能达到注销 token 的目的")]),t._v(" "),a("li",[t._v("性能问题，因为 token 是根据加密算法生成的，所以在加密、解密生成 token 时，需要花费一定的计算时间")])]),t._v(" "),a("p",[t._v("对于 token 无法在服务端注销这一问题，是有解决办法的，我们可以给 token 做一个映射，比如用字符串 A 代表 token1，用字符串 B 代表 token2，既然 token 无法手动注销，那么我们可以对 token 的映射进行操作即可，让各个 token 的映射无法访问到真实 token 即可，我写过一个 token 自动刷新的 demo，原理是一样的，可以看这里 "),a("a",{attrs:{href:"https://github.com/EmotionBin/various-demo/tree/master/token-auto-refresh",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"webstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webstorage"}},[t._v("#")]),t._v(" webstorage")]),t._v(" "),a("h3",{attrs:{id:"sessionstorage-与-localstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage-与-localstorage"}},[t._v("#")]),t._v(" sessionStorage 与 localStorage")]),t._v(" "),a("p",[t._v("Storage 接口用于脚本在浏览器保存数据。两个对象部署了这个接口：window.sessionStorage 和 window.localStorage")]),t._v(" "),a("p",[t._v("sessionStorage 特别的一点在于，即便是相同域名下的两个页面，只要它们不在同一个浏览器窗口中打开，那么它们的 sessionStorage 内容便无法共享；localStorage 在所有同源窗口中都是共享的")]),t._v(" "),a("p",[t._v("sessionStorage 保存的数据用于浏览器的一次会话(session)，当会话结束(通常是窗口关闭)，数据被清空;localStorage 保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。除了保存期限的长短不同，这两个对象的其他方面都一致")]),t._v(" "),a("p",[t._v("sessionStorage 与 localStorage 保存的数据都以“键值对”的形式存在，所有的数据都是以文本格式保存")]),t._v(" "),a("p",[t._v("与 cookie 相比，他们两能够使用大得多的存储空间。目前，每个域名的存储上限视浏览器而定，Chrome 是 5MB。另外，与 cookie 一样，它们也受同域限制。某个网页存入的数据，只有同域下的网页才能读取，"),a("strong",[t._v("协议和端口都有影响")]),t._v("，如果跨域操作会报错，请看下面的例子")]),t._v(" "),a("ul",[a("li",[t._v("http://a.com 和 https://a.com 不共享")]),t._v(" "),a("li",[t._v("http://a.com:80 和 http://a.com:8080 不共享")]),t._v(" "),a("li",[t._v("http://a.com 和 http://a.com:80 共享")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"属性和方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性和方法"}},[t._v("#")]),t._v(" 属性和方法")]),t._v(" "),a("p",[a("strong",[t._v("返回保存的数据项个数")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("写入数据")])]),t._v(" "),a("p",[t._v("以键值对的形式写入数据，如果键名已经存在，该方法会更新已有的键值")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("读取数据")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("清除某一条数据")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("清除所有数据")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("遍历所有数据项")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("事件监听")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onStorageChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'storage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onStorageChange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("注意，该事件有一个很特别的地方，就是它不在导致数据变化的当前页面触发，而是在同一个域名的其他窗口触发。也就是说，如果浏览器只打开一个窗口，可能观察不到这个事件。比如同时打开多个窗口，当其中的一个窗口导致储存的数据发生改变时，只有在其他窗口才能观察到监听函数的执行。"),a("strong",[t._v("可以通过这种机制，实现多个窗口之间的通信，实现同域下的页面之间广播机制")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[t._v("#")]),t._v(" 实践")]),t._v(" "),a("p",[t._v("来看一些面试题")]),t._v(" "),a("h3",{attrs:{id:"cookie、sessionstorage-和-localstorage-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie、sessionstorage-和-localstorage-的区别"}},[t._v("#")]),t._v(" cookie、sessionStorage 和 localStorage 的区别")]),t._v(" "),a("p",[t._v("这是一道老生常谈的面试题了，我觉得这道题的回答思路可以分为以下几个方面")]),t._v(" "),a("p",[a("strong",[t._v("从存储时效来说")])]),t._v(" "),a("ul",[a("li",[t._v("cookie 可以手动设置失效期，默认为会话级(即浏览器关闭，会话结束后自动清空)")]),t._v(" "),a("li",[t._v("sessionStorage 的存储时长也是会话级")]),t._v(" "),a("li",[t._v("localStorage 的存储时长是永久，除非用户手动删除")])]),t._v(" "),a("p",[a("strong",[t._v("从访问的局限性来说")])]),t._v(" "),a("ul",[a("li",[t._v("cookie 可以设置路径 path，path 不一致不能访问，但是 path 设为根路径都可以访问，所以他要比另外两个多了一层访问限制")]),t._v(" "),a("li",[t._v("localStorage 和 sessionStorage 的访问受到浏览器同源策略限制，同协议、域名、端口才能访问")]),t._v(" "),a("li",[t._v("cookie 可以通过设置 domain 属性值，可以不同二级域名下共享 cookie，而 Storage 不可以(Storage 可以通过 iframe 实现跨域访问)")])]),t._v(" "),a("p",[a("strong",[t._v("从存储大小限制来说")])]),t._v(" "),a("ul",[a("li",[t._v("cookie 适合存储少量数据，他的大小限制是个数进行限制，每个浏览器的限制数量不同")]),t._v(" "),a("li",[t._v("Storage 可以存储数据的量较大，此外他是通过占用空间大小来做限制的")])]),t._v(" "),a("p",[a("strong",[t._v("其他")])]),t._v(" "),a("ul",[a("li",[t._v("在发送 http 请求时，如果是非跨域请求，默认情况下浏览器会将 cookie 自动带上发送到服务端")]),t._v(" "),a("li",[t._v("cookie 可以由服务端通过 http 来设定")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"结束语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),a("p",[t._v("以上就是关于本文的所有内容。如果本文中有说的不正确的地方，欢迎大佬鞭策!")]),t._v(" "),a("p",[a("strong",[t._v("参考资料：")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/6844903708938108935",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端鉴权知识学习"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cookie 的 SameSite 属性"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://javascript.ruanyifeng.com/bom/cookie.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰 Cookie"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Web Token 入门教程"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://javascript.ruanyifeng.com/bom/webstorage.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Storage：浏览器端数据储存机制"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);