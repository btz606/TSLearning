// 在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）：

// 函数声明（Function Declaration）
function sum(x, y) {
  return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
  return x + y;
};


// 函数声明（Function Declaration）ts写法

// 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：

function sum_1(x: number, y: number): number {
  return x + y;
}

// 注意，**输入多余的（或者少于要求的）参数，是不被允许的**：
function sum_2(x: number, y: number): number {
  return x + y;
}
sum_2(1, 2, 3);

// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.
function sum_3(x: number, y: number): number {
  return x + y;
}
sum_3(1);

// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.



// 函数表达式（Function Declaration）ts写法

let mySum_4 = function (x: number, y: number): number {
  return x + y;
};


let mySum_5: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};


// 注意不要混淆了 TypeScript 中的 `=>` 和 ES6 中的 `=>`。
// 在 TypeScript 的类型定义中，`=>` 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// 在 ES6 中，`=>` 叫做箭头函数，应用十分广泛，可以参考 [ES6 中的箭头函数](http://es6.ruanyifeng.com/#docs/function#箭头函数)。



// 用接口定义函数的形状

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

// 可选参数[§](https://ts.xcatliu.com/basics/type-of-function.html#可选参数)

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tom_99 = buildName('Tom');

// 需要注意的是，可选参数必须接在必需参数后面。换句话说，**可选参数后面不允许再出现必需参数了**：

function buildName_9(firstName?: string, lastName: string) {
  if (firstName) {
      return firstName + ' ' + lastName;
  } else {
      return lastName;
  }
}
let tomcat_9 = buildName_9('Tom', 'Cat');
let tom_9 = buildName_9(undefined, 'Tom');

// index.ts(1,40): error TS1016: A required parameter cannot follow an optional parameter.


// 参数默认值

// 在 ES6 中，我们允许给函数的参数添加默认值，**TypeScript 会将添加了默认值的参数识别为可选参数**：
function buildName_M(firstName?: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}
let tomcat_M = buildName_M('Tom', 'Cat');
let tom_M = buildName_M('Tom');

// 此时就不受「可选参数必须接在必需参数后面」的限制了：
function buildName_N(firstName: string, lastName: string) {
  return firstName + ' ' + lastName;
}
let tomcat_N = buildName_N('Tom', 'Cat');
let cat_N = buildName_N(undefined, 'Cat');


// 剩余参数
// ES6 中，可以使用 `...rest` 的方式获取函数中的剩余参数（rest 参数）：
function push_1(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let aaa: any[] = [];
push_1(aaa, 1, 2, 3);

// 事实上，`items` 是一个数组。所以我们可以用数组的类型来定义它：

function push_2(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let abbb: any[] = [];
// let abbb = []; 
// 注意“插件会显示为错误，属于代码优化的提示
push_2(abbb, 1, 2, 3);

// 注意，rest 参数只能是最后一个参数，关于 rest 参数，可以参考 [ES6 中的 rest 参数]。



// 重载  没用过