import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

async function initTaskBoard() {
  const loadingMessage = document.getElementById("loading-message");

  try {
    const tasks = await loadTasksFromStorage();
    clearExistingTasks();
    renderTasks(tasks);

    // Remove loading message after tasks rendered
    loadingMessage.textContent = "";
  } catch (error) {
    loadingMessage.innerHTML = "<p style='color:red;'>Failed to load tasks. Please try again later.</p>";
  }
  setupModalCloseHandler();
  setupNewTaskModalHandler();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
