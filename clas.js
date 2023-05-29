class parent{
      print(){
            console.log('methode in parent');
      }

}
class child extends parent{
      display(){
            console.log('methode in child');
      }
     
}
let ob=new child()
ob.print()
ob.display()