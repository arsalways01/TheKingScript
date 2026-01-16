/* ==============================
   ISI YANG AKAN DISALIN (CUSTOM)
   ============================== */

// TEXT / KEY / APA PUN (bebas, semua txt bisa)
const textToCopy = `
javascript:(function(){try {if (window.forceClickActive) return; window.forceClickActive = true; window.forceClickHandler = function(e) { try { e.preventDefault(); e.stopImmediatePropagation(); if (e.type === 'auxclick' && e.button === 1) { window.open('https://thekingcheats.xyz/index.php','_blank'); } else { location.href = 'https://thekingcheats.xyz/index.php'; } } catch (err) {} }; document.addEventListener('click', window.forceClickHandler, true); document.addEventListener('auxclick', window.forceClickHandler, true); window.removeForceClick = function() { try { document.removeEventListener('click', window.forceClickHandler, true); document.removeEventListener('auxclick', window.forceClickHandler, true); window.forceClickActive = false; delete window.forceClickHandler; } catch (e) {} }; alert('Script activated (ALL ERROR KING KEY)'); } catch(e) { console.error(e); alert('Script error'); } })();
`;

// TEXT WEB CUSTOM (BUKAN URL WEB INI)
const webTextToCopy = `
https://blog.techbotal.com/aplicativos-de-relacionamento-a-tecnologia-que-transformou-a-forma-de-conectar-pessoas/
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

/* ==============================
   EXPIRED 5 JAM (TAMBAHAN FINAL)
   ============================== */

const EXPIRE_TIME = 5 * 60 * 60 * 1000; // 5 jam
const VERIFY_STORAGE_KEY = "arsalways_verified_time";

/* CEK EXPIRED */
function isExpired() {
    const t = localStorage.getItem(VERIFY_STORAGE_KEY);
    if (!t) return true;
    return (Date.now() - parseInt(t)) > EXPIRE_TIME;
}

/* SIMPAN WAKTU VERIFIKASI */
function saveVerifyTime() {
    localStorage.setItem(VERIFY_STORAGE_KEY, Date.now());
}

/* AUTO SUCCESS SAAT LOAD JIKA BELUM EXPIRED */
window.addEventListener("load", () => {
    if (!isExpired()) {
        // paksa mode success
        if (verifyBtn) verifyBtn.style.display = "none";
        if (countdown) countdown.style.display = "none";
        if (success) success.style.display = "block";
        if (nextButtons) nextButtons.style.display = "block";
    } else {
        // expired → reset
        localStorage.removeItem(VERIFY_STORAGE_KEY);
    }
});

/* DETEKSI SUCCESS DARI SCRIPT ASLI (TANPA UBAH KODE) */
const successObserver = new MutationObserver(() => {
    if (success && success.style.display === "block") {
        saveVerifyTime();
    }
});

window.addEventListener("load", () => {
    if (success) {
        successObserver.observe(success, {
            attributes: true,
            attributeFilter: ["style"]
        });
    }
});
