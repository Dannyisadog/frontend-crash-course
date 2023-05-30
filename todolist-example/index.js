import { createTodoItem, clearContent, clearInputValue, getNodes } from "./domHandler.js";
import { addItem } from "./todolist.js";


const todoItems = [];

const {addButton, input, content} = getNodes();

addButton.addEventListener("click", () => {
    const value = input.value;
    addItem(value, todoItems);
    clearContent(content);
    for (let i = 0; i < todoItems.length; i++) {
        const todoItem = todoItems[i];
        const todoItemBlock = createTodoItem(todoItem);
        content.appendChild(todoItemBlock);
    }
    clearInputValue(input);
});