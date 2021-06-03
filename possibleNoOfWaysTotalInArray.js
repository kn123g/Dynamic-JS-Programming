const possibleSumArray = (n,array,memo={})=>{
    let key = n;
    if(key in memo){
        return memo[key];
    }
    if(n<0){
        memo[key]= 0;
    }
    else if(n===0){
        memo[key]= 1;
    }
    else if(n>1){
        let sum =0;
        array.forEach(element => {
            sum =sum +possibleSumArray (n-element,array,memo);
        });
        memo[key]= sum;
    }
    else{
        memo[key]= 0 ;
    }
    return memo[key];
}
console.log(possibleSumArray(7,[2,3]))
console.log(possibleSumArray(7,[5,3,4,7]))
console.log(possibleSumArray(7,[2,4]))
console.log(possibleSumArray(8,[2,3,5]))
console.log(possibleSumArray(300,[7,14]))
