class Node {
      constructor(value) {
            this.value = value
            this.next = null
      }
}
class LinkedList {
      constructor() {
            this.head = null
            this.tail = null
            this.size = 0
      }
      isEmpty() {
            return this.size === 0
      }
      getSize() {
            return this.size
      }
      prepend(value){
            const node=new Node(value)
            if(this.isEmpty()){
                  this.head=node
                  this.tail=node
            }
            else{
                  node.next=this.head
                  this.head=node
            }
            this.size++
      }
      append(value){
            const node=new Node(value)
            if(this.isEmpty()){
                  this.head=node
                  this.tail=node
            }
            else{
                  this.tail.next=node
                  this.tail=node

            }
            this.size++
            
            
      }
      removefromfront(){
            if(this.isEmpty()){
                  console.log('No List To Delete');
                  return null
            }
            if(this.size==1){
                  this.head=null
                  this.tail=null
            }
            else{
                  const value=this.head.value
                  this.head=this.head.next
                  this.size--
                  return value

            }
           
      }
      removefromend(){
            if(this.isEmpty()){
                  console.log('No Node To Delete');
                  return null
            }
            if(this.size==1){
                  this.head=null
                  this.tail=null
            }
            else{
                  let  prev=this.head
                  while(prev.next!==this.tail){
                        prev=prev.next
                  }
                  prev.next=null
                  this.tail=prev
            }
            this.size--
      }
      print() {
            if (this.isEmpty()) {
                  console.log("There is no node");
                  return null
            }
            else {
                  let curr = this.head
                  while (curr) {
                        console.log(curr.value);
                        curr = curr.next
                  }

            }

      }
}
const list = new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.prepend(1)
list.prepend(2)
list.prepend(5)
list.print()
console.log('------------------');
list.removefromfront()
list.print()
console.log('//////////////////');
list.removefromend()
list.print()
console.log(`SIZE IS  = ${list.getSize()}`);