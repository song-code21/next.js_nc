import Link from "next/link";
import { useRouter } from "next/router";

//css 모듈 패턴을 이용한 style적용
//자바스크립트 object의 프로퍼티 형식으로 적음
//페이지가 빌드될 때 next.js가 클래스 이름을 무작위로 바꿔줄 것임

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}

//link는 href를 위해서만 존재하고 이 외에 Link에 있는 요소에 style이나 이외의 속성을 적용하고 싶다면 안에 a태그를 넣어 a태그에 적용해주어야 함
//style을 적용하는 방법: className으로 저장
//global style 적용: style에 global props전달
//next.js에서는 페이지 단위로 생각해 보아야 함. global style을 적용해도 다른 페이지에 있는 경우 적용이 안됨
