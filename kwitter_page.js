var firebaseConfig = {
    apiKey: "AIzaSyB6eWwDkyjBnB9Kox0IfXnM8NQAlyUXokA",
    authDomain: "helloapp-3f72f.firebaseapp.com",
    projectId: "helloapp-3f72f",
    storageBucket: "helloapp-3f72f.appspot.com",
    messagingSenderId: "302567397310",
    appId: "1:302567397310:web:f0fe499246fe8c5acecbef"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    }
    );
    document.getElementById("msg").value="";
}

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
}
