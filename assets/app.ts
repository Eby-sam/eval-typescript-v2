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
function createTache(event: MouseEvent) {
    let button = event.target as HTMLButtonElement;
    let task = document.createElement('div');
    task.className = 'task';
    task.innerText = "New Task";
    let project = button.closest('.container');
    project.querySelector('.taches').appendChild(task);
}

document.addEventListener('click', (event: MouseEvent) => {
    let button = event.target as HTMLButtonElement;
    if(button.classList.contains('new')) {
        createTache(event);
    }
});