let firebaseConfig = {
    // enter your firebase credentials here.
    apiKey: "AIzaSyA-1lgHaFxRjz-8aQLbL_4pFGv6VNfyZJw",
    authDomain: "feed-your-camera-5b826.firebaseapp.com",
    projectId: "feed-your-camera-5b826",
    storageBucket: "feed-your-camera-5b826.appspot.com",
    messagingSenderId: "559981113178",
    appId: "1:559981113178:web:0c5a018799cec700348d63"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}