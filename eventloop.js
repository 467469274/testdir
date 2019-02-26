/*
console.log('golb1');

setImmediate(function() {
    console.log('immediate1');
    process.nextTick(function() {
        console.log('immediate1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate1_promise');
        resolve();
    }).then(function() {
        console.log('immediate1_then')
    })
})

setTimeout(function() {
    console.log('timeout1');
    process.nextTick(function() {
        console.log('timeout1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function() {
        console.log('timeout1_then')
    })
    setTimeout(function() {
        console.log('timeout1_timeout1');
        process.nextTick(function() {
            console.log('timeout1_timeout1_nextTick');
        })
        setImmediate(function() {
            console.log('timeout1_setImmediate1');
        })
    });
})

new Promise(function(resolve)
{
    console.log('glob1_promise');
    resolve();
}).then(function() {
    console.log('glob1_then')
})

process.nextTick(function() {
    console.log('glob1_nextTick');
});*/

/*

console.log('1')
setTimeout(function() {
    console.log('2')
    process.nextTick(function() {
        console.log('3')
    })
    new Promise(function(resolve) {
        console.log('4')
        resolve()
    }).then(function() {
        console.log('5')
    })
})

process.nextTick(function() {
    console.log('6')
})

new Promise(function(resolve) {
    console.log('7')
    resolve()
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9')
    process.nextTick(function() {
        console.log('10')
    })
    new Promise(function(resolve) {
        console.log('11')
        resolve()
    }).then(function() {
        console.log('12')
    })
})*/
/*

new Promise(function (resolve) {
    console.log('1')// 宏任务一
    resolve()
})
    .then(function () {
    console.log('3') // 宏任务一的微任务
})
setTimeout(function () { // 宏任务二
    console.log('4')
    setTimeout(function () { // 宏任务五
        console.log('7')
        new Promise(function (resolve) {
            console.log('8')
            resolve()
        }).then(function () {
            console.log('10')
            setTimeout(function () {  // 宏任务七
                console.log('12')
            })
        })
        console.log('9')
    })
})
setTimeout(function () { // 宏任务三
    console.log('5')
})
setTimeout(function () {  // 宏任务四
    console.log('6')
    setTimeout(function () { // 宏任务六
        console.log('11')
    })
})
console.log('2') // 宏任务一
// 1,2,3*/

/*
setTimeout(function () {
    console.log('6')
}, 0)
console.log('1')
async function async1() {
    console.log('2')
    await async2()
    console.log('5')
}
async function async2() {
    console.log('3')
}
async1()
console.log('4')*/

/*

async function async1() {
    console.log('q')
    const data = await async2()
    console.log(data)
    console.log('e')
}

async function async2() {
    return new Promise(function (resolve) {
        console.log('w')
        resolve('await的结果')
    }).then(function (data) {
        console.log('f')
        return data
    })
}
console.log('j')

setTimeout(function () {
    console.log('k')
}, 0)

async1()

new Promise(function (resolve) {
    console.log('r')
    resolve()
}).then(function () {
    console.log('x')
})
console.log('a')
//jqwrafx await的结果 e k*/


/*
setTimeout(function () {
    console.log('w')
}, 0)

async function async1() {
    console.log('r')
    const data = await async2()
    console.log('k')
    return data
}

async function async2() {
    return new Promise(resolve => {
        console.log('u')
        resolve('t')
    }).then(data => {
        console.log('y')
        return data
    })
}

async1().then(data => {
    console.log('v')
    console.log(data)
})

new Promise(function (resolve) {
    console.log('m')
    resolve()
}).then(function () {
    console.log('n')
})
// r  u m y n k v t w*/
/*

setTimeout(() => {
    console.log('a');
    new Promise( res => {
        res()
    }).then( () => {
        console.log('c');
    })
    process.nextTick(() => {
        console.log('h');
    })
}, 0)
console.log('b');

process.nextTick( () => {
    console.log('d');
    process.nextTick(() => {
        console.log('e');
        process.nextTick(() => {
            console.log('f');
        })
    })
})

setImmediate( () => {
    console.log('g');
})*/
/*

console.log("start");
process.nextTick(() => {
    console.log("a");
    setImmediate(() => {
        console.log("d");
    });
    new Promise(res => res()).then(() => {
        console.log("e");
        process.nextTick(() => {
            console.log("f");
        });
        new Promise(r => {
            r()
        })
            .then(() => {
                console.log("g");
            });
        setTimeout(() => {
            console.log("h");
        });
    });
});

setImmediate(() => {
    console.log("b");
    process.nextTick(() => {
        console.log("c");
    });
    new Promise(res => res()).then(() => {
        console.log("i");
    });
});
console.log("end");*/

/*
async function async1() {
    console.log("async1 start");
    await  async2();
    console.log("async1 end");

}
async  function async2() {
    console.log( 'async2');
}
console.log("script start");
setTimeout(function () {
    console.log("settimeout");
},0);
async1();
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});
console.log('script end');*/
/*

function testSometing() {
    console.log("执行testSometing");
    return "testSometing";
}

function testAsync() {
    console.log("执行testAsync");
    return Promise.resolve("hello async");
}

async function test() {
    console.log("test start...");
    new Promise((resolve)=> {
        resolve(Promise.resolve(testSometing()));
    }).then((val)=>{
        const v1 = val
        console.log(v1);
        new Promise((resolve)=> {
            resolve(Promise.resolve(testAsync()));
        }).then((val)=>{
            const v2 = val
            console.log(v2);
            console.log(v1, v2);
        })
    })

}

test();

var promise = new Promise((resolve)=> { console.log("promise start.."); resolve("promise");});//3
promise.then((val)=> console.log(val));

console.log("test end...")*/

/*
(function () {
    console.log(1)
    setTimeout(function () {
        console.log(2)
    },0)
    new Promise((resolve,reject)=>{
        console.log(3)
        resolve(4)
    }).then((val)=>{
        console.log(val)
    })
    console.log(5)
})()*/

