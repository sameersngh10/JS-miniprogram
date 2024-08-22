// program for string or array

let is_array= function(input){
    // using toString method to get the class of the input and checking if it is "[object Array]" object array
    if(toString.call(input)==="[Object Array]"){
        return true;
    }
    else{
        return false;
    }
}

console.log(is_array("sameer"));

console.log(is_array([1,2,3,4,5]));
