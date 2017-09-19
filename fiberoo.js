function fib(){
  let first = 0;
  let second = 1;
  let temp = 0;
  let list = [];
  list.push(first);
  list.push(second);
  for(let i = 0; i < 98; i++) {
    list.push(first+second);
    temp = first + second;
    first = second;
    second = temp;
  }
  return list;
}

function numsToStrings(list){
  return _.map(list, function(num){return `${num}`;});

}

function numEvenNums(list){
  let evens = _.filter(list, function(number){ return number % 2 === 0; });
  return evens.length;
}

console.log(fib());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));