/*(function()
{
	var doSomething=function(){
		console.log("doSomething() executed");
	setTimeout(doSomething,2000);
	};

var timer=setTimeout(doSomething,2000);
alert("hello");
}());
*/
/*(function()
{
	var i=0;
	var doSomething=function(){
		console.log("doSomething() executed");
	i=i+1;
	if(i>9){
	clearInterval(timer);
	}};

var timer=setInterval(doSomething,2000);
alert("hello");
}());*/
/*(function()
{
	var i=0,speed=10;
	var moveBox=function(){
		var el=document.getElementById("box"),
		left=el.offsetLeft,moveBy=3;
el.style.left=left+moveBy+"px";
if(left>399)
clearTimeout(timer);
};
var timer=setInterval(moveBox,speed);
alert("hello");
}());*/
(function()
{
	var i=0,speed=10;
	var moveBox=function(moveBy){
		var el=document.getElementById("box"),
		left=el.offsetLeft;
		if((moveBy>0&&left>399)||(moveBy<0 &&left<51))
		{
			clearTimeout(timer);
			timer=setInterval(function(){
				moveBox(moveBy*-1);
			},speed);

		} 
el.style.left=left+moveBy+"px";
};
var timer=setInterval(function(){
	moveBox(3);},speed);
}());