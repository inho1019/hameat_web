import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router"

const GET_BOARD_DTO = gql`
    query getBoardDTO($boardSeq: ID!) {
        boardView(boardSeq: $boardSeq) {
            title
            content
            fav
            hit
            logTime
        }
    }
`;

export default function BoardView() {
    const router = useRouter(); 

    const { data } = useQuery(GET_BOARD_DTO,{
        variables: { boardSeq : router.query.seq }
    })

    const boardDTO : BoardDTO = data ? data.boardView : {}

    return (
        <div className="">
            <div className="p-5 border-b-2">
                <h1 className="text-2xl ">{ boardDTO.title }</h1>
                <h3>조회 { boardDTO.hit } | 좋아요 { boardDTO.fav && JSON.parse(boardDTO.fav).length } | 작성일 { new Date(boardDTO.logTime).toLocaleString() }</h3>
            </div>
            <div className="text-lg border-b-2 p-7">{ boardDTO.content }</div>
        </div>
    )
}