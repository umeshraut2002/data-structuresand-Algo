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

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop(value){
        const newNode = new Node(value);

        if(!this.head) return undefined;

        let temp = this.head;
        let pre = this.head;

        while(temp.next){
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        console.log(`temp: ${temp}`);

        return temp;
    }

    unshift(value){
        const newNode = new Node(value);
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;

    }

    // shift 

    shift(value){
        const newNode = new Node(value);
        
        if(!this.head){
            return undefined;
        }

        let temp = this.head;
        this.head = this.head.next;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }

}

let myLinkedList = new linkedList(5);
myLinkedList.push(9);
myLinkedList.push(4);
myLinkedList.push(3);
myLinkedList.push(11);
myLinkedList.push(10);
myLinkedList.push(6);
myLinkedList.push(7);
// console.log(myLinkedList);

// console.log(myLinkedList.pop())

myLinkedList.unshift(16);
myLinkedList.shift();

console.log(myLinkedList);