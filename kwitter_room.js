
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
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  function getData() {  firebase.database().ref("/").on('value',
  function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
     });
   });
 
 }
 
 getData();
 
 function redirectToRoomName(name)
 {
   console.log(name);
   localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
 }
 
 function logout() {
   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
       window.location = "index.html";
 }  
