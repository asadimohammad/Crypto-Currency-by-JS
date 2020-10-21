// Classes
const ui = new UI()
const cryptoApi = new CriptoAPI()
 // daa65591b947f41d19385eaa520ca8ca

// Variables
 const form = document.querySelector('#form')


// EventListeners
EventListeners()
function EventListeners(){
    form.addEventListener('submit' , getValuation)
}



// Functions
function getValuation (e){
    e.preventDefault()
    const currency = document.querySelector('#currency').value
    const cryptocurrency = document.querySelector('#cryptocurrency') .value
    
    if( currency == ''|| cryptocurrency == ''){
        ui.printMessage('Please select all field', 'center deep-orange darken-4 card-panel')
    } else {
        cryptoApi.queryApi(currency , cryptocurrency)
        .then (data => ui.resultApi(data.responseJson[0] , currency))
    }
}