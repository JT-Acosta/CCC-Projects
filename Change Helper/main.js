document.addEventListener('DOMContentLoaded', function () {
    const denoms = {
        dollars: 1,
        quarters: 0.25,
        dimes: 0.10,
        nickels: 0.05,
        pennies: 0.01
    }
    const validateInput = inputVal => /^\d+(\.\d{1,2})?$/.test(inputVal);
    const calculateChange = () => {
        const saleAmount = Number(document.getElementById('salePrice').value);
        const customerAmount = Number(document.getElementById('custAmt').value);
        if (!validateInput(saleAmount) || !validateInput(customerAmount)) {
            return alert('Please enter valid amounts with up to two decimal places.');
        }
        if (saleAmount > customerAmount) {
            return alert('You Are Broke');
        }
        let change = customerAmount - saleAmount;
        updateChange(change, denoms);
    }
    const updateChange = (change, denoms) => {
        let changeCounts = {};
        for (let denom in denoms) {
            if (denoms.hasOwnProperty(denom)) {
                let count = Math.floor(change / denoms[denom]);
                changeCounts[denom] = count;
                change -= count * denoms[denom];
            }
        }
        for (let key in changeCounts) {
            if (changeCounts.hasOwnProperty(key)) {
                animate(key, changeCounts[key]);
            }
        }
    }
    const animate = (id, targetValue) => {
        let currentValue = 0;
        const incrementValue = () => {
            if (currentValue <= targetValue) {
                document.getElementById(id).innerText = currentValue;
                currentValue++;
                setTimeout(incrementValue, 100);
            }
        }
        incrementValue();
    }
    document.getElementById('calculateButton').addEventListener('click', calculateChange);
    const reset = () => {

    }
});
