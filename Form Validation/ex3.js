function formVallidations()
        {

            //target uname_input
            var uname_input=document.getElementById('uname')
            var email_input=document.getElementById('email')
            var pwd_input=document.getElementById('pwd')

            //errors (names)
            var uname_span=document.getElementById('uname_span')
            var email_span=document.getElementById('email_span')
            var pwd_span=document.getElementById('pwd_span')

            //icons
            var wrong=`<i class="bi bi-exclamation-circle-fill"></i>`  //icons
            var right=`<i class="bi bi-check-circle-fill"></i>`  //icons


            if(uname_input.value=="" || uname_input.value==undefined)
            {
                
                uname_span.innerHTML=`${wrong}Enter Name`
                uname_input.style.border="1px solid red"//alert("Enter name")
                //uname_span.style.color="red" // J/S with css styles
                uname_span.className="text-danger" //JS with bootsstrap styles
                return false;

            }
            else if(!uname_input.value.match(/^[a-z]+$/))
            {
                uname_span.innerHTML=`${wrong}Enter Lower case Alphabets only`
                uname_input.style.border="1px solid red"//alert("Enter name")
                //uname_span.style.color="green" // J/S with css styles
                uname_span.className="text-danger" //JS with bootsstrap styles
                return false;
            }  
            else
            {
                uname_span.innerHTML=`${right}Enter Name`
                uname_input.style.border="1px solid green"//alert("Enter name")
                //uname_span.style.color="green" // J/S with css styles
                uname_span.className="text-success" //JS with bootsstrap styles
                return false;  
            }
            
            

        
            if(email_input.value=="" || email_input.value==undefined)
            
            {   
                email_span.innerHTML=`${wrong}Enter email`
                email_input.style.border="1px solid red"//alert("Enter name")
                //uname_span.style.color="red" // J/S with css styles
                uname_span.className="text-danger" //JS with bootsstrap styles
                return false;

            }
            else if(!email_input.value.match(/([a-zA-Z0-9_\.\-]) + \@(([a-zA-Z])+].)/))
            {
                email_span.innerHTML=`${wrong}Enter Lower case Alphabets only`
                email_input.style.border="1px solid red"//alert("Enter name")
                //uname_span.style.color="green" // J/S with css styles
                email_span.className="text-danger" //JS with bootsstrap styles
                return false;
            }  
            else
            {
                email_span.innerHTML=`${right}Enter email`
                email_input.style.border="1px solid green"//alert("Enter name")
                //uname_span.style.color="green" // J/S with css styles
                email_span.className="text-success" //JS with bootsstrap styles
                return false;  
            }

            if(pwd_input.value=="" || pwd_input.value==undefined)
            {
                
                pwd_span.innerHTML=`${wrong}Enter Password`
                pwd_input.style.border="1px solid red"//alert("Enter name")
                //uname_span.style.color="red" // J/S with css styles
                pwd_span.className="text-danger" //JS with bootsstrap styles
                return false;

            }
            else if(!pwd_input.value.match(/^[a-z]+$/))
            {
                pwd_span.innerHTML=`${wrong}Enter Lower case Alphabets only`
                pwd_input.style.border="1px solid red"//alert("Enter name")
                //uname_span.style.color="green" // J/S with css styles
                pwd_span.className="text-danger" //JS with bootsstrap styles
                return false;
            }  
            else
            {
                pwd_span.innerHTML=`${right}Enter Password`
                pwd_input.style.border="1px solid green"//alert("Enter name")
                //uname_span.style.color="green" // J/S with css styles
                pwd_span.className="text-success" //JS with bootsstrap styles
                return false;  
            }


            hgjgvhbb
            
        }