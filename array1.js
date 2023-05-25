function insertPosition(arr,pos,elem) {
      for(let i=arr.length-1;i>=pos-1;i--){
            arr[i+1]=arr[i]

      }
      arr[pos-1]=elem
      
      console.log(arr);
}
// insertPosition([1,2,3,4,5],3,9)
function deletePosition(arr,pos) {
      for(let i=pos-1;i<arr.length-2;i++){
            arr[i]=arr[i+1]
      }
      console.log(arr);
      
}
// deletePosition([2,4,4,7,1],3)
function reverseArray(arr) {
      for (let i = 0; i < arr.length/2; i++) {
            
            let c = arr[i];
            arr[i]=arr[arr.length-1-i]
            
            arr[arr.length-1-i]=c
            
      }
      console.log(arr);
      
      
}
// reverseArray([1,2,3,4,5,6,7,8,9,10])

function reverseUdayippe(arr) {
      let c=0
      let secondarray=[]
      for(let i=arr.length-1;i>=0;i--){
            secondarray[c]=arr[i]
            c++
            
      }
      console.log(secondarray);
      
}
// reverseUdayippe([1,2,3,4])
function reverseIandj(arr){
     
      for(let i=0,j=arr.length/2-1;i<j;i++,j--){
            let c=arr[i]
            arr[i]=arr[j]
            arr[j]=c
      }
      console.log(arr);
}

 reverseIandj([1,23,4,5,6,8])

