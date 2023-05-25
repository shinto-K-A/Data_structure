let str="HELLO"
let str2=""
for(let i=0;i<str.length;i++){
    if(i%2==0){
      str2+=str[i]
      // str2 = str2+str[i]
    }
    else{
     
      str2+='*'
      // str2= str2+'*'
    }

}
console.log(str2);
let srr="HAI"
let ser=" hello"
st=srr+ser
console.log(st);
let jk=101
let decimal=jk.toString()
console.log(parseInt(decimal,2));
let test="    hello       world"
console.log(test);
console.log(test.trim());
console.log(test.replaceAll(' ',''));

// console.log(str.indexOf("E",2));
// console.log(str.search("L"));//we cant give the search starting index
// console.log(str.lastIndexOf("L"));
// console.log(str2,'llllllllllllll');