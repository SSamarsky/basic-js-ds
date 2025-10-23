const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let arr = [];

  function addArrValue(l) {
    if (l.next === null) {
      arr.push({
        value: l.value,
        next: null,
      });
    } else {
      arr.push({
        value: l.value,
        next: null,
      });
      addArrValue(l.next);
    }
  }
 
  addArrValue(l);

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value !== k) {
      newArr.push(arr[i]);
    }
  }

  let len = newArr.length - 1;
  for (let i = len; i > 0; i--) {
    if (newArr[i - 1].next !== undefined) {
      newArr[i - 1].next = newArr[i];
    }
  }

  return newArr[0];
}

module.exports = {
  removeKFromList
};
