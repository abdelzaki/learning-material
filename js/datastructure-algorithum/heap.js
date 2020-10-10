class Heap{
    constructor(){
         this.elements = [100,80,60,40];
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

    removeRoot(){
        let root = this.elements[0];
        let  leaf  = this.elements.pop();
        if (this.elements.length === 0) {
            return leaf;
        }

        let childIndex,newChildIndex,child,swap ;
        this.elements[0] =leaf;
        const swapRoutine =(element,index )=>{
            childIndex = index*2;
            if (this.elements.length > childIndex+1){
                if(element < this.elements[childIndex+1]){
                    swap = true;
                    child = this.elements[childIndex+1]
                    newChildIndex = childIndex+1
                }
            }

            if (this.elements.length > childIndex+2){
                	if((swap && this.elements[childIndex+2] > this.elements[childIndex+1])
                    || (!swap && element < this.elements[childIndex+2])){
                        child = this.elements[childIndex+2];
                        swap = true;
                        newChildIndex = childIndex+2
                }
            }

            if(swap){
                swap = false;
                this.elements[newChildIndex] = element;
                this.elements[index] = child;
                swapRoutine(element,newChildIndex)
            }
        }
        
        swapRoutine(leaf,0)    
        return root;
    }
}

let heap = new Heap();
heap.removeRoot();