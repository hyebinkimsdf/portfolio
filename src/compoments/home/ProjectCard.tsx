import { Link } from "react-router-dom";

interface ProjectCardProp {
  name: string;
  link: string;
}

export function ProjectCard({ name, link }: ProjectCardProp) {
  return (
    <>
      <Link to={link}>
        <div className="bg-black w-[30vw] h-[40vw] text-white rounded-2xl flex items-center justify-center hover:opacity-80 hover:w-[40vw] duration-300 max-w-[500px]  max-h-[700px] mx-2 ">
          {name}
        </div>
      </Link>
    </>
  );
}
