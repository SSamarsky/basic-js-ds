const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._data = [];
    this._root = false;
  }

  root() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return {data: this._root}
  }

  add(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this._data.push(data);
    this._data = this._data.sort((a, b) => a - b);
    this._root = this._data[0];
  }

  has(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this._data.some(el => el === data);
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};