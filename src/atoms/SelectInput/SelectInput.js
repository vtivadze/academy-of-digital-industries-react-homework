export const SelectInput = ({ inputName, options }) => {
  return (
    <div className="control select">
      <select name={inputName}>
        {options.map((item, index) => <option key={index}>{item}</option>)}
      </select>
    </div>
  );
};