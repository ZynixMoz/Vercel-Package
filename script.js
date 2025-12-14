const codes = {
  "UGCFAK": "files/CapCutLink.txt",
  // add more like:
  // "CODE123": "files/yourfile.zip",
};

const input = document.getElementById("codeInput");
const btn = document.getElementById("redeemBtn");
const toast = document.getElementById("toast");
const clickSound = document.getElementById("clickSound");

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

btn.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();

  const code = input.value.trim().toUpperCase();

  if (codes[code]) {
    showToast("Found! Installing...");

    setTimeout(() => {
      const a = document.createElement("a");
      a.href = codes[code];
      a.download = "";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, 1200);
  } else {
    showToast("Redemption Not Found");
  }
});
