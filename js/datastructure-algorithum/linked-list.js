/ linked list shift
class linkedList{

    constructor(){
        this.head = null;
        this.tail= null;
    }

    append(value){
        const element = {
            value : value, next : null
        }
        
        if (this.tail){
            this.tail.next = element;
        }

        this.tail = element;
        if(!this.head){
            this.head = element;
        }
    }

    remove(){
        if (!this.head) return;
        let currentElement = this.head;
        while(currentElement){
            if(currentElement.next == this.tail){
                currentElement.next = null;
                this.tail = currentElement;
            }
            currentElement = currentElement.next;
        }
       if(this.head = this.tail){
        this.head = null;
        this.tail = null;
       } 
    }

    toArray(){
        const allElements = [];
        let currentElement = this.head;
        while(currentElement){
            allElements.push(currentElement);
            currentElement = currentElement.next;
        }
        return currentElement;
    }
}

list1 = new linkedList();
list1.append(1);
list1.append(2);
list1.toArray();
list1.remove();
list1.toArray();