const shortestCombiTotalInArray=(n,arr,memo ={})=>{
    if(('memory:'+ n) in memo ) {
        return memo['memory:'+ n];
    }
    if(n === 0 ) return [];
    if(n<0) return null;
    if(n>0){
        for(let element of arr){
            let result = shortestCombiTotalInArray(n-element,arr,memo);
           // console.log(result);
            let combination;
            if(result?.length === 0){
                if((!(n in memo)) || memo[n]=== null ) memo[n] = [];
                combination = [...result,element] ;
                memo[n].push(combination);
            }
            else if((result === null) ) {
                if(!(n in memo)) memo[n] = null;
            }
            else{       
            //    if(memo[n] != null  ){
                    for(let resultElement of result){
                        if((!(n in memo)) || memo[n]=== null ) memo[n] = [];
                        combination= [...resultElement,element] ;
                        memo[n].push(combination);
                    }
            //    }
            }
            if( element ===  arr[arr.length-1]){
                memo ['memory:'+ n] = memo[n];
            }
            
        }
    }
    return memo[n];
}
const print = (result,total)=>{
    let txt = "";
    for(let e in result){
        // if(e.substring(0, 1) == total){
            txt += e + ": " + result[e] + " \n";
        // }
    }
    if(txt === "") console.log(null);
    else console.log(txt);
}

print(shortestCombiTotalInArray(7,[2,3]),7)
//print(shortestCombiTotalInArray(7,[5,3,4,7]),7)
 //print(shortestCombiTotalInArray(7,[2,4]),7)
// print(shortestCombiTotalInArray(8,[2,3,5]),8)
// print(shortestCombiTotalInArray(300,[7,4]))
// [4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
//  ].reduce((a,b)=> a+b,0)