const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function HLBClick(Event){
  Event.preventDefault();
 const username = loginInput.value
 localStorage.setItem(USERNAME_KEY,username);
  
loginForm.classList.add("hidden");
paintGreetings(username);
}


loginForm,addEventListener("submit",HLBClick);


function paintGreetings(username){
  greeting.innerText =`hello  ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm,addEventListener("submit",HLBClick);
}else{
  
  paintGreetings(savedUsername);
}