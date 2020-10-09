
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

    prepend(value){
        if(!this.head){
            this.append(value)
            return;
        } 
        const element = {value : value, next : this.head}
        this.head = element 
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
    

    get(index){
        let currentElement = this.head;
        let currentIndex = 0;
        while(currentElement){
            if (currentIndex === index){
                return currentElement;
            }else if( currentIndex > index) return;
            currentElement = currentElement.next;
            currentIndex++;
        }
    }

    set(index,value){
        let element = this.get(index)
        if(element){
            element.value = value; 
        }
    }

    reverse(){
        let currentElement = this.head;
        this.tail = this.head;
        this.head = null;
      
        while(currentElement){
            let temp = currentElement.next;
            currentElement.next = this.head; 
            this.head = currentElement; 
            currentElement = temp;
        }

    }

    toArray(){
        const allElements = [];
        let currentElement = this.head;
        while(currentElement){
            allElements.push(currentElement);
            currentElement = currentElement.next;
        }
        return allElements;
    }
}

list1 = new linkedList();

list1.append(1);
list1.append(2);
list1.append(23);
list1.append(4);
list1.toArray();
list1.reverse()
list1.toArray();


