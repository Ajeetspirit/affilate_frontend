

let id = document.querySelector('.mail');
let pass = document.querySelector('.pass');
let btn = document.querySelector('.btn');

let loader = document.querySelector('#loader');


let whole = document.querySelector('main');
console.log(whole)


loader.style.visibility="hidden";
   
 
        Notification.requestPermission(permission=>{
            if(permission == 'granted'){
                new Notification('Affilate_Marketing',{
                    body:"Welcome to Affliate Plateform"
                })
            }
        })
        
    
  


btn.addEventListener('click',async()=>{
  
    if(id.value == "" && pass.value == ""){
        let data = "Please Enter your credentials";
        window.alert(data)
    }
    else{
        whole.style.visibility="hidden";
        document.body.style.background = "black";
        loader.style.visibility="visible"
        let tm = new Date();
        let date = tm.getDate();
        let month = tm.getMonth();
        let yaer = tm.getFullYear();
        let hr = tm.getHours(); 
        let min = tm.getMinutes();
        let sec = tm.getSeconds();
      
        let device1 =this.navigator.appCodeName+this.navigator.appName+this.navigator.appVersion+" "+this.navigator.platform;
        let mail = id.value;
        let password=pass.value;
        let obj ={

            email:mail,
            password:password,
            time:`${date}-${month}-${yaer} :: ${hr}:${min}:${sec}`,
            device:device1

        }
      await  fetch('https://affilatebackend.tk/api/v1/login_affilate', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
          .then(json => {
              console.log(json)
             
            if(json.status =="success"){
                Notification.requestPermission(permission=>{
                    if(Notification.permission == "granted"){
                        new Notification('Affilate_Marketing',{
                            body:`Congratulation You successfully logged in`
                        })
                    }
                })
                
                whole.style.visibility="visible";
                document.body.style.background = "white";
               loader.style.visibility="hidden";
                window.location.href="home.html"

            }
      else{
          let error="Oops! Please Check your credentials. Otherwise Register on site";
          Notification.requestPermission(async(permission)=>{
            if(Notification.permission == "granted"){
                await new Notification('Affilate_Marketing',{
                    body:`${error}`
                })
              }
              window.alert(json.Error  || json.msg);
          })
         
          console.log(error)
          whole.style.visibility="visible";
        document.body.style.background = "white";
          loader.style.visibility="hidden";
      }
          });

        
    }
})