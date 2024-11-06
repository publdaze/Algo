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
    if (tree === null) return [];
    
    const left = preorder(tree.left);
    const right = preorder(tree.right);
    
    return [tree.node, ...left, ...right];
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