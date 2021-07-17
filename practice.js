var firebaseConfig = {
    apiKey: "AIzaSyCbFamv6yK8qAFK7sov8oC3nkgGbY8C198",
    authDomain: "kwitterwebapp-16250.firebaseapp.com",
    projectId: "kwitterwebapp-16250",
    storageBucket: "kwitterwebapp-16250.appspot.com",
    messagingSenderId: "370540126686",
    appId: "1:370540126686:web:9cfbf471c42d36ee273d4f",
    measurementId: "G-FZLVFEEXX6",
    databaseURL: "https://kwitterwebapp-16250-default-rtdb.firebaseio.com/",
}; // Initialize Firebase 
firebase.initializeApp(firebaseConfig);
 function Enter() { user_name = document.getElementById("Text").value; firebase.database().ref("/").child(user_name).update({ purpose : "adding user" }); }