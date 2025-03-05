import styles from './Logo.module.scss';
import clsx from 'clsx';

function Logo({ className }) {
  return (
    <img
      src="/assets/images/logo.png"
      alt="logo"
      aria-label="logo"
      className={clsx(styles.logo, className)}
    />
  );
}

export default Logo;
