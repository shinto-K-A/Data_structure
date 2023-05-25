function arrayinsert(arr,pos,val){
      for(let i=arr.length-1;i>=pos-1;i--){
            arr[i+1]=arr[i]

      }
      arr[pos-1]=val
      return arr
}
console.log(arrayinsert([1,2,3,4,5,6,],3,0));