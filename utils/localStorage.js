import { fetchTasksFromAPI } from "../fetch.js";


/**
 * Loads tasks from localStorage or fetches them from the API if not found.
 * @returns {Promise<Array<Object>} The array of tasks.
 */
export async function loadTasksFromStorage() {

  const stored = localStorage.getItem("tasks") || [];
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (err) {
      console.error("Error parsing tasks from localStorage:", err);
    }
  }

  // If no tasks in storage, initializes with tasks from the API
  try {
    const tasks = await fetchTasksFromAPI();
    if(tasks && Array.isArray(tasks)) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return tasks;
    }else {
      throw new Error("No tasks returned from API");
    }
  } catch (error) {
    console.error("Error loading tasks from API:", error);
    return [];
  }
}

/**
 * Saves the given task array to localStorage.
 * @param {Array<Object>} tasks
 */
export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
