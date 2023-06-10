class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
    }

    addNode(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let currentNode = this.head;
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
    }

    removeNode(value) {
      if (this.head === null) {
        return;
      }

      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }

      let currentNode = this.head;
      let prevNode = null;

      while (currentNode !== null && currentNode.value !== value) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      if (currentNode === null) {
        return;
      }

      prevNode.next = currentNode.next;
    }
  }

  // Queue Implementation
  class Queue {
    constructor() {
      this.elements = [];
    }

    enqueue(value) {
      this.elements.push(value);
    }

    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.elements.shift();
    }

    isEmpty() {
      return this.elements.length === 0;
    }
  }

  // Stack Implementation
  class Stack {
    constructor() {
      this.elements = [];
    }

    push(value) {
      this.elements.push(value);
    }

    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.elements.pop();
    }

    isEmpty() {
      return this.elements.length === 0;
    }
  }

  // Interactive Visualization
  const linkedList = new LinkedList();
  const queue = new Queue();
  const stack = new Stack();

  const linkedListNodesElement = document.getElementById("linked-list-nodes");
  const queueElementsElement = document.getElementById("queue-elements");
  const stackElementsElement = document.getElementById("stack-elements");

  function updateLinkedListVisualization() {
    linkedListNodesElement.innerHTML = "";
    let currentNode = linkedList.head;
    while (currentNode !== null) {
      const nodeElement = document.createElement("li");
      nodeElement.innerText = currentNode.value;
      linkedListNodesElement.appendChild(nodeElement);
      currentNode = currentNode.next;
    }
  }

  function updateQueueVisualization() {
    queueElementsElement.innerHTML = "";
    for (let i = 0; i < queue.elements.length; i++) {
      const element = queue.elements[i];
      const elementElement = document.createElement("li");
      elementElement.innerText = element;
      queueElementsElement.appendChild(elementElement);
    }
  }

  function updateStackVisualization() {
    stackElementsElement.innerHTML = "";
    for (let i = stack.elements.length - 1; i >= 0; i--) {
      const element = stack.elements[i];
      const elementElement = document.createElement("li");
      elementElement.innerText = element;
      stackElementsElement.appendChild(elementElement);
    }
  }

  function addNode() {
    const valueInput = document.getElementById("node-value");
    const value = valueInput.value;
    linkedList.addNode(value);
    updateLinkedListVisualization();
    valueInput.value = ""; // Clear the input field after adding the node
  }
  
  function removeNodeByValue() {
    const valueInput = document.getElementById("node-value");
    const value = valueInput.value;
    linkedList.removeNode(value);
    updateLinkedListVisualization();
    valueInput.value = ""; // Clear the input field after removing the node
  }

  function enqueue() {
    const valueInput = document.getElementById("enqueue-value");
    const value = valueInput.value;
  
    // Display the enqueued value
    const elementElement = document.createElement("li");
    elementElement.innerText = value;
    queueElementsElement.appendChild(elementElement);
  
    // Enqueue the value
    queue.enqueue(value);
    valueInput.value = ""; // Clear the input field after enqueuing the element
  }
  

  function dequeue() {
    const dequeuedElement = queue.dequeue();
    if (dequeuedElement !== null) {
      // Remove the dequeued element from the visualization
      const elementList = queueElementsElement.getElementsByTagName("li");
      if (elementList.length > 0) {
        elementList[0].remove();
      }
    } else {
      alert("Queue is empty!");
    }
  }
  

  function push() {
    const valueInput = document.getElementById("push-value");
    const value = valueInput.value;
    
    if (value !== "") {
      stack.push(value);
      updateStackVisualization();
      valueInput.value = ""; // Clear the input field after pushing the element
    }
}

  function pop() {
    const poppedElement = stack.pop();
    if (poppedElement !== null) {
    } else {
      alert("Stack is empty!");
    }
    updateStackVisualization();
  }
  document.getElementById("add-node").addEventListener("click", addNode);