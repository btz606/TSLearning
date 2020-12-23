// 原始数据类型

let isDone: boolean = false;

// 编译通过
// 后面约定，未强调编译错误的代码片段，默认为编译通过

// let createdByNewBoolean: boolean = new Boolean(1);

// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.

let createdByNewBoolean_1: Boolean = new Boolean(1);

let createdByBoolean: boolean = Boolean(1);


let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;


function alertName(): void {
  alert('My name is Tom');
}

// void只能声明null或者undefined
let unusable: void = undefined;

let u: undefined = undefined;
let n: null = null;

// 注意：此处有strict模式的问题
// 这样不会报错
let numaa: number = undefined;
// 这样也不会报错
let u99: undefined;
let num99: number = u99;


// let uuu: void;
// let num: number = uuu;