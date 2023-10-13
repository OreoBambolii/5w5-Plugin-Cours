<?php
/*
    Plugin name: Afficher-cours
    Author: Audrey Dénommée
    Plugin uri: https://github.com/OreoBambolii
    Version: 1.0.0
    Description: Permet d'afficher les cours du TIM selon les sessions
*/



function cours_enqueue()
{
// filemtime // retourne en milliseconde le temps de la dernière
// plugin_dir_path // retourne le chemin du répertoire du plugin
// __FILE__ // le fichier en train de s'exécuter
// wp_enqueue_style() // Intègre le link:css dans la page
// wp_enqueue_script() // intègre le script dans la page
// wp_enqueue_scripts // le hook


$version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css"); 
$version_js = filemtime(plugin_dir_path(__FILE__) . "js/cours.js");

    wp_enqueue_style(   'em_plugin_cours_css',
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css);

    wp_enqueue_script(  'em_plugin_cours_js',
                    plugin_dir_url(__FILE__) ."js/cours.js",
                    array(),
                    $version_js,
                    true);
}
add_action('wp_enqueue_scripts', 'cours_enqueue');



function creation_cours(){
    $contenu = '
    <section class="section-cours">
        <div class="menu-cours">
            <button class="session1">Session 1</button>
            <button class="session2">Session 2</button>
            <button class="session3">Session 3</button>
            <button class="session4">Session 4</button>
            <button class="session5">Session 5</button>
            <button class="session6">Session 6</button>
        </div>
        <div class="contenu"></div>
    </section>';
    return $contenu;
}

add_shortcode('em_cours', 'creation_cours');
?>