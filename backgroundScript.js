chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "triggerEndpoint") {
    const videoId = request.videoId;
    // Trigger your application's endpoint
    fetch("https://your-app-endpoint.com/trigger", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ videoId }),
    });
  }
});
