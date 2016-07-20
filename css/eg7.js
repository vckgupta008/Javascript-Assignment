(function(){
	var el=document.getElementById("box");
	el.onclick=function(){
		this.style.backgroundColor="red";
	};
}());


/*(function(){
var buttons=document.getElementsByTagName("a");
var buttonclick=function(evt){
	var target=getTarget(evt),
	className=target.innerHTML.toLowerCase();

	preventDefault(evt);
	document.body.className=className

};
for(var i=0,len=buttons.length;i<len;i++)
{
	addEvent(buttons[i],"click",buttonclick);
}


}());*/
/*(function(){
var mouseHandler=function(evt){
	var target=eventUtility.getTarget(evt),
		classData=target.getAttribute("data-body-class");
	if(classData)
	{
		eventUtility.preventDefault(evt);
		if(evt.type==="click")
			document.body.className="";
		else
			document.body.className=classData;
	}
};
var random =function(evt){
	var target=eventUtility.getCallingElement(evt);

	alert(target);
	};

var el=document.getElementById("norml");
eventUtility.addEvent(el,"click",random);
eventUtility.addEvent(document,"click",random);
/*eventUtility.addEvent(document,"click",mouseHandler);
eventUtility.addEvent(document,"mouseover",mouseHandler);*/
//}());*/