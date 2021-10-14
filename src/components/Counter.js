import { useState } from "react";

export const Counter = ({initialValue, initialStep}) => {
  const [startingValue, setStartingValue] = useState(initialValue);
  const [startingStep, setStatingStep] = useState(initialStep);
  const [count, setCount] = useState(startingValue);

  const setCustomStartingStep = (event) => {
    let customStartingStep = parseInt(event.target.value);
    setStatingStep(customStartingStep);
  };

  const setCustomInitialValue = (event) => {
    let customInitialValue = parseInt(event.target.value);
    setStartingValue(customInitialValue);
    setCount(customInitialValue);
  };

  const addNumber = () => {
    setCount(count + startingStep);
  };

  const reset = () => {
    setCount(initialValue);
  };

  const subNumber = () => {
    setCount(count - startingStep);
  };

  return (
    <div className="counter has-text-weight-semibold">
      <div className="content has-background-light tile is-ancestor m-0">
        <div className="field tile is-parent is-6 is-vertical">
          <label className="label has-text-centered">Initial value</label>
          <div className="control">
            <input
              className="input"
              type="number"
              value={ startingValue }
              onChange={ setCustomInitialValue }
              step={ initialValue = initialValue > 0 ? initialValue : 0 }
            />
          </div>
        </div>
        <div className="field tile is-parent is-6 is-vertical">
          <label className="label has-text-centered">Step</label>
          <div className="control">
            <input
              className="input"
              type="number"
              value={ startingStep}
              onChange={ setCustomStartingStep }
              step={ initialStep }
            />
          </div>
        </div>
      </div>

      <div
        className="
          counter-result
          notification
          has-background-info
          is-size-2
          has-text-centered
          has-text-white"
      >
        { count }
      </div>
      <div className="buttons is-justify-content-space-between counter-manager">
        <button
          className="button is-success has-text-weight-bold"
          onClick={ addNumber }
        >
          + { startingStep }
        </button>
        <button
          className="button is-warning has-text-weight-bold"
          onClick={ reset }
        >Reset</button>
        <button
          className="button is-danger has-text-weight-bold"
          onClick={ subNumber }
        >
          - { startingStep }
        </button>
      </div>
    </div>
  );
};