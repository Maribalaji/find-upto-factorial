var n=prompt("Enter the factorial number");
var fact=1;
for(let i=1;i<=n;i++)
{
	fact=i*fact;
	document.write(fact);
	document.write("<br>");
}