// how node and linked list are create and work under the hood

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// linked list class 

class linkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
}

const myLinkedList = new linkedList(4);

console.table(myLinkedList);

