Function.prototype.myCall = function (context) {
    var context = context || window;
    // 给 context 添加一个属性
    // getValue.call(a, 'yck', '24') => a.fn = getValue
    console.log(this)
    context.fn = this
    // 将 context 后面的参数取出来
    var args = [...arguments].slice(1);
    // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
    var result = context.fn(...args)
    // 删除 fn
    delete context.fn;
    return result
};
var objjjj = {
    ddk : 100
}
function dd() {
    console.log(this.ddk);
    console.log(this)
}
dd.myCall(objjjj)