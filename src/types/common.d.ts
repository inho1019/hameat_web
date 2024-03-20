interface BoardDTO {
    boardSeq: string
    type: number
    userSeq: string
    title: string
    content: string
    url: string
    hit: number
    secret: number
    fav: string
    logTime: string
}

interface BoardWriteDTO {
    type: number
    userSeq: number
    title: string
    content: string
    url: string
    hit: number
    secret: number
    fav: string
}