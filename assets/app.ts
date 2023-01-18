let but = document.getElementById('but') as HTMLElement;
let hour = document.getElementById('hours') as HTMLElement;
let days = document.getElementById('days') as HTMLElement;
let containerTop = document.getElementById('containerTop') as HTMLElement;
let tmpl = document.getElementById('tmpl') as HTMLElement;
let divTitle = document.getElementsByClassName('divTitle') as HTMLCollectionOf<HTMLElement>;
let containTache = document.getElementsByClassName('containTache') as HTMLCollectionOf<HTMLElement>;
let addBut = document.getElementsByClassName('new') as HTMLCollectionOf<HTMLElement>;
let del = document.getElementById('del') as HTMLElement;
let currentTacheA = document.getElementsByClassName('taches') as HTMLCollectionOf<HTMLElement>;;

let currentTache: number = 1;
let currentButton: number = 1;
let currentProjet: number = 1;

// creation d'un projet ---------------------------------------------------------------
but.addEventListener('click', function() {
    if (tmpl.content) {
        containerTop.append(tmpl.content.cloneNode(true));
        let projects = document.querySelectorAll('.container');
        projects.forEach((projet) => {
            projet.id = 'container' + currentProjet.toString();
            currentProjet++;
        });

        let buttonAddT = document.querySelectorAll('.new');
        buttonAddT.forEach((button) => {
            button.id = 'buttonProject' + currentButton.toString();
            currentButton++;
        });

        let currentTacheB = document.querySelectorAll('.taches')
        currentTacheB.forEach((dtl) => {
            dtl.id = 'tachesList' + currentTache.toString();
            currentTache++;

            // creation d'une tache ---------------------------------------------------------

            function createTache(event: MouseEvent) {
                let button = event.target as HTMLButtonElement;
                let detailListe = document.createElement('div');
                detailListe.className = 'containTache';
                detailListe.innerText = "1";
                button.parentNode.appendChild(detailListe);
            }
            for (let i = 0; i < currentTacheA.length; i++) {
                if (currentTacheA[i]) {
                    // @ts-ignore
                    buttonAddT[i].addEventListener('click', (event: MouseEvent) => createTache(event));
                }
            }

        });
    }
});