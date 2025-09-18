const form = document.getElementById("form");

const uname=document.getElementById("name");

const phone=document.getElementById("phone");

const email=document.getElementById("email");

const course=document.getElementById("course");

const address=document.getElementById("address");

const name_error=document.getElementById("name_error");

const email_error=document.getElementById("email_error");

const phone_error=document.getElementById("phone_error");

const course_error=document.getElementById("course_error");

const address_error=document.getElementById("address_error");

form.addEventListener('submit', (e)=>{

        var emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (uname.value ==="" || uname.value == null){
            e.preventDefault();
            name_error.innerHTML="*Name is required";

        }

        if(!email.value.match(emailCheck) || email.value==""){

            e.preventDefault();
            email_error.innerHTML="*Email is required";
        }       

        if(phone.value===""){
            e.preventDefault();
            phone_error.innerHTML="*Phone Number required";

        }

        else if(String(phone.value).length !=10){

            e.preventDefault();
            phone_error.innerHTML="*Phone Number is invalid";

        }


        if (course.value==""){

            e.preventDefault();
            course_error.innerHTML="* Course is required";
        }

        if(address.value===""){
            e.preventDefault();
            address_error.innerHTML="*Adrress is Required"
        }

        
});