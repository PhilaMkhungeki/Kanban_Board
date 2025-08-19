import { addNewTask } from "../tasks/taskManager.js";
import { clearExistingTasks, renderTasks } from "./render.js";

export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  closeBtn.addEventListener("click", () => modal.close());
}

export function setupNewTaskModalHandler() {
  const overlay = document.querySelector(".modal-overlay");
  const newTaskBtn = document.getElementById("add-new-task-btn");
  const form = document.querySelector(".modal-window");
  const cancelBtn = document.getElementById("cancel-add-btn");

  newTaskBtn.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.showModal();
  });

  cancelBtn.addEventListener("click", () => overlay.close());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      addNewTask();
    } else {
      form.reportValidity();
    }
  });
}

export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");

  modal.dataset.taskId = String(task.id);

  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;
  modal.showModal();
}

//edit task and display changes
const editTask = document.getElementById("edit-task-btn");

editTask.addEventListener('click', (e) => {
  e.preventDefault();

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const modal = document.getElementById("task-modal");
  const taskId = Number(modal.dataset.taskId);

  if (!Number.isFinite(taskId)) {
    console.error("Missing/invalid task id on modal");
    return;
  }

  const updatedTasks = tasks.map((task) => 
    task.id === taskId
    ? {
        ...task,
        title: document.getElementById("task-title").value.trim(),
        description: document.getElementById("task-desc").value.trim(),
        status: document.getElementById("task-status").value
      }
      : task
  );

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  clearExistingTasks();
  renderTasks(updatedTasks);
  modal.close();
});

//delete taks
const deleteTask = document.getElementById("delete-task-btn");

deleteTask.addEventListener('click', (e) => {
  e.preventDefault();

  if(!confirm("Are you sure you want to delete this task?")) return;

  const modal = document.getElementById("task-modal");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskId = Number(document.getElementById("task-modal").dataset.taskId);

  if (!Number.isFinite(taskId)) {
    console.error("Missing/invalid task id on modal");
    return;
  }

  const updatedTasks = tasks.filter((task) => task.id !== taskId);

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  clearExistingTasks();
  renderTasks(updatedTasks);
  modal.close();
});
