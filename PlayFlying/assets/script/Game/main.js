// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
let pause = false;

cc.Class({
    extends: cc.Component,

    properties: {
        pause: cc.Button,
        scoreDisplay: cc.Label,
        bombAmout: cc.Label,
        bombDisplay: cc.Node,
        pauseSprite:{
            default:[],
            type: cc.SpriteFrame,
            tooltip: '暂停按钮图片组'
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.schedule(function(){
            cc.log ("我是定时器")
        },1)
    },

    //暂停切换图片
    onStopScript: function (){
        if (pause) {
            this.pause.normalSprite = this.pauseSprite[0];
            this.pause.pressedSprite = this.pauseSprite[2];
            this.pause.hoverSprite = this.pauseSprite[1];
            return pause = !pause
        }
        this.pause.normalSprite = this.pauseSprite[2];
        this.pause.pressedSprite = this.pauseSprite[0];
        this.pause.hoverSprite = this.pauseSprite[3];
        return pause = !pause
    },

    start () {

    },

    // update (dt) {},
});
