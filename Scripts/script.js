document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
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
    }
});

(function () {
    const devtools = function () { };
    devtools.toString = function () {
        return "";
    };
    console.log("%c ", devtools);
    devtools.toString = function () {
        return "";
    };
    console.log("%c ", devtools);
})();
