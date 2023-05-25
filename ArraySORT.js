function sort(arr,lar){
      for(let i=0;i<arr.length;i++){
            for(let j=i;j<arr.length;j++){
                  if(arr[i]<arr[j]){
                        let c=arr[i]
                        arr[i]=arr[j]
                        arr[j]=c
                  }

            }
            
            
      }
      console.log(arr[lar-1]);

}
sort([1,4,2,5],2)
// let arr=[2,1,5,2,4]
// let seces=arr.sort((a,b)=>{
//       return b-a
// })
// console.log(seces[2]);