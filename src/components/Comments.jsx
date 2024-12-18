import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../api";

function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsByArticleId(articleId)
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load comments");
        setIsLoading(false);
      });
  }, [articleId]);

  if (isLoading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Accordion>
      <AccordionSummary>Show Comments</AccordionSummary>
      <AccordionDetails>
        <Card>
          <h3>Comments</h3>

          {comments.length > 0 ? (
            comments.map((comment) => (
              <Card key={comment.comment_id}>
                <h4>{comment.author}</h4>
                <p>{comment.body}</p>
              </Card>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </Card>
      </AccordionDetails>
    </Accordion>
  );
}

export default Comments;
