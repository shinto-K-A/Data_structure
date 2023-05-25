function palin(str){
      let status=true
      for(let i=0;i<str.length/2;i++){
            if(str[i]!=str[str.length-1-i]){
                status=false
                  console.log('Not polindrom');
                  break
            }
           
            
      }
      if(status){
            console.log('palindrom');

      }
      
      

}
palin('abc')