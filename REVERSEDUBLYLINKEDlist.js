class Node{
      constructor(value){
            this.value=value
            this.next=null
            this.prev=null
      }
}
class LinkedList{
      constructor(){
            this.head=null
            this.tail=null
            this.size=0
      }
      isEmpty(){
            return this.size==0
      }
      append(value){
            const node=new Node(value)
            if(this.isEmpty()){
                  this.head=node
                  this.tail=node

            }
            else{
                  this.head.next=node
                  node.prev=this.head
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
      reverse(){
            let temp=this.tail
            while(temp){
                  
                  temp=temp.prev
            }
      }
      
}
const list=new LinkedList()
list.append(10)
list.append(9)
list.display()
list.reverse()
