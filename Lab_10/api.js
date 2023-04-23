function fetchUsers() {
    const users = [
        { firstname: "John", lastname: "Doe", score: 80 },
        { firstname: "Jane", lastname: "Doe", score: 90 },
        { firstname: "Bob", lastname: "Smith", score: 75 },
        { firstname: "Tom", lastname: "Doe", score: 80 },
        { firstname: "Ter", lastname: "Doe", score: 90 },
        { firstname: "Alison", lastname: "Smith", score: 75 },
        { firstname: "Amelie", lastname: "Doe", score: 80 },
        { firstname: "Claus", lastname: "Doe", score: 90 },
        { firstname: "Daisy", lastname: "Smith", score: 75 },
        { firstname: "Ernestine", lastname: "Doe", score: 80 },
        { firstname: "Harvey", lastname: "Doe", score: 90 },
        { firstname: "Hope", lastname: "Smith", score: 75 },
        
    ];

    

    const randomUsers = [];
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * users.length);
        randomUsers.push(users[randomIndex]);
    }
    return randomUsers;
}

function getNewUsers(users) {
    return users.slice(0, 5);
}

function createTable(users) {
    const table = document.createElement('table');
    table.id = "TableUsers"
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    tbody.id = "TbodyUsers";

    // Create table header
    const headerRow = document.createElement('tr');
    const columns = ['First Name', 'Last Name', 'Score'];
    for (const column of columns) {
        const th = document.createElement('th');
        th.textContent = column;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

 
    var index = 0;
    for (const user of users) {
        const row = document.createElement('tr');
        row.id = index++;
        const firstNameCell = document.createElement('td');
        const lastNameCell = document.createElement('td');
        const scoreCell = document.createElement('td');
        firstNameCell.textContent = user.firstname;
        lastNameCell.textContent = user.lastname;
        scoreCell.textContent = user.score;
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(scoreCell);
        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    return table;
}

function AllUsers() {
    const users = [
        { firstname: "John", lastname: "Doe", score: 80 },
        { firstname: "Jane", lastname: "Doe", score: 90 },
        { firstname: "Bob", lastname: "Smith", score: 75 },
        { firstname: "Tom", lastname: "Doe", score: 80 },
        { firstname: "Ter", lastname: "Doe", score: 90 },
        { firstname: "Alison", lastname: "Smith", score: 75 },
        { firstname: "Amelie", lastname: "Doe", score: 80 },
        { firstname: "Claus", lastname: "Doe", score: 90 },
        { firstname: "Daisy", lastname: "Smith", score: 75 },
        { firstname: "Ernestine", lastname: "Doe", score: 80 },
        { firstname: "Harvey", lastname: "Doe", score: 90 },
        { firstname: "Hope", lastname: "Smith", score: 75 },
        
    ];

    return users;
}