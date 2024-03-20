import BoardList from "@/components/board/BoardList";
import BoardWriteButton from "@/components/board/BoardWriteFix";

export default function BoardType() {

    return (
        <div className="p-5">
            <BoardList/>
            <BoardWriteButton/>
        </div>
    )
}