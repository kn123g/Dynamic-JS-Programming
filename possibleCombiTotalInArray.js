const possibleCombinations=(n,arr,memo ={})=>{
    if(n in memo) return memo[n];
    if(n == 0) return [[]];
    if(n<0) return [];
        let result = [];
        for(let element of arr){
            let returnValue = possibleCombinations(n-element,arr,memo);
            if(n-element == 0 || returnValue.length != 0 ){
              const temp = returnValue.map(v=> [...v,element]) ;
              result.push(...temp);
            }
        }
       // console.log(result)
       memo[n] = result;
      return result;
  }
  
  console.log(possibleCombinations(7,[2,3]))
  console.log(possibleCombinations(7,[5,3,4,7]))
  console.log(possibleCombinations(7,[2,4]))
  console.log(possibleCombinations(8,[2,3,5]))
  console.log(possibleCombinations(100,[7,4]))
  // [4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
  //  ].reduce((a,b)=> a+b,0)