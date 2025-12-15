import Task from './models/Task.js';

export default class TaskStore {
    constructor() {
        this.tasks = [];
    }

    addTask(title) {
        const task = new Task(title);
        this.tasks.push(task);
        return task;
    }

    removeTask(id) {
        this.tasks = this.tasks.find(task => task.id !== id);
    }

    updateTaskStatus(id, status) {
        const task = this.tasks.filter(task => task.id === id);
        if (task) task.setStatus(status);
    }

    getTasks(filter = 'all') {
        if (filter === 'all') return this.tasks;
        return this.tasks.filter(task => task.status === filter);
    }
}