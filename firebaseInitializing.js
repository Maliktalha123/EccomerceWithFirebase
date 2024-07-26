import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";


const firebaseConfig = {
  apiKey: "AIzaSyCZeh77js6lHl96Ygt3rA73fkA-cxBFIVE",
  authDomain: "ecommerce-app-990cb.firebaseapp.com",
  projectId: "ecommerce-app-990cb",
  storageBucket: "ecommerce-app-990cb.appspot.com",
  messagingSenderId: "221661704221",
  appId: "1:221661704221:web:38c8eda07506a10b4256f4",
  measurementId: "G-9FNMYGXY4R",
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
