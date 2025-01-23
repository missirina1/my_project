import SuperHeroCard from './SuperHeroCard.jsx';
import superHeros from '../data/superHeros.js';

function SuperHeroCards() {
  return (
    <div className="super-hero-cards">
      {superHeros.map((hero) => {
        return <SuperHeroCard {...hero} key={hero.name} />;
      })}
    </div>
  );
}
export default SuperHeroCards;
