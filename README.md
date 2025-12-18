# Task-Manager-Vanilla-JS
Advanced Task Manager application built with Vanilla JavaScript, demonstrating clean architecture, OOP principles, modular structure, and event-driven state management without frameworks.


Features
Add, remove, and manage tasks
Task statuses: Todo / In Progress / Done
Persistent storage using localStorage
Automatic UI re-rendering via Pub-Sub (EventTarget)
Modular architecture with ES Modules
Clean separation of concerns (UI / State / Models / Services)
Input validation and error handling


Architecture Overview
This project follows a layered architecture:
UI (DOM)
 ↓
App (Entry Point)
 ↓
State (TaskStore)
 ↓
Models (Task)
 ↓
Services (StorageService)

Key ideas:
UI layer only handles DOM and user interactions
State layer manages application data in memory
Models encapsulate business logic and invariants
Services handle side effects (localStorage)
Communication between state and UI is handled via Custom Events


Project Structure
task-manager-vanilla-js/
│
├── index.html
├── styles/
│   └── main.css
├── src/
│   ├── app.js
│   ├── models/
│   │   └── Task.js
│   ├── services/
│   │   └── storageService.js
│   ├── state/
│   │   └── taskStore.js
│   ├── ui/
│   │   ├── taskForm.js
│   │   └── renderTasks.js
│   └── utils/
│       └── helpers.js
│
└── README.md



Core Concepts Demonstrated
ES6+ JavaScript
Classes and OOP
Data validation and invariants
Event-driven architecture (Observer / Pub-Sub)
Separation of concerns
DOM manipulation without frameworks
localStorage persistence
Modular code organization