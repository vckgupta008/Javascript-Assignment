/*use strict;
var a = null;
var b = undefined;
if (a == b) {
  console.log("Null and Undefined are same");
} 
if (a === b) {
  console.log("Null is not same as undefined");
}*/
(function(){
	var divFoo=document.getElementById("foo");
	style=divFoo.style;
/*
	style.color="blue";
	style.border="1px solid black";
	style.backgroundColor="yellow";*/
divFoo.className="css-class css-class2";
//divFoo.classList.toggle("css-class");
//divFoo.classList.remove("css-class");
//divFoo.classList.add("css-class");
var color=window.getComputedStyle(divFoo,null).getPropertyValue("color");
//var color=divFoo.currentStyle["color"]; doesnt work in chrme 
alert(color);
}());