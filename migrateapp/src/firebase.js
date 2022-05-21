import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUuHfUgXLx_z2TH-GefkM1HjwvUDkRe5s",
  authDomain: "migrate-auth.firebaseapp.com",
  projectId: "migrate-auth",
  storageBucket: "migrate-auth.appspot.com",
  messagingSenderId: "997662016949",
  appId: "1:997662016949:web:c386cf5098a6fe13fdc5fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
