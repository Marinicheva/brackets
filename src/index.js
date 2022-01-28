module.exports = function check(str, bracketsConfig) {
  // your solution
  let answer,
      arr = [];

  if (str.length % 2 !== 0) {
    return false;
  }
  
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][1] && arr[arr.length - 1] ===  bracketsConfig[j][0]) {
        arr.pop(arr.length - 1);
      } else if(str[i] === bracketsConfig[j][0]) {
        arr.push(str[i]);
      }
    }
    
  }
  answer = Boolean(!arr.length);
  return answer;
};