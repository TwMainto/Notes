"use strict";
cc._RF.push(module, '54848cmx7JH07pIHi6D/WYB', 'componentSuper');
// Script/componentSuper.js

"use strict";

var componentSuper = cc.Class({
    extends: cc.Component,
    ctor: function ctor() {

        //事件列表
        this.eventList = [];
    },
    //注册所有按钮点击事件
    registerButtonTouchEvent: function registerButtonTouchEvent(node) {
        var child = node.children;
        if (child.length > 0) {
            for (var i = 0; i < child.length; i++) {
                var childNode = child[i];
                var name = childNode.name;
                if (name.slice(0, 3) === "btn" || name.slice(0, 6) === "button") {
                    if (this.buttonTouchEvent) {
                        //把function转Boolean 得到 True
                        //在节点上注册指定类型的回调函数
                        childNode.on('click', this.buttonTouchEvent, this);
                    }
                }
                //cc.log(">>>>>>>>>>>>>>子节点数量",childNode.children.length);
                if (childNode.children.length > 0) {
                    this.registerButtonTouchEvent(childNode);
                }
            }
        }
    },
    //获取对象
    getNodeByName: function getNodeByName(name, node) {
        var node = node ? node : this.node;
        if (node.name === name) {
            return node;
        }
        var children = node.children;
        if (children.length) {
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                var child_name = child.name;
                if (child_name === name) {
                    return child;
                }
                var next_child = this.getNodeByName(name, child);
                if (next_child) {
                    return next_child;
                }
            }
        }
        return null;
    },
    //注册触摸事件
    registerTouchEvent: function registerTouchEvent() {
        //event.getLocationX()
        //event.getLocationY()
        var node = this.node;
        var size = cc.director.getWinSize();
        node.width = size.width;
        node.height = size.height;
        //触摸开始
        var touchBegan = function touchBegan(event) {
            event.stopPropagation();
            if (this.touchBegan) {
                this.touchBegan(event);
            }
        };
        node.on(cc.Node.EventType.TOUCH_START, touchBegan, this);
        //触摸移动
        var touchMove = function touchMove(event) {
            event.stopPropagation();
            if (this.touchMove) {
                this.touchMove(event);
            }
        };
        node.on(cc.Node.EventType.TOUCH_MOVE, touchMove, this);
        //触摸结束
        var touchEnded = function touchEnded(event) {
            event.stopPropagation();
            if (this.touchEnded) {
                this.touchEnded(event);
            }
        };
        node.on(cc.Node.EventType.TOUCH_END, touchEnded, this);
        //触摸离开屏幕
        var touchCancel = function touchCancel(event) {
            event.stopPropagation();
            if (this.touchCancel) {
                this.touchCancel(event);
            }
        };
        node.on(cc.Node.EventType.TOUCH_CANCEL, touchCancel, this);
    },
    //创建预制资源
    createPrefab: function createPrefab(prefab, parent) {
        if (!prefab) return;
        var parent = parent ? parent : this.node;
        var prefab = cc.instantiate(prefab);
        prefab.parent = parent;
        return prefab;
    },
    //添加监听事件
    addEvent: function addEvent(name, callback) {
        this.eventList[this.eventList.length] = { name: name, callback: callback };
        cc.systemEvent.on(name, callback, this);
    },
    //派发事件
    dispatchEvent: function dispatchEvent(name, params) {
        var eventCustom = new cc.Event.EventCustom(name, true);
        eventCustom.setUserData(params);
        cc.systemEvent.dispatchEvent(eventCustom);
        //event参数说明 
        //event.type:事件名字
        //event.bubbles:表示该事件是否进行冒泡。
        //event.setUserData:设置事件参数
        //event.getUserData:获取事件参数
    },
    onDestroy: function onDestroy() {
        //关闭事件
        for (var i = 0; i < this.eventList.length; i++) {
            var eventData = this.eventList[i];
            cc.systemEvent.off(eventData.name, eventData.callback, this);
        }
    }

});

module.exports = componentSuper;

cc._RF.pop();