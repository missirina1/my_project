import './App.css';
import TarifPlan from './components/TarifPlan';
import tariffs from './data/tariffs.js';

function App() {
  return (
    <div className="App">
      {tariffs.map((tariff) => {
        return (
          <TarifPlan
            key={tariff.id}
            tariff={tariff.tariff}
            speed={tariff.speed}
            colorClass={tariff.colorClass}
            isActive={tariff.active}
          />
        );
      })}
    </div>
  );
}

export default App;
