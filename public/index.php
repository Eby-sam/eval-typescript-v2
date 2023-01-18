<?php
    require_once '../Model/database.php';
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Time Tracking</title>
    <link rel="stylesheet" href="style/style.css">
</head>
<body>
    <h1>Apply Time Tracking</h1>
    <div id="divBut">
        <button id="but"> NEW PROJECT </button>
    </div>

    <div id="containerTop">

    </div>

    <template id="tmpl">
        <div class="container">
            <div class="divTitle">
                <h2>hello</h2>
            </div>
            <div class="containerBlock">
                <div class="time">
                    <div class="oclock">
                        <i class="fa-regular fa-clock"></i>
                        <p><span class="hours">0</span> h</p>
                    </div>
                    <div class="dates">
                        <i class="fa-solid fa-calendar-days"></i>
                        <p>Il y a <span class="days">0</span> jours</p>
                    </div>
                </div>
                <div class="taches">

                </div>
            </div>
            <div class="barre">
                <div class="corbeil" id="del">
                    <i class="fa-solid fa-trash"></i>
                </div>
                <div class="look">
                    <i class="fa-solid fa-eye"></i>
                </div>
                <button class="new">+ Ajouter une tâche</button>
            </div>
        </div>
    </template>

    <script src="build/js/front-bundle.js"></script>
    <script src="https://kit.fontawesome.com/60b2d3991b.js" crossorigin="anonymous"></script>
</body>
</html>