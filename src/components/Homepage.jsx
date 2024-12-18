import React, { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";

function Homepage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    fetchArticles()
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch articles");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h2>All Articles</h2>
      <ol>
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ol>
    </main>
  );
}

export default Homepage;
