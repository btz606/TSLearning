// 原始数据类型
var isDone = false;
// 编译通过
// 后面约定，未强调编译错误的代码片段，默认为编译通过
// let createdByNewBoolean: boolean = new Boolean(1);
// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
var createdByNewBoolean_1 = new Boolean(1);
var createdByBoolean = Boolean(1);
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
function alertName() {
    alert('My name is Tom');
}
// void只能声明null或者undefined
var unusable = undefined;
var u = undefined;
var n = null;
// 注意：此处有strict模式的问题
// 这样不会报错
var numaa = undefined;
// 这样也不会报错
var u99;
var num99 = u99;
// let uuu: void;
// let num: number = uuu;
