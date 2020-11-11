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
// let str = 'asd;fkasd;kff'
// let reg = /^a/
// console.log(reg.test(str))
// console.log(str.indexOf('a') === 0)
// console.log(str.startsWith('a'))
// console.log(str.endsWith('f'))
// console.log(str.endsWith('a'))//
// console.log(str.indexOf('ka')>-1)
// let reg2 = /ka/
// console.log(reg2.test(str))
// console.log(str.includes('ka'))




// let arr = [1,2,3,4,5,6]
// let obj = {
//     name:'zhangsan',
//     age:18
// }
// for(let value of obj){
//     console.log(value)
// }

// let arr = [1,2,3,{name:'lisi',count:{math:98}},5,6]
// //console.log(arr.indexOf(10) > -1)
// //console.log(arr.includes(10))
// //console.log(arr.includes(5))
// let obj = arr.find((item)=>{
//     return item > 0
// })
// console.log(obj)
// let index = arr.findIndex((item)=>{
//     return item.name === 'lisi'
// })
// console.log(index,'----')
// let arr = [1,2,3,7,5,6,0]
// let result = arr.some((item)=>{
//     return item > 0
// })
// let result1 = arr.reduce((sum,current)=>{
//   return  sum+=current
// })
// console.log(result1)
// let obj = {
//     name:'',
//     age:0,
//     count:0
// }
// //console.log(Object.keys(obj))
// let {name,age} = obj//
// console.log(name,age)
// console.log({...obj})
// let firtSet = new Set([1,2,3,4,4,4,5])
// console.log(firtSet)
// // console.log(Array.from(new Set([1,2,3,4,4,4,5])))
// firtSet.add(6)
// //console.log(firtSet)
// firtSet.add(2)
// //console.log(firtSet)
// //console.log(firtSet.has(2))
// firtSet.delete(2)
// //console.log(firtSet.has(2))
// //firtSet.clear()
// //console.log(firtSet.size)
// //映射
// let firstMap = new Map([['name','zhangsan'],['age',18]])
//增,改
// firstMap.set('count',98)
// firstMap.set('name','lisi')
// //删
// //firstMap.delete('name')
// //firstMap.clear()
// //查
// console.log(firstMap.has('name'))
// console.log(firstMap.get('name'))
// console.log(firstMap)
let obj = {
    name:'zhangsan',
    age:0,
    count:0
}
// let str='000'
// Object.defineProperty(obj,'name',{
//     get(){
//         console.log('你在获取值')
//         return str
//     },
//     set(newValue){
//         console.log('你在设置值')
//         str = newValue
//     }
// })//属性代理
// console.log(obj.name)
// obj.name = 'lisi'
// console.log(obj.name)
// console.log(str)


// let newObj = new Proxy(obj,{//代理对象
//     get(targetObj,key,value){
//         console.log('获取值')
//         return targetObj[key]
//     },
//     set(targetObj,key,newValue){
//         console.log('设置值')
//         targetObj[key] = newValue
//     }
// })
// newObj.name = 'lisi'
// newObj.sex = 'man'
// console.log(obj.sex,'-----')
const PENDING = Symbol.for('pending')
const FULLFIELD = Symbol.for('fullfield')
const REJECT = Symbol.for('reject')

class MyPromis{
   constructor(excuter){
        this.status = PENDING
        this.value = undefined
        this.error = undefined
        this.success = undefined
        this.errorfn = undefined
        excuter(this.resolve.bind(this),this.reject.bind(this))
   }
   resolve(value){
       console.log('777')
        if(this.status !== PENDING){
            return
        }
        this.status = Symbol.for('fullfield')
        this.value = value 
        this.success(this.value)
   }
   reject(e){
       console.log('888')
    if(this.status !== PENDING){
        return
    }
    this.status = Symbol.for('reject')
    this.error = e 
    //this.errorfn(this.error)
   }
   then(success,fail){
       this.success = success
       this.errorfn = fail
       return new MyPromis((resolve,reject)=>{resolve(19)})
   }
}
let myprom1 = new MyPromis((resolve,reject)=>{
    console.log('666')

    setTimeout(()=>{
        resolve(19)
    },3000)

})
myprom1.then((res)=>{
    console.log(res,'----------')
}).then(()=>{})
