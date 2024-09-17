class myarray{
    constructor(){
        this.length = 0;
        this.data = {};
    }
    
    push(...items){
        for(let i of items){
            this.data[this.length] = i;

            this.length++;
        }
    }

    delete(ind){
     const item =  this.data[ind];
     
     for(let i = ind; i < this.length - 1; i++){
        console.log(`${this.data[i]} and ---> ${this.data[i + 1]}`);  
     }

     console.log(this.data[this.length - 1])

    delete this.data[this.length - 1]; // it deletes and last element indices of an array 
    
    console.log(this.length--);
    
    return item;
    }

}


const myArray = new myarray;

myArray.push(1, 2, 3, 4, 5, 6);

console.table(myArray);


myArray.delete(1);

console.table(myArray);
