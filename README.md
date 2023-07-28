# javascriptModal
Here is a template for making a shortcode
add it in functions.php

function custom_modal_shortcode() {
    ob_start(); // Start output buffering

    // Add your HTML code here
    ?>
    <!-- Your HTML code with the picture and modal goes here -->

    <?php
    // End output buffering and return the content
    return ob_get_clean();
}
add_shortcode('custom_modal', 'custom_modal_shortcode');


shortcode is: [custom_modal]
