import './App.css';
import SuperHeroCard from './components/super-hero-card.js';

function App() {
  return (
    <div className="App">
      <SuperHeroCard
        name="Deadpool"
        universe="Marvel Comics"
        alterego="Уэйд Уинстон Уилсон"
        occupation="супергероиня, секретарь-референт"
        friends="Лига Справедливости, Бэтмен, Супермен"
        superpowers="высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система"
        imageSrc="../images/deadpool.jpg"
      />

      <SuperHeroCard
        name="Чудо-женщина"
        universe="DC Comics"
        alterego="Диана Принс"
        occupation="антигерой, наёмник"
        friends="частично Мстители, Человек-паук, Росомаха"
        superpowers="сверхчеловеческая сила искорость, выносливость, полёт"
        imageSrc="../images/wonder_woman.jpg"
      ></SuperHeroCard>

      <SuperHeroCard
        name="Черная вдова"
        universe="Marvel Comics"
        alterego="Наташа Романофф"
        occupation="супергероиня, шпионка"
        friends="Мстители"
        superpowers="пик человеческого физического потенциала, замедленное старение, знание многих языков"
        imageSrc="../images/black_widow.jpg"
      />
    </div>
  );
}

export default App;
