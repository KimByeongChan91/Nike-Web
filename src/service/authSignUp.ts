import {
  createUserWithEmailAndPassword, // 회원가입메서드
} from "firebase/auth";
import { auth, db } from "./db";
import { saveUserProfile } from "./controller";

// 유저 데이터 타입
export type UserDataType = {
  email: string;
  password: string;
};

// 사용자 회원가입
export function signUp(email: string, password: string, name: string) {
  // 전달받은 사용자의 입력값을 인수로 전달하여 auth객체에서 관리
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // 사용자 생성 성공 시, Firestore에 사용자 정보 저장
      const user = userCredential.user;
      // 타입 검사 후 유저 데이터 저장
      user.email && saveUserProfile(user.uid, name, user.email);
      window.alert(`${name}님 환영합니다!`); // 성공 시 환영 메시지
      window.location.reload(); // 재 로드하여 로그인으로 이동
    })
    .catch((error) => {
      // 실패 시 응답코드 , 메시지 출력
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("회원가입 에러 발생 : ", errorCode, errorMessage);
    });
}
