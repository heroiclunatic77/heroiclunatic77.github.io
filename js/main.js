console.log("Portfolio loaded");

/* =========================
   COPY EMAIL BUTTONS
   ========================= */
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-copy");
    const text = document.getElementById(id).innerText;

    navigator.clipboard.writeText(text);

    btn.innerText = "✔";
    setTimeout(() => btn.innerText = "📋", 800);
  });
});

/* =========================
   ABOUT TABS LOGIC
   ========================= */
const tabs = document.querySelectorAll(".about-tab");
const panels = document.querySelectorAll(".about-panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // remove active from all tabs
    tabs.forEach(t => t.classList.remove("active"));

    // hide all panels
    panels.forEach(p => p.classList.remove("active"));

    // activate clicked tab
    tab.classList.add("active");

    // show corresponding panel
    const targetId = tab.getAttribute("data-tab");
    document.getElementById(targetId).classList.add("active");
  });
});
