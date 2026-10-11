// ---------- Gift grid ----------
import { icons } from "./gifts.js";

export function renderGifts(gifts, onSelect) {
  const grid = document.getElementById("gift-grid");
  gifts.forEach(function(g) {
    const btn = document.createElement("button");
    btn.className = "gift-card";
    btn.innerHTML =
      '<div class="gift-icon-wrap"><svg class="gift-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + icons[g.icon] + '</svg></div>' +
      '<div class="gift-name">' + g.name + '</div>' +
      '<div class="gift-desc">' + g.desc + '</div>' +
      '<div class="gift-foot"><span class="gift-price">' + g.price + '</span><span class="gift-cta">ver Pix →</span></div>';
    btn.addEventListener("click", function() { onSelect(g); });
    grid.appendChild(btn);
  });
}
