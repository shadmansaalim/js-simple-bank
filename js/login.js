document.getElementById('login-button').addEventListener('click', function () {
    // Get user name
    const name = document.getElementById('user-name');
    const userName = name.value;
    //Get user password
    const pass = document.getElementById('user-pass');
    const password = pass.value;

    //Checking if username and password are correct
    if (userName == 'shadmansaalim' && password == 'bank123') {
        window.location.href = 'banking.html';
    }
    else {
        const loginModal = document.getElementById('login-modal');
        loginModal.classList.remove('hidden');
    }
})



