// let array=[1,2,3,4,5,6]
// for(let i=0;i<array.length)
const prompt=require('prompt-sync')({signunt:true})
// var size=  parseInt(prompt("Enter array limit"))
// parseInt(prompt('Enter array values'))
b=[1,2,3,4,5]
// for(k=0;k<size;k++){
//       b[k]=prompt()

// }
let size=5

var target =parseInt(prompt("Enter Your Target"))
for(i=0;i<size-1;i++){
      //console.log(b[i]);
      for(j=i+1;j<size;j++){
           
            
            if(b[i]+b[j]==target){
                  //console.log('kkk');
                   console.log(`${b[i]} in ${i}th position `);
                   console.log(`${b[j]} in ${j}th position `);
            }
      }
}
