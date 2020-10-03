// linked list
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
toArray(){
    const allElements = [];
    let currentElement = this.head;
    while(currentElement){
         allElements.push(currentElement);
         currentElement = currentElement.next;
    }
    console.log(allElements);
}

}

list1 = new linkedList();
list1.append(1);
list1.append(2);
list1.toArray();