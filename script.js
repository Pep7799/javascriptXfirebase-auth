//from your created firebase account(not same for people::: change)
   const firebaseApp = firebase.initializeApp({ 
      apiKey: "AIzaSyBSZv_VneXtrS0bS4KwGKU9bL0fOOP5OtE",
      authDomain: "javascript-auth-481db.firebaseapp.com",
      databaseURL: "https://javascript-auth-481db-default-rtdb.firebaseio.com",
      projectId: "javascript-auth-481db",
      storageBucket: "javascript-auth-481db.appspot.com",
      messagingSenderId: "20401056632",
      appId: "1:20401056632:web:0a8f7cb7d09365be4ef68d"

    });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

    //creating the signUp function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.replace("newpage.html")
            console.log(result)
            // ...
        })
        .catch((error) => {
            document.write(error.code);
            console.log(error.message)
            // ..
        });
}


//creating the signIn function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
            // Signed in 
            window.location.replace("newpage.html")
            console.log(result)
            // ...
        })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });


}

