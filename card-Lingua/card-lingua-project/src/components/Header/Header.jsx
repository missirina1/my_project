import style from './header.module.scss';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <>
      <header className={style.header}>
        <Logo className={style.header__logo} />
        <nav className={style.header__menu} role="navigation">
          <ul className={style.header__list}>
            <li className={style.header__item}>
              <a
                className={style.header__link}
                href="/"
                target="_blank"
                aria-label="Перейти на главную"
              >
                Home
              </a>
            </li>
            <li className={style.header__item}>
              <a
                className={style.header__link}
                href="/"
                target="_blank"
                aria-label="О нас"
              >
                About
              </a>
            </li>
            <li className={style.header__item}>
              <a
                className={style.header__link}
                href="/"
                target="blank"
                aria-label="Контакты "
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
