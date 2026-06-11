const inputElement = document.getElementById("add-input"); /*第一問 A */
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const Sample = document.getElementById("sample");
console.log(Sample);//=null /*第十問 D*/

addButton.addEventListener("click",()=>{
  if (inputElement.value == "" ){
    alert("TODOを入力してください");
    return;
  }
  // <li>要素を新しく作成する
  const li = document.createElement("li"); /*第三問 C*/

  // <ul>要素の中に、作成した<li>を追加する
  todoList.appendChild(li); /*第四問 D*/

  // <li>の中にテキストを入れる
  li.innerHTML /*第五問 B*/ = inputElement.value; /*第六問 C*/

  // <li>にCSSを当てるために className を設定する
  li.className = "todo-li"; /*第九問 A*/

  //<button>要素を新しく作成する
  const delete_btn = document.createElement("button");

  //<li>に、作成した<btn>を連結する
  li.appendChild(delete_btn);

  //<btn>の中にテキストを入れる
  delete_btn.innerHTML = "DELETE";

  //DELETEボタンを押したら、<li>が消える (前にliとbtnは連結してるため一緒に消える)
  delete_btn.addEventListener("click",()=>{
    li.remove(); /*第八問 C*/
  }) 

  // ADDボタンを押したあと、空白にする
  inputElement.value="";  /*第七問 B*/
})  /*第二問 B*/

// 既存のDELETEボタンに削除機能を追加する
const exist_delete_btn = document.querySelectorAll("#todo-list button");
const exist_li = document.querySelectorAll("#todo-list li")

for (let i=0 ; i<=3;i++){
  exist_delete_btn[i].addEventListener("click",()=>{
    exist_li[i].remove();
  })
}

/*参考文献
https://pikawaka.com/javascript/querySelectorAll
*/
