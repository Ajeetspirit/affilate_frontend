let mail = document.querySelector('.mail');
let nme = document.querySelector('.name');
let phn = document.querySelector('.phn');
let pass = document.querySelector('.password');
let otp = document.querySelector('.otp');
let btn = document.querySelector('.submit');
let snackbar = document.querySelector('.snackbar');
let loader = document.querySelector('#loader')
let main = document.querySelector('main');
loader.style.visibility="hidden";
let value = document.querySelector('.value');
function preventBack() {
    window.history.forward(); 
}
  
setTimeout("preventBack()", 0);
  
window.onunload = function () { null };
window.history.forward();
function noBack() {
    window.history.forward();
}
btn.addEventListener('click',()=>{
    try{

        if(pass.value.length<6){

            snackbar.classList.add('show');
            value.innerHTML="Password should be contain 6 characters";
            setTimeout(()=>{
                snackbar.classList.remove('show');
               
            },2500) 

        }
        else{

            if(mail.value == "" && phn.value == "" ){
                snackbar.classList.add("show");
                value.innerHTML="Please Enter credentials";
                setTimeout(()=>{
                    snackbar.classList.remove('show')
                },3000)
            }

            else{
                let re =/@/i;
                
                let result = re.test(mail.value);
             
                if(result){
                    main.style.visibility="hidden";
        document.body.style.background = "black";
    loader.style.visibility="visible";
                let tm = new Date();
        let date = tm.getDate();
        let month = tm.getMonth();
        let yaer = tm.getFullYear();
        let hr = tm.getHours(); 
        let min = tm.getMinutes();
        let sec = tm.getSeconds();
      
        let device1 =this.navigator.appCodeName+this.navigator.appName+this.navigator.appVersion+" "+this.navigator.platform;
        
                let obj = {
                    Name:nme.value,
                    email:mail.value,
                    Phone:phn.value,
                    Password:pass.value,
                    time:`${date}-${month}-${yaer} :: ${hr}:${min}:${sec}`,
                    device:device1

                }
        
              if(btn.innerHTML == "Get-Otp"){  
                fetch('https://affilatebackend.tk/api/v1/register',{
                    method:"POST",
                    body: JSON.stringify(obj),
                    headers: { 'Content-Type': 'application/json' }
                })
                .then(resp=>resp.json())
                .then(json=>{

                    console.log(json);
                    if(json.status == "success"){
                        main.style.visibility="visible";
                        document.body.style.background = "white";
                    loader.style.visibility="hidden";
                        btn.innerHTML = "Submit";
                        snackbar.classList.add("show");
                        value.innerHTML=" Otp sends successfully";
                        setTimeout(()=>{
                            snackbar.classList.remove('show')
                            otp.readOnly = false;
                            mail.readOnly=true;
                            pass.readOnly=true;
                            phn.readOnly=true;
                            nme.readOnly=true;
                            window.localStorage.setItem('name_affiliate',`${json.User.Name}`)
                            otp.value= `${json.User.otp}`;
                        },4000)
                      
                        
                        

                    }
                    else{
                        main.style.visibility="visible";
                        document.body.style.background = "white";
                    loader.style.visibility="hidden";
                        snackbar.classList.add("show");
                        value.innerHTML=json.Error;
                        setTimeout(()=>{
                            snackbar.classList.remove('show')
                        },3000)

                    }

                })
            }

            else{

                main.style.visibility="hidden";
                document.body.style.background = "black";
            loader.style.visibility="visible";

                let obj = {
                    email:mail.value,
                    otp:otp.value
                }


                fetch('https://affilatebackend.tk/api/v1/verify',{
                    method:"POST",
                    body: JSON.stringify(obj),
                    headers: { 'Content-Type': 'application/json' }
                })

                .then(resp=>resp.json())
                .then(json=>{
                    console.log(json);
                    if(json.status == "success"){
                        main.style.visibility="visible";
                        document.body.style.background = "white";
                    loader.style.visibility="hidden";
                        snackbar.classList.add("show");
                        value.innerHTML=json.status;
                        setTimeout(()=>{
                            snackbar.classList.remove('show')
                            window.location.href="home-user_learnearn-affiliate-marketing_static.html"
                        },1000)
                    }
                    else{
                        main.style.visibility="visible";
                        document.body.style.background = "white";
                    loader.style.visibility="hidden";
                        snackbar.classList.add("show");
                        value.innerHTML=json.msg;
                        setTimeout(()=>{
                            snackbar.classList.remove('show')
                        },3000)
                    }
                })



            }

               


            }
            else{
                main.style.visibility="visible";
                document.body.style.background = "white";
            loader.style.visibility="hidden";
                snackbar.classList.add('show');
                      value.innerHTML="Please Enter valid Credentials";
                      setTimeout(()=>{
                          snackbar.classList.remove('show');
                      },2000) 
            }
        }
      
        }
        

    }
    catch(err){
        console.log(err)
    }
})
