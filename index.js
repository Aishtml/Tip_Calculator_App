const rates = document.querySelectorAll('.input__rate button');
let newRate = 0;


rates.forEach(rate => {
    rate.addEventListener('click', (event) => {
        newRate = parseInt(event.target.value);
    });
});


document.querySelector('.tip__btn').addEventListener('click', tipCalculation);

function tipCalculation(event) {
    event.preventDefault();

    const bill = parseFloat(document.querySelector('#amount').value);
    const numOfPeople = parseInt(document.querySelector('#people').value);
    const inputRate = parseFloat(document.querySelector('.input__rate input').value);
    console.log(inputRate)

    if (!bill || !numOfPeople || (isNaN(inputRate) && isNaN(newRate))) {
    alert('FIELDS CAN\'T BE EMPTY');
    return;
    }

    //use newRate if newRate is not 0 or less, use input if not 0 or less, use 0
    const rateToUse = newRate > 0 ? newRate : (inputRate > 0 ? inputRate : 0);

    if (rateToUse === 0) {
        alert('Please select or enter a valid rate.');
        return; // Stop if there's no valid rate
    } else if(+bill === 0) {
        alert('Please select or enter a valid tip amount.');
        return;
    } else if(numOfPeople === 0) {
        alert('Please select or enter a valid number of person.');
        return;
    } else {
        const tipPerPerson = (bill * (rateToUse / 100)) / numOfPeople;
        const totalTip = tipPerPerson + (bill / numOfPeople);
        
        renderHtml(tipPerPerson, totalTip);
    }

    

    
}


function renderHtml(tipPerPerson, totalTip) {
    const tipPerPersonResult = document.querySelector('.person');
    const totalTipResult = document.querySelector('.total');
    
    tipPerPersonResult.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalTipResult.textContent =`$${totalTip.toFixed(2)}`;
}
