/* ==============================
   ISI YANG AKAN DISALIN (CUSTOM)
   ============================== */

// TEXT / KEY / APA PUN (bebas, semua txt bisa)
const textToCopy = `
PASTE TEXT / SCRIPT / KEY KAMU DI SINI
BISA APA SAJA
`;

// TEXT WEB CUSTOM (BUKAN URL WEB INI)
const webTextToCopy = `
PASTE TEXT WEB / LINK / ARTIKEL DI SINI
`;

// WEB UNTUK TOMBOL THE KING
const overlayWebURL = "https://thekingcheats.xyz/index.php";

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

/* ==============================
   THE KING OVERLAY (SMART MODE)
   ============================== */

function openOverlay() {
    const overlay = document.getElementById("webOverlay");
    const frame = document.getElementById("webFrame");

    // reset iframe
    frame.src = "";

    // jika iframe berhasil load → tampilkan overlay
    frame.onload = () => {
        overlay.style.display = "flex";
    };

    // jika iframe gagal (diblock) → buka tab baru
    frame.onerror = () => {
        window.open(overlayWebURL, "_blank");
    };

    // timeout fallback (iframe kosong / diblock diam-diam)
    setTimeout(() => {
        if (!frame.contentWindow || frame.contentWindow.length === 0) {
            window.open(overlayWebURL, "_blank");
        }
    }, 1500);

    frame.src = overlayWebURL;
}

function closeOverlay() {
    document.getElementById("webOverlay").style.display = "none";
    document.getElementById("webFrame").src = "";
}
