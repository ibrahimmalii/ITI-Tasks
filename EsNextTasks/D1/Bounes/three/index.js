class Queue{

    constructor(maxSize){
        this.elements = [];
        this.maxSize = maxSize;
    }

    inQueue(element){
        (this.elements.length < this.maxSize)?this.elements.unshift(element):
        console.log(`You Can't Do This`);
    }

    deQueue(){
        if(!this.elements.length == 0) this.elements.shift(element);
        return null;
    }

    
    firstElement(){
        return this.elements[0];
    }

    isArrEmpty(){
        return this.elements.length == 0;
    }

    getCurrentSize()
    {
        return this.elements.length;
    }

    #getQueueElements()
    {
        return [this.getCurrentSize() , this.elements];
    }


    viewQueue()
    {
        const arr = this.#getQueueElements();
        console.log(`Array Size = ${arr[0]}`);
        console.log(...arr[1]);
    }

    returnQueue()
    {
        return () =>{
            return this.#getQueueElements()[1];
        }
    }

}

const queue = new Queue(5);
queue.inQueue(9);
queue.inQueue(2);
queue.inQueue(4);
queue.deQueue();

//queue.viewQueue() ==> can access function because it will return by public function

//please check html code to check clouser example

