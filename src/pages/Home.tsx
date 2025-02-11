import { Link } from "react-router-dom";
import { ProjectCard } from "../compoments/home/ProjectCard";

export default function Home() {
  return (
    <>
      <p>홈페이지입니다</p>
      <ProjectCard name={"eyecane"} link={"/Eyecane"} />
    </>
  );
}
