import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth'; 

const firebaseConfig = {

  //testing
  // apiKey: "AIzaSyCTmFMUSQL_lvxZSGzihrx5G7AypB4Uk5Q",
  // authDomain: "testing-855ce.firebaseapp.com",
  // projectId: "testing-855ce",
  // storageBucket: "testing-855ce.appspot.com",
  // messagingSenderId: "1086229411180",
  // appId: "1:1086229411180:web:4a835dadcfb73b08a42f49" 
  
    //main
    apiKey: "AIzaSyDlnBpY-2AhQEq2G3KBkWWxWtP3SRYLmAM",
    authDomain: "mainbillingsoftware4.firebaseapp.com",
    projectId: "mainbillingsoftware4",
    storageBucket: "mainbillingsoftware4.appspot.com",
    messagingSenderId: "174898047126",
    appId: "1:174898047126:web:2937c0a0784d8a1c243ab7", 
  
  //main2
  // apiKey: "AIzaSyC7CD7ve78jS2k3a3XzkdlWwBGhp_9Lfg0",
  // authDomain: "billing-software2.firebaseapp.com",
  // projectId: "billing-software2",
  // storageBucket: "billing-software2.appspot.com",
  // messagingSenderId: "97163152398",
  // appId: "1:97163152398:web:b02de4e1e085efbca9c05f"

  //crashed
  // apiKey: "AIzaSyD4nUT-gdYQH4wHc0DWDM059afkM35awLg",
  // authDomain: "billingsoftware1-63ac7.firebaseapp.com",
  // projectId: "billingsoftware1-63ac7",                  
  // storageBucket: "billingsoftware1-63ac7.appspot.com",
  // messagingSenderId: "880378082734",
  // appId: "1:880378082734:web:6fa69ee70c13ab2b41443f"   


  //main 3
  // apiKey: "AIzaSyDH8o9iOyL5K0BlWn38Bmc1BN0beiAA-a0",
  // authDomain: "billing-software-3.firebaseapp.com",
  // projectId: "billing-software-3",
  // storageBucket: "billing-software-3.appspot.com",
  // messagingSenderId: "752627968861",
  // appId: "1:752627968861:web:4789d35435fb9e366956b4"  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
const storage = getStorage(app); 
const auth = getAuth(app); 
const firestore = getFirestore(app);
export { db, storage, auth , firestore}; 
