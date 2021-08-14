
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDV5q83lpYq8fhr-L0wak-jPIzUeGL3jbo",
      authDomain: "let-s-chat-bbf36.firebaseapp.com",
      databaseURL: "https://let-s-chat-bbf36-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-bbf36",
      storageBucket: "let-s-chat-bbf36.appspot.com",
      messagingSenderId: "979918357175",
      appId: "1:979918357175:web:b2d880a0102c8e83af8332"
    };
    firebase.initializeApp(firebaseConfig);

    var user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !! "+"Your signed in "+"so get chatting";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Rooms -"+Room_names);
      row="<div class='room_name'id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addroom(){
      roomname= document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(roomname).update({
            purpose:"add room name"
      })
      localStorage.setItem("room_name", roomname);
      window.location="room_page.html";
      }
      
      function redirecttoroomname(name){
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location="room_page.html";
      }