import TaskStore from './state/taskStore';
import { initTaskFrom } from './ui/taskForm';
import { renderTasks } from './ui/renderTasks';

const store = new TaskStore();

function initApp() {
    initTaskFrom(store);
    renderTasks(store.addTask());

    store.addEventListener('change', () => {
        renderTasks(store.getTasks());
    })

    renderTasks(store.getTasks());
}

initApp();