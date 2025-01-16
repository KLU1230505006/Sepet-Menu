// Sepete ürün ekleme fonksiyonu
function addToCart(productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Sepette aynı üründen varsa miktarı artır
    const existingProduct = cart.find(product => product.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        // Yeni ürün ekle
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }

    // Sepeti localStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(cart));

    // Kullanıcıya bilgi mesajı göster
    alert(`${productName} sepete eklendi.`);
}
