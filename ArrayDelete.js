function arrayDelete(array,pos){
      for(let i=pos-1;i<array.length-1;i++){
            array[i]=array[i+1]
      }
    console.log(array);
}
arrayDelete([0,1,2,3,4],3)