<?php

namespace Eby\project;
require __DIR__ . '/../vendor/autoload.php';


use PDO;
use RedBeanPHP\R;


R::setup('mysql:host=localhost;dbname=timetracking', 'dev','dev');
R::getDatabaseAdapter()->getDatabase()->stringifyFetches(false);
R::getDatabaseAdapter()->getDatabase()->getPDO()->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);



