import { initializeApp } from "firebase/app"; // 파이어베이스 초기화
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 파이어 베이스 연결 객체 타입
type ConfigType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

// 파이어 베이스 연결 객체
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig); // 앱을 초기화 후 파이어베이스 객체 반환
export const analytics = getAnalytics(app); // 파이어베이스 객체의 인스턴스를 생성

// 파이어베이스 데이터베이스 생성
export const db = getFirestore(app);

export const auth = getAuth(app); // auth객체를 생성
