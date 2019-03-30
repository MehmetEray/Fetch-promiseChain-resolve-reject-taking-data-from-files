// Example 1

function getData(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof data === "string"){
                // Pozitif sonnuç çıkarmak için
                resolve(data);
            }else{
                // Negatif sonuç çıkarmak için
                reject(new Error("Lütfen string bir değer girin"));
            }
        },3000);
    });
}

getData("Merhaba").then(response => console.log("Gelen değer : " + response))
.catch(err => console.log(err));

// Example 2

function addNumber(number){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number + 2);
            }
            else{
                reject(new Error("Lütfen bir sayı girin"));
            }
        },3000);
    });
}

addNumber(10).then(response => {
    console.log(response);
    return response + 2;
}).then(response2 => console.log(response2))
.catch(err => console.log(err));  // En fazla bir adet catch kullanılabilir.Birden çok promise kullanılabilir.

////////FETCH

// Local bir txt dosyasından veri alma

function getTextFile(){
    fetch("example.txt")
    .then(response => console.log(response))
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

// Local bir JSON dosyasından veri alma

function getJSONFile(){ 
    fetch("example.json")
    .then(response => console.log(response))
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function getExternalAPI(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => {
        console.log(data.rates.TRY);
    })
    .catch(err => console.log(err));
}

getTextFile();
getJSONFile();
getExternalAPI();