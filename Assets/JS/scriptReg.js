const form = document.getElementById("form");

const uname=document.getElementById("name");
const phone=document.getElementById("phone");
const email=document.getElementById("email");
const dob=document.querySelector("#dob");
const upassword=document.getElementById("password")

const name_error=document.getElementById("name_error");
const email_error=document.getElementById("email_error");
const phone_error=document.getElementById("phone_error");
const date_error=document.getElementById("date_error");
const password_error=document.getElementById("password_error")


// var users = {
//   1: { id: 1, name: "test", email: "test@gmail.com" },
//   2: { id: 2, name: "test1", email: "test1@gmail.com" }
// };

 if(!localStorage.getItem("users")){
    localStorage.setItem("users",JSON.stringify([]));
 }

form.addEventListener('submit', (e)=>{

    name_error.innerHTML = "";
    email_error.innerHTML = "";
    phone_error.innerHTML = "";
    password_error.innerHTML = "";
    date_error.innerHTML = "";

    let hasError = false;   

    const today = new Date();
    today.setHours(0, 0, 0, 0);  

    var passwrdCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

     // checking for blank values

    if (uname.value ==="" || uname.value == null){
        name_error.innerHTML="*Name is required";
        hasError = true;
    }

    if(email.value === ""){
        email_error.innerHTML="*Email is required";   
        hasError = true;
    }
    else if(!email.value.match(emailCheck)){
        email_error.innerHTML="*Invalid email format";   
        hasError = true;
    }
    // else if (Object.values(users).some(user => user.email === email.value)) {
    //     email_error.innerHTML="*User already exists";
    //     hasError = true;
    // }

    if(phone.value===""){
        phone_error.innerHTML="*Phone Number required";
        hasError = true;
    }
    else if(String(phone.value).length != 10){
        phone_error.innerHTML="*Phone Number is invalid";
        hasError = true;
    }

    if(upassword.value===""){
        password_error.innerHTML="*Password Required";
        hasError = true;
    }
    
    else if(!upassword.value.match(passwrdCheck)){
        password_error.innerHTML="*Invalid  Password";
        hasError = true;
    }

    if (dob.value===""){
        date_error.innerHTML="*DOB required";
        hasError = true;
    } 
    else {
        const dobDate = new Date(dob.value);  
        if(dobDate > today){
            date_error.innerHTML="*DOB must be earlier than today";
            hasError = true;
        }
    }

    if (hasError) {
        e.preventDefault();   
        return;
    }

    //   checking whther user is already registered or not

    const users=JSON.parse(localStorage.getItem("users")); // geting all users from loc storage

    let exists=users.some((user)=> user.email===email.value && user.password===upassword.value);

    if (exists){

        e.preventDefault();
        name_error.innerHTML="User already exists" ;
        return;
    }

    // adding a new user

    let newUser={
        name:uname.value,
        password:upassword.value,
        email:email.value

    };

    users.push(newUser);

    localStorage.setItem("users",JSON.stringify(users));

    alert("Registration Successfull...");

    form.reset();

});
