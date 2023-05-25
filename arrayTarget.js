// var array = [6,5,7,9,40,2,4]
// var map ={}                                                                                                                                                             
// var target = 10
// for(var i=0; i<array.length;i++){
//     let elem = target- array[i]
//     if(elem in map){
//         console.log(map[elem],i)
//     }
//     map[array[i]] = i
//     console.log( map)
// }
var arr=[1,23,4,2,6]
let map={}
target=10
for(let i=0;i<arr.length;i++){
    let elm=target-arr[i]
    if(elm in map){
        console.log(arr[elm],i);
    }
    map[arr[i]]=i
    console.log( map)
}