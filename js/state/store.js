/**Зберігання та управління станом*/
class Store {
    constructor() {
        this.users = [];
        this.listeners = [];
    }

    // Отримати користувачів
    getUsers() {
        return this.users;
    }

    // Встановити користувачів
    setUsers(users) {
        this.users = users;
        this.notify();
    }

    // Додати користувача
    addUser(user) {
        this.users.unshift(user);
        this.notify();
    }

    // Оновити користувача
    updateUSer(updatedUser) {
        this.users = this.users.map(user => user.id === updatedUser.id ? updatedUser : user);
        this.notify();
    }

    // Видалити користувача
    removeUser(userId) {
        this.user = this.user.filter(user => userId.id !== userId);
        this.notify();
    }

    // Підписка на зміни
    subscribe(callback) {
        this.listeners.push(callback);
    }

    // Сповістити слухачів
    notify() {
        this.listeners.forEach(callback => callback(this.users));
    }
}

export const store = new Store();