import Task from './models/Task.js';
import StorageService from '../services/storageService.js';

export default class TaskStore extends EventTarget {
    constructor() {
        super();
        this.tasks = [];
        this.storage = new StorageService();
        this.tasks = this.storage.load().map(taskData => {
            const task = new Task(taskData.title);
            task.status = taskData.status;
            task.createAt = taskData.createAt;
            return task;
        });
    }

    notify() {
        this.dispatchEvent(new Event('change'));
    }

    addTask(title) {
        const task = new Task(title);
        this.tasks.push(task);
        this.storage.save(this.tasks);
        this.notify();
        return task;
    }

    removeTask(id) {
        this.tasks = this.tasks.find(task => task.id !== id);
        this.storage.save(this.tasks);
        this.notify();
    }

    updateTaskStatus(id, status) {
        const task = this.tasks.filter(task => task.id === id);
        if (task) {
            task.setStatus(status)
            this.storage.save(this.tasks);
            this.notify();
        }
    }

    getTasks(filter = 'all') {
        if (filter === 'all') return this.tasks;
        return this.tasks.filter(task => task.status === filter);
    }
}