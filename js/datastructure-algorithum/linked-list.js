// linked list shift
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

    getElementAndminusoneElement(index){
        let currentElement = this.head;
        let currentElementMinus1 = null;
        let currentIndex = 0;
        while(currentElement){
            if (currentIndex === index){
                return {currentElementMinus1,currentElement};
            }else if( currentIndex > index) return;
            currentElementMinus1 = currentElement;
            currentElement = currentElement.next;
            currentIndex++;
        }
    }

    insert(index,value){
        let elementAndElementMiunsOne = this.getElementAndminusoneElement(index)
        if (elementAndElementMiunsOne){
           
            elementAndElementMiunsOne.currentElementMinus1.next = {value:value,next:elementAndElementMiunsOne.currentElement};
          
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
list1.prepend("first")
list1.append(1);
list1.append(2);

list1.toArray();
list1.insert(1,123)
list1.toArray();
//branch2
//branch4