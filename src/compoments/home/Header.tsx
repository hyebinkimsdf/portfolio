import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export function Header() {
  return (
    <div className="fixed top-0 left-0 w-full h-[10vh] max-h-[64px] bg-black text-white flex items-center justify-center z-50 opacity-90">
      <Link to="/" className="mx-4">
        Hyebin kim
      </Link>
      {/* react-scroll을 사용한 링크 */}
      <ScrollLink
        to="about" // about 섹션으로 스크롤
        smooth={true}
        duration={500} // 애니메이션 시간 (ms)
        className="mx-4 cursor-pointer"
      >
        about
      </ScrollLink>

      <ScrollLink
        to="ProjectList" // about 섹션으로 스크롤
        smooth={true}
        duration={500} // 애니메이션 시간 (ms)
        className="mx-4 cursor-pointer"
      >
        project
      </ScrollLink>
    </div>
  );
}
