const username = "Ben Dover";

function renderPost(post) {
    const template = document.getElementById("post-template").content.cloneNode(true);
    template.querySelector(".username").innerText = post.username;
    template.querySelector(".message").innerText = post.message;
    document.getElementById("feed").appendChild(template);
}

function submitPost() {
    const message = document.getElementById("postInput").value;
    try {
        const response = fetch("/api/banter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                message: message,
            }),
        });

    } catch (error) {
        console.error("Post failed ☠️☠️☠️☆*: .｡. o(≧▽≦)o .｡.:*☆ o(≧口≦)o o((>ω< ))o ヽ（≧□≦）ノ I'M FUCKING TWEAKING", error)
    }
    location.reload()
}

window.onload = async () => {
    try {
        const response = await fetch("/api/posts");
        const posts = await response.json();
        posts.forEach((posts) => {
            renderPost(posts);
        });
    } catch (error) { 
        console.error("FIXXX ITTT", error); 
    }
    
};
