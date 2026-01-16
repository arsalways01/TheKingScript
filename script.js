// SCRIPT YANG AKAN DISALIN
const myScript = `// Isi script kamu di sini
console.log("Hello World");
`;

const verifyBtn = document.getElementById("verifyBtn");
const countdown = document.getElementById("countdown");
const successText = document.getElementById("successText");
const afterVerify = document.getElementById("afterVerify");

verifyBtn.addEventListener("click", () => {
    let time = 10;
    verifyBtn.disabled = true;
    verifyBtn.innerText = "Menunggu...";

    const timer = setInterval(() => {
        countdown.innerText = "Tunggu " + time + " detik...";
        time--;

        if (time < 0) {
            clearInterval(timer);
            countdown.innerText = "";
            successText.style.display = "block";
            afterVerify.style.display = "block";
            verifyBtn.style.display = "none";
        }
    }, 1000);
});

function copyScript() {
    navigator.clipboard.writeText(myScript);
    alert("Script berhasil disalin!");
}

function copyWeb() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link web berhasil disalin!");
}
