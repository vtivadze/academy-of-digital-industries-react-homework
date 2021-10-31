export const ArticlePreviewList = ({articles}) => {

  return articles.map(article => {
      return <h2 className="title is-size-5">{article.title}</h2>
    });
};