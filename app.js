const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

/**
 * @description Toggles the visibility of the sidebar.
 * @author LitFill
 * @date 11/09/2024
 * @returns {void}
 */
function toggleSidebar() {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");

    closeAllSubmenus();
}

/**
 * @description Closes all submenus.
 * @author LitFill
 * @date 11/09/2024
 * @returns {void}
 */
function closeAllSubmenus() {
    Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
        ul.classList.remove("show");
        ul.previousElementSibling?.classList.remove("rotate");
    });
}

/**
 * Toggles the visibility of a submenu by adding or removing the 'show' class from the next sibling element of the given button.
 *
 * @param {HTMLElement} button - The button element that triggers the submenu toggle.
 * @return {void}
 */
function toggleSubmenu(button) {
    if (!button.nextElementSibling.classList.contains("show")) closeAllSubmenus();
    button.nextElementSibling?.classList.toggle("show");
    button.classList.toggle("rotate");

    if (sidebar.classList.contains("close")) {
        sidebar.classList.toggle("close");
        toggleButton.classList.toggle("rotate");
    }
}