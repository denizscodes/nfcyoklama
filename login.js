function logFormData() {
    var ogrenciAdi = document.getElementById("ogrenci_adi").value;
    var sifre = document.getElementById("sifre").value;

    window.location.href = "http://127.0.0.1:5500/" + ogrenciAdi + ".html";
    console.log("Öğrenci Adı: " + ogrenciAdi);
    console.log("Şifre: " + sifre);

    // Burada form verilerini işlemek veya başka bir işlem yapmak için JavaScript kullanabilirsiniz.
}