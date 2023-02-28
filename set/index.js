class Set {
  constructor() {
    this.items = {};
  }

  /**
   * 往集合内添加元素
   * @param {any} element 要添加的元素
   * @returns {boolean}
   */
  add(element) {
    if (this.has(element)) return false;
    this.items[element] = element;
    return true;
  }

  /**
   * 判断集合中是否含有某个元素
   * @param {any} element 要判断的元素
   * @returns {boolean}
   */
  has(element) {
    return this.items.hasOwnProperty(element);
  }

  /**
   * 删除集合中的某个元素
   * @param {any} element 要删除的元素
   * @returns {boolean}
   */
  remove(element) {
    return this.has(element) && delete this.items[element];
  }

  /**
   * 清除集合中的所有元素
   * @returns {boolean}
   */
  clear() {
    this.items = {};
    return true;
  }

  /**
   * 获取集合的长度
   * @returns {number} 集合的长度
   */
  size() {
    return Object.keys(this.items).length;
  }

  /**
   * 获取集合中的所有值
   * @returns {string[]} 集合中的所有值
   */
  values() {
    return Object.keys(this.items);
  }

  /**
   * 并集两个集合(合并两个集合)
   * @param {Set} set 另一个集合
   * @returns {Set} 两个集合并集之后的集合
   */
  union(set) {
    const unionSet = new Set();
    let values = this.values();
    for (let index = 0; index < values.length; index++) {
      unionSet.add(values[index]);
    }
    values = set.values();
    for (let index = 0; index < values.length; index++) {
      unionSet.add(values[index]);
    }
    return unionSet;
  }

  /**
   * 交集两个集合(找出两个集合中相同的元素)
   * @param {Set} set 要被相交的集合
   * @returns {Set} 两者相交后的集合
   */
  intersection(set) {
    const intersection = new Set();
    let values = this.values();
    for (let index = 0; index < values.length; index++) {
      const item = values[index];
      set.has(item) && intersection.add(item);
    }
    return intersection;
  }

  /**
   * 差集两个集合(找出两个集合中没有相同的元素)
   * @param {Set} set
   * @returns {Set} differenceSet
   */
  difference(set) {
    const differenceSet = new Set();
    let values = this.values();
    for (let index = 0; index < values.length; index++) {
      const item = values[index];
      !set.has(item) && differenceSet.add(item);
    }
    return differenceSet;
  }

  /**
   * 判断该集合是不是传入集合的子集
   * @param {Set} parentSet 传入的集合
   * @returns {boolean}
   */
  subSet(parentSet) {
    let values = this.values();
    for (let index = 0; index < values.length; index++) {
      const item = values[index];
      if (!parentSet.has(item)) {
        return false;
      }
    }
    return true;
  }
}


const fatherSet = new Set();
fatherSet.add('1');
fatherSet.add('2');
const sonSet = new Set();
sonSet.add('2');

console.log(fatherSet.union(sonSet))
console.log(fatherSet.intersection(sonSet));
console.log(fatherSet.difference(sonSet));
console.log(sonSet.subSet(fatherSet));

