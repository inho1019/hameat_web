import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const BOARD_LIST = gql`
query {
    boardList {
        boardSeq
        title
        url
        fav
        hit
        logTime
    }
}
`

const BOARD_LIST_TYPE = gql`
query 
    getBoardListType($type: Int!) {
    boardListType(type:$type) {
        boardSeq
        title
        url
        fav
        hit
        logTime
    }
}
`

export default function BoardList() {

const router = useRouter()
const type : string  = Array.isArray(router.query.type) ? router.query.type[0] : router.query.type || "";

const { data } = useQuery(type ? BOARD_LIST_TYPE : BOARD_LIST,{
    variables: { type : parseInt(type) }
})

const boards =  data ? type ? data.boardListType : data.boardList : []

return (
    <table className="w-full">
        <thead>
            <tr className="border-b">
                <th className="w-1/12 p-3">번호</th>
                <th className="w-5/12">제목</th>
                <th className="w-1/12">좋아요</th>
                <th className="w-1/12">조회수</th>
                <th className="w-2/12">작성일</th>
            </tr>
        </thead>
        <tbody>
            {boards.map((item : BoardDTO)=> 
            <tr key={item.boardSeq} className="border-b">
                <td className="p-3 text-center">{item.boardSeq}</td>
                <td className="text-center">
                    <div 
                        className="overflow-hidden text-left cursor-pointer hover:underline" 
                        onClick={() => router.push(`/board/view/${item.boardSeq}`)}>
                        {item.title}
                    </div>
                </td>
                <td className="text-center">{JSON.parse(item.fav).length}</td>
                <td className="text-center">{item.hit}</td>
                <td className="text-center">{new Date(item.logTime).toLocaleString()}</td>
            </tr>
            )}
        </tbody>
    </table>
)}