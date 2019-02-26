let ar = [1,1,2,3,5,6]
// console.log(Array.isArray(ar))
// console.log(ar.constructor == Array)
// console.log(Object.prototype.toString.call(ar) === '[object Array]')
// console.log(ar instanceof Array);
// var map = (arr,fn)=>arr.reduce((p,c)=>(p.push(fn(c)),p),[]);
/*var map = function map(arr, fn) {
    return arr.reduce(function (p, c) {
        console.log(p)
        return p.push(fn(c)), p;
    }, []);
};*/
/*var map = function map(arr, fn) {
    var arrs = [];
    return arr.reduce(function (p, c) {
        arrs.push(fn(c))
        return arrs;
    });
};*/
// var map = (ar,fun)=>ar.reduce((p,a)=>(p.push(fun(a)),p),[])
// var v = map(ar,x=>console.log(x));
// console.log(v);
/*function ddd() {
    return 1,2
}
var dqd = ddd()
console.log(dqd)*/
// let range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i);
// console.log(range(5,10));  //[0,1,2]
// function range (s,e){
//     var arr = new Array(e-s);
//     for(let i = 0;i<arr.length;i++){
//         arr[i] = i+s
//     }
//     return arr
// }
// console.log(range(5,10))
// console.log();  //[0,1,2]



function gtn(list) {
    var getObjType = Object.prototype.toString;
    var res = {}
    list.forEach((item)=>{
        var key = getObjType.call(item).split(' ')[1].slice(0,1)
        res[key] = (res[key] || 0) +1
    })
    return res
}
console.log(gtn(['kkk kk']))