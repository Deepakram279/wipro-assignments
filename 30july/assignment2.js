document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('email').value;
    const message = document.getElementById('message');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailPattern.test(emailInput)) {
        message.textContent = "Email is valid.";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid email format.";
        message.style.color = "red";
    }
});
