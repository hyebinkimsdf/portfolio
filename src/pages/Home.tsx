import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <p>홈페이지입니다다</p>
      <Link to={"/Eyecane"}>다른 프로젝트</Link>
    </>
  );
}
