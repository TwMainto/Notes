"use strict";
cc._RF.push(module, '50a50CGgRJFw6vl97g4RZxC', 'gameScene');
// Script/gameScene.js

"use strict";

var componentSuper = require("componentSuper");
require("dataMgr");
var ROW = 10;
var LINE = 10;
var ITEM_SIZE = 66;
var SPRITE_NUM = 4; //种类数量(0-SPRITE_NUM)
var INIT_TAGER_SCORE = 1000; //初始目标分数
//获得随机整数
var getRandomInt = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//获得随机数(包括小数)
var getRandomArbitrary = function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};

cc.Class({
    extends: componentSuper,

    properties: {
        colorSprite1: cc.SpriteFrame,
        colorSprite2: cc.SpriteFrame,
        colorSprite3: cc.SpriteFrame,
        colorSprite4: cc.SpriteFrame,
        colorSprite5: cc.SpriteFrame,

        Bomb: cc.AudioClip,

        shopNode: cc.Prefab,

        boomSpriteArray: {
            default: [],
            type: cc.SpriteFrame
        }
    },
    initData: function initData() {
        this.itemNode = this.getNodeByName("itemNode");
        //是否允许点击
        this.isCanTouch = false;
        //当前点击的sprite的num
        this.touchSpriteNum = false;
        //道具数量
        var propCount = cc.sys.localStorage.getItem("propCount"); //从本地储存数据中那对应的值
        if (typeof propCount == "string") {
            propCount = parseInt(propCount);
        } else {
            propCount = 5;
        }
        this.propCount = propCount;
        //最高分
        var maxScore = cc.sys.localStorage.getItem("maxScore");
        if (typeof maxScore == "string") {
            maxScore = parseInt(maxScore);
        } else {
            maxScore = 0;
        }
        this.maxScore = maxScore;
    },
    initGameData: function initGameData() {
        //当前分数
        this.score = 0;
        this.bScore = 0;
        //当前关卡
        this.level = 1;
        //目标分数
        this.tagerScore = 0;
        this.tagerScore = this.getTagerScore();

        this.thisScore.string = this.score;
        this.levelText.string = this.level;
        this.tagerScoreText.string = this.tagerScore;
    },
    getTagerScore: function getTagerScore() {
        var score = INIT_TAGER_SCORE + (this.level - 1) * 200;
        score = Math.min(score, 3000);
        score = this.tagerScore + score;
        return score;
    },
    // use this for initialization
    onLoad: function onLoad() {
        console.log("aaaaa >>>>>>>>>>>> ");
        //适配处理,通过 缩放来调整适配。
        var size = cc.director.getWinSize(); //获取视图大小
        //console.log("size ... ",size)
        var scaleX = size.width / 660;
        dataMgr.scaleX = scaleX;
        var bg = this.getNodeByName("bg");
        this.bg = bg;
        bg.scaleX = scaleX;

        //注册所有按钮点击事件
        this.registerButtonTouchEvent(this.node);
        //注册触摸事件
        this.registerTouchEvent();

        //
        this.initData();
        //胜利节点
        this.winNode = this.getNodeByName("winNode");
        this.winNode.active = false;
        //失败节点
        this.failNode = this.getNodeByName("failNode");
        this.failNode.active = false;
        //关卡
        this.levelText = this.getNodeByName("textLevel").getComponent(cc.Label);
        //目标分数
        this.tagerScoreText = this.getNodeByName("tagerScore").getComponent(cc.Label);
        //当前分数
        this.thisScoreNode = this.getNodeByName("thisScore");
        this.thisScore = this.getNodeByName("thisScore").getComponent(cc.Label);
        //最高分数
        this.maxScoreText = this.getNodeByName("textScore").getComponent(cc.Label);
        this.maxScoreText.string = this.maxScore;
        //初始化游戏数据
        this.initGameData();
        this.sendItem();

        //物理返回键监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },
    addPropCallback: function addPropCallback() {
        this.propCount = this.propCount + 1;
        cc.sys.localStorage.setItem("propCount", this.propCount);
        this.propNumText.string = this.propCount;
    },
    onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
            case cc.KEY.back:
                //jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "onKeyDown","()V");
                cc.director.end();
                break;
        }
    },
    //所有按钮点击回调
    buttonTouchEvent: function buttonTouchEvent(event) {
        //这里的 event 是一个 EventCustom 对象，你可以通过 event.detail 获取 Button 组件
        var button = event.trage;
        var name = button.node.name;
        if (name === "button_continue") {
            //继续游戏
            this.continueGame();
        } else if (name === "button_restart") {
            //重新开始
            this.restartGame();
        }
    },
    //继续游戏
    continueGame: function continueGame() {
        this.winNode.active = false;
        this.level += 1;
        this.tagerScore = this.getTagerScore();
        this.levelText.string = this.level;
        this.tagerScoreText.string = this.tagerScore;

        this.sendItem();
    },
    //重新开始
    restartGame: function restartGame() {
        this.failNode.active = false;
        this.initGameData();
        this.sendItem();
    },

    sendItem: function sendItem() {
        this.itemList = [];
        this.touchItemList = [];
        var maxTime = 0;
        for (var i = 0; i < LINE; i++) {
            this.itemList[i] = [];
            var lineList = this.itemList[i];
            var lineTime = getRandomArbitrary(0, 0.4);
            for (var j = 0; j < ROW; j++) {
                var num = getRandomInt(0, SPRITE_NUM);
                var sprite = this.newSpriteByNum(num + 1);
                lineList[j] = sprite;

                var posX = ITEM_SIZE * 0.5 + i * ITEM_SIZE;
                var posY = ITEM_SIZE * 0.5 + j * ITEM_SIZE;
                sprite.x = posX;
                sprite.y = posY + ROW * ITEM_SIZE;

                sprite.num = num;
                sprite.pos = cc.p(posX, posY);

                var time = lineTime + j / ROW;
                var delayTime = cc.delayTime(time);
                var moveTo = cc.moveTo(0.5, cc.p(posX, posY));
                sprite.runAction(cc.sequence(delayTime, moveTo));

                if (time > maxTime) {
                    maxTime = time;
                }
                if (j === ROW - 1 && i === LINE - 1) {
                    var delTime = cc.delayTime(maxTime + 0.5);
                    var callFunc = cc.callFunc(function () {
                        this.isCanTouch = true;
                    }.bind(this));
                    this.node.runAction(cc.sequence(delTime, callFunc));
                }
            };
        };
    },

    newSpriteByNum: function newSpriteByNum(num) {
        var node = new cc.Node();
        node.parent = this.itemNode;
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = this["colorSprite" + num];

        return node;
    },
    removeItemByNum: function removeItemByNum(num) {
        for (var i = 0; i < this.itemList.length; i++) {
            for (var j = 0; j < this.itemList[i].length; j++) {
                if (this.itemList[i][j].num === num) {
                    this.touchItemList[this.touchItemList.length] = { line: i, row: j };
                }
            }
        }
        if (this.touchItemList.length > 0) {
            this.isCanTouch = false;
            this.setTouchState(true);
            this.propTextAction();
        }
    },
    newBoomAnimation: function newBoomAnimation(isBool) {
        var node = new cc.Node();
        node.parent = this.itemNode;
        node.addComponent(cc.Sprite);
        var animation = node.addComponent(cc.Animation);
        var clip = cc.AnimationClip.createWithSpriteFrames(this.boomSpriteArray, 25); //创建一个动画
        clip.name = "boom"; //设置动画名字
        animation.addClip(clip);
        var animState = animation.play(clip.name);
        animState.wrapMode = cc.WrapMode.Loop; //播放模式
        animState.repeatCount = 1; //循环次数
        //注册动画完成事件回调
        animation.on('finished', function () {
            node.destroy();
            if (isBool) {
                this.resetItemPos();
            }
        }.bind(this));

        return node;
    },
    setTouchState: function setTouchState(isRemoveOne) {
        if (this.touchItemList.length > 1 || isRemoveOne) {
            //cc.log(">>>>>>>>>有消除")
            this.touchItemList.sort(function (a, b) {
                return b.row - a.row;
            });
            for (var i = 0; i < this.touchItemList.length; i++) {
                var line = this.touchItemList[i].line;
                var row = this.touchItemList[i].row;
                var aniNode = this.newBoomAnimation(i === this.touchItemList.length - 1);
                aniNode.x = this.itemList[line][row].x;
                aniNode.y = this.itemList[line][row].y + 10;
                this.itemList[line][row].destroy();
                this.itemList[line].splice(row, 1);
            }
            for (var i = this.itemList.length - 1; i >= 0; i--) {
                if (this.itemList[i].length <= 0) {
                    this.itemList.splice(i, 1);
                }
            }
            var count = this.touchItemList.length;
            var addScore = count * count * 5;
            this.score = this.score + addScore;
            //this.resetItemPos();

            //播放音效
            cc.audioEngine.play(this.Bomb, false, 1);
        } else {
            this.isCanTouch = true;
        }
        this.touchItemList = [];
    },
    //闪烁动画
    itemTwinkle: function itemTwinkle(item, count) {
        var fadeOut = cc.fadeOut(0.2);
        var fadeIn = cc.fadeIn(0.2);
        var callFunc = cc.callFunc(function () {
            if (count > 0) {
                this.itemTwinkle(item, count - 1);
            } else {
                var aniNode = this.newBoomAnimation();
                aniNode.x = item.x;
                aniNode.y = item.y + 10;
                item.destroy();
            }
        }.bind(this));
        item.runAction(cc.sequence(fadeOut, fadeIn, callFunc));
    },
    //当前关卡结束
    levelEnd: function levelEnd() {
        var count = 0;
        for (var i = 0; i < this.itemList.length; i++) {
            for (var j = 0; j < this.itemList[i].length; j++) {
                count += 1;
                this.itemTwinkle(this.itemList[i][j], 2);
            }
        }

        var delayTime = cc.delayTime(1);
        var callFunc = cc.callFunc(function () {
            if (count <= 10) {
                var addScore = (10 - count + 1) * 100;
                this.score = this.score + addScore;
            }
            if (this.score >= this.tagerScore) {
                this.winNode.active = true;
            } else {
                this.failNode.active = true;
            }
        }.bind(this));
        this.node.runAction(cc.sequence(delayTime, callFunc));
    },
    getTouchItemList: function getTouchItemList(line, row) {
        if (this.itemList[line] && this.itemList[line][row] && this.itemList[line][row].num === this.touchSpriteNum) {
            this.itemList[line][row].touchState = true;
            this.touchItemList[this.touchItemList.length] = { line: line, row: row };
            //往右边递归
            if (this.itemList[line + 1] && this.itemList[line + 1][row] && !this.itemList[line + 1][row].touchState && this.itemList[line + 1][row].num === this.touchSpriteNum) {
                this.getTouchItemList(line + 1, row);
            }
            //往左边递归
            if (this.itemList[line - 1] && this.itemList[line - 1][row] && !this.itemList[line - 1][row].touchState && this.itemList[line - 1][row].num === this.touchSpriteNum) {
                this.getTouchItemList(line - 1, row);
            }
            //往上边递归
            if (this.itemList[line][row + 1] && !this.itemList[line][row + 1].touchState && this.itemList[line][row + 1].num === this.touchSpriteNum) {
                this.getTouchItemList(line, row + 1);
            }
            //往下边递归
            if (this.itemList[line][row - 1] && !this.itemList[line][row - 1].touchState && this.itemList[line][row - 1].num === this.touchSpriteNum) {
                this.getTouchItemList(line, row - 1);
            }
        }
    },
    //清空当前item状态
    clearItemState: function clearItemState() {
        this.touchItemList = [];
        for (var i = 0; i < this.itemList.length; i++) {
            for (var j = 0; j < this.itemList[i].length; j++) {
                this.itemList[i][j].touchState = false;
            }
        }
    },
    //判断是否还有东西可以移除
    isCanRemoveItem: function isCanRemoveItem() {
        for (var i = 0; i < this.itemList.length; i++) {
            for (var j = 0; j < this.itemList[i].length; j++) {
                this.touchSpriteNum = this.itemList[i][j].num;
                this.getTouchItemList(i, j);
                if (this.touchItemList.length >= 2) {
                    this.clearItemState();
                    return true;
                }
                this.clearItemState();
            }
        }
        this.clearItemState();
        return false;
    },
    resetItemPos: function resetItemPos() {
        for (var i = 0; i < this.itemList.length; i++) {
            for (var j = 0; j < this.itemList[i].length; j++) {
                this.itemList[i][j].touchState = false;

                var posX = ITEM_SIZE * 0.5 + i * ITEM_SIZE;
                var posY = ITEM_SIZE * 0.5 + j * ITEM_SIZE;

                var moveTo = cc.moveTo(0.2, cc.p(posX, posY));
                this.itemList[i][j].runAction(moveTo);
            }
        }
        var delayTime = cc.delayTime(0.3);
        var callFunc = cc.callFunc(function () {
            if (this.isCanRemoveItem()) {
                this.isCanTouch = true;
            } else {
                this.levelEnd();
            }
        }.bind(this));
        this.node.runAction(cc.sequence(delayTime, callFunc));
    },

    touchBegan: function touchBegan(event) {
        var pos = event.getLocation();
        var line = Math.floor(pos.x / (ITEM_SIZE * dataMgr.scaleX));
        var row = Math.floor(pos.y / ITEM_SIZE);
        //cc.log(">>>>>>>>>>>this.isCanTouch",this.isCanTouch)
        if (this.isCanTouch && this.itemList[line] && this.itemList[line][row]) {
            //cc.log(">>>>>>>>>>>>>line,row",line,row)
            this.isCanTouch = false;
            this.touchSpriteNum = this.itemList[line][row].num;
            this.getTouchItemList(line, row);
            this.setTouchState();
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        //分数增加处理
        if (this.bScore < this.score) {
            this.bScore += 5;
            this.thisScore.string = this.bScore;
        }
        //当前分数颜色处理
        if (this.score >= this.tagerScore) {
            this.thisScoreNode.color = cc.Color.GREEN;
        } else {
            this.thisScoreNode.color = cc.Color.WHITE;
        }
        //最高分处理
        if (this.score > this.maxScore) {
            this.maxScore = this.score;
            this.maxScoreText.string = this.maxScore;
            cc.sys.localStorage.setItem("maxScore", this.maxScore);
        }
    }
});

cc._RF.pop();