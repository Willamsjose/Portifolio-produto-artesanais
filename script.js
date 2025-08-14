// Dados dos produtos (pode ser substituído por uma API no futuro)
const products = [
    {
        id: 1,
        title: "Cesta de Palha Trançada",
        description: "Cesta artesanal feita com palha natural, perfeita para decoração ou organização.",
        price: "R$ 89,90",
        image: "imagens/Logo.jpg",
        instagramLink: "https://www.instagram.com/vjfazendoarte/"
    },
    {
        id: 2,
        title: "Jogo de Xícaras de Cerâmica",
        description: "Conjunto de 6 xícaras pintadas à mão com detalhes florais.",
        price: "R$ 149,90",
        image: "imagens/Logo2.jpg",
        instagramLink: "https://www.instagram.com/vjfazendoarte/"
    }
];

// Função para renderizar os produtos
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p class="product-price">${product.price}</p>
                <div class="product-buttons">
                    <a href="${product.instagramLink}" target="_blank" class="btn instagram-btn">
                        <i class="fab fa-instagram"></i> Ver no Instagram
                    </a>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Smooth scrolling para links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});