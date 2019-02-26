
/*
async function ddf() {
    let d = await doubleAfter2seconds(30)
    console.log(d)
    console.log(123)

}
function doubleAfter2seconds(n) {
    return n
}*/

/*
let arr = [1,2,3,4,5,6,7,78];

for(let i of arr){
    await function () {
        return 109
    }
    console.log(i)
}
*/

 var test = function(){
     return  new Promise((reject,resolve)=>{
         let tr = true
         setTimeout(function () {
             if(tr){
                 reject(1)
             }else{
                 reject(2)
             }

         },1000)
     })
 }
async function f() {
    let e = await test();
    return e;
}
var eeee = f()
console.log(eeee)