import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    projectId: "guardianeye-ii6vn",
    appId: "1:1029555654232:web:1296376a5656e96d31c42d",
    storageBucket: "guardianeye-ii6vn.firebasestorage.app",
    apiKey: "AIzaSyDVIt_XYhH8wsXKaY2Nx25tFTIpISPBXdU",
    authDomain: "guardianeye-ii6vn.firebaseapp.com",
    messagingSenderId: "1029555654232",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
