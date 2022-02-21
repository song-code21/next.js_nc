import { useState } from "react";
import NavBar from "../components/Navbar";

//next.js의 pre-rendering 초기상태로 pre-rendering을 하고, 이후에 api요청으로 값들을 받아옴

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

//라이브러리와 프레임워크의 차이점
//프레임워크는 코드를 불러오고 라이브러리는 개발자가 사용하는 것이다.
//라이브러리를 사용할 땐 내가 원할 때 언제든 불러오면 된다. -> React.js
//프레임워크를 사용할 땐 특정 규칙을 따라야 한다. -> next.js
