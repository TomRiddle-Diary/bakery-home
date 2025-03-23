const hamburger = document.getElementById("hamburger");
const navLists = document.querySelector(".nav_lists"); // Make sure this matches the HTML

// Toggle the menu when clicking the hamburger button
hamburger.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent immediate closing
    navLists.classList.toggle("active");
});

// Close the menu when clicking outside
document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !navLists.contains(event.target)) {
        navLists.classList.remove("active");
    }
});