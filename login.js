

let id = document.querySelector('.mail');
let pass = document.querySelector('.pass');
let btn = document.querySelector('.btn');
let register = document.querySelector('.register');
let loader = document.querySelector('#loader');
let snackbar = document.querySelector('.snackbar');
let input = document.querySelector('input');
let value = document.querySelector('.value');

let whole = document.querySelector('main');
loader.style.visibility="hidden";
window.history.forward();
function noBack() {
    window.history.forward();
}

 
btn.addEventListener('click',()=>{
    if(pass.value.length<6 ){
        snackbar.classList.add('show');
        value.innerHTML="Password should be contain 6 characters";
        setTimeout(()=>{
            snackbar.classList.remove('show');
           
        },2500) 
    }
    else{
    if(id.value == "" && pass.value == ""){
        snackbar.classList.add('show');
        value.innerHTML="Please Enter your Credentials";
        setTimeout(()=>{
            snackbar.classList.remove('show');
           
        },2000) 
    }
    else{
        let re =/@/i;
        let result = re.test(id.value);
        if(result){
        whole.style.visibility="hidden";
        document.body.style.background = "black";
        
        register.style.visibility="hidden";
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
   fetch('https://affilatebackend.tk/api/v1/login_affilate', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
          .then(json => {
              console.log(json)
             
            if(json.status =="success"){
            
                
                whole.style.visibility="visible";
                document.body.style.background = "white";
                register.style.visibility="visible";
               loader.style.visibility="hidden";
               
                snackbar.classList.add('show');
                value.innerHTML=json.Login;
                
                
                
                setTimeout(()=>{
                    snackbar.classList.remove('show');
                    let name_localStorage = localStorage.getItem('name_affiliate');
                if(!name_localStorage){
                    window.localStorage.setItem('name_affiliate',`${json.Name}`);
                }
                    window.location.href="home-user_learnearn-affiliate-marketing_static.html"
                   
                },1000) 

            }
      else{
         
          whole.style.visibility="visible";
        document.body.style.background = "white";
        register.style.visibility="visible";
          loader.style.visibility="hidden";
          snackbar.classList.add('show');
          value.innerHTML=json.Error;
          setTimeout(()=>{
              snackbar.classList.remove('show');
          },2000) 
      }
          
});
        
    }
    else{
        whole.style.visibility="visible";
        document.body.style.background = "white";
        register.style.visibility="visible";
          loader.style.visibility="hidden";
        snackbar.classList.add('show');
              value.innerHTML="Please Enter valid email address";
              setTimeout(()=>{
                  snackbar.classList.remove('show');
              },2000) 
    }
    }

}
})



// input.addEventListener('keypress',(event)=>{
//     if(event.keyCode === 13){
      
//         if(pass.value.length<6 ){
//             snackbar.classList.add('show');
//             value.innerHTML="Password should be contain 6 characters";
//             setTimeout(()=>{
//                 snackbar.classList.remove('show');
               
//             },2500) 
//         }
    
    
//         else{
            
//         if(id.value == "" && pass.value == ""){
//             snackbar.classList.add('show');
//             value.innerHTML="Please Enter your Credentials";
//             setTimeout(()=>{
//                 snackbar.classList.remove('show');
               
//             },2000) 
//         }
    
//         else{
//             if(event.keyCode === 13){
//             whole.style.visibility="hidden";
//             document.body.style.background = "black";
//             register.style.visibility="hidden";
//             loader.style.visibility="visible"
//             let tm = new Date();
//             let date = tm.getDate();
//             let month = tm.getMonth();
//             let yaer = tm.getFullYear();
//             let hr = tm.getHours(); 
//             let min = tm.getMinutes();
//             let sec = tm.getSeconds();
          
//             let device1 =this.navigator.appCodeName+this.navigator.appName+this.navigator.appVersion+" "+this.navigator.platform;
//             let mail = id.value;
//             let password=pass.value;
//             let obj ={
    
//                 email:mail,
//                 password:password,
//                 time:`${date}-${month}-${yaer} :: ${hr}:${min}:${sec}`,
//                 device:device1
    
//             }
//        fetch('https://affilatebackend.tk/api/v1/login_affilate', {
//                 method: 'POST',
//                 body: JSON.stringify(obj),
//                 headers: { 'Content-Type': 'application/json' }
//             })
//             .then(resp => resp.json())
//               .then(json => {
//                   console.log(json)
                 
//                 if(json.status =="success"){
                
                    
//                     whole.style.visibility="visible";
//                     document.body.style.background = "white";
                    
//                    loader.style.visibility="hidden";
                   
//                     snackbar.classList.add('show');
//                     value.innerHTML=json.Login;
                    
                    
                    
//                     setTimeout(()=>{
//                         snackbar.classList.remove('show');
//                         let name_localStorage = localStorage.getItem('name_affiliate');
//                     if(!name_localStorage){
//                         window.localStorage.setItem('name_affiliate',`${json.User.Name}`);
//                     }
//                         window.location.href="home-user_learnearn-affiliate-marketing_static.html"
                       
//                     },1000) 
    
//                 }
//           else{
             
//               whole.style.visibility="visible";
//             document.body.style.background = "white";
//               loader.style.visibility="hidden";
//               snackbar.classList.add('show');
//               value.innerHTML=json.Error;
//               setTimeout(()=>{
//                   snackbar.classList.remove('show');
//               },2000) 
//           }
              
//     });
            
//         }
//     }
//     }

//     }
// })