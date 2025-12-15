export function initTaskFrom() {
    const form = document.querySelector("taskFrom");
    const input = document.querySelector("taskInput");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const value = input.value.trim();

        if (!value) return;

        console.log("New task", value);

        input.value = "";
    });
}