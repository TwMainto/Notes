window.dataMgr = {}
dataMgr.scaleX = 0

window.g_goodsData = cc.sys.localStorage.getItem("goodsData");
if (typeof(g_goodsData) == "string"){
    g_goodsData = JSON.parse(g_goodsData);
}else{
    g_goodsData = {};
}

window.stringToObj = function(str){
	var obj = {}
	if (str){
		var sList = str.split(";")
		for (var i = 0 ; i < sList.length ; i++){
			var sArray = sList[i].split(":");
			obj[sArray[0]] = sArray[1];
		}
	}
	return obj;
}

window.g_sdkState = false;
window.g_infoStr = false

window.g_addPropState = false

window.g_goodsInitData = false
window.g_GoodsTable = false
//购买成功回调
dataMgr.addProp = function(str){
	g_infoStr = str;
    g_addPropState = true;
}

//sdk初始化成功
dataMgr.initSDK = function(){
	g_sdkState = true;
}

//保存购买信息
dataMgr.saveBuyInfo = function(str){
	var obj = stringToObj(str);
	g_goodsData[obj.TradeNo] = obj.ThirdAppId;
	cc.sys.localStorage.setItem("goodsData",JSON.stringify(g_goodsData));
}

dataMgr.initGoodsData = function(str){
    g_goodsInitData = str
    cc.log(">>>>>>g_goodsInitData",g_goodsInitData)
}

dataMgr.exitGame = function(){
    cc.director.end();
}
