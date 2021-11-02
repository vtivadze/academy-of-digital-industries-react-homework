export const ArticlePreviewList = ({ articles }) => {
  return articles.map((article, index) => {
    return (
      <div className="notification">
        <a href={article.url} target="_blank" rel="noreferrer">
          <h3 className="title is-size-5" key={index}>
            {article.title}
          </h3>
        </a>
      </div>
    );
  });
};
