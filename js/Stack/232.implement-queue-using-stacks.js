/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
class QueueWithStacks {
    constructor() {
        this.in = [];
        this.out = [];
    }

    enqueue(val) {
        this.in.push(val);
    }

    dequeue() {
        if (this.out.length === 0) {
            while (this.in.length > 0) {
                this.out.push(this.in.pop());
            }
        }

        return this.out.pop();
    }

    peek() {
        if (this.out.length === 0) {
            while (this.in.length > 0) {
                this.out.push(this.in.pop());
            }
        }

        return this.out[this.out.length - 1];
    }

    empty() {
        return this.in.length === 0 && this.out.length === 0;
    }
};

var MyQueue = function () {
    this.stack = new QueueWithStacks();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack.enqueue(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    return this.stack.dequeue();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.stack.peek();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack.empty();
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

