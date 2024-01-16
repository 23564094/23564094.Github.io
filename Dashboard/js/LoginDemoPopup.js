let popup = document.getElementsByClassName("popup-card")[0];
let closeBtn = document.getElementById("close-btn");

function showPopup() {
  setTimeout(() => {
    popup.style.transform = "translateY(0)";
  }, 300);
}

closeBtn.addEventListener("click", (e) => {
  popup.style.transform = "translateY(-70vh)";
});

window.onload = showPopup();