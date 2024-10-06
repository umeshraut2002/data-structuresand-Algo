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

    removeDuplicate(){
        const set = new Set();

        let prev = null;

        let curr = this.head;
        console.log("Current: ",curr)

        while(curr !== null){
            if(set.has(curr.value)){ // filter the list 
                prev.next = curr.next;
                this.length--;
            }
            else{
                set.add(curr.value) // it adds unique values in set 
                prev = curr;
            }

            curr = curr.next;
        }
    }
        
    }

const myList = new linkedList;

myList.push(1); // this.head || temp 
myList.push(2); // temp = temp.next  
myList.push(2);
myList.push(4);
myList.push(3);
myList.push(1);
myList.push(5);

console.log(myList)


console.log(myList.removeDuplicate());

console.log(myList);
