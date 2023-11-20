// Import the functions you need from the SDKs you need
import { firebaseConfig } from "./config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

//Getting all the HTML objects
var email = document.getElementById("email");
var password = document.getElementById("password");

//Signup function
window.signup = function (e) {
    e.preventDefault();

    var obj = {
        email: email.value,
        password: password.value
    };

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
            var doneElement = document.getElementById("done");

            // Set visibility to visible with a transition effect
            doneElement.style.visibility = "visible";
            doneElement.style.transition = "visibility 2s ease-in";

            setTimeout(function () {
                window.location.href = "./login.html";
            }, 2000);
        }).catch(function (err) {
            alert("error" + err)
        });
};

// login function
window.login = function (e) {
    e.preventDefault();

    var obj = {
        email: email.value,
        password: password.value
    };

    signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
            var doneElement = document.getElementById("done");

            // Set visibility to visible with a transition effect
            doneElement.style.visibility = "visible";
            doneElement.style.transition = "visibility 2s ease-in";

            setTimeout(function () {
                window.location.href = "./main-channel.html";
            }, 2000);
        }).catch(function (err) {
            window.location.replace('./signup.html')
            alert("error" + err)
        });
    console.log(obj);
}

// window.logout = function (e) {
//     e.preventDefault();

//     var obj = {
//         email: email.value,
//         password: password.value
//     };

//     signOut(auth)
//         .then(function (success) {
//             alert("Logout Successful")
//             window.location.replace('../login.html')
//             // alert("Login successful.")
//         })
//         .catch(function (err) {
//             // window.location.replace('../signup.html')
//             alert("error" + err)
//         });
//     console.log(obj);
// }



// document.getElementById("logout").addEventListener("click", function () {
//     signOut(auth).then(() => {
//         // Sign-out successful.
//         console.log('Sign-out successful.');
//         alert('Sign-out successful.');
//         window.location.replace('./index.html');
//         //document.getElementById('logout').style.display = 'none';
//     }).catch((error) => {
//         // An error happened.
//         console.log('An error happened.');
//     });
// });
