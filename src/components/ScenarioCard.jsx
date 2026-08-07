import { Link } from "react-router-dom";
import "./ScenarioCard.css";


function ScenarioCard({ scenario }) {


  return (


    <article className="scenario-card">



      <div className="scenario-number">

        0{scenario.id}

      </div>





      <div className="scenario-content">



        <span className="scenario-level">

          {scenario.level}

        </span>





        <h3>

          {scenario.title}

        </h3>





        <p>

          {scenario.description}

        </p>






        <div className="scenario-info">



          <div>

            <span>
              Участники
            </span>


            <strong>
              {scenario.participants}
            </strong>


          </div>





          <div>

            <span>
              Ресурсы
            </span>


            <strong>
              {scenario.resources}
            </strong>


          </div>



        </div>







        <Link


          to="/dashboard"


          className="scenario-button"



          onClick={() => {


            localStorage.setItem(

              "selected-scenario",

              JSON.stringify(scenario)

            );


          }}


        >

          Выбрать сценарий →

        </Link>





      </div>



    </article>


  );


}


export default ScenarioCard;