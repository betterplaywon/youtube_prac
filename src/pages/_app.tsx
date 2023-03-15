// import React from "react";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "../styles/globals.css";
import { YoutubeApiProvider } from "../context/YoutubeAPIContext";

export default function App({ Component, pageProps }: AppProps) {
  // const [queryClient] = React.useState(() => new QueryClient());
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <YoutubeApiProvider>
          <Component {...pageProps} />
        </YoutubeApiProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
