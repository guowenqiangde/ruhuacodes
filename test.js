// import fn,{name,age} from './a'
// fn()
// console.log(name,age)
// class Student{
//     constructor(name){
//         this.name = name
//     }
// }
// let std = new Student('zhagnsan')
// console.log(std.name)
let str = 'asd;fkasd;kff'
let reg = /^a/
console.log(reg.test(str))
console.log(str.indexOf('a') === 0)
console.log(str.startsWith('a'))
console.log(str.endsWith('f'))
console.log(str.endsWith('a'))//
console.log(str.indexOf('ka')>-1)
let reg2 = /ka/
console.log(reg2.test(str))
console.log(str.includes('ka'))


let arr = [1,2,3,4,5,6]
let obj = {
    name:'zhangsan',
    age:18
}
for(let value of obj){
    console.log(value)
}