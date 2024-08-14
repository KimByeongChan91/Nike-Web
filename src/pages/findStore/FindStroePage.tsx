import { useState } from "react";
import Header from "../../components/Header";
import FindStore from "../../components/search/FIndStore";
import KakaoMap2 from "../../components/map/MapSearch";

const FindStorePage = () => {
  return (
    <div>
      <Header />
      <div className="flex-1">
        <FindStore />
      </div>
    </div>
  );
};

export default FindStorePage;
