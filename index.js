// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// const nums = [2, 7, 11, 15];
// const target = 9;

// const sumTwo = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// 206: Reverse Linked List
const ll = new LinkedListNode();
ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtHead(30);
ll.insertAtHead(40);

console.log(ll.value);

const reverseLinkedList = (head) => {
  let previous = null;
  let current = head;
  while (current != null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};
