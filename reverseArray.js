function reverse(arr) {
      let size=arr.length
      
      for (let i = 0; i < arr.length; i++) {
           let c=arr[i];
           arr[i]=arr[size-1-i]
           arr[size-1-i]=c
           

           return arr
            
      }
      // console.log(arr,"hhh");
      
      
}
console.log(reverse([4,5,3,5,1]));