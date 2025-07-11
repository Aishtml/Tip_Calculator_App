
const rate = document.querySelector('.input__rate');
let newRate;

rate.addEventListener('click', (event) => {
    newRate = +event.target.value;
});

document.querySelector('.tip__btn').addEventListener('click', tipCalculation);

function tipCalculation(event) {
    event.preventDefault();

    const bill = document.querySelector('#amount').value;
    const numOfPeople = document.querySelector('#people').value;

    if(!bill || !numOfPeople || !newRate) {
        alert('FIELD CAN\'T BE EMPTY');
    }

    let tipPerPerson = (+bill * (+newRate / 100) / +numOfPeople);
    let totalTip =  +tipPerPerson + (+bill / +numOfPeople);
    renderHtml(tipPerPerson, totalTip);
}


function renderHtml(tipPerPerson, totalTip) {
    const tipPerPersonResult = document.querySelector('.person');
    const totalTipResult = document.querySelector('.total');
    
    tipPerPersonResult.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalTipResult.textContent =`$${totalTip.toFixed(2)}`;
}