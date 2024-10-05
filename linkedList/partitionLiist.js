class Node{
    constructor(value){
        this.head = value;
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

        while(temp !== null){
            console.log(temp.value)
        }
        
        temp = temp.next;
    }

    getHead(){
        if(this.head === null){
            console.log("HEad: Null");
        }
        else{
            console.log("Head: ",this.head.value)
        }
    }

    getTail(){
        if(this.tail === null){
            console.log("Tail: Null");
        }
        else{
            console.log(this.tail.value);
        }
    }

    makeEmpty(){
        this.head = null;
        this.tail = null;
        this.lengtth = 0;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head.value = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.lengtth++;
            return this;
        }
    }

    partition(x){
        let temp = this.head;
        for(let i = 0; i < this.length; i++){
            if(i <= x){
                temp = 
            }   
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