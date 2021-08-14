//handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {
    //Get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;


    //Update Deposit Total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    //Update Total Balance
    const balanceTotal = document.getElementById('balance-total');
    const newBalanceTotal = parseFloat(balanceTotal.innerText) + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;


    //Clear the deposit input field
    depositInput.value = '';



})


//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {

    //Get the amount withdrawn
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);

    //Update Withdraw Total
    const previousWithdrawAmountText = document.getElementById('withdraw-total');
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText.innerText);

    previousWithdrawAmountText.innerText = newWithdrawAmount + previousWithdrawAmount;

    //Update Total Balance

    const balanceTotal = document.getElementById('balance-total');
    const newBalanceTotal = parseFloat(balanceTotal.innerText) - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;



    // Clear the withdraw input field
    withdrawInput.value = ''


})