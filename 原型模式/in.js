function Pro() {
}
Pro.prototype.name = 'iojdqjwd'
Pro.prototype.age = '10'
Pro.prototype.kk = '11'
let sl = new Pro();
sl.jdjd = 123
console.log(sl.hasOwnProperty('name')) //只看实例中是否含有属性则为true
console.log('name' in sl)  // 只要通过对象能够访问到 则为true

function hasprototypePrototy(Obj,name) {  // 查看是否属性原型的方法
    return !Obj.hasOwnProperty(name)&&(name in Obj) //不是实例 并且可以访问到就是原形的方法
}


console.log(hasprototypePrototy(sl,'name'))