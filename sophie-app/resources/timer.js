window.addEventListener('DOMContentLoaded', () => {
    Neutralino.init();

    Neutralino.events.on("ready", () => {
        console.log("Neutralino is ready");

        document.getElementById("closeBtn")?.addEventListener("click", () => {
            Neutralino.app.exit();
        });

        document.getElementById("minBtn")?.addEventListener("click", () => {
            Neutralino.window.minimize().catch(err => {
                console.error("Minimize failed:", err);
            });
        });
    });

    // loading in the text
    const element = document.querySelector('.countdown-text');
    element.textContent = '';
    setTimeout(() => {
        typeWriter("Starting in...", element);
    }, 800);

    for (let i = 3; i > 0; i++)
    {
        element.textContent = i;
    }
});

function toHome() {
    window.location.href = "homepage.html"
}