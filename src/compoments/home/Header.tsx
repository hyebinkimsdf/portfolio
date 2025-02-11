import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="fixed top-0 left-0 w-full h-[10vh] max-h-[64px] bg-black text-white flex items-center justify-center z-50">
      <Link to="/">main</Link>
    </div>
  );
}
