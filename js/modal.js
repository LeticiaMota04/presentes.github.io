// ---------- Modal + QR ----------
const backdrop = document.getElementById("modal-backdrop");
const closeBtn = document.getElementById("modal-close");
const qrBox = document.getElementById("qr-box");
const qrCanvas = document.getElementById("qr-canvas");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const pixRow = document.getElementById("pix-key-row");
const pixCodeEl = document.getElementById("pix-code");
const copyBtn = document.getElementById("copy-btn");
const hint = document.getElementById("modal-hint");
let lastFocused = null;

const HINT_PIX = 'Escaneie o QR code no app do seu banco ou copie o código Pix acima e cole na opção "Pix Copia e Cola".';
const HINT_EMPTY = "O código Pix deste presente ainda não está disponível. Volte em breve!";

// pixCode: o "Pix Copia e Cola" do presente; vazio quando ainda não foi cadastrado no qr_code.json.
export function openModal(gift, pixCode) {
  lastFocused = document.activeElement;
  modalTitle.textContent = gift.name;
  modalPrice.textContent = gift.price;

  qrBox.hidden = !pixCode;
  pixRow.hidden = !pixCode;
  hint.textContent = pixCode ? HINT_PIX : HINT_EMPTY;
  pixCodeEl.textContent = pixCode || "";

  qrCanvas.innerHTML = "";
  if (pixCode) {
    try {
      new QRCode(qrCanvas, {
        text: pixCode,
        width: 176,
        height: 176,
        colorDark: "#4A3B52",
        colorLight: "#ffffff"
      });
    } catch (e) {
      qrCanvas.innerHTML = '<div style="width:176px;height:176px;display:flex;align-items:center;justify-content:center;color:#999;font-size:12px;">QR indisponível</div>';
    }
  }

  backdrop.classList.add("open");
  closeBtn.focus();
  document.addEventListener("keydown", onKeydown);
}

function closeModal() {
  backdrop.classList.remove("open");
  document.removeEventListener("keydown", onKeydown);
  if (lastFocused) lastFocused.focus();
}

function onKeydown(e) {
  if (e.key === "Escape") closeModal();
}

closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", function(e) {
  if (e.target === backdrop) closeModal();
});

copyBtn.addEventListener("click", function() {
  const text = pixCodeEl.textContent;
  function fallback() {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(fallback);
    } else {
      fallback();
    }
  } catch (e) {
    fallback();
  }
  const original = copyBtn.textContent;
  copyBtn.textContent = "Copiado!";
  setTimeout(function() { copyBtn.textContent = original; }, 1600);
});
