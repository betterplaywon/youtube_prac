export default class YoutubeAPI {
  apiClient: any;
  constructor(apiClient: any) {
    this.apiClient = apiClient;
    // this.httpClient = axios.create({
    //   baseURL: "https://www.googleapis.com/youtube/v3",
    //   params: { key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY },
    // });
  }

  async relatedVideos(id: string) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 50,
          type: "video",
          relatedTovideoId: id,
        },
      })
      .then((res: { data: { items: any[] } }) =>
        res.data.items.map((item: { id: { videoId: any } }) => ({
          ...item,
          id: item.id.videoId,
        })),
      );
  }

  async channelImageURL(channelId: string) {
    return this.apiClient
      .channel({
        params: {
          part: "snippet",
          id: channelId,
        },
      })
      .then(
        (res: {
          data: {
            items: { snippet: { thumbnails: { default: { url: any } } } }[];
          };
        }) => res.data.items[0].snippet.thumbnails.default.url,
      );
  }

  async search(keyword: string) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword: string) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 50,
          type: "video",
          q: keyword,
        },
      })
      .then((res: { data: { items: any[] } }) =>
        res.data.items.map((item: { id: { videoId: any } }) => ({
          ...item,
          id: item.id.videoId,
        })),
      );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 50,
          chart: "mostPopular",
        },
      })
      .then((res: { data: { items: any } }) => res.data.items);
  }
}
