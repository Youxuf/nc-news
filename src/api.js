import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-65s0.onrender.com/api",
});

export const fetchArticles = () => {
  return api.get("/articles").then((res) => res.data.articles);
};
