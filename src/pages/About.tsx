import { useState } from "react";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-full mx-auto flex flex-col md:flex-row justify-center items-center gap-20 min-w-[300px] px-4 py-8 relative">
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
        <div className="border-t-[1px] border-zinc-600 my-4 pt-4">
          <p className="text-2xl mb-4 font-semibold ">주요 경력</p>
          <p className=" text-zinc-200 mb-1">
            요필 | 디자인팀 | UX/UI 디자이너 인턴 | 2024.06 ~ 2024.09
          </p>
          <p className="text-sm text-zinc-400 mb-2">
            - 네이버 고객센터 디자인 담당, 웹 아커머스, 커뮤니케이션 사이트 운영
          </p>
          <p className=" text-zinc-200 mb-1">
            핸디커뮤니케이션즈 | 개발팀 | 배너, UX/UI 디자이너 사원 | 2022.07 ~
            24.01
          </p>
          <p className="text-sm text-zinc-400">
            - 저시력자 App UI/UX 디자인 리드, 게임 UI 디자이너, 커뮤니티 이벤트
            배너 제작, 광고 배너 제작
          </p>
        </div>
        <div className="border-t-[1px] border-zinc-600  my-4 pt-4 flex flex-col gap-2">
          <p className="text-2xl mb-4 font-">학력 & 교육</p>
          <p className=" text-zinc-200 mb-1">
            JavaScript 웹 풀스택 프론트엔드 개발자 실무과정 3기 | 2024.01 ~
            2024.12
          </p>

          <p className=" text-zinc-200 mb-1">
            영산대학교 4년제 졸업 | 게임영상콘텐츠학과 | 2017.03 ~ 2023.02
          </p>
        </div>
      </div>
    </div>
  );
}
