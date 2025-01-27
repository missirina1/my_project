import styles from '../styles/blocks/logo.module.scss';
function Logo() {
  return (
    <>
      <img
        src="/assets/images/logo.png"
        alt="logo"
        aria-label="logo"
        className={styles.logo}
      ></img>
    </>
  );
}

export default Logo;
