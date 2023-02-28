/** 队列封装 */
class Queue {
   constructor() {
    this.items = [];
  }
  /**
   * 往队尾插入队列
   * @param {any} element 添加的元素
   * @returns {void}
   */
  enqueue(element) {
    this.items.push(element);
  }

  /**
   * 删除队首的元素并返回
   * @returns {any} 队首的元素
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * 返回队首的元素
   * @returns {any} 队首的元素
   */
  front() {
    return this.items[0];
  }

  /**
   * 判断队列是否为空
   * @returns {boolean} 队列是否为空
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * 获取队列中元素的个数
   * @returns {number} 队列中元素的个数
   */
  size() {
    return this.items.length;
  }

  /**
   * @returns {string} 将队列结构的内容以字符串形式返回
   */
  toString() {
    return this.items.join(' ');
  }
}
