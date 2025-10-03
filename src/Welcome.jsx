import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";


function Welcome() {
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;

  const [article, setArticle] = useState(null);

  const randomIndex = Math.floor(Math.random() * 20);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        let results = await axios.get(url, { signal });
        setArticle(results.data.articles[randomIndex]);
      }
      catch (err) {
        console.error("Error fetching news:", err);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return (
    <>
      <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Top Headline
      </Typography>

      {article ? (
        <Card sx={{ maxWidth: 600, mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {article.description}
            </Typography>
            <Button variant="contained"  size="small"  color="primary" href={article.url}  target="_blank">Read More</Button>
          </CardContent>
        </Card>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
    </>
  );
}

export default Welcome;
