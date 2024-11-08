(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{736:function(t,n,e){"use strict";e.r(n);var s=e(4),a=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"如何编写cleaner-react代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何编写cleaner-react代码"}},[t._v("#")]),t._v(" 如何编写Cleaner React代码")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/F0_BLzXieiHPe6lBkerz_Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/s/F0_BLzXieiHPe6lBkerz_Q"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"正文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[t._v("#")]),t._v(" 正文")]),t._v(" "),n("p",[t._v("作为React开发者，我们都希望写出更干净的代码，更简单，更容易阅读。")]),t._v(" "),n("p",[t._v("在本指南中，我把一些编写更干净的React代码的七个顶级方法放在一起，使得构建React项目和审查你的代码更容易。")]),t._v(" "),n("p",[t._v("总的来说，学习如何编写更干净的React代码将使你成为一个更有价值的、整体上更快乐的React开发者，所以让我们马上开始吧!")]),t._v(" "),n("p",[t._v("主要涉及以下几个点：")]),t._v(" "),n("ul",[n("li",[t._v("合理使用jsx。")]),t._v(" "),n("li",[t._v("把不相关的代码移到一个独立的组件中。")]),t._v(" "),n("li",[t._v("为每个组件创建单独的文件。")]),t._v(" "),n("li",[t._v("将共享功能移入React hooks。")]),t._v(" "),n("li",[t._v("尽可能多地从你的JSX中删除JavaScript。")]),t._v(" "),n("li",[t._v("格式化内联样式，减少臃肿的代码。")]),t._v(" "),n("li",[t._v("合理使用React context。")])]),t._v(" "),n("h2",{attrs:{id:"合理使用jsx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#合理使用jsx"}},[t._v("#")]),t._v(" 合理使用JSX")]),t._v(" "),n("p",[t._v("你如何向一个给定的prop传递一个true的值？")]),t._v(" "),n("p",[t._v("在下面的例子中，我们使用showTitle在Navbar组件中显示我们应用程序的标题。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// src/App.js\n\nexport default function App() {\n  return (\n    <main>\n      <Navbar showTitle={true} />\n    </main>\n  );\n}\n\nfunction Navbar({ showTitle }) {\n  return (\n    <div>\n      {showTitle && <h1>My Special App</h1>}\n    </div>\n  )\n}\n")])])]),n("p",[t._v("我们是否需要明确地将showTitle设置为布尔值true？我们不需要!")]),t._v(" "),n("p",[t._v("一个快速的速记方法是，在一个组件上提供的任何prop的默认值都是true。")]),t._v(" "),n("p",[t._v("因此，如果我们在Navbar上添加showTitle，我们的标题元素就会显示出来。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// src/App.js\n\nexport default function App() {\n  return (\n    <main>\n      <Navbar showTitle />\n    </main>\n  );\n}\n\nfunction Navbar({ showTitle }) {\n  return (\n    <div>\n      {showTitle && <h1>My Special App</h1>} // title shown!\n    </div>\n  )\n}\n")])])]),n("p",[t._v("另一个要记住的有用的速记法涉及到传递字符串prop。")]),t._v(" "),n("p",[t._v("当你传递一个字符串的值时，你不需要用大括号把它包起来。")]),t._v(" "),n("p",[t._v("如果我们要设置导航条的标题，使用title的prop时，我们可以把它的值放在双引号中。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// src/App.js\n\nexport default function App() {\n  return (\n    <main>\n      <Navbar title="My Special App" />\n    </main>\n  );\n}\n\nfunction Navbar({ title }) {\n  return (\n    <div>\n      <h1>{title}</h1>\n    </div>\n  )\n}\n')])])]),n("hr"),t._v(" "),n("h2",{attrs:{id:"把不相关的代码移到一个独立的组件中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#把不相关的代码移到一个独立的组件中"}},[t._v("#")]),t._v(" 把不相关的代码移到一个独立的组件中")]),t._v(" "),n("p",[t._v("可以说，编写更干净的React代码的最简单和最重要的方法是善于将我们的代码抽象成独立的React组件。")]),t._v(" "),n("p",[t._v("让我们看一下下面的例子：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// src/App.js\n\nexport default function App() {\n  const posts = [\n    {\n      id: 1,\n      title: "How to Build YouTube with React"\n    },\n    {\n      id: 2,\n      title: "How to Write Your First React Hook"\n    }\n  ];\n\n  return (\n    <main>\n      <Navbar title="My Special App" />\n      <ul>\n        {posts.map(post => (\n          <li key={post.id}>\n            {post.title}\n          </li>\n        ))}\n      </ul>\n    </main>\n  );\n}\n\nfunction Navbar({ title }) {\n  return (\n    <div>\n      <h1>{title}</h1>\n    </div>\n  );\n}\n')])])]),n("p",[t._v("我们的应用程序正在显示一个导航条组件。我们正在用.map()遍历一个帖子数组，并在页面上显示其标题。")]),t._v(" "),n("p",[t._v("我们思考一个问题，我们怎样才能使它更干净呢？")]),t._v(" "),n("p",[t._v("我们为什么不把我们正在循环的代码，抽象化，并在一个单独的组件中显示它们，我们称之为"),n("strong",[t._v("FeaturePosts")]),t._v("。")]),t._v(" "),n("p",[t._v("让我们看看改进后的结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// src/App.js\n\nexport default function App() {\n return (\n    <main>\n      <Navbar title="My Special App" />\n      <FeaturedPosts />\n    </main>\n  );\n}\n\nfunction Navbar({ title }) {\n  return (\n    <div>\n      <h1>{title}</h1>\n    </div>\n  );\n}\n\nfunction FeaturedPosts() {\n  const posts = [\n    {\n      id: 1,\n      title: "How to Build YouTube with React"\n    },\n    {\n      id: 2,\n      title: "How to Write Your First React Hook"\n    }\n  ];\n\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n}\n')])])]),n("p",[t._v("正如你所看到的，我们现在可以只看我们的App组件。")]),t._v(" "),n("p",[t._v("通过阅读其中的组件名称，即Navbar和FeaturePosts，我们可以准确地看到我们的应用程序所显示的内容。")]),t._v(" "),n("h2",{attrs:{id:"为每个组件创建单独的文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为每个组件创建单独的文件"}},[t._v("#")]),t._v(" 为每个组件创建单独的文件")]),t._v(" "),n("p",[t._v("从我们之前的例子来看，我们把所有的组件都放在一个文件里，即app.js文件。")]),t._v(" "),n("p",[t._v("类似于我们将代码抽象成独立的组件以使我们的应用程序更具可读性，为了使我们的应用程序文件更具可读性，我们可以将我们拥有的每个组件放在一个单独的文件中。")]),t._v(" "),n("p",[t._v("这又一次帮助我们在应用程序中分离关注点。这意味着每个文件只负责一个组件，如果我们想在我们的应用程序中重复使用一个组件，就不会混淆它的来源了。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// src/App.js\nimport Navbar from './components/Navbar.js';\nimport FeaturedPosts from './components/FeaturedPosts.js';\n\nexport default function App() {\n  return (\n    <main>\n      <Navbar title=\"My Special App\" />\n      <FeaturedPosts />\n    </main>\n  );\n}\n")])])]),n("p",[t._v("我们来看看Navbar中的代码：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// src/components/Navbar.js\n\nexport default function Navbar({ title }) {\n  return (\n    <div>\n      <h1>{title}</h1>\n    </div>\n  );\n}\n")])])]),n("p",[t._v("接着我们看看FeaturedPosts中代码：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// src/components/FeaturedPosts.js\n\nexport default function FeaturedPosts() {\n  const posts = [\n    {\n      id: 1,\n      title: "How to Build YouTube with React"\n    },\n    {\n      id: 2,\n      title: "How to Write Your First React Hook"\n    }\n  ];\n\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n}\n')])])]),n("p",[t._v("此外，通过将每个单独的组件包含在自己的文件中，我们可以避免一个文件变得过于臃肿。如果我们想把所有的组件都加入到app.js文件中，我们很容易看到我们的app.js文件变得非常大。")]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"将共享功能移入react-hooks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将共享功能移入react-hooks"}},[t._v("#")]),t._v(" 将共享功能移入React hooks")]),t._v(" "),n("p",[t._v("看看我们的FeaturePosts组件，假设我们不是显示静态的帖子数据，而是想从一个API中获取我们的帖子数据。")]),t._v(" "),n("p",[t._v("我们可以用fetch API来做。你可以看到下面这个结果:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// src/components/FeaturedPosts.js\n\nimport React from 'react';\n\nexport default function FeaturedPosts() {\n  const [posts, setPosts] = React.useState([]);  \t\n    \n  React.useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/posts')\n      .then(res => res.json())\n      .then(data => setPosts(data));\n  }, []);\n\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n}\n")])])]),n("p",[t._v("然而，如果我们想在多个组件中执行这一数据请求，该怎么办？")]),t._v(" "),n("p",[t._v("比方说，除了FeaturePosts组件外，我们还想创建一个具有相同数据的Post组件。我们将不得不复制我们用来获取数据的逻辑，并将其粘贴到该组件中。")]),t._v(" "),n("p",[t._v("为了避免这样做，我们为什么不使用一个新的React钩子，我们可以称之为useFetchPosts:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// src/hooks/useFetchPosts.js\n\nimport React from 'react';\n\nexport default function useFetchPosts() {\n  const [posts, setPosts] = React.useState([]);  \t\n    \n  React.useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/posts')\n      .then(res => res.json())\n      .then(data => setPosts(data));\n  }, []);\n\n  return posts;\n}\n")])])]),n("p",[t._v('一旦我们在一个专门的 "钩子 "文件夹中创建了这个钩子，我们就可以在任何我们喜欢的组件中重复使用它，包括我们的FeaturePosts组件:')]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// src/components/FeaturedPosts.js\n\nimport useFetchPosts from '../hooks/useFetchPosts.js';\n\nexport default function FeaturedPosts() {\n  const posts = useFetchPosts()\n\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n}\n")])])]),n("hr"),t._v(" "),n("h2",{attrs:{id:"尽可能多地从你的jsx中删除javascript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#尽可能多地从你的jsx中删除javascript"}},[t._v("#")]),t._v(" 尽可能多地从你的JSX中删除JavaScript")]),t._v(" "),n("p",[t._v("另一个非常有用的，但经常被忽视的清理组件的方法是尽可能多地从我们的JSX中删除JavaScript。")]),t._v(" "),n("p",[t._v("让我们看一下下面的例子:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// src/components/FeaturedPosts.js\n\nimport useFetchPosts from '../hooks/useFetchPosts.js';\n\nexport default function FeaturedPosts() {\n  const posts = useFetchPosts()\n\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li onClick={event => {\n          console.log(event.target, 'clicked!');\n        }} key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n}\n")])])]),n("p",[t._v("我们正试图处理一个帖子的点击事件。你可以看到，我们的JSX变得更加难以阅读。鉴于我们的函数是作为一个内联函数包含的，它掩盖了这个组件的目的，以及它的相关函数。")]),t._v(" "),n("p",[t._v("我们能做什么来解决这个问题呢？我们可以把与onClick相连的内联函数提取出来，变成一个单独的处理程序，我们可以给它一个合适的名字，如handlePostClick。")]),t._v(" "),n("p",[t._v("一旦我们这样做，我们的JSX就会再次变得可读。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// src/components/FeaturedPosts.js\n\nimport useFetchPosts from '../hooks/useFetchPosts.js';\n\nexport default function FeaturedPosts() {\n  const posts = useFetchPosts()\n  \n  function handlePostClick(event) {\n    console.log(event.target, 'clicked!');   \n  }\n\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li onClick={handlePostClick} key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n}\n")])])]),n("hr"),t._v(" "),n("h2",{attrs:{id:"格式化内联样式-减少臃肿的代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#格式化内联样式-减少臃肿的代码"}},[t._v("#")]),t._v(" 格式化内联样式，减少臃肿的代码")]),t._v(" "),n("p",[t._v("React开发者经常会在他们的JSX中写内联样式。")]),t._v(" "),n("p",[t._v("但是，这使我们的代码更难阅读，更难写出额外的JSX。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// src/App.js\n\nexport default function App() {\n  return (\n    <main style={{ textAlign: 'center' }}>\n      <Navbar title=\"My Special App\" />\n    </main>\n  );\n}\n\nfunction Navbar({ title }) {\n  return (\n    <div style={{ marginTop: '20px' }}>\n      <h1 style={{ fontWeight: 'bold' }}>{title}</h1>\n    </div>\n  )\n}\n")])])]),n("p",[t._v("我们想把这种关注点分离的概念应用到我们的JSX样式中，把我们的内联样式移到一个CSS样式表中，我们可以把它导入我们喜欢的任何组件。")]),t._v(" "),n("p",[t._v("另一种重写内联样式的方法是将它们组织成对象。你可以看到这种模式是什么样子的:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// src/App.js\n\nexport default function App() {\n  const styles = {\n    main: { textAlign: "center" }\n  };\n\n  return (\n    <main style={styles.main}>\n      <Navbar title="My Special App" />\n    </main>\n  );\n}\n\nfunction Navbar({ title }) {\n  const styles = {\n    div: { marginTop: "20px" },\n    h1: { fontWeight: "bold" }\n  };\n\n  return (\n    <div style={styles.div}>\n      <h1 style={styles.h1}>{title}</h1>\n    </div>\n  );\n}\n')])])]),n("hr"),t._v(" "),n("h2",{attrs:{id:"合理使用react-context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#合理使用react-context"}},[t._v("#")]),t._v(" 合理使用React context")]),t._v(" "),n("p",[t._v("在你的React项目中，另一个必不可少的模式是使用React Context（特别是如果你有共同的属性，你想在你的组件中重复使用，而你发现自己写了很多重复的props）。")]),t._v(" "),n("p",[t._v("例如，如果我们想在多个组件之间共享用户数据，而不是多个重复的props（一种叫做props drilling的模式），我们可以使用React库中的context功能。")]),t._v(" "),n("p",[t._v("在我们的例子中，如果我们想在我们的Navbar和FeaturePosts组件中重复使用用户数据，我们所需要做的就是把我们的整个应用包裹在一个提供者组件中。")]),t._v(" "),n("p",[t._v("接下来，我们可以在值prop上传递用户数据，并在useContext钩子的帮助下，在我们的各个组件中消费该上下文。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// src/App.js\n\nimport React from "react";\n\nconst UserContext = React.createContext();\n\nexport default function App() {\n  const user = { name: "Reed" };\n\n  return (\n    <UserContext.Provider value={user}>\n      <main>\n        <Navbar title="My Special App" />\n        <FeaturedPosts />\n      </main>\n    </UserContext.Provider>\n  );\n}\n\n// src/components/Navbar.js\n\nfunction Navbar({ title }) {\n  const user = React.useContext(UserContext);\n\n  return (\n    <div>\n      <h1>{title}</h1>\n      {user && <a href="/logout">Logout</a>}\n    </div>\n  );\n}\n\n// src/components/FeaturedPosts.js\n\nfunction FeaturedPosts() {\n  const posts = useFetchPosts();\n  const user = React.useContext(UserContext);\n\n  if (user) return null;\n\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n}\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);