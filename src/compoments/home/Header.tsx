import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="bg-black w-full h-10  text-white px-4 felx items-center justify-center">
      <Link to="/">main</Link>
    </div>
  );
}
