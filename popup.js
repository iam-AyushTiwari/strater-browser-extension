// popup.js
const videoId = "VIDEO_ID_HERE"; // Replace with the video ID
const iframe = document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
document.body.appendChild(iframe);

// Listen for chat messages
document.getElementById("chat-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const message = document.getElementById("chat-input").value;
    // Send message to your application's endpoint
    fetch("https://your-app-endpoint.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
  }
});
