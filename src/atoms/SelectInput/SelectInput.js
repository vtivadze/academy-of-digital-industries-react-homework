export const SelectInput = ({ options }) => {
  return (
    <div class="control select">
      <select>
        {options.map(option => <option>{option}</option>)}
      </select>
    </div>
  );
};