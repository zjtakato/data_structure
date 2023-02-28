class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * 添加一个元素到栈顶
   * @param {any} element 添加的元素
   * @returns {void}
   */
  push(element) {
    this.items.push(element);
  }

  /**
   * 移除栈顶的元素并返回该元素
   * @returns {void}
   */
  pop() {
    return this.items.pop();
  }

  /**
   * 仅返回栈顶的元素
   * @returns {void}
   */
  peek() {
    return this.items[this.items.length - 1];
  }

  /**
   * 判断栈里是否有元素
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * 返回栈里的元素个数
   * @returns {number}
   */
  size() {
    return this.items.length;
  }

  /**
   * 将栈结构的内容以字符串形式返回
   * @returns {string}
   */
  toString() {
    return this.items.join(' ');
  }
}