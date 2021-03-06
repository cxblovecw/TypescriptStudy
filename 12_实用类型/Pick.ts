type Animal = {
	name: string;
	run: Function;
};
// Pick<Type,Keys> 从类型Type中Pick出Keys这些属性作为新的类型
// Pick了name这个key  所以新的类型就只能有name这个key了

// K必须在T的key中 否则会有问题 去掉会报错
type Pick<T, K extends keyof T> = {
	[P in K]: T[P];
};

type Person = Pick<Animal, 'name'>;
let p: Person = {
	name: 'marco',
};
export {};
