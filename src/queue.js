const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this._queue = [];
  }

  getUnderlyingList() {
    let value = null;
    let nextValue = null;
    if (this._queue[0] !== undefined) {
      value = this._queue[0];
    }
    if (this._queue[1] !== undefined) {
      nextValue = this._queue[1];
    }
    return {
      value: value,
      next: nextValue
    }
  }

  enqueue(value) {
    this._queue.push(value);
  }

  dequeue() {
    return this._queue.shift();
  }
}

module.exports = {
  Queue
};
