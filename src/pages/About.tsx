import { useState } from "react";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-full mx-auto flex flex-col md:flex-row justify-center items-center gap-20 min-w-[550px] px-4 py-8 relative">
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 이미지 카드 */}
        <div
          className={`absolute inset-0 bg-blue-500 opacity-0 rounded-lg transition-opacity ${
            isHovered ? "opacity-20 shadow-[0_0_30px_rgba(59,130,246,0.5)]" : ""
          }`}
        />
        <img
          src="/images/home/kimhyebinPoto.png"
          className="mb-4 md:mb-0 relative z-10 rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-col text-white gap-2">
        <div className="relative">
          <p className="text-4xl font-bold sm:text-5xl md:text-4xl mb-2 transition-transform duration-200 group-hover:scale-105">
            김혜빈
          </p>

          <p className="opacity-50 text-sm text-start w-full">
            개발자와 디테일한 소통이 가능하며 3D 구현에 능숙한 UX/UI 디자이너
          </p>
          {/* 파란색 줄 */}
          <div
            className={`absolute left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ${
              isHovered ? "w-full" : ""
            }`}
          />
        </div>

        {/* 연락처 아이템들 */}
        {[
          { icon: "phone", text: "010-3967-1421", link: "tel:010-3967-1421" },
          {
            icon: "email",
            text: "hyebinkimdesign@gmail.com",
            link: "mailto:hyebinkimdesign@gmail.com",
          },
          {
            icon: "github",
            text: "github.com/hyebinkimsdf",
            link: "https://github.com/hyebinkimsdf",
          },
        ].map((item) => (
          <a
            key={item.icon}
            href={item.link}
            target={item.icon === "github" ? "_blank" : undefined}
            rel={item.icon === "github" ? "noopener noreferrer" : undefined}
            className="flex gap-2 items-center group cursor-pointer transition-transform duration-200 hover:translate-x-1"
          >
            {/* 아이콘 회전 애니메이션 */}
            <div
              className={`relative mt-2 transition-transform duration-500 ${
                isHovered ? "rotate-[360deg]" : ""
              }`}
            >
              <img
                src={`/icons/${item.icon}.svg`}
                className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="group-hover:text-blue-300 transition-colors">
              {item.text}
            </p>
          </a>
        ))}
      </div>

      {/* 배경 그라디언트 효과 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/5 to-transparent opacity-20 pointer-events-none" />
    </div>
  );
}
