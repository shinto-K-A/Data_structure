function movezero(array){
      let c=0
      let temparray=[array.length-1]
      for(let i=0;i<array.length;i++){
            if(array[i]!==0){
                  temparray[c]=array[i]
                  c++
            }
      }
      for(let j=c;j<array.length;j++){
            temparray[j]=0

      }
    
      console.log(temparray);
}
movezero([2,3,0,3,0,1,0])