console.log("Todo List Loaded!");

const todoes = [];

/**
 * Adds a todo to the Todoes List (Array)
 *
 * @param {string} title
 */
function addTodo(title) {
  // Logic for å verifiser tittle
  if (title.length === 0) {
    console.error("Need title to proceed");
    return;
  }

  // Konstruer den nye Todo Modellen
  const newTodo = {
    title: title,
    isComplete: false,
  };

  // Legg til på slutten av listen
  todoes.push(newTodo);

  return newTodo;
}

/**
 * Remove a todo with ID
 *
 * @param {number} id
 */
function removeTodoById(id) {}

/**
 * Updates a todo with new information
 *
 * @param {number} id
 * @param {*} updatedInfo
 */
function updateTodoWithId(id, updatedInfo) {}

// Her kobles Todo List strukturen til DOMet

// Hent ut de elementene som trengs
const todoListElement = document.querySelector("#todo-list");
const inputField = todoListElement.querySelector("input");
const buttonElement = todoListElement.querySelector("button");
const listDisplay = todoListElement.querySelector("ul");

/**
 * Handles the process of adding a Todo Element
 */
function handleAddTodo() {
  // Les av input
  const inputValue = inputField.value;
  console.dir(inputField);

  // Legg til i listen
  const newTodo = addTodo(inputValue);

  // Oppdater HTML
  // 1. Lage elementet
  const newTodoElement = document.createElement("li");
  newTodoElement.textContent = newTodo.title;
  console.log(newTodoElement);

  // 2. Legg til i dokument
  listDisplay.append(newTodoElement);
}

// Koble funksjoner til knapper og andre hendelser
buttonElement.addEventListener("click", handleAddTodo);
