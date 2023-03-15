import React from "react";
import SearchHeader from "@/src/components/SearchHeader";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import VideoCard from "@/src/components/VideoCard";
import { useYoutubeApi } from "@/src/context/YoutubeAPIContext";

const VideoKeyword = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const { youtube }: any = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    return youtube.search(keyword);
  });

  return (
    <>
      <SearchHeader />

      {isLoading && <p>LOADING</p>}
      {error && <p>ERROR OCCURED</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video: { id?: string }) => (
            <VideoCard key={video.id} video={video} type={""} />
          ))}
        </ul>
      )}
    </>
  );
};

export default VideoKeyword;
