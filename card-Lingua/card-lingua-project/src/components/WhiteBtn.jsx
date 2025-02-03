import stylesWhite from '../styles/blocks/whiteBtn.module.scss';
import clsx from 'clsx';
function WhiteBtn(props) {
  const { text, ariaLabel, className } = props;
  return (
    <>
      <button
        className={clsx(stylesWhite.btnWhite, className)}
        aria-label={ariaLabel}
      >
        {text}
      </button>
    </>
  );
}

export default WhiteBtn;
