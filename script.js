// Event Listeners
document.getElementById('fname').addEventListener('blur', validateFName);
document.getElementById('lname').addEventListener('blur', validateLName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


// Validate Name
function validateFName(){
    const fname = document.getElementById('fname');
    const re = /^[A-Za-z]{2,10}$/ ;

    if(!re.test(fname.value)){
        fname.classList.add('is-invalid');
    }else{
       fname.classList.remove('is-invalid');
    }
}

// Validate Zipcode
function validateLName(){
    const lname = document.getElementById('lname');
    const re = /^[A-Za-z]{2,15}$/ ;

    if(!re.test(lname.value)){
        lname.classList.add('is-invalid');
    }else{
        lname.classList.remove('is-invalid');
    }   
}

// Validate Email
function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    }else{
        email.classList.remove('is-invalid')
    }
}

// Validate Phone Number
function validatePhone(){
    const phone = document.getElementById('phone');
    // const re = /^([0-9]{10})$/
    const re = /^\+?\d{2}??[ ]?\d{10}$/

    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    }else{
        phone.classList.remove('is-invalid')
    }

}

document.getElementById('sub-btn').addEventListener('click',(e)=>{
    document.getElementById('thankyou').style.display = "block";

    e.preventDefault();
});