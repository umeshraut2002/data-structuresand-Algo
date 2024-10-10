class Node{
    constructor(value){
        this.head = value;
        this.tail = null;
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

        while(temp !== null){
            console.log(temp.value)
            temp = temp.next;
        }
    }

    getHead(){
        if(this.head === null){
            console.log("head : null");
        }
        else{
            console.log(this.head);
        }
    }

    getTail(){
        if(this.tail === null){
            console.log("Tail : Null");
        }
        else{
            console.log(this.tail)
        }
    }

    makeEmpty(){
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    push(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }
}

const list = new linkedList;

list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log(list)