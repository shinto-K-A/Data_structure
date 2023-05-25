const obj={
      name:'s',
      age:20,
      mark:100
}
console.log(obj);
obj.lang=200//INSERT new to object
console.log(obj);
delete obj.name
console.log(obj);
console.log("FUNCTION INSIDE OBJECT");
const object={
      name:'ABCDEFG',



      nameoffunction:function (){
            console.log(this.name);

      }
}
object.nameoffunction()