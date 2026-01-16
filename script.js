/* ===============================
   KONFIGURASI
================================ */
const SFL_URL = "https://sfl.gl/PcX6yN2L"; // Ganti dengan SFL kamu
const RETURN_URL = window.location.origin + window.location.pathname + "?sfl=ok";
const EXPIRE_TIME = 5 * 60 * 60 * 1000; // 5 jam
const STORAGE_KEY = "king_verified_time";

/* ===============================
   ELEMENT
================================ */
const verifyBtn = document.getElementById("verifyBtn");
const accessBtn = document.getElementById("accessBtn");
const countdown = document.getElementById("countdown");
const success = document.getElementById("success");
const nextButtons = document.getElementById("nextButtons");

/* ===============================
   CEK SAAT LOAD (BALIK DARI SFL)
================================ */
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sfl") === "ok" && !isExpired()) {
        showSuccess();
    } else if (params.get("sfl") === "ok") {
        saveTime();
        showSuccess();
    }
};

/* ===============================
   VERIFIKASI 10 DETIK
================================ */
verifyBtn.onclick = () => {
    let time = 10;
    verifyBtn.disabled = true;
    verifyBtn.innerText = "Memverifikasi...";

    const timer = setInterval(() => {
        countdown.innerText = `Tunggu ${time} detik`;
        time--;

        if (time < 0) {
            clearInterval(timer);
            countdown.innerText = "";
            verifyBtn.style.display = "none";
            accessBtn.style.display = "block";
        }
    }, 1000);
};

/* ===============================
   ACCESS → SFL
================================ */
accessBtn.onclick = () => {
    window.location.href = SFL_URL + "?redirect=" + encodeURIComponent(RETURN_URL);
};

/* ===============================
   SUCCESS
================================ */
function showSuccess() {
    verifyBtn.style.display = "none";
    accessBtn.style.display = "none";
    countdown.style.display = "none";
    success.style.display = "block";
    nextButtons.style.display = "block";
    saveTime();
}

/* ===============================
   STORAGE
================================ */
function saveTime() {
    localStorage.setItem(STORAGE_KEY, Date.now());
}
function isExpired() {
    const t = localStorage.getItem(STORAGE_KEY);
    if (!t) return true;
    return Date.now() - parseInt(t) > EXPIRE_TIME;
}

/* ===============================
   COPY SCRIPT / WEB (CUSTOM)
================================ */
const textToCopy = `
javascript:(function(){try {if (window.forceClickActive) return; window.forceClickActive = true; window.forceClickHandler = function(e) { try { e.preventDefault(); e.stopImmediatePropagation(); if (e.type === 'auxclick' && e.button === 1) { window.open('https://thekingcheats.xyz/index.php','_blank'); } else { location.href = 'https://thekingcheats.xyz/index.php'; } } catch (err) {} }; document.addEventListener('click', window.forceClickHandler, true); document.addEventListener('auxclick', window.forceClickHandler, true); window.removeForceClick = function() { try { document.removeEventListener('click', window.forceClickHandler, true); document.removeEventListener('auxclick', window.forceClickHandler, true); window.forceClickActive = false; delete window.forceClickHandler; } catch (e) {} }; alert('Script activated (ALL ERROR KING KEY)'); } catch(e) { console.error(e); alert('Script error'); } })();
`;

const webTextToCopy = `
https://blog.techbotal.com/aplicativos-de-relacionamento-a-tecnologia-que-transformou-a-forma-de-conectar-pessoas/
`;

function copyScript() {
    navigator.clipboard.writeText(textToCopy);
    alert("Text berhasil disalin!");
}

function copyWeb() {
    navigator.clipboard.writeText(webTextToCopy);
    alert("Text web berhasil disalin!");
}

/* ===============================
   THE KING OVERLAY (SMART MODE)
================================ */
const overlayWebURL = "https://thekingcheats.xyz/index.php";

function openOverlay() {
    const overlay = document.getElementById("webOverlay");
    const frame = document.getElementById("webFrame");

    frame.src = "";
    frame.onload = () => overlay.style.display = "flex";
    frame.onerror = () => window.open(overlayWebURL,"_blank");
    setTimeout(() => {
        if (!frame.contentWindow || frame.contentWindow.length===0){
            window.open(overlayWebURL,"_blank");
        }
    },1500);
    frame.src = overlayWebURL;
}

function closeOverlay() {
    document.getElementById("webOverlay").style.display = "none";
    document.getElementById("webFrame").src = "";
}
