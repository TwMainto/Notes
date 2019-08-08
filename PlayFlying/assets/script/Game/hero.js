// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //监听拖动事件
        this.onDrag();
    },

    //拖动监听
    onHandleHeroMove:function(event){
        let position = event.getLocation();
        let location = this.node.parent.convertToNodeSpaceAR(position);
        this.node.setPosition(location);
    },
    //添加拖动监听
    onDrag: function (){
        this.node.on('touchmove',this.onHandleHeroMove,this);
    },
    //去掉拖动监听
    offDrag: function () {
        this.node.off('tuochmove',this.onHandleHeroMove,this);
    },


    start () {

    },

    // update (dt) {},
});
