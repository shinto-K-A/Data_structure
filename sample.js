class Node{
      constructor(value){
            this.value=value
            this.next=null
      }
}
class LinkedList{
      constructor(){
            this.head=null
            this.tail=null
            this.size=0
      }
      isEqual(){
            return this.size==0
      }
      append(value){
         
            const node=new Node(value)
            if(this.isEqual()){
                  this.head=node
                  this.tail=node
            }
            else{
                  
                  this.tail.next=node
                  this.tail=node
            }
            
            this.size++
         
            
      }
      display(){
            let temp=this.head
            while(temp){
                  console.log(temp.value);
                  temp=temp.next
            }
      }
}
const list=new LinkedList()

function  arraytolinked(arr){
       for(let i=0;i<arr.length;i++){
            
            list.append(arr[i])
      }
     
}
arraytolinked([1,2,3,4])
list.display()