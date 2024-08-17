import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { db } from "./db";

// 유저 데이터 생성 및 데이터베이스 추가 - 회원가입
export function saveUserProfile(id: string, name: string, email: string) {
  const usersCollection = collection(db, "users"); // users 컬렉션 생성 후 반환

  // Firestore에 사용자 정보 추가
  addDoc(usersCollection, {
    id: id, // 유저 아이디
    name: name, // 이름
    email: email, // 이메일
  })
    .then((docRef) => {
      // 유저 데이터를 성공적으로 추가하였을 떄 해당 유저 아이디를 출력
      console.log("추가된 유저의 아이디: ", docRef.id);
    })
    .catch((error) => {
      // 추가 실패 시 에러 발생 출력
      console.error("에러 발생 : ", error);
    });
}

// Firestore에서 특정 이메일과 비밀번호로 데이터 읽기
async function getData(email: string, password: string) {
  // "users"라는 컬렉션에서 이메일과 비밀번호가 일치하는 문서 찾기
  const q = query(
    collection(db, "users"),
    where("email", "==", email),
    where("password", "==", password)
  );

  // 쿼리 실행
  const querySnapshot = await getDocs(q);

  // 검색 결과 출력
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

  // 결과가 없을 경우 처리
  if (querySnapshot.empty) {
    console.log("해당 이메일과 비밀번호로 일치하는 사용자가 없습니다.");
  }
}
