// Get the message parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get("message");
const status = urlParams.get("status");

// Get the card, status icon, and status message elements
const card = document.querySelector(".card");
const statusIcon = document.getElementById("statusIcon");
const statusMessage = document.getElementById("statusMessage");
const btn = document.getElementById("btn");

// Display appropriate content and set background color based on status
if (status === "success") {
  statusIcon.innerHTML = "✔️";
  statusMessage.textContent = message;
  card.classList.add("success");
  statusIcon.classList.add("success");
  statusMessage.classList.add("success");
  btn.classList.add("showBtn");
} else if (status === "error") {
  statusIcon.innerHTML = "❌";
  statusMessage.textContent = message;
  card.classList.add("error");
  statusIcon.classList.add("error");
  statusMessage.classList.add("error");
} else {
  // Handle any other status values here
  statusIcon.innerHTML = "?";
  statusMessage.textContent = "Unknown status";
  card.classList.add("unknown");
  statusIcon.classList.add("unknown");
  statusMessage.classList.add("unknown");
}
