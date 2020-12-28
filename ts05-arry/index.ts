// 基本
// 1. 模板： 「类型 + 方括号」表示法

let fibonacci: number[] = [1, 1, 2, 3, 5];

let fibonacci_1: number[] = [1, '1', 2, 3, 5];

let fibonacci_3: number[] = [1, 1, 2, 3, 5];
fibonacci_3.push('8');
fibonacci_3.push(8);

// 2. 数组泛型 表示法
let fibonacci_4: Array<number> = [1, 1, 2, 3, 5];

//3. 用接口表示数组
interface NumberArray {
  [index: number]: number;
}
let fibonacci_5: NumberArray = [1, 1, 2, 3, 5];
/*
`NumberArray` 表示：只要索引的类型是数字时，那么值的类型必须是数字。
虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
不过有一种情况例外，那就是它常用来表示类数组。
*/

// 类数组
// 用的不多， 需要自查

// any 在数组中的应用
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];