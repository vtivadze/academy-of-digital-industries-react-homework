export const Logo = () => {
  return (
    <div className="logo media is-size-2 has-text-white">
      <figure className="media-left tile is-align-self-center">
        <p className="image is-96x96">
          <img
            src={require('../images/logo192.png').default}
            alt="React Logo"
          />
        </p>
      </figure>
      <figcaption className="media-content is-align-self-flex-end">
        <p className="content">React Is The Best</p>
      </figcaption>
    </div>
  );
};
