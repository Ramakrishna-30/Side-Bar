// Select the necessary elements
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// Add event listener to the toggle button
toggleBtn.addEventListener('click', function () {
  // Toggle the 'show-sidebar' class to show/hide the sidebar
  sidebar.classList.toggle('show-sidebar');
});

// Add event listener to the close button
closeBtn.addEventListener('click', function () {
  // Remove the 'show-sidebar' class to hide the sidebar
  sidebar.classList.remove('show-sidebar');
});
