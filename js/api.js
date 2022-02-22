function loadData() {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        .then(response => response.json())
        .then(data => console.log(data));
        // .then(data => console.log(data.id))
}
// users name
function loadUser() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => displayUser(data));
        // .then(data => console.log(data));
}
// comments
function loadComment() {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => res.json())
        .then(data => console.log(data));
}


function displayUser(data) {
    const ul = document.getElementById('user-parents');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}, Email: ${user.email}`;
        ul.appendChild(li);
    }
}
/* 
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
// .then(json => console.log(json.userId))
.then(json => console.log(json))
 */