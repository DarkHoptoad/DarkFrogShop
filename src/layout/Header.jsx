function Header() {
  return (
    <div className="header unselectable">
      <div className="header__content">
        <div className="header__logo">DarkFrog Shop</div>
        <div className="slogan">
          Best items in <span className="You">Your</span> game!
        </div>
        <div className="header__nav">
          <a
            className="nav__link"
            href="https://github.com/DarkHoptoad/DarkFrogShop"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export { Header };
