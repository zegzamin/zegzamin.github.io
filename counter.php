<?php
$file = 'counter.txt';

if (!file_exists($file)) {
    file_put_contents($file, '0');
}

$counter = file_get_contents($file);

$counter++;

file_put_contents($file, $counter);
?>
