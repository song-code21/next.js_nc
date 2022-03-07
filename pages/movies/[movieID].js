// url에 변수넣기 dynamic routing

import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return "detail";
}
