//Get tasks from an API

const API_URL = 'https://jsl-kanban-api.vercel.app/';

/**
 * Fetches tasks from the remote Kanban API.
 * @async
 * @function fetchTasksFromAPI
 * @returns {Promise<Object[]|undefined>} A promise that resolves to an array of task objects 
 * if successful, or `undefined` if an error occurs.
 *
 * @throws {Error} If the API returns data in an invalid format.
 */


export async function fetchTasksFromAPI() {
    try {
        const response = await fetch(API_URL);
        const tasks = await response.json();
        console.log("📋 API returned:", tasks);
        if (!Array.isArray(tasks)){
            throw new Error("Invalid data format from API");
        }
        return tasks;
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}