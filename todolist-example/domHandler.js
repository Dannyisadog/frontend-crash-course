export const createTodoItem = (todoItemName) => {
    const div = document.createElement("div");
    const divText = document.createTextNode(todoItemName);

    div.classList = "todo-item";

    div.appendChild(divText);

    return div;
}

export const clearContent = (content) => {
    content.innerHTML = "";
}

export const clearInputValue = (input) => {
    input.value = "";
}

export const getNodes = () => {
    const addButton = document.querySelector(".add-button");
    const input = document.querySelector(".todo-input");
    const content = document.querySelector(".content");

    return {
        addButton,
        input,
        content
    };
}