var but = document.getElementById('but');
var containerTop = document.getElementById('containerTop');
var tmpl = document.getElementById('tmpl');
var addBut = document.getElementsByClassName('new');
var currentProjet = 1;
var currentButton = 1;
// Create a new project when the button is clicked
but.addEventListener('click', function () {
    if (tmpl.content) {
        containerTop.append(tmpl.content.cloneNode(true));
        var projects = document.querySelectorAll('.container');
        projects.forEach(function (projet) {
            projet.id = 'container' + currentProjet.toString();
            currentProjet++;
        });
    }
});
// Create a new task when the "add task" button is clicked
var editing = false;
function createTache(event) {
    var button = event.target;
    var taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    var task = document.createElement('div');
    task.className = 'task';
    task.innerText = "New Task";
    taskContainer.appendChild(task);
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerText = 'Supprimer';
    taskContainer.appendChild(deleteButton);
    deleteButton.addEventListener('click', function () {
        taskContainer.remove();
    });
    var input = document.createElement('input');
    input.style.display = 'none';
    taskContainer.appendChild(input);
    var saveButton = document.createElement('button');
    saveButton.style.display = 'none';
    saveButton.innerText = 'Enregistrer';
    taskContainer.appendChild(saveButton);
    var project = button.closest('.container');
    project.querySelector('.taches').appendChild(taskContainer);
    task.addEventListener('dblclick', function () {
        input.value = task.innerText;
        input.style.display = 'block';
        saveButton.style.display = 'block';
    });
    saveButton.addEventListener('click', function () {
        task.innerText = input.value;
        input.style.display = 'none';
        saveButton.style.display = 'none';
    });
}
document.addEventListener('click', function (event) {
    var button = event.target;
    if (button.classList.contains('new')) {
        createTache(event);
    }
});
