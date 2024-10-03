// for the input :- 1-> 2-> 3-> 4-> null

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class myList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
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
            console.log("Head: null");
        }
        else {
            console.log(`Head: ${this.head.value}`)
        }
    }

    getTail(){
        if(this.tail === null){
            console.log("Tail: null")
        }
        else{
           console.log(`Tail: ${this.tail.value}`)
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
            this.head = newNode;
            thistail = newNode;
        }
        else{
            this.tail.next = newNode
            this.tail = newNode;
        }
    }

    findMiddleNode(){
        let slow = this.head;
        let fast = this.head;
        
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
}

const list = new myList();

// console.log(list);

list.push(1)
list.push(2)
list.push(3)
list.push(4)

console.log(list.findMiddleNode());


// the output is: 3 -->middlenode value
