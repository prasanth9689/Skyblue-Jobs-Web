
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCzvt28IEDpKgI31LkcZjNJN3DBSjNLGW0",
      authDomain: "skyblue-jobs-web.firebaseapp.com",
      projectId: "skyblue-jobs-web",
      storageBucket: "skyblue-jobs-web.appspot.com",
      messagingSenderId: "840514246144",
      appId: "1:840514246144:web:2d313fbbb0588175ec2ae5",
      measurementId: "G-C4QZSK8KCY"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    // function for send OTP
function sendOTP() {
    var number = document.getElementById('mobile').value;
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        document.querySelector('.number-input').style.display = 'none';
        document.querySelector('.verification').style.display = '';
    }).catch(function (error) {
        // error in sending OTP
        alert(error.message);
    });
}
