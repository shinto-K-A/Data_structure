//1 2 3 5 7
//7 5 1 2 3
let arr=[1,2,3,5,7]
let arry=[]
let size=arr.length
let c=0
for(let i=arr.length-1;i>=size/2;i--){
      arry[c]=arr[i]
      c++
}
for(let j=0;j<=size/2;j++){
      arry[c]=arr[j]
      c++
}
console.log(arry);