import { useState, useEffect } from "react";


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
        let results = await fetch(url, { signal });
        let parsedResponse = await results.json();
        setArticle(parsedResponse.articles[randomIndex]);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching news:", err);
        }
      }
    }


    fetchData();

    return () => controller.abort();
  }, [url]);

  return (
    <>
      <h1>Top Headline</h1>
      {article ? (
        <div>
          <h4>{article.title}</h4>
          <p>{article.description}</p>
          <a href={article.url} target="_blank">
            Read more
          </a>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Welcome;
