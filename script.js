const todoList = document.querySelector("#todo-list");

document.querySelector("#show-todo-api").addEventListener("click", function () {
  fetch("http://localhost:4730/todos")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      data.forEach((todo) => {
        const createLi = document.createElement("li");
        const createCheckbox = document.createElement("input");
        createCheckbox.type = "checkbox";

        todoList.appendChild(createLi);
        createLi.textContent = todo.description;

        createLi.appendChild(createCheckbox);

        if (todo.done === true) {
          createCheckbox.checked = "true";
        }
      });
    });
});
const fetchUrl = "http://localhost:4730/todos";
const newInput = document.querySelector("#create-new-task");

document.querySelector("#add-todo-api").addEventListener("click", function () {
  fetch(fetchUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: newInput.value,
      done: false,
    }),
  })
    .then((response) => {
      if (response.status) {
        return response.json();
      }
    })
    .then((newInput.value = ""));
});

let doneTodos = [];

document
  .querySelector("#delete-todo-api")
  .addEventListener("click", function () {
    const deleteAllQuery = [];

    if (newInput.value.done === true) {
      deleteAllQuery.push(fetch(fetchUrl), {
        method: "DELETE",

        body: JSON.stringify({
          description: newInput.value,
          done: true,
        }),
      });
    }
  });
