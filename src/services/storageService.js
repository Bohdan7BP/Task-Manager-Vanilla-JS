export default class StorageService {
    constructor(key = 'tasks') {
        this.key = key;
    }

    save(tasks) {
        localStorage.setItem(this.key, JSON.stringify(tasks));
    }

    load() {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : [];
    }
} 