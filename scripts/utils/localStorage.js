/**
 * Loads tasks from localStorage or fetches them from the API if not found.
 * @returns {Promise<Array<Object>} The array of tasks.
 */
export function loadTasksFromStorage() {
  try {
    const stored = localStorage.getItem("tasks");
    if (!stored) {
      return []; // return an empty array because there is nothing in storage yet
    }
        return JSON.parse(stored); 
  } catch (err) {
        console.error("Error parsing tasks from localStorage:", err);
        return [];  //fallback to empty array
  }  
}

/**
 * Saves the given task array to localStorage.
 * @param {Array<Object>} tasks
 */
export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
