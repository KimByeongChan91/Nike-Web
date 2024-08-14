import { Link } from "react-router-dom"; // 라우트
import { headerNaviData, headerDetailsData } from "../data/headerData"; // 샘플데이터
import {
  // 스타일 시트
  headerStyle,
  headerLogoStyle,
  headerNaviStyle,
  headerNaviListStyle,
  headerLeftContentStyle,
  headerDetailsListStyle,
} from "../style/components/headerStyle";

const Header: React.FC = () => {
  // 헤더 메뉴 (네비게이트) 렌더링
  const naviElements = headerNaviData.map(
    (data: string, i: number): JSX.Element => {
      return (
        // to={`/${data}`} : 라우트 경로를 지정
        <Link key={i} to={`/${data}`} style={headerNaviListStyle}>
          {i === 0 ? "Home" : data}
        </Link>
      );
    }
  );

  // 헤더 상세메뉴 렌더링
  const detailsElements = headerDetailsData.map(
    (data: string, i: number): JSX.Element => {
      return (
        // to={`/${data}`} : 라우트 경로를 지정 + 해당 페이지의 각 컨텐츠로 즉시 이동을 구현해야함
        <Link key={i} to={`/${data}`} style={headerDetailsListStyle}>
          {data}
        </Link>
      );
    }
  );

  return (
    <header style={headerStyle}>
      <div style={headerLeftContentStyle}>
        <img
          style={headerLogoStyle}
          src="/image/logo/Nike-Logo.png"
          alt="NIKE LOGO"
        />
        <ul style={headerNaviStyle}>{naviElements}</ul>
      </div>
      <div style={headerNaviStyle}>{detailsElements}</div>
    </header>
  );
};

export default Header;
