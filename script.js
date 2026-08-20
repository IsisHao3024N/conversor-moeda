const convertButton = document.querySelector(".convert-but")

const valueSelect = document.querySelector(".value-select")

const convertValue = async() =>{
    const inputValue = document.querySelector(".input-value").value
    const ValueToConvert = document.querySelector(".value-convert")
    const ConvertedValue = document.querySelector(".converted-value")

    const currency = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    const dolar = currency.USDBRL.high
    const euro = currency.EURBRL.high
    const bitcoin = currency.BTCBRL.high

       if(valueSelect.value == "dolar"){
        ConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "UDS"
        }).format(inputValue/ dolar)
    }
    if(valueSelect.value == "euro"){
        ConvertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euro)
    }
     if(valueSelect.value == "bitcoin"){
        ConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitcoin)
    }

    ValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)


}


function changeCurrency(){
    const currencyName = document.getElementById("value-name")
    const currencyImage = document.querySelector(".value-img")

    if(valueSelect.value == "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/estados-unidos.png"
    }

    if(valueSelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/uniao-europeia.png"
    }
     if(valueSelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    } 

    convertValue()
}


valueSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)