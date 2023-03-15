import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "@/src/context/YoutubeAPIContext";

interface Info {
  id: string;
  name: string;
}

const ChannelInfo = ({ id, name }: Info) => {
  const { youtube }: any = useYoutubeApi();

  // 캐싱 시간이 너무 짧을 필요가 없음. 개선 위해 staleTime 조정
  const {
    isLoading,
    error,
    data: url,
  } = useQuery(["channel", id], () => {
    return youtube.channelImageURL(id);
  });

  return (
    <div className="flex my-4 mb-7 items-center">
      {url && <img src={url} alt={name} className="w-10 h-10 rounded-full" />}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  );
};

export default ChannelInfo;
