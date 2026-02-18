window.addEventListener("DOMContentLoaded", () => {
  Neutralino.init();

  Neutralino.events.on("ready", () => {
    console.log("Neutralino is ready");

    document.getElementById("closeBtn")?.addEventListener("click", () => {
      Neutralino.app.exit();
    });

    document.getElementById("minBtn")?.addEventListener("click", () => {
      Neutralino.window.minimize().catch((err) => {
        console.error("Minimize failed:", err);
      });
    });

    document.getElementById("backBtn")?.addEventListener("click", toHome);
  });

  const element = document.querySelector(".countdown-text");
  if (!element) {
    console.error("Missing .countdown-text element");
    return;
  }

  // Show "Starting in..." then do a visible countdown
  element.textContent = "";
  setTimeout(() => {
    element.textContent = "Starting in...";
    setTimeout(() => {
      let i = 3;
      element.textContent = String(i);

      const interval = setInterval(() => {
        i -= 1;
        if (i <= 0) {
          clearInterval(interval);
          element.textContent = "Go!";
        } else {
          element.textContent = String(i);
        }
      }, 1000);
    }, 800);
  }, 800);
});

function toHome() {
  window.location.href = "/homepage.html"; // safest in Neutralino
}
