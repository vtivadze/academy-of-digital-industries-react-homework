import { Counter } from '../../components';

export const Counters = () => {
  return (
    <div className="section px-0">
      <h1 className="title has-text-centered">Counters</h1>

      <div className="columns">
        <div className="column is-one-quarter">
          <Counter storageKey="counter-1" initialValue={0} initialStep={1} />
        </div>
        <div className="column is-one-quarter">
          <Counter
            storageKey="counter-10"
            initialValue={100}
            initialStep={10}
          />
        </div>
        <div className="column is-one-quarter">
          <Counter
            storageKey="counter-100"
            initialValue={1000}
            initialStep={100}
          />
        </div>
        <div className="column is-one-quarter">
          <Counter
            storageKey="counter-1000"
            initialValue={10000}
            initialStep={1000}
          />
        </div>
      </div>
    </div>
  );
};
