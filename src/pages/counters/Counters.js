import { Counter } from "../../components";

export const Counters = () => {
  return (
    <div className="section px-0">
      <div className="columns">
        <div className="column is-one-quarter">
          <Counter initialValue={0} initialStep={1} />
        </div>
        <div className="column is-one-quarter">
          <Counter initialValue={100} initialStep={10} />
        </div>
        <div className="column is-one-quarter">
          <Counter initialValue={1000} initialStep={100} />
        </div>
        <div className="column is-one-quarter">
          <Counter initialValue={10000} initialStep={1000} />
        </div>
      </div>
    </div>
  );
};