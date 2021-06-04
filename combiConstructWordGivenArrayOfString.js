const formWordGivenArray = (word,array,memo={})=>{
    if(word in memo) return memo[word];
    if(word === '') return [[]];
    let result = [];
      for(let w of array){
          let i =word.indexOf(w);
          if(i === 0){
            suffix = formWordGivenArray(word.slice(w.length),array,memo);//also can use word.substring(w.length)
            const target =   suffix.map(way => [w , ...way]);    
            result.push(...target);
        }
      }
      memo[word] = result;
      return result;
}
console.log(formWordGivenArray('abcdef',['ab','abc','cd','def','abcd']));
console.log(formWordGivenArray('skateboard',['bo','rd','ate','t','ska','sk','boar']));
console.log(formWordGivenArray('enterapotentpot',['a','p','ent','enter','ot','o','t']));
console.log(formWordGivenArray('abcdef',['ab','abc','cd','def','abcd']));
//console.log(formWordGivenArray('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
// ['e','ee','eee','eeee','eeeee','eeeeee']));
