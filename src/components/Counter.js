export const Counter = () => {
  return (
    <div className="counter">
      <div className="block counter-result">

      </div>
      <div className="buttons counter-manager">
        <button className="button is-success">+1</button>
        <button className="button is-warning">Reset</button>
        <button className="button is-danger">-1</button>
      </div>
    </div>
  );
};