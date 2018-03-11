// 设置随机数
function cr(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
// 本地存储保存
function csetdata(key,value){
    console.log('已设置数据');
    localStorage.setItem(key,value);
}
// 本地读取
function cgetdata(key){
    return localStorage.getItem(key);
    console.log('已读取数据');
}
// 本地删除
function cdeldata(key){
    localStorage.removeItem(key);
    console.log('已删除数据');
}
// json转str
function Json2Str(o) {
	var arr = [];
	var fmt = function(s) {
	if (typeof s == 'object' && s != null) return Json2Str(s);
		return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
	}
	for (var i in o) arr.push("'" + i + "':" + fmt(o[i]));
	return '{' + arr.join(',') + '}';
}
// str转json
function str2Json(str){ 
	var json = (new Function("return " + str))(); 
	return json; 
	
}
// arr转str
function arr2str(arr,space){
	var a = arr;
	var b = [];
	for(var i in a){
		if(typeof a[i]=='object'){
			b.push(Json2Str(a[i]));
		}else{
			b.push(a[i]);
		}
	}
	var point;
	if(space == undefined){
		point = "$cCtV@$";
	}else{
		point= space;
	}
	return b.join(point);
}
// str转arr
function str2arr(str,space){
	var point;
	if(space == undefined){
		point = "$cCtV@$";
	}else{
		point= space;
	}
		var d = str.split(point);
		var e = [];
		for(var j in d){
			var dd = d[j];
			var f = str2Json(dd);
			e.push(f);
		}
		return e;
}
// 检查背包用。list为传入的物品对象，lists为背包数组，num是数量
// 接受的回调是新的背包数组
function cheakbag(list,lists,num){
	var newlists = lists;
	for(var item in lists){
		if(lists[item].name == list.name){
			var nnum = 1;
			if(num){
				nnum = num;
			}
			lists[item].num =lists[item].num+nnum ;
			return newlists;
		}
	}
}
start();
// 初始化
function start(){
	for(var i in data.books){
		data.books[i]['id'] = (+i+1);
	}
	// setTimeout(function(){
	// 	console.log(data);
	// },1000);

	// 初始化id
	if(!cgetdata('id')){
		var a = changeid();
		csetdata('id',a);
		console.log('设置id'+a);
	}
	if(!cgetdata('money')){
		csetdata('money',100);
	}
	if(!cgetdata('username')){
		csetdata('username','无名氏');
	}

}


console.log(cgetdata('id'));

// 设置id
function changeid(){
	var a =0;
	for(var i=0;i<11;i++){
		a+=cr(0,9).toString();
	}
	return a;
}
var iiid = '';
function sendfirend(fid,pid){
	// var a = "066214031991";
	var a = fid;

	// var p = 21;
	var p = pid;
	var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var b = [];
	for(var i=0;i<41;i++){
		b[i] = str[cr(0,str.length-1)]
	}
	var wei = cr(1,4);
	// console.log('wei',wei)
	
	b[wei] = a[wei];
	b[wei*2] = a[wei*2];
	b[wei*2+1] = a[wei*2+1];
	b[28] = wei;
	var wei1 =cr(31,40);
	// console.log('wei1',wei1)
	b[29] = str[wei1]
	// console.log('wei29',str[wei1])
	
	b[wei1] = p.toString(16);
	// var www = 'a';
	// console.log(p.toString(16))
	// console.log(parseInt(www,16))
	// console.log(b.join(''));
	iiid = b.join('');
	return iiid;
}
sendfirend('066214031991',21);

var aasd = hasfirend('066214031991',iiid)
// console.log(aasd)
function hasfirend(uid,code){
	// var uid =  "066214031991";
	// var code = 'Pbs2Id0dW9rO8eExjAp5CEX1Mkqz3kHqSIDK15EvrW';
	var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	var wei = code[28];
	if(code[wei]==uid[wei]){
		if(code[wei*2]==uid[wei*2]){
			if(code[wei*2+1]==uid[wei*2+1]){
				var a = str.indexOf(code[29]);
				var h = '';
				// console.log('29wei'+code[29])
				// console.log('a'+a)
				for(let i=0;i<code.length-40;i++){
					h = h+code[(a+i)];
				}
				return parseInt(h,16)
			}else{
				console.log('验证失败');
			}
		}else{
			console.log('验证失败');
		}
	}else{
		console.log('验证失败');
	}
}

var goods = {n10:1,n12:1};
var user = {energy:100,lvl:1,power:50,damage:15,name:'ryne'};
var enemy = {energy:100,lvl:1,power:50,damage:2,name:'甲虫'};
fightMessageArr(user,enemy);
// 战斗描述，返回战斗描述arr
function fightMessageArr(user,enemy){
	var ue = user.energy;
	var ul = user.lvl;
	var up = user.power;
	var ud = user.damage;
	var ee = enemy.energy;
	var el = enemy.lvl;
	var ep = enemy.power;
	var ed = enemy.damage;
	var exp = enemy.exp;
	var goods = enemy.goods;
	var retmsg = {};
	retmsg.msg = [];
	if(ud>ee){
		// 攻击大于敌人的血量，秒杀
		retmsg.time =1;
		b = {};
		b.userstatemsg = '看起来气血盈盛，丝毫不害怕。';
		b.enemystatemsg = '看起来毫无气息。';
		b.fightmsg =  enemy.name+'被你一招杀死了。大侠果然厉害！';
		retmsg.msg.push(b);
		retmsg.exp = exp;
		retmsg.goods = enemyGoods(goods);
		return retmsg;
	}else if(ed>ue){
		// 血量小于敌人的伤害，被敌人秒杀
		retmsg.time =1;
		b = {};
		b.enemystatemsg = '看起来气血盈盛，丝毫不害怕。';
		b.userstatemsg = '看起来毫无气息。';
		b.fightmsg =  '你被'+enemy.name+'一招杀死，胜败乃兵家常事，大侠请重新再来。';
		retmsg.msg.push(b);
		retmsg.exp = -100;
		return retmsg;
	}
	var hpstate = ['看起来气血盈盛，丝毫不害怕。','看起来不太灵光，好像随时会倒下。','看起来身受重伤，鲜血直流。','看起来奄奄一息，随时都会倒下。','看起来毫无气息。'];
	var huihe = Math.ceil(ee/ud);
	console.log(huihe);
	fight();
	function fight(user,enemy){
		if(huihe>0){
			console.log(huihe);
			


			huihe--;
			fight();
		}else{
			return;
		}
	}

	

}


// 筛选物品种类
function changeType(data,type){
	var newarr = [];
	for(var i in data){
		if(data[i].type ==type){
			newarr.push(data[i]);
		}
	}
	return newarr;
}

// 掉落物品计算  返回一个数组。代表物品id,注意，返回的是一个number
function enemyGoods(goods){
	var newarr = [];
	for(var i in goods){
		if(cr(0,goods[i])==0){
			newarr.push(+i.slice(1));
		}
	}
}
// enemyGoods(goods);