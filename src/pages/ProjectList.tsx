import { ProjectCard } from "../compoments/home/ProjectCard";

export function ProjectList() {
  return (
    <div className="w-full min-h-screen items-center flex justify-center mx-auto flex-wrap bg-white">
      <ProjectCard name={"Eyecane"} link={"/eyecane"} image={""} />
      <ProjectCard name={"Eyecane"} link={"/eyecane"} image={""} />
      <ProjectCard name={"Eyecane"} link={"/eyecane"} image={""} />
      <ProjectCard name={"Eyecane"} link={"/eyecane"} image={""} />
      <ProjectCard name={"Eyecane"} link={"/eyecane"} image={""} />
    </div>
  );
}
