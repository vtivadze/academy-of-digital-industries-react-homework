export const ArticlePreviewList = ({articles}) => {

  return articles.map((article, index) => {
      return <h2 className="title is-size-5" key={index}>{article.title}</h2>
    });
};