// 单向链表: 单向链表是链表中的一种，其特点是链表的链接方向是单向的，对链表的访问要通过顺序读取从头开始；链表是使用指针进行构建的列表，又称为节点列表，因为链表是由一个个节点组装起来的。
// 链表就是通过指针将一组零散的内存块串联在一起

// 单向链表 与 数组 的区别
// 1. 内存区别
    // 数组: 数组在内存中时一块连续的区域，在不确定数组占用内存大小的情况下使用数组可能会浪费内存空间。即数组的空间利用率低
    // 链表：链表在内存中是分散的，可以动态的申请和删除内存空间。故链表的空间利用率较高
// 2. 访问效率
    // 数组：由于数组的内存是连续的，想要访问某个元素，直接从数组的首地址往后偏移就可以访问了。所以数组的随机访问效率的时间复杂度是O(1)
    // 链表：由于链表的空间是分散的，所以不具有随机访问性，想要随机访问某个元素，只能从头依次往后遍历，时间复杂度最高是O(n)
// 3. 添加(删除)效率
    // 数组：添加效率较为低下，因为操作元素后，数组后面的所有元素都要进行偏移，所以其时间复杂度最高是O(n)，对于尾部元素的操作是O(1)
    // 链表：单向链表需要从头遍历获取元素下标，所以其时间复杂度最高时O(n), 对于头部元素的操作时O(1)


class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  /**
   * 往链表尾部插入数据
   * @param {any} element 
   * @returns {void} undefined
   */
  append(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.getNode(this.size - 1);
      current.next = node;
    }
    this.size++;
  }

  /**
   * 往链表任意位置插入元素
   * @param {number} postion 
   * @param {any} element 
   * @returns {void} undefined
   */
  appendAt(postion, element) {
    if (postion < 0 || postion > this.size) {
      throw new Error('postion out range');
    }
    let node = new Node(element);
    // 插头部
    if (postion === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      // 插中间机及其尾部
      let pre = this.getNode(postion - 1);
      node.next = pre.next;
      pre.next = node;
    }
    this.size++;
  }

  /**
   * 删除链表某个元素
   * @param {number} postion 
   * @returns {void} undefined
   */
  removeAt(postion) {
    if (postion < 0 || postion > this.size) {
      throw new Error('position out range');
    }
    let current = this.head;
    if (postion === 0) {
      this.head = current.next;
    } else {
      let pre = this.getNode(postion - 1);
      current = pre.next;
      pre.next = current.next;
    }
    this.size--;
  }

  /**
   * 获取链表某个元素的下标
   * @param {any} element 
   * @returns {number} 元素的下标
   */
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.element === element) return i;
      current = current.next;
    }
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
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
}

let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.appendAt(0, 0);
ll.appendAt(2, 222);
ll.removeAt(0);
const index = ll.indexOf(222);
console.log(index);

console.dir(ll, { depth: 100 });
