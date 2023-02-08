//standup058
//Tuesday, 02/07/23, standup on remo.co @6pm
// Today we will be looking at stacks! 
//We will not meet tomorrow, so please watch this video in prep for Thursday: https://youtu.be/ChWWEncl76Y 
// We'll start Linked Lists then with the goal of moving onto Trees & Binary Search Trees by next week!
class Stack {
    constructor(){
      this.storage = {}
      this.size = 0
    }
    push(element){
      this.size++
      this.storage[this.size] = element
    }
    pop(){
      let removed = this.storage[this.size]
      delete this.storage[this.size]
      this.size--
      return removed
    }
    peek(){
      return this.storage[this.size]
    }
  }
  
  const stack = new Stack()
  
  stack.push('apple')
  stack.push('banana')
  stack.push('plum')
  
  stack.pop()