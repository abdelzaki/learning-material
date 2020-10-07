class Node{
    constructor(value){
        this.value = value; 
        this.next = null; 
        this.pre = null;
    }
}


class DoubleLinkedList{
    constructor(){
        this.tail = this.head = null;
        this.lenght = 0;
    }

    push(value){
        if(!this.head){
            this.head = this.tail = new Node(value)
            this.lenght ++
        }
        else{
            const element = new Node(value);
            this.tail.next = element;
            element.pre = this.tail;
            this.tail = element;
            this.lenght++; 
        }
    }

    pop(){
        if(this.head){
            if(!this.tail.pre){
                const element = this.tail;
                this.head = this.tail = null 
                this.lenght--;
                return element;
            }
            const element = this.tail;
            this.tail = this.tail.pre;
            this.tail.next = null;
            this.lenght--;
            return element.value;
        }
        return;

    }

    shift(value){
        const element = new Node(value);
        element.next = this.head;
        this.head.pre = element;
        this.head = element;
        this.lenght++;
        return this;
    }
    unshift(){
        const element = this.head;
        if(!this.tail.pre){
            this.head = this.tail = null;
            return element;
        }
      
        this.head = this.head.next
        this.head.pre = null;
        element.next = null;
        this.lenght--;
        return element; 
    }


}

let doublelinkedList = new DoubleLinkedList();
doublelinkedList.push(1);
doublelinkedList.push(2);
doublelinkedList.push(3);
doublelinkedList.unshift(11);