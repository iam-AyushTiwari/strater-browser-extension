// Listen for video playback events
document.addEventListener("yt-navigate", (e) => {
  const videoId = e.detail.videoId;
  // Send message to your extension's background script
  chrome.runtime.sendMessage({ action: "triggerEndpoint", videoId });
});
