import { Card, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      {" "}
      <Card className="card">
        <div className="articles-image">
          <CardMedia>
            <img
              src={article.article_img_url}
              alt="image relating to the article title"
            />
          </CardMedia>
        </div>
        <div className="articles-content">
          <h3>{article.title}</h3>
          <p>{article.topic}</p>
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
        </div>
      </Card>
    </Link>
  );
}

export default ArticleCard;
