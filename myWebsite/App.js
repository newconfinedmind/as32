import React, { createContext, useState,useEffect, useInsertionEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './IntroPage';
import UserInfoPage from './UserInfoPage';
import PhotoUploadPage from './PhotoUploadPage'; 
import DemoPage from './DemoPage';

import axios from 'axios';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase,update } from "firebase/database";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from './firebaseConfig'; 
import { ref as dbRef, push, set, get, child , onValue } from "firebase/database";
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FirebaseAppProvider, useFirebaseApp } from 'reactfire';
import { getFunctions } from "firebase/functions";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);  // <-- Add this line
const storage = getStorage(app);  // <-- Add this line
const functions = getFunctions(app);


export const AppContext = createContext(null);





const App = () => {
 

  const [photoInfo, setPhotoInfo] = useState({
    foodImage1: null,
    foodImage2: null,
    brandImage: null,
    restaurantOwnerImage1: null,
    restaurantOwnerImage2: null
  });
  const [userInfo, setUserInfo] = useState({
    restaurantName: '',
    restaurantDesc: '',
    firstName: '',
    firstClassNumber: '',
    secondName: '',
    secondClassNumber: '',
    menu1Name: '',
    menu1Desc: '존나 맛있어!!!',
    menu2Name: '',
    menu2Desc: '존나 맛있어!',
    phoneNumber: '010-9017-4013',
    instargramId: 'jangyunje71',
    address: ''
});



const [firebaseId, setFirebaseId] = useState('NXTDkcXyJWrQya_qNce');






// Send user info to Firebase Realtime Database
const sendDataToFirebase = async (userInfo) => {
  try {
    const usersRef = dbRef(database, 'users');
    const newRef = push(usersRef);
    await set(newRef, userInfo);
    console.log('Data sent to Firebase with ID:', newRef.key);
    console.log('newRef.key'+newRef.key)
    return newRef.key;
    
  } catch (error) {
    console.error('Error while sending data to Firebase:', error);
    throw error;
  }
};





const uploadAndSaveImage = async (userId, imageKey, imageFile) => {
  if (!imageFile) {
    console.error('No image file provided for key:', imageKey);
    return null;
  }

  // Upload image to Firebase Storage
  const imageRef = storageRef(storage, 'images/' + imageKey + '/' + imageFile.name);
  const uploadTask = uploadBytesResumable(imageRef, imageFile);

  // Retrieve and save download URL after upload
  const downloadURL = await new Promise((resolve, reject) => {
    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        console.error('Error uploading image:', error);
        reject(error);
      }, 
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        console.log('File available at', url);
        resolve(url);
      }
    );
  });

  // Save download URL to Firebase Realtime Database
  if (downloadURL) {
    const userImageRef = child(dbRef(database, 'users/' + userId), imageKey);
    await set(userImageRef, downloadURL);
    console.log('Image URL saved to Firebase with key:', imageKey);
}

  return null;
};



const submitUserInfo = async () => {
  try {
      // sendDataToFirebase 함수를 이용해 userInfo를 Firebase Realtime Database에 전송
      const id = await sendDataToFirebase(userInfo);
      // 전송이 성공적으로 이루어졌다면, Firebase ID를 상태로 저장
      setFirebaseId(id);
      return id;
      

  } catch (error) {
      console.error("Error submitting user info:", error);
  } 
};









const firebaseIdRef = dbRef(database, `users/${firebaseId}`);





const [userData, setUserData] = useState(null);
useEffect(() => {
  onValue(firebaseIdRef, (snapshot) => {firebaseId
    setUserData(snapshot.val());
    console.log('firebaseId useEffect/ modify userData')
  }, (errorObject) => {
    console.log("The read failed: " + errorObject.name);
  });
  if (firebaseId) {
    console.log('Firebase ID has been set:', firebaseId);
    // 여기에 firebaseId가 설정된 후에 실행해야 하는 코드를 넣으세요.
  }

}, [firebaseId]); 




useEffect(() => {
  console.log('useEffect to userData, print');
  console.log(userData);

}, [userData]);
















    return (
      <FirebaseAppProvider firebaseApp={app}>
      <AppContext.Provider value={{ photoInfo, setPhotoInfo, userInfo,setUserInfo, uploadAndSaveImage,submitUserInfo,firebaseId,setFirebaseId, userData}}>
        <Router>
            <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/userinfo" element={<UserInfoPage />} />
                <Route path="/photoUpload" element={<PhotoUploadPage />} />
                <Route path="/demo" element={<DemoPage />} />
               </Routes>
        </Router>
        </AppContext.Provider>
        </FirebaseAppProvider>
    );
}

export default App;
