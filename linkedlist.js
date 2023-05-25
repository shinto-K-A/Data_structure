class Node {
      constructor(value) {
            this.value = value
            this.next = null

      }
}
class LinkedList {
      constructor() {
            this.head = null
            this.size = 0
      }
      isEmpty() {
            return this.size === 0
      }
      getSize() {
            return this.size
      }
      //MUNNILL ADD CHEYUKA
      prepend(value) {
            const node = new Node(value)
            if (this.isEmpty()) {
                  this.head = node
            }
            else {
                  node.next = this.head
                  this.head = node
            }
            this.size++
      }
      //LAST ADD CHEYAAN
      append(value) {
            const node = new Node(value)
            if (this.isEmpty()) {
                  this.head = node
            }
            else {

                  let tail = this.head
                  while (tail.next) {
                        tail = tail.next
                  }
                  tail.next = node
            }
            this.size++
      }
      insert(value, index) {
            if (index < 0 || index > this.size) {
                  console.log('No such Position');
            }
            if (index == 0) {
                  this.prepend(value)
            }
            else {
                  const node = new Node(value)
                  let prev = this.head
                  for (let i = 0; i < index - 1; i++) {
                        prev = prev.next
                  }
                  node.next = prev.next
                  prev.next = node
                  this.size++


            }


      }
      removefrom(index) {
            if (index < 0 || index >= this.size) {
                  console.log('INVALID');
                  return null
            }
            let removedNode
            if (index === 0) {
                  removedNode = this.head
                  this.head = this.head.next

            }
            else {
                  let prev = this.head
                  for (let i = 0; i < index - 1; i++) {
                        prev = prev.next

                  }
                  removedNode = prev.next
                  prev.next = removedNode.next
            }
            this.size--
            return removedNode.value
      }
      removevalue(value) {
            if (this.isEmpty()) {
                  console.log('List Is Empty');
                  return null
            }
            if (this.head.value == value) {
                  this.head = this.head.next
                  this.size--
                  return value
            }

            else {
                  let prev = this.head
                  while (prev.next && prev.next.value !== value) {
                        prev = prev.next
                  }
                  if (prev.next) {
                        let removeNode = prev.next
                        prev.next = removeNode.next
                        this.size--
                        return value
                  }
                  console.log('No such  value');
                  return null

            }



      }
      search(value) {
            if (this.isEmpty()) {
                  return -1
            }
            let i = 0
            let temp = this.head
            while (temp) {
                  if (temp.value === value) {
                        return i
                  }
                  i++
                  temp = temp.next
            }
            return -1

      }
      reverse(){
            let prev=null
            let curr=this.head
            while(curr){
                  let next=curr.next
                  curr.next=prev
                  prev=curr
                  curr=next
            }
            this.head=prev
      }
      // reverse() {
      //       let prev = null
      //       let curr = this.head
      //       while (curr) {
      //             let next = curr.next
      //             curr.next = prev
      //             prev = curr
      //             curr = next

      //       }
      //       this.head = prev
      // }
      abc() {
            let temp = this.head
            while (temp.next) {
                  temp = temp.next
            }
            console.log(temp);

            let check = this.head
            while (check) {
                  check = check.next
            }
            console.log(check);
      }
     

      print() {
            if (this.isEmpty()) {
                  console.log("List is EMPTY");
            }
            else {

                  let curr = this.head
                  //let listvalues= ' '
                  while (curr) {
                        //listvalues=`${curr.value}`
                        //console.log(`${listvalues}`);
                        console.log(curr.value);
                        // console.log(curr.next);

                        curr = curr.next

                  }




            }
      }
      deleteDuplicat() {
            let temp = this.head
            while (temp) {
                  let tempnxt = temp.next

               
                  while (tempnxt && tempnxt.value == temp.value) {
                        tempnxt = tempnxt.next

                  }

                  temp.next = tempnxt
                  if (tempnxt = this.tail && temp.value == tempnxt.value) {
                        this.tail = temp
                        this.tail.next = null
                  }

                  temp = temp.next
            }

      }
      deleteDuplicate(){
            let temp=this.head
            while(temp){
                  let tempnxt=temp.next
                  while(tempnxt&&temp.value==tempnxt.value){
                        if(tempnxt==this.tail&&temp.value==tempnxt.value){
                              this.tail=temp
                              this.tail.next=null
                        }
                        
                        tempnxt=tempnxt.next
                  }
                  
                  temp.next=tempnxt
                  
                 
                  temp=temp.next
            }
      }
}

const list = new LinkedList()
function arrlink(arr){
      
      
      for( i=0;i<arr.length;i++){
            list.append(arr[i])
      }
      
     
}
// arrlink([2,3,1,5])
function arrduplicate(arr){
      let setarr=new Set(arr)
      console.log(setarr);
      console.log(arr.sort());
}
arrduplicate([5,2,3,4,3,1,5,2])

// list.print()
//list.prepend(10)
// list.prepend(30)
// list.prepend(80)
// list.prepend(90)
// list.append(8)
// list.append(8)
// list.append(7)
// list.append(7)
// list.append(3)
// list.append(2)
// list.append(2)
// list.append(2)
//list.print()
// list.insert(10,0)
//list.print()
// list.insert(20,1)
// list.insert(50,2)
// list.print()
// console.log('-----------------------------');
//list.removevalue(50)
// list.print()
//console.log(`size of array = ${list.getSize()}`);
// console.log(list.search(50));
// console.log(list.search(5));
// console.log(list.search(10));
//list.abc()
// list.reverse()
//list.deleteDuplicat()
//list.deleteDuplicate()
// list.print()











// console.log('List is empty',list.isEmpty());
// console.log('Size of list',list.getSize());