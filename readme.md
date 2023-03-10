# 什么是数据结构
## 数据解耦是计算机中存储和组织数据的方式。选择正确的数据结构可以带来最优效率的算法。

## 栈

### 栈是一种常见的受限的线性结构，栈只能在栈顶对数据进行操作（后进先出LIFO（Last In First Out）），无法对栈底或者中间的数据进行操作（只有进栈或出栈这两者操作）

### 栈常见的操作

#### push 添加一个新元素到栈顶
#### pop 移除栈顶的元素并返回该元素
#### peek 仅返回栈顶的元素
#### isEmpty 判断栈里是否有元素
#### size 返回栈里的元素个数
#### toString 将栈结构的内容以字符串形式返回

## 队列（quene）

### 队列也是一种常见的受限的线性结构，队列只能在队列的前端进行删除操作，后端进行插入操作（先进先出FIFO（First In First Out））,无法对队列中间的数据进行操作

### 队列常见的操作

#### enqueue 向队列尾添加一个新的元素
#### dequeue 移除队首的元素，并返回该元素
#### front  返回队首的第一个元素
#### isEmpty 判断队列是否为空
#### size 返回队列的个数
#### toString 将队列结构的内容以字符串形式返回

## 集合

### 集合通常时一组无须的，不能重复的元素构成的,es6中以及包含了Set类

## 红黑树
### 红黑树除了要符合二叉搜素树的基本规则外，还需要满足以下规则
#### 1.节点是红色或者黑色
#### 2.根节点是黑色
#### 3.每个叶子节点都是黑色的空节点(NIF) 
#### 4.每个红色节点的两个子节点都是黑色。(从每个叶子到根的所有路径上不能有两个连续的红色节点(红色不能指向红色))
#### 5.从任一节点到其每个叶子的所有路径都包含相同数目的黑色节点(从某一几点到任意一个叶子节点的线路，黑色节点的个数都需要一样)