const input = document.querySelector("input")
let messageErro = document.querySelector('#messageErro')
let container = document.querySelector('.container-the-results')
let backResult = ""
let first = "first"
let n = 1

// Add event of submit the form
document.getElementById("form").addEventListener('submit', async function(event){
  event.preventDefault()// Taking out loading
  let result = await fetch (`https://api.shrtco.de/v2/shorten?url=${input.value}`)// request for API
  let shotResult = await result.json() // Request for API
  if (shotResult.ok == true) { // if have erro
    changeStyleErro(1) //Change style where hepper a error  or where arrange the error
    createSectionResult(shotResult.result.original_link, shotResult.result.short_link) //Create an section of result
  }else{ // Else not have erro
    changeStyleErro(0) //Change style where hepper a error  or where arrange the error
  }
});
//Change style where hepper a error  or where arrange the error
function changeStyleErro(control) {
  if (control==1) {
    input.style.border="none"
    messageErro.style.visibility="hidden"
  }else{
    input.style.border="solid 2px red"
    messageErro.style.visibility="visible"
  }
}
//Create an section of result
function createSectionResult(linkOrigin, linkShort) {
      backResult = backResult + 
       `<section class="box-the-results id=${first}>
          <p id="full-link">${linkOrigin}</p>
          <p id="short-link">${linkShort}</p>
          <button class="btn" id="${n}"onclick="copyTransferArea('${linkShort}',${n})">Copy</button>
        </section>`
    container.innerHTML = backResult
    n = n + 1
}
//Copy for transfer area
function copyTransferArea(linkShort, n) {
  navigator.clipboard.writeText(linkShort)
  let btnCopy = document.getElementById(`${n}`)
  btnCopy.innerHTML = "Copied!"
  changeStyleToCopy(btnCopy)
}
//Change style the button to copy
function changeStyleToCopy(btnCopy) {
  btnCopy.style.background="#000000"
}
// Open Box-nav for mobile devices
$( ".bi-list" ).click(function() {
  $( ".box-nav" ).show();
  $( ".close-box-nav" ).show();
});
$( ".close-box-nav" ).click(function() {
  $( ".box-nav" ).hide();
  $( ".close-box-nav" ).hide();
});  
