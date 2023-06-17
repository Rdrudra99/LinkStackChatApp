import "@/styles/globals.css";
import { UserProvider } from "@/context/authContext";
import { ChatContextProvider } from "@/context/chatContext";
import Head from "next/head";
export default function App({ Component, pageProps }) {
    return (
      <>
        <Head>
          <title>Linkstack || Rudra Narayan Boitei</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Linkstack is a social media platform where you can share your links with your friends and family." />
        </Head>
        <UserProvider>
          <ChatContextProvider>
            <Component {...pageProps} />
          </ChatContextProvider>
        </UserProvider>
      </>
    );
  }
  