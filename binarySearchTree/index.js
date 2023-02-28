class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * 往二叉搜素树插入元素
   * @param {number} key
   * @returns {void}
   */
  insert(key) {
    const node = new Node(key);
    if (!this.root) return (this.root = node);
    this._insertNode(this.root, node);
  }

  /**
   * 私有方法，递归插入元素
   * @param {Node} root 根节点
   * @param {Node} newNode Node实例
   */
  _insertNode(root, newNode) {
    // 向左查找
    if (newNode.key < root.key) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this._insertNode(root.left, newNode);
      }
      return;
    }
    // 向右查找
    if (!root.right) {
      root.right = newNode;
    } else {
      this._insertNode(root.right, newNode);
    }
  }
  /**
   * previous 上一个
   * order 顺序
   * traversal 遍历
   * 先序遍历整颗二叉树
   * @param {function} handler 回调函数,与Array.prototype.map类似
   * @returns {void}
   */
  previousOrderTraversal(handler) {
    this._previousOrderTraversalNode(this.root, handler);
  }
  /**
   * 私有方法
   * 1. 访问其根节点
   * 2. 先序遍历其左子树
   * 2. 先序遍历其右子树
   * @param {Node} root 每个Node实例
   * @param {function} handler 回调函数,与Array.prototype.map类似
   */
  _previousOrderTraversalNode(root, handler) {
    if (root) {
      handler(root.key);
      // 递归遍历左节点
      this._previousOrderTraversalNode(root.left, handler);
      // 递归遍历右节点(此时由于调用栈的先进先出的关系,会找到所有的左节点后才找右节点)
      this._previousOrderTraversalNode(root.right, handler);
    }
  }

  /**
   * 中序遍历整个二叉树
   * @param {function} handler
   */
  middleOrderTraversal(handler) {
    this._middleOrderTraversalNode(this.root, handler);
  }

  /**
   * 私有方法
   * 1. 中序遍历其左子树
   * 2. 访问根节点
   * 3. 中序遍历其右子树
   * @param {*} root
   * @param {*} handler
   */
  _middleOrderTraversalNode(root, handler) {
    if (root) {
      this._middleOrderTraversalNode(root.left, handler);
      handler(node.key);
      this._middleOrderTraversalNode(root.right, handler);
    }
  }

  /**
   * 后序遍历整颗二叉树
   * @param {function} handler
   */
  postOrderTraversal(handler) {
    this._postOrderTraversalNode(this.root, handler);
  }

  /**
   * 私有方法
   * 1.后序遍历其左子树
   * 2.后序遍历其右子树
   * 3.访问根节点
   * @param {Node} Node实例
   * @param {function} handler
   */
  _postOrderTraversalNode(root, handler) {
    if (root) {
      this._postOrderTraversalNode(root.left, handler);
      this._postOrderTraversalNode(root.right, handler);
      handler(root.key);
    }
  }

  /**
   * 寻找最大值
   * @returns {number}
   */
  max() {
    let node = this.root;
    let key = null;
    while (node) {
      key = node.key;
      node = node.right;
    }
    return key;
  }

  /**
   * 寻找最小值
   * @returns {number}
   */
  min() {
    let node = this.root;
    let key = null;
    while (node) {
      key = node.key;
      node = node.left;
    }
    return key;
  }

  /**
   * 查询二叉树中是否有这个key
   * @param {number} key
   * @returns {boolean}
   */
  search(key) {
    let node = this.root;
    while (node) {
      if (key < node.key) {
        node = node.left;
      } else if (node > node.key) {
        node = node.right;
      } else {
        return true;
      }
    }
    return false;
  }

  /**
   * 删除某个节点
   * @param {number} key
   * @returns {void}
   */
  remove(key) {
    let current = this.root;
    let parent = null;
    let isLeftChid = true;
    // 寻找要删除的节点
    while (current.key != key) {
      parent = current;
      if (key < current.key) {
        isLeftChid = true;
        current = current.left;
      } else {
        isLeftChid = false;
        current = current.right;
      }
      if (!current) return false; // 没有找到这个key
    }
    // 根据对应的情况删除节点
    // 1. current没有子节点的情况下
    if (!current.left && !current.right) {
      if (current === this.root) this.root = null;
      if (isLeftChid) parent.left = null;
      if (!isLeftChid) parent.right = null;
      return;
    }
    // 2.current只有一个子节点的情况下,直接将子节点指向parent
    if (!current.right) {
      if (current === this.root) return (this.root = current.left);
      isLeftChid ? (parent.left = current.left) : (parent.right = current.left);
      return;
    }
    if (!current.left) {
      if (current === this.root) return (this.root = current.right);
      isLeftChid ? (parent.left = current.right) : (parent.right = current.right);
      return;
    }

    // 3. current有两个子节点的情况下,寻找当前current的前驱或后继
    const succssor = this.getSuccssor(current);
    if (current === this.root) return (this.root = succssor);
    isLeftChid ? (parent.left = succssor) : (parent.right = succssor);
    succssor.left = current.left;
  }

  /**
   * 寻找某个节点的后继
   * @param {number} key
   * @returns {Node} 后继
   */
  getSuccssor(deleteNode) {
    let succssor = deleteNode;
    let current = deleteNode.right;
    let succssorParent = deleteNode;
    while (current) {
      succssorParent = succssor;
      succssor = current;
      current = current.left;
    }
    // 判断寻找的后继节点是否就是deleteNode的right节点
    if (succssor != deleteNode.right) {
      succssorParent.left = succssor.right;
      succssor.right = deleteNode.right;
    }
    return succssor;
  }
}

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(2);
tree.insert(3);
tree.insert(50);
tree.insert(7);
tree.insert(100);
tree.insert(51);
console.dir(tree, { depth: 999 });
tree.remove(50);
console.dir(tree, { depth: 999 });
