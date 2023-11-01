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
    }, 1500); // 5 saniye sonra temizle
}



    // JSON verilerini yüklemek için fetch kullanın
fetch('db.json')
.then(response => response.json())
.then(data => {
    // JSON verileri yüklendikten sonra burada işlem yapabilirsiniz
    var selectedStudent = "denizkaraca"; // Öğrenci adını burada belirtin
    var studentData = data.student.find(function(student) {
        return student[selectedStudent] !== undefined;
    })[selectedStudent];

    // Öğrenci listesini alın ve HTML içine yerleştirin
    var ulElement = document.getElementById("ul");
    ulElement.innerHTML = ""; // Mevcut liste içeriğini temizleyin

    studentData.forEach(function(data) { 
        var liElement = document.createElement("li");
        liElement.className = "li";

        // Öğrenci bilgilerini liste öğesine ekleyin
        for (var key in data) {
            var listItem = document.createElement("p");
            listItem.textContent = key + ": " + data[key];
            liElement.appendChild(listItem);
        }

        ulElement.appendChild(liElement);
    });

})
function point(){
  console.log("you done")
}