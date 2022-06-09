var firebaseConfig = {
    apiKey: "AIzaSyAurtfmVS3pVwhJ48_WEEWFX-ahL2SpGBg",
    authDomain: "lets-chat-web-app-ac411.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-ac411-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-ac411",
    storageBucket: "lets-chat-web-app-ac411.appspot.com",
    messagingSenderId: "1083484296493",
    appId: "1:1083484296493:web:ac31b2021a8488a1aeafa4"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
