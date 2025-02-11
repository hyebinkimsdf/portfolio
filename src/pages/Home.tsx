import { Link } from "react-router-dom";
import { ProjectCard } from "../compoments/home/ProjectCard";

export default function Home() {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* 배경 비디오 */}

      <video
        className="absolute top-0 left-0 w-full h-full object-cover "
        src="/videos/main-bg-simple.mp4"
        autoPlay
        loop
        muted
      />
      <div className="bg-white opacity-70 absolute w-screen h-screen"></div>
      {/* 카드 컴포넌트 (비디오 위에 배치) */}
      <div className="absolute flex justify-center items-center w-full h-full gap-4">
        <ProjectCard name="eyecane" link="/Eyecane" />
      </div>
    </div>
  );
}
