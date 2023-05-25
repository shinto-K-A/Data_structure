function moving(array){
      let c=0
      let arraytwo =[array.length-1]
      
      for(let i=0;i<array.length;i++){
            if(array[i]!==0){
             arraytwo[c]=array[i]
                  c++
            }
            
      }
      for(let j=c;j<array.length;j++){
            arraytwo[j]=0
      }
      console.log(arraytwo);
}
moving([0,3,4,2,0,5,6,0])