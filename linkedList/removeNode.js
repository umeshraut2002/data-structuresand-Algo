// remove node from the list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.length = 0;
  }
}

class linkedList {
  constructor(value) {
    const newNode = new Node(value);

    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;

    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head : Null");
    } else {
      console.log("Head : ", this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail : Null");
    } else {
      console.log("Tail : ", this.tail);
    }
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head.value = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  deleteNode(val){
    while(this.head !== null){
        if(this.head === val){
            this.head = null;
            this.length--;
        }

        return this.head.next;
    }
  }
}

const list = new linkedList;

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log(list)

let val = 1;

console.log(list.deleteNode(val))


console.log(list);
