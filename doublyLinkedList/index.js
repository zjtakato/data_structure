class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.pre = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * 往链表尾部插入元素
   * @param {any} element
   * @returns {void} undefined
   */
  append(element) {
    const node = new Node(element);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.pre = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  /**
   * 在position的位置插入元素(与数组的splice相似)
   * @param {number} position
   * @param {any} element
   * @returns {void} undefined
   */
  appendAt(position, element) {
    if (position < 0 || position > this.size) {
      throw new Error('position out range');
    }
    const node = new Node(element);
    // 链表为空时
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    }
    // 插头部
    if (position === 0) {
      node.next = this.head;
      this.head.pre = node;
      this.head = node;
      this.size++;
      return;
    }
    // 插尾部
    if (position === this.size) {
      node.pre = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.size++;
      return;
    }
    // 插中间
    const positionNode = this.getNode(position);
    node.pre = positionNode.pre;
    node.next = positionNode;
    positionNode.pre.next = node;
    positionNode.pre = node;
    this.size++;
  }

  /**
   * 通过下标删除链表某个元素
   * @param {number} position 下标
   * @returns {void} undefined
   */
  removeAt(position) {
    if (position < 0 || position > this.size) {
      throw new Error('position out range');
    }
    let currentNode = this.getNode(position);
    // 只有一个节点时
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }
    // 删除头部时
    if (position === 0) {
      this.head = currentNode.next;
      this.head.pre = null;
      this.size--;
      return;
    }
    // 删除尾部时
    if (position === this.size - 1) {
      this.tail = currentNode.pre;
      this.tail.next = null;
      this.size--;
      return;
    }
    // 删除中间时
    const pre = currentNode.pre;
    const next = currentNode.next;
    pre.next = next;
    next.pre = pre;
    this.size--;
    return;
  }

  /**
   * 根据下标获取元素
   * @param {number}  下标
   * @returns {any} 链表元素
   */
  getNode(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('out range');
    }
    const forward = this.size / 2 > index;
    let current = forward ? this.head : this.tail;
    if (forward) {
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      for (let i = this.size - 1; i > index; i--) {
        current = current.pre;
      }
    }
    return current;
  }
}

let xx = new DoublyLinkedList();
xx.append('第一个');
xx.append('第二个');

xx.appendAt(1, '强势插入');
xx.appendAt(0, '强势插入首位');
xx.appendAt(4, '强势插入尾部');

xx.removeAt(4);

console.dir(xx, { depth: 999 });
