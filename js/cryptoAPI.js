class CriptoAPI{
    constructor(){
        this.apiKey = 'daa65591b947f41d19385eaa520ca8ca'
    }
    
    async queryApi(currency , cryptocurrency){
        let url = `https://api.nomics.com/v1/currencies/ticker?key=${this.apiKey}&ids=${cryptocurrency}&interval=1h,1d,7d,30d&convert=${currency}`
       
        const response =await fetch(url)
        const responseJson =await response.json()
        return {responseJson}
    }
}