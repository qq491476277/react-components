function printPerson(test1, test2) {
    console.log(this);

    console.log(`姓名:${this.name},年龄:${this.age}--${test1}--${test2}`)
}
// let printPerson = (test1, test2) => {
//     // console.log(this);

//     console.log(`姓名:${this.name},年龄:${this.age}--${test1}--${test2}`)
// }
// let p1 = {
//     name: '尼古拉斯凯奇',
//     age: 33
// }
// let s = Symbol('call')
Function.prototype.myCall = function (self) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    self = self || window

    let arg = [...arguments].slice(1)

    let fn = Symbol('call')

    self[fn] = this

    let result = self[fn](...arg)

    delete self[fn]

    return result

}
Function.prototype.myApply = function (self) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    self = self || window

    let arg = arguments[1] || []


    if (!arguments[1] instanceof Array) {
        throw new TypeError('参数不为Array')
    }

    let fn = Symbol('call')

    self[fn] = this

    let result = self[fn](...arg)

    delete self[fn]

    return result

}


Function.prototype.myBind = function (self) {

    if (!typeof this === 'function') {
        throw Error('只能使用function调用')
    }
    let fun = this


    let result = function (...ars) {
        console.log(ars);

        fun.apply(self, ars)
    }

    return result

}

Function.prototype.mybind1 = function (thisArg) {
    if (typeof this !== 'function') {
        throw TypeError("Bind must be called on a function");
    }
    // 拿到参数，为了传给调用者
    const args = Array.prototype.slice.call(arguments, 1),
        // 保存 this
        self = this,
        // 构建一个干净的函数，用于保存原函数的原型
        nop = function () {},
        // 绑定的函数
        bound = function () {
            // this instanceof nop, 判断是否使用 new 来调用 bound
            // 如果是 new 来调用的话，this的指向就是其实例，
            // 如果不是 new 调用的话，就改变 this 指向到指定的对象 o
            return self.apply(
                this instanceof nop ? this : thisArg,
                args.concat(Array.prototype.slice.call(arguments))
            );
        };

    // 箭头函数没有 prototype，箭头函数this永远指向它所在的作用域
    if (this.prototype) {
        nop.prototype = this.prototype;
    }
    // 修改绑定函数的原型指向
    bound.prototype = new nop();

    return bound;
}


let c1 = printPerson.mybind1(p1)
let c2 = printPerson.myBind(p1)
let c3 = printPerson.bind(p1)


console.log(a);

function a() {}
var a = 1
// 暗示全局变量  imply global variable
// i
// AO  函数上下文 activation  object
// c1()
// c2(1,2,3)
// 2 1  function a(){}  function(){}
// 2 1  function a(){}  function(){}
// 1寻找形参和变量声明    2实参赋值  3 函数声明，赋值 4执行
function test(a) {
    console.log(a)
    var a = 1
    console.log(a);

    function a() {}
    console.log(a);
    var b = function () {}
    console.log(b);

    function d() {}
}
// test(2)


function test1(a, b) {
    console.log(a);
    c = 0
    var c
    a = 5
    b = 6
    console.log(ggg);
    console.log(b);

    function b() {}

    function d() {}
    console.log(b);
}

// test1(8, 9)


// 1寻找形参和变量声明    2实参赋值  3 函数声明，4赋值     8   6 6
// AO = {
//  a:undefined ->8 ->5
//  b:undefined ->9 ->function b(){}=>6
//  c:undefined ->0
//
// }
// 全局 global object 1 变量声明  2函数声明 4赋值 

// 防抖  点击后重置上次操作
function shake() {
    let timeId;
    return function (callback, t = 1000) {
        timeId && clearTimeout(timeId)
        timeId = setTimeout(() => {
            callback()
        }, t)
    }
}
// 节流  一段时间内只执行一次操作
function jieliu(callback, t = 1000) {
    let isCallback = true;
    return function () {
        if (!isCallback) return
        isCallback = false
        setTimeout(() => {
            isCallback = true
            callback()
        }, t)
    }
}
let onShakehaha = jieliu(haha)

function haha() {
    console.log('有点好笑');

}

function myInstanceof(o1, o2) {
    let i = 0
    let proto = o1.__proto__
    while (i < 10) {
        i++
        if (proto === null) return false
        if (proto === o2.prototype) {
            return true
        }
        proto = proto.__proto__


    }
}
console.log('instanceof实现', myInstanceof(b1, Array));

function Foo(params) {

}

function myNew(fn) {
    let ars = Array.prototype.slice.call(arguments)
    let o = {}
    let result = fn.apply(o, ars)
    o.__proto__ = fn.prototype
    if (result != null && typeof result === 'object') {
        return result
    }
    return o
}