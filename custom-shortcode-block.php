<?php
/*
Plugin Name: Custom Shortcode Block
Description: A customizable Gutenberg block for inserting shortcodes with styling options.
Version: 1.0
Author: Microcodice
Author URI: https://microcodice.it
License: GPL-2.0+
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: custom-shortcode-block
Domain Path: /languages
*/

function custom_shortcode_block_register_block() {
    wp_register_script(
        'custom-shortcode-block-editor',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    wp_register_style(
        'custom-shortcode-block-editor',
        plugins_url('build/index.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.css')
    );

    register_block_type('custom-shortcode-block/shortcode', array(
        'editor_script' => 'custom-shortcode-block-editor',
        'editor_style'  => 'custom-shortcode-block-editor',
        'style'         => 'custom-shortcode-block-editor',
    ));
}
add_action('init', 'custom_shortcode_block_register_block');