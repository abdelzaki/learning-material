class Graph{
    constructor(){
        this.elements = {}
    }
    addElement(element){
        if(!this.elements[element]){
            this.elements[element] = [];
            return this;
        }
    }

    addRelation(element1,element2){
        this.elements[element1].push(element2);
        this.elements[element2].push(element1);
        return this;
    }

    removeRelation(element1, element2){
        this.elements[element1] = this.elements[element1].filter(el1 => el1 !== element2)
        this.elements[element2] = this.elements[element2].filter(el2 => el2 !== element1 )
        return this;
    }

    removeElement(element){
         this.elements[element].forEach(ele => {
             this.removeRelation(element,ele)  
         });
        
         delete this.elements[element];
         return this;
    }

    traverGraphRecursive(startingElement){
        if(!this.elements[startingElement]) return;
        const visited = [];
        const traverseGraphRecur = (element) => {
            console.log(element)
            if(!visited.includes(element)){
                visited.push(element);
                this.elements[element].forEach(ele=>{
                    traverseGraphRecur(ele)
                })
            }
        }
        traverseGraphRecur(startingElement);
        return visited;
    }
}

// graph = new Graph;
// graph.addElement("cairo")
// graph.addElement("alex")
// graph.addElement("new York")
// graph.addElement("berlin")
// graph.addElement("wedel")
// graph.addRelation("wedel","alex");
// graph.addRelation("cairo","alex");
// graph.addRelation("new York","alex");
// graph.addRelation("cairo","new York");
// graph.addRelation("cairo","berlin");
// graph.removeElement("cairo");
// graph.removeElement("new York");

graph2 = new Graph;
graph2.addElement("A");
graph2.addElement("B");
graph2.addElement("C");
graph2.addElement("D");
graph2.addElement("E");
graph2.addElement("F");
graph2.addElement("FF");
graph2.addRelation("A","C");
graph2.addRelation("A","B");
graph2.addRelation("B","D");
graph2.addRelation("C","E");
graph2.addRelation("D","E");
graph2.addRelation("E","F");
graph2.addRelation("F","F");
graph2.traverGraphRecursive("E")