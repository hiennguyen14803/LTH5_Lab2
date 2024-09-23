// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAhO_p12kcaiIPschLgPwErTIGOTJawA9w",
    authDomain: "fblab2-3a91e.firebaseapp.com",
    projectId: "fblab2-3a91e",
    storageBucket: "fblab2-3a91e.appspot.com",
    messagingSenderId: "328927292292",
    appId: "1:328927292292:web:7101c52823ec715b030bd1",
    measurementId: "G-0TMRRKCTQ5"
  };

// Khởi tạo Firebase app
const app = initializeApp(firebaseConfig);

// Khởi tạo Firebase Auth với AsyncStorage persistence
const auth = getAuth(app);

// Nếu không cần dùng AsyncStorage hoặc không cần cấu hình persistence cụ thể
export { auth };