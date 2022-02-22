import NavBar from "../components/Navbar";

// 말그대로 전역적인 무언가를 처리하고 싶을 때 _app.js를 추가한다면 next.js는 index를 렌더링하기 전에 _app.js를 처리하게 됨
//_app.js에서는 ComponentProps를 받아오고 그 컴포넌트를 렌더링 해준다.
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>안뇽</span>
    </>
  );
}
