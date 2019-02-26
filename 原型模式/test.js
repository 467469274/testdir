function Fjj() {
    this.name = 10
    this.dqd = 10
}
let jj = new Fjj()

// console.log(jj.__proto__ == Fjj.prototype)//true
// console.log(Fjj.prototype.constructor == Fjj)  //true
// jj.__proto__ === [[prototype]]


function Protttype() {

}
Protttype.name = 1
Protttype.age = 2
Protttype.prototype.nn = '123'
let kk = new Protttype();
let ddwq = 'dqwdqwd'
// console.log(kk instanceof Protttype)
console.log(Object.getOwnPropertyNames(Protttype))
console.log(Object.getOwnPropertyNames(kk))
console.log(Object.getOwnPropertyNames(ddwq))
console.log(Object.getOwnPropertyNames(Protttype.prototype))
// console.log(Object.getOwnPropertyNames(Array.prototype))
console.log(Object.keys(Array.prototype))


Object.keys()  // 可枚举
Object.getOwnpropertyNames() // 所有 包括不可枚举