class ListNode {
  val: number;
  next: null | ListNode;

  constructor(value: number) {
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  length: number;
  head: null | ListNode;
  tail: null | ListNode;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
}

class Stack extends LinkedList {
  push(value: number) {
    let node = new ListNode(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      let prevHead = this.head;
      this.head = node;
      this.head.next = prevHead;
      this.tail = prevHead;
    }

    this.length++;
    return this;
  }

  pop(): ListNode | null {
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      let head = this.head;
      this.tail = null;
      this.head = null;
      this.length--;
      return head;
    }

    let head = this.head;
    this.head = this.head!.next;

    if (this.head!.next === null) {
      this.tail = this.head;
    }

    this.length--;
    return head;
  }
}

class Queue extends LinkedList {
  enqueue(value: number) {
    let node = new ListNode(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      let prevTail = this.tail;
      this.tail = node;
      prevTail!.next = this.tail;
    }

    this.length++;
    return this;
  }

  dequeue(): ListNode | null {
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      let head = this.head;
      this.tail = null;
      this.head = null;
      this.length--;
      return head;
    }

    let head = this.head;
    this.head = this.head!.next;

    if (this.head!.next === null) {
      this.tail = this.head;
    }

    this.length--;
    return head;
  }
}

let stack = new Stack();
let queue = new Queue();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(stack);
console.log(queue);
