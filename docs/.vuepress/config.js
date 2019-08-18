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
          ['chapter1/', 'Introduction'],
          ['chapter1/this', 'this'],
          ['chapter1/type', '类型转换'],
          ['chapter1/bibao', '闭包']
        ]
      },
      {
        title: 'JS函数式编程以及ES6进阶知识',
        collapsable: false,
        children: [
          'chapter2/function',
          'chapter2/promise'
        ]
      }
    ]
  }
}