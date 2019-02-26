var connectList = [];
var textlist = [],
    connectList = [];
self.addEventListener('connect', function (e) {
    var port = e.ports[0]
    port.start();
    port.addEventListener('message', function (e) {
        // obj.target = e.currentTarget;
        var worker = e.currentTarget,
            res = e.data;
        if (connectList.indexOf(worker) === -1) {
            connectList.push(worker)
        }
        connectList.forEach(function (value) {value.postMessage(res.data.value);  });
    })
});
// 分发消息
function inform(obj) {
    var cb = (typeof obj === 'function') ? obj : function (item) {
        item.postMessage(obj);
    }
    connectList.forEach(cb);
}