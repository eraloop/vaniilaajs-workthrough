form = document.getElementById('my-form')
error_icon = document.querySelectorAll('.error-object')
inputs = document.querySelectorAll('.input-area input');
error_logo = document.querySelectorAll('.input-area p span');
error_msg = document.querySelectorAll('.input-area.error-text');

// variables , constants and array declarations
let personArray = []
let para1, para2, para3, para4;

// console.log(error_icon);

// reusable functions 

function addErrorIcon(){
    error_icon.forEach( icon =>{
        icon.classList.add('visible')
        icon.classList.remove('not-visible')
    })
}

function removeErrorIcons(){
    error_icon.forEach( icon =>{
        icon.classList.remove('visible')
        icon.classList.add('not-visible')
    })
}

inputs.forEach((input , index) => {
    input.addEventListener('keydown', e => {

        error_icon.forEach((icon)=>{
             removeErrorIcons();
        })
    })
})

// tried to automate the input field error components
function check( name, field, message){
    message = `Please fill in your firstname`
    field = document.getElementsByClassName(`${name}`);
    field.textContent = message;
    form.name.classList.add('error-box')
}
// end of reusable functions


form.addEventListener('submit', e => {
    e.preventDefault();

    Firstname = form.firstname.value;
    LastName = form.lastname.value;
    Email = form.email.value;
    Password = form.password.value;
  
    if (Firstname == null || Firstname == ""){
        addErrorIcon()
        // error field components
        firstNameMsg = 'Please fill in your first name'
        para1 = document.querySelector('.firstname');
        para1.textContent = firstNameMsg;
        form.firstname.classList.add('error-box')
    }

    if (LastName == null || LastName == ""){
        addErrorIcon()
        lastNameMsg = 'Please fill in your Last name'
        para2 = document.querySelector('.lastname')
        para2.textContent = lastNameMsg;
        form.lastname.classList.add('error-box')
    }

    if (Email== null || Email== ""){
        addErrorIcon()
        emailMsg = 'Please fill in your Email address'
        para3 = document.querySelector('.emailaddress')
        para3.textContent =  emailMsg;
        form.email.classList.add('error-box')
    }

    if (Password == null || Password == ""){
        addErrorIcon()
        passMsg = 'Please fill in your Password'
        para4 = document.querySelector('.passwordfield')
        para4.textContent = passMsg;
        form.password.classList.add('error-box')
    }

    if(Firstname !== "" &&  LastName !== "" && Email !== "" && Password !== "" ){
        creatObject(Firstname, LastName, Email, Password);

        form.reset()
        form.submit = false;

        para1.textContent = '';
        para2.textContent = '';
        para3.textContent = '';
        para4.textContent = '';

    }
})

function creatObject(first, last, email, pass) {
    person = {
        FirstName : first,
        LastName : last,
        PersonEmail : email,
        PersonPassword : pass
    }

    personArray.push(person)
    personArray.forEach(person =>{
        console.log(person);
    })
}

inputs.forEach((input, index) => {
    input.addEventListener('keydown', e =>{
        e.target.classList.remove('error-box')   
    })
})



