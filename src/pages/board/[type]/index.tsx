import BoardList from "@/pages/components/board/BoardList";
import BoardWriteButton from "@/pages/components/board/BoardWriteFix";

export default function BoardType() {

    return (
        <div className="p-5">
            <BoardList/>
            <BoardWriteButton/>
        </div>
    )
}