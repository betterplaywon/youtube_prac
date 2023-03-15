import { createContext, useContext } from "react";
import YoutubeApiClient from "../api/youtubeApiClient";
import MockYoutubeApiClient from "../api/mockYoutubeApiClient";
import YoutubeAPI from "../api/youtubeApi";

export const YoutubeApiContext = createContext({});

// const client = new MockYoutubeApiClient();
const client = new YoutubeApiClient();
const youtube = new YoutubeAPI(client);

export const YoutubeApiProvider = ({ children }: any) => {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
};

export const useYoutubeApi = () => {
  return useContext(YoutubeApiContext);
};
