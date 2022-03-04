// jQiuery [
// Function to load the navigation bar onto #main-menu id tag in html files.
$(function(){
    $('#main-menu').load('../common/navbar.html');
})


// Function to load the footer bar onto #footer id tag in html files.
$(function(){
    $('#footer').load('../common/footer.html');
})

// End of jQuery ]

// Import statements for google firebase
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = { // firebase configuration
    apiKey: "AIzaSyBtGCpj_U1npZDhfqxcDCc9OJSctmdAyjs",
    authDomain: "quizmaster-59d76.firebaseapp.com",
    projectId: "quizmaster-59d76",
    storageBucket: "quizmaster-59d76.appspot.com",
    messagingSenderId: "377976689617",
    appId: "1:377976689617:web:0b5f7e7c9d08b5a4aa46f0"
  };

initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();


//signing users up (Automatically logs user in as soon as he/she signs in)
if(document.querySelector('.sign-up')){
    const signupForm = document.querySelector('.sign-up');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const email = signupForm.email.value;
        const password = signupForm.password.value;


        createUserWithEmailAndPassword(auth, email, password)
        .then(cred => {
            alert('user created and signed in');
            console.log('user created:', cred.user)
            signupForm.reset()
        })
        .catch(err => {
            alert(err.message);
        })
    })
} else {
    //console.log("This page does not contain sing-up class, or not in sign up page") ;
}

//logging out
setTimeout(() => {  
    const logoutButton = document.querySelector('.sign-out');
    logoutButton.addEventListener('click', () => {
      signOut(auth)
        .then(() => {
            alert('signed out');
            console.log('user signed out');
        })
        .catch(err => {
            console.log(err.message);
        })
    })
}, 2000);

// logging in
if(document.querySelector('.log-in')){
    const loginForm = document.querySelector('.log-in');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const email = loginForm.email.value;
        const password = loginForm.password.value;

        signInWithEmailAndPassword(auth, email, password)
        .then(cred => {
            alert("logged in");
            console.log('user logged in:', cred.user)
            loginForm.reset()
        })
        .catch(err => {
            console.log(err.message)
        })
    })
}else{
    //console.log("This page does not contain login class, or not in sign in page");
}

// Tracks whether user is logged in or not (tracks state). 
onAuthStateChanged(auth, (user)=>{
    console.log("user status changed:, ", user);
    if(user){
        setupUserUI(user);
    }else{
        setupUserUI(null);
    }
})

// Hide menu options depending if user is logged out or in.

const setupUserUI = (user) =>{
    const loggedOutLinks = document.querySelectorAll(".logged-out");
    const loggedInLinks = document.querySelectorAll(".logged-in");

    if(user){
        console.log("setupUserUI, logged in.");
        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = "block");
        loggedOutLinks.forEach(item => item.style.display = "none");
    }else{
        console.log("setupUserUI, not logged in.");
        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = "none");
        loggedOutLinks.forEach(item => item.style.display = "block");
    }
}

// END OF FIREBASE SECTION

