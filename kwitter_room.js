//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBZZjioLy11BsLUi1NqebG6oukhgXDn06s",
      authDomain: "lets-chat-2-5efef.firebaseapp.com",
      databaseURL: "https://lets-chat-2-5efef-default-rtdb.firebaseio.com",
      projectId: "lets-chat-2-5efef",
      storageBucket: "lets-chat-2-5efef.appspot.com",
      messagingSenderId: "595840814021",
      appId: "1:595840814021:web:c1e0d823eae15b7d1fd9ac",
      measurementId: "G-3X1S0DKVP5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    UserName = localStorage.getItem("Human");
    document.getElementById("UserName").innerHTML = "Welcome " + UserName 
    
    function AddRoom() {
        var Room_name = document.getElementById("Room_Name").value;
        firebase.database().ref("/").child(UserName).update({
              purpose: "adding user"
        });
    localStorage.setItem("Room_Name",Room_name);
     window.location="kwitterpage.html"
    };
    
    function getData() {
        firebase.database().ref("/").on('value',
              function (snapshot) {
                    document.getElementById("output").innerHTML = "";
                    snapshot.forEach(function (childSnapshot) {
                          childKey = childSnapshot.key;
                          Room_names = childKey;
                          //Start code
                          console.log("Room Name_ " + Room_names);
                          row = "<div class = 'room_name' id=" + Room_names + "onClick='redirectToRoomName(this.id)'>#" + Room_names + "<div><hr>";
                          document.getElementById("output").innerHTML=row
                          //End code
                    });
              });
    }
    getData();
    function redirectToRoomName(Name){
    console.log(Name);
    localStorage.setItem("Room Name",Name)
    window.location="kwitterpage.html"
    }
    