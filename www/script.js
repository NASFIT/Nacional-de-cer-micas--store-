document.addEventListener('DOMContentLoaded', function () {
    const productos = [

        // ==========================
        // 👑 CORONA
        // ==========================
        { codigo: "CR-001", nombre: "Porto Multicolor",              categoria: "Corona",      imagen: "img/cpmulti.png",        imagenVisu: "ambie/multi-visu.mp4", color: "Multicolor",        medidas: "51 x 51 cm",  precioM2: 39000,  m2PorCaja: 1    },
        { codigo: "CR-002", nombre: "Pratos",                        categoria: "Corona",      imagen: "img/Pratos.jpg",         imagenVisu: "ambie/pratos-a.png",                   color: "Gris",              medidas: "60 x 60 cm",  precioM2: 44000,  m2PorCaja: 1    },
        { codigo: "CR-003", nombre: "Alberta",                       categoria: "Corona",      imagen: "img/alberta.jpg",        imagenVisu: "ambie/alberta-a.png",                   color: "Café",              medidas: "60 x 60 cm",  precioM2: 39000,  m2PorCaja: 1    },
        { codigo: "CR-004", nombre: "Alcaparro",                     categoria: "Corona",      imagen: "img/alcaparro.jpg",      imagenVisu: "ambie/alcaparro-a.png",                   color: "Café",              medidas: "60 x 60 cm",  precioM2: 39200,  m2PorCaja: 1    },
        { codigo: "CR-005", nombre: "Eucalipto",                     categoria: "Corona",      imagen: "img/eucalipto.jpg",      imagenVisu: "ambie/eucalipto-a.png",                   color: "Gris",              medidas: "55 x 55 cm",  precioM2: 39000,  m2PorCaja: 1    },
        { codigo: "CR-006", nombre: "Capri Blanco",                  categoria: "Corona",      imagen: "img/capri.jpg",          imagenVisu: "ambie/teruel-a.png",                   color: "Blanco",            medidas: "55 x 55 cm",  precioM2: 37000,  m2PorCaja: 1    },
        { codigo: "CR-007", nombre: "Parral Blanco",                 categoria: "Corona",      imagen: "img/parral.jpg",         imagenVisu: "ambie/teruel-a.png",                   color: "Blanco",            medidas: "60 x 60 cm",  precioM2: 39000,  m2PorCaja: 1    },
        { codigo: "CR-008", nombre: "Laica",                         categoria: "Corona",      imagen: "img/laica.jpg",          imagenVisu: "ambie/laica-a.png",                   color: "Beige",             medidas: "60 x 60 cm",  precioM2: 39900,  m2PorCaja: 1    },
        { codigo: "CR-009", nombre: "Viana",                         categoria: "Corona",      imagen: "img/liana.jpg",          imagenVisu: "ambie/teruel-a.png",                   color: "Café",              medidas: "55 x 55 cm",  precioM2: 38000,  m2PorCaja: 1    },
        { codigo: "CR-010", nombre: "Menorca",                       categoria: "Corona",      imagen: "img/menorca.jpg",        imagenVisu: "ambie/teruel-a.png",                   color: "Gris",              medidas: "60 x 60 cm",  precioM2: 39200,  m2PorCaja: 1    },
        { codigo: "CR-011", nombre: "Samui Tortora",                 categoria: "Corona",      imagen: "img/samui.jpg",          imagenVisu: "ambie/teruel-a.png",                   color: "Tortora",           medidas: "51 x 51 cm",  precioM2: 37000,  m2PorCaja: 1    },
        { codigo: "CR-012", nombre: "Paramo",                        categoria: "Corona",      imagen: "img/paramo.jpg",         imagenVisu: "ambie/teruel-a.png",                   color: "Gris",              medidas: "55 x 55 cm",  precioM2: 37000,  m2PorCaja: 1    },
        { codigo: "CR-013", nombre: "Bancuver",                      categoria: "Corona",      imagen: "img/bancuber.jpg",       imagenVisu: "ambie/teruel-a.png",                   color: "Plata",             medidas: "45 x 45 cm",  precioM2: 34000,  m2PorCaja: 1    },
        { codigo: "CR-014", nombre: "Zana",                          categoria: "Corona",      imagen: "img/zana.jpg",           imagenVisu: "ambie/teruel-a.png",                   color: "Beige",             medidas: "51 x 51 cm",  precioM2: 34900,  m2PorCaja: 1    },
        { codigo: "CR-015", nombre: "Cordoba",                       categoria: "Corona",      imagen: "img/cordoba.jpg",        imagenVisu: "ambie/cordoba-a.png",                   color: "Rojo",              medidas: "51 x 51 cm",  precioM2: 35000,  m2PorCaja: 1    },
        { codigo: "CR-016", nombre: "Cantera",                       categoria: "Corona",      imagen: "img/cantera.jpg",        imagenVisu: "ambie/teruel-a.png",                   color: "Gris",              medidas: "51 x 51 cm",  precioM2: 42000,  m2PorCaja: 1    },
        { codigo: "CR-017", nombre: "Buenos Aires",                  categoria: "Corona",      imagen: "img/bnosai.jpg",         imagenVisu: "ambie/teruel-a.png",                   color: "Beige",             medidas: "51 x 51 cm",  precioM2: 34900,  m2PorCaja: 1    },
        { codigo: "CR-018", nombre: "Teruel",                        categoria: "Corona",      imagen: "img/teruel.png",         imagenVisu: "ambie/teruel-a.png",                   color: "Multicolor",        medidas: "51 x 51 cm",  precioM2: 39000,  m2PorCaja: 1    },
        { codigo: "CR-019", nombre: "Bunes",                         categoria: "Corona",      imagen: "img/bunes.jpg",          imagenVisu: "ambie/teruel-a.png",                   color: "Gris",              medidas: "60 x 60 cm",  precioM2: 42000,  m2PorCaja: 1    },
        { codigo: "CR-020", nombre: "Adriano Taupe",                 categoria: "Corona",      imagen: "img/adriano.jpg",        imagenVisu: "ambie/adriano-a.mp4",                   color: "Taupe",             medidas: "60 x 60 cm",  precioM2: 43000,  m2PorCaja: 1    },
        { codigo: "CR-021", nombre: "Callena",                       categoria: "Corona",      imagen: "img/callena.jpg",        imagenVisu: "ambie/teruel-a.png",                   color: "Multicolor",        medidas: "60 x 60 cm",  precioM2: 42000,  m2PorCaja: 1    },
        { codigo: "CR-022", nombre: "Germania",                      categoria: "Corona",      imagen: "img/germania.jpg",       imagenVisu: "ambie/germania-a.png",                   color: "Gris",              medidas: "30 x 60 cm",  precioM2: 38000,  m2PorCaja: 1    },
        { codigo: "CR-023", nombre: "Monte Cristal",                 categoria: "Corona",      imagen: "img/mcristal.jpg",       imagenVisu: "ambie/mcristial-a.png",                   color: "Gris",              medidas: "30 x 45 cm",  precioM2: 34000,  m2PorCaja: 1    },
        { codigo: "CR-024", nombre: "Calaiz",                        categoria: "Corona",      imagen: "img/calaiz.jpg",         imagenVisu: "",                   color: "Beige",             medidas: "30 x 60 cm",  precioM2: 36000,  m2PorCaja: 1    },
        { codigo: "CR-025", nombre: "Mega Pega",                     categoria: "Corona",      imagen: "img/MP.png",                                               color: "Gris",              medidas: "Saco 25 kg",  precioM2: 28000,  m2PorCaja: 1    },
        { codigo: "CR-026", nombre: "Boquilla 5KG",                  categoria: "Corona",      imagen: "img/boqui5.jpg",                                           color: "Multicolor",        medidas: "Caja 5 kg",   precioM2: 35000,  m2PorCaja: 1    },
        { codigo: "CR-027", nombre: "Boquilla 2KG",                  categoria: "Corona",      imagen: "img/boqui2.jpg",                                           color: "Beige",             medidas: "Caja 2 kg",   precioM2: 17000,  m2PorCaja: 1    },
        { codigo: "CR-028", nombre: "Combo Sanitario Laguna",        categoria: "Corona",      imagen: "img/sanitario.jpg",      imagenVisu: "",                   color: "Blanco",            medidas: "Estándar",    precioM2: 410000, m2PorCaja: 1    },
        { codigo: "CR-029", nombre: "Combo Sanitario Infantil Kiri", categoria: "Corona",      imagen: "img/kiri.jpg",            imagenVisu: "",                   color: "Blanco",            medidas: "Estándar",    precioM2: 600000, m2PorCaja: 1    },

        // ==========================
        // 🇮🇹 ITALIA
        // ==========================
        { codigo: "IT-001", nombre: "Alba",                          categoria: "Italia",      imagen: "img/alba.jpg",   imagenVisu: "",                   color:"Beige",              medidas: "30 x 60 cm",   precioM2: 39900,  m2PorCaja: 1  },
        { codigo: "IT-002", nombre: "Oslo",                          categoria: "Italia",      imagen: "img/oslo.jpg",     imagenVisu: "",                   color: "Gris",              medidas: "30 x 60 cm",   precioM2: 390000, m2PorCaja: 1  },
        { codigo: "IT-003", nombre: "Mazerata Avellana",             categoria: "Italia",      imagen: "img/avellana.jpg",      imagenVisu: "",                   color: "Avellana",          medidas: "30 x 60 cm",   precioM2: 430000, m2PorCaja: 1    },
        { codigo: "IT-004", nombre: "Mazerata Marfil",               categoria: "Italia",      imagen: "img/marfil.jpg",                       imagenVisu: "",                   color: "Marfil",            medidas: "30 x 60 cm",   precioM2: 43000, m2PorCaja: 1},
        { codigo: "IT-005", nombre: "Mazerata Wuengue",              categoria: "Italia",      imagen: "img/wuengue.jpg",                       imagenVisu: "",                   color: "Wengue",            medidas: "30 x 60 cm",   precioM2: 43000, m2PorCaja: 1 },
        { codigo: "IT-006", nombre: "Alissos",                       categoria: "Italia",      imagen: "img/alissos.jpg",                       imagenVisu: "",                   color: "Marfil",            medidas: "30 x 60 cm",   precioM2: 39000, m2PorCaja: 1 },
        { codigo: "IT-007", nombre: "Itria Gris",                    categoria: "Italia",      imagen: "img/itriaG.jpg",                imagenVisu: "",                   color: "Gris",             medidas: "60 x 60 cm",   precioM2: 42000,  m2PorCaja: 1  },
        { codigo: "IT-008", nombre: "Itria Beige",                   categoria: "Italia",      imagen: "img/itriaB.jpg",                       imagenVisu: "",                   color: "Beige",              medidas: "60 x 60 cm",   precioM2: 42000,  m2PorCaja: 1 },
        { codigo: "IT-009", nombre: "Alami Terracota",               categoria: "Italia",      imagen: "img/alami.jpg",                       imagenVisu: "",                   color: "Terracota",         medidas: "60 x 60 cm",   precioM2: 420000, m2PorCaja: 1 },
        { codigo: "IT-010", nombre: "Picazzo",                       categoria: "Italia",      imagen: "img/picazzo.jpg",                       imagenVisu: "ambie/picazzo-a.png",                   color: "Marfil",            medidas: "58 x 118 cm",  precioM2: 62000, m2PorCaja: 1 },
        { codigo: "IT-011", nombre: "Berilo",                        categoria: "Italia",      imagen: "img/berilo.jpg",                       imagenVisu: "",                   color: "Gris",              medidas: "58 x 118 cm",  precioM2: 62000, m2PorCaja: 1 },
        { codigo: "IT-012", nombre: "Calzita",                       categoria: "Italia",      imagen: "img/calzita.jpg",                       imagenVisu: "",                   color: "Beige",             medidas: "58 x 118 cm",  precioM2: 62000,  m2PorCaja: 1 },
        { codigo: "IT-013", nombre: "Stazera",                        categoria: "Italia",      imagen: "img/stera.jpg",                       imagenVisu: "",                   color: "Negro",             medidas: "31 x 101 cm",  precioM2: 63000, m2PorCaja: 1 },
        { codigo: "IT-014", nombre: "Aria",                         categoria: "Italia",      imagen: "img/aria.jpg",                       imagenVisu: "",                   color: "Verde",             medidas: "31 x 101 cm",  precioM2: 63000,  m2PorCaja: 1 },
        { codigo: "IT-015", nombre: "Camel",                         categoria: "Italia",      imagen: "img/camel.jpg",                       imagenVisu: "",                   color: "Madera",            medidas: "31 x 101 cm",  precioM2: 63000, m2PorCaja: 1 },
        

        // ==========================
        // ⚜️ SAN LORENZO
        // ==========================
        { codigo: "SL-001", nombre: "Sin producto en el momento",          categoria: "San Lorenzo", imagen: "",   imagenVisu: "",       color: "",       medidas: "0 x 0 cm",  precioM2: 1, m2PorCaja: 1 },
        

        // ==========================
        // 🔷 ALFA
        // ==========================
        { codigo: "AF-001", nombre: "Hawai",                  categoria: "Alfa",        imagen: "img/hawai.jpg",       imagenVisu: "",               color: "Beige",           medidas: "30 x 45 cm",  precioM2: 29000,  m2PorCaja: 1  },
        { codigo: "AF-002", nombre: "Opalo",                  categoria: "Alfa",        imagen: "img/opalo.jpg",      imagenVisu: "",               color: "Gris",            medidas: "30 x 45 cm",  precioM2: 29000,  m2PorCaja: 1  },
        { codigo: "AF-003", nombre: "Blanco Satinado",        categoria: "Alfa",        imagen: "img/satinado.jpg",       imagenVisu: "",               color: "Blanco",          medidas: "30 x 30 cm",  precioM2: 29900,  m2PorCaja: 1  },
        { codigo: "AF-004", nombre: "Artica Blanco",          categoria: "Alfa",        imagen: "img/artico.jpg",      imagenVisu: "",               color: "Gris",            medidas: "30 x 60 cm",  precioM2: 29900,  m2PorCaja: 1  },
    ];

    // ============================================================
    // Referencias DOM
    // ============================================================
    let carrito = [];

    const productsContainer   = document.getElementById("products-container");
    const cartCount           = document.getElementById("cart-count");
    const cartBtn             = document.getElementById("cart-btn");
    const cartPanel           = document.getElementById("cart-panel");
    const closeCart           = document.getElementById("close-cart");
    const cartItemsContainer  = document.getElementById("cart-items");
    const cartTotal           = document.getElementById("cart-total");
    const modal               = document.getElementById("product-modal");
    const modalClose          = document.getElementById("modal-close");
    const modalOverlay        = document.getElementById("modal-overlay");

    // ============================================================
    // Render tarjetas de producto
    // ============================================================
    function renderProductos(lista = productos) {
        productsContainer.innerHTML = "";

        if (lista.length === 0) {
            productsContainer.innerHTML = `<p style="text-align:center;color:#888;grid-column:1/-1;padding:3rem 0;">No se encontraron productos.</p>`;
            return;
        }

        lista.forEach(p => {
            const imagenHTML = p.imagen && !p.imagen.endsWith('/')
                ? `<img src="${p.imagen}" alt="${p.nombre}">`
                : `<span class="product-placeholder">🏺</span>`;


            productsContainer.innerHTML += `
                <div class="product-card" data-id="${p.codigo}">
                    <div class="product-image product-image--clickable" data-id="${p.codigo}">
                        ${imagenHTML}
                        <div class="product-image-overlay">Ver detalle</div>
                    </div>
                    <div class="product-info">
                        <span class="marca-badge">${p.categoria}</span>
                        <h3>${p.nombre}</h3>
                        <p class="product-medidas">📐 ${p.medidas} · ${p.color}</p>
                        <div class="product-precios">
                            <span class="precio-m2">$${p.precioM2.toLocaleString('es-CO')} / M²</span>
                        </div>
                        <div class="product-btns">
                            <button class="btn-detalle" data-id="${p.codigo}">Ver detalle</button>
                            <button class="add-to-cart" data-id="${p.codigo}">+ Carrito</button>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    renderProductos();

// ============================================================
    // Modal de detalle del producto (con soporte para video e imagen)
    // ============================================================
    function abrirModal(id) {
        const p = productos.find(x => x.codigo === id);
        if (!p) return;

        const tieneVisu = !!p.imagenVisu;
        const esVideo = tieneVisu && p.imagenVisu.toLowerCase().endsWith('.mp4');

        const imgPisoHTML = p.imagen && !p.imagen.endsWith('/')
            ? `<img src="${p.imagen}" alt="${p.nombre}" class="modal-img-slide modal-img-activa">`
            : `<div class="modal-img-slide modal-img-activa" style="display:flex;align-items:center;justify-content:center;font-size:5rem;background:#f5f2f0;border-radius:6px;">🏺</div>`;

        // Si es .mp4 insertamos <video>, de lo contrario <img>
        let mediaVisuHTML = '';
        if (tieneVisu) {
            mediaVisuHTML = esVideo
                ? `<video id="modal-video-visu" src="${p.imagenVisu}" class="modal-img-slide" controls loop playsinline style="max-height:100%;object-fit:contain;"></video>`
                : `<img src="${p.imagenVisu}" alt="Ambientación ${p.nombre}" class="modal-img-slide">`;
        }

        const toggleModalHTML = tieneVisu ? `
            <div class="modal-img-toggle">
                <button class="modal-toggle-btn modal-toggle-activo" data-vista="piso">🏺 Piso</button>
                <button class="modal-toggle-btn" data-vista="visu">${esVideo ? '🎥 Video' : '🪟 Ambientación'}</button>
            </div>` : '';

        const modalImgEl = document.getElementById("modal-img");
        modalImgEl.innerHTML = `
            <div class="modal-img-inner">
                ${imgPisoHTML}
                ${mediaVisuHTML}
            </div>
            ${toggleModalHTML}
        `;

        if (tieneVisu) {
            modalImgEl.querySelectorAll(".modal-toggle-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    const vista = btn.dataset.vista;
                    const slides = modalImgEl.querySelectorAll(".modal-img-slide");
                    const videoEl = modalImgEl.querySelector("#modal-video-visu");

                    slides[0].classList.toggle("modal-img-activa", vista === "piso");
                    slides[1].classList.toggle("modal-img-activa", vista === "visu");

                    // Si pasa a ambientación reproduce el video; si vuelve a piso lo pausa
                    if (videoEl) {
                        if (vista === "visu") {
                            videoEl.play().catch(() => {});
                        } else {
                            videoEl.pause();
                        }
                    }

                    modalImgEl.querySelectorAll(".modal-toggle-btn").forEach(b => b.classList.remove("modal-toggle-activo"));
                    btn.classList.add("modal-toggle-activo");
                });
            });
        }

        document.getElementById("modal-nombre").textContent    = p.nombre;
        document.getElementById("modal-codigo").textContent    = p.codigo;
        document.getElementById("modal-marca").textContent     = p.categoria;
        document.getElementById("modal-medidas").textContent   = p.medidas;
        document.getElementById("modal-color").textContent     = p.color;
        document.getElementById("modal-precio-m2").textContent = "$" + p.precioM2.toLocaleString('es-CO');

        modal.dataset.id = id;

        // Reset calculadora
        document.getElementById("calc-m2").value = 1;
        actualizarCalculadora(p);

        modal.classList.add("active");
        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function cerrarModal() {
        const videoEl = document.getElementById("modal-video-visu");
        if (videoEl) {
            videoEl.pause();
            videoEl.currentTime = 0;
        }

        modal.classList.remove("active");
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    // ============================================================
    // Calculadora M² ↔ Cajas
    // ============================================================
    function actualizarCalculadora(p) {
        const m2Input     = document.getElementById("calc-m2");
        const totalM2El   = document.getElementById("calc-total-m2");
        const totalPrecEl = document.getElementById("calc-total-precio");

        const m2 = parseFloat(m2Input.value) || 0;

        totalM2El.textContent   = m2.toFixed(2) + " M²";
        totalPrecEl.textContent = "$" + (m2 * p.precioM2).toLocaleString('es-CO');
    }

    // Eventos calculadora (delegados al modal)
    modal.addEventListener("input", (e) => {
        const id = modal.dataset.id;
        const p  = productos.find(x => x.codigo === id);
        if (!p) return;
        if (e.target.id === "calc-m2") actualizarCalculadora(p);
    });

    document.getElementById("btn-m2-menos").addEventListener("click", () => {
        const inp = document.getElementById("calc-m2");
        const val = parseFloat(inp.value) || 1;
        if (val > 1) { inp.value = val - 1; inp.dispatchEvent(new Event("input")); }
    });
    document.getElementById("btn-m2-mas").addEventListener("click", () => {
        const inp = document.getElementById("calc-m2");
        inp.value = (parseFloat(inp.value) || 0) + 1;
        inp.dispatchEvent(new Event("input"));
    });

    // Agregar al carrito desde el modal
    document.getElementById("modal-add-cart").addEventListener("click", () => {
        const id    = modal.dataset.id;
        const p     = productos.find(x => x.codigo === id);
        const m2    = parseFloat(document.getElementById("calc-m2").value) || 1;
        const precio = m2 * p.precioM2;

        const existente = carrito.find(x => x.codigo === id);
        if (existente) {
            existente.m2     += m2;
            existente.precio += precio;
        } else {
            carrito.push({ ...p, m2, precio });
        }

        actualizarCarrito();
        cerrarModal();
        cartPanel.classList.add("active");
    });

    // Cotizar directamente por WhatsApp desde el modal de producto
    const modalDirectQuoteBtn = document.getElementById("modal-direct-quote");
    if (modalDirectQuoteBtn) {
        modalDirectQuoteBtn.addEventListener("click", () => {
            const id = modal.dataset.id;
            const p = productos.find(x => x.codigo === id);
            if (!p) return;
            const m2 = parseFloat(document.getElementById("calc-m2").value) || 1;
            const precio = m2 * p.precioM2;
            cerrarModal();
            abrirCotizacion({ ...p, m2, precio });
        });
    }

    // Cerrar modal
    modalClose.addEventListener("click", cerrarModal);
    modalOverlay.addEventListener("click", cerrarModal);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarModal(); });

    // ============================================================
    // Clicks en tarjetas
    // ============================================================
    productsContainer.addEventListener("click", function (e) {

        // Clic en imagen o botón "Ver detalle" → abre modal
        if (e.target.closest(".product-image--clickable") || e.target.classList.contains("btn-detalle")) {
            const id = e.target.closest("[data-id]")?.dataset.id;
            if (id) abrirModal(id);
            return;
        }

        // Clic en "+ Carrito" → agrega 1 M² directo sin modal
        if (e.target.classList.contains("add-to-cart")) {
            const id = e.target.dataset.id;
            const p  = productos.find(x => x.codigo === id);
            const existente = carrito.find(x => x.codigo === id);

            if (existente) {
                existente.m2     += 1;
                existente.precio += p.precioM2;
            } else {
                carrito.push({ ...p, m2: 1, precio: p.precioM2 });
            }
            actualizarCarrito();

            e.target.textContent = "¡Agregado! ✓";
            e.target.style.background = "var(--rojo-oscuro)";
            e.target.style.color = "white";
            setTimeout(() => {
                e.target.textContent = "+ Carrito";
                e.target.style.background = "";
                e.target.style.color = "";
            }, 1500);
        }
    });

    // ============================================================
    // Actualizar carrito
    // ============================================================
    function actualizarCarrito() {
        cartItemsContainer.innerHTML = "";
        let total   = 0;
        let totalM2 = 0;

        if (carrito.length === 0) {
            cartItemsContainer.innerHTML = `<p style="text-align:center;color:#888;margin-top:2rem;font-size:0.9rem;">Tu cotización está vacía.</p>`;
        }

        carrito.forEach(item => {
            total   += item.precio;
            totalM2 += item.m2;

            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <strong>${item.nombre}</strong>
                    <div class="cart-item-controls">
                        <button class="cart-ctrl-btn" data-action="quitar" data-id="${item.codigo}" title="Quitar 1 M²">➖</button>
                        <span class="cart-ctrl-qty">${item.m2.toFixed(2)} M²</span>
                        <button class="cart-ctrl-btn" data-action="agregar" data-id="${item.codigo}" title="Agregar 1 M²">➕</button>
                        <button class="cart-ctrl-btn cart-ctrl-delete" data-action="eliminar" data-id="${item.codigo}" title="Eliminar producto">🗑️</button>
                    </div>
                    <div style="color:#fff;font-size:0.95rem;font-weight:700;margin-top:0.4rem;">
                        $${item.precio.toLocaleString('es-CO')}
                    </div>
                </div>
            `;
        });

        cartTotal.textContent = total.toLocaleString('es-CO');
        cartCount.textContent = carrito.length;
    }

    // ============================================================
    // Filtrar por marca
    // ============================================================
    window.filtrarCategoria = function (categoria) {
        const lista = (!categoria || categoria === "Todos")
            ? productos
            : productos.filter(p => p.categoria === categoria);
        renderProductos(lista);
        document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
    };

    // ============================================================
    // ✅ FIX: Event delegation para botones internos del carrito
    // ============================================================
    window.agregarCaja = function (id) {
        const item = carrito.find(x => x.codigo === id);
        if (!item) return;
        item.m2     += 1;
        item.precio += item.precioM2;
        actualizarCarrito();
    };

    window.quitarCaja = function (id) {
        const item = carrito.find(x => x.codigo === id);
        if (!item) return;
        if (item.m2 <= 1) {
            if (confirm(`¿Eliminar "${item.nombre}" de la cotización?`)) {
                carrito = carrito.filter(x => x.codigo !== id);
            }
        } else {
            item.m2     -= 1;
            item.precio -= item.precioM2;
        }
        actualizarCarrito();
    };

    window.eliminar = function (id) {
        carrito = carrito.filter(p => p.codigo !== id);
        actualizarCarrito();
    };

    // Delegación de eventos sobre el contenedor del carrito
    cartItemsContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".cart-ctrl-btn");
        if (!btn) return;

        e.stopPropagation(); // ✅ Evita cerrar el panel

        const action = btn.dataset.action;
        const id     = btn.dataset.id;

        if (action === "agregar")  agregarCaja(id);
        if (action === "quitar")   quitarCaja(id);
        if (action === "eliminar") eliminar(id);
    });

    // ============================================================
    // Panel carrito abrir / cerrar
    // ============================================================

    // ============================================================
    // WHATSAPP - Configuración
    // ============================================================
    const WHATSAPP_PHONE = "573133564359";

    // ============================================================
    // Modal de Cotización
    // ============================================================
    const cotizacionOverlay = document.getElementById("cotizacion-overlay");
    const cotizacionModal   = document.getElementById("cotizacion-modal");
    const cotizacionClose   = document.getElementById("cotizacion-close");
    const cotizacionForm    = document.getElementById("cotizacion-form");
    const cotizacionEnviar  = document.getElementById("cotizacion-enviar");
    const cotizacionBtnText = document.getElementById("cotizacion-btn-text");
    const cotizacionError   = document.getElementById("cotizacion-error");

    let itemCotizacionDirecta = null;

    function abrirCotizacion(productoDirecto = null) {
        itemCotizacionDirecta = productoDirecto;
        const items = itemCotizacionDirecta ? [itemCotizacionDirecta] : carrito;

        if (items.length === 0) {
            alert("Tu cotización está vacía. Agrega productos o selecciona uno del catálogo primero.");
            return;
        }

        // Construir resumen visual
        const resumenEl = document.getElementById("cotizacion-resumen");
        let total = 0;
        let resumenHTML = "";
        items.forEach(item => {
            const m2Num = typeof item.m2 === "number" ? item.m2 : parseFloat(item.m2) || 1;
            const precioItem = typeof item.precio === "number" ? item.precio : (m2Num * (item.precioM2 || 0));
            total += precioItem;

            const cantStr = item.m2 ? `${m2Num.toFixed(2)} M²` : "1 unidad";
            const refStr = item.codigo ? ` <small style="color:#777;">(Ref: ${item.codigo})</small>` : "";
            resumenHTML += `
                <div class="cotizacion-resumen-item">
                    <span>${item.nombre}${refStr}</span>
                    <span>${cantStr} — $${precioItem.toLocaleString("es-CO")}</span>
                </div>`;
        });
        resumenHTML += `
            <div class="cotizacion-resumen-total">
                <span>Total estimado</span>
                <span>$${total.toLocaleString("es-CO")}</span>
            </div>`;
        resumenEl.innerHTML = resumenHTML;

        // Limpiar campos
        if (cotizacionForm) {
            cotizacionForm.reset();
        } else {
            document.getElementById("cot-nombre").value  = "";
            document.getElementById("cot-celular").value = "";
            document.getElementById("cot-correo").value  = "";
            document.getElementById("cot-mensaje").value = "";
        }
        cotizacionError.style.display = "none";
        if (cotizacionBtnText) cotizacionBtnText.textContent = "💬 Enviar a WhatsApp";
        if (cotizacionEnviar) cotizacionEnviar.disabled = false;

        // Restaurar formulario si estaba en modo éxito
        const exitoEl = cotizacionModal.querySelector(".cotizacion-exito");
        if (exitoEl) exitoEl.remove();
        if (cotizacionForm) cotizacionForm.style.display = "";
        cotizacionModal.querySelector(".cotizacion-resumen").style.display = "";
        cotizacionModal.querySelector(".cotizacion-header").style.display = "";

        // Cerrar panel carrito y abrir modal
        cartPanel.classList.remove("active");
        cotizacionOverlay.classList.add("active");
        cotizacionModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function cerrarCotizacion() {
        cotizacionOverlay.classList.remove("active");
        cotizacionModal.classList.remove("active");
        document.body.style.overflow = "";
        itemCotizacionDirecta = null;
    }

    // Botón Solicitar Cotización en el panel carrito
    document.querySelector(".checkout-btn").addEventListener("click", () => abrirCotizacion(null));
    cotizacionClose.addEventListener("click", cerrarCotizacion);
    cotizacionOverlay.addEventListener("click", cerrarCotizacion);

    // Enviar cotización directamente a WhatsApp
    function procesarEnvioCotizacion(e) {
        if (e) e.preventDefault();

        const nombreInput  = document.getElementById("cot-nombre");
        const celularInput = document.getElementById("cot-celular");
        const correoInput  = document.getElementById("cot-correo");
        const mensajeInput = document.getElementById("cot-mensaje");

        const nombre  = nombreInput ? nombreInput.value.trim() : "";
        const celular = celularInput ? celularInput.value.trim() : "";
        const correo  = correoInput ? correoInput.value.trim() : "";
        const mensaje = mensajeInput ? mensajeInput.value.trim() : "";

        // Validación de campos obligatorios
        if (!nombre || !celular || !correo) {
            cotizacionError.textContent = "Por favor completa todos los campos obligatorios (*).";
            cotizacionError.style.display = "block";
            return;
        }

        // Validación de correo electrónico
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            cotizacionError.textContent = "Por favor ingresa un correo electrónico válido.";
            cotizacionError.style.display = "block";
            return;
        }
        cotizacionError.style.display = "none";

        // Obtener productos a cotizar (directo o del carrito)
        const itemsACotizar = itemCotizacionDirecta ? [itemCotizacionDirecta] : carrito;

        if (itemsACotizar.length === 0) {
            cotizacionError.textContent = "No hay productos seleccionados para cotizar.";
            cotizacionError.style.display = "block";
            return;
        }

        // Construir detalle de productos según el formato especificado
        let total = 0;
        let detalleProductos = "";
        itemsACotizar.forEach(item => {
            const m2Num = typeof item.m2 === "number" ? item.m2 : parseFloat(item.m2) || 1;
            const precioItem = typeof item.precio === "number" ? item.precio : (m2Num * (item.precioM2 || 0));
            total += precioItem;

            const cantTexto = item.m2 ? `${m2Num.toFixed(2)} M²` : "1 unidad";
            const refTexto = item.codigo ? ` (Ref: ${item.codigo})` : "";
            detalleProductos += `• ${item.nombre} - ${cantTexto}${refTexto}\n`;
        });

        // Estructurar el mensaje para WhatsApp
        let mensajeWhatsApp = `*SOLICITUD DE COTIZACIÓN - NACIONAL DE CERÁMICAS*\n` +
            `----------------------------------------\n` +
            `👤 *Cliente:* ${nombre}\n` +
            `📱 *Teléfono:* ${celular}\n` +
            `✉️ *Correo:* ${correo}\n`;

        if (mensaje) {
            mensajeWhatsApp += `📝 *Mensaje:* ${mensaje}\n`;
        }

        mensajeWhatsApp += `\n📦 *Detalle de la cotización:*\n${detalleProductos}`;

        if (total > 0) {
            mensajeWhatsApp += `\n💰 *Total estimado:* $${total.toLocaleString("es-CO")}\n`;
        }

        mensajeWhatsApp += `----------------------------------------\n` +
            `🌐 _Enviado desde el catálogo web_`;

        // Codificación y URL de WhatsApp
        const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
        const urlWhatsApp = `https://wa.me/${WHATSAPP_PHONE}?text=${mensajeCodificado}`;

        // Mostrar confirmación visual inmediata
        if (cotizacionForm) cotizacionForm.style.display = "none";
        cotizacionModal.querySelector(".cotizacion-resumen").style.display = "none";
        cotizacionModal.querySelector(".cotizacion-header").style.display  = "none";

        const exitoHTML = `
            <div class="cotizacion-exito">
                <div class="cotizacion-exito-icono">💬</div>
                <h3>¡Tu cotización se ha preparado!</h3>
                <p>Serás redirigido a WhatsApp para enviar el detalle de tu solicitud.<br><br>
                <a href="${urlWhatsApp}" target="_blank" class="cotizacion-enviar-btn" style="text-decoration:none;display:inline-flex;padding:0.8rem 1.6rem;">
                    📲 Abrir WhatsApp ahora
                </a></p>
            </div>`;
        cotizacionModal.insertAdjacentHTML("beforeend", exitoHTML);

        // Abrir WhatsApp en nueva pestaña
        window.open(urlWhatsApp, "_blank");

        // Si la cotización fue del carrito completo, vaciarlo
        if (!itemCotizacionDirecta) {
            carrito = [];
            actualizarCarrito();
        }
        itemCotizacionDirecta = null;

        if (cotizacionForm) cotizacionForm.reset();

        // Cerrar modal automáticamente después de unos momentos
        setTimeout(() => {
            cerrarCotizacion();
        }, 3500);
    }

    if (cotizacionForm) {
        cotizacionForm.addEventListener("submit", procesarEnvioCotizacion);
    }
    if (cotizacionEnviar && !cotizacionForm) {
        cotizacionEnviar.addEventListener("click", procesarEnvioCotizacion);
    }


    cartBtn.addEventListener("click", () => cartPanel.classList.add("active"));
    closeCart.addEventListener("click", () => cartPanel.classList.remove("active"));

    // ✅ Cerrar solo si el click es completamente fuera del panel
    document.addEventListener("click", (e) => {
        if (cartPanel.classList.contains("active") &&
            !e.target.closest(".cart-panel") &&
            !e.target.closest("#cart-btn") &&
            !e.target.closest(".product-modal")) {
            cartPanel.classList.remove("active");
        }
    });

    // ============================================================
    // Búsqueda en tiempo real
    // ============================================================
    const searchInput = document.getElementById("search-input");
    const searchBtn   = document.getElementById("search-btn");

    function buscarProductos() {
        const termino = searchInput.value.trim().toLowerCase();
        productsContainer.querySelectorAll(".product-card").forEach(card => {
            const nombre = card.querySelector("h3")?.textContent.toLowerCase() || "";
            const marca  = card.querySelector(".marca-badge")?.textContent.toLowerCase() || "";
            card.style.display = (!termino || nombre.includes(termino) || marca.includes(termino)) ? "" : "none";
        });
        if (termino) document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
    }

    searchBtn.addEventListener("click", buscarProductos);
    searchInput.addEventListener("input", buscarProductos);
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") buscarProductos();
        if (e.key === "Escape") { searchInput.value = ""; buscarProductos(); }
    });

    // ============================================================
    // Dropdown nav (marcas)
    // ============================================================
    const navDropdown = document.querySelector(".nav-dropdown");
    if (navDropdown) {
        navDropdown.querySelector(".dropdown-toggle").addEventListener("click", (e) => {
            e.preventDefault();
            navDropdown.classList.toggle("open");
        });
        document.addEventListener("click", (e) => {
            if (!navDropdown.contains(e.target)) navDropdown.classList.remove("open");
        });
        navDropdown.querySelectorAll(".dropdown-menu a").forEach(link => {
            link.addEventListener("click", () => navDropdown.classList.remove("open"));
        });
    }

    // ============================================================
    // Atajos de teclado web (tecla Escape para cerrar modales y paneles)
    // ============================================================
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            const modalActive = document.querySelector('.product-modal.active');
            const cotizacionActive = document.querySelector('.cotizacion-overlay.active');
            const cartActive = document.querySelector('.cart-panel.active');

            if (modalActive) {
                cerrarModal();
                return;
            }
            if (cotizacionActive) {
                cerrarCotizacion();
                return;
            }
            if (cartActive) {
                cartPanel.classList.remove("active");
                return;
            }
        }
    });

});
