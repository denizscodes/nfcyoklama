function logFormData() {
    var ogrenciAdi = document.getElementById("ogrenci_adi").value;
    var sifre = document.getElementById("sifre").value;

    window.location.href = "https://denizscodes.github.io/nfcyoklama/" + ogrenciAdi + ".html";
    console.log("Öğrenci Adı: " + ogrenciAdi);
    console.log("Şifre: " + sifre);

    // Burada form verilerini işlemek veya başka bir işlem yapmak için JavaScript kullanabilirsiniz.
}
