// 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
// TypeScript 中的接口是一个非常灵活的概念，除了可用于[对类的一部分行为进行抽象]
// 简单的例子
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25
};

interface Person_1 {
  name: string;
  age: number;
}

let tom_1: Person_1 = {
  name: 'Tom'
};
// index.ts(6,5): error TS2322: Type '{ name: string; }' is not assignable to type 'Person'.
//   Property 'age' is missing in type '{ name: string; }'.


interface Person_3 {
  name: string;
  age: number;
}

let tom_3: Person_3 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};

// index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.


// 可选属性
interface Person_4 {
  name: string;
  age?: number;
}

let tom_4: Person_4 = {
  name: 'Tom'
};
interface Person_5 {
  name: string;
  age?: number;
}

let tom_5: Person_5 = {
  name: 'Tom',
  age: 25
};

//仍然不允许添加未定义的属性*
interface Person_6 {
  name: string;
  age?: number;
}

let tom_6: Person_6 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};

// 任意属性
interface Person_7 {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom_7: Person_7 = {
  name: 'Tom',
  gender: 'male'
};


interface Person_8 {
  name: string;
  age?: number;
  [propName: string]: string;
}

let tom_8: Person_8 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};

// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.


/*
上例中，任意属性的值允许是 `string`，但是可选属性 `age` 的值却是 `number`，`number` 不是 `string` 的子属性，所以报错了。
另外，在报错信息中可以看出，此时 `{ name: 'Tom', age: 25, gender: 'male' }` 的类型被推断成了 `{ [x: string]: string | number; name: string; age: number; gender: string; }`，这是联合类型和接口的结合。
【解决方案】:一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
*/
 // 注意，此处校验失败是"strict": true引起的
interface Person_9 {
  name: string;
  age?: number;
  [propName: string]: string | number;
}

let tom_9: Person_9 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};


//只读属性

// 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 `readonly` 定义只读属性：
interface Person_10 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom_10: Person_10 = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};

tom_10.id = 9527;

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.



// **注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**：
interface Person_11 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom_11: Person_11 = {
  name: 'Tom',
  gender: 'male'
};

tom_11.id = 89757;

// index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
//   Property 'id' is missing in type '{ name: string; gender: string; }'.
// index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.