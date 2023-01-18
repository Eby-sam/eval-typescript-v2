var but = document.getElementById('but');
var hour = document.getElementById('hours');
var days = document.getElementById('days');
var containerTop = document.getElementById('containerTop');
var tmpl = document.getElementById('tmpl');
var divTitle = document.getElementsByClassName('divTitle');
var containTache = document.getElementsByClassName('containTache');
var addBut = document.getElementsByClassName('new');
var del = document.getElementById('del');
var currentTacheA = document.getElementsByClassName('taches');
;
var currentTache = 1;
var currentButton = 1;
var currentProjet = 1;
// creation d'un projet ---------------------------------------------------------------
but.addEventListener('click', function () {
    if (tmpl.content) {
        containerTop.append(tmpl.content.cloneNode(true));
        var projects = document.querySelectorAll('.container');
        projects.forEach(function (projet) {
            projet.id = 'container' + currentProjet.toString();
            currentProjet++;
        });
        var buttonAddT_1 = document.querySelectorAll('.new');
        buttonAddT_1.forEach(function (button) {
            button.id = 'buttonProject' + currentButton.toString();
            currentButton++;
        });
        var currentTacheB = document.querySelectorAll('.taches');
        currentTacheB.forEach(function (dtl) {
            dtl.id = 'tachesList' + currentTache.toString();
            currentTache++;
            // creation d'une tache ---------------------------------------------------------
            function createTache(event) {
                var button = event.target;
                var detailListe = document.createElement('div');
                detailListe.className = 'containTache';
                detailListe.innerText = "1";
                button.parentNode.appendChild(detailListe);
            }
            for (var i = 0; i < currentTacheA.length; i++) {
                if (currentTacheA[i]) {
                    // @ts-ignore
                    buttonAddT_1[i].addEventListener('click', function (event) { return createTache(event); });
                }
            }
        });
    }
});
