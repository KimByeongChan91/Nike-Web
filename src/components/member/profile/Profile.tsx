import { profileContainerStyle } from "../../../style/member/profile";

// 프로필 페이지
const Profile: React.FC = () => {
  return (
    <section style={profileContainerStyle}>
      {/* 상단 라벨 */}
      <div className="w-full h-[10vh] bg-black text-white text-center content-center text-lg font-semibold tracking-widest">
        나이키의 멤버가 되어 혜택을 누려보세요!
      </div>
      {/* 프로필 정보 */}
      <div className="w-full h-[30vh] flex justify-between items-center px-24">
        <div className="w-fit h-fit flex flex-col gap-4">
          {/* 멤버 이름 */}
          <h1 className="text-3xl font-semibold">김민서 님</h1>
          {/* 나이키 멤버 가입 */}
          <div className="text-gray-500">
            <span>나이키 멤버 가입 : </span>
            <span>2024.03</span>
          </div>
        </div>
        <div className="w-fit h-fit flex flex-col gap-4">
          <span className="w-[100px] h-fit py-2 px-4 bg-black text-white font-semibold rounded-md cursor-pointer text-center">
            로그아웃
          </span>
          <span className="w-[100px] h-fit py-2 px-4 bg-black text-white font-semibold rounded-md cursor-pointer text-center">
            수정
          </span>
        </div>
      </div>
      {/* 멤버 혜택 */}
      <div className="w-full h-fit px-24">
        <h1 className="text-xl py-4">멤버 혜택</h1>
        <div className="w-full h-[50vh] whitespace-nowrap content-center">
          <div className="inline-block w-[20vw] h-[90%] bg-black mr-12"></div>
          <div className="inline-block w-[20vw] h-[90%] bg-black mr-12"></div>
          <div className="inline-block w-[20vw] h-[90%] bg-black mr-12"></div>
          <div className="inline-block w-[20vw] h-[90%] bg-black mr-12"></div>
          <div className="inline-block w-[20vw] h-[90%] bg-black mr-12"></div>
          <div className="inline-block w-[20vw] h-[90%] bg-black mr-12"></div>
          <div className="inline-block w-[20vw] h-[90%] bg-black mr-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
