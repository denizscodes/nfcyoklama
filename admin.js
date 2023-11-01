 
    const artisMiktari = 1; // Devamsızlık artış miktarı

    // Hafta içi günleri kontrol et (Pazartesi'den Cuma'ya kadar)
    const today = new Date().getDay();
    if (today >= 1 && today <= 5) {
      // Hafta içi günlerindeyiz, devamsızlıkları artır
    
      // Öğrenci bilgilerini fetch ile al
      fetch('db.json')
        .then(response => response.json())
        .then(data => {
          const studentData = data.student;
          studentData.forEach(ogrenci => {
            for (const ogrenciAdi in ogrenci) {
              const ogrenciBilgileri = ogrenci[ogrenciAdi][0];
              ogrenciBilgileri.Devamsızlık = (parseInt(ogrenciBilgileri.Devamsızlık) + artisMiktari);

              console.log(
                `${ogrenciAdi} öğrencisinin devamsızlığı ${artisMiktari} arttırıldı. Yeni devamsızlık: ${ogrenciBilgileri.Devamsızlık}`
              );
            }
    
            // Verileri güncelleyin ve POST isteği gönderin
            fetch('http://127.0.0.1:5500/db.json', {
              method: 'POST',
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
          });
        })
        .catch(error => {
          console.error('Veri alınırken hata oluştu: ', error);
        });
    } else {
      console.log("Bugün hafta içi günlerinden değil.");
    }
    




function addData(){

}

async function readTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      try {
        await ndef.scan();
        ndef.onreading = event => {
          const decoder = new TextDecoder();
          for (const record of event.message.records) {
            consoleLog("Record :  " + record);

            consoleLog("Record type:  " + record.recordType);
            consoleLog("MIME type:    " + record.mediaType);
            consoleLog("=== data ===\n" + decoder.decode(record.data));
          }
        }
      } catch(error) {
        consoleLog(error);
      }
    } else {
      consoleLog("Web NFC is not supported.");
    }
  }
  
  async function writeTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      try {
        await ndef.write("What Web Can Do Today");
        consoleLog("NDEF message written!");
      } catch(error) {
        consoleLog(error);
      }
    } else {
      consoleLog("Web NFC is not supported.");
    }
  }
  
  function consoleLog(data) {
    var logElement = document.getElementById('log');
    logElement.innerHTML = '';
    logElement.innerHTML += data + '\n';
    
    // Çıkan veriyi belirli bir süre sonra silmek için 5000 milisaniye (5 saniye) sonra bir işlem gerçekleştirelim.
    setTimeout(function() {
        logElement.innerHTML = '';
    }, 3000); // 5 saniye sonra temizle
}





function make(){
let lengthh = document.getElementById("ul").getElementsByClassName("li").length
console.log(lengthh);
document.getElementById("lengthh").innerHTML = lengthh}
make()


fetch('db.json')
    .then(response => response.json())
    .then(data => {
        // JSON verileri yüklendikten sonra burada işlem yapabilirsiniz
        var studentData = data.student;

        // Öğrenci listesini alın ve HTML içine yerleştirin
        var ulElement = document.getElementById("ul");
        ulElement.innerHTML = ""; // Mevcut liste içeriğini temizleyin

        studentData.forEach(function(studentObject) { 
            for (var studentName in studentObject) {
                var studentInfo = studentObject[studentName][0]; // Her öğrencinin bilgileri
                var liElement = document.createElement("li");
                liElement.className = "li";

                // Öğrenci bilgilerini liste öğesine ekleyin
                for (var key in studentInfo) {
                    var listItem = document.createElement("p");
                    listItem.textContent = key + ": " + studentInfo[key];
                    liElement.appendChild(listItem);
                }

                ulElement.appendChild(liElement);
            }
        });

        // Öğrenci sayısını güncelleyin
        document.getElementById("lengthh").textContent = studentData.length;
    });

    
    function searchInList() {
      const searchTerm = document.getElementById("searchInput").value.toLowerCase();
      const searchResults = [];
      const listItems = document.getElementsByClassName("li");
      const resultContainer = document.getElementById("searchResults");
     

      for (let i = 0; i < listItems.length; i++) {
        const listItemText = listItems[i].textContent.toLowerCase();
        if (listItemText.includes(searchTerm)) {
          searchResults.push(listItems[i]);

        }
      }

      if (searchResults.length === 0) {
        resultContainer.innerHTML = "Sonuç bulunamadı.";
      } else {
        for (let i = 0; i < searchResults.length; i++) {
          resultContainer.appendChild(searchResults[i]);
        }
      }
    }
    
    
    
   