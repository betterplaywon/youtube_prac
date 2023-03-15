import React from "react";
import { useRouter } from "next/router";
import { formatAgo } from "util/date";

interface VideoCardType {
  video: {};
  type: string;
}

// interface snippetType {
//   title: string;
//   thumbnails: string;
//   channelTitle: string;
//   publishedAt: string;
// }

const VideoCard = ({ video, type }: any) => {
  const query = video?.snippet;
  const { title, thumbnails, channelTitle, publishedAt } = query;
  const router = useRouter();
  const isRelated = type === "related";

  return (
    <li
      className={isRelated ? "flex gap-1 m-2" : ""}
      onClick={() => {
        router.push({
          pathname: `/video/watch/${video.id}`,
          query,
        });
      }}
    >
      <img
        className={isRelated ? "w-30 mr-2" : "w-full"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
};

export default VideoCard;
