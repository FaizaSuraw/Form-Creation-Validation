// Step 1: Define async function
async function fetchUserData() {
    // Step 2: Define API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select display container
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data from API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear loading text
        dataContainer.innerHTML = '';

        // Step 6: Create and fill <ul> with user names
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 7: Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 8: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Step 9: Run when document is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
