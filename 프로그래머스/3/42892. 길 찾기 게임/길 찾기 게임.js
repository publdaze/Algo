// 모든 노드 서로 다른 x값
// 같은 레벨 같은 y
// 부모 y > 자식 y

function getSubtree(subtree) {
    if (subtree.length === 0) return null;
    
    const parentNode = subtree.pop();
    
    parentNode.left = getSubtree(subtree.filter(({x}) => x < parentNode.x));
    parentNode.right = getSubtree(subtree.filter(({x}) => x > parentNode.x));
    
    return parentNode;
}

function getTree(nodeinfo) {
    const sortedNodeInfo = nodeinfo
    .map(([x, y], i) => ({ node: i + 1, x, y }))
    .sort((a, b) => a.y - b.y || b.x - a.x);
    
    return getSubtree(sortedNodeInfo);
}

function preorder(tree) {
    const preorderNodes = [];
    
    const leftStack = [tree];
    const rightStack = [];
    
    while (leftStack.length > 0 || rightStack.length > 0) {
        const node = leftStack.length > 0 ? leftStack.pop() : rightStack.pop();
        preorderNodes.push(node.node);
        
        if (node.left) leftStack.push(node.left);
        if (node.right) rightStack.push(node.right);
    }
    
    return preorderNodes;
}

function postorder(tree) {
    if (tree === null) return [];
    
    const left = postorder(tree.left);
    const right = postorder(tree.right);
    
    return [...left, ...right, tree.node];
}

function solution(nodeinfo) {
    const tree = getTree(nodeinfo);
    
    return [preorder(tree), postorder(tree)];
}