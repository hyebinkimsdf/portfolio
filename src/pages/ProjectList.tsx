import { ProjectCard } from "../compoments/home/ProjectCard";

export function ProjectList() {
  return (
    <div className="w-full min-h-screen bg-white py-10 mt-10" id="ProjectList">
      <p className="text-center font-bold text-2xl mb-12">Projects</p>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          <ProjectCard
            name={"Naver 디지털 ARS"}
            link={"/naver"}
            image={""}
            date={"2024.06 ~ 2024.09"}
          />
          <ProjectCard
            name={"Eyecane"}
            link={"/eyecane"}
            image={""}
            date={"2024.01 ~ 2024.12"}
            tool="photoshop"
          />
          <ProjectCard
            name={"드론 데이터 시각화 웹사이트"}
            link={"/droneGo"}
            image={""}
            date={"2025.01 ~ 2025.02"}
          />
          <ProjectCard
            name={"수영복 아커머스"}
            link={"/swim360"}
            image={""}
            date={"2024.11 ~ 2024.12"}
          />
          <ProjectCard
            name={"커뮤니티, 광고 배너"}
            link={"/banner"}
            image={""}
            date={"2022.07 ~ 2024.01"}
            tool="photoshop"
          />
        </div>
      </div>
    </div>
  );
}
