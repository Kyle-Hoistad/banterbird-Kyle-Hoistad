const username = "admin";

function renderPost(post) {
    const template = document.getElementById("post-template").content.cloneNode(true);
    template.querySelector(".username").innerText = post.username;
    template.querySelector(".message").innerText = post.message;
    document.getElementById("feed").appendChild(template);
}

function submitPost() {
    const message = document.getElementById("postInput").value;
    console.log("Would post:", message);
    alert("Banter bantered (not really yet)");
}

window.onload = async () => {
    try {
        const response = await fetch("/api/posts")
        const posts = await response.json();
        posts.forEach((posts) => {
            renderPost(posts);
        });
    } catch (error) { 
        console.error("FIXXX ITTT", error); 
    }
    
};
