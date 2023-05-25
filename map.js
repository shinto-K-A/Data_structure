const mapname=new Map([['a',10],['b',20]])
mapname.set('d',40)

for([key,val] of mapname){
      console.log(`${key}:${val}`)
}
console.log(mapname.has('a'));
mapname.delete('a')
console.log(mapname.has('a'));
console.log(mapname.size)