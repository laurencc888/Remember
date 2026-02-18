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
    const element = document.querySelector('.moment-text');
    if (!element) {
        return; // or console.warn(...)
    }
    else {
        element.textContent = '';

        setTimeout(() => {
            typeWriter("Take a moment for yourself.", element);
        }, 800);

        // load button after text is loaded
        setTimeout(() => {
            document.getElementById('startBtn').classList.add("button-fade-in");
        }, 4000);
    }

    document.getElementById("startBtn")?.addEventListener("click", () => {
    console.log("Let's Go clicked");
    window.location.assign("/timer.html");
    });

});

function toTimer() {
    window.location.href = "/timer.html";
}

// recursive function (perhaps the first time i've used one fr)
function typeWriter(text, element, index = 0) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(() => typeWriter(text, element, index + 1), 100);
    }
}