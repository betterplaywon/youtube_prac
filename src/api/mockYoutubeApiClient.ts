import axios from "axios";

export default class MockYoutubeApiClient {
  constructor() {}

  async search({ params }) {
    const isRelated = params.relatedTovideoId;
    return axios.get(`/videosData/${isRelated ? "related" : "search"}.json`);
  }

  async videos() {
    return axios.get("/videosData/popular.json");
  }

  async channel() {
    return axios.get("/videosData/channel.json");
  }

  async related() {
    return axios.get("/videosData/related.json");
  }

  // async #searchByKeyword() {
  //   return axios
  //     .get(`/videosData/search.json`)
  //     .then(res => res.data.items)
  //     .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
  // }

  // async #mostPopular() {
  //   return axios.get(`/videosData/popular.json`).then(res => res.data.items);
  // }
}
