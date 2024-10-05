//input: node : 1->2->2->3->4->null
//  Output: 1->2->3->4->null

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList(){
        let temp = this.head;

        if(temp !== null){
            console.log(temp.head);
        }

        temp = temp.next;
    }

    getHead(){
        if(this.head === null){
            console.log("Head: Null");
        }
        else{
            console.log(this.head.value);
        }
    }

    getTail(){
        if(tail === null){
            console.log("Tail: Null");
        }
        else{
            console.log(this.tail.value);
        }
    }

    makeEmpty(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){

        const newNode = new Node(value);

        if(!this.head){
            this.head.value = newNode;
            this.tail = newNode
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
    }

    removeDuplicate(value){
        const newNode = new Node(value);

        let set = new Set();
        let temp = this.head;
        for(let i = 0; i < this.length; i++){
        if(set !== temp.next){
            set.push(i);
        }
        else{
            set.push(i);
        }
    }
    }
}

const myList = new linkedList;

myList.push(1);
myList.push(2);
myList.push(2);
myList.push(4);
myList.push(3);
myList.push(1);

console.log(myList)