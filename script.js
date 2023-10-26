console.log('loaded')

const rootElement = document.querySelector("#root")
console.log(rootElement)

rootElement.innerHTML = "sziasztok"

const countryComponent = (country) => `
    <h2>country name: ${country.name.common}</h2>
    <h3>country pop: ${country.population}</h3>
`

async function init() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json()
    //console.log(data)
    
    data.forEach(country => rootElement.insertAdjacentHTML("afterbegin", countryComponent(country)))

}

init()