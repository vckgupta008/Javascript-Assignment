
var person=new Object();

person.firstName="Vicky";
person.LastName="Gupta";
person.fullName=function() 
{	
	return this.firstName + " " + this.LastName;
};
alert(person.fullName());

/*-------------------------------------------------------------*/

var person={
	firstName : "Vicky",
	LastName : "Gupta",
	fullName : function()
	{
		return this.firstName + " " + this.LastName;
	}
};
alert(person.fullName());
/*-------------------------------------------------------------*/
var foo=new Array();
var foo=[11,"hello",true];

var value=foo[0];//11
foo[0]=10;
foo[3]=12;
foo[foo.length]="a new value";
foo.push(11);

/*-------------------------------------------------------------*/

var names=["vicky","Gupta"],names2=["biswa","saha"];
var people=names.concat(names2);
var joined=people.join(", ");
var rev=people.reverse();
alert(people);
alert(joined);
alert(rev);
/*-------------------------------------------------------------*/
var names=["viki","gupta","niki","riki"];

for(var i=0;i<names.length;i++)
{
	alert(names[i]);
}

while(names.length)
{
	alert(names.pop());
}
/*-------------------------------------------------------------*/
(function()
{
	if(confirm("Do you want to stay"))
	{
		alert("thank you for staying");
		location="http://www.google.com";
	}
	else
	{
		alert("leave then");
	}
}());


/*-------------------------------------------------------------*/


