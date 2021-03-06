interface Person {
	// readonly标记成只读属性
	readonly name: string;
	age: number;
	sex: string;
	like?: string; //可选参数
	[propName: string]: any; // 接收所有string类型的属性名 any类型属性值 不一定要写在最后
	// 对于方法的参数和返回值进行限定
	// test(c:string,g:string):number
	test(c: string, g: string): void;
}
let obj = {};
let people: Person = {
	name: 'cxb',
	age: 22,
	sex: 'man',
	// 接口限定了 定义方法的时候就可以不用限定了
	test(c, g) {
		console.log('这是一个test函数');
		return 0;
	},
	run() {},
};

console.log(people.name);
people.test('1', '3');

interface Box {
	name: string;
}
// 后续声明的属性类型必须和之前声明的保持一致
interface Box {
	age: number;
}
let box: Box = {
	name: 'marco',
	age: 12,
};
// 同名接口会进行合并

export {};
