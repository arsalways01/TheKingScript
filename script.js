// Tombol Salin Script dengan hitung mundur
const copyScriptBtn = document.getElementById("copyScriptBtn");
const countdownText = document.getElementById("countdownText");
const scriptArea = document.getElementById("scriptArea");

copyScriptBtn.addEventListener("click", () => {
    let countdown = 10;
    countdownText.textContent = `Menyalin dalam ${countdown} detik...`;

    const interval = setInterval(() => {
        countdown--;
        if(countdown > 0){
            countdownText.textContent = `Menyalin dalam ${countdown} detik...`;
        } else {
            clearInterval(interval);
            // Salin script ke clipboard
            scriptArea.style.display = "block";
            scriptArea.select();
            navigator.clipboard.writeText(scriptArea.value).then(() => {
                countdownText.textContent = "Script berhasil disalin!";
            });
        }
    }, 1000);
});

// Tombol Salin Web (otomatis menyalin URL halaman)
const copyWebBtn = document.getElementById("copyWebBtn");
copyWebBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href)
        .then(() => alert("Link web berhasil disalin!"));
});
