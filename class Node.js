class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return; // No duplicates
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      else current = current.right;
    }
    return false;
  }

  inOrderTraversal(node = this.root, result = []) {
    if (!node) return;
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
    return result;
  }
}

const bst = new BST();

function insertValue() {
  const val = parseInt(document.getElementById("valueInput").value);
  if (!isNaN(val)) {
    bst.insert(val);
    document.getElementById("result").innerText = `Inserted ${val}`;
  }
}

function searchValue() {
  const val = parseInt(document.getElementById("valueInput").value);
  if (!isNaN(val)) {
    const found = bst.search(val);
    document.getElementById("result").innerText = found
      ? `${val} found in tree`
      : `${val} not found`;
  }
}

function sortTree() {
  const sorted = bst.inOrderTraversal();
  document.getElementById("result").innerText = `Sorted values: ${sorted.join(", ")}`;
}
