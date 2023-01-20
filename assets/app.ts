let but = document.getElementById('but') as HTMLButtonElement;
let containerTop = document.getElementById('containerTop') as HTMLElement;
let tmpl = document.getElementById('tmpl') as HTMLTemplateElement;
let addBut = document.getElementsByClassName('new') as HTMLCollectionOf<HTMLButtonElement>;
let titleProject = document.getElementsByClassName('titleProject');

let currentProjet: number = 1;
let currentButton: number = 1;

// Create a new project when the button is clicked
but.addEventListener('click', () => {
    if (tmpl.content) {
        containerTop.append(tmpl.content.cloneNode(true));
        let projects = document.querySelectorAll('.container');
        projects.forEach((projet) => {
            projet.id = 'container' + currentProjet.toString();
            currentProjet++;
        });

        titleProject.forEach((title) => {
            title.addEventListener('dblclick', () => {
                title.contentEditable = "true";
            });
        });
        titleProject.forEach((title) => {
            title.addEventListener('blur', () => {
                title.contentEditable = "false";
            });
        });

    }
});

// Create a new task when the "add task" button is clicked
let editing = false;

function createTache(event: MouseEvent) {
    let button = event.target as HTMLButtonElement;
    let taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    let task = document.createElement('div');
    task.className = 'task';
    task.innerText = "New Task";
    taskContainer.appendChild(task);

    let input = document.createElement('input');
    input.style.display = 'none';
    taskContainer.appendChild(input);
    let saveButton = document.createElement('button');
    saveButton.style.display = 'none';
    saveButton.style.backgroundColor = '#4bd94b';
    saveButton.innerText = 'v';
    saveButton.style.width = '30px';
    saveButton.style.height = '30px';
    saveButton.style.borderRadius = '50%';
    saveButton.style.color = 'white';
    saveButton.style.fontSize = '1rem';
    saveButton.style.fontWeight = 'bold';
    taskContainer.appendChild(saveButton);
    let project = button.closest('.container');
    project.querySelector('.taches').appendChild(taskContainer);
    task.addEventListener('dblclick', () => {
        input.value = task.innerText;
        input.style.display = 'block';
        saveButton.style.display = 'block';
    });
    saveButton.addEventListener('click', () => {
        task.innerText = input.value;
        input.style.display = 'none';
        saveButton.style.display = 'none';
    });
    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerText = 'x';
    deleteButton.style.backgroundColor = '#f54646';
    deleteButton.style.width = '30px';
    deleteButton.style.height = '30px';
    deleteButton.style.borderRadius = '50%';
    deleteButton.style.color = 'white';
    deleteButton.style.fontSize = '1rem';
    deleteButton.style.fontWeight = 'bold';
    taskContainer.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        taskContainer.remove();
    });
}

document.addEventListener('click', (event: MouseEvent) => {
    let button = event.target as HTMLButtonElement;
    if(button.classList.contains('new')) {
        createTache(event);
    }
});
