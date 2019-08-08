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
        speed: cc.Integer,
        // bullet: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //克隆当前脚本绑定节点
        // this.newnode = cc.instantiate(this.node);
        // this.node.addChild(this.newnode);
        // this.newNode.setPosition({x:0,y:0});
    },

    start () {

    },

    update (dt) {
        this.node.y += dt * this.speed
        if(this.node.y > this.node.parent.height){
            this.bulletGroup.bulletPool.put(this.node);
        }
    },
});
