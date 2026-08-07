import ScenarioCard from "../components/ScenarioCard.jsx";
import scenarios from "../data/scenarios.js";


function Scenarios() {

  return (

    <section className="scenarios-page">

      <div className="container">


        <h1>
          Сценарии проведения
        </h1>


        <p>
          Три готовых формата Дня студенческого спорта
          для регионов с разными возможностями.
        </p>



        <div className="scenarios-list">


          {scenarios.map((scenario) => (

            <ScenarioCard
              key={scenario.id}
              scenario={scenario}
            />

          ))}


        </div>


      </div>

    </section>

  );

}


export default Scenarios;