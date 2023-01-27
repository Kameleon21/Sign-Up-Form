const pass1 = document.getElementById('passcode1');
const pass2 = document.getElementById('passcode2');
const submit = document.getElementById('btn');
const para = document.getElementById('match');
const para2 = document.getElementById('match2');

// Checkes if passwords are matching 
submit.addEventListener('click',() => {
    if(pass1.value === '') {
        alert('Please fill out the password section');
    } else if(pass2.value === '') {
        alert ("Please confirm your password")
    } else if (pass1.value === pass2.value) {
        submit.type = "sumbit";
    } else if (!(pass1.value === pass2.value)) {
        para.style.visibility = "visible";
        para2.style.visibility = "visible";
        submit.type = "button";
    }
})