function cr(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function csetdata(key,value){
    console.log('已设置数据');
    localStorage.setItem(key,value);
}
function cgetdata(key){
    return localStorage.getItem(key);
    console.log('已读取数据');
    
}
function cdeldata(key){
    localStorage.removeItem(key);
    console.log('已删除数据');
    
}