window.onload = novoPais;
function novoPais() {
    let select = document.getElementById("comboPais")
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        
        for (let i = 0; i < data.length; i++){
            
            let option = document.createElement("option")
            option.text = data[i].name.common
            option.value = data[i].name.common
            select.appendChild(option)
        }
    })
    
    let lingua = document.getElementById("lingua")
}

function alerta(){
    let select = document.getElementById("comboPais").value
    let lingua = document.getElementById("lingua")
    let capital = document.getElementById("capital")
    let bandeira = document.getElementById("bandeira")
    let fronteiras = document.getElementById("fronteiras")
    let area = document.getElementById("area")
    let moeda = document.getElementById("moeda")
    let moeda_aux = []
    let aux = []
    let fronteira_aux = []
    lingua.innerText = ""


    fetch("https://restcountries.com/v3.1/name/" + select+ "?fullText=true")
    .then((response) => response.json())
    .then((data) => {
        let idiomas = data[0].languages
        for (const key in idiomas) {
            if (Object.hasOwnProperty.call(idiomas, key)) {
                aux.push(idiomas[key])
            }
        }
        lingua.innerHTML = "&emsp;" + aux.join(", ");
        capital.innerHTML = "&emsp;" + data[0].capital;
        bandeira.src = data[0].flags.png;
        for (const key in data[0].borders) {
            if(Object.hasOwnProperty.call(data[0].borders,key)){
                if(!fronteira_aux.includes(data[0].borders[key])){
                fronteira_aux.push(data[0].borders[key]);
            }
        }
    }
    console.log(fronteira_aux.length);
        if(fronteira_aux.length > 1 ){
            fronteiras.innerHTML = "&emsp;" + fronteira_aux.join(", ");
        }else if (fronteira_aux.length == 1){
            fronteiras.innerHTML = "&emsp;" + fronteira_aux;
        } else if (fronteira_aux.length == 0){
            fronteiras.innerHTML = "&emsp; Ilhas não têm fronteiras";
        }

        area.innerHTML ="&emsp;" +  data[0].area + " km²";
        

        for (const key in data[0].currencies) {
            moeda_aux.push(key);
        }
        moeda.innerHTML = "&emsp;" + moeda_aux.join(", ");
        
    
        document.body.style.backgroundImage = "url(" + data[0].flags.png +")";
    })



}
