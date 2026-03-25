class Node {
    constructor(x, y, index){
        this.left = null;
        this.right = null;
        this.index = index;
        this.x = x;
        this.y = y;
    }
}

class Tree {
    constructor(){
        this.head = null;
        this.preArr = [];
        this.posArr = [];
    }
    
    insert(x, y, index){
        const node = new Node(x, y, index);
        
        if(this.head === null){
            this.head = node;
            return;
        }
        
        this.sort(this.head, node);
    }
    
    sort(preNode, curNode){
        if(preNode.y < curNode.y){
            if(preNode.x < curNode.x){
                curNode.left = preNode;
            }
            else curNode.right = preNode;
            
            return;
        }
        
        if(curNode.x < preNode.x){
            if(preNode.left === null) preNode.left = curNode;
            else this.sort(preNode.left, curNode);
        } else {
            if(preNode.right === null) preNode.right = curNode;
            else this.sort(preNode.right, curNode);
        }
    }
    
    preOrder(node) {
        if (node === null) return;
        this.preArr.push(node.index);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    
    postOrder(node) {
        if (node === null) return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        this.posArr.push(node.index);
    }
}

function solution(nodeinfo) {
    const nodes = nodeinfo.map((val, i) => ({ x: val[0], y: val[1], index: i + 1 }));

    nodes.sort((a, b) => {
        if (b.y !== a.y) return b.y - a.y;
        return a.x - b.x;
    });

    const tree = new Tree();
    for (let i = 0; i < nodes.length; i++) {
        tree.insert(nodes[i].x, nodes[i].y, nodes[i].index);
    }
    tree.preOrder(tree.head);
    tree.postOrder(tree.head);
    
    return [tree.preArr, tree.posArr];
}