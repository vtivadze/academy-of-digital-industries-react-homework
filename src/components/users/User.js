import { formatUser } from "../../helpers";


export const User = props => {
  const user = props.item;
  
  return (
    <article className="user tile is-3 is-vertical">
      <div className="box m-2">
        <figure className="mb-2">
          <p className="image is-128x128">
            <img
              src={`https://picsum.photos/128?random=${props.id}`}
              alt={ `${user.firstName} ${user.lastName}` }
              width="128"
            />
          </p>
        </figure>
        <div className="media-content has-text-centered">
          <div className="content">
            <p>
              { formatUser(user) }
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};