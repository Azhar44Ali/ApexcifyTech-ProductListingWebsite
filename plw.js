        const products = [
            {
                id: 1,
                title: "Wireless Bluetooth Headphones",
                owner: "TechStore Pro",
                price: 79.99,
                category: "electronics",
                image: "headphones.jpg"
            },
            {
                id: 2,
                title: "Vintage Leather Jacket",
                owner: "Fashion Hub",
                price: 129.99,
                category: "clothing",
                image: "jacket.jpg"
            },
            {
                id: 3,
                title: "JavaScript: The Definitive Guide",
                owner: "BookWorld",
                price: 45.50,
                category: "books",
                image: "book.jpg"
            },
            {
                id: 4,
                title: "Smart Garden Kit",
                owner: "GreenThumb Co",
                price: 89.99,
                category: "home",
                image: "garden.jpg"
            },
            {
                id: 5,
                title: "Professional Tennis Racket",
                owner: "SportsMaster",
                price: 199.99,
                category: "sports",
                image: "racket.jpg"
            },
            {
                id: 6,
                title: "4K Webcam",
                owner: "TechStore Pro",
                price: 149.99,
                category: "electronics",
                image: "webcam.jpg"
            },
            {
                id: 7,
                title: "Cotton Summer Dress",
                owner: "Fashion Hub",
                price: 65.00,
                category: "clothing",
                image: "dress.jpg"
            },
            {
                id: 8,
                title: "Python Programming Cookbook",
                owner: "BookWorld",
                price: 52.99,
                category: "books",
                image: "python.jpg"
            },
            {
                id: 9,
                title: "LED Plant Growth Light",
                owner: "GreenThumb Co",
                price: 39.99,
                category: "home",
                image: "light.jpg"
            },
            {
                id: 10,
                title: "Yoga Mat Premium",
                owner: "SportsMaster",
                price: 35.99,
                category: "sports",
                image: "yoga.jpg"
            },
            {
                id: 11,
                title: "Wireless Mouse",
                owner: "TechStore Pro",
                price: 29.99,
                category: "electronics",
                image: "mouse.jpg"
            },
            {
                id: 12,
                title: "Denim Jeans Classic",
                owner: "Fashion Hub",
                price: 85.00,
                category: "clothing",
                image: "jeans.jpg"
            },
            {
                id: 13,
                title: "Web Development Masterclass",
                owner: "BookWorld",
                price: 67.99,
                category: "books",
                image: "webdev.jpg"
            },
            {
                id: 14,
                title: "Ceramic Plant Pots Set",
                owner: "GreenThumb Co",
                price: 24.99,
                category: "home",
                image: "pots.jpg"
            },
            {
                id: 15,
                title: "Basketball Official Size",
                owner: "SportsMaster",
                price: 45.99,
                category: "sports",
                image: "basketball.jpg"
            },
            {
                id: 16,
                title: "Smartphone Case Protective",
                owner: "TechStore Pro",
                price: 19.99,
                category: "electronics",
                image: "case.jpg"
            },
            {
                id: 17,
                title: "Wool Winter Scarf",
                owner: "Fashion Hub",
                price: 35.00,
                category: "clothing",
                image: "scarf.jpg"
            },
            {
                id: 18,
                title: "Data Science Handbook",
                owner: "BookWorld",
                price: 73.50,
                category: "books",
                image: "datascience.jpg"
            },
            {
                id: 19,
                title: "Bamboo Kitchen Utensils",
                owner: "GreenThumb Co",
                price: 18.99,
                category: "home",
                image: "utensils.jpg"
            },
            {
                id: 20,
                title: "Running Shoes Professional",
                owner: "SportsMaster",
                price: 120.00,
                category: "sports",
                image: "shoes.jpg"
            }
        ];


        let currentPage = 0;
        
        const productsPerPage = 4;
        let filteredProducts = [...products];

        
        const productsGrid = document.getElementById('productsGrid');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const counter = document.getElementById('counter');
        const categoryFilter = document.getElementById('categoryFilter');
        const priceFilter = document.getElementById('priceFilter');
        const searchFilter = document.getElementById('searchFilter');
        const noProducts = document.getElementById('noProducts');

        const gradients = [
            'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(45deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(45deg, #ffecd2 0%, #fcb69f 100%)'
        ];

        function getRandomGradient() {
            return gradients[Math.floor(Math.random() * gradients.length)];
        }

        function renderProducts() {
            const startIndex = currentPage * productsPerPage;
            const endIndex = startIndex + productsPerPage;
            const productsToShow = filteredProducts.slice(startIndex, endIndex);

            if (productsToShow.length === 0) {
                productsGrid.style.display = 'none';
                noProducts.style.display = 'block';
            } else {
                productsGrid.style.display = 'grid';
                noProducts.style.display = 'none';

                productsGrid.innerHTML = productsToShow.map((product, index) => `
                    <div class="product-card" style="animation-delay: ${index * 0.1}s">
                        <div class="product-image" style="background: ${getRandomGradient()}">
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 4rem; opacity: 0.3;">
                                ${getCategoryEmoji(product.category)}
                            </div>
                        </div>
                        <div class="product-info">
                            <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                            <h3 class="product-title">${product.title}</h3>
                            <p class="product-owner">${product.owner}</p>
                            <div class="product-price">$${product.price.toFixed(2)}</div>
                            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                        </div>
                    </div>
                `).join('');
            }

            updateCounter();
            updateNavigationButtons();
        }

        function getCategoryEmoji(category) {
            const emojis = {
                electronics: '🔌',
                clothing: '👕',
                books: '📚',
                home: '🏡',
                sports: '⚽'
            };
            return emojis[category] || '📦';
        }

        function updateCounter() {
            const startIndex = currentPage * productsPerPage + 1;
            const endIndex = Math.min((currentPage + 1) * productsPerPage, filteredProducts.length);
            const total = filteredProducts.length;
            
            if (total === 0) {
                counter.textContent = 'No products';
            } else {
                counter.textContent = `${startIndex}-${endIndex} of ${total}`;
            }
        }

        function updateNavigationButtons() {
            const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
            prevBtn.disabled = currentPage === 0;
            nextBtn.disabled = currentPage >= totalPages - 1;
        }

        function applyFilters() {
            const categoryValue = categoryFilter.value.toLowerCase();
            const priceValue = parseFloat(priceFilter.value) || Infinity;
            const searchValue = searchFilter.value.toLowerCase();

            filteredProducts = products.filter(product => {
                const matchesCategory = !categoryValue || product.category === categoryValue;
                const matchesPrice = product.price <= priceValue;
                const matchesSearch = !searchValue || 
                    product.title.toLowerCase().includes(searchValue) ||
                    product.owner.toLowerCase().includes(searchValue);

                return matchesCategory && matchesPrice && matchesSearch;
            });

            currentPage = 0;
            renderProducts();
        }

        function nextProduct() {
            const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
            if (currentPage < totalPages - 1) {
                currentPage++;
                renderProducts();
                
                // Add pulse animation to new products
                setTimeout(() => {
                    document.querySelectorAll('.product-card').forEach(card => {
                        card.classList.add('pulse');
                        setTimeout(() => card.classList.remove('pulse'), 1000);
                    });
                }, 100);
            }
        }

        function prevProduct() {
            if (currentPage > 0) {
                currentPage--;
                renderProducts();
                
                // Add pulse animation to new products
                setTimeout(() => {
                    document.querySelectorAll('.product-card').forEach(card => {
                        card.classList.add('pulse');
                        setTimeout(() => card.classList.remove('pulse'), 1000);
                    });
                }, 100);
            }
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                // Simulate add to cart with animation
                const card = event.target.closest('.product-card');
                card.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    card.style.transform = '';
                    alert(`Added "${product.title}" to cart! 🛒`);
                }, 150);
            }
        }

        // Event listeners
        prevBtn.addEventListener('click', prevProduct);
        nextBtn.addEventListener('click', nextProduct);
        categoryFilter.addEventListener('change', applyFilters);
        priceFilter.addEventListener('input', applyFilters);
        searchFilter.addEventListener('input', applyFilters);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevProduct();
            } else if (e.key === 'ArrowRight') {
                nextProduct();
            }
        });

        // Initialize
        renderProducts();
    