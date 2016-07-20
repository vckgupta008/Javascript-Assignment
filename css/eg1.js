var doSomething=function(param1,param2,fn)
{
	param1=param1+3+1;
	param1=param1*8;
	return fn(param1,param2);
};
function sum(param1,param2)
{
	return param1+param2;
}

var foo= doSomething(2,2,sum);//96
var bar=doSomething(3,2, function(param1,param2)
	{
		return param1*param2;
	});

alert(foo);//96
alert(bar);//112

/*------------------------------------------*/

var globalVar="this is a global variable";

var globalFunction=function()
{
	alert(globalVar);
	globalVar="Value has been motified ";
};
globalFunction();
alert(globalVar);

var globalVar="this is a global var";
var globalFunction=function (param1)
{
	alert("2");
	var localVar="this is a local variable";
	var localFunction=function()
	{
		var superLocalVar="hello world";
		alert(superLocalVar);
		alert(localVar);
		alert(param1);
		alert(globalVar);
	};
	localFunction();
};
alert("1")
globalFunction(5);