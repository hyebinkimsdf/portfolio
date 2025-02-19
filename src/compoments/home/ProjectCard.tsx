import { Link } from "react-router-dom";
import { useState } from "react";

interface ProjectCardProp {
  name: string;
  link: string;
  image: string;
  date: string;
}

export function ProjectCard({ name, link, image, date }: ProjectCardProp) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={link}>
      <div
        className="relative w-[280px] h-[380px] mx-auto sm:mx-2 my-4 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 배경 그라데이션 효과 */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transition-all duration-600 ${
            isHovered ? "filter hue-rotate-45" : ""
          }`}
        />

        {/* 글로우 효과 */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
            isHovered
              ? "opacity-30 shadow-[0_0_30px_rgba(88,80,236,0.5)]"
              : "opacity-0 shadow-none"
          }`}
        />

        {/* 메인 카드 */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          {/* 이미지 배경 */}
          <div
            className={`absolute inset-0 bg-black bg-cover bg-center transition-transform duration-300 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />

          {/* 블러 효과 추가된 오버레이 */}
          <div
            className={`absolute inset-0 bg-black bg-opacity-40 transition-all duration-300 ${
              isHovered
                ? "opacity-60 backdrop-blur-lg"
                : "opacity-30 backdrop-blur-none"
            }`}
          />

          {/* 움직이는 그라데이션 보더 */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transition-transform duration-800 ${
              isHovered
                ? "transform translate-x-[100%]"
                : "transform translate-x-[-100%]"
            }`}
          />

          {/* 콘텐츠 */}
          <div className="relative h-full flex flex-col items-center justify-center p-6">
            <div
              className={`text-center transition-transform duration-300 ${
                isHovered ? "-translate-y-2" : "translate-y-0"
              }`}
            >
              <p
                className="text-white text-xl font-bold mb-2"
                style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 1)" }}
              >
                {name}
              </p>

              <div
                className={`text-gray-300 text-sm transition-opacity duration-300 ${
                  isHovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                <p>{date}</p>
                <img
                  src="/images/tools/figma.png"
                  className="w-10 h-10 mx-auto mt-4 "
                />
                <p className="pt-4">View Project</p>
              </div>
            </div>
          </div>
        </div>

        {/* 장식용 도형들 */}
        <div
          className={`absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-[scale_1.5s_ease_in_out_infinite] ${
            isHovered ? "scale-150" : "scale-100"
          }`}
        />
        <div
          className={`absolute bottom-4 left-4 w-1 h-6 bg-white/30 rounded-full transition-all duration-300 ${
            isHovered ? "h-8" : "h-6"
          }`}
        />
      </div>
    </Link>
  );
}
