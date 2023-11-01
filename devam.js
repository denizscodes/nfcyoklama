const istenen_kullanici_adi = "denizkaraca"; // İşlem yapmak istediğiniz öğrencinin kullanıcı adı
const artisMiktari = 1; // Devamsızlık artış miktarı

// Hafta içi günleri kontrol et (Pazartesi'den Cuma'ya kadar)
const today = new Date().getDay();
if (today >= 1 && today <= 5) {
  // Hafta içi günlerindeyiz, devamsızlığı artır

  // Öğrenci bilgilerini fetch ile al
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      const studentData = data.student;
      studentData.forEach(ogrenci => {
        for (const ogrenciAdi in ogrenci) {
          if (ogrenciAdi === istenen_kullanici_adi) {
            const ogrenciBilgileri = ogrenci[ogrenciAdi][0];
            ogrenciBilgileri.Devamsızlık +=1;
            console.log(
              `${istenen_kullanici_adi} öğrencisinin devamsızlığı 1 arttırıldı. Yeni devamsızlık: ${ogrenciBilgileri.Devamsızlık}`
            );

            // Değişiklikleri kaydetmek için fetch ile güncelle
            fetch('db.json', {
              method: 'PUT', // veya 'POST' kullanabilirsiniz
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(response => response.json())
              .then(updatedData => {
                console.log('Veriler güncellendi: ', updatedData);
              })
              .catch(error => {
                console.error('Veriler güncellenirken hata oluştu: ', error);
              });

            break;
          }
        }
      });
    })
    .catch(error => {
      console.error('Veri alınırken hata oluştu: ', error);
    });
} else {
  console.log("Bugün hafta içi günlerinden değil.");
}

fetch('db.json')
    .then(response => response.json())
    .then(data => {
       


        // Öğrenci sayısını güncelleyin
    });