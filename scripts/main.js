import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

function initTaskBoard() {
  const loadingMessage = document.getElementById("loading-message");

  try {
    const tasks = loadTasksFromStorage();

    clearExistingTasks();

    if(!tasks || tasks.length === 0) {
      //if there are no tasks
      loadingMessage.textContent = "Add your to do list tasks here...";
    } else {
      renderTasks(tasks);
      // Remove loading message after tasks rendered
     loadingMessage.textContent = "";
    } 
  } catch (error) {
    loadingMessage.innerHTML = "<p style='color:red;'>Failed to load tasks. Please try again later.</p>";
  }
  setupModalCloseHandler();
  setupNewTaskModalHandler();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
