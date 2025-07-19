// 🌙 Theme toggle
document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Optional: Change button icon
  this.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// 🔌 Logic gate tester
function testGates() {
  const A = document.getElementById("inputA").checked ? 1 : 0;
  const B = document.getElementById("inputB").checked ? 1 : 0;

  document.getElementById("andOut").textContent = A & B;
  document.getElementById("orOut").textContent = A | B;
  document.getElementById("xorOut").textContent = A ^ B;
  document.getElementById("notAOut").textContent = A ? 0 : 1;
}

// 🧠 Code runner for JavaScript demo
function runCode() {
  const code = document.getElementById("code-editor").value;
  try {
    const result = eval(code);
    document.getElementById("code-output").textContent = result ?? "✅ Code ran successfully";
  } catch (err) {
    document.getElementById("code-output").textContent = "❌ Error: " + err.message;
  }
}
// Stack Logic
let stack = [];

function pushStack() {
  const value = document.getElementById("stack-input").value;
  if (value) {
    stack.push(value);
    document.getElementById("stack-input").value = "";
    renderStack();
  }
}

function popStack() {
  stack.pop();
  renderStack();
}

function renderStack() {
  document.getElementById("stack-display").innerHTML = stack
    .slice()
    .reverse()
    .map((item) => `<div>${item}</div>`)
    .join("");
}

// Queue Logic
let queue = [];

function enqueue() {
  const value = document.getElementById("queue-input").value;
  if (value) {
    queue.push(value);
    document.getElementById("queue-input").value = "";
    renderQueue();
  }
}

function dequeue() {
  queue.shift();
  renderQueue();
}

function renderQueue() {
  document.getElementById("queue-display").innerHTML = queue
    .map((item) => `<div>${item}</div>`)
    .join(" → ");
}

// Binary Tree Traversal (Preorder Example)
const tree = {
  value: "A",
  left: {
    value: "B",
    left: { value: "D" },
    right: { value: "E" },
  },
  right: {
    value: "C",
    left: { value: "F" },
    right: { value: "G" },
  },
};

function preorder(node) {
  if (!node) return [];
  return [node.value].concat(preorder(node.left), preorder(node.right));
}

function showTreeTraversal() {
  const result = preorder(tree);
  document.getElementById("tree-output").textContent = "Preorder: " + result.join(" → ");
}
