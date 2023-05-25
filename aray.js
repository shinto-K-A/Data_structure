const arr=[1,2,'shinto']
arr.push(6)//To add new element in the LAST position of array
arr.unshift(0)//To add new element in the FIRST position of array
for(const item of arr){
      console.log(item);
}
console.log("BEFORE POP");
arr.pop()
for(const item of arr){
      console.log(item);
}
console.log("BEFORE SHIFT");
arr.shift()
for(const item of arr){
      console.log(item);
}
