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
        bullet: cc.Prefab,
        hero: cc.Node,
        rate: cc.Integer,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //调用对象池
        this.genBulletPool();
        //设置定时器，每0.2s创建一个新的bullet
        this.schedule(function(){
            this.startShoot(this.bulletPool)
        }.bind(this),this.rate);
    },

    //创建100个bullet预制节点
    genBulletPool: function () {
        this.bulletPool = new cc.NodePool();
        let initCount = 100;
        for (let i = 0; i < initCount; ++i){
            //创建节点
            let newBullet = cc.instantiate(this.bullet);
            //通过putInPool接口放入对象池
            this.bulletPool.put(newBullet);
        }
    },

    //获取子弹位置
    getBulletPosition: function(){
        //获取hero位置
        let heroP = this.hero.getPosition();
        let newX = heroP.x;
        let newY = heroP.y;
        return cc.p(newX,newY);
    },

    //发射子弹
    startShoot: function(pool){
        let newNode = null;
        if (pool.size() > 0){
            newNode = pool.get();
            this.node.addChild(newNode);
            let p = this.getBulletPosition();
            newNode.setPosition(p);
        }
    },

    //销毁子弹
    destroyBullet: function (bullet){

    },
    start () {

    },

    // update (dt) {},
});
