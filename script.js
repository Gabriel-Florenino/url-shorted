const getForm = document.querySelector('form')
const getInput = document.querySelector("input")
const getBox = document.querySelector("#box")
let myDiv
const div = `<sec id="secAE"><h2>Advanced Statistics</h2><p>Track how your links are performing 
  across the web with our advanced statistics dashboard.</p></sec><section id="line"></section><section id="cards">
  <sec class="card um" ><section id="imgS"><img src="images/icon-brand-recognition.svg" alt="Brand Recognition"></section>
  <h2>Brand Recognition</h2><p>Boost your brand recognition with each click. Generic links don’t mean a thing. 
  Branded links help instil confidence in your content.</p></sec>
  <sec class="card dois">
    <section id="imgS"><img src="images/icon-detailed-records.svg" alt="Detailed Records"></section>
    <h2>Detailed Records</h2>
    <p>Gain insights into who is clicking your links. Knowing when and where 
      people engage with your content helps inform better decisions.</p>
  </sec>
  <sec class="card tres">
    <section id="imgS"><img src="images/icon-fully-customizable.svg" alt="Fully Customizable"></section>
    <h2>  Fully Customizable</h2>
    <p> Improve brand awareness and content discoverability through customizable 
      links, supercharging audience engagement.</p>
  </sec>
</section>`
getForm.addEventListener('submit', async function (event){
    event.preventDefault()
    let input = getInput.value
    let result = await fetch (`https://api.shrtco.de/v2/shorten?url=${input}`)
    let shotResult = await result.json()

    if (shotResult.ok) {
        myDiv = `<div id="result"><p id="bigLink">${shotResult.result.original_link}</p><section id="boxCopy">
        <p id="litleLink">${shotResult.result.short_link}</p><button  class="but click" Onclick="copy()">Copy</button></section></div>`
        getBox.innerHTML = myDiv + div
        let getResult = document.querySelectorAll("#result")
        let getLine = document.getElementById("line")
        let x = 1070 + (getResult.length * 70)
        getLine.style.top=`${x}px`
    }else{

    }
    getInput.value = ""
})
function copy() {
    let botao = document.querySelector(".click")
    let linkCurto = document.querySelector("#litleLink")
    botao.classList.add("active")
    botao.innerHTML = "Copied!"
    navigator.clipboard.writeText(linkCurto.textContent)
}









