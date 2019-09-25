/**
 * Creates a node to be used in a structures.
 * @param { * } value the value that this node holds
 * @param { boolean } hasPrevRef if this node should hold a reference to the previous node.
 */
export class Node {
  constructor(value, hasPrevRef) {
    this.value = value;
    this.next = null;
    if (hasPrevRef) {
      this.prev = null;
    }
  }
}
