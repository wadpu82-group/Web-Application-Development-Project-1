const MENU = [

/* ================= SOUP ================= */
{ id:1, name:"Seblak Level 1", price:15000, img:"🍲", cat:["soup","spicy"], taste:"spicy" },
{ id:2, name:"Seblak Level 3", price:18000, img:"🍲", cat:["soup","spicy"], taste:"spicy" },
{ id:3, name:"Seblak Level 5", price:20000, img:"🍲", cat:["soup","spicy"], taste:"spicy" },
{ id:4, name:"Bakso Urat", price:20000, img:"🥣", cat:["soup"], taste:"medium" },
{ id:5, name:"Soto Ayam", price:22000, img:"🍜", cat:["soup"], taste:"medium" },
{ id:6, name:"Rawon", price:30000, img:"🥣", cat:["soup"], taste:"medium" },
{ id:7, name:"Tom Yum Seafood", price:38000, img:"🍜", cat:["soup","seafood"], taste:"spicy" },
{ id:8, name:"Chicken Ramen", price:35000, img:"🍜", cat:["soup","ramen"], taste:"medium" },
{ id:9, name:"Beef Ramen", price:40000, img:"🍜", cat:["soup","ramen"], taste:"medium" },
{ id:10, name:"Seafood Ramen", price:42000, img:"🍜", cat:["soup","ramen"], taste:"spicy" },

/* ================= FRIED RICE ================= */
{ id:11, name:"Chicken Fried Rice", price:22000, img:"🍛", cat:["fried rice"], taste:"medium" },
{ id:12, name:"Seafood Fried Rice", price:35000, img:"🍛", cat:["fried rice"], taste:"spicy" },
{ id:13, name:"Mutton Fried Rice", price:30000, img:"🍛", cat:["fried rice"], taste:"spicy" },
{ id:14, name:"Green Chili Fried Rice", price:25000, img:"🍛", cat:["fried rice","spicy"], taste:"spicy" },
{ id:15, name:"Vegetarian Fried Rice", price:20000, img:"🥗", cat:["fried rice"], taste:"medium" },

/* ================= NOODLES ================= */
{ id:16, name:"Fried Noodles", price:18000, img:"🍝", cat:["noodles"], taste:"medium" },
{ id:17, name:"Kwetiau Goreng", price:20000, img:"🍝", cat:["noodles"], taste:"medium" },
{ id:18, name:"Mie Aceh", price:28000, img:"🍝", cat:["noodles","spicy"], taste:"spicy" },
{ id:19, name:"Mie Ayam", price:15000, img:"🍜", cat:["noodles"], taste:"medium" },
{ id:20, name:"Indomie Special", price:12000, img:"🍜", cat:["noodles"], taste:"medium" },

/* ================= SATAY ================= */
{ id:21, name:"Chicken Satay", price:25000, img:"🍢", cat:["satay"], taste:"medium" },
{ id:22, name:"Mutton Satay", price:45000, img:"🍢", cat:["satay"], taste:"medium" },
{ id:23, name:"Taichan Satay", price:22000, img:"🍡", cat:["satay","spicy"], taste:"spicy" },
{ id:24, name:"Chicken Skin Satay", price:20000, img:"🍢", cat:["satay"], taste:"medium" },
{ id:25, name:"Beef Satay Special", price:50000, img:"🍢", cat:["satay"], taste:"medium" },

/* ================= STEAK & GRILL ================= */
{ id:26, name:"Wagyu Tenderloin", price:250000, img:"🥩", cat:["steak"], taste:"medium" },
{ id:27, name:"Wagyu Sirloin", price:220000, img:"🥩", cat:["steak"], taste:"medium" },
{ id:28, name:"Wagyu Rib Eye", price:235000, img:"🥩", cat:["steak"], taste:"medium" },
{ id:29, name:"Grilled Salmon", price:75000, img:"🐟", cat:["grilled"], taste:"medium" },
{ id:30, name:"Grilled Chicken", price:30000, img:"🍗", cat:["grilled"], taste:"medium" },

/* ================= FAST FOOD ================= */
{ id:31, name:"Cheese Burger", price:35000, img:"🍔", cat:["burger"], taste:"medium" },
{ id:32, name:"Double Burger", price:45000, img:"🍔", cat:["burger"], taste:"medium" },
{ id:33, name:"French Fries", price:18000, img:"🍟", cat:["snack"], taste:"medium" },
{ id:34, name:"Hotdog Classic", price:25000, img:"🌭", cat:["snack"], taste:"medium" },
{ id:35, name:"BBQ Chicken Pizza", price:80000, img:"🍕", cat:["pizza"], taste:"medium" },

/* ================= RICE & EGG ================= */
{ id:36, name:"Ayam Geprek", price:20000, img:"🍗", cat:["rice","spicy"], taste:"spicy" },
{ id:37, name:"Spicy Egg Balado", price:15000, img:"🥚", cat:["rice","spicy"], taste:"spicy" },
{ id:38, name:"Fried Egg + Rice", price:12000, img:"🍳", cat:["rice"], taste:"medium" },
{ id:39, name:"Cheese Omelet", price:18000, img:"🍳", cat:["egg"], taste:"medium" },
{ id:40, name:"Chicken Porridge", price:15000, img:"🥣", cat:["porridge"], taste:"sweet" },

/* ================= DESSERT ================= */
{ id:41, name:"Chocolate Donut", price:8000, img:"🍩", cat:["sweet"], taste:"sweet" },
{ id:42, name:"Vanilla Donut", price:8000, img:"🍩", cat:["sweet"], taste:"sweet" },
{ id:43, name:"Red Velvet Donut", price:9000, img:"🍩", cat:["sweet"], taste:"sweet" },
{ id:44, name:"Tiramisu Donut", price:9000, img:"🍩", cat:["sweet"], taste:"sweet" },
{ id:45, name:"Strawberry Donut", price:8000, img:"🍩", cat:["sweet"], taste:"sweet" },
{ id:46, name:"Brownies Fudge", price:25000, img:"🍰", cat:["sweet"], taste:"sweet" },
{ id:47, name:"Cheesecake", price:32000, img:"🍰", cat:["sweet"], taste:"sweet" },
{ id:48, name:"Matcha Cake", price:30000, img:"🍵", cat:["sweet"], taste:"sweet" },
{ id:49, name:"Pandan Cake", price:28000, img:"🍰", cat:["sweet"], taste:"sweet" },
{ id:50, name:"Macaroons Box", price:30000, img:"🍪", cat:["sweet"], taste:"sweet" },

/* ================= DRINK ================= */
{ id:51, name:"Thai Tea", price:18000, img:"🧋", cat:["drink"], taste:"sweet" },
{ id:52, name:"Iced Lemon Tea", price:15000, img:"🍋", cat:["drink"], taste:"medium" },
{ id:53, name:"Mango Smoothie", price:25000, img:"🥭", cat:["drink"], taste:"sweet" },
{ id:54, name:"Avocado Coffee", price:28000, img:"🥑", cat:["drink"], taste:"medium" },
{ id:55, name:"Mineral Water", price:7000, img:"💧", cat:["drink"], taste:"medium" },

/* ================= HEALTHY ================= */
{ id:56, name:"Greek Salad", price:35000, img:"🥗", cat:["healthy"], taste:"medium" },
{ id:57, name:"Caesar Salad", price:32000, img:"🥗", cat:["healthy"], taste:"medium" },
{ id:58, name:"Fruit Bowl", price:28000, img:"🍉", cat:["healthy"], taste:"sweet" },
{ id:59, name:"Granola Yogurt", price:30000, img:"🥣", cat:["healthy"], taste:"sweet" },
{ id:60, name:"Oatmeal Banana", price:25000, img:"🍌", cat:["healthy"], taste:"sweet" },

/* ================= SEAFOOD ================= */
{ id:61, name:"Grilled Prawn", price:65000, img:"🦐", cat:["seafood"], taste:"medium" },
{ id:62, name:"Butter Crab", price:120000, img:"🦀", cat:["seafood"], taste:"medium" },
{ id:63, name:"Calamari Fried", price:55000, img:"🦑", cat:["seafood"], taste:"medium" },
{ id:64, name:"Fish and Chips", price:50000, img:"🐟", cat:["seafood"], taste:"medium" },
{ id:65, name:"Seafood Platter", price:150000, img:"🦞", cat:["seafood"], taste:"spicy" },

/* ================= SNACK ================= */
{ id:66, name:"Onion Rings", price:20000, img:"🧅", cat:["snack"], taste:"medium" },
{ id:67, name:"Cheese Balls", price:22000, img:"🧀", cat:["snack"], taste:"medium" },
{ id:68, name:"Chicken Wings", price:30000, img:"🍗", cat:["snack","spicy"], taste:"spicy" },
{ id:69, name:"Nachos Beef", price:35000, img:"🌮", cat:["snack"], taste:"medium" },
{ id:70, name:"Spring Roll", price:18000, img:"🥟", cat:["snack"], taste:"medium" },

/* ================= DRINK PREMIUM ================= */
{ id:71, name:"Matcha Latte", price:32000, img:"🍵", cat:["drink","premium"], taste:"sweet" },
{ id:72, name:"Caramel Macchiato", price:35000, img:"☕", cat:["drink","premium"], taste:"sweet" },
{ id:73, name:"Mozzarella Sticks", price:30000, img:"🧀", cat:["snack"], taste:"medium" },
{ id:74, name:"Potato Wedges", price:22000, img:"🥔", cat:["snack"], taste:"medium" },
{ id:75, name:"Dimsum Mix", price:28000, img:"🥟", cat:["snack"], taste:"medium" },

/* ================= DESSERT MORE ================= */
{ id:76, name:"Ice Cream Vanilla", price:15000, img:"🍨", cat:["sweet"], taste:"sweet" },
{ id:77, name:"Ice Cream Chocolate", price:15000, img:"🍨", cat:["sweet"], taste:"sweet" },
{ id:78, name:"Banana Split", price:30000, img:"🍨", cat:["sweet"], taste:"sweet" },
{ id:79, name:"Pancake Maple", price:28000, img:"🥞", cat:["sweet"], taste:"sweet" },
{ id:80, name:"Waffle Ice Cream", price:32000, img:"🧇", cat:["sweet"], taste:"sweet" }

];

// ================= INITIAL SETUP =================
let cart = [];
let orders = [];
let chats = [];

const SELLER_PROFILE = {
    id: "KING-SELLER-001",
    contact: "wa.me/6281234567890",
    shortVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
};

let checkoutMap = null;
let checkoutMarker = null;
let selectedLocation = null;

// ================= LOAD LOCAL STORAGE =================
if(localStorage.getItem("orders")){
    orders = JSON.parse(localStorage.getItem("orders"));
}

if(localStorage.getItem("chats")){
    chats = JSON.parse(localStorage.getItem("chats"));
}

// Initialize stock
MENU.forEach(item => {
    if(!item.stock){
        item.stock = Math.floor(Math.random() * 20) + 10;
    }
});

if(localStorage.getItem("stock")){
    const savedStock = JSON.parse(localStorage.getItem("stock"));
    MENU.forEach(i => {
        if(savedStock[i.id]){
            i.stock = savedStock[i.id];
        }
    });
}

// ================= CATEGORIES =================
const CATEGORIES = [
{ id: 'all', name: 'All', emoji: '🍽️' },
{ id: 'soup', name: 'Soup', emoji: '🍲' },
{ id: 'fried rice', name: 'Fried Rice', emoji: '🍛' },
{ id: 'noodles', name: 'Noodles', emoji: '🍜' },
{ id: 'satay', name: 'Satay', emoji: '🍢' },
{ id: 'steak', name: 'Steak', emoji: '🥩' },
{ id: 'burger', name: 'Burger', emoji: '🍔' },
{ id: 'pizza', name: 'Pizza', emoji: '🍕' },
{ id: 'rice', name: 'Rice', emoji: '🍚' },
{ id: 'sweet', name: 'Dessert', emoji: '🍰' },
{ id: 'drink', name: 'Drinks', emoji: '🧋' },
{ id: 'healthy', name: 'Healthy', emoji: '🥗' },
{ id: 'snack', name: 'Snack', emoji: '🍟' },
{ id: 'spicy', name: 'Spicy', emoji: '🌶️' },
{ id: 'seafood', name: 'Seafood', emoji: '🦐' },
{ id: 'japanese', name: 'Japanese', emoji: '🍱' },
{ id: 'korean', name: 'Korean', emoji: '🍡' },
{ id: 'western', name: 'Western', emoji: '🍔' },
{ id: 'premium', name: 'Premium', emoji: '👑' }
];

let activeCategory = 'all';
let searchQuery = '';

// ================= RENDER CATEGORY BUTTONS =================
function renderCategories(){
    const container = document.getElementById('category-container');
    if(!container) return;

    container.innerHTML = CATEGORIES.map(cat => `
        <button onclick="filterByCategory('${cat.id}')"
        class="category-btn px-4 py-2 rounded-full text-sm font-medium transition-all
        ${activeCategory === cat.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
        data-category="${cat.id}">
        ${cat.emoji} ${cat.name}
        </button>
    `).join('');
}

// ================= FILTER BY CATEGORY =================
function filterByCategory(category){
    activeCategory = category;
    renderCategories();
    filterMenu();
}

// ================= FILTER MENU =================
function filterMenu(){
    let filtered = [...MENU];

    if(activeCategory !== 'all'){
        filtered = filtered.filter(item => 
            item.cat && item.cat.includes(activeCategory)
        );
    }

    if(searchQuery){
        filtered = filtered.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    renderMenu(filtered.slice(0, 40));
}

// ================= SEARCH =================
function searchMenu(){
    searchQuery = document.getElementById("searchInput").value.toLowerCase();
    filterMenu();
}

// ================= GET FOOD IMAGE =================
function getFoodImage(name){
    return `https://source.unsplash.com/600x400/?${encodeURIComponent(name)},food`;
}

// ================= RENDER MENU =================
function renderMenu(items){
    const container = document.getElementById("menu-container");
    container.innerHTML = "";

    if(items.length === 0){
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="text-6xl mb-4">🔍</div>
                <h3 class="text-xl font-bold text-gray-700 mb-2">Menu Tidak Ditemukan</h3>
                <p class="text-gray-500">Coba cari dengan kata kunci lain atau pilih kategori lain</p>
            </div>
        `;
        return;
    }

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";

        card.innerHTML = `
            <div class="relative">
                <div class="skeleton h-[180px] absolute w-full"></div>
                <img data-src="${getFoodImage(item.name)}"
                class="menu-image lazy-image">
                ${item.taste === 'spicy' ? '<span class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">🌶️ Pedas</span>' : ''}
                ${item.taste === 'sweet' ? '<span class="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">🍬 Manis</span>' : ''}
            </div>
            <div class="p-4">
                <h3 class="font-bold text-sm mb-2">${item.img} ${item.name}</h3>
                <p class="text-orange-600 font-bold mb-3">
                    Rp ${item.price.toLocaleString()}
                </p>
                <div class="flex items-center gap-2">
                    <button onclick="addToCart(${item.id})"
                    class="flex-1 bg-black text-white py-2 rounded-xl text-sm hover:bg-gray-800 transition-colors">
                        Tambah 🛒
                    </button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    lazyLoad();
}

// ================= LAZY LOAD =================
function lazyLoad(){
    const images = document.querySelectorAll(".lazy-image");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => {
                    img.classList.add("loaded");
                    img.previousElementSibling.remove();
                };
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => observer.observe(img));
}

// ================= TOAST NOTIFICATION =================
function showToast(message, type = 'success'){
    const toast = document.createElement('div');
    toast.className = `fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg animate-bounce-in text-white font-medium
        ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-black'}`;

    toast.innerHTML = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('animate-fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ================= CART - Load from localStorage =================
function loadCart(){
    const saved = localStorage.getItem('kingCart');
    if(saved){
        cart = JSON.parse(saved);
    } else {
        cart = [];
    }
    updateCartCount();
}

// ================= CART - Save to localStorage =================
function saveCart(){
    localStorage.setItem('kingCart', JSON.stringify(cart));
    updateCartCount();
}

// ================= CART - Update count =================
function updateCartCount(){
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cart-count").innerText = count;
}

// ================= ADD TO CART =================
function addToCart(id){
    const item = MENU.find(m => m.id === id);
    if(!item) return;

    const existing = cart.find(c => c.id === id);
    if(existing){
        existing.qty += 1;
    } else {
        cart.push({...item, qty: 1});
    }

    saveCart();
    showToast(`✅ ${item.name} ditambahkan ke keranjang!`, 'success');
}

// ================= UPDATE CART =================
function updateCart(){
    const itemsDiv = document.getElementById("cart-items");

    if(cart.length === 0){
        itemsDiv.innerHTML = `
            <div class="text-center py-8">
                <div class="text-5xl mb-3">🛒</div>
                <p class="text-gray-500">Keranjang masih kosong</p>
                <p class="text-sm text-gray-400">Yuk, pesan makanan favoritmu!</p>
            </div>
        `;
        document.getElementById("cart-total").innerText = "0";
        return;
    }

    let total = 0;
    itemsDiv.innerHTML = cart.map((item, index) => {
        const itemTotal = (item.finalPrice || item.price) * item.qty;
        total += itemTotal;
        return `
            <div class="flex items-center justify-between border-b py-3">
                <div class="flex-1">
                    <div class="font-medium text-sm">${item.img} ${item.name}</div>
                    <div class="text-xs text-gray-500">${item.qty}x @ Rp ${(item.finalPrice || item.price).toLocaleString()}</div>
                    <div class="text-orange-600 font-bold text-sm">Rp ${itemTotal.toLocaleString()}</div>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="updateItemQty(${index}, -1)" class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">−</button>
                    <span class="w-8 text-center font-bold">${item.qty}</span>
                    <button onclick="updateItemQty(${index}, 1)" class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">+</button>
                    <button onclick="removeFromCart(${index})" class="ml-2 text-red-500 hover:text-red-700">🗑️</button>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById("cart-total").innerText = total.toLocaleString();
}

// ================= UPDATE ITEM QUANTITY =================
function updateItemQty(index, delta){
    cart[index].qty += delta;
    if(cart[index].qty <= 0){
        cart.splice(index, 1);
    }
    saveCart();
    updateCart();
}

// ================= REMOVE FROM CART =================
function removeFromCart(index){
    const item = cart[index];
    cart.splice(index, 1);
    saveCart();
    updateCart();
    showToast(`🗑️ ${item.name} dihapus dari keranjang`, 'error');
}

// ================= TOGGLE CART =================
function toggleCart(){
    document.getElementById("cart-modal").classList.toggle("hidden");
    updateCart();
}

// ================= CHECKOUT WITH ADDRESS =================
function checkout(){
    if(cart.length === 0) return;

    // Show address input modal first
    showCheckoutModal();
}

// ================= SHOW CHECKOUT MODAL =================
function showCheckoutModal(){
    const modal = document.getElementById("checkout-modal");
    if(!modal){
        // Create checkout modal if not exists
        const cartModal = document.getElementById("cart-modal");
        const checkoutDiv = document.createElement("div");
        checkoutDiv.id = "checkout-modal";
        checkoutDiv.className = "hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
        checkoutDiv.innerHTML = `
            <div class="bg-white w-full max-w-lg p-6 rounded-2xl max-h-[90vh] overflow-y-auto">
                <h2 class="font-bold text-xl mb-4">🧾 Checkout</h2>
                
                <!-- Address Input -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">📍 Alamat Pengiriman</label>
                    <textarea id="buyer-address" class="w-full p-3 border rounded-xl" rows="3" placeholder="Masukkan alamat lengkap..."></textarea>
                </div>
                
                <!-- Map Integration -->
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2">🗺️ Lokasi Pengiriman (klik map untuk pin)</label>
                    <div id="checkout-map" class="rounded-xl border" style="height:220px;"></div>
                    <p id="map-coords" class="text-xs text-gray-500 mt-2">Belum ada pin lokasi</p>
                </div>
                
                <!-- Seller Contact / Video -->
                <div class="mb-4 bg-gray-50 p-3 rounded-xl">
                    <p class="text-sm"><span class="font-medium">Seller ID:</span> ${SELLER_PROFILE.id}</p>
                    <p class="text-sm"><span class="font-medium">Seller Contact:</span> <a class="text-blue-600 underline" href="https://${SELLER_PROFILE.contact}" target="_blank" rel="noopener">${SELLER_PROFILE.contact}</a></p>
                    <p class="text-sm"><span class="font-medium">Short Video:</span> <a class="text-blue-600 underline" href="${SELLER_PROFILE.shortVideo}" target="_blank" rel="noopener">Watch</a></p>
                </div>
                
                <!-- Order Summary -->
                <div class="mb-4">
                    <h3 class="font-bold mb-2">📋 Ringkasan Pesanan</h3>
                    <div id="checkout-items" class="text-sm text-gray-600 max-h-40 overflow-y-auto"></div>
                </div>
                
                <!-- Total -->
                <div class="border-t pt-4 mb-4">
                    <div class="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span class="text-orange-600">Rp <span id="checkout-total">0</span></span>
                    </div>
                </div>
                
                <button onclick="processCheckout()" class="w-full bg-black text-white py-3 rounded-xl font-bold">
                    💳 Bayar Sekarang
                </button>
                <button onclick="closeCheckoutModal()" class="mt-2 w-full bg-gray-200 py-2 rounded-xl">
                    Batal
                </button>
            </div>
        `;
        document.body.appendChild(checkoutDiv);
    }
    
    // Calculate totals
    let subtotal = cart.reduce((s, i) => s + (i.finalPrice || i.price) * i.qty, 0);
    let discount = 0;
    
    if(cart.length >= 5) discount += 0.1;
    if(subtotal > 500000) discount += 0.05;
    
    let finalTotal = subtotal - subtotal * discount;
    
    // Show items summary with format: "B: fruit tea 2x9k hot tea 3x6k"
    let itemsSummary = cart.map(i => `${i.img} ${i.name} ${i.qty}x${(i.finalPrice || i.price / 1000)}k`).join(', ');
    
    document.getElementById("checkout-items").innerText = itemsSummary;
    document.getElementById("checkout-total").innerText = finalTotal.toLocaleString();
    
    // Show checkout modal
    document.getElementById("cart-modal").classList.add("hidden");
    document.getElementById("checkout-modal").classList.remove("hidden");
    setTimeout(initCheckoutMap, 0);
}

// ================= CHECKOUT MAP =================
function initCheckoutMap(){
    if(typeof L === "undefined") return;

    const mapEl = document.getElementById("checkout-map");
    if(!mapEl) return;

    const defaultLocation = selectedLocation || {lat: -6.200000, lng: 106.816666};

    if(!checkoutMap){
        checkoutMap = L.map("checkout-map").setView([defaultLocation.lat, defaultLocation.lng], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(checkoutMap);

        checkoutMarker = L.marker([defaultLocation.lat, defaultLocation.lng], {draggable: true}).addTo(checkoutMap);
        selectedLocation = {lat: defaultLocation.lat, lng: defaultLocation.lng};

        checkoutMap.on("click", (e) => {
            selectedLocation = {lat: e.latlng.lat, lng: e.latlng.lng};
            checkoutMarker.setLatLng(e.latlng);
            updateMapCoordsLabel();
        });

        checkoutMarker.on("dragend", () => {
            const pos = checkoutMarker.getLatLng();
            selectedLocation = {lat: pos.lat, lng: pos.lng};
            updateMapCoordsLabel();
        });
    } else {
        checkoutMap.invalidateSize();
        checkoutMap.setView([defaultLocation.lat, defaultLocation.lng], 13);
        checkoutMarker.setLatLng([defaultLocation.lat, defaultLocation.lng]);
        selectedLocation = {lat: defaultLocation.lat, lng: defaultLocation.lng};
    }

    updateMapCoordsLabel();
}

function updateMapCoordsLabel(){
    const label = document.getElementById("map-coords");
    if(!label) return;

    if(!selectedLocation){
        label.innerText = "Belum ada pin lokasi";
        return;
    }

    label.innerText = `Pin: ${selectedLocation.lat.toFixed(5)}, ${selectedLocation.lng.toFixed(5)}`;
}

// ================= CLOSE CHECKOUT MODAL =================
function closeCheckoutModal(){
    document.getElementById("checkout-modal").classList.add("hidden");
    document.getElementById("cart-modal").classList.remove("hidden");
}

// ================= PROCESS CHECKOUT =================
function processCheckout(){
    const address = document.getElementById("buyer-address").value;
    if(!address || address.trim() === ""){
        alert("Mohon masukkan alamat pengiriman!");
        return;
    }
    
    let subtotal = cart.reduce((s, i) => s + (i.finalPrice || i.price) * i.qty, 0);
    let discount = 0;
    
    if(cart.length >= 5) discount += 0.1;
    if(subtotal > 500000) discount += 0.05;
    
    let finalTotal = subtotal - subtotal * discount;
    
    // Create order summary format: "B: something sweet 2 hot 3 → S: fruit tea 2x9k hot tea 3x6k total 36k"
    let buyerSummary = "B: " + cart.map(i => `${i.name} ${i.qty}`).join(' ');
    let sellerSummary = "S: " + cart.map(i => `${i.name} ${i.qty}x${Math.round((i.finalPrice || i.price)/1000)}k`).join(' ') + ` total ${Math.round(finalTotal/1000)}k`;
    
    const order = {
        id: Date.now(),
        items: [...cart],
        address: address,
        subtotal: subtotal,
        discount: discount,
        total: finalTotal,
        date: new Date().toISOString(),
        status: "pending",
        sellerId: SELLER_PROFILE.id,
        sellerContact: SELLER_PROFILE.contact,
        sellerVideo: SELLER_PROFILE.shortVideo,
        location: selectedLocation,
        summary: `${buyerSummary} → ${sellerSummary}`
    };
    
    orders.unshift(order);
    localStorage.setItem("orders", JSON.stringify(orders));
    
    cart = [];
    saveCart();
    updateCart();
    closeCheckoutModal();
    renderOrders();
    
    const discountMsg = discount > 0 ? `\n🎉 Diskon ${Math.round(discount * 100)}% applied!` : '';
    alert(`✅ Pesanan berhasil!${discountMsg}\n📍 Dikirim ke: ${address}\n💰 Total: Rp ${finalTotal.toLocaleString()}`);
}

// ================= VIEW SWITCH =================
function switchView(view){
    document.getElementById("buyer-view").classList.toggle("hidden", view !== "buyer");
    document.getElementById("seller-view").classList.toggle("hidden", view !== "seller");
    
    const buyerBtn = document.querySelector('button[onclick="switchView(\'buyer\')"]');
    const sellerBtn = document.querySelector('button[onclick="switchView(\'seller\')"]');
    
    if(view === 'buyer'){
        buyerBtn.classList.remove('bg-gray-200');
        buyerBtn.classList.add('bg-black', 'text-white');
        sellerBtn.classList.remove('bg-black', 'text-white');
        sellerBtn.classList.add('bg-gray-200');
    } else {
        sellerBtn.classList.remove('bg-gray-200');
        sellerBtn.classList.add('bg-black', 'text-white');
        buyerBtn.classList.remove('bg-black', 'text-white');
        buyerBtn.classList.add('bg-gray-200');
    }
    
    if(view === 'seller'){
        renderOrders();
        renderChat();
    }
}

// ================= RENDER ORDERS (ENHANCED) =================
function renderOrders(){
    const list = document.getElementById("orders-list");
    
    if(orders.length === 0){
        list.innerHTML = `
            <div class="text-center py-12">
                <div class="text-6xl mb-4">📭</div>
                <h3 class="text-xl font-bold text-gray-700 mb-2">Belum Ada Pesanan</h3>
                <p class="text-gray-500">Pesanan akan muncul di sini</p>
            </div>
        `;
        return;
    }
    
    list.innerHTML = orders.map(o => `
        <div class="bg-white p-4 rounded-xl shadow mb-3">
            <div class="flex justify-between items-start mb-2">
                <div class="text-sm font-bold">
                    Order #${o.id.toString().slice(-4)}
                </div>
                <div class="text-xs text-gray-400">
                    ${new Date(o.date).toLocaleDateString('id-ID')}
                </div>
            </div>
            
            <!-- Order Summary Format: B: something 2 hot 3 → S: fruit tea 2x9k hot tea 3x6k total 36k -->
            <div class="text-xs bg-gray-50 p-2 rounded mb-2 font-mono">
                ${o.summary || o.items.map(i => `${i.qty}x ${i.name}`).join(', ')}
            </div>
            
            <!-- Address -->
            <div class="text-xs text-gray-600 mb-2">
                📍 ${o.address || 'Tidak ada alamat'} ${o.location ? `(${o.location.lat.toFixed(5)}, ${o.location.lng.toFixed(5)})` : ''}
            </div>

            <div class="text-xs text-gray-600 mb-2">
                🏪 ${o.sellerId || SELLER_PROFILE.id} • ☎️ ${o.sellerContact || SELLER_PROFILE.contact} • 🎬 <a class="text-blue-600 underline" href="${o.sellerVideo || SELLER_PROFILE.shortVideo}" target="_blank" rel="noopener">short video</a>
            </div>
            
            <!-- Items with quantity and price -->
            <div class="text-xs text-gray-600 mb-2">
                ${o.items.map(i => `${i.img} ${i.name} ${i.qty}x = Rp ${((i.finalPrice || i.price) * i.qty).toLocaleString()}`).join(', ')}
            </div>
            
            ${o.discount > 0 ? `<div class="text-xs text-green-600">🎉 Diskon ${Math.round(o.discount * 100)}%</div>` : ''}
            
            <div class="flex justify-between items-center mt-2">
                <div class="font-bold text-orange-600">
                    Rp ${o.total.toLocaleString()}
                </div>
                <div class="text-xs px-2 py-1 rounded ${o.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : o.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}">
                    ${o.status === 'pending' ? '⏳ Menunggu' : o.status === 'completed' ? '✅ Selesai' : '❌ Dibatalkan'}
                </div>
            </div>
            
            <!-- Action buttons for seller -->
            <div class="flex gap-2 mt-3">
                <button onclick="updateOrderStatus(${o.id}, 'completed')" class="flex-1 bg-green-500 text-white py-1 rounded text-xs">
                    ✅ Terima
                </button>
                <button onclick="updateOrderStatus(${o.id}, 'cancelled')" class="flex-1 bg-red-500 text-white py-1 rounded text-xs">
                    ❌ Tolak
                </button>
                <button onclick="openChatForOrder(${o.id})" class="flex-1 bg-blue-500 text-white py-1 rounded text-xs">
                    💬 Chat
                </button>
            </div>
        </div>
    `).join('');
}

// ================= UPDATE ORDER STATUS =================
function updateOrderStatus(orderId, status){
    const order = orders.find(o => o.id === orderId);
    if(order){
        order.status = status;
        localStorage.setItem("orders", JSON.stringify(orders));
        renderOrders();
        showToast(`Pesanan #${orderId.toString().slice(-4)} ${status === 'completed' ? 'diterima' : 'ditolak'}!`, status === 'completed' ? 'success' : 'error');
    }
}

// ================= INSTANT MESSAGING =================
function openChatForOrder(orderId){
    const order = orders.find(o => o.id === orderId);
    if(order){
        // Find or create chat for this order
        let chat = chats.find(c => c.orderId === orderId);
        if(!chat){
            chat = {
                orderId: orderId,
                messages: [],
                createdAt: new Date().toISOString()
            };
            chats.push(chat);
            localStorage.setItem("chats", JSON.stringify(chats));
        }
        showChatModal(orderId, chat);
    }
}

// ================= SHOW CHAT MODAL =================
function showChatModal(orderId, chat){
    const existingModal = document.getElementById("chat-modal");
    if(existingModal) existingModal.remove();
    
    const modal = document.createElement("div");
    modal.id = "chat-modal";
    modal.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
    modal.innerHTML = `
        <div class="bg-white w-full max-w-md p-4 rounded-2xl">
            <div class="flex justify-between items-center mb-4">
                <h2 class="font-bold">💬 Chat - Order #${orderId.toString().slice(-4)}</h2>
                <button onclick="closeChatModal()" class="text-gray-500">✕</button>
            </div>
            
            <!-- Messages -->
            <div id="chat-messages" class="h-64 overflow-y-auto bg-gray-50 p-3 rounded-xl mb-3">
                ${chat.messages.length === 0 ? '<p class="text-center text-gray-400 text-sm">Belum ada pesan</p>' : 
                chat.messages.map(m => `
                    <div class="mb-2 ${m.sender === 'buyer' ? 'text-right' : 'text-left'}">
                        <span class="inline-block px-3 py-2 rounded-lg text-sm ${m.sender === 'buyer' ? 'bg-black text-white' : 'bg-gray-200'}">
                            ${m.text}
                        </span>
                        <div class="text-xs text-gray-400">${new Date(m.time).toLocaleTimeString()}</div>
                    </div>
                `).join('')}
            </div>
            
            <!-- Input -->
            <div class="flex gap-2">
                <input type="text" id="chat-input" class="flex-1 p-2 border rounded-lg" placeholder="Ketik pesan...">
                <button onclick="sendMessage(${orderId})" class="bg-black text-white px-4 py-2 rounded-lg">Kirim</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Scroll to bottom
    const messagesDiv = document.getElementById("chat-messages");
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// ================= SEND MESSAGE =================
function sendMessage(orderId){
    const input = document.getElementById("chat-input");
    const text = input.value.trim();
    if(!text) return;
    
    const chat = chats.find(c => c.orderId === orderId);
    if(chat){
        chat.messages.push({
            text: text,
            sender: "seller", // Seller view
            time: new Date().toISOString()
        });
        localStorage.setItem("chats", JSON.stringify(chats));
        
        // Refresh chat
        showChatModal(orderId, chat);
    }
}

// ================= CLOSE CHAT MODAL =================
function closeChatModal(){
    document.getElementById("chat-modal").remove();
}

// ================= RENDER CHAT (Simple) =================
function renderChat(){
    // Chat is now integrated with orders
    // Each order has a chat button
}

// ================= SAVE STOCK =================
function saveStock(){
    const data = {};
    MENU.forEach(i => data[i.id] = i.stock);
    localStorage.setItem("stock", JSON.stringify(data));
}

// ================= AUTO RESTOCK =================
function autoRestock(){
    MENU.forEach(item => {
        if(item.stock < 5){
            item.stock += Math.floor(Math.random() * 5) + 1;
        }
    });
    saveStock();
}
setInterval(autoRestock, 60000);

// ================= INIT =================
function init(){
    loadCart();
    renderCategories();
    filterMenu();
}

// Run init when DOM is ready
if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
