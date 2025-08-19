import { openTaskModal } from "./modalHandlers.js";

/**
 * Creates a DOM element representing a task.
 *
 * Generates a `div` element with the class `task-div`, sets its text content
 * to the task's title, and assigns the task's ID as a `data-task-id` attribute.
 * Also attaches a click event listener to open the task modal with the task's details.
 *
 * @function createTaskElement
 * @param {Object} task - The task object containing details for rendering.
 * @param {string|number} task.id - The unique identifier of the task.
 * @param {string} task.title - The title of the task.
 * @returns {HTMLDivElement} The created task `div` element.
 */

export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}
