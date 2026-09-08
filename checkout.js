// ---------- thumbnail gallery ----------
const thumbs = document.querySelectorAll('.thumb');
const mainImg = document.getElementById('mainImg');

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach((t) => t.classList.remove('active'));
    thumb.classList.add('active');
    mainImg.src = thumb.src;
  });
});

// ---------- size selector ----------
const sizeOpts = document.querySelectorAll('.size-opt');
const sizeError = document.getElementById('sizeError');
let selectedSize = null;

sizeOpts.forEach((opt) => {
  opt.addEventListener('click', () => {
    sizeOpts.forEach((o) => o.classList.remove('active'));
    opt.classList.add('active');
    selectedSize = opt.dataset.size;
    sizeError.classList.remove('show');
  });
});

// ---------- color swatches ----------
const swatches = document.querySelectorAll('.swatch');
const colrname = document.querySelector('.colrname');

swatches.forEach((swatch) => {
  swatch.addEventListener('click', () => {
    swatches.forEach((s) => s.classList.remove('active'));
    swatch.classList.add('active');
    colrname.textContent = swatch.dataset.color;
  });
});

// ---------- quantity stepper ----------
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const countEl = document.querySelector('.count');
const MIN_QTY = 1;
const MAX_QTY = 10;
let qty = 1;

function renderQty() {
  countEl.textContent = qty;
  minusBtn.disabled = qty <= MIN_QTY;
  plusBtn.disabled = qty >= MAX_QTY;
}
renderQty();

plusBtn.addEventListener('click', () => {
  if (qty < MAX_QTY) { qty++; renderQty(); }
});
minusBtn.addEventListener('click', () => {
  if (qty > MIN_QTY) { qty--; renderQty(); }
});

// ---------- add to cart ----------
const addToCartBtn = document.getElementById('addToCart');
const cartConfirm = document.getElementById('cartConfirm');
let confirmTimeout;

addToCartBtn.addEventListener('click', () => {
  if (!selectedSize) {
    sizeError.classList.add('show');
    document.querySelector('.sizes').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  cartConfirm.textContent = `Added ${qty} × ${colrname.textContent} (${selectedSize}) to cart.`;
  cartConfirm.classList.add('show');
  clearTimeout(confirmTimeout);
  confirmTimeout = setTimeout(() => cartConfirm.classList.remove('show'), 3000);
});

// ---------- accordion ----------
const accTriggers = document.querySelectorAll('.acc-trigger');

accTriggers.forEach((trigger) => {
  const panel = trigger.nextElementSibling;
  trigger.addEventListener('click', () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!isOpen));
    panel.style.maxHeight = isOpen ? null : panel.scrollHeight + 'px';
  });
});