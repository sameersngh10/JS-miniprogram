let num = prompt("enter the number");

document.write("Table of "+ num +"<br>");

for(let i=1;i<=10;i++){
		result= num*i;
    document.write(num+  " * "  + i+ "= "+ result+"<br>")
}