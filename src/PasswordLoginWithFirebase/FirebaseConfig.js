// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCAHj-EAE2k-RwJ52L8Aw2lwoo6kOioutc",
//   authDomain: "emailpasswordlogin-34511.firebaseapp.com",
//   projectId: "emailpasswordlogin-34511",
//   storageBucket: "emailpasswordlogin-34511.appspot.com",
//   messagingSenderId: "425179376459",
//   appId: "1:425179376459:web:3d4c76da07367eb60e96ce",
//   measurementId: "G-SYJ11QEWN8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// // Export the Firebase authentication module and other modules as needed
// export { auth };




import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCAHj-EAE2k-RwJ52L8Aw2lwoo6kOioutc",
    authDomain: "emailpasswordlogin-34511.firebaseapp.com",
    projectId: "emailpasswordlogin-34511",
    storageBucket: "emailpasswordlogin-34511.appspot.com",
    messagingSenderId: "425179376459",
    appId: "1:425179376459:web:3d4c76da07367eb60e96ce",
    measurementId: "G-SYJ11QEWN8"
  };

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { database };
