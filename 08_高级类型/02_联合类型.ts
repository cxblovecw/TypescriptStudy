// 联合类型 也就是只要是联合类型中的一个就可以了
// 当赋值给联合类型的时候 联合类型就是赋值的那个类型 可以使用该类型的方法
let lhType: string | number;
lhType = 10;
lhType = '10';
