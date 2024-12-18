import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-65s0.onrender.com/api",
});

export const fetchArticles = () => {
  return api.get("/articles").then((res) => res.data.articles);
};

export const fetchArticleById = (articleId) => {
  return api.get(`/articles/${articleId}`).then((res) => res.data.article);
};

export const fetchCommentsByArticleId = (articleId) => {
  return api
    .get(`/articles/${articleId}/comments`)
    .then((res) => res.data.comments);
};
