var firebaseConfig = {
  apiKey: "AIzaSyCRDDV1l730y2g25hqvP-OvnIXo09eEPwA",
  authDomain: "chatblox-b784b.firebaseapp.com",
  databaseURL: "https://chatblox-b784b-default-rtdb.firebaseio.com",
  projectId: "chatblox-b784b",
  storageBucket: "chatblox-b784b.appspot.com",
  messagingSenderId: "797169000505",
  appId: "1:797169000505:web:8958b6ed5e277887786de8"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code















  //End code
  });});}
getData();