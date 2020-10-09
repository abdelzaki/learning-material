class Heap{
    constructor(){
         this.elements = [100,80,60,70,75,40,55];
    }
    
    addElement(element){
        this.elements.push(element);
        let elementIndex = this.elements.length-1;
        let parentIndex = Math.floor((elementIndex-1)/2);
        let parent;
        while(parentIndex){
            parent = this.elements[parentIndex];
            if(element < parent) break;
            this.elements[parentIndex] = element;
            this.elements[elementIndex] = parent;
            elementIndex = parentIndex;
            parentIndex = Math.floor((elementIndex-1)/2);

        }
        return this;
    }


}

let heap = new Heap();
heap.addElement(10);
heap.addElement(90);