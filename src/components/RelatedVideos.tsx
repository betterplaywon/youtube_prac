import React from "react";
import { useYoutubeApi } from "@/src//context/YoutubeAPIContext";
import { useQuery } from "@tanstack/react-query";

import VideoCard from "@/src/components/VideoCard";

interface RelatedVideosId {
  id: string;
}

const RelatedVideos = ({ id }: RelatedVideosId) => {
  const { youtube }: any = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => {
    return youtube.relatedVideos(id);
  });

  return (
    <>
      {isLoading && <p>LOADING</p>}
      {error && <p>ERROR OCCURED</p>}
      {videos && (
        <ul>
          {videos.map((video: { id?: string }) => (
            <VideoCard key={video.id} video={video} type="related" />
          ))}
        </ul>
      )}
      ;
    </>
  );
};

export default RelatedVideos;
