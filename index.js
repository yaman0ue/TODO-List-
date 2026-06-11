const inputElement = document.getElementById("add-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// 4. 追加処理を addTodo 関数としてまとめる
const addTodo = () => {
  const li = document.createElement("li");
  todoList.appendChild(li);
  li.innerHTML = "ほげほげ";
  li.className = "todo-li";
};

// ボタンがクリックされたら addTodo を実行する
addButton.addEventListener("click", addTodo);
