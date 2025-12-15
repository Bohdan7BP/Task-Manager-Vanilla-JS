export default class Task {
    constructor(title) {
        if (!title || typeof title !== 'string') {
            throw new Error('Task title must be a non-empty string');
        }

        this.id = Date.now().toString();
        this.title = title;
        this.status = 'todo';
        this.createdAt = new Date().toISOString();
    }

    setStatus(status) {
        const allowedStatuses = ['todo', 'in-progress', 'done'];

        if (!allowedStatuses.includes(status)) {
            throw new Error('Invalid task status');
        }

        this.status = status;
    }
}