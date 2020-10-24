class UI {
    printMessage(message, className) {
        const div = document.createElement('div')
        div.className = className
        div.innerHTML = message
        document.querySelector('.messages').appendChild(div)
        this.removeMessage('.messages div')
    }
    removeMessage(className) {
        setTimeout(() => {
            document.querySelector(className).remove()
        }, 3000);
    }
    resultApi(result, currency) {
        const prevResult = document.querySelector('#result .card')
        if (prevResult) {
            prevResult.remove()
        }
        let currencyTitle;
        switch (currency) {
            case 'USD':
                currencyTitle = 'Dollor'
                break;
            case 'GBP':
                currencyTitle = 'Pound'
                break;
            case 'EUR':
                currencyTitle = 'Euro'
                break;
        }
        let templateHtml = `
        <div class="card teal">
            <div class="card-content">
                <h5>Crypto: ${result.name}</h5>
                <img src="${result.logo_url}" style="width:50px">
                <h6>Currency: ${currencyTitle}</h6>
                <div>Last Hour: ${result['1h'].price_change}</div>
                <div>Last Day: ${result['1d'].price_change}</div>
                <div>Last Week: ${result['7d'].price_change}</div>
                <div>Last Month: ${result['30d'].price_change}</div>
            </div>
        </div>
        `
        this.showSpinner()
        this.showResult(templateHtml)
    }
    showSpinner() {
        const spinnerDiv = document.querySelector('.spinner')
        const spinner = document.createElement('img')
        spinner.src = '../img/spinner.gif'
        spinnerDiv.appendChild(spinner)
    }
    showResult(templateHtml){
        setTimeout(() => {
            document.querySelector('.spinner img').remove()
            const result = document.querySelector('#result')
            result.innerHTML = templateHtml
            
        }, 2000);
    }
}
