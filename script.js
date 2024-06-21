// script.js
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting traditionally

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    // Display the collected information
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = `
        <h3>User Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
    `;
    userInfoDiv.style.display = 'block';
    userInfoDiv.classList.add('show');
});