
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//Event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    Validate();
})

const isEmail = (emailVal) => {
    let atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    let dot = emailVal.lastIndexOf(".")
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}
//sendData
const sendData = (sRate, count) => {
    console.log(sRate, count)
    if (sRate === count) {
        //Alert
        Swal.fire(
            'Congratulations!',
            'Your Registration has been Completed Successfully!',
            'success'
        )

        // const swalWithBootstrapButtons = Swal.mixin({
        //     customClass: {
        //         confirmButton: 'btn btn-success',
        //         cancelButton: 'btn btn-danger'
        //     },
        //     buttonsStyling: false
        // })

        // swalWithBootstrapButtons.fire({
        //     title: 'Are you sure?',
        //     text: "You won't to Continue!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonText: 'Yes, Rigistered it!',
        //     cancelButtonText: 'No, cancel!',
        //     reverseButtons: true
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         swalWithBootstrapButtons.fire(
        //             'Registration!',
        //             'Your Registration has been completed.',
        //             'success'
        //         )
        //     } else if (
        //         /* Read more about handling dismissals below */
        //         result.dismiss === Swal.DismissReason.cancel
        //     ) {
        //         swalWithBootstrapButtons.fire(
        //             'Cancelled',
        //             'Your Registration has been cancelled :)',
        //             'error'
        //         )
        //     }
        // })

        //
        // swal({
        //     title: "Good job!",
        //     text: "You Registration has Successfull!",
        //     icon: "success",
        //     button: "Ok",
        // });
    } else {
        Swal.fire(
            'Opps!',
            'Something went wrong',
            'error'
        )
    }
}
//successMsg
const successMsg = () => {
    let formCon = document.getElementsByClassName("form-control");
    let count = formCon.length - 1;
    for (i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            let sRate = 0 + i;
            sendData(sRate, count);
        }
        else {
            formCon[i].className === "form-control error";
            let sRate = "";
            sendData(sRate, count);
        }
    }
}
//Define the Validate Function
const Validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phonenumberVal = phonenumber.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //Validate username
    if (usernameVal === "") {
        setErrorMsg(username, "Username cannot be blank");
    }
    else if (usernameVal.length <= 2) {
        setErrorMsg(username, "Username minimum 3 characters");
    }
    else {
        setSuccessMsg(username);
    }

    //Validate email
    if (emailVal === "") {
        setErrorMsg(email, "Email cannot be blank");
    }
    else if (!isEmail(emailVal)) {
        setErrorMsg(email, "Not a valid Email");
    }
    else {
        setSuccessMsg(email);
    }

    //Validate phonenumber
    if (phonenumberVal === "") {
        setErrorMsg(phonenumber, "PhoneNumber cannot be blank");
    }
    else if (phonenumberVal.length < 10) {
        setErrorMsg(phonenumber, "Not a valid PhoneNumber");
    }
    else {
        setSuccessMsg(phonenumber);
    }
    //Validate Password
    if (passwordVal === "") {
        setErrorMsg(password, "Password cannot be blank");
    }
    else if (passwordVal.length < 8) {
        setErrorMsg(password, "password minimum 8 digits");
    }
    else {
        setSuccessMsg(password);
    }
    //Validate Confirm Password
    if (cpasswordVal === "") {
        setErrorMsg(cpassword, "Confirm Password cannot be blank");
    }
    else if (passwordVal !== cpasswordVal) {
        setErrorMsg(cpassword, "Confirm password cannot be matched");
    }
    else {
        setSuccessMsg(cpassword);
    }
    successMsg();
}
function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";

}