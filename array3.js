//1,2,3,5
//o/p=4
//total=(5*5+1)/2
//sum=total in array

function missingnumber(arr){
      
      let val=arr[arr.length-1]
      let total=(val*(val+1))/2
     let sum=0
      for(let i=0;i<arr.length;i++){
            sum=sum+arr[i]
                 
      }
      console.log(total-sum);
}
// missingnumber([1,2,3,5])

//[1,3,6,9]
//[2,4,7,8]
//[1,2,3,4,6,7,8,9]
function mergetwoarray(arr1,arr2){
      let temp=[]
      let count=0
      for(let i=0;i<arr1.length;i++){
            if(arr1[i]<arr2[i]){
                  temp[count]=arr1[i]
                  temp[count+1]=arr2[i]
                  count=count+2
            }
            else{
                  temp[count]=arr2[i]
                  temp[count+1]=arr1[i]
                  count=count+2
            }
      }
      console.log(temp);
}
// mergetwoarray([1,3,5,6],[0,2,4,7])

function largest(arr){
      let largest=arr[0]
      for(let i=0;i<arr.length;i++){
            if(arr[i]>largest){
                  largest=arr[i]
            }
      }
      console.log(largest);
}
largest([4,8,1,9])