console.log("Portfolio loaded");
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-copy");
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    btn.innerText = "✔";
    setTimeout(() => btn.innerText = "📋", 800);
  });
});
