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
function createTache(event) {
    var button = event.target;
    var task = document.createElement('div');
    task.className = 'task';
    task.innerText = "New Task";
    var project = button.closest('.container');
    project.querySelector('.taches').appendChild(task);
}
document.addEventListener('click', function (event) {
    var button = event.target;
    if (button.classList.contains('new')) {
        createTache(event);
    }
});
