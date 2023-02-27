//standup070
//Monday 02.27.23, standup on remo.co @ 6pm 
//LinkedList
//nodes, head and tail. nodes contain a pointer to the next node.
//double linked list -> a pointer to net node and previous node
//nodes have a value and pointer - singlely linklist
//singlely linkedlist -> head and tail: the tail points to null, the head points to next
//challenge below:
//Given the head of a linked list, return the middle node of the linked list.If there are two middle nodes, return the second middle node.
//Hint:  Remember our nodes have a next property. Loop through all the nodes at two speeds .next and .next.next by the time the second speed reaches the end the first will be at the middle. Just return what node it is currently at
//fast and slow pointer method- each time i loop one pointer go 2x speed, one pointer go normal speed
var middleNode = function(head){
    slow = fast = head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;//it will break when its at the tail, because tail is null
    }
    return slow;
}