function largest(arr){
      let largest=arr[0]
      let second
      for(let i=1;i<arr.length;i++){
            if(arr[i]>largest){
                  second = largest
                  
                  largest=arr[i]
                  
                 
            }
           
           
            
      }
      return second
}
console.log(largest([4,2,5,7,1]));
