import { ProjectCard } from "../compoments/home/ProjectCard";

export function ProjectList() {
  return (
    <div className="w-full min-h-screen bg-white py-10">
      <p className="text-center font-bold text-2xl mb-12">Projects</p>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          <ProjectCard name={"Eyecane"} link={"/eyecane"} image={""} />
          <ProjectCard name={"Eyecane"} link={"/eyecane"} image={""} />
          <ProjectCard name={"Eyecane"} link={"/eyecane"} image={""} />
          <ProjectCard name={"Eyecane"} link={"/eyecane"} image={""} />
          <ProjectCard name={"Eyecane"} link={"/eyecane"} image={""} />
        </div>
      </div>
    </div>
  );
}
