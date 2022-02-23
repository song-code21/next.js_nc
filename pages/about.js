import NavBar from "../components/Navbar";
import Head from "next/head";
import Seo from "../components/Seo";

export default function Potato() {
  return (
    <div>
      <Seo title={"About"} />
      <h1>About</h1>
    </div>
  );
}

//페이지를 만들 땐 반드시 export default를 해주어야 함
//URL의 이름은 파일명
