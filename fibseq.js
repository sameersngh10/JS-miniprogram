// js program to print fibonacci series 

let x=0;
let y=1;
let length=parseInt(prompt("Enter the number of terms of fibonacci sequence"));

if(length<=0)
{
    document.write("Enter a valid length")
}

if(length==1)
{
    document.write("fib series having 1 term :", x);

}
else{
    for(let i=1; i<=length;i++)
    {
        document.write(" "+x+" ");
        
        let result= x+y;
        x=y;
        y=result;

        
    }
}