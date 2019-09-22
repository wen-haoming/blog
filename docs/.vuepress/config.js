module.exports = {
  title: '小明同学的学习笔记',
  description: '记录成长的点点滴滴,每周更新2-3篇',
  themeConfig: {
    nav: [
      { text: '开始', link: 'base/this' },
      { text: 'github地址', link: 'https://github.com/wen-haoming' }
    ],
    sidebar: [
      {
        title: 'JS基础知识巩固',
        collapsable: true,
        children: [
          'chapter1/this',
          'chapter1/type',
          'chapter1/bibao'
        ]
      },
      {
        title: '异步编程',
        collapsable: true,
        children: [
          'promise/1',
          'promise/2'
        ]
      },
      {
        title: 'node专题',
        collapsable: true,
        children: [
          'node/1',
          'node/2'
        ]
      },
      {
        title: '浏览器知识笔记',
        collapsable: true,
        children: [
          'browers/progress',
          'browers/2'
        ]
      },
      {
        title: '网络专题',
        collapsable: true,
        children: [
          'net'
        ]
      },
      {
        title: '算法与数据结构',
        collapsable: true,
        children: [
          'data'
        ]
      },
      {
        title: 'vue',
        collapsable: true,
        children: [
          'vue'
        ]
      },
      {
        title: 'react',
        collapsable: true,
        children: [
          'react'
        ]
      }, {
        title: 'flutter',
        collapsable: true,
        children: [
          'flutter'
        ]
      },
      {
        title: '架构类知识',
        collapsable: true,
        children: [
          'architect'
        ]
      },
      {
        title: 'webpack',
        collapsable: true,
        children: [
          'webpack'
        ]
      },
      {
        title: '移动端',
        collapsable: true,
        children: [
          'mobile'
        ]
      },
    ]
  }
}