function addIt() {
    var x = document.getElementById('input').value;
    var y=localStorage.length;
    return localStorage.setItem(y,x)+window.location.reload();


}
function jibli() {
    var y=[]
    for(let i=0;i < localStorage.length;i++){
   y.push(localStorage.getItem(i))
}
document.getElementById("show").innerHTML=y
}
function tfasakh() {
var y= localStorage.length;
localStorage.removeItem(y-1);
document.getElementById("delete").innerHTML='';
}
function tfasakhkolchay(){
    localStorage.clear();
    document.getElementById("clear").innerHTML='';
}
