// Theme Toggle
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Logic Gates
function testGates() {
  const a = document.getElementById("a").checked ? 1 : 0;
  const b = document.getElementById("b").checked ? 1 : 0;
  const and = a & b;
  const or = a | b;
  const xor = a ^ b;
  document.getElementById("gate-results").innerText = `AND: ${and}, OR: ${or}, XOR: ${xor}`;
}

// Stack
let stack = [];
function pushStack() {
  const val = document.getElementById("stack-input").value;
  if (val) {
    stack.push(val);
    displayStack();
  }
}
function popStack() {
  stack.pop();
  displayStack();
}
function displayStack() {
  document.getElementById("stack-display").innerText = `Stack: [${stack.join(", ")}]`;
}

// Queue
let queue = [];
function enqueue() {
  const val = document.getElementById("queue-input").value;
  if (val) {
    queue.push(val);
    displayQueue();
  }
}
function dequeue() {
  queue.shift();
  displayQueue();
}
function displayQueue() {
  document.getElementById("queue-display").innerText = `Queue: [${queue.join(", ")}]`;
}

// Tree
function traverseTree() {
  const output = "A → B → D → E → C → F → G";
  document.getElementById("tree-output").innerText = output;
}

// Code Runner
function runCode() {
  const code = document.getElementById("code-input").value;
  try {
    const result = eval(code);
    document.getElementById("code-output").innerText = result;
  } catch (err) {
    document.getElementById("code-output").innerText = "Error: " + err.message;
  }
}
