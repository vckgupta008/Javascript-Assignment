var obj="This is a string object.",
	length=obj.length; //24

var index=obj.indexOf("is"); //2
var index2=obj.indexOf("is",index+1); //5
var index3=obj.indexOf("this"); //-1
var index4=obj.lastIndexOf("is");//5
var index5=obj.substr(index4,7);//is a st
var substring=obj.substring(0,4);//This
var newString=obj.replace("object","value");//This is a string value.
var upper=obj.toUpperCase();
var lower=obj.toLowerCase();
alert(index);
alert(index2);
alert(index3);
alert(index4);
alert(index5);
alert(newString);
alert(obj);
alert(lower+upper);
