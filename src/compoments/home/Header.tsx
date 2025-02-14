import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useEffect, useState } from "react";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const element = location.hash.replace("#", "");
      scroller.scrollTo(element, {
        duration: 500,
        smooth: true,
        offset: -58,
      });
      // 스크롤 후 해시 제거
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  const handleLogoClick = (e: { preventDefault: () => void }) => {
    if (location.pathname === "/") {
      e.preventDefault();
      setKey((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      // 해시 제거
      navigate("/", { replace: true });
    }
  };

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === "/") {
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
        offset: -58,
      });
      // 스크롤 후 해시 제거
      navigate("/", { replace: true });
    } else {
      // 다른 페이지에서 올 때는 해시 유지
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[10vh] max-h-[64px] bg-black text-white flex items-center justify-center z-50 opacity-90">
      <div>
        <Link to="/" className="mx-4" onClick={handleLogoClick} key={key}>
          Hyebin kim
        </Link>
      </div>

      <div
        className="mx-4 cursor-pointer"
        onClick={() => handleNavigation("about")}
      >
        about
      </div>

      <div
        className="mx-4 cursor-pointer"
        onClick={() => handleNavigation("ProjectList")}
      >
        project
      </div>
    </div>
  );
}
