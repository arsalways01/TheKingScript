/* ==============================
   ISI YANG AKAN DISALIN
   ============================== */

// TEXT / KEY / APA PUN (bebas)
const textToCopy = `
INI ADALAH TEXT BEBAS
Bisa isi:
- Key
- Token
- Password
- Link
- Config
- Apa pun yang kamu mau
`;

// TEXT WEB CUSTOM (bukan URL web ini)
const webTextToCopy = `
INI ISI WEB CUSTOM
contoh:
https://google.com
https://github.com
atau teks apa pun
`;

/* ==============================
   LOGIC VERIFIKASI
   ============================== */

const verifyBtn = document.getElementById("verifyBtn");
const countdown = document.getElementById("countdown");
const success = document.getElementById("success");
const nextButtons = document.getElementById("nextButtons");

verifyBtn.addEventListener("click", () => {
    let time = 10;
    verifyBtn.disabled = true;
    verifyBtn.innerText = "Memverifikasi...";

    const timer = setInterval(() => {
        countdown.innerText = `Tunggu ${time} detik`;
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

/* ==============================
   COPY FUNCTIONS
   ============================== */

function copyScript() {
    navigator.clipboard.writeText(textToCopy);
    alert("Text berhasil disalin!");
}

function copyWeb() {
    navigator.clipboard.writeText(webTextToCopy);
    alert("Text web berhasil disalin!");
}
