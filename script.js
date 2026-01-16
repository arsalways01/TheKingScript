// Teks yang ingin disalin saat tombol "Salin Teks" diklik
const textToCopy = "Ini adalah teks yang akan disalin!";

// Web atau URL yang ingin disalin saat tombol "Salin Web" diklik
const webToCopy = "https://github.com/ArsAlwaysss";

// Tombol & pesan
const copyTextBtn = document.getElementById('copy-text-btn');
const copyWebBtn = document.getElementById('copy-web-btn');
const textMessage = document.getElementById('text-message');
const webMessage = document.getElementById('web-message');

// Fungsi salin teks
copyTextBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
        textMessage.innerText = "Teks tersalin!";
        setTimeout(() => textMessage.innerText = "", 2000);
    });
});

// Fungsi salin web
copyWebBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(webToCopy).then(() => {
        webMessage.innerText = "Web tersalin!";
        setTimeout(() => webMessage.innerText = "", 2000);
    });
});
