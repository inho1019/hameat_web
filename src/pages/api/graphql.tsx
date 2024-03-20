import { ApolloServer, gql } from "apollo-server-micro";
import axios from "axios";

const boardListAll =  await axios.get('https://hameat.onrender.com/board/listAll')
const boardList = boardListAll.data.map((dto : any) => dto[0])

const typeDefs = gql`
  type Query {
    boardList: [BoardDTO]
    boardListType(type: Int!): [BoardDTO]
    boardView(boardSeq: ID!): BoardDTO
  }

  type Mutation {
    boardWrite(boardDTO: BoardWriteDTO!): BoardDTO!
  }
  
  type BoardDTO {
    boardSeq: ID!
    type: Int!
    userSeq: ID
    title: String!
    content: String!
    url: String!
    hit: Int!
    secret: Int!
    fav: String!
    logTime: String!
  }

  input BoardWriteDTO {
    type: Int!
    userSeq: Int!
    title: String!
    content: String!
    url: String!
    hit: Int!
    secret: Int!
    fav: String!
  }
`;

const resolvers = {
  Query: {
    boardList: () =>  boardList,
    boardListType: (_ : any, args : { type : number }) =>  boardList.filter((item: BoardDTO) => item.type === args.type),
    boardView: (_ : any, args : { boardSeq : string }) =>  boardList.find((item: BoardDTO) => item.boardSeq.toString() === args.boardSeq),
  },
  Mutation: {
    boardWrite: async (_ : any, args : {boardDTO : BoardWriteDTO}) => {
      try {
        const res = await axios.post('https://hameat.onrender.com/board/write', args.boardDTO);
        return res.data;
      } catch (e) {
        console.error(e);
      }
    },
    // boardDelete : async (_ : any, args : { boardSeq : string }) => {
    //   try {
    //     await axios.delete(`https://hameat.onrender.com/board/delete/${parseInt(args.boardSeq)}`)
    //   } catch(e) {
    //     console.log(e)
    //   }
    // }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

export const config = {
  api: {
    bodyParser: false
  }
};

export default server.createHandler({ path: '/api/graphql' });
