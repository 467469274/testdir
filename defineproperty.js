/*
var ob = {
    name:999
}


// 访问器
Object.defineProperty(ob,'jj',{
    get() {
        return this.value
    },
    set(v) {
        this.value = 'jjjjj'
    }
});

//属性类型
Object.defineProperty(ob,'newKey',{
    enumerable:false,  // 是否可见/可枚举  for in
    configurable:false,// 是否可修改配置项，或者删除重新修改
    writable:true, //是否可写
    value:111
})
/!*注释:
* 不能同时使用访问器和属性类型
* *!/

//只有set
let onlySet = {oo:10,key:12}
Object.defineProperty(onlySet,'key',{
    set(v){
        this.value = v
    },
    get(){
        return this.value
    }
})
// onlySet.key = 213


//  之前的非标准方法

let notStandard = {key:123};
notStandard.__defineSetter__('key2',function (v) {
    this.key9 = v
})
notStandard.__defineGetter__('key2',function () {
    return this.key9
});
notStandard.key2 = 100






*/


//一次定义多个属性

let objs = {};

Object.defineProperties(objs,{
    key1:{
        value:10,
        enumerable:false,
        configurable:false,
    },
    key2:{
        value:13,
        enumerable:true,
        configurable:true,
        writable: true
    },
    key3:{
        get(){
            return this._key3
        },
        set(v){
            this._key3 = v
        }
    }
})
objs.key1= 12
console.log(objs.key1)
// console.log(objs.key3);
let readPropertyForGetSet = Object.getOwnPropertyDescriptor(objs,'key3');
// console.log(readPropertyForGetSet);
let readPropertyForGeneral = Object.getOwnPropertyDescriptor(objs,'key1');
console.log(readPropertyForGeneral)