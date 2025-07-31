import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
    import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
    import { initializeApp } from 'firebase/app'; 

// Firebase configs
/*const firebaseConfig = {
  apiKey: "AIzaSyBWnG5WI_P8bsqRi7GOstnNJQcHsrWWbDQ",
  authDomain: "tapslot-4f502.firebaseapp.com",
  projectId: "tapslot-4f502",
  storageBucket: "tapslot-4f502.firebasestorage.app",
  messagingSenderId: "1036695448635",
  appId: "1:1036695448635:web:d4c3edf2fa104f7185801e"
};*/


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCALVcsa3NFvbM_vnK7n58K7qmZnoNCKak",
  authDomain: "tapslot-827fe.firebaseapp.com",
  databaseURL: "https://tapslot-827fe-default-rtdb.firebaseio.com",
  projectId: "tapslot-827fe",
  storageBucket: "tapslot-827fe.firebasestorage.app",
  messagingSenderId: "999294971094",
  appId: "1:999294971094:web:f8cf2a74e6293b4e14ad77",
  measurementId: "G-BBLG0TWLJ2"
};

const app = initializeApp(firebaseConfig);
//Initializing firebase Auth with persistence
export const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

