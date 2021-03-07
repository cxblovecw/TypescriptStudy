// infer 推断推论 可以看成一个占位符
// 仅条件类型的 "extends" 子句中才允许 "infer" 声明 即extends紧接着的语句
// 在这个类型中 判断 T 是否是 (params:infer R)=>infer R的子类 可以将infer R看成一个可以接收任意的类型的类型  这里的参数是 infer R ，返回值也是 infer R 因此限制了参数和返回值需要相同
type InferType<T> = T extends (params: infer R) => infer R ? R : number;
type Fun1 = (str: string) => boolean;
type Fun2 = (str: string) => string;
type TF1 = InferType<Fun1>; // fun1的参数和返回值不同 因此extends结果为false 所以类型为 number
type TF2 = InferType<Fun2>; // fun2的参数和返回值相同 因此extends结果为true  所以类型为 string

type Infer2Type<T> = T extends infer R ? R : number;
type Result = Infer2Type<string>;

export {};
