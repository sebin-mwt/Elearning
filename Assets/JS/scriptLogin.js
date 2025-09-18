const uname=document.querySelector("#name");
const email=document.querySelector("#email");
const upassword=document.querySelector("#password");

const name_error=document.getElementById("name_error");
const email_error=document.getElementById("email_error");
const password_error=document.getElementById("password_error");

const form = document.getElementById("form");

// var users = {
//   1: {id: 1,name: "test",email: "test@gmail.com",password:"Password123",age: 25},
//   2: {id: 2,name: "test1",email: "test1@gmail.com",password:"Password123",age: 30}
// };


form.addEventListener('submit', function(e) {
    const errors = [name_error, email_error, password_error];
    errors.forEach(err => err.innerHTML = "");

    let hasError = false;

    // Empty checks here
    if (uname.value === "") {
        hasError = true;
        name_error.innerHTML = "*Name is required";
    }

    if (email.value === "") {
        hasError = true;
        email_error.innerHTML = "*Email is required";
    }

    if (upassword.value === "") {
        hasError = true;
        password_error.innerHTML = "*Password required";
    }

    
    if (hasError) {
        e.preventDefault();
        return; //added  return so it wont pop alert if we didnt fill anything
    }

    //  get all users 

    const allUsers=JSON.parse(localStorage.getItem("users"));

    const userExists=allUsers.find((usr)=>usr.password===upassword.value && usr.email===email.value );

    if (userExists){
        alert(`User logged in, welcome ${userExists.name}`)
    }

    else{
        alert("Loggin failed !!")
    }

    // const isValidUser = Object.values(users).some(user =>
    //     user.email === email.value &&
    //     user.password === upassword.value 
    // );

//     if (!isValidUser) {
//         e.preventDefault();
//         alert("Invalid credentials"); 
//     } 
//     else {
//         alert("Login successful"); 
//      }


});
