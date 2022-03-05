(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{365:function(v,_,e){"use strict";e.r(_);var t=e(45),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"浏览器渲染原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染原理"}},[v._v("#")]),v._v(" 浏览器渲染原理")]),v._v(" "),e("p",[v._v("浏览器可以让我们看到各种各样的网页，那么浏览器肯定也有着自己的一套渲染网页的机制，作为一名合格的前端攻城狮，必须要对浏览器的渲染机制以及渲染原理有一个了解，这样会对我们的开发有着至关重要的作用，对页面的性能优化也有很大的帮助")]),v._v(" "),e("h2",{attrs:{id:"进程和线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[v._v("#")]),v._v(" 进程和线程")]),v._v(" "),e("p",[v._v("首先要了解操作系统中两个重要的概念，就是进程和线程")]),v._v(" "),e("p",[e("strong",[v._v("进程")]),v._v("是 CPU 资源分配的最小单位（是能拥有资源和独立运行的最小单位）")]),v._v(" "),e("p",[e("strong",[v._v("线程")]),v._v("是 CPU 调度的最小单位（是建立在进程基础上的一次程序运行单位）")]),v._v(" "),e("p",[v._v("对于操作系统来说，一个任务就是一个进程，在一个进程内部，要同时做多件事，就需要同时运行多个"),e("strong",[v._v("子任务")]),v._v("，我们把进程内的这些子任务称为线程，所以"),e("strong",[v._v("线程是跑在进程里面的")])]),v._v(" "),e("hr"),v._v(" "),e("h2",{attrs:{id:"浏览器的多进程架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的多进程架构"}},[v._v("#")]),v._v(" 浏览器的多进程架构")]),v._v(" "),e("p",[v._v("就拿"),e("code",[v._v("Chrome")]),v._v("来说，"),e("code",[v._v("Chrome")]),v._v("是多进程的，每新开一个 Chrome 网页就相当于开启了一个新的进程，每个 tab 网页都是一个独立的进程")]),v._v(" "),e("p",[v._v("多进程的优点：")]),v._v(" "),e("ul",[e("li",[v._v("单个 tab 页面崩溃不会影响到整个浏览器")]),v._v(" "),e("li",[v._v("第三方插件崩溃也不会影响到整个浏览器")]),v._v(" "),e("li",[v._v("多进程可以充分利用现代 CPU 多核的优势")]),v._v(" "),e("li",[v._v("方便使用沙盒模型隔离插件等进程，提高浏览器稳定性")])]),v._v(" "),e("p",[v._v("多进程的缺点：")]),v._v(" "),e("ul",[e("li",[v._v("每个新开的进程都会分配 CPU、内存等资源，对设备要求较高，资源消耗大")])]),v._v(" "),e("hr"),v._v(" "),e("h2",{attrs:{id:"浏览器的主要进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的主要进程"}},[v._v("#")]),v._v(" 浏览器的主要进程")]),v._v(" "),e("p",[e("code",[v._v("Chrome")]),v._v("的每一个页面都是一个独立的进程，在这个独立的进程中又存在多个进程，浏览器的进程主要包括以下四部分：")]),v._v(" "),e("ol",[e("li",[v._v("主进程：负责浏览器界面的显示与交互。各个页面的管理,创建和销毁其他进程。网络的资源管理、下载等")]),v._v(" "),e("li",[v._v("第三方插件进程：每种类型的插件对应一个进程,仅当使用该插件时才创建")]),v._v(" "),e("li",[v._v("GPU 进程：最多只有一个,用于 3D 绘制等")]),v._v(" "),e("li",[v._v("渲染进程：称为浏览器渲染进程或浏览器内核,内部是多线程的。主要负责页面渲染,脚本执行,事件处理等")])]),v._v(" "),e("p",[e("a",{attrs:{href:"https://s1.ax1x.com/2020/06/14/NSnb7T.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://s1.ax1x.com/2020/06/14/NSnb7T.png",alt:"NSnb7T.png"}}),e("OutboundLink")],1)]),v._v(" "),e("p",[v._v("这些进程负责着浏览器运行时的各个角色，其中**渲染进程(也叫浏览器内核)**是重点")]),v._v(" "),e("hr"),v._v(" "),e("h2",{attrs:{id:"浏览器渲染进程-浏览器内核"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染进程-浏览器内核"}},[v._v("#")]),v._v(" 浏览器渲染进程(浏览器内核)")]),v._v(" "),e("p",[e("code",[v._v("Chrome")]),v._v("的每一个页面都是一个独立的进程，在每个独立的进程下面，又会有不同的线程跑在这个进程中。渲染进程就是多线程的，它包括 GUI 渲染线程、JS 引擎线程、事件触发线程、定时触发器线程、异步 http 请求线程")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://s1.ax1x.com/2020/06/14/NSuOqP.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://s1.ax1x.com/2020/06/14/NSuOqP.png",alt:"NSuOqP.png"}}),e("OutboundLink")],1)]),v._v(" "),e("h3",{attrs:{id:"gui-渲染线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gui-渲染线程"}},[v._v("#")]),v._v(" GUI 渲染线程")]),v._v(" "),e("ul",[e("li",[v._v("负责渲染浏览器界面,解析 "),e("code",[v._v("HTML")]),v._v(" , "),e("code",[v._v("CSS")]),v._v(" ,构建 "),e("code",[v._v("DOM")]),v._v(" 树和 "),e("code",[v._v("RenderObject")]),v._v(" 树,布局和绘制等")]),v._v(" "),e("li",[v._v("当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时,该线程就会执行")]),v._v(" "),e("li",[v._v("注意,"),e("strong",[v._v("GUI 渲染线程与 JS 引擎线程是互斥的")]),v._v(",当 JS 引擎执行时 GUI 线程会被挂起（相当于被冻结了）,GUI 更新会被保存在一个队列中等到 JS 引擎空闲时立即被执行")])]),v._v(" "),e("hr"),v._v(" "),e("h3",{attrs:{id:"js-引擎线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-引擎线程"}},[v._v("#")]),v._v(" JS 引擎线程")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Javascript")]),v._v(" 引擎,也称为 JS 内核,负责处理 "),e("code",[v._v("Javascript")]),v._v(" 脚本程序（例如 V8 引擎）")]),v._v(" "),e("li",[v._v("JS 引擎线程负责解析 "),e("code",[v._v("Javascript")]),v._v(" 脚本,运行代码")]),v._v(" "),e("li",[v._v("JS 引擎一直等待着任务队列中任务的到来,然后加以处理,一个 Tab 页（renderer 进程）中无论什么时候都只有一个 JS 线程在运行 JS 程序")]),v._v(" "),e("li",[v._v("注意,"),e("strong",[v._v("GUI 渲染线程与 JS 引擎线程是互斥的")]),v._v(",所以如果 JS 执行的时间过长,这样就会造成页面的渲染不连贯,导致页面渲染加载阻塞")])]),v._v(" "),e("hr"),v._v(" "),e("h3",{attrs:{id:"事件触发线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件触发线程"}},[v._v("#")]),v._v(" 事件触发线程")]),v._v(" "),e("ul",[e("li",[v._v("归属于浏览器而不是 JS 引擎，用来控制事件循环（可以理解，JS 引擎自己都忙不过来，需要浏览器另开线程协助）")]),v._v(" "),e("li",[v._v("当 JS 引擎执行代码块如 "),e("code",[v._v("setTimeOut")]),v._v(" 时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX 异步请求等）,会将对应任务添加到事件线程中")]),v._v(" "),e("li",[v._v("当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理")]),v._v(" "),e("li",[v._v("注意，由于 JS 的单线程关系，所以这些待处理队列中的事件都得排队等待 JS 引擎处理（当 JS 引擎空闲时才会去执行）")])]),v._v(" "),e("hr"),v._v(" "),e("h3",{attrs:{id:"定时触发器线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定时触发器线程"}},[v._v("#")]),v._v(" 定时触发器线程")]),v._v(" "),e("ul",[e("li",[v._v("传说中的 "),e("code",[v._v("setInterval")]),v._v(" 与 "),e("code",[v._v("setTimeout")]),v._v(" 所在线程")]),v._v(" "),e("li",[v._v("浏览器定时计数器并不是由 "),e("code",[v._v("JavaScript")]),v._v(" 引擎计数的,（因为 "),e("code",[v._v("JavaScript")]),v._v(" 引擎是单线程的, 如果处于阻塞线程状态就会影响计时的准确）")]),v._v(" "),e("li",[v._v("因此通过单独线程来计时并触发定时（计时完毕后,添加到事件队列中,等待 JS 引擎空闲后执行）")]),v._v(" "),e("li",[v._v("注意,W3C 在 "),e("code",[v._v("HTML")]),v._v(" 标准中规定,规定要求 "),e("code",[v._v("setTimeout")]),v._v(" 中低于 4ms 的时间间隔算为 4ms")])]),v._v(" "),e("h3",{attrs:{id:"异步-http-请求线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步-http-请求线程"}},[v._v("#")]),v._v(" 异步 http 请求线程")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("XMLHttpRequest")]),v._v(" 在连接后是通过浏览器新开一个线程发起请求")]),v._v(" "),e("li",[v._v("将检测到状态变更时,如果设置有回调函数,异步线程就产生状态变更事件,将这个回调再放入事件队列中。再由 "),e("code",[v._v("JavaScript")]),v._v(" 引擎执行")])]),v._v(" "),e("hr"),v._v(" "),e("h2",{attrs:{id:"浏览器渲染过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程"}},[v._v("#")]),v._v(" 浏览器渲染过程")]),v._v(" "),e("p",[v._v("这张图是一张比较经典的图，它大致描述了浏览器渲染的主要过程：")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://s1.ax1x.com/2020/06/15/NC4soQ.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://s1.ax1x.com/2020/06/15/NC4soQ.png",alt:"NC4soQ.png"}}),e("OutboundLink")],1)]),v._v(" "),e("p",[v._v("浏览器在获取到文件后，渲染过程主要分为以下几个步骤：")]),v._v(" "),e("ol",[e("li",[v._v("解析 "),e("code",[v._v("HTML")]),v._v(" 文件,构建 "),e("code",[v._v("DOM")]),v._v(" 树,同时浏览器主进程负责下载 "),e("code",[v._v("CSS")]),v._v(" 文件")]),v._v(" "),e("li",[e("code",[v._v("CSS")]),v._v(" 文件下载完成,解析 "),e("code",[v._v("CSS")]),v._v(" 文件成树形的数据结构("),e("code",[v._v("CSSOM")]),v._v("),然后结合 "),e("code",[v._v("DOM")]),v._v(" 树合并成 "),e("code",[v._v("RenderObject")]),v._v(" 树")]),v._v(" "),e("li",[v._v("布局 "),e("code",[v._v("RenderObject")]),v._v(" 树 （Layout/reflow）,负责 "),e("code",[v._v("RenderObject")]),v._v(" 树中的元素的尺寸,位置等计算")]),v._v(" "),e("li",[v._v("绘制 "),e("code",[v._v("RenderObject")]),v._v(" 树 （paint）,绘制页面的像素信息")]),v._v(" "),e("li",[v._v("浏览器主进程将默认的图层和复合图层交给 GPU 进程,GPU 进程再将各个图层合成（composite）,最后显示出页面")])]),v._v(" "),e("hr"),v._v(" "),e("h2",{attrs:{id:"关于浏览器渲染的细节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于浏览器渲染的细节"}},[v._v("#")]),v._v(" 关于浏览器渲染的细节")]),v._v(" "),e("h3",{attrs:{id:"关键渲染路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关键渲染路径"}},[v._v("#")]),v._v(" 关键渲染路径")]),v._v(" "),e("p",[v._v("在浏览器拿到 HTML、CSS、JS 等外部资源到渲染出页面的过程，有一个重要的概念叫"),e("strong",[v._v("关键渲染路径")]),v._v("，关键渲染路径是浏览器将 HTML 、CSS 、 JS 转换为在屏幕上呈现的像素内容所经历的一系列步骤")]),v._v(" "),e("hr"),v._v(" "),e("h4",{attrs:{id:"html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[v._v("#")]),v._v(" HTML")]),v._v(" "),e("p",[v._v("HTML 文件会经过解析之后生成 "),e("code",[v._v("DOM Tree")]),v._v("，有了"),e("code",[v._v("DOM Tree")]),v._v("才能显示网页，所以 HTML 是必须的")]),v._v(" "),e("p",[v._v("可以从以下方面优化 HTML 的渲染")]),v._v(" "),e("ul",[e("li",[v._v("在生产环境下，删除不必要的代码和注释包括空格,尽量做到最小化文件")]),v._v(" "),e("li",[v._v("可以利用 "),e("code",[v._v("GZIP")]),v._v(" 压缩文件")]),v._v(" "),e("li",[v._v("结合 "),e("code",[v._v("HTTP")]),v._v(" 缓存文件")])]),v._v(" "),e("hr"),v._v(" "),e("h4",{attrs:{id:"css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[v._v("#")]),v._v(" CSS")]),v._v(" "),e("p",[e("strong",[v._v("CSS 是由单独的下载线程异步下载的")]),v._v("，所以浏览器可以一边下载 CSS 资源，一边进行 "),e("code",[v._v("DOM")]),v._v("解析构建。我们知道要想显示页面，必须要在生成渲染树("),e("code",[v._v("Render Tree")]),v._v(")之后才能显示，而"),e("code",[v._v("Render Tree")]),v._v("又依赖于"),e("code",[v._v("DOM Tree")]),v._v("和"),e("code",[v._v("CSSOM Tree")]),v._v("，所以必须等待到 "),e("code",[v._v("CSSOM Tree")]),v._v(" 构建完成,也就是 CSS 资源加载完成(或者 CSS 资源加载失败)后,才能开始渲染")]),v._v(" "),e("p",[v._v("综上所述， CSS 在关键渲染路径中有以下特点：")]),v._v(" "),e("ol",[e("li",[v._v("CSS 加载不会阻塞 "),e("code",[v._v("DOM")]),v._v(" 的解析（异步加载时"),e("code",[v._v("DOM")]),v._v("照常构建）")]),v._v(" "),e("li",[v._v("CSS 加载会阻塞 "),e("code",[v._v("DOM")]),v._v(" 的渲染（渲染时需等 CSS 加载完毕，因为"),e("code",[v._v("Render Tree")]),v._v("依赖于 CSS）")]),v._v(" "),e("li",[v._v("CSS 加载会阻塞后面 JS 语句的执行")])]),v._v(" "),e("hr"),v._v(" "),e("h4",{attrs:{id:"js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[v._v("#")]),v._v(" JS")]),v._v(" "),e("p",[v._v("JS 线程和 UI 渲染线程是互斥的，所以当脚本在执行的时候浏览器要将控制权交给 JS 线程，等到 JS 线程执行完毕再还给 UI 渲染线程，"),e("strong",[v._v("不论这个脚本是以何种形式加载的，在执行时均会阻塞 UI 的渲染")])]),v._v(" "),e("p",[v._v("只要浏览器遇到没有 "),e("code",[v._v("defer")]),v._v(" 或 "),e("code",[v._v("async")]),v._v("标记的"),e("code",[v._v("script")]),v._v("标签，浏览器会立即唤醒"),e("code",[v._v("JavaScript")]),v._v("解析器，暂停解析 HTML，如果将要执行脚本时浏览器尚未完成 "),e("code",[v._v("CSSOM")]),v._v(" 的下载及构建，"),e("strong",[v._v("浏览器将延迟脚本执行和 DOM 构建，直至其完成 CSSOM 的下载和构建后，执行该脚本")])]),v._v(" "),e("p",[e("strong",[v._v("async:")]),v._v(" 当我们在 "),e("code",[v._v("script")]),v._v(" 标签添加 "),e("code",[v._v("async")]),v._v(" 属性以后，浏览器遇到这个 "),e("code",[v._v("script")]),v._v(" 标签时会继续解析 "),e("code",[v._v("DOM")]),v._v("，同时脚本也不会被 "),e("code",[v._v("CSSOM")]),v._v(" 阻止，即不会阻止关键渲染路径")]),v._v(" "),e("p",[e("strong",[v._v("defer:")]),v._v(" 与 "),e("code",[v._v("async")]),v._v(" 的区别在于，脚本需要等到文档解析后（ "),e("code",[v._v("DOMContentLoaded")]),v._v(" 事件前）执行，而 "),e("code",[v._v("async")]),v._v(" 允许脚本在文档解析时位于后台运行")]),v._v(" "),e("p",[v._v("带 "),e("code",[v._v("defer")]),v._v("或"),e("code",[v._v("async")]),v._v(" 的脚本会与 HTML 并行下载，"),e("strong",[v._v("下载的过程不会阻塞 DOM 的构建，但是执行是会的")])]),v._v(" "),e("p",[v._v("综上所属，JS 在关键渲染路径中有以下特点：")]),v._v(" "),e("ol",[e("li",[v._v("JS 会阻塞关键渲染路径")]),v._v(" "),e("li",[v._v("带 "),e("code",[v._v("defer")]),v._v("或"),e("code",[v._v("async")]),v._v(" 的脚本下载的过程不会阻塞 "),e("code",[v._v("DOM")]),v._v(" 的构建，但是执行是会的")])]),v._v(" "),e("hr"),v._v(" "),e("h4",{attrs:{id:"关键渲染路径优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关键渲染路径优化"}},[v._v("#")]),v._v(" 关键渲染路径优化")]),v._v(" "),e("p",[v._v("可以从以下方面优化关键渲染路径：")]),v._v(" "),e("ul",[e("li",[v._v("最小化关键资源数: 消除它们（内联）、推迟它们的下载（"),e("code",[v._v("defer")]),v._v("）或者使它们异步解析（"),e("code",[v._v("async")]),v._v("）等等")]),v._v(" "),e("li",[v._v("优化关键字节数（缩小、压缩）来减少下载时间")]),v._v(" "),e("li",[v._v("优化加载剩余关键资源的顺序: 让关键资源（CSS）尽早下载以减少关键渲染路径长度")])]),v._v(" "),e("hr"),v._v(" "),e("h3",{attrs:{id:"回流和重绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回流和重绘"}},[v._v("#")]),v._v(" 回流和重绘")]),v._v(" "),e("p",[v._v("浏览器使用"),e("strong",[v._v("流式布局模型")]),v._v("，渲染时对"),e("code",[v._v("Render Tree")]),v._v("的计算通常只需要遍历一次就可以完成("),e("code",[v._v("table")]),v._v("及其内部元素除外)")]),v._v(" "),e("hr"),v._v(" "),e("h4",{attrs:{id:"回流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回流"}},[v._v("#")]),v._v(" 回流")]),v._v(" "),e("p",[e("strong",[v._v("回流(Reflow)")]),v._v(":当页面中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程")]),v._v(" "),e("p",[v._v("可能会导致回流的操作：")]),v._v(" "),e("ul",[e("li",[v._v("页面首次渲染")]),v._v(" "),e("li",[v._v("浏览器窗口大小发生改变")]),v._v(" "),e("li",[v._v("元素尺寸或位置发生改变")]),v._v(" "),e("li",[v._v("元素内容变化（文字数量或图片大小等等）")]),v._v(" "),e("li",[v._v("元素字体大小变化")]),v._v(" "),e("li",[v._v("添加或者删除可见的"),e("code",[v._v("DOM")]),v._v("元素")]),v._v(" "),e("li",[v._v("激活 CSS 伪类（例如："),e("code",[v._v(":hover")]),v._v("）")]),v._v(" "),e("li",[v._v("查询某些属性或调用某些方法")])]),v._v(" "),e("hr"),v._v(" "),e("h4",{attrs:{id:"重绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[v._v("#")]),v._v(" 重绘")]),v._v(" "),e("p",[e("strong",[v._v("重绘(Repaint)")]),v._v(":当页面中元素样式的改变并不影响它在文档流中的位置时（例如："),e("code",[v._v("color")]),v._v("、"),e("code",[v._v("background-color")]),v._v("、"),e("code",[v._v("visibility")]),v._v("等），浏览器会将新样式赋予给元素并重新绘制它的过程")]),v._v(" "),e("p",[v._v("可能会导致重绘的操作：")]),v._v(" "),e("ul",[e("li",[v._v("改变元素的"),e("code",[v._v("color")])]),v._v(" "),e("li",[v._v("改变元素的"),e("code",[v._v("background-color")])]),v._v(" "),e("li",[v._v("改变元素的"),e("code",[v._v("visibility")])])]),v._v(" "),e("hr"),v._v(" "),e("h4",{attrs:{id:"性能影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能影响"}},[v._v("#")]),v._v(" 性能影响")]),v._v(" "),e("p",[e("strong",[v._v("回流必将引起重绘，重绘不一定会引起回流，回流比重绘的代价要更高")])]),v._v(" "),e("p",[v._v("有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流")]),v._v(" "),e("p",[v._v("浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次")]),v._v(" "),e("hr"),v._v(" "),e("h4",{attrs:{id:"如何避免"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何避免"}},[v._v("#")]),v._v(" 如何避免")]),v._v(" "),e("p",[v._v("要想尽量避免回流和重绘，可以从 CSS 和 JS 入手")]),v._v(" "),e("p",[v._v("CSS:")]),v._v(" "),e("ul",[e("li",[v._v("避免使用"),e("code",[v._v("table")]),v._v("布局")]),v._v(" "),e("li",[v._v("尽可能在"),e("code",[v._v("DOM")]),v._v("树的最末端改变"),e("code",[v._v("class")])]),v._v(" "),e("li",[v._v("避免设置多层内联样式")]),v._v(" "),e("li",[v._v("将动画效果应用到"),e("code",[v._v("position")]),v._v("属性为"),e("code",[v._v("absolute")]),v._v("或"),e("code",[v._v("fixed")]),v._v("的元素上")]),v._v(" "),e("li",[v._v("避免使用 CSS 表达式（例如："),e("code",[v._v("calc()")]),v._v("）")])]),v._v(" "),e("p",[v._v("JS:")]),v._v(" "),e("ul",[e("li",[v._v("避免频繁操作样式，最好一次性重写"),e("code",[v._v("style")]),v._v("属性，或者将样式列表定义为"),e("code",[v._v("class")]),v._v("并一次性更改"),e("code",[v._v("class")]),v._v("属性")]),v._v(" "),e("li",[v._v("避免频繁操作"),e("code",[v._v("DOM")]),v._v("，创建一个"),e("code",[v._v("documentFragment")]),v._v("，在它上面应用所有"),e("code",[v._v("DOM")]),v._v("操作，最后再把它添加到文档中")]),v._v(" "),e("li",[v._v("也可以先为元素设置"),e("code",[v._v("display: none")]),v._v("，操作结束后再把它显示出来。因为在"),e("code",[v._v("display")]),v._v("属性为"),e("code",[v._v("none")]),v._v("的元素上进行的"),e("code",[v._v("DOM")]),v._v("操作不会引发回流和重绘")]),v._v(" "),e("li",[v._v("避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来")]),v._v(" "),e("li",[v._v("对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流")])]),v._v(" "),e("hr"),v._v(" "),e("h3",{attrs:{id:"gui-渲染线程与-js-引擎线程互斥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gui-渲染线程与-js-引擎线程互斥"}},[v._v("#")]),v._v(" GUI 渲染线程与 JS 引擎线程互斥")]),v._v(" "),e("p",[v._v("由于 JS 是可操纵 "),e("code",[v._v("DOM")]),v._v(" 的，如果在修改这些元素属性同时渲染界面（即 JS 线程和 UI 线程同时运行），那么渲染线程前后获得的元素数据就可能不一致了")]),v._v(" "),e("p",[v._v("当 JS 引擎执行时 GUI 线程会被挂起，GUI 更新会被保存在一个队列中，等到引擎线程空闲时立即被执行")]),v._v(" "),e("hr"),v._v(" "),e("h3",{attrs:{id:"输入一个-url-按下回车后发生了什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输入一个-url-按下回车后发生了什么"}},[v._v("#")]),v._v(" 输入一个 url 按下回车后发生了什么")]),v._v(" "),e("ol",[e("li",[v._v("DNS 解析")]),v._v(" "),e("li",[v._v("IP 寻址")]),v._v(" "),e("li",[v._v("通过三次握手建立 TCP 连接")]),v._v(" "),e("li",[v._v("TCP 连接建立成功后，浏览器发送 HTTP 请求")]),v._v(" "),e("li",[v._v("服务器响应数据")]),v._v(" "),e("li",[v._v("浏览器收到数据，浏览器渲染进程开始渲染(具体过程可以参考本文的浏览器渲染过程，这里省略)")])]),v._v(" "),e("p",[v._v("以上过程都是简述，如果要详细展开可以写很长很长...")]),v._v(" "),e("hr"),v._v(" "),e("h2",{attrs:{id:"结束语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[v._v("#")]),v._v(" 结束语")]),v._v(" "),e("p",[v._v("作为一名前端开发攻城狮，浏览器的渲染原理是必须要掌握和理解的，如果理解了会对性能优化方面有很大的帮助。如果本文中有说的不正确的地方，欢迎大佬鞭策!")]),v._v(" "),e("p",[e("strong",[v._v("参考资料：")])]),v._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000012960187",target:"_blank",rel:"noopener noreferrer"}},[v._v("浅析浏览器渲染原理"),e("OutboundLink")],1),e("br"),v._v(" "),e("a",{attrs:{href:"https://juejin.im/post/5e143104e51d45414a4715f7",target:"_blank",rel:"noopener noreferrer"}},[v._v("从 8 道面试题看浏览器渲染过程与性能优化"),e("OutboundLink")],1),e("br"),v._v(" "),e("a",{attrs:{href:"https://segmentfault.com/a/1190000012925872",target:"_blank",rel:"noopener noreferrer"}},[v._v("从浏览器多进程到 JS 单线程，JS 运行机制最全面的一次梳理"),e("OutboundLink")],1),e("br"),v._v(" "),e("a",{attrs:{href:"https://juejin.im/post/5a9923e9518825558251c96a",target:"_blank",rel:"noopener noreferrer"}},[v._v("浏览器的回流与重绘 (Reflow & Repaint)"),e("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=r.exports}}]);