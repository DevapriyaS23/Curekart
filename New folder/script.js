document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    console.log("working");

    const query = document.getElementById('search-input').value.trim(); // Get the search query and trim any extra spaces

    // If query is not empty
    if (query) {
         // Construct the search URL
        window.location.href = 'https://www.1mg.com/drugs/dolo-650-tablet-74467'; // Redirect to the search URL
    } else {
        alert("Please enter a search term."); // Alert if the search input is empty
    }
});
function Test()
{
    window.location.href = 'https://www.1mg.com/drugs/dolo-650-tablet-74467';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript to open social media links in a new tab
document.querySelectorAll('.social-icon').forEach(link => {
    link.setAttribute('target', '_blank');
});