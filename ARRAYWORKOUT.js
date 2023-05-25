let arr=[1,2,3,6,7]
for (let i = 0; i < arr.length/2; i++) {
      let c= arr[i]
      arr[i]=arr[arr.length-1-i]
      arr[arr.length-1-i]=c

      
}
console.log(arr);
