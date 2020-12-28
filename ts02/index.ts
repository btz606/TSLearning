// 原始数据类型

/*
JavaScript 的类型分为两种：原始数据类型（[Primitive data types]和对象类型（Object types）。

原始数据类型包括：布尔值、数值、字符串、`null`、`undefined` 以及 ES6 中的新类型 [`Symbol`] 和 [`BigInt`]。

本节主要介绍**前五种**原始数据类型在 TypeScript 中的应用。

 */

let isDone: boolean = false;

// 注意，使用构造函数 `Boolean` 创造的对象**不是**布尔值
// 事实上 `new Boolean()` 返回的是一个 `Boolean` 对象：
let createdByNewBoolean_999: boolean = new Boolean(1);
// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.

let createdByNewBoolean_1: Boolean = new Boolean(1);
// 内置对象
// 直接调用 `Boolean` 也可以返回一个 `boolean` 类型：
let createdByBoolean: boolean = Boolean(1);

// ## 数值
// 使用 `number` 定义数值类型：
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串
let myName: string = 'Tom';
let myAge: number = 25;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

// 空值
// 1.JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 `void` 表示没有任何返回值的函数：
function alertName(): void {
  alert('My name is Tom');
}

// 2.声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null`：
let unusable: void = undefined;
let u: undefined = undefined;
let n: null = null;

// 注意：此处与eslint插件有关！！！！！！！！
// 这样不会报错
let numaa: number = undefined;
// 这样也不会报错
let u99: undefined;
let num99: number = u99;


// let uuu: void;
// let num: number = uuu;