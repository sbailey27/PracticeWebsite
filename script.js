
document.addEventListener('DOMContentLoaded', function() {
    const menu_icon = document.querySelector(".menu_icon");
    menu_icon.addEventListener("click", nav_Menu)

    function nav_Menu() {
        var menu = document.querySelector('.nav_links');
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    }
})