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
		console.log(i);
		data.books[i]['id'] = (+i+1);
	}
	setTimeout(function(){
		console.log(data);
	},1000);

	// 初始化id
	if(!cgetdata('id')){
		var a = changeid();
		csetdata('id',a);
		console.log('设置id'+a);
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

function sendfirend(fid,pid){
	var a = "075851282781";
	var p = 10;
	var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	var b = [];
	for(var i=0;i<21;i++){
		b[i] = str[cr(0,str.length)]
	}
	b[3] = a[3];
	b[6] = a[6];
	b[9] = a[9];
	console.log(b.join(''));

}
sendfirend();
