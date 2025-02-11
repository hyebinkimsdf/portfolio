import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="bg-black w-full h-[10vw] max-h-[64px]  text-white px-4 flex items-center">
      <Link to="/">main</Link>
    </div>
  );
}
