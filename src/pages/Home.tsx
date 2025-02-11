import { Link } from "react-router-dom";
import { ProjectCard } from "../compoments/home/ProjectCard";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-500">
      <ProjectCard name={"eyecane"} link={"/Eyecane"} />
      <ProjectCard name={"eyecane"} link={"/Eyecane"} />
    </div>
  );
}
