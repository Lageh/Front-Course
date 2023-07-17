function buscacep(){
    let CEP = document.getElementById("CEP").value

    let rua = document.getElementById("rua")
    let complemento = document.getElementById("complemento")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")

    fetch("https://viacep.com.br/ws/" + CEP + "/json/")
    .then((response) => response.json())
    .then((data) => {
        rua.value = data.logradouro
        complemento.value = data.complemento
        bairro.value = data.bairro
        cidade.value = data.localidade
        estado.value = data.uf
    })
}