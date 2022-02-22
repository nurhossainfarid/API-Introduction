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
        postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `
        divContainer.appendChild(postDiv);
    }
}
