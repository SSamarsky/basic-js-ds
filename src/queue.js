const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

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
    let obj = {};
    let arr = [...this._queue];

    let l = arr.length - 1;
    for (let i = l; i > 0; i--) {
      if (arr[i - 1].next !== undefined) {
        arr[i - 1].next = arr[i];
      }
    }

    return arr[0] || null;
  }

  enqueue(value) {
    this._queue.push({
      value: value,
      next: null
    });
  }

  dequeue() {
    if (!this._queue.length) return;
    if (this._queue.length > 0) return this._queue.shift().value || null;
    else return null;
  }
}

module.exports = {
  Queue
};
