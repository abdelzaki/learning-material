class Node {
    constructor(value){
        this.value = value;
        this.right = this.left = null;
    }
}
class BT{
    constructor(){
        this.root = null
        return this;
    }
    insert(value){
        if(!this.root){
            this.root = new Node(value)
            return this;
        }
        let currentElement = this.root;
        while(true){
            if( value === currentElement.value) return this;
            if(value > currentElement.value){
                if (!currentElement.right){
                    currentElement.right = new Node(value);
                    return this;
                }
                currentElement = currentElement.right;
            }
            else if(value < currentElement.value){
                if (!currentElement.left){
                    currentElement.left = new Node(value);
                    return this;
                }
                currentElement = currentElement.left;
            }
        }
    }

    traverse(){
        if(!this.root) return this;
        const qeueu = [];
        const visited = [];
        qeueu.push(this.root);
        while (qeueu.length > 0){
            const currentElement = qeueu.shift();
            if(currentElement.left){
                qeueu.push(currentElement.left)
            }
            if(currentElement.right){
                qeueu.push(currentElement.right)
            }
            visited.push(currentElement.value);

        }
        return visited;
    }


}


bt = new BT();
bt.insert(10);
bt.insert(14);
bt.insert(6);
bt.insert(12);
bt.insert(15);
bt.insert(8);
bt.insert(3);
bt.insert(1);
bt.traverse();