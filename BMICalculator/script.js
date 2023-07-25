const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // bahar nahi likhna hain andar likhna hain form ke andar daalne seh type karte wakte values variables meh aayengi
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if((height === ''  || height < 0 || isNaN(height) )){
        results.innerHTML = `Please give a valid height ${height}`

    }
    
    else if( weight === ''  || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`

    } 
    
    else {
        const bmi =  (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
        if (bmi<18.6) {
            results.innerHTML = `<span>${bmi}  Under weight </span>`
        }
        else if (bmi>24.9) {
            results.innerHTML = `<span>${bmi} Over weight </span>`
        }
        else {results.innerHTML = `<span>${bmi} </span>`
        }

    }
    
    
})