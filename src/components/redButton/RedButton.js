import style from './RedButton.module.css';

export const RedButton = ({ content }) => {
  return (
    <button className={`button ${style.customButton} m-3 has-text-white`}>
      {content}
    </button>
  );
};
