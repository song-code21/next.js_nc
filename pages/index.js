import { useEffect, useState } from "react";
import Seo from "../components/Seo";

//next.js의 pre-rendering 초기상태로 pre-rendering을 하고, 이후에 api요청으로 값들을 받아옴
const API_KEY = "54bf51a6df094ae6efe05815093b605b";

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title={"Home"} />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}

//라이브러리와 프레임워크의 차이점
//프레임워크는 코드를 불러오고 라이브러리는 개발자가 사용하는 것이다.
//라이브러리를 사용할 땐 내가 원할 때 언제든 불러오면 된다. -> React.js
//프레임워크를 사용할 땐 특정 규칙을 따라야 한다. -> next.js
//프레임워크에서 pages폴더 안에 파일을 만든다면 해당 파일명의 route로 들어가게 될 때 해당 페이지가 렌더링된다.
//next.js는 pre-rendering을 해주고, 그 이후에 필요한 js파일을 읽으며 react가 주도권을 가져가게 된다.
//서버사이드에서 렌더 준비 된 파일을 준비해주고 html에서 바로 렌더링이 가능하다.
