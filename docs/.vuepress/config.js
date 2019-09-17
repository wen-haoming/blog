module.exports = {
  title: '小明同学的学习笔记',
  description: '记录成长的点点滴滴',
  themeConfig: {
    nav: [
      { text: '开始', link: 'chapter1/' },
      { text: 'github地址', link: 'https://github.com/wen-haoming' }
    ],
    sidebar: [
      {
        title: '返回首页',
        collapsable: false,
        children: [
          "/"
        ]
      },
      {
        title: 'JS基础知识巩固',
        collapsable: false,
        children: [
          ['chapter1/this', 'this'],
          ['chapter1/type', '类型转换'],
          ['chapter1/bibao', '闭包']
        ]
      },
      {
        title: '高阶函数及es6',
        collapsable: false,
        children: [
          'promise/1'
        ]
      },
      {
        title: '浏览器知识笔记',
        collapsable: false,
        children: [
          'browers/progress'
        ]
      }
    ]
  }
}