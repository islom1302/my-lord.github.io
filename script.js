async function fetchData() {
    const sheetId = 'YOUR_SHEET_ID';
    const apiKey = 'YOUR_API_KEY';
    const range = 'Sheet1!A2:E'; // Adjust the range according to your sheet

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const userInfoDiv = document.getElementById('userInfo');
        userInfoDiv.innerHTML = '';

        data.values.forEach(row => {
            const [timestamp, name, email, age, gender] = row;
            userInfoDiv.innerHTML += `
                <div class="user-entry">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Age:</strong> ${age}</p>
                    <p><strong>Gender:</strong> ${gender}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchData);
// script.js
async function fetchData() {
    const sheetId = '1f5fl4TAyGx9rem7nt4ZzF7J7YYu7wroCUXjIUVUm54Q';
    const apiKey = 'AIzaSyDVHHIUfRwuJ21ZahOpW6_iR4nTNYYvSKw';
    const range = 'Sheet1!A2:E'; // Adjust the range according to your sheet

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const userInfoDiv = document.getElementById('userInfo');
        userInfoDiv.innerHTML = '';

        data.values.forEach(row => {
            const [timestamp, name, email, age, gender] = row;
            userInfoDiv.innerHTML += `
                <div class="user-entry">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Age:</strong> ${age}</p>
                    <p><strong>Gender:</strong> ${gender}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchData);
