let x= parseInt(prompt("Enter a number"))

let isprime = true;

if(x===0 || x===1)
{
    document.write(x +"is neither prime nor not prime number"+"<br>");
}

else if(x>1)
{
    //we compare each number that it's remainder is zero or no till n-1 stating from 2 

    for(let i=2;i<x;i++)
    {
        if(x%i==0)
        {
           isprime=flase;
            break;
        }
    }
    if(isprime)
    {
        document.write(x+ ": is a prime number ");

    }
    else
    {
        document.write(x +": is not a prime number");
    }
}
