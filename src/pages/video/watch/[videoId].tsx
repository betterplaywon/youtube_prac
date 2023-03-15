import React from "react";
import SearchHeader from "@/src/components/SearchHeader";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "@/src/context/YoutubeAPIContext";

import ChannelInfo from "@/src/components/ChannelInfo";
import RelatedVideos from "@/src/components/RelatedVideos";

interface VideoDetailType {
  videoId?: string;
  title?: string;
  channelTitle?: string;
  channelId?: string;
  publishedAt?: string;
  description?: string;
}

const VideoDetail = () => {
  const router = useRouter();
  const keyword = router.query;
  const {
    videoId,
    title,
    channelTitle,
    channelId,
    description,
  }: VideoDetailType = keyword;

  return (
    <>
      <SearchHeader />
      <section className="flex flex-col lg:flex-row">
        <article className="basis-4/6">
          <iframe
            id="player"
            data-type="text/html"
            width="100%"
            height="640"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
          ></iframe>
          <div className="p-8">
            <h2 className="text-xl font-bold mb-3">{title}</h2>
            <ChannelInfo id={channelId!} name={channelTitle!} />
            <pre className="whitespace-pre-wrap">{description}</pre>
          </div>
        </article>

        <article className="basis-2/6">
          <RelatedVideos id={videoId!} />
        </article>
      </section>
    </>
  );
};

export default VideoDetail;
