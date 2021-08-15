function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //Clear the input field
    inputField.value = '';
    return amountValue;
}


function updateTotalField(totalFieldId, amount) {

    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);


    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = (balanceTotal.innerText);
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = (balanceTotal.innerText);
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + amount;
}



//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    //Get the amount deposited
    const depositAmount = getInputValue('deposit-input');

    if (depositAmount >= 0) {

        //Update Deposit Total
        updateTotalField('deposit-total', depositAmount);

        //Update Total Balance
        updateBalance(depositAmount);
    }
    else {
        const depositToast = document.getElementById('deposit-toast');
        depositToast.style.display = 'block';
    }
})


//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {

    //Get the amount withdrawn
    const withdrawAmount = getInputValue('withdraw-input')

    const currentBalance = getCurrentBalance();

    if (withdrawAmount >= 0 && withdrawAmount <= currentBalance) {

        //Update Withdraw Total
        updateTotalField('withdraw-total', withdrawAmount);

        //Update Total Balance
        updateBalance(-withdrawAmount)
    }

    if (withdrawAmount > currentBalance) {
        const balanceToast = document.getElementById('balance-toast');
        balanceToast.style.display = 'block';
    }

    else {
        const withdrawToast = document.getElementById('withdraw-toast');
        withdrawToast.style.display = 'block';
    }

})





function removeToast(toastId) {
    const balanceToast = document.getElementById(toastId);
    balanceToast.style.display = 'none';
}