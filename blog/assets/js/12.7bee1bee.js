(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{370:function(t,v,_){"use strict";_.r(v);var a=_(45),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"聊聊cdn"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#聊聊cdn"}},[t._v("#")]),t._v(" 聊聊CDN")]),t._v(" "),_("p",[t._v("CDN也算是我们开发者接触的比较多的一个名词，我曾经记得在引入外部的库的时候，大佬们总说走的CDN，我一直对CDN很不解，到底CDN是什么，它能给我们带来什么便利，我最近抽时间看了一些文章，总结了一下，接下来就来聊一聊CDN")]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"cdn是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cdn是什么"}},[t._v("#")]),t._v(" CDN是什么")]),t._v(" "),_("p",[t._v("先举个简单的例子，著名的国际大品牌Nike原产地是美国，每天都有非常惊人的销量，Nike的商品发往各个国家，虽然销量惊人，但是发货的时候却是个头疼的问题，它需要从美国把自己的产品横跨太平洋、大西洋后才能送到客户手中...成本大大增加，于是有一天Nike就想，我可不可以在一些热销的国家开设代工厂，在那边雇人，生产产品，这样不就可以大大减少成本了吗。确实，如果这样的话，物品很快就能到客户手中，这无形中节约了很多的成本。Nike从最开始的美国本土生产，到后来分布在世界各地开设代工厂，这就是CDN的一种表现形式。")]),t._v(" "),_("p",[t._v("CDN的全称是"),_("code",[t._v("Content Delivery Network")]),t._v("，即内容分发网络。它的作用是减少传播时延，找最近的节点。从上面Nike的例子就很容易理解，原来Nike的产品送到中国需要特别长的时间，后来Nike直接在中国附近开设代工厂，在这边生产，在这边发货，这样一来产品到客户手里就特别快了。CDN一般起到加速的作用，几乎在各个地方都有它的节点，"),_("strong",[t._v("它只会去找最近的节点")]),t._v("，然后将数据返回。")]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"cdn的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cdn的作用"}},[t._v("#")]),t._v(" CDN的作用")]),t._v(" "),_("h3",{attrs:{id:"加速访问"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#加速访问"}},[t._v("#")]),t._v(" 加速访问")]),t._v(" "),_("p",[t._v("CDN作为前端性能优化经典手段，它可以"),_("strong",[t._v("加速我们访问一些资源的速度，减少延时")]),t._v("，从很大程度上就能作为加速手段了。实际上，真正的 CDN 并不是一个国家一个节点，甚至是一个运营商，一个省份乃至地区都会有节点。下面引用别人的一张图:")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://s1.ax1x.com/2020/05/20/Yoy2I1.png",alt:"Yoy2I1.png"}})]),t._v(" "),_("hr"),t._v(" "),_("h3",{attrs:{id:"减轻源站服务器的压力"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#减轻源站服务器的压力"}},[t._v("#")]),t._v(" 减轻源站服务器的压力")]),t._v(" "),_("p",[t._v("对于这个问题，我在搭建我的博客的时候，深有体会。最起初我的博客用的都是本地的资源，部署到服务器上才发现资源加载的速度特别慢，因为我的服务器带宽只有1M（穷人买不起带宽高的服务器~），加载的资源稍微多一些就会给服务器带来很大的负担。后来我把一些外部的库文件直接引用我们国内CDN的资源，这样一来不仅加载速度变快了，我自己服务器的负担也减轻了很多。")]),t._v(" "),_("hr"),t._v(" "),_("h3",{attrs:{id:"预防攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#预防攻击"}},[t._v("#")]),t._v(" 预防攻击")]),t._v(" "),_("p",[t._v("CDN还可以有效的预防一些网络攻击，比如"),_("code",[t._v("DDoS")]),t._v("攻击。在没有CDN的时候，资源直接部署在源站服务器，客户端获取数据的时候直接从源站获取，这样就导致源站服务器很容易被攻击。在CDN出现之后，资源部署在CDN服务器上，源站的资源如果有了更新，会同步的更新到所部署的CDN服务器上，这时候客户端请求资源是请求CDN服务器上的资源，源站服务器被隐藏了，可以有效的预防一些网络攻击。")]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"cdn原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cdn原理"}},[t._v("#")]),t._v(" CDN原理")]),t._v(" "),_("p",[t._v("合理的利用缓存可以极大的提升效率，还可以减少一些不必要的请求。"),_("strong",[t._v("CDN的本质其实就是缓存")]),t._v("，这里的缓存指的是服务器缓存，而不是浏览器的"),_("code",[t._v("HTTP")]),t._v("缓存，缓存信息直接存储在了CDN服务器上，客户端在向服务器发起请求的时候，几乎都是直接命中缓存，CDN服务器把缓存信息返回给客户端。")]),t._v(" "),_("p",[t._v("下面来模拟一下浏览器向CDN服务器发起请求的过程：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://s1.ax1x.com/2020/05/23/YvmWa8.png",alt:"YvmWa8.png"}})]),t._v(" "),_("ol",[_("li",[t._v("当用户在浏览器地址栏输入一个网址时，浏览器先在本地查找有没有关于这个网址的DNS缓存，如果有则直接调用DNS缓存，若没有则向网站的DNS服务器发起请求，假设本地没有DNS缓存，直接请求网站DNS服务器")]),t._v(" "),_("li",[t._v("网站的DNS服务器设置了"),_("code",[t._v("CNAME")]),t._v("，将域名解析权交给"),_("code",[t._v("CNAME")]),t._v("指向的某个CDN服务器")]),t._v(" "),_("li",[t._v("这个CDN服务器进行DNS域名解析，得到CDN全局负载均衡系统IP地址")]),t._v(" "),_("li",[t._v("CDN全局负载均衡系统根据客户端的IP选择一台离客户端最近的CDN服务器")]),t._v(" "),_("li",[t._v("CDN全局负载均衡系统综合各方面计算出一个最合适的CDN服务器，假设是CDN节点C")]),t._v(" "),_("li",[t._v("然后把CDN节点C服务器的IP地址返回给客户端")]),t._v(" "),_("li",[t._v("客户端向CDN节点C发起请求，命中缓存，将信息返回给客户端")])]),t._v(" "),_("p",[t._v("如果最终定位到的CDN服务器没有用户所请求的内容，那么这个CDN服务器就要向它的上一级缓存服务器请求内容，如果还没有，则一直向上一级进行请求，直到追溯到源站点，请求到用户想要的内容，再将它返回给客户端。")]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"结束语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),_("p",[t._v("其实CDN的本质就是缓存，只是这个缓存离我们特别的近，不管是作为用户还是作为一个开发者，CDN都给我们提供了很大的便利，在享受CDN给我们带来的便利的同时，也要知道CDN会给我们带来什么样的坑。如果本文中有说的不正确的地方，欢迎大佬鞭策!")]),t._v(" "),_("p",[_("strong",[t._v("参考资料：")])]),t._v(" "),_("p",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/39028766",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎-闲话 CDN"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=r.exports}}]);