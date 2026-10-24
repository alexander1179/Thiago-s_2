// ==========================================================================
// Ambrosia Premium Liquor Boutique - Application Logic
// ==========================================================================

// --- Seed Data (Default Catalog Products) ---
const INITIAL_PRODUCTS = [
    // --- National Beers (Cervezas Nacionales) ---
    {
        id: "beer-nac-1",
        name: "Cerveza Club Colombia Dorada",
        category: "cerveza-nacional",
        type: "Rubia",
        price: 5200,
        stock: 48,
        image: "https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?auto=format&fit=crop&w=500&q=80",
        description: "Cerveza tipo lager premium nacional. Caracterizada por su color dorado brillante, aroma maltoso y cuerpo balanceado."
    },
    {
        id: "beer-nac-2",
        name: "Cerveza Águila Light",
        category: "cerveza-nacional",
        type: "Light Lager",
        price: 4500,
        stock: 72,
        image: "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?auto=format&fit=crop&w=500&q=80",
        description: "Cerveza nacional de sabor suave, refrescante y bajo contenido de calorías. Ideal para climas cálidos y reuniones casuales."
    },
    {
        id: "beer-nac-3",
        name: "Cerveza Poker",
        category: "cerveza-nacional",
        type: "Lager Tradicional",
        price: 4200,
        stock: 60,
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=500&q=80",
        description: "La cerveza de los amigos. Cerveza tradicional lager con el amargor perfecto para celebrar la amistad."
    },

    // --- Imported Beers (Cervezas Importadas) ---
    {
        id: "beer-imp-1",
        name: "Cerveza Corona Extra",
        category: "cerveza-importada",
        type: "Lager Mexicana",
        price: 7800,
        stock: 96,
        image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&w=500&q=80",
        description: "Cerveza premium de origen mexicano, suave y refrescante. Perfecta para tomar bien fría con una rodaja de limón."
    },
    {
        id: "beer-imp-2",
        name: "Cerveza Heineken",
        category: "cerveza-importada",
        type: "Pale Lager Holandesa",
        price: 7200,
        stock: 120,
        image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=500&q=80",
        description: "Cerveza holandesa de tipo pale lager con un sabor distintivo y amargor refrescante de fama mundial."
    },
    {
        id: "beer-imp-3",
        name: "Cerveza Stella Artois",
        category: "cerveza-importada",
        type: "Pilsner Belga",
        price: 8200,
        stock: 36,
        image: "https://images.unsplash.com/photo-1598555772379-307f59d57a5b?auto=format&fit=crop&w=500&q=80",
        description: "Cerveza belga de estilo pilsner de aroma floral, sabor lupulado balanceado y final limpio y refrescante."
    },

    // --- Liquors (Licores: Whisky, Ron, Aguardiente, etc.) ---
    {
        id: "liq-1",
        name: "Whisky Johnnie Walker Black Label",
        category: "licores",
        type: "Whisky Escocés",
        price: 165000,
        stock: 18,
        image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=500&q=80",
        description: "Un clásico whisky escocés blend premium añejado 12 años, famoso por su rico perfil de sabor ahumado e intenso."
    },
    {
        id: "liq-2",
        name: "Ron Viejo de Caldas 8 Años",
        category: "licores",
        type: "Ron Añejo",
        price: 78000,
        stock: 24,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=500&q=80",
        description: "Excelente ron colombiano elaborado artesanalmente en barriles de roble blanco americano a gran altura, aroma dulce y maderas."
    },
    {
        id: "liq-3",
        name: "Aguardiente Antioqueño Sin Azúcar",
        category: "licores",
        type: "Aguardiente",
        price: 54000,
        stock: 40,
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=500&q=80",
        description: "Licor tradicional anisado colombiano. Elaborado con alcohol extrapuro, notas anisadas naturales y sin azúcar."
    },
    {
        id: "liq-4",
        name: "Whisky Old Parr 12 Años",
        category: "licores",
        type: "Whisky Escocés",
        price: 155000,
        stock: 15,
        image: "https://images.unsplash.com/photo-1582819509237-d5b75f20ff7c?auto=format&fit=crop&w=500&q=80",
        description: "Elegante escocés añejado 12 años de gran suavidad y notas frutales maduras, caramelo y un ligero toque herbal."
    },
    {
        id: "liq-5",
        name: "Tequila Don Julio Blanco",
        category: "licores",
        type: "Tequila 100% Agave",
        price: 215000,
        stock: 10,
        image: "https://images.unsplash.com/photo-1516535794938-6063878f28cc?auto=format&fit=crop&w=500&q=80",
        description: "Tequila premium ultra-suave producido de ágave azul seleccionado a mano. Destilado con notas cítricas e ideal para Margaritas."
    },

    // --- Snacks (Productos de Paquete) ---
    {
        id: "snk-1",
        name: "Papas Margarita Pollo Gigante",
        category: "snacks",
        type: "Papas Fritas",
        price: 5500,
        stock: 50,
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d20?auto=format&fit=crop&w=500&q=80",
        description: "Crujientes papas fritas nacionales con el inconfundible y tradicional sabor a pollo favorito en Colombia."
    },
    {
        id: "snk-2",
        name: "Doritos Mega Queso",
        category: "snacks",
        type: "Tortillas de Maíz",
        price: 4900,
        stock: 45,
        image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&w=500&q=80",
        description: "Hojuelas de maíz crujiente con intenso sabor a queso Cheddar picante. El snack definitivo para acompañar cervezas frías."
    },
    {
        id: "snk-3",
        name: "Todorico Original",
        category: "snacks",
        type: "Mix de Snacks",
        price: 3800,
        stock: 35,
        image: "https://images.unsplash.com/photo-1599490659273-e3b6942d68bb?auto=format&fit=crop&w=500&q=80",
        description: "La mezcla perfecta de plátano verde maduro, chicharrón crocante y papas fritas tradicionales en un solo paquete."
    },
    {
        id: "snk-4",
        name: "Maní Moto Picante",
        category: "snacks",
        type: "Maní Recubierto",
        price: 2900,
        stock: 80,
        image: "https://images.unsplash.com/photo-1534119396591-5998e1578579?auto=format&fit=crop&w=500&q=80",
        description: "Maní crujiente recubierto de una cubierta tostada y salada con un ligero toque picante muy adictivo."
    }
];

// --- Default Images fallback in case of custom product additions ---
const DEFAULT_IMAGES = {
    "cerveza-nacional": "https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?auto=format&fit=crop&w=500&q=80",
    "cerveza-importada": "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&w=500&q=80",
    "licores": "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=500&q=80",
    "snacks": "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&w=500&q=80"
};

// --- Application State ---
let products = JSON.parse(localStorage.getItem("ambrosia_products")) || INITIAL_PRODUCTS;
let cart = JSON.parse(localStorage.getItem("ambrosia_cart")) || [];
let activeCategory = "all";
let searchFilter = "";
let sortBy = "default";
let activeView = "shop-view";
let appliedDiscount = 0; // percentage
let appliedCode = "";

// --- Currency Formatter (COP $) ---
const currencyFormatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
});

// --- Document Elements References ---
const elements = {
    // Nav & Tabs
    navLogo: document.getElementById("navLogo"),
    linkCatalogo: document.getElementById("link-catalogo"),
    linkNosotros: document.getElementById("link-nosotros"),
    adminToggleBtn: document.getElementById("adminToggleBtn"),
    exitAdminBtn: document.getElementById("exitAdminBtn"),
    searchInput: document.getElementById("searchInput"),
    cartToggleBtn: document.getElementById("cartToggleBtn"),
    cartBadgeCount: document.getElementById("cartBadgeCount"),
    
    // Views
    shopView: document.getElementById("shop-view"),
    adminView: document.getElementById("admin-view"),
    nosotrosSection: document.getElementById("nosotros-section"),
    
    // Catalog Elements
    categoryTabs: document.querySelectorAll(".category-tab"),
    productsGrid: document.getElementById("productsGrid"),
    resultsCount: document.getElementById("resultsCount"),
    sortProducts: document.getElementById("sortProducts"),
    scrollToFeatured: document.getElementById("scrollToFeatured"),
    
    // Cart Drawer Elements
    cartOverlay: document.getElementById("cartOverlay"),
    cartDrawer: document.getElementById("cartDrawer"),
    closeCartBtn: document.getElementById("closeCartBtn"),
    cartItemsContainer: document.getElementById("cartItemsContainer"),
    cartSubtotal: document.getElementById("cartSubtotal"),
    cartDiscountRow: document.getElementById("cartDiscountRow"),
    discountPercentage: document.getElementById("discountPercentage"),
    cartDiscount: document.getElementById("cartDiscount"),
    cartTotal: document.getElementById("cartTotal"),
    promoCodeInput: document.getElementById("promoCodeInput"),
    applyPromoBtn: document.getElementById("applyPromoBtn"),
    checkoutBtn: document.getElementById("checkoutBtn"),
    cartStartShoppingBtn: document.getElementById("cartStartShoppingBtn"),
    
    // Admin Panel Elements
    openAddModalBtn: document.getElementById("openAddModalBtn"),
    resetCatalogBtn: document.getElementById("resetCatalogBtn"),
    inventoryTableBody: document.getElementById("inventoryTableBody"),
    metricTotalProducts: document.getElementById("metricTotalProducts"),
    metricBeers: document.getElementById("metricBeers"),
    metricLiquors: document.getElementById("metricLiquors"),
    metricSnacks: document.getElementById("metricSnacks"),
    
    // Product Modal Elements
    productModal: document.getElementById("productModal"),
    modalTitle: document.getElementById("modalTitle"),
    closeModalBtn: document.getElementById("closeModalBtn"),
    cancelModalBtn: document.getElementById("cancelModalBtn"),
    productForm: document.getElementById("productForm"),
    editProductId: document.getElementById("editProductId"),
    prodName: document.getElementById("prodName"),
    prodCategory: document.getElementById("prodCategory"),
    prodType: document.getElementById("prodType"),
    prodPrice: document.getElementById("prodPrice"),
    prodStock: document.getElementById("prodStock"),
    prodImage: document.getElementById("prodImage"),
    prodDesc: document.getElementById("prodDesc"),
    saveProductBtn: document.getElementById("saveProductBtn"),
    
    // Checkout Modal Elements
    checkoutModal: document.getElementById("checkoutModal"),
    receiptDate: document.getElementById("receiptDate"),
    receiptOrderNum: document.getElementById("receiptOrderNum"),
    receiptItemsList: document.getElementById("receiptItemsList"),
    receiptTotal: document.getElementById("receiptTotal"),
    closeReceiptBtn: document.getElementById("closeReceiptBtn"),
    
    // Toast notifications
    toastContainer: document.getElementById("toastContainer")
};

// ==========================================================================
// Initialization & Local Storage Sync
// ==========================================================================
function init() {
    // If local storage is empty, initialize it
    if (!localStorage.getItem("ambrosia_products")) {
        localStorage.setItem("ambrosia_products", JSON.stringify(INITIAL_PRODUCTS));
    }
    
    setupEventListeners();
    renderCatalog();
    renderCart();
    renderAdminPanel();
    updateNavigation();
}

function saveProductsToStorage() {
    localStorage.setItem("ambrosia_products", JSON.stringify(products));
}

function saveCartToStorage() {
    localStorage.setItem("ambrosia_cart", JSON.stringify(cart));
}

// ==========================================================================
// Navigation & Views Switcher
// ==========================================================================
function switchView(viewName) {
    activeView = viewName;
    
    if (viewName === "shop-view") {
        elements.shopView.classList.add("active");
        elements.adminView.classList.remove("active");
        elements.nosotrosSection.style.display = "block";
        elements.adminToggleBtn.innerHTML = `<i class="fa-solid fa-user-gear"></i> Panel Admin`;
        elements.adminToggleBtn.classList.remove("active");
        elements.linkCatalogo.classList.add("active");
        elements.linkNosotros.classList.remove("active");
    } else if (viewName === "admin-view") {
        elements.shopView.classList.remove("active");
        elements.adminView.classList.add("active");
        elements.nosotrosSection.style.display = "none";
        elements.adminToggleBtn.innerHTML = `<i class="fa-solid fa-store"></i> Tienda`;
        elements.adminToggleBtn.classList.add("active");
        elements.linkCatalogo.classList.remove("active");
        elements.linkNosotros.classList.remove("active");
        renderAdminPanel();
    }
    
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateNavigation() {
    // Simple scroll highlighting / link toggle
    elements.linkCatalogo.addEventListener("click", (e) => {
        e.preventDefault();
        switchView("shop-view");
        elements.linkCatalogo.classList.add("active");
        elements.linkNosotros.classList.remove("active");
        const catSection = document.getElementById("catalogo");
        if (catSection) catSection.scrollIntoView({ behavior: 'smooth' });
    });

    elements.linkNosotros.addEventListener("click", (e) => {
        e.preventDefault();
        switchView("shop-view");
        elements.linkCatalogo.classList.remove("active");
        elements.linkNosotros.classList.add("active");
        const nosSection = document.getElementById("nosotros-section");
        if (nosSection) nosSection.scrollIntoView({ behavior: 'smooth' });
    });

    elements.navLogo.addEventListener("click", (e) => {
        e.preventDefault();
        switchView("shop-view");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ==========================================================================
// Toast Notifications
// ==========================================================================
function showToast(message, type = 'info') {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let iconClass = "fa-circle-info";
    if (type === "success") iconClass = "fa-circle-check";
    if (type === "danger") iconClass = "fa-circle-exclamation";
    
    toast.innerHTML = `
        <i class="fa-solid ${iconClass} toast-icon"></i>
        <span class="toast-message">${message}</span>
        <i class="fa-solid fa-xmark toast-close"></i>
    `;
    
    elements.toastContainer.appendChild(toast);
    
    // Close toast button
    toast.querySelector(".toast-close").addEventListener("click", () => {
        toast.style.transform = "translateX(100%)";
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    });
    
    // Auto-remove toast after 3.5 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            toast.style.transform = "translateX(100%)";
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 300);
        }
    }, 3500);
}

// ==========================================================================
// Catalog Section (Cliente)
// ==========================================================================
function renderCatalog() {
    elements.productsGrid.innerHTML = "";
    
    // 1. Filter by category
    let filtered = products.filter(p => {
        if (activeCategory === "all") return true;
        return p.category === activeCategory;
    });
    
    // 2. Filter by search input
    if (searchFilter.trim() !== "") {
        const query = searchFilter.toLowerCase().trim();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.type.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }
    
    // 3. Sort products
    if (sortBy === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    // Update count indicator
    if (filtered.length === 0) {
        elements.resultsCount.innerText = "No se encontraron productos";
        elements.productsGrid.innerHTML = `
            <div class="empty-catalog-state w-full text-center" style="grid-column: 1 / -1; padding: 60px 20px;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 16px;"></i>
                <p style="color: var(--text-secondary);">No encontramos ningún producto que coincida con tu búsqueda.</p>
                <button class="btn btn-outline btn-sm" id="clearFiltersBtn" style="margin-top: 16px;">Limpiar Filtros</button>
            </div>
        `;
        document.getElementById("clearFiltersBtn")?.addEventListener("click", () => {
            elements.searchInput.value = "";
            searchFilter = "";
            activeCategory = "all";
            elements.categoryTabs.forEach(t => t.classList.remove("active"));
            elements.categoryTabs[0].classList.add("active");
            renderCatalog();
        });
        return;
    }
    
    elements.resultsCount.innerText = `Mostrando ${filtered.length} producto${filtered.length > 1 ? 's' : ''}`;
    
    // Render product cards
    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        // Setup details badge based on product category
        let moduleName = "Producto";
        let moduleIcon = '<i class="fa-solid fa-wine-glass"></i>';
        
        if (p.category === "cerveza-nacional") {
            moduleName = "Cerv. Nacional";
            moduleIcon = '<i class="fa-solid fa-beer-mug-empty"></i>';
        } else if (p.category === "cerveza-importada") {
            moduleName = "Cerv. Importada";
            moduleIcon = '<i class="fa-solid fa-beer-mug-empty text-amber"></i>';
        } else if (p.category === "licores") {
            moduleName = "Licor Fino";
            moduleIcon = '<i class="fa-solid fa-bottle-droplet"></i>';
        } else if (p.category === "snacks") {
            moduleName = "Snacks";
            moduleIcon = '<i class="fa-solid fa-cookie-bite"></i>';
        }
        
        const isOutOfStock = p.stock <= 0;
        const isLowStock = p.stock > 0 && p.stock <= 5;
        
        let stockBadge = `<span class="stock-badge in-stock">Disponible (${p.stock})</span>`;
        if (isOutOfStock) {
            stockBadge = `<span class="stock-badge low-stock">Agotado</span>`;
        } else if (isLowStock) {
            stockBadge = `<span class="stock-badge low-stock">¡Últimas ${p.stock} unid!</span>`;
        }

        card.innerHTML = `
            <div class="product-image-container">
                <img src="${p.image || DEFAULT_IMAGES[p.category]}" class="product-card-img" alt="${p.name}" onerror="this.src='${DEFAULT_IMAGES[p.category]}'">
                <span class="product-module-badge">${moduleIcon} ${moduleName}</span>
                ${stockBadge}
            </div>
            <div class="product-info">
                <span class="product-type">${p.type}</span>
                <h3 class="product-title">${p.name}</h3>
                <p class="product-description">${p.description || "Sin descripción disponible."}</p>
                <div class="product-price-row">
                    <span class="product-price">${currencyFormatter.format(p.price)}</span>
                    <button class="btn btn-primary btn-sm add-to-cart-btn" data-id="${p.id}" ${isOutOfStock ? 'disabled' : ''}>
                        ${isOutOfStock ? '<i class="fa-solid fa-ban"></i> Sin Stock' : '<i class="fa-solid fa-cart-plus"></i> Agregar'}
                    </button>
                </div>
            </div>
        `;
        
        elements.productsGrid.appendChild(card);
    });

    // Add event listeners to "Agregar al Carrito" buttons
    elements.productsGrid.querySelectorAll(".add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            addToCart(id);
        });
    });
}

function selectCategoryTab(category) {
    activeCategory = category;
    elements.categoryTabs.forEach(tab => {
        if (tab.getAttribute("data-category") === category) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
    renderCatalog();
}

// ==========================================================================
// Shopping Cart Logic
// ==========================================================================
function renderCart() {
    elements.cartItemsContainer.innerHTML = "";
    
    // Update badge numbers
    const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    elements.cartBadgeCount.innerText = totalItemsCount;
    
    // Visual anim trigger for cart badge
    if (totalItemsCount > 0) {
        elements.cartBadgeCount.style.transform = "scale(1.2)";
        setTimeout(() => elements.cartBadgeCount.style.transform = "scale(1)", 200);
    }

    if (cart.length === 0) {
        elements.cartItemsContainer.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-solid fa-cart-flatbed-suitcase"></i>
                <p>Tu carrito de compras está vacío</p>
                <button class="btn btn-primary btn-sm" id="cartStartShoppingBtn">Explorar Catálogo</button>
            </div>
        `;
        document.getElementById("cartStartShoppingBtn")?.addEventListener("click", () => {
            elements.cartDrawer.classList.remove("open");
            elements.cartOverlay.classList.remove("open");
            elements.linkCatalogo.click();
        });
        
        elements.cartSubtotal.innerText = currencyFormatter.format(0);
        elements.cartTotal.innerText = currencyFormatter.format(0);
        elements.checkoutBtn.disabled = true;
        elements.cartDiscountRow.style.display = "none";
        return;
    }

    // Enable checkout button
    elements.checkoutBtn.disabled = false;
    
    let subtotal = 0;
    
    cart.forEach(cartItem => {
        // Find product details
        const prod = products.find(p => p.id === cartItem.productId);
        if (!prod) return; // safety check
        
        const itemTotal = prod.price * cartItem.quantity;
        subtotal += itemTotal;
        
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <img src="${prod.image || DEFAULT_IMAGES[prod.category]}" alt="${prod.name}" class="cart-item-img" onerror="this.src='${DEFAULT_IMAGES[prod.category]}'">
            <div class="cart-item-details">
                <span class="cart-item-type">${prod.type}</span>
                <h4 class="cart-item-title">${prod.name}</h4>
                <div class="cart-item-price">${currencyFormatter.format(prod.price)}</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button class="qty-btn dec-qty-btn" data-id="${prod.id}"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-val">${cartItem.quantity}</span>
                    <button class="qty-btn inc-qty-btn" data-id="${prod.id}"><i class="fa-solid fa-plus"></i></button>
                </div>
                <button class="remove-item-btn" data-id="${prod.id}"><i class="fa-solid fa-trash-can"></i> Quitar</button>
            </div>
        `;
        
        elements.cartItemsContainer.appendChild(itemElement);
    });

    // Subtotal Calculations
    elements.cartSubtotal.innerText = currencyFormatter.format(subtotal);
    
    // Discount Calculation
    let discountAmount = 0;
    if (appliedDiscount > 0) {
        discountAmount = subtotal * (appliedDiscount / 100);
        elements.discountPercentage.innerText = appliedDiscount;
        elements.cartDiscount.innerText = `-${currencyFormatter.format(discountAmount)}`;
        elements.cartDiscountRow.style.display = "flex";
    } else {
        elements.cartDiscountRow.style.display = "none";
    }
    
    const finalTotal = subtotal - discountAmount;
    elements.cartTotal.innerText = currencyFormatter.format(finalTotal);

    // Event listeners inside cart drawer items
    elements.cartItemsContainer.querySelectorAll(".dec-qty-btn").forEach(btn => {
        btn.addEventListener("click", () => changeCartQuantity(btn.getAttribute("data-id"), -1));
    });
    elements.cartItemsContainer.querySelectorAll(".inc-qty-btn").forEach(btn => {
        btn.addEventListener("click", () => changeCartQuantity(btn.getAttribute("data-id"), 1));
    });
    elements.cartItemsContainer.querySelectorAll(".remove-item-btn").forEach(btn => {
        btn.addEventListener("click", () => removeFromCart(btn.getAttribute("data-id")));
    });
}

function addToCart(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;

    if (prod.stock <= 0) {
        showToast(`Lo sentimos, ${prod.name} no cuenta con inventario disponible.`, "danger");
        return;
    }

    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        if (existingItem.quantity >= prod.stock) {
            showToast(`Límite alcanzado. Solo hay ${prod.stock} unidades de ${prod.name} en stock.`, "danger");
            return;
        }
        existingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }

    saveCartToStorage();
    renderCart();
    showToast(`"${prod.name}" añadido al carrito de compras.`, "success");
}

function changeCartQuantity(productId, delta) {
    const prod = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.productId === productId);
    
    if (!prod || !cartItem) return;

    if (delta > 0) {
        // Increment
        if (cartItem.quantity >= prod.stock) {
            showToast(`Máximo disponible: Solo hay ${prod.stock} unidades de ${prod.name} en stock.`, "danger");
            return;
        }
        cartItem.quantity += 1;
    } else {
        // Decrement
        cartItem.quantity += delta;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.productId !== productId);
            showToast(`"${prod.name}" removido del carrito.`, "info");
        }
    }

    saveCartToStorage();
    renderCart();
}

function removeFromCart(productId) {
    const prod = products.find(p => p.id === productId);
    cart = cart.filter(item => item.productId !== productId);
    
    saveCartToStorage();
    renderCart();
    if (prod) {
        showToast(`"${prod.name}" removido del carrito de compras.`, "info");
    }
}

function applyPromo() {
    const code = elements.promoCodeInput.value.trim().toUpperCase();
    if (code === "AMBROSIA10") {
        appliedDiscount = 10;
        appliedCode = "AMBROSIA10";
        showToast("Código de descuento AMBROSIA10 aplicado: 10% de descuento.", "success");
    } else if (code === "FIESTA20") {
        appliedDiscount = 20;
        appliedCode = "FIESTA20";
        showToast("Código de descuento FIESTA20 aplicado: 20% de descuento.", "success");
    } else if (code === "") {
        appliedDiscount = 0;
        appliedCode = "";
        renderCart();
    } else {
        showToast("Código de descuento inválido.", "danger");
        appliedDiscount = 0;
        appliedCode = "";
    }
    
    renderCart();
}

function executeCheckout() {
    if (cart.length === 0) return;

    // Verify stock one last time before checkout
    let stockValid = true;
    let problemProd = "";

    cart.forEach(cartItem => {
        const prod = products.find(p => p.id === cartItem.productId);
        if (!prod || prod.stock < cartItem.quantity) {
            stockValid = false;
            problemProd = prod ? prod.name : "Producto desconocido";
        }
    });

    if (!stockValid) {
        showToast(`Error al procesar: Stock insuficiente de ${problemProd}. Por favor actualice el carrito.`, "danger");
        return;
    }

    // Deduct Stock
    cart.forEach(cartItem => {
        const prod = products.find(p => p.id === cartItem.productId);
        prod.stock -= cartItem.quantity;
    });

    // Populate checkout receipt confirmation modal
    elements.receiptItemsList.innerHTML = "";
    let subtotal = 0;
    
    cart.forEach(cartItem => {
        const prod = products.find(p => p.id === cartItem.productId);
        const itemCost = prod.price * cartItem.quantity;
        subtotal += itemCost;
        
        const row = document.createElement("div");
        row.className = "receipt-item-row";
        row.innerHTML = `
            <span><span class="r-qty">${cartItem.quantity}x</span> ${prod.name}</span>
            <span>${currencyFormatter.format(itemCost)}</span>
        `;
        elements.receiptItemsList.appendChild(row);
    });

    // Discount calculations for receipt
    const discountAmount = subtotal * (appliedDiscount / 100);
    const finalTotal = subtotal - discountAmount;
    
    if (appliedDiscount > 0) {
        const discRow = document.createElement("div");
        discRow.className = "receipt-item-row";
        discRow.style.color = "#2ecc71";
        discRow.style.fontWeight = "500";
        discRow.innerHTML = `
            <span>Descuento Aplicado (${appliedCode} - ${appliedDiscount}%)</span>
            <span>-${currencyFormatter.format(discountAmount)}</span>
        `;
        elements.receiptItemsList.appendChild(discRow);
    }

    // Set Receipt Numbers
    const now = new Date();
    elements.receiptDate.innerText = now.toLocaleString();
    elements.receiptOrderNum.innerText = `#AMB-${Math.floor(1000 + Math.random() * 9000)}`;
    elements.receiptTotal.innerText = currencyFormatter.format(finalTotal);

    // Save Deducted Stock to LocalStorage
    saveProductsToStorage();
    
    // Clear Cart
    cart = [];
    appliedDiscount = 0;
    appliedCode = "";
    elements.promoCodeInput.value = "";
    saveCartToStorage();
    
    // Refresh Interface views
    renderCart();
    renderCatalog();
    renderAdminPanel();

    // Close Cart & Open receipt modal
    elements.cartDrawer.classList.remove("open");
    elements.cartOverlay.classList.remove("open");
    elements.checkoutModal.classList.add("open");
}

// ==========================================================================
// Admin Panel Inventory Management
// ==========================================================================
function renderAdminPanel() {
    renderInventoryTable();
    renderAdminMetrics();
}

function renderAdminMetrics() {
    elements.metricTotalProducts.innerText = products.length;
    
    const countBeers = products.filter(p => p.category === "cerveza-nacional" || p.category === "cerveza-importada").length;
    const countLiquors = products.filter(p => p.category === "licores").length;
    const countSnacks = products.filter(p => p.category === "snacks").length;
    
    elements.metricBeers.innerText = countBeers;
    elements.metricLiquors.innerText = countLiquors;
    elements.metricSnacks.innerText = countSnacks;
}

function renderInventoryTable() {
    elements.inventoryTableBody.innerHTML = "";
    
    products.forEach(p => {
        const row = document.createElement("tr");
        
        let catText = "Desconocido";
        let catColor = "rgba(255,255,255,0.1)";
        let catTxtColor = "#ffffff";
        
        if (p.category === "cerveza-nacional") {
            catText = "Cerveza Nacional";
            catColor = "rgba(229, 184, 59, 0.1)";
            catTxtColor = "var(--accent-gold)";
        } else if (p.category === "cerveza-importada") {
            catText = "Cerveza Importada";
            catColor = "rgba(52, 152, 219, 0.1)";
            catTxtColor = "var(--accent-blue)";
        } else if (p.category === "licores") {
            catText = "Licores Finos";
            catColor = "rgba(155, 89, 182, 0.1)";
            catTxtColor = "var(--accent-purple)";
        } else if (p.category === "snacks") {
            catText = "Snacks & Paquetes";
            catColor = "rgba(46, 204, 113, 0.1)";
            catTxtColor = "var(--accent-green)";
        }

        const isOutOfStock = p.stock <= 0;

        row.innerHTML = `
            <td><img src="${p.image || DEFAULT_IMAGES[p.category]}" class="table-img" alt="${p.name}" onerror="this.src='${DEFAULT_IMAGES[p.category]}'"></td>
            <td>
                <div style="font-weight: 600; color: var(--text-primary);">${p.name}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${p.description ? p.description.substring(0, 50) + '...' : 'Sin descripción'}</div>
            </td>
            <td>
                <span class="table-category-badge" style="background-color: ${catColor}; color: ${catTxtColor};">
                    ${catText}
                </span>
            </td>
            <td>${p.type}</td>
            <td style="font-weight: 700; color: var(--text-primary);">${currencyFormatter.format(p.price)}</td>
            <td style="font-weight: 600; ${isOutOfStock ? 'color: var(--accent-red);' : ''}">${p.stock} uds</td>
            <td>
                <div class="table-actions">
                    <button class="action-btn edit-btn" data-id="${p.id}" title="Editar Producto"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-btn delete-btn" data-id="${p.id}" title="Eliminar Producto"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        `;
        
        elements.inventoryTableBody.appendChild(row);
    });

    // Add Button Event Listeners
    elements.inventoryTableBody.querySelectorAll(".edit-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            openProductFormModal(id);
        });
    });
    elements.inventoryTableBody.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            deleteProduct(id);
        });
    });
}

function openProductFormModal(productId = null) {
    elements.productForm.reset();
    
    if (productId) {
        // Edit Mode
        const prod = products.find(p => p.id === productId);
        if (!prod) return;
        
        elements.modalTitle.innerText = "Editar Producto";
        elements.editProductId.value = prod.id;
        elements.prodName.value = prod.name;
        elements.prodCategory.value = prod.category;
        elements.prodType.value = prod.type;
        elements.prodPrice.value = prod.price;
        elements.prodStock.value = prod.stock;
        elements.prodImage.value = prod.image;
        elements.prodDesc.value = prod.description;
    } else {
        // Create Mode
        elements.modalTitle.innerText = "Agregar Nuevo Producto";
        elements.editProductId.value = "";
    }
    
    elements.productModal.classList.add("open");
}

function saveProductFromForm(event) {
    event.preventDefault();
    
    const id = elements.editProductId.value;
    const name = elements.prodName.value.trim();
    const category = elements.prodCategory.value;
    const type = elements.prodType.value.trim();
    const price = parseInt(elements.prodPrice.value);
    const stock = parseInt(elements.prodStock.value);
    const imageInput = elements.prodImage.value.trim();
    const description = elements.prodDesc.value.trim();
    
    const image = imageInput !== "" ? imageInput : DEFAULT_IMAGES[category];

    if (id) {
        // Update product in list
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products[index] = { id, name, category, type, price, stock, image, description };
            showToast(`"${name}" ha sido actualizado exitosamente.`, "success");
        }
    } else {
        // Create new product
        const newProduct = {
            id: `prod-custom-${Date.now()}`,
            name,
            category,
            type,
            price,
            stock,
            image,
            description
        };
        products.push(newProduct);
        showToast(`"${name}" ha sido añadido al catálogo.`, "success");
    }

    saveProductsToStorage();
    renderCatalog();
    renderAdminPanel();
    
    // Close Modal
    elements.productModal.classList.remove("open");
}

function deleteProduct(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;
    
    if (confirm(`¿Está seguro de que desea eliminar el producto "${prod.name}"?`)) {
        products = products.filter(p => p.id !== productId);
        
        // Remove from cart too if it's there
        cart = cart.filter(item => item.productId !== productId);
        
        saveProductsToStorage();
        saveCartToStorage();
        
        renderCatalog();
        renderCart();
        renderAdminPanel();
        
        showToast(`El producto "${prod.name}" ha sido eliminado.`, "danger");
    }
}

function resetCatalogToDefault() {
    if (confirm("¿Está seguro de restaurar el catálogo predeterminado? Se perderán todos los cambios y productos personalizados.")) {
        products = [...INITIAL_PRODUCTS];
        cart = [];
        appliedDiscount = 0;
        appliedCode = "";
        
        saveProductsToStorage();
        saveCartToStorage();
        
        renderCatalog();
        renderCart();
        renderAdminPanel();
        
        showToast("Catálogo restablecido con los productos iniciales.", "info");
    }
}

// ==========================================================================
// Event Listeners Configuration
// ==========================================================================
function setupEventListeners() {
    // Nav & Admin toggling
    elements.adminToggleBtn.addEventListener("click", () => {
        if (activeView === "shop-view") {
            switchView("admin-view");
        } else {
            switchView("shop-view");
        }
    });
    
    elements.exitAdminBtn.addEventListener("click", () => {
        switchView("shop-view");
    });
    
    // Search Filter
    elements.searchInput.addEventListener("input", (e) => {
        searchFilter = e.target.value;
        renderCatalog();
    });

    // Category Selector Tabs
    elements.categoryTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            elements.categoryTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            activeCategory = tab.getAttribute("data-category");
            
            // Auto scroll to catalog section if user is on hero or about us
            if (activeView !== "shop-view") {
                switchView("shop-view");
            }
            
            const catSection = document.getElementById("catalogo");
            if (catSection && window.scrollY < 200) {
                catSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            renderCatalog();
        });
    });

    // Sort Dropdown
    elements.sortProducts.addEventListener("change", (e) => {
        sortBy = e.target.value;
        renderCatalog();
    });

    // Cart Drawer Toggle Actions
    elements.cartToggleBtn.addEventListener("click", () => {
        elements.cartDrawer.classList.add("open");
        elements.cartOverlay.classList.add("open");
    });
    elements.closeCartBtn.addEventListener("click", () => {
        elements.cartDrawer.classList.remove("open");
        elements.cartOverlay.classList.remove("open");
    });
    elements.cartOverlay.addEventListener("click", () => {
        elements.cartDrawer.classList.remove("open");
        elements.cartOverlay.classList.remove("open");
    });

    // Cart promo code and checkout buttons
    elements.applyPromoBtn.addEventListener("click", applyPromo);
    elements.promoCodeInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") applyPromo();
    });
    elements.checkoutBtn.addEventListener("click", executeCheckout);
    
    // Product Modals Triggers (Add/Edit)
    elements.openAddModalBtn.addEventListener("click", () => openProductFormModal());
    elements.closeModalBtn.addEventListener("click", () => elements.productModal.classList.remove("open"));
    elements.cancelModalBtn.addEventListener("click", () => elements.productModal.classList.remove("open"));
    elements.productForm.addEventListener("submit", saveProductFromForm);
    
    // Reset Data Trigger
    elements.resetCatalogBtn.addEventListener("click", resetCatalogToDefault);
    
    // Close Checkout Receipt
    elements.closeReceiptBtn.addEventListener("click", () => {
        elements.checkoutModal.classList.remove("open");
    });
    
    // Hero Actions
    elements.scrollToFeatured.addEventListener("click", (e) => {
        e.preventDefault();
        selectCategoryTab("licores");
        const catSection = document.getElementById("catalogo");
        if (catSection) catSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Start application on load
document.addEventListener("DOMContentLoaded", init);
init(); // Calling it directly to ensure instant execution
