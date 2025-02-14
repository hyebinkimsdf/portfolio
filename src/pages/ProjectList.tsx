import { ProjectCard } from "../compoments/home/ProjectCard";

export function ProjectList() {
  return (
    <div className="w-full min-h-screen bg-white py-10 mt-10" id="ProjectList">
      <p className="text-center font-bold text-2xl mb-12">Projects</p>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          <ProjectCard name={"Naver고객센터"} link={"/naver"} image={""} />
          <ProjectCard name={"Eyecane"} link={"/eyecane"} image={""} />
          <ProjectCard
            name={"드론 데이터 시각화 웹사이트"}
            link={"/dronGo"}
            image={""}
          />
          <ProjectCard name={"수영복 아커머스"} link={"/swim360"} image={""} />
          <ProjectCard name={"아이돌 팬사이트"} link={"/idolfan"} image={""} />
        </div>
      </div>
    </div>
  );
}
