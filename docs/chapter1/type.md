### js 的类型判断以及转化

JavaScript 具有 7 钟内置的数据类型

- number
- string
- boolean
- object
- null
- undefined
- symbol

除了 object 和 symbol 其余 5 种都是基本数据类型, 而 object 包含 Array, Function, Date 等对象
常用的判断可以使用

- typeof
- instanceof
- Object.prototype.toString
- constructor

1. typeof 存在的问题
1.1 typeof null === 'object'
1.2 不能判断复杂的数据类型除了 function
但是可以判断 symbol

2. a instanceOf A
---判断 a 是否是 A 的实例
原理是通过实例的**proto**来寻找原型与构造函数是否相同
实现 instanceOf

```javascript
function newInstanceOf(obj, constructor) {
// 判断是否为false的值
if (!obj) {
return false
}
while (obj !== null) {
if (obj.__proto__ === constructor.prototype) {
return true
}
obj = obj.__proto__
}
return false
}
```

