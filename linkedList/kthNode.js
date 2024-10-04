class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class myList {
    constructor(value) {
        const newNode = new Node(value);

        this.head = newNode;
        this.tail = newNode;
    }

    printList() {
        let temp = this.head;

        while (temp !== null) {
            console.log(temp.value)
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log(`head: null`)
        }
        else {
            console.log(`head: ${this.head.value}`)
        }
    }

    getTail(){
        if(this.tail === null){
            console.log("Tail : Null")
        }
        else{
            console.log(`Tail: ${this.tail.value}`)
        }
    }

    checkEmpty(){
        this.head = null;
        this.tail = null;
        this.length = 0;
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
        }
    }

    findK(k){
        let slow = this.head;
        let fast = this.head;

        for(let i = 0; i < k; ++i){

            console.log("I AM I: ",i);
            

            if(fast  === null){
                return null;
            }

            fast = fast.next;
            console.log("Fast of For Loop: ",fast);
            
        }
        
        while(fast !== null){
            slow = slow.next;
            fast = fast.next;

            console.log(`slow : ${slow} Fast : ${fast}`);
        }

        console.log("------------",slow)

        return slow;
    }
}

const list = new myList;
const k = 3;

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

console.log(list);

console.log("I AM Kth Node: ",list.findK(k));
