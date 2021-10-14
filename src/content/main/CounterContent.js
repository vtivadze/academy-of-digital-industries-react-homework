import { Counter } from "../../components";

export const CounterContent = () => {
  return (
    <div className="section">
      <div className="columns">
        <div className="column is-one-third">
          <Counter initialValue={0} initialStep={1} />
        </div>
        <div className="column is-one-third">
          <Counter initialValue={100} initialStep={10} />
        </div>
        <div className="column is-one-third">
          <Counter initialValue={1000} initialStep={100} />
        </div>
      </div>
    </div>
  );
};