import { Card, CardMedia } from "@mui/material";
import React from "react";

function ArticleCard({ article }) {
  return (
    <Card className="card">
      <div className="article-image">
        <CardMedia>
          <img
            src={article.article_img_url}
            alt="image relating the the article title"
          />
        </CardMedia>
      </div>
      <div className="article-content">
        <h3>{article.title}</h3>
        <p>{article.topic}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
      </div>
    </Card>
  );
}

export default ArticleCard;
