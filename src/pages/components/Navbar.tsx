import Link from "next/link";
import { useParams } from "next/navigation";

export default function Navbar() {
  const param = useParams()


  return (
    <div className="flex w-full p-4 border-b-4 border-b-slate-400">
        <Link href={'/board'} className="flex-1 text-center">전체 게시판</Link>
        <Link href={'/board/0'} className="flex-1 text-center">자유 게시판</Link>
        <Link href={'/board/1'} className="flex-1 text-center">행사 게시판</Link>
        <Link href={'/board/2'} className="flex-1 text-center">공지 게시판</Link>
        <Link href={'/board/3'} className="flex-1 text-center">건의 게시판</Link>
    </div>
  )
}