import { useRouter } from "next/router"

export default function BoardWriteButton() {
    const router = useRouter()

    return (
        <div 
            onClick={() => router.push('/board/write')}
            className="fixed flex items-center justify-center w-20 h-20 text-lg text-white transition rounded-full cursor-pointer bottom-5 right-5 bold bg-slate-400 hover:bg-slate-600 ">
            작성
        </div>
    )
}