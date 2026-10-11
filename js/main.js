import { startCountdown } from "./countdown.js";
import { gifts } from "./gifts.js";
import { renderGifts } from "./gift-grid.js";
import { openModal } from "./modal.js";

startCountdown();

// Códigos Pix por presente: { "<chave qr do presente>": "<Pix Copia e Cola>" }
const pixCodes = fetch("qr_code.json")
  .then(function(res) { return res.ok ? res.json() : {}; })
  .catch(function() { return {}; });

renderGifts(gifts, function(gift) {
  pixCodes.then(function(codes) { openModal(gift, codes[gift.qr]); });
});
