const { log } = require('./logger');

class LinkedNode {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
  }
  isLinkedListEmpty = () => {
    return this.node === null;
  };
  geListLength = (_) => {
    let node = this.head;
    let length = 0;
    while (node != null) {
      length++;
      // log(node.data)
      node = node.next;
    }
    return length;
  };
  traverseLinkedList = (_) => {
    let node = this.head;
    while (node != null) {
      log(`${node.data}->`);
      node = node.next;
    }
  };

  addNideAtLast = (data) => {
    let node = this.head;

    while (true) {
      if (node.next === null) {
        let newNode = new LinkedNode(data);
        node.next = newNode;
        break;
      }
    }
  };
}

let node1 = new LinkedNode(1);
let node2 = new LinkedNode(2);
node1.next = node2;
let list = new LinkedList(node1);
log(list.isLinkedListEmpty());
log(list.geListLength());
list.traverseLinkedList();
list.addNideAtLast(3);
list.traverseLinkedList();
console.log(list);
