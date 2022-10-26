
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDvRG97-CizYcdoKMd1sG2BxF8-Clfu_oU",
      authDomain: "kwitter-6108a.firebaseapp.com",
      databaseURL: "https://kwitter-6108a-default-rtdb.firebaseio.com",
      projectId: "kwitter-6108a",
      storageBucket: "kwitter-6108a.appspot.com",
      messagingSenderId: "77602406286",
      appId: "1:77602406286:web:f1bbf40d91a358fa272edf"
    };
user_name = localStorage.getItem("user_name");


firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row = "<div class = 'room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr >";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

document.getElementById("user_name").innerHTML = "welcome " + user_name + " :)";


function addroom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";

}

function redirectToRoomName(name) {

console.log(name);
localStorage.setItem("room_name", name);
window.localStorage = "kwitter_page.html";
}










