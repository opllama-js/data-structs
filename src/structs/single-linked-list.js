import { Node } from "./node";
import {
  REMOVE_FROM_EMPTY_STRUCT,
  INDEX_OUT_OF_BOUNDS,
  BAD_NODE
} from "../errors";

/**
 * Creates a Singly Linked List
 */
export class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * adds a node to the end of the list.
   * @param {*} val the value used to create a node to push.
   */
  push(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  /**
   * Removes the last node from the list
   */
  pop() {
    if (this.head === null) {
      throw new Error(REMOVE_FROM_EMPTY_STRUCT);
    }

    let preTail = this.head;
    let current = this.head;
    while (current.next !== null) {
      preTail = current;
      current = current.next;
    }

    preTail.next = null;
    this.tail = preTail;
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    }
  }

  /**
   * Removes the first node in the list
   */
  shift() {
    if (this.head === null) {
      throw new Error(REMOVE_FROM_EMPTY_STRUCT);
    }
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
  }

  /**
   * Adds a node at the beginning of the list
   * @param {*} val the value to be added
   */
  unshift(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /**
   * Returns the node at the specified index
   * @param {*} index the index of the node
   * @returns { Node } the node at the specified index
   */
  getNodeAt(index) {
    if (index < 0 || index >= this.length) throw new Error(INDEX_OUT_OF_BOUNDS);
    if (index === this.length - 1) return this.tail;

    let target = this.head;
    let counter = 0;
    while (counter !== index) {
      target = target.next;
      counter++;
    }

    return target;
  }

  /**
   * Changes the value of a node at a specified index
   * @param {*} value the new value for the node
   * @param {number} index the index of the node to modify
   */
  setNodeAt(value, index) {
    const node = this.getNodeAt(index);
    if (!node) throw new Error(BAD_NODE);
    node.value = value;
  }

  /**
   * Adds a new node at the specified index.
   * @param {*} value the value of the node to insert
   * @param {number} index the index at which to insert the node
   */
  insertAt(value, index) {
    if (index < 0 || index > this.length) throw new Error(INDEX_OUT_OF_BOUNDS);
    if (index === this.length) this.push(value);
    else if (index === 0) this.unshift(value);
    else {
      const prevNode = this.getNodeAt(index - 1);
      const node = new Node(value);
      node.next = prevNode.next;
      prevNode.next = node;
      this.length++;
    }
  }

  /**
   * Removes a node at the specified index
   * @param {number} index the index of the node
   */
  removeAt(index) {
    if (index < 0 || index >= this.length) throw new Error(INDEX_OUT_OF_BOUNDS);
    if (index === this.length - 1) this.pop();
    else if (index === 0) this.shift();
    else {
      const prevNode = this.getNodeAt(index - 1);
      prevNode.next = prevNode.next.next;
      this.length--;
    }
  }

  /**
   * Reverse the list
   */
  reverse() {
    let node = this.head;
    [this.head, this.tail] = [this.tail, node];
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}
