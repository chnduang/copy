(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{466:function(e,a,t){"use strict";t.r(a);var n=t(4),s=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"javascriptes12新特性抢先体验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascriptes12新特性抢先体验"}},[e._v("#")]),e._v(" JavaScriptES12新特性抢先体验")]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/Pa2QBjO0SHKZpnPf4ozZuw",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mp.weixin.qq.com/s/Pa2QBjO0SHKZpnPf4ozZuw"),a("OutboundLink")],1)])]),e._v(" "),a("blockquote",[a("p",[e._v("在上一篇文章中，我们介绍了ES2020的相关九大特性，里面不少实用的新特性让我们受益良多。"),a("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzAwNzQ2ODEyMQ==&mid=2247486695&idx=1&sn=de98950c90f25519376e8189979455ad&chksm=9b7ce9d1ac0b60c706befa18a659a9a2a9b99d78ce673b01ccd3f0fdb7a3fea348c94b50ac71&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("ES11屡试不爽的新特性，你用上了几个？"),a("OutboundLink")],1)])]),e._v(" "),a("blockquote",[a("p",[e._v("而每年，JavaScript都会更新添加新的特性新标准，在今年ES2020发布了，而ES2020（ES12）也预计将在明年即2021年年中发布。每年的新特性都会经历四个阶段，而第四阶段也就是最后一个阶段，本文即将介绍的即提案4中的相关新特性，也是意味着这些新特性将很大程度的出现在下一个版本中")])]),e._v(" "),a("h1",{attrs:{id:"特性抢先知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性抢先知"}},[e._v("#")]),e._v(" 特性抢先知：")]),e._v(" "),a("ul",[a("li",[e._v("String.prototype.replaceAll 新增replaceAll")]),e._v(" "),a("li",[e._v("Promise.any")]),e._v(" "),a("li",[e._v("WeakRefs")]),e._v(" "),a("li",[e._v("逻辑运算符和赋值表达式")]),e._v(" "),a("li",[e._v("数字分隔符号")])]),e._v(" "),a("h2",{attrs:{id:"replaceall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replaceall"}},[e._v("#")]),e._v(" replaceAll")]),e._v(" "),a("p",[e._v("看到replaceAll这个词，相比很容易联想到replace。在JavaScript中，replace方法只能是替换字符串中匹配到的第一个实例字符，而不能进行全局多项匹配替换，唯一的办法是通过正则表达式进行相关规则匹配替换")]),e._v(" "),a("p",[e._v("而replaceAll则是返回一个全新的字符串，所有符合匹配规则的字符都将被替换掉，替换规则可以是字符串或者正则表达式。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let string = 'I like 前端,I like 前端公虾米'\n\n//使用replace\nlet replaceStr = string.replace('like','love')\nconsole.log(replaceStr)  // 'I love 前端,I like 前端公虾米'\n\n//replace使用正则匹配所有\nconsole.log(string.replace(/like/g,'love')) // 'I love 前端,I love 前端公虾米'\n\n//使用replaceAll\nlet replaceAllStr = string.replaceAll('like','love')\nconsole.log(replaceAllStr) // 'I love 前端,I love 前端公虾米'\n")])])]),a("blockquote",[a("p",[e._v("需要注意的是，replaceAll在使用正则表达式的时候，如果非全局匹配（/g），则replaceAll()会抛出一个异常")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let string = 'I like 前端,I like 前端公虾米'\nconsole.log(string.replaceAll(/like/,'love')) //TypeError\n")])])]),a("h2",{attrs:{id:"promise-any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-any"}},[e._v("#")]),e._v(" Promise.any")]),e._v(" "),a("blockquote",[a("p",[e._v("当Promise列表中的任意一个promise成功resolve则返回第一个resolve的结果状态 如果所有的promise均reject，则抛出异常表示所有请求失败")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Promise.any([\n  new Promise((resolve, reject) => setTimeout(reject, 500, '哎呀，我被拒绝了')),\n  new Promise((resolve, reject) => setTimeout(resolve, 1000, '哎呀，她接受我了')),\n  new Promise((resolve, reject) => setTimeout(resolve, 2000, '哎呀，她也接受我了')),\n])\n.then(value => console.log(`输出结果: ${value}`))\n.catch (err => console.log(err))\n\n//输出\n//输出结果:哎呀，她接受我了\n")])])]),a("p",[e._v("再来看下另一种情况")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Promise.any([\n  Promise.reject('Error 1'),\n  Promise.reject('Error 2'),\n  Promise.reject('Error 3')\n])\n.then(value => console.log(`请求结果: ${value}`))\n.catch (err => console.log(err))\n\n//输出\nAggregateError: All promises were rejected\n")])])]),a("p",[e._v("Promise.any与Promise.race十分容易混淆，务必注意区分，Promise.race 一旦某个promise触发了resolve或者reject，就直接返回了该状态结果，并不在乎其成功或者失败")]),e._v(" "),a("h2",{attrs:{id:"weakrefs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weakrefs"}},[e._v("#")]),e._v(" WeakRefs")]),e._v(" "),a("blockquote",[a("p",[e._v("使用WeakRefs的Class类创建对对象的弱引用(对对象的弱引用是指当该对象应该被GC回收时不会阻止GC的回收行为)")])]),e._v(" "),a("p",[e._v("当我们通过（const、let、var）创建一个变量时，垃圾收集器GC将永远不会从内存中删除该变量，只要它的引用仍然存在可访问。WeakRef对象包含对对象的弱引用。对对象的弱引用是不会阻止垃圾收集器GC恢复该对象的引用，则GC可以在任何时候删除它。")]),e._v(" "),a("p",[e._v("WeakRefs在很多情况下都很有用，比如使用Map对象来实现具有很多需要大量内存的键值缓存，在这种情况下最方便的就是尽快释放键值对占用的内存。")]),e._v(" "),a("p",[e._v("目前，可以通过WeakMap()或者WeakSet()来使用WeakRefs")]),e._v(" "),a("p",[e._v("举个栗子")]),e._v(" "),a("p",[e._v("我想要跟踪特定的对象调用某一特定方法的次数，超过1000条则做对应提示")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let map = new Map()\nfunction doSomething(obj){\n ...\n}\nfunction useObject(obj){\n doSomething(obj)\n  \n  let called = map.get(obj) || 0\n  called ++ \n  \n  if(called>1000){\n     console.log('当前调用次数已经超过1000次了，over')\n  }\n  \n  map.set(obj, called)\n}\n")])])]),a("p",[e._v("如上虽然可以实现我们的功能，但是会发生内存溢出,因为传递给doSomething函数的每个对象都永久保存在map中，并且不会被GC回收，因此我们可以使用WeakMap")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let wmap = new WeakMap()\nfunction doSomething(obj){\n ...\n}\nfunction useObject(obj){\n doSomething(obj)\n  \n  let called = wmap.get(obj) || 0\n  \n  called ++\n  \n  if(called>1000){\n     console.log('当前调用次数已经超过1000次了，over')\n  }\n  \n  wmap.set(obj, called)\n}\n")])])]),a("p",[e._v("因为是弱引用，所以WeakMap、WeakSet的键值对是不可枚举的")]),e._v(" "),a("p",[e._v("WeakSet和WeakMap相似，但是每个对象在WeakSet中的每个对象只可能出现一次，WeakSet中所有对象都是唯一的")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let ws = new WeakSet()\nlet foo = {}\nlet bar = {}\n\nws.add(foo)\nws.add(bar)\n\nws.has(foo) //true\nws.has(bar) //true\n\nws.delete(foo) //删除foo对象\nws.has(foo) //false 已删除\nws.has(bar) //仍存在\n")])])]),a("p",[e._v("WeakSet与Set相比有以下两个区别")]),e._v(" "),a("ul",[a("li",[e._v("WeakSet只能是对象集合，而不能是任何类型的任意值")]),e._v(" "),a("li",[e._v("WeakSet弱引用，集合中对象引用为弱引用，如果没有其他对WeakSet对象的引用，则会被GC回收")])]),e._v(" "),a("p",[e._v("最后，WeakRef实例有一个方法deref，返回引用的原始对象，如果原始对象被回收，则返回undefined")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const cache = new Map();\n\nconst setValue =  (key, obj) => {\n  cache.set(key, new WeakRef(obj));\n};\n\nconst getValue = (key) => {\n  const ref = cache.get(key);\n  if (ref) {\n    return ref.deref();\n  }\n};\n\nconst fibonacciCached = (number) => {\n  const cached = getValue(number);\n  if (cached) return cached;\n  const sum = calculateFibonacci(number);\n  setValue(number, sum);\n  return sum;\n};\n")])])]),a("p",[e._v("对于缓存远程数据来说，这可能不是一个好主意，因为远程数据可能会不可预测地从内存中删除。在这种情况下，最好使用LRU之类的缓存。")]),e._v(" "),a("h2",{attrs:{id:"逻辑运算符和赋值表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符和赋值表达式"}},[e._v("#")]),e._v(" 逻辑运算符和赋值表达式")]),e._v(" "),a("blockquote",[a("p",[e._v("逻辑运算符和赋值表达式，新特性结合了逻辑运算符（&&，||，??）和赋值表达式而JavaScript已存在的 复合赋值运算符有：")])]),e._v(" "),a("ul",[a("li",[e._v("操作运算符：+=  -=  *=  /=  %=  **=")]),e._v(" "),a("li",[e._v("位操作运算符：&=  ^=  |=")]),e._v(" "),a("li",[e._v("按位运算符：<<=  >>=  >>>=")])]),e._v(" "),a("p",[e._v("现有的的运算符，其工作方式都可以如此来理解")]),e._v(" "),a("p",[e._v("表达式：a op= b")]),e._v(" "),a("p",[e._v("等同于：a = a op b")]),e._v(" "),a("p",[e._v("逻辑运算符和其他的复合赋值运算符工作方式不同")]),e._v(" "),a("p",[e._v("表达式：a op= b")]),e._v(" "),a("p",[e._v("等同于：a = a op (a = b)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("a ||= b\n//等价于\na = a || (a = b)\n\na &&= b\n//等价于\na = a && (a = b)\n\na ??= b\n//等价于\na = a ?? (a = b)\n")])])]),a("p",[e._v("为什么不再是跟以前的运算公式a = a op b一样呢，而是采用a = a op (a = b)。因为后者当且仅当a的值为false的时候才计算赋值，只有在必要的时候才执行分配，而前者的表达式总是执行赋值操作")]),e._v(" "),a("h2",{attrs:{id:"可用来补充-初始化缺失的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可用来补充-初始化缺失的属性"}},[e._v("#")]),e._v(" ??=可用来补充/初始化缺失的属性")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const pages = [\n  {\n   title:'主会场',\n    path:'/'\n  },\n  {\n    path:'/other'\n  },\n  ...\n]\n  \nfor (const page of pages){\n page.title ??= '默认标题'\n}\nconsole.table(pages)\n//(index)  title         path\n//0        \"主会场\"      \"/\"\n//1        \"默认标题\"    \"/other\"\n")])])]),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结：")]),e._v(" "),a("ul",[a("li",[e._v("&&=：当LHS值存在时，将RHS变量赋值给LHS")]),e._v(" "),a("li",[e._v("||=：当LHS值不存在时，将RHS变量赋值给LHS")]),e._v(" "),a("li",[e._v("??= ：当LHS值为null或者undefined时，将RHS变量赋值给LHS")])]),e._v(" "),a("h2",{attrs:{id:"数字分隔符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字分隔符"}},[e._v("#")]),e._v(" 数字分隔符")]),e._v(" "),a("blockquote",[a("p",[e._v("数字分隔符，可以在数字之间创建可视化分隔符，通过_下划线来分割数字，使数字更具可读性")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const money = 1_000_000_000\n//等价于\nconst money = 1000000000\n\nconst totalFee = 1000.12_34\n//等价于\nconst totalFee = 1000.1234\n")])])]),a("p",[e._v("该新特性同样支持在八进制数中使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const number = 0o123_456\n//等价于\nconst number = 0o123456\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);