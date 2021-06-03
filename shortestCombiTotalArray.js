const shortestCombiTotalInArray=(n,arr,memo ={})=>{
    if(n in memo ) return memo[n];
    if(n === 0 ) return [];
    if(n<0) return null;
    let short = null;
    if(n>0){
        for(let element of arr){
            let result = shortestCombiTotalInArray(n-element,arr,memo);
            if(result !== null){
            const combination = [...result,element] ;
            //console.log(combination
             if(short===null || short.length> combination.length){
                short = combination;
            }
            }
        }
    }
    memo[n]=short;
    return  memo[n];
}
console.log(''+shortestCombiTotalInArray(7,[2,3]))
console.log(''+shortestCombiTotalInArray(7,[5,3,4,7]))
console.log(""+shortestCombiTotalInArray(7,[2,4]))
console.log(''+shortestCombiTotalInArray(8,[2,3,5]))
console.log(''+shortestCombiTotalInArray(300,[7,4]))
// console.log([4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
// ].reduce((a,b)=> a+b,0))