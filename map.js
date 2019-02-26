var map = function (list,fun) {
    list.reduce(function (p,a) {
        p.push(1);
        console.log(p)
        return p
    },[])
}
map([1,2,3,4])
// \var map = (ar,fun)=>ar.reduce((p,a)=>(p.push(fun(a)),p),[])
