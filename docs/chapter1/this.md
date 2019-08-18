# this指向的问题
## this 的指向是在调用函数的时候根据执行上下文所动态确定的。



- 在函数体中，简单调用该函数时（非显式/隐式绑定下），严格模式下 this 绑定到 undefined，否则绑定到全局对象 window／global；

- 一般构造函数 new 调用，绑定到新创建的对象上

- 一般由 call/apply/bind 方法显式调用，绑定到指定参数的对象上；

- 一般由上下文对象调用，绑定在该对象上；

- 箭头函数中，根据外层上下文绑定的 this 决定 this 指向。



---



## new 的时候做了什么？



- 创建一个新的对象；

- 将构造函数的 this 指向这个新对象；

- 为这个对象添加属性、方法等；

- 最终返回新对象。



---



## this 优先级与显隐性定义



- new call apply bind 的为显性

- 普通的调用为隐形

- 并且在显性中 new 比 bind 的优先级更高

- 箭头函数的 this 的指向不受影响

---
## 如何实现 bind，call , apply, new

bind 的模拟实现 (柯里化思想)

1. 返回一个 this 被改变的函数。

2. bind 能存放参数，并且 bind 后的函数也能传参。

3. new 的权限更高，并且 new 完后的对象是继承原来的构造函数。

```javascript
Function.prototype.myBind = function(context) {
        var that = this

        var args = Array.prototype.slice.call(arguments, 1)

        var F = function() {}
        // 圣杯模式共享原型
        F.prototype = this.prototype
        var bound = function() {
          var innherArgs = Array.prototype.slice.call(arguments)
          var finalArgs = args.concat(innherArgs)
          return that.apply(
            this instanceof F ? this : context || this,
            finalArgs
          )
        }
        //  继承本身原型 new后的实例
        bound.prototype = new F()
        return bound
      }
      // 存在的缺点
      // 1, length的值并没有改变
      // 2, bind后的函数式没有prototype属性的
      // 3, 模拟bind后的对象原型并没有直接继承原来构造函数
```
call 的模拟实现(参数的收集)
1. 改变 this 的指向
2. 传参的形式为单个形式
3. 函数立即执行
4. call 和 apply 的权限更高
5. 判断当前 context 传值情况
```javascript
  // 第一种方式 es5
   Function.prototype.myCall = function(context) {
     // 判断传值状况或者严格模式
       if (typeof context === 'object') {
          context = context || window
        } else {
          context = Object.create(null)
        }
        let args = Array.prototype.slice.call(arguments, 1)
        context.fn = this
        // 利用eval来收集参数
        let result = eval('context.fn(' + args.join(',') + ')')
        delete context.fn
        return result
      }
  // 第二种方式 es6
    Function.prototype.myCall = function(context, ...args) {
        // 判断传值状况或者严格模式
        if (typeof context === 'object') {
          context = context || window
        } else {
          context = Object.create(null)
        }
        //使用symbol来保证创建key值的唯一性
        let fn = Symbol()
        let result = (context[fn] = this)
        context[fn](...args)
        delete context[fn]
        return result
      }

```

apply 的模拟实现

1. 原理与 call 类似只有传参的形式不同


new 的模拟实现
new 的过程

1. 创建一个空对象,并且函数的最后返回此对象
2. 将对象的**proto**指向函数的 prototype
3. 函数内的 this 指向此新创建的对象
4. 函数逻辑内部执行, 然后返回此对象
   由于 new 是 js 的关键字，我们使用函数来模拟

```javascript
   function newFunc(constructor, ...args) {
        if (!constructor && typeof constructor !== 'function') {
          return
        }
        // 先生成空对象的公有属性
        let instance = Object.create(constructor.prototype)
        // 再继承对象上的私有对象，并且获取返回值
        let result = constructor.apply(instance, args)
        // 对返回值进行判断
        return typeof result === 'object' && result !== null ? result : instance
      }
```



