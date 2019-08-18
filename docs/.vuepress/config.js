module.exports = {
  title: 'javascript函数式编程总结',
  dest: 'dist',
  description: '从函数式编程引出的思考与针对es6等问题的原理剖析',
  themeConfig: {
    nav: [
      { text: '开始', link: '/chapter1/a' },
      { text: 'github地址', link: '/guide/' }
    ],
    sidebar: [
      {
        title: '函数式编程的基本概括',
        collapsable: false,
        children: [
          ['chapter1/', 'Introduction'],
          'chapter1/this'
        ]
      }
    ]
  }
}