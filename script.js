/* ===============================
   EXTREME CLIENT SECURITY
================================ */

// ==== FIREBASE CONFIG ====
const firebaseConfig = {
  apiKey: "AIzaSyAF3B3_Bq-Q9ulQdxfXHkCBqMTIDlx0sqY",
  authDomain: "panel-user-b78ff.firebaseapp.com",
  databaseURL: "https://panel-user-b78ff-default-rtdb.firebaseio.com",
  projectId: "panel-user-b78ff",
  storageBucket: "panel-user-b78ff.firebasestorage.app",
  messagingSenderId: "86797928744",
  appId: "1:86797928744:web:cb85dd498c6cf3b659281d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ===============================
// DEVICE ID (HASH + FINGERPRINT)
// ===============================
function h(x){
  return btoa(x).replace(/=/g,"").substr(0,32);
}

let rawId = localStorage.getItem("_kraw");
if(!rawId){
  rawId = crypto.randomUUID();
  localStorage.setItem("_kraw", rawId);
}

const deviceId = h(rawId + navigator.userAgent + screen.width);

// ===============================
// PATH OBFUSCATION
// ===============================
const DB_PATH = h("king_" + deviceId);

// ===============================
// ELEMENTS
// ===============================
const verifyBtn = document.getElementById("verifyBtn");
const countdown = document.getElementById("countdown");
const success = document.getElementById("success");
const nextButtons = document.getElementById("nextButtons");

// ===============================
// TIME OFFSET (ANTI FAKE)
// ===============================
const OFFSET = 918273;

// ===============================
// CHECK VERIFIED (AUTO SUCCESS)
// ===============================
db.ref(DB_PATH).once("value").then(snap=>{
  const d = snap.val();
  if(d && (Date.now() - (d.t - OFFSET)) < 5*60*60*1000){
    unlock();
  }
});

// ===============================
// VERIFICATION 10s
// ===============================
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

// ===============================
// SAVE VERIFY
// ===============================
function saveVerify(){
  db.ref(DB_PATH).set({
    t: Date.now() + OFFSET
  });
}

// ===============================
// UNLOCK UI
// ===============================
function unlock(){
  verifyBtn.style.display="none";
  countdown.innerText="";
  success.style.display="block";
  nextButtons.style.display="block";
}

// ===============================
// SFL PROTECTION
// ===============================
function openSFL(){
  sessionStorage.setItem("_fromsfl","1");
  window.open("https://ISI_SFL_KAMU", "_blank");
}

if(sessionStorage.getItem("_fromsfl")){
  sessionStorage.removeItem("_fromsfl");
}

// ===============================
// COPY FUNCTIONS
// ===============================
const textToCopy = `javascript:(function(){try {if (window.forceClickActive) return; window.forceClickActive = true; window.forceClickHandler = function(e) { try { e.preventDefault(); e.stopImmediatePropagation(); if (e.type === 'auxclick' && e.button === 1) { window.open('https://thekingcheats.xyz/index.php','_blank'); } else { location.href = 'https://thekingcheats.xyz/index.php'; } } catch (err) {} }; document.addEventListener('click', window.forceClickHandler, true); document.addEventListener('auxclick', window.forceClickHandler, true); window.removeForceClick = function() { try { document.removeEventListener('click', window.forceClickHandler, true); document.removeEventListener('auxclick', window.forceClickHandler, true); window.forceClickActive = false; delete window.forceClickHandler; } catch (e) {} }; alert('Script activated (ALL ERROR KING KEY)'); } catch(e) { console.error(e); alert('Script error'); } })();`;
const webTextToCopy = `https://blog.techbotal.com/aplicativos-de-relacionamento-a-tecnologia-que-transformou-a-forma-de-conectar-pessoas/`;
const overlayWebURL = "https://thekingcheats.xyz/index.php";

function copyScript(){navigator.clipboard.writeText(textToCopy);}
function copyWeb(){navigator.clipboard.writeText(webTextToCopy);}

// ===============================
// OVERLAY
// ===============================
function openOverlay(){
  const o=document.getElementById("webOverlay");
  const f=document.getElementById("webFrame");
  f.src=overlayWebURL;
  o.style.display="flex";
}
function closeOverlay(){
  document.getElementById("webOverlay").style.display="none";
  document.getElementById("webFrame").src="";
}

// ===============================
// DEVTOOLS DETECTION
// ===============================
setInterval(()=>{
  if(window.outerWidth - window.innerWidth > 200){
    document.body.innerHTML="<h1>Access Blocked</h1>";
  }
},1200);
