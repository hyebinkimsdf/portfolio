import { Link } from "react-router-dom";

interface ProjectCardProp {
  name: string;
  link: string;
}

export function ProjectCard({ name, link }: ProjectCardProp) {
  return (
    <>
      <Link to={link}>
        <div className="bg-black w-[300px] h-[300px] text-white ">{name}</div>;
      </Link>
    </>
  );
}
