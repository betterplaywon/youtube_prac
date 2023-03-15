export default class YoutubeAPI {
  apiClient: any;
  constructor(apiClient) {
    this.apiClient = apiClient;
    // this.httpClient = axios.create({
    //   baseURL: "https://www.googleapis.com/youtube/v3",
    //   params: { key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY },
    // });
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResult: 25,
          type: "video",
          relatedTovideoId: id,
        },
      })
      .then(res =>
        res.data.items.map(item => ({ ...item, id: item.id.videoId })),
      );
  }

  async channelImageURL(channelId) {
    return this.apiClient
      .channel({
        params: {
          part: "snippet",
          id: channelId,
        },
      })
      .then(res => res.data.items[0].snippet.thumbnails.default.url);
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResult: 25,
          type: "video",
          q: keyword,
        },
      })
      .then(res =>
        res.data.items.map(item => ({ ...item, id: item.id.videoId })),
      );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then(res => res.data.items);
  }
}