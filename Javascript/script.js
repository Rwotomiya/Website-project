document.getElementById('contact-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
    } else if (!message ||message.length < 10) {
        alert('Your message must be at least 10 characters long.');
        event.preventDefault(); // Prevent form submission
    }
});
window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Load more content here
        console.log('Loading more content...');
    }
});
document.getElementById('contact-us-button').addEventListener('click', function() {
    document.getElementById('contact-modal').style.display = 'block';
});
