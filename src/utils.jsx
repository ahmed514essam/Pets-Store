const getArticlesFromLocalS = () => {
    const storedArticles = localStorage.getItem("articles");
    if (storedArticles) {
      return JSON.parse(storedArticles);
    }
    return [];
  };
  export { getArticlesFromLocalS  } ;