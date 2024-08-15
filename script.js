// Sample dreams from different users
const dreams = [
    {
        username: "dreamer1",
        content: "I dreamed of flying above the mountains and clouds.",
        replies: ["That sounds amazing!", "I've had a similar dream!"]
    },
    {
        username: "dreamer2",
        content: "I was exploring an ancient city underwater.",
        replies: ["Wow, what a unique dream!", "I wonder what that means."]
    }
];

// Function to load dreams into the "Dreams from Around the World" section
function loadDreams() {
    const feed = document.getElementById("dream-feed");
    feed.innerHTML = "";  // Clear previous content

    dreams.forEach(dream => {
        const dreamDiv = document.createElement("div");
        dreamDiv.classList.add("dream-post");

        const username = document.createElement("h4");
        username.textContent = dream.username;

        const content = document.createElement("p");
        content.textContent = dream.content;

        const replies = document.createElement("ul");
        dream.replies.forEach(reply => {
            const li = document.createElement("li");
            li.textContent = reply;
            replies.appendChild(li);
        });

        dreamDiv.appendChild(username);
        dreamDiv.appendChild(content);
        dreamDiv.appendChild(replies);
        feed.appendChild(dreamDiv);
    });
}

// Load dreams when the page is loaded
document.addEventListener("DOMContentLoaded", loadDreams);
