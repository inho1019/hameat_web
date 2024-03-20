import BoardView from "@/components/board/BoardView";
import { useRouter } from "next/router";

export default function View() {
  const router = useRouter()

  return (
    <div className="p-5">
      <button onClick={() => router.back()} className="p-2 m-4 transition rounded bg-slate-200 hover:bg-slate-400" >뒤로가기</button>
      <BoardView/>
    </div>
  )
}