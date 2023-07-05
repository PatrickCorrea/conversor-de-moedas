const covertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const inputCurrencyValue = document.querySelector(".input-currency")

const convertValues = async () => {

    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConverted = document.querySelector(".currency-value-to-converted");
    const currencyValueConverted = document.querySelector(".currency-value");

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(res => res.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high

    if (currencySelect.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar);
    };

    if (currencySelect.value == "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euro);
    };

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
};

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name");
    const currencyImg = document.querySelector(".logo-moeda");

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/america.png"
    };

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "euro"
        currencyImg.src = "./assets/euro.png"
    };

    convertValues();
};

currencySelect.addEventListener("change", changeCurrency);
covertButton.addEventListener("click", convertValues); 
