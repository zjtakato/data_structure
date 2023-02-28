/**
 * https://www.bilibili.com/video/BV1k34y1Q7w8?p=63&spm_id_from=pageDriver&vd_source=e6fa63b26386483c7012ce1b5778978b
 * 基于链地址法的基于数据的Hash表
 * 原理：用插入的key做散列，并用这个散列的值作为数组的下标，将下标与key对应起来。value为一个bucket，用于存放哈希冲突的元素(每个数组单元存储的是一个数组或链表)
 * 优点：
 *    1. 非常快速的插入-删除-查找操作
 *    2 .插入和删除只需要O(1)
 * 缺点：
 *    1. 没有顺序，不能以固定的形式来遍历其中的对象
 *    2. key不允许重复
 */

class HashTable {
  constructor() {
    this.storage = [];
    this.count = 0;
    this.limit = 5;
  }

  /**
   * 1.将字符串转换成hashcode
   * 2.将大的hashcode压缩到数组范围之内
   * @param {string} str 字符串
   * @param {number} size hashTable的长度
   * @returns {string} hashCode
   */
  hashFunc(str, size) {
    let hashCode = 0;
    // 霍纳算法,用来计算hashCode的值
    for (let index = 0; index < str.length; index++) {
      hashCode = 37 * hashCode + str.charCodeAt(index);
    }
    // 取余
    const index = hashCode % size;
    return index;
  }

  /**
   * 增加或编辑操作
   * @param {string} key
   * @param {string} value
   * @returns {void} undefined
   */
  put(key, value) {
    const index = this.hashFunc(key, this.limit);

    /**@type {Array<Array<string>> | undefined} */
    let bucket = this.storage[index];
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket = [];
    }
    // 查找桶中是否已经有元素，有就是编辑操作
    for (let index = 0; index < bucket.length; index++) {
      const tuple = bucket[index];
      if (tuple[0] === key) return (tuple[1] = value);
    }

    // 没有则往桶中添加元素
    bucket.push([key, value]);
    this.count++;

    // 如果元素数量大于 0.75 * limit, 执行扩容操作
    if (this.count > this.limit * 0.75) {
      this.resize(this.getPrime(this.limit * 2));
    }
  }

  /**
   * 根据key获取元素
   * @param {string} key
   * @returns {string | null}
   */
  get(key) {
    const index = this.hashFunc(key, this.limit);

    /**@type {string[][] | undefined } */
    const bucket = this.storage[index];
    if (!bucket) return false;
    for (let index = 0; index < bucket.length; index++) {
      const tuple = bucket[i];
      if (tuple[0] === key) return tuple[1];
    }
    return null;
  }

  /**
   * 通过key删除元素
   * @param {string} key
   * @returns {boolean} true表示删除成功 false表示删除失败
   */
  remove(key) {
    const index = this.hashFunc(key, this.limit);
    /**@type {string[][] | undefined} */
    const bucket = this.storage[index];
    if (!bucket) return;
    for (let index = 0; index < bucket.length; index++) {
      const tuple = bucket[index];
      bucket.splice(i, 1);
      this.count--;
      return true;
    }

    // 如果元素数量小于 0.75*, 执行缩容操作
    if (this.limit > 7 && this.count < this.limit * 0.25) {
      this.resize(this.getPrime(Math.floor(this.limit / 2)));
    }

    return false;
  }

  /**
   * hashTable 扩容/缩容 操作
   * @param {number} newLimit
   * @returns {void} undefined
   */
  resize(newLimit) {
    const oldStorage = this.storage;
    this.count = 0;
    this.storage = [];
    this.limit = newLimit;
    for (let index = 0; index < oldStorage.length; index++) {
      const bucket = oldStorage[index];
      if (!bucket) continue;
      for (let j = 0; j < bucket.length; j++) {
        const tuple = bucket[j];
        this.put(tuple[0], tuple[1]);
        this.count++;
      }
    }
  }

  /**
   * //FIXME: 此处可以使用cache
   * 通过开平方根判断一个数字是不是质数
   * @param {number} num
   * @returns {boolean}
   */
  isPrime(num) {
    const temp = parseInt(Math.sqrt(num));
    for (let index = 2; index <= temp; index++) {
      if (num % index === 0) return false;
    }
    return true;
  }

  /**
   * 递增找出一个数最近的质数
   * @param {number} num
   * @returns {number} primeNumber 质数
   */
  getPrime(num) {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  }
}

const ht = new HashTable();
ht.put('name','shuaigebie');
ht.put('age', 18)
ht.put('address', 'china')
ht.put('a', 'xxx')
console.log(ht.storage);