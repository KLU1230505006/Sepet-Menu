document.addEventListener("DOMContentLoaded", function () {
    const kategoriInput = document.getElementById("kategori-input");
    const kategoriEkleBtn = document.getElementById("kategori-ekle-btn");

    if (kategoriEkleBtn) {
        kategoriEkleBtn.addEventListener("click", function () {
            const kategori = kategoriInput.value.trim();

            if (kategori === "") {
                alert("Bu alan boş bırakılamaz!");
            } else {
                alert("Kategori eklendi!");
                kategoriInput.value = ""; // Textbox'ı temizle
            }
        });
    }
});



function addProduct() {
    const categoryTr = document.getElementById("categorySelectTr").value.trim();
    const categoryEn = document.getElementById("categorySelectEn").value.trim();
    const productNameTr = document.getElementById("productNameTr").value.trim();
    const productNameEn = document.getElementById("productNameEn").value.trim();
    const productPrice = document.getElementById("productPrice").value.trim();

    if (!categoryTr || !categoryEn) {
        alert("Kategori (Türkçe ve İngilizce) seçilmesi zorunludur!");
        return;
    }

    if (!productNameTr || !productNameEn) {
        alert("Ürün adı (Türkçe ve İngilizce) zorunludur!");
        return;
    }

    if (!productPrice || parseFloat(productPrice) <= 0) {
        alert("Geçerli bir fiyat giriniz!");
        return;
    }

    alert("Ürün başarıyla eklendi!");
    // Formu temizle
    document.getElementById("categorySelectTr").value = "";
    document.getElementById("categorySelectEn").value = "";
    document.getElementById("productNameTr").value = "";
    document.getElementById("productNameEn").value = "";
    document.getElementById("productDescriptionTr").value = "";
    document.getElementById("productDescriptionEn").value = "";
    document.getElementById("productPrice").value = "";
}

document.getElementById("ara-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const kategori = document.getElementById("kategori").value;
    const urun = document.getElementById("urun").value;

    if (kategori && urun) {
        alert(`${kategori} ve ${urun} ile arama yapılıyor.`);
    } else {
        alert("Lütfen kategori ve ürün seçin.");
    }
});
