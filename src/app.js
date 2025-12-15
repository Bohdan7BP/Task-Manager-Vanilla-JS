import { initTaskFrom } from './ui/taskForm';
import { renderTasks } from './ui/renderTasks';

function initApp() {
    initTaskFrom();
    renderTasks();
}

initApp();