// floyd cycle algorithm loop cycle detection 

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
                console.log(temp.value);
                temp = temp.next
            }
        }

        geHead(){
            if(this.head === null){
                console.log("Head : null");
            }
            else{
                console.log(`Head: ${this.head.value}`)
            }
        }

        getTail(){
            if(this.tail === null){
                console.log("Tail: null")
            }
            else{
                console.log(`Tail: ${this.tail.value}`);
                
            }
        }

        checkEmpty(){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }

        push(value){
            const newNode = new Node(value)

            if(!this.head){
                this.head.value = newNode;
                this.tail = newNode
            }

            else{
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
        }

        cycleDetection(){
            let slow = this.head;
            let fast = this.head.next;

            while(fast !== null && fast.next !== null){

                slow = slow.next;
                fast = fast.next.next;

                if(slow === fast){
                    return true;
                }
                else{
                    return false;
                }
            }
            return slow;
        }
}

const list = new linkedList;

list.push(1)
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

console.log(list);
