function adduser(){

user_name= document.getElementById("user_name").value;

document.getElementById("loading_icon").style.visibility = "visible";

localStorage.setItem("user_name",user_name);

window.location="Let's-Chat.html";

}