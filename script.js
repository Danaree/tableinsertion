let html = `
<div class="login-container">
<form id="loginForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <div class="button_message">  <button class="data-btn" type="button" onclick="submitForm();displayTable()">Add</button> 
     <div  id="successMessage" class="success-message">
        <p>Data Inserted!</p>
        <button onclick="closeDiv()">Close</button>
     </div>
</div>

<table id="userTable" class="user-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>

</form>

</div>
`;

document.body.innerHTML = html;

let userTable = [];

function submitForm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    let userData = { name: name, age: age, email: email };
    userTable.push(userData);

    console.log(userData);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";

    let successMessage = document.getElementById("successMessage");
    
    successMessage.style.display = 'flex';

  
}

function displayTable() {
    let tableBody = document.querySelector("#userTable tbody");

    tableBody.innerHTML = "";    

    userTable.forEach(function(user) {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.textContent = user.name;
        cell2.textContent = user.age;
        cell3.textContent = user.email;
    }); 
}

function closeDiv() {
    let div = document.getElementById('successMessage');
    div.style.display = 'none';
}