<?php


?>

<div id="container-user">
    <div class="divTitle">
        <h1>PROFIL</h1>
    </div>
    <div class="profil">
        <div id="info-user">
            <div id="pseudo">
                <h2 class="userPseudo"><?=UserManager::getUserById($_SESSION['user']->getId())->getPseudo() ?></h2>
            </div>
            <div id="infoUtil">
                <div id="divMail">
                    <p>Email : <span><?=UserManager::getUserById($_SESSION['user']->getId())->getEmail() ?></span></p>
                </div>
                <div id="divproject">
                    <p>nombre de projet: <span> </span></p>
                </div>
            </div>
            <br><br>
        </div>
    </div>
</div>
