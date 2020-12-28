// 2.任意值 --------------任意值（Any）用来表示允许赋值为任意类型。

// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// 但如果是 `any` 类型，则允许被赋值为任意类型。
let myFavoriteNumber_1: any = 'seven';
myFavoriteNumber_1 = 7;

// 在任意值上访问任何属性都是允许的：
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

// 也允许调用任何方法：
let anyThing_1: any = 'Tom';
anyThing_1.setName('Jerry');
anyThing_1.setName('Jerry').sayHello();
anyThing_1.myName.setFirstName('Cat');

// **变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型**：
let something;
something = 'seven';
something = 7;
something.setName('Tom');
// 注意：此处是插件eslint检测出的错误，tsc index.tx不会报错
// 即：any下可以使用任何XXX
// 等价于:
let something_1: any;
something_1 = 'seven';
something_1 = 7;
something_1.setName('Tom');



// 3.类型推论
// 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
// 分为有初始值与无初始值

let myFavoriteNumber33 = 'seven';
myFavoriteNumber33 = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.


let myFavoriteNumber31: string = 'seven';
myFavoriteNumber31 = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.


let myFavoriteNumber32;
myFavoriteNumber32 = 'seven';
myFavoriteNumber32 = 7;


// 4.联合类型
// 联合类型（Union Types）表示取值可以为多种类型中的一种。
let myFavoriteNumber41: string | number;
myFavoriteNumber41 = 'seven';
myFavoriteNumber41 = 7;
let myFavoriteNumber_44: string | number;
myFavoriteNumber_44 = true;
// index.ts(2,1): error TS2322: Type 'boolean' is not assignable to type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.

// 访问联合类型的属性或方法
function getLength(something: string | number): number {
  return something.length;
}
// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.

// 访问共有属性
function getString(something: string | number): string {
  return something.toString();
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myFavoriteNumber49: string | number;
// let myFavoriteNumber49: any;
myFavoriteNumber49 = 'seven';
console.log(myFavoriteNumber49.length); // 5
myFavoriteNumber49 = 7;
console.log(myFavoriteNumber49.length); // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.