(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{516:function(t,e,a){"use strict";a.r(e);var n=a(4),i=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"jsb-原理与实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsb-原理与实践"}},[t._v("#")]),t._v(" JSB 原理与实践")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/rlFMdzqtL5nKS9KVT2zPqg",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/s/rlFMdzqtL5nKS9KVT2zPqg"),e("OutboundLink")],1)])]),t._v(" "),e("h1",{attrs:{id:"什么是-jsb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-jsb"}},[t._v("#")]),t._v(" 什么是 JSB")]),t._v(" "),e("p",[t._v("我们开发的 h5 页面运行在端上的 WebView 容器之中，很多业务场景下 h5 需要依赖端上提供的信息/能力，这时我们需要一个可以连接原生运行环境和 JS 运行环境的桥梁 "),e("strong",[t._v("。")]),t._v(" 这个桥梁就是 JSB，"),e("strong",[t._v("JSB")]),t._v(" "),e("strong",[t._v("让 Web 端和 Native 端得以实现双向通信")]),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/ndgH50E7pIrf4VGNkh5u49ToJZJPpK2s8mD1ogCuHiaHwC7a1O74f8vU7hcjyFcj5lhaNHk76xwYeIjKGjWGFcw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),e("h1",{attrs:{id:"webview-概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webview-概述"}},[t._v("#")]),t._v(" WebView 概述")]),t._v(" "),e("p",[t._v("WebView 是移动端中的一个控件，它为 JS 运行提供了一个沙箱环境。WebView 能够加载指定的 url，拦截页面发出的各种请求等各种页面控制功能，JSB 的实现就依赖于 WebView 暴露的各种接口。由于历史原因，安卓和 iOS 均有高低两套版本的 WebView 内核：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("平台和版本")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("WebView")]),t._v(" "),e("strong",[t._v("内核")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("iOS 8+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("WKWebView")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("iOS 2-8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("UIWebView")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Android 4.4+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Chrome")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Android 4.4-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Webkit")])])])]),t._v(" "),e("p",[t._v("PS: 下文中出现的高版本均代指 iOS 8+ 或 Android 4.4+，低版本则相反。")]),t._v(" "),e("h1",{attrs:{id:"jsb-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsb-原理"}},[t._v("#")]),t._v(" JSB 原理")]),t._v(" "),e("p",[t._v("要实现双向通信自然要依次实现 Native 向 Web 发送消息和 Web 向 Native 发送消息。")]),t._v(" "),e("h2",{attrs:{id:"native-向-web-发送消息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#native-向-web-发送消息"}},[t._v("#")]),t._v(" Native 向 Web 发送消息")]),t._v(" "),e("p",[t._v("Native 向 Web 发送消息基本原理上是在 WebView 容器中动态地执行一段 JS 脚本，通常情况下是调用一个挂载在全局上下文的方法。Android 和 iOS 均提供了不同的接口来实现这一过程。")]),t._v(" "),e("h3",{attrs:{id:"方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),e("ul",[e("li",[t._v("Android 高低版本存在两种直接执行 JS 字符串的方法：")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Android 版本")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("API")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("特点")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("低版本")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("WebView.loadUrl")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无法执行回调")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("高版本")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("WebView.evaluateJavascript")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可以拿到 JS 执行完毕的返回值")])])])]),t._v(" "),e("ul",[e("li",[t._v("iOS 高低版本同样存在两种不同的实现方式：")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("iOS 版本")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("API")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("特点")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("低版本")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("UIWebView.stringByEvaluatingJavaScriptFromString")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无法执行回调")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("高版本")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("WKWebView.evaluateJavaScript")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可以拿到 JS 执行完毕的返回值")])])])]),t._v(" "),e("h3",{attrs:{id:"实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[t._v("#")]),t._v(" 实践")]),t._v(" "),e("p",[t._v("下面我们通过一个小 Demo 来看一下在 iOS 端实现 Native 向 Web 端发消息的实际效果：")]),t._v(" "),e("p",[t._v("（"),e("strong",[t._v("本文所有 Demo 均运行在 iOS14.5 模拟器中，WebView 容器采用 WKWebView 内核")]),t._v("）")]),t._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),t._v(" "),e("p",[t._v("页面上半部分的 UI 是由 HTML + CSS 渲染所得，是一个纯静态的 webpage，中间的输入框和按钮是 Native 原生控件，直接覆盖在 WebView 容器之上。"),e("strong",[t._v("在 Native 按钮上绑定了一个点击事件：将文本框输入的字符视为 JS 字符串并调用相关 API 直接执行")]),t._v("。")]),t._v(" "),e("p",[t._v("可以看到当我们在文本框中输入下列字符并点击按钮后，h5 页面中 id 为 test 的 p 标签内容被修改了。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("document.querySelector('#test').innerHTML = 'I am from native';\n")])])]),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),t._v(" "),e("p",[t._v("敏锐同学到这一步其实就已经知道我们在日常使用 JSB 时客户端是如何调用前端 JS 代码了，我们在刚刚的静态 html 文件中添加几行 JS 代码：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function evaluateByNative(params) {\n    const p = document.createElement('p');\n    p.innerText = params;\n    document.body.appendChild(p);\n    return 'Hello Bridge!';\n}\n")])])]),e("p",[t._v("在文本框中输入 "),e("code",[t._v("evaluateByNative(23333)")]),t._v("，来看一下调用的结果：")]),t._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),t._v(" "),e("p",[t._v("可以看到 "),e("strong",[t._v("Native 端可以直接调用挂载在 window 上的全局方法并传入相应的函数执行参数")]),t._v("，"),e("strong",[t._v("并且在函数执行结束后 Native 端可以直接拿到执行成功的返回值。")])]),t._v(" "),e("h2",{attrs:{id:"web-向-native-发送消息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-向-native-发送消息"}},[t._v("#")]),t._v(" Web 向 Native 发送消息")]),t._v(" "),e("p",[t._v("Web 向 Native 发送消息本质上就是某段 JS 代码的执行端上是可感知的，目前业界主流的实现方案有两种，分别是"),e("strong",[t._v("拦截式")]),t._v("和"),e("strong",[t._v("注入式")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"拦截式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拦截式"}},[t._v("#")]),t._v(" 拦截式")]),t._v(" "),e("p",[t._v("和浏览器类似 WebView 中发出的所有请求都是可以被 Native 容器感知到的（是不是想到了Gecko），因此拦截式具体指的是 Native 拦截 Web 发出的 URL 请求，双方在此之前约定一个 JSB 请求格式，如果该请求是 JSB 则进行相应的处理，若不是则直接转发。")]),t._v(" "),e("p",[e("strong",[t._v("Native 拦截请求的钩子方法：")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("平台")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("API")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Android")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("shouldOverrideUrlLoading")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("iOS 8+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("decidePolicyForNavigationAction")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("iOS 8-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("shouldStartLoadWithRequest")])])])]),t._v(" "),e("p",[e("strong",[t._v("拦截式的基本流程如下")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),t._v(" "),e("p",[t._v("上述流程存在几个问题：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("通过何种方式发出请求？")])])]),t._v(" "),e("p",[t._v("Web 端发出请求的方式非常多样，例如 "),e("code",[t._v("<a/>")]),t._v(" 、"),e("code",[t._v("iframe.src")]),t._v("、"),e("code",[t._v("location.href")]),t._v("、"),e("code",[t._v("ajax")]),t._v("等，但 "),e("code",[t._v("<a/>")]),t._v(" 需要用户手动触发，"),e("code",[t._v("location.href")]),t._v(" 可能会导致页面跳转，安卓端拦截 "),e("code",[t._v("ajax")]),t._v("的能力有所欠缺，因此"),e("strong",[t._v("绝大多数拦截式实现方案均采用")]),e("code",[t._v("iframe")]),t._v(" "),e("strong",[t._v("来发送请求")]),t._v("。")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("如何规定")]),t._v(" "),e("strong",[t._v("JSB")]),t._v(" "),e("strong",[t._v("的请求格式？")])])]),t._v(" "),e("p",[t._v("一个标准的 URL 由 "),e("code",[t._v("<scheme>://<host>:<port><path>")]),t._v(" 组成，相信大家都有过从微信或手机浏览器点击某个链接意外跳转到其他 App 的经历，如果有仔细留意过这些链接的 URL 你会发现目前主流 App 都有其专属的一个 scheme 来作为该应用的标识，例如微信的 URL scheme 就是 "),e("code",[t._v("weixin://")]),t._v("。"),e("strong",[t._v("JSB")]),t._v(" "),e("strong",[t._v("的实现借鉴这一思路，定制业务自身专属的一个 URL scheme 来作为 JSB 请求的标识")]),t._v("，例如字节内部实现拦截式 JSB 的 SDK 中就定义了 "),e("code",[t._v("bytedance://")]),t._v(" 这样一个 scheme。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// Web 通过动态创建 iframe，将 src 设置为符合双端规范的 url scheme\nconst CUSTOM_PROTOCOL_SCHEME = 'prek'\n\nfunction web2Native(event) {    \n    const messagingIframe = document.createElement('iframe');\n    messagingIframe.style.display = 'none';\n    messagingIframe.src = CUSTOM_PROTOCOL_SCHEME + '://' + event;\n    document.documentElement.appendChild(messagingIframe);\n\n    setTimeout(() => {\n        document.documentElement.removeChild(messagingIframe);\n    }, 200)\n}\n")])])]),e("p",[t._v("拦截式在双端都具有非常好的向下兼容性，曾经是最主流的 JSB 实现方案，但目前在高版本的系统中已经逐渐被淘汰，理由是它有如下几个劣势：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("连续发送时可能会造成消息丢失（可以使用消息队列解决该问题）")])]),t._v(" "),e("li",[e("p",[t._v("URL  字符串长度有限制")])]),t._v(" "),e("li",[e("p",[t._v("性能一般，URL request 创建请求有一定的耗时（Android 端 200-400ms）")])])]),t._v(" "),e("p",[e("strong",[t._v("实践案例")])]),t._v(" "),e("p",[t._v("同样用一个简单的 Demo2 来看一下如何使用拦截式实现 Web 向 Native 发送消息，这里实现了在 Web 端唤起 Native 的相册。")]),t._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),t._v(" "),e("p",[t._v("遵循上述实现方式，Web 发送消息的代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const CUSTOM_PROTOCOL_SCHEME = 'prek' // 自定义 url scheme\n\nfunction web2Native(event_name) {\n    const messagingIframe = document.createElement('iframe')\n    messagingIframe.style.display = 'none'\n    messagingIframe.src = CUSTOM_PROTOCOL_SCHEME + '://' + event_name\n    document.documentElement.appendChild(messagingIframe)\n    setTimeout(() => {\n        document.documentElement.removeChild(messagingIframe)\n    }, 0)\n}\n\nconst btn = document.querySelector('#btn')\n\nbtn.onclick = () => {\n    web2Native('openPhotoAlbum')\n}\n")])])]),e("p",[t._v("Native 侧通过 "),e("code",[t._v("decidePolicyForNavigationAction")]),t._v(" 这一 delegate 实现请求拦截，解析 URL 参数，若 URL scheme 是 "),e("code",[t._v("prek")]),t._v(" 则认为该请求是一个来自 Web 的 JSB 调用：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler {\n  NSURL *url = navigationAction.request.URL;\n  NSLog(@"拦截到 Web 发出的请求 = %@", url);\n\n  if ([self isSchemeMatchPrek:url]) {\n    NSString* host = url.host.lowercaseString;\n    if ([host isEqualToString: @"openphotoalbum"]) {\n      [self openCameraForWeb]; // 打开相册\n      NSLog(@"打开相册");\n    }\n    decisionHandler(WKNavigationActionPolicyCancel);\n    return;\n  } else {\n    decisionHandler(WKNavigationActionPolicyAllow);\n  }\n}\n')])])]),e("p",[t._v("为了更清晰地看到 Native 拦截的结果，在上述代理方法中打个断点：")]),t._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),t._v(" "),e("p",[t._v("继续执行，Congratulation！模拟器的相册被打开了！")]),t._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),t._v(" "),e("h3",{attrs:{id:"注入式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注入式"}},[t._v("#")]),t._v(" 注入式")]),t._v(" "),e("p",[t._v("注入式的原理是通过 WebView 提供的接口向 JS 全局上下文对象（window）中注入对象或者方法，当 JS 调用时，可直接执行相应的 Native 代码逻辑，从而达到 Web 调用 Native 的目的。")]),t._v(" "),e("p",[e("strong",[t._v("Native 注入 API 的相关方法：")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("平台")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("API")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("特点")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Android")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("addJavascriptInterface")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4.2 版本以下有安全风险")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("iOS 8+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("WKScriptMessageHandler")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("iOS 7+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("JavaSciptCore")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('JSContext *context = [webView valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];\n\ncontext[@"getAppInfo"] = ^(msg) {\n    return @"ggl_2693";\n};\nwindow.getAppInfo(); // \'ggl_2693\'\n')])])]),e("p",[t._v("这种方法简单而直观，并且不存在参数长度限制和性能瓶颈等问题，目前主流的 JSB SDK 都将注入式方案作为优先使用的对象。注入式的实现非常简单，这里不做案例展示。")]),t._v(" "),e("h3",{attrs:{id:"两种方案对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两种方案对比"}},[t._v("#")]),t._v(" 两种方案对比")]),t._v(" "),e("p",[t._v("为了更清晰地表达这两种方式的区别，这里贴一个对比表格：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("方案")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("兼容性")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("性能")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("参数长度限制")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("拦截式")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无兼容性问题")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("较差，安卓端尤为明显")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("有限制")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("注入式")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("安卓4.2+ 和 iOS 7+以上可用")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("较好")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])])])]),t._v(" "),e("h2",{attrs:{id:"如何执行回调"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何执行回调"}},[t._v("#")]),t._v(" 如何执行回调")]),t._v(" "),e("p",[t._v("通过上述介绍我们已经知道如何实现双端互相发送消息，但上述两个通信过程缺少了“回应”这一动作，原因就是上述步骤缺少了回调函数的执行。以拦截式为例，常见的一个 JSB 调用是 Web 获取当前 App 信息， Native 拦截到 "),e("code",[t._v("bytedance://getAppInfo")]),t._v("这样一个请求后将获取当前 App 信息，那获取完成后如何让 Web 端拿到该信息呢？")]),t._v(" "),e("p",[t._v("一个最简单的做法是类比 JSONP 的实现，我们可以在请求的 URL 上拼接回调方法的事件名，将该事件挂载在全局 window 上，由于 Native 端可以轻松执行 JS 代码，因此在完成端逻辑后直接执行该事件名对应的回调方法即可。以 "),e("code",[t._v("getAppInfo")]),t._v(" 为例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// Web\nconst uniqueID = 1 // 为防止事件名冲突，给每个 callback 设置一个唯一标识\nfunction webCallNative(event, params, callback) {\n    if (typeof callback === 'Function') {\n        const callbackID = 'jsb_cb_' + (uniqueID++) + '_' + Date.now();\n        window[callbackID] = callback\n    }\n    const params = {callback: callbackID}\n    // 构造 url scheme\n    const src = 'bytedance://getAppInfo?' + JSON.stringify(params)\n    ...\n}\n\n// Native\n1. 解析传入的参数 'getAppInfo' 得知 Web 希望获取 AppInfo\n2. 执行端逻辑获取 AppInfo\n3. 执行参数中挂载在全局的 callback 方法，AppInfo 作为回调方法的参数\n")])])]),e("p",[t._v("因此只要把相应的回调方法挂载在全局对象上，Native 即可把每次调用后的响应通过动态执行 JS 方法的形式传递到 Web 端，这样一来整个通信过程就实现了闭环。")]),t._v(" "),e("h2",{attrs:{id:"串联双端通信的过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#串联双端通信的过程"}},[t._v("#")]),t._v(" 串联双端通信的过程")]),t._v(" "),e("p",[t._v("现在我们已经知道如何实现两端互相发送消息以及执行回调了，但看起来并不好用：首先调用 JSB 时需要在方法名后拼接参数和对应的回调函数，其次回调函数还需要一个一个地挂载在全局对象上。")]),t._v(" "),e("p",[t._v("我们期望的使用方式其实是这样：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// Web\nweb.call('event1', {param1}, (res) => {...}) // 触发 native event1 执行\nweb.on('event2', (res) => {...})\n\n// Native \n// 这里用 js 代替，理解大致意思即可\nnative.call('event2', {param2}, (res) => {...}) // 触发 web event2 执行\nnative.on('event1', (res) => {...})\n")])])]),e("p",[t._v("这里的 "),e("strong",[t._v("JSB 就像是一个跨越两端的 EventEmitter")]),t._v("，因此需要 Web 和 Native 遵循同一套调度机制。")]),t._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),t._v(" "),e("p",[t._v("上图给出了 Web 调用 -> Native 监听的执行过程，同理 Native 调用 -> Web 监听也是同样的逻辑，只是把两边的实现调换一种语言，这里不赘述了。")]),t._v(" "),e("p",[e("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),t._v(" "),e("p",[t._v("贴一张其他同学画的时序图，帮助理解整个通信过程")]),t._v(" "),e("p",[t._v("Demo3 基于开源的 WebViewJavascriptBridge 演示了一套完整的通讯流程是怎样进行的，有兴趣的同学请自行戳源码地址 JSB_Demo 自行体验。（需要使用 Xcode 打开，会涉及一些客户端的知识，请配合文档和 Google 使用）。")]),t._v(" "),e("h1",{attrs:{id:"一点感受"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一点感受"}},[t._v("#")]),t._v(" 一点感受")]),t._v(" "),e("p",[t._v("笔者所在业务使用的 bridge 即司内目前最新的 SDK，没有历史包袱、使用体验也非常良好。得益于客户端遵循该 SDK 配套的实现机制，即使完全不了解 JSB 原理的同学在与端上对接 bridge 时也几乎没有遇到障碍。倘若抛开公司完备的基础建设，想实现一个通用且好用的 JSB 并非易事，因此了解其中的门道还是非常有益的。（巨人的肩膀站久了，确实巴适得很🐶)")]),t._v(" "),e("h1",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),e("p",[e("strong",[t._v("深入浅出 JSBridge")]),t._v("**[4]**")]),t._v(" "),e("p",[e("strong",[t._v("JSB 实战")]),t._v("**[5]**")]),t._v(" "),e("h3",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),e("p",[t._v("[1]JSONP: "),e("em",[t._v("https://en.wikipedia.org/wiki/JSONP")]),t._v("[2]WebViewJavascriptBridge: "),e("em",[t._v("https://github.com/marcuswestin/WebViewJavascriptBridge")]),t._v("[3]JSB_Demo: "),e("em",[t._v("https://code.byted.org/caocheng.viccc/JSB_Demo")]),t._v("[4]深入浅出 JSBridge: "),e("em",[t._v("https://juejin.cn/post/6936814903021797389#heading-8")]),t._v("[5]JSB 实战: "),e("em",[t._v("https://juejin.cn/post/6844903702721986568")])])])}),[],!1,null,null,null);e.default=i.exports}}]);