/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
var but = document.getElementById('but');
var containerTop = document.getElementById('containerTop');
var tmpl = document.getElementById('tmpl');
var addBut = document.getElementsByClassName('new');
var titleProject = document.getElementsByClassName('titleProject');
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
        titleProject.forEach(function (title) {
            title.addEventListener('dblclick', function () {
                title.contentEditable = "true";
            });
        });
        titleProject.forEach(function (title) {
            title.addEventListener('blur', function () {
                title.contentEditable = "false";
            });
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
    var input = document.createElement('input');
    input.style.display = 'none';
    taskContainer.appendChild(input);
    var saveButton = document.createElement('button');
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
    var deleteButton = document.createElement('button');
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
    deleteButton.addEventListener('click', function () {
        taskContainer.remove();
    });
}
document.addEventListener('click', function (event) {
    var button = event.target;
    if (button.classList.contains('new')) {
        createTache(event);
    }
});

/******/ })()
;
//# sourceMappingURL=front-bundle.js.map