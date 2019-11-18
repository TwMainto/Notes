

cc.Class({
    extends: cc.Component,

    properties: {

        fish: cc.Node,
        bg: cc.Node,
        clock: cc.Node,
        
    },

    moveoo(){
        //执行动画时，记得执行 stopAllActions() 停止并且移除所有正在运行的动作列表。
        // this.fish.stopAllActions();
        // var mto = cc.moveBy(3,cc.v2(200,200));//moveTo 移动到指定位置
        // this.fish.runAction(mto);
        // var rby = cc.rotateBy(3,3600);  // 旋转指定角度
        // this.fish.runAction(rby);
    },


    start () {
        // var mby = cc.moveBy(2,cc.v2(200,200));//moveBy 移动指定距离
        // this.fish.runAction(mby);
        // var rto = cc.rotateTo(2,180); // 旋转到某个角度
        // this.fish.runAction(rto);
        this.bg.on(cc.Node.EventType.MOUSE_DOWN, function(event){
            // this.opacity = 100;

            cc.log("进入事件 ... ");
            var deltax = event.getLocation();
            cc.log("delta ... ",deltax)
            //var deltay = event.getLocationY;
            this.x = deltax.x -640;
            cc.log("x ... ",deltax.x,this.x)
            this.y = deltax.y - 360;
            cc.log("y ... ",deltax.y,this.y)
        },this.fish);
        cc.log("node ... ",this.bg);
    },

    

    update(dt){

    },


    onLoad(){
        this.time =0;
        this.startTime();
    },
    startTime() {
        var self = this;
        var oDay = new Date();
        var month = oDay.getMonth()+1;
        var time = oDay.getFullYear()+"年 - "+month+"月 - "+oDay.getDate()+"日 - "+oDay.getHours()+" : "+oDay.getMinutes()+" : "+oDay.getSeconds();
        this.clock.getComponent(cc.Label).string = String(time);
        setTimeout(function () {
            self.startTime();
        }, 1000)
    },
    
    checkTime(i) {
        if (i<10) {
            i = "0" + i;
        }
        return i;
    },


});
