memo={};
    const fiba =(n)=>{
    if(n in memo){
        //console.log(true)
        return  memo[n];
    }else if(n==0 )
    {
        memo[n]=0 ;
    }
    else if(n==2 || n==1){
        memo[n]=1 ;
    }
    else if(n>2)
    {
        memo[n]= fiba(n-1) +fiba(n-2);
    }
    return  memo[n];
}

for (i =1 ;i<=1000;i++)
{
    console.log(fiba(i));
}