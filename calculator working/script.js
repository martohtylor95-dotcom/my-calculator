let display = document.createElement("input");
display.disabled = true;
document.body.appendChild(display);

document.body.appendChild(document.createElement("br"));

let buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+"
];

buttons.forEach(function(value) {
    let btn = document.createElement("button");
    btn.innerText = value;

    btn.onclick = function() {
        if (value === "C") {
            display.value = "";
        }
        else if (value === "=") {
            try {
                if (!/^[0-9+\-*/. ]+$/.test(display.value)) {
                    throw new Error("Invalid");
                }
                display.value = Function(
                    "return " + display.value
                )();
            } catch {
                display.value = "Error";
            }
        }
        else {
            display.value += value;
        }
    };

    document.body.appendChild(btn);

    if (value === "+" || value === "-" ||
        value === "*" || value === "/") {
        document.body.appendChild(document.createElement("br"));
    }
});