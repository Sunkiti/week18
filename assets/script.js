const newTask = document.querySelector(".newtask");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const remove = document.querySelector(".remove");

btn.addEventListener("click", () => {
    const userText = newTask.value;
    console.log(userText);
    if (userText == "") {
        alert("Введите задачу");
        return false;
    }
    // попытка сделать какую-то проверку формы
    const div = document.createElement("div");
    div.classList.add("container");
    const p = document.createElement("p");
    p.classList.add("text");
    p.textContent = userText;
    div.append(p);
    list.append(div);
});

remove.addEventListener("click", () => {
    list.remove();
})



