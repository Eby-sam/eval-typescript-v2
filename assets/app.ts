let but = document.getElementById('but') as HTMLButtonElement;
let containerTop = document.getElementById('containerTop') as HTMLElement;
let tmpl = document.getElementById('tmpl') as HTMLTemplateElement;
let addBut = document.getElementsByClassName('new') as HTMLCollectionOf<HTMLButtonElement>;

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
    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerText = 'Supprimer';
    taskContainer.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        taskContainer.remove();
    });
    let input = document.createElement('input');
    input.style.display = 'none';
    taskContainer.appendChild(input);
    let saveButton = document.createElement('button');
    saveButton.style.display = 'none';
    saveButton.innerText = 'Enregistrer';
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
}

document.addEventListener('click', (event: MouseEvent) => {
    let button = event.target as HTMLButtonElement;
    if(button.classList.contains('new')) {
        createTache(event);
    }
});
