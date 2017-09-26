module.exports = function multiply(first, second) {
  // your solution
  let newFirst = [...first].map(i => + i).reverse();
  let newSecond = [...second].map(i => + i).reverse();
  let result = [...newFirst,...newSecond].fill(0);
  for ( let i = 0; i < newFirst.length; i++ ) {
	for ( let j = 0; j < newSecond.length; j++ ) {	
		result[i+j] += newFirst[i] * newSecond[j];
	}
  }
  for ( i = 0; i < result.length - 1; i++ ) {
    result[i + 1] += Math.floor(result[i] / 10);
    result[i] =  result[i] % 10;
  }
  result.reverse();
  for(i = 0; i < result.length; i++) {
  	if(result[i] == 0) {
  		result.shift();
  		--i;
  	} else break;
  }
  return result.join("");
}

