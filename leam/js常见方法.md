IE Edge chrome safari firefox opera
trident EdgeHTML webkit blink webkit gecko presto blink 


ASCII1字节  UNICODE2字节 utf-8 1-4可变长字节

Array.prototype
instanceof
RegExp 


string
属性
length
方法
toLocaleUpperCase 
toLowerCase 
toUpperCase
charAt
charCodeAt
indexOf
lastIndexOf
slice
substr
substring
split
replace
match
test

数组
属性
length
方法
map
forEach
filter
find
findIndex
some
every
push
pop
unshift
shift
slice
splice
join
indexOf
reverse
concat
reduce
sort    
isArray
Array.from
toString

对象
hasOwnProperty // 对象是否包含这个属性  不包含原型
isPrototypeOf  a.isProtypeOf //a对象是否在b圆形上
toString
valueOf
Object.assign()
Object.create()
Object.setPrototypeOf()
Object.getPrototypeOf()
Object.defineProperties()
Object.defineProperty()
Object.keys()：会返回一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用for...in循环遍历该对象时返回的顺序一致 。

Object.values()：返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。

Object.entries()：返回一个给定对象自身可枚举属性的键值对数组，其排列与使用for...in循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。

Object.fromEntries()：把键值对列表转换为一个对象，是Object.entries()的逆操作。

Object.is()：判断两个值是否是相同的值。


dom.style.width 只能获取内联
dom.currentStyle.width 获取最终渲染 只ie支持
window.getComputedStyle(dom).width ie9到11 获取最终渲染
dom.getBoundingClientRect().width   获取最终渲染，并且dom到浏览器边框的距离


