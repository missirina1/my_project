import stylesOrange from '../styles/blocks/orangeBtn.module.scss';

function OrangeBtn(props) {
  const { text } = props;
  return (
    <>
      <a
        href="/"
        aria-label="Старт изучения"
        target="_blank"
        className={stylesOrange.btnOrange}
        role="button"
      >
        {text}
      </a>
    </>
  );
}

export default OrangeBtn;
