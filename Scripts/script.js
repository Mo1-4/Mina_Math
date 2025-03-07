document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    console.log("Right-click is disabled.");
});

document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.shiftKey && e.key === "÷") ||
        (e.ctrlKey && e.shiftKey && e.key === "ـ") ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
        console.log("This action is disabled.");
    }
});

(function () {
    const devtools = function () { };
    devtools.toString = function () {
        console.log("DevTools is not allowed.");
        return "";
    };
    console.log("%c ", devtools);
    devtools.toString = function () {
        return "";
    };
    console.log("%c ", devtools);
})();

function showOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
  }
  
async function detectRecording() {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
        });
        showOverlay();
        stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
        console.error("Error detecting screen recording:", error);
    }
}

// Listen for attempts to start screen recording
document.addEventListener("DOMContentLoaded", () => {
    detectRecording();
});

// Optional: Prevent keyboard shortcuts for screenshots (e.g., Print Screen)
document.addEventListener("keydown", (e) => {
    if (e.key === "PrintScreen" || (e.ctrlKey && e.key === "p")) {
        e.preventDefault();
        showOverlay();
    }
});