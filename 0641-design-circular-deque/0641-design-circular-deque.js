/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.que = []
    this.k = k
    this.start = 0
    this.end = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.que.length === this.k) return false
    this.que.unshift(value)
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.que.length === this.k) return false
    this.que.push(value)
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.que.length > 0) {
        this.que.shift()
        return true
    }
    return false

};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.que.length > 0) {
        this.que.pop()
        return true
    }
    return false
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    let ele = this.que[0]
    if (ele!==undefined) return ele
    return -1
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    let ele = this.que[this.que.length-1]
    if (ele!==undefined) return ele
    return -1
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    if(this.que.length===0)return true
    return false
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
     if(this.que.length===this.k)return true
    return false
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */