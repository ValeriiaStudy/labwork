let users = [];

function init() {
    var mainDiv = document.getElementById("main");

    var header = document.createElement("div");
    header.id = "header";
    var headerInneHtml = "<button onclick = 'UserRating()' id = 'User_Rating' > User Rating</button>" +
        "<button onclick = 'News()'>News</button>" +
        "<button onclick = 'Contacts()'>Contacts</button>" +
        "<button onclick = 'About()'>About</button>" +
        "<button onclick = 'GetUsers()'>Get Users</button>";
    header.innerHTML = headerInneHtml;
    mainDiv.appendChild(header);

    var mainContent = document.createElement("div");
    mainContent.id = "main";
    var mainInnerHtml = "<div id='leftPanel'><div class='loader'></div></div><div id='content'><div class='loader'></div></div><div id='rightPanel'>" +
        "<div class='loader'></div></div>";
    mainContent.innerHTML = mainInnerHtml;
   
    mainDiv.appendChild(mainContent);

    var footer = document.createElement("div");
    footer.id = "footer";
    var currentUsers = document.createElement("div");
    currentUsers.id = "currentUsers";
    var newUsers = document.createElement("div");
    newUsers.id = "newUsers";
    footer.appendChild(currentUsers);
    footer.appendChild(newUsers);
    mainDiv.appendChild(footer);

    const myTimeout = setTimeout(leftPanelButton, 1000);

}

function leftPanelButton() {
    const element = document.getElementById("leftPanel");

    var inputText = document.createElement("input");
    inputText.id = "searchuser"
    inputText.type = "text";
    element.appendChild(inputText);

    var buttonSearch = document.createElement("button");
    buttonSearch.textContent = "Search user";
    buttonSearch.style.backgroundColor = "Green";
    buttonSearch.onclick = SearchUser;
    element.appendChild(buttonSearch);
}

function SearchUser() {
    const elementTable = document.getElementById("TableUsers");
    var tbody = elementTable.getElementsByTagName("tbody")[0];
    console.log(tbody);

    var tableRow = tbody.getElementsByTagName('tr');
    console.log(tableRow);

    const element = document.getElementById("searchuser");
    var textSearch = element.value;
    var index = 0;
    for (const user of users) {
        if (user.firstname.includes(textSearch)) {
            var trChange = tableRow[index];
            console.log(trChange);
            trChange.style.backgroundColor = "yellow";
        }
        index++;
    }
}



function UserRating() {
    var text = 'User Rating';
    var h3add = document.createElement("h3");
    h3add.innerText = text;
    const element = document.getElementById("content");
    element.removeChild(element.firstElementChild);
    element.insertBefore(h3add, element.firstChild);
}

function News() {
    var text = 'News';
    var h3add = document.createElement("h3");
    h3add.innerText = text;
    const element = document.getElementById("content");
    element.removeChild(element.firstElementChild);
    element.insertBefore(h3add, element.firstChild);
}

function Contacts() {
    var text = 'Contacts';
    var h3add = document.createElement("h3");
    h3add.innerText = text;
    const element = document.getElementById("content");
    element.removeChild(element.firstElementChild);
    element.insertBefore(h3add, element.firstChild);
}

function About() {
    var text = 'About';
    var h3add = document.createElement("h3");
    h3add.innerText = text;
    const element = document.getElementById("content");
    element.removeChild(element.firstElementChild);
    element.insertBefore(h3add, element.firstChild);
}

function GetUsers() {
    users = fetchUsers();
    const element = document.getElementById("content");
    element.removeChild(element.firstElementChild);
    element.appendChild(createTable(users));
}

