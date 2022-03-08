import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import Link from "next/link";

//next.js의 pre-rendering 초기상태로 pre-rendering을 하고, 이후에 api요청으로 값들을 받아옴

export default function Home({ results }) {
  return (
    <div>
      <Seo title={"Home"} />
      {results?.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <a>
            <div key={movie.id}>
              <h4>{movie.original_title}</h4>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

//서버사이드 렌더링 function 이름은 꼭 getServerSideProps일 것
//reacp
//아래의 코드는 서버사이드 렌더링이 가능하도록 해주는 코드이다. 서버사이드 렌더링을 할 경우에는 아래의 코드에서 fetch가 다 이루어지기 전까지는
//client사이드에서 아무것도 보이지 않고, fetch를 기다리게 된다. 그러면 api가 느린 경우에는 초기 렌더링이 오래 걸린다는 단점이 있을 수 있다.
export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}

//라이브러리와 프레임워크의 차이점
//프레임워크는 코드를 불러오고 라이브러리는 개발자가 사용하는 것이다.
//라이브러리를 사용할 땐 내가 원할 때 언제든 불러오면 된다. -> React.js
//프레임워크를 사용할 땐 특정 규칙을 따라야 한다. -> next.js
//프레임워크에서 pages폴더 안에 파일을 만든다면 해당 파일명의 route로 들어가게 될 때 해당 페이지가 렌더링된다.
//next.js는 pre-rendering을 해주고, 그 이후에 필요한 js파일을 읽으며 react가 주도권을 가져가게 된다.
//서버사이드에서 렌더 준비 된 파일을 준비해주고 html에서 바로 렌더링이 가능하다.
