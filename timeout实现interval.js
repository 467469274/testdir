
function f(fn,time) {
    let _this = this;
    let setFun = function () {
        setTimeout(function () {
            fn.call(_this);
            setFun()
        },time)
    }
    setFun()
}
f(function () {
    console.log(1)
},1000)