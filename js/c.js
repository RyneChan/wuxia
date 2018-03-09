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