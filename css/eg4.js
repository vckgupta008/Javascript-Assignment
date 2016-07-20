/*(function(){ 

var pElements=document.getElementsByTagName("p");//nodelist ans 4

alert(pElements.length);
   }());*/

/*
(function(){

var pElements=document.querySelectorAll("p");//nodelist//ans 5
var pElements2=document.querySelectorAll("div p");// ans is 1 if multiple <div> > <p> den ans is number of div p
var pElements3=document.querySelector("#foo");
alert(pElements3.parentNode.tagName);
alert(pElements.length);
alert(pElements2.length);
   }());

*/
/*(function()
{
	var pElements=document.getElementsByTagName("P");
	alert(pElements.length);//5

	var e1=document.createElement("p");
	document.body.appendChild(e1);
	alert(pElements.length);//6
}());


(function(){
	var pElements=document.querySelectorAll("p");
	alert(pElements.length);//5

	var e1=document.createElement("p");
	document.body.appendChild(e1);
	pElements=document.querySelectorAll("p");

	alert(pElements.length);//6
}());

*/


/*(function()
{
	var e1=document.createElement("p"),
	content=document.createTextNode("<strong>This is created Dynamically</strong>");
	e1.appendChild(content);
	e1.setAttribute("align","center");
	e1.id="bar";
	document.body.appendChild(e1);


}());*/
//(function()
//{
//	var doc=document;
//	var e1=doc.createElement("p"),
	/*content=doc.createTextNode("this is Dynamically created"),*/
//	pFoo=doc.getElementById("foo");
//	e1.innerHTML="<strong>this is Dynamically created</strong>";

	/*e1.appendChild(content);*/
//	e1.id="bar";
	
	//pFoo.parentNode.appendChild(e1);insert into div
	//pFoo.parentNode.insertBefore(e1,pFoo);insert before pfoo
//	pFoo.parentNode.replaceChild(e1,pFoo);//replace pfoo with e1 
//	var html=e1.innerHTML;
//	html=html+"<br/> this was too";
//	html=html+"<br/> this was too2";
//	html=html+"<br/> this was too3";
	
//	e1.innerHTML=html;



//}());

(function()
{
	var doc=document,
	pFoo=doc.getElementById("foo");

	var html=pFoo.innerHTML;
	html=html+"<br/> this was too";
	html=html+"<br/> this was too2";
	html=html+"<br> this was too3";
	pFoo.innerHTML=html;
}());