import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href="about">
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          About
        </a>
      </Link>
    </nav>
  );
}

//link는 href를 위해서만 존재하고 이 외에 Link에 있는 요소에 style이나 이외의 속성을 적용하고 싶다면 안에 a태그를 넣어 a태그에 적용해주어야 함
//style을 적용하는 방법: className으로 저장
