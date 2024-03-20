import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react"

const BOARD_WRITE = gql`
    mutation onBoardWrite($boardDTO: BoardWriteDTO!) {
        boardWrite(boardDTO: $boardDTO) {
            boardSeq
        }
    }
`;

const FETCH_BOARD_LIST = gql`
    query 
        fetchBoardListType($type: Int!) {
        boardListType(type: $type) {
            boardSeq
            title
            url
            fav
            hit
            logTime
        }
    }
`


export default function BoardWrite() {
    const router = useRouter()

    const [boardDTO,setBoardDTO] = useState<BoardWriteDTO>({
        type: 0,
        userSeq: 1,
        title: '',
        content: '',
        url: '',
        hit: 0,
        secret: 0,
        fav: '[]',
    })

    
    const { refetch: refetchBoardList } = useQuery(FETCH_BOARD_LIST,{
        variables : { type : boardDTO.type }
    });
    
    const [onBoardWrite] = useMutation(BOARD_WRITE);

    const boardWrite = async () => {
        try {
            await onBoardWrite({
                variables: {
                    boardDTO: boardDTO
                }
            })
            await refetchBoardList();

            router.push(`/board/${boardDTO.type}`)
        } catch (e) {
            console.error(e)
        } 
    };



    return (
        <div className="flex flex-col p-10">
            <div className="flex m-2">
                <select 
                    className="p-2 text-lg"
                    onChange={(e) => setBoardDTO(item => {
                    return {...item, type : parseInt(e.target.value)}
                })}>
                    <option value={0}>자유 게시판</option>
                    <option value={1}>행사 게시판</option>
                    <option value={2}>공지 게시판</option>
                    <option value={3}>건의 게시판</option>
                </select>
            </div>
            <h2 className="p-3 text-2xl bg-gray-50 bold">제목</h2>
            <input type="text" value={boardDTO.title} 
                className="p-3 text-xl border-b-2 bg-gray-50 focus:outline-none"
                onChange={(e) => setBoardDTO(item => {
                    return {...item, title : e.target.value}
            })}/>
            <h2 className="p-4 text-2xl bg-gray-50 bold">내용</h2>
            <textarea value={boardDTO.content} 
                rows={13}
                className="p-3 text-xl border-b-2 resize-none bg-gray-50 focus:outline-none"
                onChange={(e) => setBoardDTO(item => {
                    return {...item, content : e.target.value}
            })}/>
            <div className="flex flex-row-reverse">
                <button onClick={() => boardWrite()} className="p-2 m-4 transition rounded bg-slate-200 hover:bg-slate-400" >등록하기</button>
            </div>
        </div>
    )
}