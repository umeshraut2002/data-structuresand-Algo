// sort the list 
// input : 1 -> 3 -> 4 -> 2 -> null;
// output : 1 -> 2 -> 3 -> 4 -> null;

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

        while(temp !== null){
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead(){
        if(this.head === null){
            console.log("Head : null");
        }
        else{
            console.log("Head : ",this.head.value)
        }
    }

    getTail(){
        if(this.tail === null){
            console.log("Tail : Null")
        }
        else{
            console("Tail : ",this.tail.value);
        }
    }

    // making a list to empty 

    makeEmpty(){
        this.head = null;
        this.tail = null;
        this.length = 0;
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
        return this;
    }

    sort(){
        let prev = this.head;
        let next = prev.next;
        
    }
}

const list = new linkedList;

list.push(1);
list.push(4);
list.push(8);
list.push(2);
list.push(5);

console.log(list);