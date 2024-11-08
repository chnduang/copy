(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{511:function(e,a,v){"use strict";v.r(a);var r=v(4),_=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"一文讲懂什么是函数柯里化-柯里化的目的及其代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一文讲懂什么是函数柯里化-柯里化的目的及其代码实现"}},[e._v("#")]),e._v(" 一文讲懂什么是函数柯里化，柯里化的目的及其代码实现")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/Jj_CT1b2ehTh3ehZTMcICA",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mp.weixin.qq.com/s/Jj_CT1b2ehTh3ehZTMcICA"),a("OutboundLink")],1)])]),e._v(" "),a("h1",{attrs:{id:"柯里化-currying"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#柯里化-currying"}},[e._v("#")]),e._v(" 柯里化（Currying）")]),e._v(" "),a("p",[a("strong",[e._v("柯里化（Currying）")]),e._v("[1]是一种关于函数的高阶技术。它不仅被用于 JavaScript，还被用于其他编程语言。")]),e._v(" "),a("p",[e._v("柯里化是一种函数的转换，它是指将一个函数从可调用的 "),a("code",[e._v("f(a, b, c)")]),e._v(" 转换为可调用的 "),a("code",[e._v("f(a)(b)(c)")]),e._v("。")]),e._v(" "),a("p",[e._v("柯里化不会调用函数。它只是对函数进行转换。")]),e._v(" "),a("p",[e._v("让我们先来看一个例子，以更好地理解我们正在讲的内容，然后再进行一个实际应用。")]),e._v(" "),a("p",[e._v("我们将创建一个辅助函数 "),a("code",[e._v("curry(f)")]),e._v("，该函数将对两个参数的函数 "),a("code",[e._v("f")]),e._v(" 执行柯里化。换句话说，对于两个参数的函数 "),a("code",[e._v("f(a, b)")]),e._v(" 执行 "),a("code",[e._v("curry(f)")]),e._v(" 会将其转换为以 "),a("code",[e._v("f(a)(b)")]),e._v(" 形式运行的函数：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function curry(f) { // curry(f) 执行柯里化转换\n  return function(a) {\n    return function(b) {\n      return f(a, b);\n    };\n  };\n}\n\n// 用法\nfunction sum(a, b) {\n  return a + b;\n}\n\nlet curriedSum = curry(sum);\n\nalert( curriedSum(1)(2) ); // 3\n")])])]),a("p",[e._v("正如你所看到的，实现非常简单：只有两个包装器（wrapper）。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("curry(func)")]),e._v(" 的结果就是一个包装器 "),a("code",[e._v("function(a)")]),e._v("。")]),e._v(" "),a("li",[e._v("当它被像 "),a("code",[e._v("curriedSum(1)")]),e._v(" 这样调用时，它的参数会被保存在词法环境中，然后返回一个新的包装器 "),a("code",[e._v("function(b)")]),e._v("。")]),e._v(" "),a("li",[e._v("然后这个包装器被以 "),a("code",[e._v("2")]),e._v(" 为参数调用，并且，它将该调用传递给原始的 "),a("code",[e._v("sum")]),e._v(" 函数。")])]),e._v(" "),a("p",[e._v("柯里化更高级的实现，例如 lodash 库的 "),a("strong",[e._v("_.curry")]),e._v("[2]，会返回一个包装器，该包装器允许函数被正常调用或者以偏函数（partial）的方式调用：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function sum(a, b) {\n  return a + b;\n}\n\nlet curriedSum = _.curry(sum); // 使用来自 lodash 库的 _.curry\n\nalert( curriedSum(1, 2) ); // 3，仍可正常调用\nalert( curriedSum(1)(2) ); // 3，以偏函数的方式调用\n")])])]),a("h2",{attrs:{id:"柯里化-目的是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#柯里化-目的是什么"}},[e._v("#")]),e._v(" 柯里化？目的是什么？")]),e._v(" "),a("p",[e._v("要了解它的好处，我们需要一个实际中的例子。")]),e._v(" "),a("p",[e._v("例如，我们有一个用于格式化和输出信息的日志（logging）函数 "),a("code",[e._v("log(date, importance, message)")]),e._v("。在实际项目中，此类函数具有很多有用的功能，例如通过网络发送日志（log），在这儿我们仅使用 "),a("code",[e._v("alert")]),e._v("：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function log(date, importance, message) {\n  alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);\n}\n")])])]),a("p",[e._v("让我们将它柯里化！")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("log = _.curry(log);\n")])])]),a("p",[e._v("柯里化之后，"),a("code",[e._v("log")]),e._v(" 仍正常运行：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('log(new Date(), "DEBUG", "some debug"); // log(a, b, c)\n')])])]),a("p",[e._v("……但是也可以以柯里化形式运行：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)\n')])])]),a("p",[e._v("现在，我们可以轻松地为当前日志创建便捷函数：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// logNow 会是带有固定第一个参数的日志的偏函数\nlet logNow = log(new Date());\n\n// 使用它\nlogNow("INFO", "message"); // [HH:mm] INFO message\n')])])]),a("p",[e._v("现在，"),a("code",[e._v("logNow")]),e._v(" 是具有固定第一个参数的 "),a("code",[e._v("log")]),e._v("，换句话说，就是更简短的“偏应用函数（partially applied function）”或“偏函数（partial）”。")]),e._v(" "),a("p",[e._v("我们可以更进一步，为当前的调试日志（debug log）提供便捷函数：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('let debugNow = logNow("DEBUG");\n\ndebugNow("message"); // [HH:mm] DEBUG message\n')])])]),a("p",[e._v("所以：")]),e._v(" "),a("ol",[a("li",[e._v("柯里化之后，我们没有丢失任何东西："),a("code",[e._v("log")]),e._v(" 依然可以被正常调用。")]),e._v(" "),a("li",[e._v("我们可以轻松地生成偏函数，例如用于生成今天的日志的偏函数。")])]),e._v(" "),a("h2",{attrs:{id:"高级柯里化实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级柯里化实现"}},[e._v("#")]),e._v(" 高级柯里化实现")]),e._v(" "),a("p",[e._v("如果你想了解更多细节，下面是用于多参数函数的“高级”柯里化实现，我们也可以把它用于上面的示例。")]),e._v(" "),a("p",[e._v("它非常短：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function curry(func) {\n\n  return function curried(...args) {\n    if (args.length >= func.length) {\n      return func.apply(this, args);\n    } else {\n      return function(...args2) {\n        return curried.apply(this, args.concat(args2));\n      }\n    }\n  };\n\n}\n")])])]),a("p",[e._v("用例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function sum(a, b, c) {\n  return a + b + c;\n}\n\nlet curriedSum = curry(sum);\n\nalert( curriedSum(1, 2, 3) ); // 6，仍然可以被正常调用\nalert( curriedSum(1)(2,3) ); // 6，对第一个参数的柯里化\nalert( curriedSum(1)(2)(3) ); // 6，全柯里化\n")])])]),a("p",[e._v("新的 "),a("code",[e._v("curry")]),e._v(" 可能看上去有点复杂，但是它很容易理解。")]),e._v(" "),a("p",[a("code",[e._v("curry(func)")]),e._v(" 调用的结果是如下所示的包装器 "),a("code",[e._v("curried")]),e._v("：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// func 是要转换的函数\nfunction curried(...args) {\n  if (args.length >= func.length) { // (1)\n    return func.apply(this, args);\n  } else {\n    return function pass(...args2) { // (2)\n      return curried.apply(this, args.concat(args2));\n    }\n  }\n};\n")])])]),a("p",[e._v("当我们运行它时，这里有两个 "),a("code",[e._v("if")]),e._v(" 执行分支：")]),e._v(" "),a("ol",[a("li",[e._v("现在调用：如果传入的 "),a("code",[e._v("args")]),e._v(" 长度与原始函数所定义的（"),a("code",[e._v("func.length")]),e._v("）相同或者更长，那么只需要将调用传递给它即可。")]),e._v(" "),a("li",[e._v("获取一个偏函数：否则，"),a("code",[e._v("func")]),e._v(" 还没有被调用。取而代之的是，返回另一个包装器 "),a("code",[e._v("pass")]),e._v("，它将重新应用 "),a("code",[e._v("curried")]),e._v("，将之前传入的参数与新的参数一起传入。然后，在一个新的调用中，再次，我们将获得一个新的偏函数（如果参数不足的话），或者最终的结果。")])]),e._v(" "),a("p",[e._v("例如，让我们看看 "),a("code",[e._v("sum(a, b, c)")]),e._v(" 这个例子。它有三个参数，所以 "),a("code",[e._v("sum.length = 3")]),e._v("。")]),e._v(" "),a("p",[e._v("对于调用 "),a("code",[e._v("curried(1)(2)(3)")]),e._v("：")]),e._v(" "),a("ol",[a("li",[e._v("第一个调用 "),a("code",[e._v("curried(1)")]),e._v(" 将 "),a("code",[e._v("1")]),e._v(" 保存在词法环境中，然后返回一个包装器 "),a("code",[e._v("pass")]),e._v("。")]),e._v(" "),a("li",[e._v("包装器 "),a("code",[e._v("pass")]),e._v(" 被调用，参数为 "),a("code",[e._v("(2)")]),e._v("：它会获取之前的参数 "),a("code",[e._v("(1)")]),e._v("，将它与得到的 "),a("code",[e._v("(2)")]),e._v(" 连在一起，并一起调用 "),a("code",[e._v("curried(1, 2)")]),e._v("。由于参数数量仍小于 3，"),a("code",[e._v("curry")]),e._v(" 函数依然会返回 "),a("code",[e._v("pass")]),e._v("。")]),e._v(" "),a("li",[e._v("包装器 "),a("code",[e._v("pass")]),e._v(" 再次被调用，参数为 "),a("code",[e._v("(3)")]),e._v("，在接下来的调用中，"),a("code",[e._v("pass(3)")]),e._v(" 会获取之前的参数 ("),a("code",[e._v("1")]),e._v(", "),a("code",[e._v("2")]),e._v(") 并将 "),a("code",[e._v("3")]),e._v(" 与之合并，执行调用 "),a("code",[e._v("curried(1, 2, 3)")]),e._v(" — 最终有 "),a("code",[e._v("3")]),e._v(" 个参数，它们被传入最原始的函数中。")])]),e._v(" "),a("p",[e._v("如果这还不够清楚，那你可以把函数调用顺序在你的脑海中或者在纸上过一遍。")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("只允许确定参数长度的函数")])]),e._v(" "),a("p",[e._v("柯里化要求函数具有固定数量的参数。")]),e._v(" "),a("p",[e._v("使用 rest 参数的函数，例如 "),a("code",[e._v("f(...args)")]),e._v("，不能以这种方式进行柯里化。")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("比柯里化多一点")])]),e._v(" "),a("p",[e._v("根据定义，柯里化应该将 "),a("code",[e._v("sum(a, b, c)")]),e._v(" 转换为 "),a("code",[e._v("sum(a)(b)(c)")]),e._v("。")]),e._v(" "),a("p",[e._v("但是，如前所述，JavaScript 中大多数的柯里化实现都是高级版的：它们使得函数可以被多参数变体调用。")])]),e._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[a("strong",[e._v("柯里化")]),e._v(" 是一种转换，将 "),a("code",[e._v("f(a,b,c)")]),e._v(" 转换为可以被以 "),a("code",[e._v("f(a)(b)(c)")]),e._v(" 的形式进行调用。JavaScript 实现通常都保持该函数可以被正常调用，并且如果参数数量不足，则返回偏函数。")]),e._v(" "),a("p",[e._v("柯里化让我们能够更容易地获取偏函数。就像我们在日志记录示例中看到的那样，普通函数 "),a("code",[e._v("log(date, importance, message)")]),e._v(" 在被柯里化之后，当我们调用它的时候传入一个参数（如 "),a("code",[e._v("log(date)")]),e._v("）或两个参数（"),a("code",[e._v("log(date, importance)")]),e._v("）时，它会返回偏函数。")]),e._v(" "),a("hr"),e._v(" "),a("blockquote",[a("p",[e._v("现代 JavaScript 教程：开源的现代 JavaScript 从入门到进阶的优质教程。"),a("strong",[e._v("React 官方文档推荐，与 MDN 并列的 JavaScript 学习教程")]),e._v("[3]。")]),e._v(" "),a("p",[e._v("在线免费阅读：https://zh.javascript.info")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("p",[e._v("[1]柯里化（Currying）: "),a("em",[e._v("https://en.wikipedia.org/wiki/Currying")]),e._v("[2]_.curry: "),a("em",[e._v("https://lodash.com/docs#curry")]),e._v("[3]React 官方文档推荐，与 MDN 并列的 JavaScript 学习教程: "),a("em",[e._v("https://zh-hans.reactjs.org/docs/getting-started.html#javascript-resources")])])])}),[],!1,null,null,null);a.default=_.exports}}]);