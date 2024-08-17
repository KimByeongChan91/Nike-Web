import { CSSProperties } from "react";
import { root } from "../root";

// 프로필 컨테이너
export const profileContainerStyle : CSSProperties = {
    width : root.viewWidth,
    height : root.viewHeight,
    backgroundColor : root.white,
    paddingTop : '70px',
    boxSizing : root.box_border,
    marginBottom : root.p5
}