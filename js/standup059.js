//standup059
//no standup on Wednesday 02/08/23
//standup on Thursday 02/09/23 on remo.co @ 6pm
// Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.

// An example of a queue in real life and not strictly computing would simply be the dreaded waiting line, i.e.the first person in line is also the first one who gets out. 

// Waiting Lines

// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.

// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.

// Wait, what?
// To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
// To dequeue an item means means to remove the item at the front, or head, of the queue.
// In a queue, we remove the item the least recently added.
// JavaScript Methodology
// Queues can be implemented in JavaScript using arrays.

// You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

// As long as the tests pass, go for it!
//We'll start Linked Lists then with the goal of moving onto Trees & Binary Search Trees by next week
class Stack {
    constructor() {
      this.storage = {}
      this.size = 0
    }
    push(element) {
      this.size++
      this.storage[this.size] = element
    }
    pop() {
      let removed = this.storage[this.size]
      delete this.storage[this.size]
      this.size--
      return removed
    }
    peek() {
      return this.storage[this.size]
    }
  }
  
  const stack = new Stack()
  
  stack.push('apple')
  stack.push('banana')
  stack.push('plum')
  
  stack.pop()
  //not sure if this is the correct answer for this standup challenge, its on linkedlist