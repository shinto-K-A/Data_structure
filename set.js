const setname=new Set([1,2,3,'hello'])
setname.add(4)
setname.delete(1)
console.log(setname);
console.log(setname.has(1));
setname.clear()

//console.log(setname.size);
//SET IS ITERATABLE
for(item of setname){
      console.log(item);
}
