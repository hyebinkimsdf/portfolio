import About from "./About";
import { ProjectList } from "./ProjectList";

export default function Home() {
  return (
    <div className="w-full h-auto relative overflow-auto">
      {/* 히어로 섹션 */}
      <div className="relative w-full min-h-screen">
        {/* 배경 비디오 (히어로 섹션 안에만) */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
          src="/videos/main-bg-simple.mp4"
          autoPlay
          loop
          muted
        />
        <div className="bg-white opacity-80 absolute top-0 left-0 w-full h-full"></div>

        {/* 콘텐츠 */}
        <div className="relative flex flex-col items-center justify-center min-h-screen gap-4 z-10">
          <p className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            안녕하세요
          </p>
          <p className="text-center mt-4">
            개발자와 디테일한 소통이 가능하며 3D 구현에 능숙한 <br /> UX/UI
            디자이너 김혜빈 포트폴리오 사이트입니다!
          </p>
        </div>
      </div>

      <div className="bg-black min-h-screen flex items-center justify-center">
        <About />
      </div>
      <ProjectList />
    </div>
  );
}
