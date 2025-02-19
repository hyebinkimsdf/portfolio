import { useState, useEffect } from "react";

export function Nav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Back", "System", "UiUx"];
      const offset = 80; // 네비게이션 높이 + 추가 여백

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
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // GNB 높이 고려 (필요에 따라 조정)
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
    <nav className="fixed right-8 top-2/4 flex flex-col gap-4 text-white">
      {navItems.map(({ id, text }) => (
        <div key={id} className="flex items-center gap-2">
          <a
            href={`#${id}`}
            onClick={(e) => handleNavClick(e, id)}
            className={`
              hover:text-gray-300 transition-colors duration-200 
              hidden md:block
              ${activeSection === id ? "text-blue-400" : ""}
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
              ${activeSection === id ? "bg-blue-400 w-12" : "bg-white"}
              hover:w-12 hover:bg-gray-300
            `}
          >
            <span className="sr-only">{text}</span>
          </a>
        </div>
      ))}
    </nav>
  );
}
