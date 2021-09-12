let email = document.querySelector('.email');
let password = document.querySelector('.password');
let btn = document.querySelector('.btn');
let snackbar = document.querySelector('.snackbar');

let value = document.querySelector('.value');

btn.addEventListener('click',()=>{

    try{

        if(password.value.length<6){
            snackbar.classList.add('show');
            value.innerHTML="Password should be contain 6 characters";
            setTimeout(()=>{
                snackbar.classList.remove('show');
               
            },2500) 
        }
        else{
        if(email.value == "" && password.value == ""){
            snackbar.classList.add("show");
            value.innerHTML="Please Enter credentials";
            setTimeout(()=>{
                snackbar.classList.remove('show')
            },3000)
        }
       else{
           let obj = {
               email : email.value,
               password:password.value
           }

           fetch('https://affilatebackend.tk/api/v1/forget_password',{
               method:"POST",
               body: JSON.stringify(obj),
               headers: { 'Content-Type': 'application/json' }
           })
           .then(resp=>resp.json())
           .then(json=>{
            
              if(json.Reason){
                snackbar.classList.add('show');
                value.innerHTML=json.Reason;
                setTimeout(()=>{
                    snackbar.classList.remove('show')
                },3000)
              }
              else{
               
               
                    snackbar.classList.add('show');
                    value.innerHTML=json.pass;
                    setTimeout(()=>{
                        snackbar.classList.remove('show');
                        window.location.href="login.html";
                    },1000)                  
                  
                  
                }
               
            })

           .catch(err=>console.log(err))
       }
    }
    }
    catch(err){
        if(err){
            console.log(err)
        }
    }
    
})