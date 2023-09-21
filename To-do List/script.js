document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');
            const time = new Date();
            const getHours= time.getHours();
            const minutes= time.getMinutes();
            let timeNow = getHours +':'+ minutes;
            listItem.innerHTML = `
                ${taskText}  
                <button class="time">${ timeNow } </button>
                <button class="delete">Delete</button>
                
            `;
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';

            // Add event listener to delete button
            const deleteButton = listItem.querySelector('.delete');
            deleteButton.addEventListener('click', function () {
                listItem.remove();
            });
        }
    });

    // Enter key to add a task
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
