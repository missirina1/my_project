function SuperHeroCard(props) {
  const { name, universe, alterego, occupation, friends, superpowers, url } =
    props;
  return (
    <div className="super-hero-card">
      <h1 className="super-hero-card__name">{name}</h1>
      <h2 className="super-hero-card__universe">Вселенная: {universe}</h2>

      <div className="super-hero-card__details">
        <p>
          <strong>Альтер эго:</strong> {alterego}
        </p>
        <p>
          <strong>Род деятельности:</strong> {occupation}
        </p>
        <p>
          <strong>Друзья:</strong> {friends}
        </p>
        <p>
          <strong>Суперсилы:</strong> {superpowers}
        </p>
      </div>

      <img src={url} alt={name} className="super-hero-card__image" />
    </div>
  );
}

export default SuperHeroCard;
