import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const client = new ApolloClient({
  uri: `/api/graphql`,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default function App({ Component, pageProps }: AppProps) {
  
  return(
    <ApolloProvider client={client}>
      <Header/>
      <Navbar/>
      <Component {...pageProps} />
    </ApolloProvider> 
)}

