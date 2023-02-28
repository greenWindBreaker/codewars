//standup071
//Tuesday, 02.28.2023, standup on remo.co @ 6pm
//reversed linkedlist common problem
//just like math formulas, we just have to memorize this for interviews
//Given the head of a slightly linked list, reverse the list, and return the reversed list.
class LinkedList {
    constructor () {
      this.head = this.tail = null//we set up our head & tail
    }
  
    append(value) {
            //we setup the head to be our node
      if (!this.tail) {
        this.head = this.tail = new Node(value)
      }
   
      else {
        let oldTail = this.tail
        this.tail = new Node(value)
        oldTail.next = this.tail
      }
    }
    reverseList(){
       let current = this.head
       let prev = null
       while (current) {
        //we swapped values so that the reverse effect works:
          const temp = current.next
          current.next = prev
          prev = current
          current = temp
      }
      return prev
    }
}
  
class Node {
    constructor (value, prev, next) {
      this.value = value
      this.next = next || null
     }
}
  
const list = new LinkedList()
  
list.append(1)
list.append(2)
list.append(3) 