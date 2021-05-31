//No of ways to travel from start to end in a grid
const gridTravasal = (m,n,memo={})=>{
    let key = m + ',' +n;
    if(key in memo){
        return memo[key];
    }
    if(m == 0 || n==0){
        memo[key]=0;
    }
    else if(m==1 && n==1){
        memo[key]=1;
    }
    else {
        memo[key]= gridTravasal(m-1,n,memo) + gridTravasal(m,n-1,memo);
    }
    return memo[key];
}

console.log(gridTravasal(2,3))