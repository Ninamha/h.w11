function validate(a) {
    e.preventDefault();


    const email = document.getElementById("name").value
    const pass = document.getElementById("code no").value
    const age = document.getElementById("class").value
    const msgBox = document.getElementById("message").value

    let message = '';

    if (NAME === '') {
        message = 'Please enter name.';
        msgBox.style.color = 'red';
    }
    else if (code  === '') {
        message = 'code must be at least 5 characters long.';
        msgBox.style.color = 'red';
    }
    else if (classes === '') {
        message = 'must write admission class.';
        msgBox.style.color = 'red';
    }
    else {
        message = 'Login successful!!!';
        msgBox.style.color = 'green';
    }
    msgBox.innerText = message;
}