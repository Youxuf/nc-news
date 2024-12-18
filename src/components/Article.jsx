import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";
import { Card, CardContent } from "@mui/material";
import Comments from "./Comments";

function Article() {
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to load the article");
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <Card className="article-card">
        <CardContent>
          <h3>{article.title} </h3>
          <img
            src={article.article_img_url}
            alt="image relating to article title"
          />
          <main>{article.body}</main>
          Topic: {article.topic} • Author: {article.author} • Votes:
          {article.votes}
        </CardContent>
      </Card>
      <Comments articleId={article_id} />
    </>
  );
}

export default Article;
