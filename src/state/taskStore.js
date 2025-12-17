import Task from './models/Task.js';
import StorageService from '../services/storageService.js';

export default class TaskStore {
    constructor() {
        this.tasks = [];
        this.storage = new StorageService();
        this.tasks = this.storage.load().map(taskData => {
            const task = new Task(taskData.title);
            task.status = taskData.status;
            task.createAt = taskData.createAt;
            return task;
        });
    }

    addTask(title) {
        const task = new Task(title);
        this.tasks.push(task);
        this.storage.save(this.tasks);
        return task;
    }

    removeTask(id) {
        this.tasks = this.tasks.find(task => task.id !== id);
        this.storage.save(this.tasks);
    }

    updateTaskStatus(id, status) {
        const task = this.tasks.filter(task => task.id === id);
        if (task) {
            task.setStatus(status)
            this.storage.save(this.tasks);
        }
    }

    getTasks(filter = 'all') {
        if (filter === 'all') return this.tasks;
        return this.tasks.filter(task => task.status === filter);
    }
}