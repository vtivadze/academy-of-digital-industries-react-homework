import style from './BlueButton.module.css';

export const BlueButton = ({ content }) => {
  return (
    <button className={`button ${style.customButton} m-3 has-text-white`}>
      {content}
    </button>
  );
};
