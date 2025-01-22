function SuperHeroCard(props) {
  const {
    name,
    universe,
    alterego,
    occupation,
    friends,
    superpowers,
    imageSrc,
  } = props;
  return (
    <div className="super-hero-card">
      <h1 className="super-hero-card__name">{name}</h1>
      <h2 className="super-hero-card__universe">Вселенная: {universe}</h2>
      <p>Альтер эго: {alterego}</p>
      <p>Род деятельности: {occupation}</p>
      <p>Друзья: {friends}</p>
      <p>Суперсилы: {superpowers}</p>

      <img src={imageSrc} alt={name} className="super-hero-card__image" />
    </div>
  );
}

export default SuperHeroCard;
