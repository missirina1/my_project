import stylesWhite from '../styles/blocks/whiteBtn.module.scss';

function WhiteBtn(props) {
  const { text } = props;
  return (
    <>
      <a
        href="/"
        aria-label="Про изучение"
        target="_k"
        className={stylesWhite.btnWhite}
        role="button"
      >
        {text}
      </a>
    </>
  );
}

export default WhiteBtn;
