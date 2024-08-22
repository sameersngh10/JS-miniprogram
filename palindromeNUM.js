// Using Function

// let x=prompt("enter a number or string")
// let array_x= x.split('');

// let rev_array=array_x.reverse('');
// let new_x= rev_array.join('');
 
// if(x==new_x)
// {
//     document.write(x+":"+"it is a palindrome");
// }
// else
// {
//     document.write(x+":"+"It is not a palindrome")
// }

let number = prompt("Enter a number or a string");

document.write(number);

let num_length =number.length
document.write(num_length);

//if lenght of the string is lest than 0 it will return false
// if(num_length<0)
// {
//     return false
// }
// to check the lenght of the string by breaking it from middle
for(let i=0;i<num_length/2;i++)
{
        
}
if(number[i]!=number[num_length-1-i]){
    document.write("Not a palindrome");
}
else{
    document.write(number,"given value is a palindrome");
}