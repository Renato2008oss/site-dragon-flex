const dragonProducts = [
  {
    id: 'jaqueta-aurora',
    name: 'Jaqueta Aurora Premium',
    category: 'Roupas',
    price: 289.9,
    rating: 4.8,
    reviews: 214,
    image: 'assets/prod-jaqueta.svg',
    description: 'Jaqueta premium com acabamento sofisticado, tecido resistente e modelagem moderna para o dia a dia urbano.',
    delivery: '3 a 7 dias úteis',
    details: ['Tecido encorpado com toque macio', 'Forro interno confortável', 'Corte moderno com bolsos funcionais', 'Ideal para looks casuais e executivos'],
    gallery: ['assets/prod-jaqueta.svg', 'assets/prod-jaqueta-2.svg', 'assets/prod-jaqueta-3.svg'],
    testimonials: [
      { name: 'Marina S.', text: 'Acabamento impecável e veste muito bem. Passa sensação de produto realmente premium.', stars: 5 },
      { name: 'Lucas P.', text: 'Muito confortável e elegante. Ótima escolha para usar no trabalho e sair depois.', stars: 4.8 }
    ]
  },
  {
    id: 'camiseta-onyx',
    name: 'Camiseta Onyx Signature',
    category: 'Roupas',
    price: 89.9,
    rating: 4.6,
    reviews: 189,
    image: 'assets/prod-camiseta.svg',
    description: 'Camiseta minimalista com caimento refinado, perfeita para compor combinações modernas e versáteis.',
    delivery: '3 a 7 dias úteis',
    details: ['Malha respirável', 'Costura reforçada', 'Modelagem unissex', 'Visual clean'],
    gallery: ['assets/prod-camiseta.svg', 'assets/prod-camiseta-2.svg', 'assets/prod-camiseta-3.svg'],
    testimonials: [
      { name: 'Bianca F.', text: 'Confortável e muito bonita. O tecido tem qualidade excelente.', stars: 4.7 },
      { name: 'Rafael T.', text: 'Ótimo custo-benefício para uma peça premium.', stars: 4.5 }
    ]
  },
  {
    id: 'bolsa-eclipse',
    name: 'Bolsa Eclipse Urban',
    category: 'Acessórios',
    price: 239.9,
    rating: 4.7,
    reviews: 134,
    image: 'assets/prod-bolsa.svg',
    description: 'Bolsa versátil com design contemporâneo, espaço interno inteligente e acabamento sofisticado.',
    delivery: '3 a 7 dias úteis',
    details: ['Compartimentos internos', 'Alça ajustável', 'Visual premium', 'Estrutura leve'],
    gallery: ['assets/prod-bolsa.svg', 'assets/prod-bolsa-2.svg', 'assets/prod-bolsa-3.svg'],
    testimonials: [
      { name: 'Clara R.', text: 'Linda e super funcional. Cabe tudo sem perder o estilo.', stars: 4.8 },
      { name: 'Ana B.', text: 'Excelente qualidade e acabamento.', stars: 4.6 }
    ]
  },
  {
    id: 'relogio-imperial',
    name: 'Relógio Imperial Gold',
    category: 'Acessórios',
    price: 329.9,
    rating: 4.9,
    reviews: 97,
    image: 'assets/prod-relogio.svg',
    description: 'Relógio com design elegante e sofisticado, ideal para quem valoriza presença visual e estilo marcante.',
    delivery: '3 a 7 dias úteis',
    details: ['Pulseira confortável', 'Design refinado', 'Mostrador de leitura fácil', 'Acabamento dourado'],
    gallery: ['assets/prod-relogio.svg', 'assets/prod-relogio-2.svg', 'assets/prod-relogio-3.svg'],
    testimonials: [
      { name: 'Igor M.', text: 'Muito bonito ao vivo. Parece peça de categoria ainda mais alta.', stars: 5 },
      { name: 'Felipe A.', text: 'Gostei do peso e do visual premium.', stars: 4.8 }
    ]
  },
  {
    id: 'kit-cama-lux',
    name: 'Kit Cama Lux Velvet',
    category: 'Casa',
    price: 199.9,
    rating: 4.5,
    reviews: 152,
    image: 'assets/prod-cama.svg',
    description: 'Conjunto de cama com toque macio, paleta sofisticada e conforto pensado para renovar o ambiente.',
    delivery: '3 a 7 dias úteis',
    details: ['Tecido suave', 'Visual elegante', 'Fácil manutenção', 'Acabamento premium'],
    gallery: ['assets/prod-cama.svg', 'assets/prod-cama-2.svg', 'assets/prod-cama-3.svg'],
    testimonials: [
      { name: 'Patrícia L.', text: 'Meu quarto ficou muito mais bonito. Material ótimo.', stars: 4.6 },
      { name: 'Sofia G.', text: 'Muito confortável e elegante.', stars: 4.4 }
    ]
  },
  {
    id: 'luminaria-orbit',
    name: 'Luminária Orbit Design',
    category: 'Casa',
    price: 149.9,
    rating: 4.6,
    reviews: 88,
    image: 'assets/prod-luminaria.svg',
    description: 'Luminária decorativa para ambientes modernos, com presença visual forte e acabamento refinado.',
    delivery: '3 a 7 dias úteis',
    details: ['Design contemporâneo', 'Peça decorativa premium', 'Estrutura compacta', 'Ideal para home office e sala'],
    gallery: ['assets/prod-luminaria.svg', 'assets/prod-luminaria-2.svg', 'assets/prod-luminaria-3.svg'],
    testimonials: [
      { name: 'Vanessa K.', text: 'Mudou o visual do meu escritório. Linda.', stars: 4.7 },
      { name: 'Diego N.', text: 'Muito elegante e bem acabada.', stars: 4.5 }
    ]
  },
  {
    id: 'garrafa-termica-pulse',
    name: 'Garrafa Térmica Pulse',
    category: 'Esportes',
    price: 69.9,
    rating: 4.7,
    reviews: 201,
    image: 'assets/prod-garrafa.svg',
    description: 'Garrafa térmica com pegada ergonômica, ideal para rotina esportiva, treino e mobilidade.',
    delivery: '3 a 7 dias úteis',
    details: ['Formato ergonômico', 'Alta durabilidade', 'Tampa segura', 'Estilo esportivo'],
    gallery: ['assets/prod-garrafa.svg', 'assets/prod-garrafa-2.svg', 'assets/prod-garrafa-3.svg'],
    testimonials: [
      { name: 'Bruno C.', text: 'Perfeita para academia. Material excelente.', stars: 4.8 },
      { name: 'Elaine D.', text: 'Gostei muito do design e do tamanho.', stars: 4.6 }
    ]
  },
  {
    id: 'yoga-mat-nexus',
    name: 'Yoga Mat Nexus Pro',
    category: 'Esportes',
    price: 129.9,
    rating: 4.4,
    reviews: 73,
    image: 'assets/prod-yoga.svg',
    description: 'Tapete para prática esportiva com ótima área útil e visual moderno.',
    delivery: '3 a 7 dias úteis',
    details: ['Base estável', 'Fácil de enrolar', 'Conforto para exercícios', 'Acabamento premium'],
    gallery: ['assets/prod-yoga.svg', 'assets/prod-yoga-2.svg', 'assets/prod-yoga-3.svg'],
    testimonials: [
      { name: 'Marta H.', text: 'Confortável e muito bonito.', stars: 4.4 },
      { name: 'Juliana V.', text: 'Ótimo para treinar em casa.', stars: 4.3 }
    ]
  },
  {
    id: 'organizador-prime',
    name: 'Organizador Prime Box',
    category: 'Utilidades',
    price: 79.9,
    rating: 4.5,
    reviews: 118,
    image: 'assets/prod-organizador.svg',
    description: 'Organizador funcional para escritório, closet ou bancada, unindo praticidade e elegância.',
    delivery: '3 a 7 dias úteis',
    details: ['Design modular', 'Fácil de limpar', 'Versátil', 'Acabamento sofisticado'],
    gallery: ['assets/prod-organizador.svg', 'assets/prod-organizador-2.svg', 'assets/prod-organizador-3.svg'],
    testimonials: [
      { name: 'Carla M.', text: 'Resolveu minha organização com estilo.', stars: 4.6 },
      { name: 'Pedro G.', text: 'Muito útil e resistente.', stars: 4.4 }
    ]
  },
  {
    id: 'kit-escrita-aura',
    name: 'Kit Escrita Aura Office',
    category: 'Utilidades',
    price: 59.9,
    rating: 4.3,
    reviews: 64,
    image: 'assets/prod-escrita.svg',
    description: 'Kit com itens essenciais para mesa e rotina profissional, com estética refinada.',
    delivery: '3 a 7 dias úteis',
    details: ['Acabamento elegante', 'Prático no dia a dia', 'Visual profissional', 'Leve e funcional'],
    gallery: ['assets/prod-escrita.svg', 'assets/prod-escrita-2.svg', 'assets/prod-escrita-3.svg'],
    testimonials: [
      { name: 'Natália E.', text: 'Minha mesa ficou muito mais organizada.', stars: 4.4 },
      { name: 'Gustavo R.', text: 'Bonito e funcional.', stars: 4.2 }
    ]
  }
];

const festTechProducts = [
  { id: 'ft-smart-x12', name: 'Smartphone X12 Pro', category: 'Smartphones', price: 2499.9, rating: 4.8, reviews: 341, image: 'assets/ft-smartphone.svg', description: 'Desempenho avançado, visual premium e ótima experiência para produtividade e entretenimento.' },
  { id: 'ft-note-air', name: 'Notebook Air Fusion', category: 'Notebooks', price: 4299.9, rating: 4.7, reviews: 188, image: 'assets/ft-notebook.svg', description: 'Notebook leve e potente para estudo, trabalho e criação de conteúdo.' },
  { id: 'ft-buds-max', name: 'Fone Buds Max', category: 'Acessórios Tech', price: 399.9, rating: 4.6, reviews: 273, image: 'assets/ft-fone.svg', description: 'Áudio imersivo, conforto prolongado e acabamento moderno.' },
  { id: 'ft-power-hub', name: 'Power Hub 65W', category: 'Acessórios Tech', price: 189.9, rating: 4.5, reviews: 96, image: 'assets/ft-carregador.svg', description: 'Carregador rápido compacto para rotina conectada.' }
];

const festTechServices = [
  { title: 'Conserto de celulares', text: 'Diagnóstico rápido, troca de componentes e ajuste de desempenho com atendimento especializado.' },
  { title: 'Troca de tela', text: 'Reposição de tela com acabamento técnico e vistoria de funcionamento antes da entrega.' },
  { title: 'Manutenção geral', text: 'Limpeza, revisão e otimização de notebooks, smartphones e acessórios.' }
];

function currency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
function starText(rating, reviews) { return `⭐ ${rating.toFixed(1)} · ${reviews} reviews`; }
function allProducts() { return [...dragonProducts, ...festTechProducts]; }
function getCart() { try { return JSON.parse(localStorage.getItem('dragonCart') || '[]'); } catch { return []; } }
function setCart(cart) { localStorage.setItem('dragonCart', JSON.stringify(cart)); updateCartCount(); }
function updateCartCount() { const count = getCart().reduce((a, i) => a + i.qty, 0); document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = count); }
function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.qty += 1;
  else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
  setCart(cart);
  renderCart();
  openCart();
}
function removeFromCart(id) { setCart(getCart().filter(item => item.id !== id)); renderCart(); }
function cartTotal() { return getCart().reduce((a, i) => a + i.price * i.qty, 0); }

function productCard(product, detailHref = `product.html?id=${product.id}`, options = {}) {
  const { showAddButton = true, ctaLabel = 'Ver detalhes' } = options;
  return `
  <article class="card product-card reveal">
    <img class="product-thumb" src="${product.image}" alt="${product.name}">
    <div class="product-body">
      <div>
        <div class="muted">${product.category}</div>
        <h3 class="product-title">${product.name}</h3>
      </div>
      <p class="muted">${product.description}</p>
      <div class="rating">${starText(product.rating, product.reviews)}</div>
      <div class="price-row">
        <strong class="price">${currency(product.price)}</strong>
      </div>
      <div class="card-actions">
        <a class="btn btn-secondary" href="${detailHref}">${ctaLabel}</a>
        ${showAddButton ? `<button class="btn" data-add-id="${product.id}">Adicionar</button>` : ''}
      </div>
    </div>
  </article>`;
}

function renderHighlights() {
  const target = document.querySelector('[data-highlight-products]');
  if (!target) return;
  target.innerHTML = dragonProducts.slice(0, 4).map(product => productCard(product)).join('');
  revealOnScroll();
}

function updateProductCount(total, visible) {
  const countWrap = document.querySelector('[data-product-count]');
  if (!countWrap) return;
  countWrap.innerHTML = visible === total
    ? `<strong>${visible}</strong> produtos exibidos no catálogo principal.`
    : `<strong>${visible}</strong> de <strong>${total}</strong> produtos exibidos após os filtros.`;
}

function renderProductListing() {
  const grid = document.querySelector('[data-product-grid]');
  if (!grid) return;
  const category = document.querySelector('#categoryFilter')?.value || 'Todos';
  const price = document.querySelector('#priceFilter')?.value || 'Todos';
  const rating = parseFloat(document.querySelector('#ratingFilter')?.value || '0');
  const query = (document.querySelector('#productSearch')?.value || '').trim().toLowerCase();
  let items = [...dragonProducts];
  const total = items.length;

  if (category !== 'Todos') items = items.filter(item => item.category === category);
  if (price !== 'Todos') {
    items = items.filter(item => {
      if (price === '0-99') return item.price <= 99.99;
      if (price === '100-199') return item.price >= 100 && item.price <= 199.99;
      if (price === '200-999') return item.price >= 200;
      return true;
    });
  }
  if (rating > 0) items = items.filter(item => item.rating >= rating);
  if (query) items = items.filter(item => `${item.name} ${item.category} ${item.description}`.toLowerCase().includes(query));

  updateProductCount(total, items.length);
  grid.innerHTML = items.length
    ? items.map(product => productCard(product)).join('')
    : `<div class="card empty-catalog"><strong>Nenhum produto encontrado.</strong><p class="muted">Ajuste os filtros ou use outro termo de busca.</p></div>`;
  revealOnScroll();
}

function renderProductDetail() {
  const target = document.querySelector('[data-product-detail]');
  if (!target) return;
  const id = new URLSearchParams(window.location.search).get('id') || dragonProducts[0].id;
  const product = dragonProducts.find(item => item.id === id) || dragonProducts[0];
  document.title = `${product.name} | Dragon Flex`;
  target.innerHTML = `
    <div class="gallery">
      <div class="card gallery-main"><img id="mainProductImage" src="${product.gallery[0]}" alt="${product.name}"></div>
      <div class="gallery-thumbs">
        ${product.gallery.map((image, i) => `<button class="thumb-btn" data-gallery-image="${image}" aria-label="Imagem ${i + 1}"><img src="${image}" alt="${product.name} ${i + 1}"></button>`).join('')}
      </div>
    </div>
    <div class="card detail-panel">
      <div class="badge">Produto Dragon Flex</div>
      <h1 class="section-title" style="font-size:2.2rem;margin-top:1rem">${product.name}</h1>
      <div class="rating">${starText(product.rating, product.reviews)}</div>
      <p class="section-subtitle" style="margin-top:1rem">${product.description}</p>
      <strong class="price" style="font-size:2rem">${currency(product.price)}</strong>
      <div class="delivery"><strong>Entrega estimada:</strong> ${product.delivery}</div>
      <ul class="feature-list">${product.details.map(item => `<li><span class="check">✓</span><span>${item}</span></li>`).join('')}</ul>
      <div style="display:flex;gap:.8rem;flex-wrap:wrap">
        <button class="btn" data-add-product="${product.id}">Adicionar ao carrinho</button>
        <a class="btn btn-secondary" href="products.html">Voltar para produtos</a>
      </div>
      <div style="margin-top:1.4rem">
        <h3>Avaliações de clientes</h3>
        <div class="review-list">
          ${product.testimonials.map(review => `<div class="review-item"><strong>${review.name}</strong><div class="rating">⭐ ${review.stars}</div><p class="muted">${review.text}</p></div>`).join('')}
        </div>
      </div>
    </div>`;

  target.querySelectorAll('[data-gallery-image]').forEach(btn => btn.addEventListener('click', () => {
    target.querySelector('#mainProductImage').src = btn.dataset.galleryImage;
  }));
  target.querySelector('[data-add-product]').addEventListener('click', () => addToCart(product));
}

function renderFestTech() {
  const grid = document.querySelector('[data-fest-grid]');
  if (grid) {
    grid.innerHTML = festTechProducts.map(product => `
      <article class="card product-card reveal">
        <img class="product-thumb" src="${product.image}" alt="${product.name}">
        <div class="product-body">
          <div><div class="muted">${product.category}</div><h3 class="product-title">${product.name}</h3></div>
          <p class="muted">${product.description}</p>
          <div class="rating">${starText(product.rating, product.reviews)}</div>
          <div class="price-row"><strong class="price">${currency(product.price)}</strong></div>
          <div class="card-actions">
            <button class="btn btn-secondary" data-view-fest="${product.id}">Ver mais</button>
            <button class="btn btn-gold" data-add-fest="${product.id}">Adicionar</button>
          </div>
        </div>
      </article>`).join('');
    grid.querySelectorAll('[data-add-fest]').forEach(btn => btn.addEventListener('click', () => {
      const product = festTechProducts.find(item => item.id === btn.dataset.addFest);
      if (product) addToCart(product);
    }));
    grid.querySelectorAll('[data-view-fest]').forEach(btn => btn.addEventListener('click', () => {
      const product = festTechProducts.find(item => item.id === btn.dataset.viewFest);
      if (!product) return;
      alert(`${product.name}\n\n${product.description}\n\nPreço: ${currency(product.price)}\nAvaliação: ${starText(product.rating, product.reviews)}`);
    }));
  }
  const serviceGrid = document.querySelector('[data-service-grid]');
  if (serviceGrid) {
    serviceGrid.innerHTML = festTechServices.map(service => `<article class="card service-card reveal"><h3>${service.title}</h3><p class="muted">${service.text}</p></article>`).join('');
  }
  revealOnScroll();
}

function changeCartQty(id, delta) {
  const cart = getCart();
  const item = cart.find(entry => entry.id === id);
  if (!item) return;
  item.qty += delta;
  const filtered = cart.filter(entry => entry.qty > 0);
  setCart(filtered);
  renderCart();
}

function clearCart() {
  setCart([]);
  renderCart();
}

function renderCart() {
  const itemsWrap = document.querySelector('[data-cart-items]');
  const totalWrap = document.querySelector('[data-cart-total]');
  if (!itemsWrap || !totalWrap) return;
  const cart = getCart();
  if (!cart.length) {
    itemsWrap.innerHTML = `<div class="empty-state">Seu carrinho está vazio. Explore os produtos Dragon Flex para adicionar itens.</div>`;
    totalWrap.textContent = currency(0);
    return;
  }
  itemsWrap.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <strong>${item.name}</strong>
        <div class="muted">${currency(item.price)} cada</div>
        <div class="cart-qty-row">
          <button class="qty-btn" data-cart-dec="${item.id}" aria-label="Diminuir quantidade">−</button>
          <span class="cart-qty">${item.qty}</span>
          <button class="qty-btn" data-cart-inc="${item.id}" aria-label="Aumentar quantidade">+</button>
        </div>
        <div class="price">${currency(item.price * item.qty)}</div>
      </div>
      <button class="icon-btn" data-remove-cart="${item.id}" aria-label="Remover">✕</button>
    </div>`).join('');
  totalWrap.textContent = currency(cartTotal());
  itemsWrap.querySelectorAll('[data-remove-cart]').forEach(btn => btn.addEventListener('click', () => removeFromCart(btn.dataset.removeCart)));
  itemsWrap.querySelectorAll('[data-cart-inc]').forEach(btn => btn.addEventListener('click', () => changeCartQty(btn.dataset.cartInc, 1)));
  itemsWrap.querySelectorAll('[data-cart-dec]').forEach(btn => btn.addEventListener('click', () => changeCartQty(btn.dataset.cartDec, -1)));
}
function openCart() { document.querySelector('.cart-drawer')?.classList.add('open'); document.querySelector('.cart-overlay')?.classList.add('show'); }
function closeCart() { document.querySelector('.cart-drawer')?.classList.remove('open'); document.querySelector('.cart-overlay')?.classList.remove('show'); }

function globalSearch() {
  const input = document.querySelector('[data-global-search]');
  if (!input) return;
  const run = () => { window.location.href = `products.html?search=${encodeURIComponent(input.value.trim())}`; };
  input.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
  document.querySelector('[data-search-trigger]')?.addEventListener('click', run);
}
function initProductSearchFromURL() {
  const input = document.querySelector('#productSearch');
  if (!input) return;
  const q = new URLSearchParams(window.location.search).get('search');
  if (q) input.value = q;
}
function revealOnScroll() {
  const nodes = document.querySelectorAll('.reveal');
  if (!nodes.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  nodes.forEach(node => observer.observe(node));
}
function bindNavToggle() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}
function bindFilters() {
  ['#categoryFilter', '#priceFilter', '#ratingFilter', '#productSearch'].forEach(sel => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.addEventListener('input', renderProductListing);
    el.addEventListener('change', renderProductListing);
  });
}
function bindGlobalCartEvents() {
  document.querySelectorAll('[data-open-cart]').forEach(el => el.addEventListener('click', openCart));
  document.querySelectorAll('[data-close-cart]').forEach(el => el.addEventListener('click', closeCart));
  document.querySelector('.cart-overlay')?.addEventListener('click', closeCart);
  document.querySelectorAll('[data-clear-cart]').forEach(el => el.addEventListener('click', clearCart));
}
function bindDynamicAddButtons() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-add-id]');
    if (!btn) return;
    const product = allProducts().find(item => item.id === btn.dataset.addId);
    if (product) addToCart(product);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCart();
  bindNavToggle();
  bindGlobalCartEvents();
  bindDynamicAddButtons();
  globalSearch();
  renderHighlights();
  initProductSearchFromURL();
  bindFilters();
  renderProductListing();
  renderProductDetail();
  renderFestTech();
  revealOnScroll();
});
