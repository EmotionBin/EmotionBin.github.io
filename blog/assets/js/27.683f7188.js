(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{382:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第三方登录与单点登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方登录与单点登录"}},[t._v("#")]),t._v(" 第三方登录与单点登录")]),t._v(" "),a("p",[t._v("本文来讨论一下"),a("strong",[t._v("第三方登录")]),t._v("与"),a("strong",[t._v("单点登录")]),t._v("的实现")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"第三方登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方登录"}},[t._v("#")]),t._v(" 第三方登录")]),t._v(" "),a("p",[t._v("第三方登录是借用第三方的登录系统，完成登录的操作，这里的第三方一定是权威的、可信任的机构，看下面这张图(来自"),a("a",{attrs:{href:"https://juejin.im/",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金"),a("OutboundLink")],1),t._v("登录页面)就知道什么是第三方登录了")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://s1.ax1x.com/2020/11/05/BWAAN4.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2020/11/05/BWAAN4.png",alt:"BWAAN4.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("话不多说，直接来看我自己写的一个 demo")]),t._v(" "),a("p",[t._v("页面很简单，就是一个登录页面")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://s1.ax1x.com/2020/11/06/BhtFaD.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2020/11/06/BhtFaD.png",alt:"BhtFaD.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这个页面有两个按钮，登录按钮就是普通的登录，重点关注第三方登录这个按钮")]),t._v(" "),a("p",[t._v("这个第三方登录按钮点击后发生了什么，看完下面的代码就知道了")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里是点击第三方登录按钮的函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("thirdPartyLogin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" redirect_uri "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:9527/success.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childWindow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("http://localhost:9528/index1.html?redirect_uri=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("redirect_uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("width=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", height=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", top=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", left=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听第三方登录页面关闭事件")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("closed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第三方登页面关闭的回调")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拿到access_token")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" access_token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'access_token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送请求获取用户信息")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("access_token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("p",[t._v("点击之后会打开一个新的页面，这个新的页面是第三方自己的，"),a("strong",[t._v("并且利用轮询来监听这个页面的关闭事件，在关闭后执行获取用户信息的回调")]),t._v("，这个后面会说")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://s1.ax1x.com/2020/11/06/Bht8iQ.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2020/11/06/Bht8iQ.png",alt:"Bht8iQ.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("注意观察这两个页面，他们的 url 地址的域名部分是不一样的，都是各自的域名，并且第三方登录页面会有一个参数 "),a("code",[t._v("redirect_uri")]),t._v("，这个参数的地址是登录成功后的回调地址，注意，这个回调地址需要经过编码")]),t._v(" "),a("p",[t._v("在这个页面中输入账号密码，点击登录，服务器校验，若校验通过，则登录成功，"),a("strong",[t._v("服务器返回一个临时票据 "),a("code",[t._v("code")]),t._v("，这时候这个页面会带着这个 "),a("code",[t._v("code")]),t._v(" 参数重定向到之前的 "),a("code",[t._v("redirect_uri")]),t._v(" 的页面")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://s1.ax1x.com/2020/11/06/BhUM4g.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2020/11/06/BhUM4g.png",alt:"BhUM4g.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("注意看这里的域名，又回到了原来的域名，这个页面是特意为第三方登录成功后而准备的，"),a("strong",[t._v("拿到这个 "),a("code",[t._v("code")]),t._v(" 后，带着这个 "),a("code",[t._v("code")]),t._v(" 向服务器请求真正的 "),a("code",[t._v("access_token")])]),t._v("，拿到真正的 "),a("code",[t._v("access_token")]),t._v(" 后存入 localStorage 中，然后这个页面会在 3 秒后关闭")]),t._v(" "),a("p",[t._v("还记得最开始的那个登录页面吗，之前是用轮询的方式监听第三方登录页面的关闭状态，关闭后，从 localStorage 中读取 "),a("code",[t._v("access_token")]),t._v("，再带着 "),a("code",[t._v("access_token")]),t._v(" 向服务器请求用户的信息，服务器校验 "),a("code",[t._v("access_token")]),t._v("，若校验通过，则成功获取到用户信息，整个第三方登录流程完成")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://s1.ax1x.com/2020/11/06/BhaLO1.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2020/11/06/BhaLO1.png",alt:"BhaLO1.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("看到这里可能会有两点疑问")]),t._v(" "),a("p",[t._v("Q:为什么需要回调地址 "),a("code",[t._v("redirect_uri")]),t._v(" 并拼接参数，而不是直接服务器返回信息?")]),t._v(" "),a("p",[t._v("A:如果不用回调地址，服务器直接返回信息，有可能会被截获，导致一系列不可预知的后果，若通过回调地址并拼接上参数则相对安全，因为这个回调地址是事先定义好的，也就是说这个地址一定是我们这边自己的地址，不会是黑客的钓鱼网站，这样就保证了登录成功后我们能从页面的参数中拿到必要信息")]),t._v(" "),a("p",[t._v("Q:为什么先拿到一个临时票据，再用临时票据换取真实凭证，而不是直接拿到真实凭证?")]),t._v(" "),a("p",[t._v("A:因为拿到的第一个票据是需要拼接在回调地址的参数上的，这是可以在页面地址 URL 直接暴露出来的，如果这时候直接给真实的凭证，则真实凭证就会被暴露出来，有可能被黑客利用，所以需要先返回一个临时的票据，客户端再通过这个临时的票据去获取真正的凭证")]),t._v(" "),a("p",[t._v("我写的这个 demo 会发布在我的 github 上，看详细的实现过程可以点击这里 "),a("a",{attrs:{href:"https://github.com/EmotionBin/various-demo/tree/master/third-party-login",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"单点登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单点登录"}},[t._v("#")]),t._v(" 单点登录")]),t._v(" "),a("p",[t._v("单点登录即 Single Sign On，简称 "),a("strong",[t._v("SSO")]),t._v("，简单来说，单点登录就是"),a("strong",[t._v("在多个系统中，用户只需一次登录，各个系统即可感知该用户已经登录")])]),t._v(" "),a("p",[t._v("单点登录可能会遇到同域或者跨域的情况，这里主要讲解下面 3 个方面")]),t._v(" "),a("ol",[a("li",[t._v("同域名下的单点登录(域名一致，端口可以不一致)")]),t._v(" "),a("li",[t._v("不同域名下的单点登录(借助 SSO 登录系统)")]),t._v(" "),a("li",[t._v("不同域名下的单点登录(借助 iframe 实现 localStorage 跨域共享)")])]),t._v(" "),a("p",[t._v("这些 demo 会发布在我的 github 上，看详细的实现过程可以点击这里 "),a("a",{attrs:{href:"https://github.com/EmotionBin/various-demo/tree/master/single-sign-on",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"同域名下的单点登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同域名下的单点登录"}},[t._v("#")]),t._v(" 同域名下的单点登录")]),t._v(" "),a("p",[t._v("同域名下的单点登录很简单，在其中一个页面登录之后，服务器会返回一个登录凭证，比如 uuid，把这个 uuid 存到 cookie 中，在另一个页面进行刷新，读取 cookie 的 uuid 并向服务器请求用户信息，登录成功")]),t._v(" "),a("p",[t._v("实现原理:"),a("strong",[t._v("同域名下 cookie 是可以相互访问的，在任意一个页面中登录成功后将登录凭证写入 cookie 即可，其他页面可以通过 cookie 获取登录凭证")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"不同域名下的单点登录-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同域名下的单点登录-1"}},[t._v("#")]),t._v(" 不同域名下的单点登录-1")]),t._v(" "),a("p",[t._v("不同域名下的单点登录需要借助一个 SSO 登录系统，"),a("strong",[t._v("因为 cookie 不支持跨域(如果两个域名不同的网站顶级域名相同则可以利用 cookie 的 domain 属性实现 cookie 共享)，所以不能用上面的办法")])]),t._v(" "),a("p",[t._v("打开其中一个网页，如果没有登录，会带着 "),a("code",[t._v("redirect_uri")]),t._v(" 参数自动跳转到 SSO 登录系统，"),a("code",[t._v("redirect_uri")]),t._v(" 是登录成功后的回调地址，"),a("strong",[t._v("用户的登录统一在这个 SSO 登录系统进行处理")]),t._v("，在这里登录成功后，服务器返回登录凭证 "),a("code",[t._v("code")]),t._v("，并把这个 "),a("code",[t._v("code")]),t._v(" 写入 cookie 中，再根据 "),a("code",[t._v("redirect_uri")]),t._v(" 带着 "),a("code",[t._v("code")]),t._v(" 重定向回之前的页面，带着 "),a("code",[t._v("code")]),t._v(" 向服务器请求用户信息，登录成功，打开另一个页面，用于没有登录，自动跳转到 SSO 登录系统，读取 cookie 中的登录凭证 "),a("code",[t._v("code")]),t._v("，带着 "),a("code",[t._v("code")]),t._v(" 重定向回之前的页面，再带着 "),a("code",[t._v("code")]),t._v(" 请求用户信息，登录成功")]),t._v(" "),a("p",[t._v("实现原理:"),a("strong",[t._v("增加一个 SSO 登录系统，统一处理登录，利用这个 SSO 登录系统的 cookie 记录登录凭证，如果存在登录凭证，则带着登录凭证重定向回之前的页面，之前的页面带着登录凭证请求用户信息")])]),t._v(" "),a("p",[a("strong",[t._v("这里有一点说一下，因为登录成功后会带着登录凭证重定向回之前的页面，这个登录凭证是暴露在 url 上的，为了安全起见，利用这个登录凭证获取用户信息成功后，最好把登录凭证记录到 localStorage 中或者 cookie 中，并且再进行一次重定向，把页面中的登录凭证抹去，页面不带任何参数，这样更安全")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"不同域名下的单点登录-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同域名下的单点登录-2"}},[t._v("#")]),t._v(" 不同域名下的单点登录-2")]),t._v(" "),a("p",[t._v("这里使用另一种方法，登录成功后，直接把登录凭证写入 localStorage 中，但是因为是跨域的，另一个页面是读取不到 localStorage 中记录的信息的，那么有没有办法实现 localStorage 的跨域访问呢，答案是有的，这也是这里的核心思路，"),a("strong",[t._v("利用 iframe 实现 localStorage 跨域共享")])]),t._v(" "),a("p",[a("strong",[t._v("首先，必须要在所有要实现单点登录的页面中都嵌入一个 iframe 页面，它是 localStorage 传输的中转站")]),t._v("，在任意一个页面中登录成功后，利用 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage",target:"_blank",rel:"noopener noreferrer"}},[t._v("postMessage"),a("OutboundLink")],1),t._v(" 向嵌入的 iframe 页面发送消息，把登录凭证传递过去，"),a("strong",[t._v("iframe 收到信息后写入自己的 localStorage 中")]),t._v("，刷新另一个页面，因为另一个页面中也嵌入了这个 iframe，iframe 加载完毕后，会向父页面发送登录凭证，这个页面接收到登录凭证后，向后端请求用户信息，登录成功")]),t._v(" "),a("p",[t._v("实现原理:"),a("strong",[t._v("利用 iframe 作为 localStorage 的中转站实现 localStorage 跨域访问")])]),t._v(" "),a("p",[t._v("可以看一下"),a("a",{attrs:{href:"https://www.taobao.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("淘宝"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://www.tmall.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("天猫"),a("OutboundLink")],1),t._v("，这是两个不同的域名，但是只要在任意一个页面中登录之后，刷新另一个页面也就自动登录了，就是利用了 iframe 实现的单点登录，打开 F12，可以看到他们都引用了一个 iframe")]),t._v(" "),a("p",[t._v("淘宝")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://s1.ax1x.com/2020/11/07/B5qa28.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2020/11/07/B5qa28.png",alt:"B5qa28.png"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("天猫")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://s1.ax1x.com/2020/11/07/B5LSZd.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2020/11/07/B5LSZd.png",alt:"B5LSZd.png"}}),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"结束语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),a("p",[t._v("以上就是本文的所有内容。如果本文中有说的不正确的地方，欢迎大佬鞭策!")]),t._v(" "),a("p",[a("strong",[t._v("参考资料：")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/75edcc05acfd",target:"_blank",rel:"noopener noreferrer"}},[t._v("单点登录（SSO）看这一篇就够了"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);