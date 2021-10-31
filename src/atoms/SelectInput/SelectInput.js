export const SelectInput = ({ options }) => {
  return (
    <div className="control select">
      <select>
        {options.map((item, index) => <option key={index}>{item}</option>)}
      </select>
    </div>
  );
};