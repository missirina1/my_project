import stylesOrange from '../styles/blocks/orangeBtn.module.scss';
import clsx from 'clsx';

function OrangeBtn(props) {
  const { text, ariaLabel, className, disabled, onClick } = props;

  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        className={clsx(
          stylesOrange.btnOrange,
          { [stylesOrange.disabled]: disabled },
          className
        )}
      >
        {text}
      </button>
    </>
  );
}

export default OrangeBtn;
