function isEven(number){
    if(number%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(5));
console.log(isEven(120));

//we can do this same code in a different way

function isEven(number){
    if(number%2==0){
        return true;
    }return false;
}
console.log(isEven(5));
console.log(isEven(120));