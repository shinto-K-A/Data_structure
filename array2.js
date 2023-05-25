function binarytodecimal(arr){
      let str=''
      for(let i=0;i<arr.length;i++){
             str=str+arr[i].toString()

      }
     console.log(parseInt(str,2)); 
}
binarytodecimal([1,0,1,0])
function decimaltobinary(n){
     console.log(n.toString(2));
}
