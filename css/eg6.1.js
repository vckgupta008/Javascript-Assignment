
/*changes style property using buttons and anchors*/
(function(){
	var buttons=document.getElementsByTagName("button");
	var a=document.getElementsByTagName("a");
	
/* for chrome and mozilla doesnt wrk on i8 or below*/
	/*var buttonClick=function(evt){
		var className=this.innerHTML.toLowerCase();
		alert(evt.target);
		evt.preventDefault();
		//alert(this);
	document.body.className=className;
	};	

	for(var i=0,len=buttons.length;i<len;i++)
	{
		buttons[i].addEventListener("click",buttonClick,false);
		buttons[i].addEventListener("click",function(){alert("hi");},false);
	//buttons[i].removeEventListener("click",buttonClick,false);
	}
	for(var i=0,len=buttons.length;i<len;i++)
	{
		a[i].addEventListener("click",buttonClick,false);
		a[i].addEventListener("click",function(){alert("hi");},false);
	//buttons[i].removeEventListener("click",buttonClick,false);
	}*/
	var buttonClick=function(evt){
		var className=event.srcElement.innerHTML.toLowerCase();

		event.returnValue=false;
		
	document.body.className=className;
	};


	for(var i=0,len=a.length;i<len;i++)
	{
		a[i].attachEvent("onclick",buttonClick);

	}
	for(var i=0,len=buttons.length;i<len;i++)
	{
		buttons[i].attachEvent("onclick",buttonClick);

	}
}());

