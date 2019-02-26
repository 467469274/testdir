const kk = {
    name:'jscoder',
    skill:['key','key1','key2','key3'],
    sayName(){
        for(var i = 0,len =this.skill.length;i<len;i++){
            setTimeout(function () {
                console.log('No'+i+this.name)
                console.log(this.skill[i]);
                console.log('--------------------')
            },0)
        }
    }
}
kk.sayName()