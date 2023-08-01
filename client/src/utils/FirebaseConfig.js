import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA6Fr2RRJq8XOjcm2MkURx-GH0OyIV6A3g",
    authDomain: "whatsapp-clone-984d4.firebaseapp.com",
    projectId: "whatsapp-clone-984d4",
    storageBucket: "whatsapp-clone-984d4.appspot.com",
    messagingSenderId: "703920132197",
    appId: "1:703920132197:web:4a8deacfd2d754a9ef368c",
    measurementId: "G-M7HLS3Z1W6"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)