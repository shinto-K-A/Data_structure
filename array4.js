function deleteDuplicate(arr){
      let less=0
      for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                  if(arr[i]===arr[j]){
                        for(let k=j;k<arr.length-1-less;k++){
                              console.log(arr.length-1);
                              arr[k]=arr[k+1]
                              less++
                        }
                  }
            }
      }
      console.log(arr);
      
}

deleteDuplicate([1,4,3,3,4,4,1,6])