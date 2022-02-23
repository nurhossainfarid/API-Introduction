function loadPost() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => displayPost(data))
}
loadPost();

function displayPost(posts) {
    const divContainer = document.getElementById(`post-container`)
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList = 'post';
        postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `;
        divContainer.appendChild(postDiv);
    }
}

// posting resource
function sendMessage() {
    fetch(`https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        body : JSON.stringify({
            title : 'foo',
            body : 'koo',
            id : 1
        }),
        header : {
            'Content-type': 'application/json; charset=UTF-8',
          },
    }`)
        .then(res => res.json())
        .then(data => console.log(data))
}

//putting/updating resource 
function put() {
    fetch(`https://jsonplaceholder.typicode.com/posts/1, {
        method : 'PUT',
        body : JSON.stringify({
            title : 'foo',
            body : 'loo',
            id : 2
        }),
        header :  {
            'Content-type': 'application/json; charset=UTF-8',
          },
    }`)
        .then(response => response.json())
        .then(data => console.log(data))
}

// patching resource
function patching() {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
        method : 'PATCH',
        body: JSON.stringify({
            title : 'moo'
        }),
        header: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
}

// deleting resource
function deleting() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method : 'DELETE',
    })
}