// SCRIPT CUSTOM KAMU (EDIT SESUAI MAU)
const customScript = `// Script custom kamu
console.log("Script berhasil disalin!");
`;

const verifyBtn = document.getElementById("verifyBtn");
const countdown = document.getElementById("countdown");
const success = document.getElementById("success");
const nextButtons = document.getElementById("nextButtons");

verifyBtn.addEventListener("click", () => {
    let time = 10;
    verifyBtn.disabled = true;
    verifyBtn.innerText = "Menunggu...";

    const timer = setInterval(() => {
        countdown.innerText = "Tunggu " + time + " detik";
        time--;

        if (time < 0) {
            clearInterval(timer);
            countdown.innerText = "";
            success.style.display = "block";
            nextButtons.style.display = "block";
            verifyBtn.style.display = "none";
        }
    }, 1000);
});

function copyScript() {
    navigator.clipboard.writeText(customScript);
    alert("Script berhasil disalin!");
}

function copyWeb() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link web berhasil disalin!");
}
