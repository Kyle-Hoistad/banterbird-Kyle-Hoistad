let username = localStorage.getItem("username");
if(!username){
    window.location.href = "/login";
}

function renderPost(post, isNew = false) {
    const template = document.getElementById("post-template").content.cloneNode(true);
    template.querySelector(".username").innerText = post.username;
    template.querySelector(".message").innerText = post.message;
    document.getElementById("feed").appendChild(template);

    if (isNew) {
        document.getElementById("feed").prepend(template);
    } else {
        document.getElementById("feed").appendChild(template);
    }
}

async function submitPost() {
    const message = document.getElementById("postInput").value;
    try {
        const response = await fetch("/api/banter", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({username, message,}),
        });
        if (response.ok) {
            renderPost({ username, message }, true);
            document.getElementById("postInput").value = "";
        }
    } catch (error) {
        console.error("Post failed ☠️☠️☠️ ☆*: .｡. o(≧▽≦)o .｡.:*☆ o(≧口≦)o o((>ω< ))o ヽ（≧□≦）ノ ☠️☠️☠️ ╰(*°▽°*)╯ ╰(*°▽°*)╯", error)
    }
    location.reload()
}

window.onload = async () => {
    try {
        const response = await fetch("/api/posts");
        const posts = await response.json();
        posts.forEach((posts) => renderPost(posts));
    } catch (error) { 
        console.error("FIXXX ITTT", error); 
    }
};
