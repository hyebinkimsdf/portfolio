import { useState, useEffect } from "react";

interface NavProps {
  // 기본 텍스트 색상
  textColor?: string;
  // 활성화된 항목의 색상
  activeColor?: string;
  // hover 시 색상
  hoverColor?: string;
  // 모바일에서 보여질 라인의 색상
  lineColor?: string;
  // 모바일에서 활성화된 라인 색상
  activeLineColor?: string;
  // 네비게이션 높이 (스크롤 오프셋용)
  navHeight?: number;
}

export function Nav({
  textColor = "text-white",
  activeColor = "text-blue-400",
  hoverColor = "text-gray-300",
  lineColor = "bg-white",
  activeLineColor = "bg-blue-400",
  navHeight = 80,
}: NavProps): React.ReactElement {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Back", "System", "UiUx"];
      const offset = navHeight;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 로드 시 확인

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navHeight]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset =
        element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "Back", text: "Back Ground" },
    { id: "System", text: "Design System" },
    { id: "UiUx", text: "UI/UX" },
  ];

  return (
    <nav className="fixed right-8 top-2/4 flex flex-col gap-4">
      {navItems.map(({ id, text }) => (
        <div key={id} className="flex items-center gap-2">
          <a
            href={`#${id}`}
            onClick={(e) => handleNavClick(e, id)}
            className={`
              hover:${hoverColor} transition-colors duration-200
              hidden md:block
              ${activeSection === id ? activeColor : textColor}
            `}
          >
            {text}
          </a>
          <a
            href={`#${id}`}
            onClick={(e) => handleNavClick(e, id)}
            className={`
              md:hidden w-8 h-[2px] block 
              transition-all duration-200
              ${activeSection === id ? `${activeLineColor} w-12` : lineColor}
              hover:w-12 hover:${hoverColor}
            `}
          >
            <span className="sr-only">{text}</span>
          </a>
        </div>
      ))}
    </nav>
  );
}
