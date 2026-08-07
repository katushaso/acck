import { Link, useParams, useNavigate } from "react-router-dom";
import scenarios from "../data/scenarios.js";
import BackButton from "../components/BackButton.jsx";
import "./ScenarioDetails.css";


function ScenarioDetails() {


  const { id } = useParams();

  const navigate = useNavigate();



  const scenario = scenarios.find(

    item => item.id === Number(id)

  );





  if (!scenario) {


    return (

      <section className="scenario-details">

        <div className="container">


          <h2>

            Сценарий не найден

          </h2>



          <Link to="/constructor">

            Вернуться к выбору

          </Link>


        </div>


      </section>

    );


  }







  function selectScenario() {


    localStorage.setItem(

      "selected-scenario",

      JSON.stringify(scenario)

    );



    navigate("/dashboard");


  }








  return (



    <section className="scenario-details">


      <div className="container">



        <BackButton />








        <div className="scenario-details__header">



          <span className="scenario-level">

            {scenario.level}

          </span>







          <h1>

            {scenario.title}

          </h1>







          <p>

            {scenario.description}

          </p>



        </div>









        <div className="scenario-details__grid">






          <div className="detail-card">


            <span>

              Участники

            </span>



            <strong>

              {scenario.participants}

            </strong>


          </div>








          <div className="detail-card">


            <span>

              Необходимые ресурсы

            </span>



            <strong>

              {scenario.resources}

            </strong>


          </div>





        </div>









        <div className="scenario-details__plan">



          <h2>

            Что входит в пакет

          </h2>






          <div className="plan-list">



            <div>

              <span>
                01
              </span>

              Сценарий проведения события

            </div>





            <div>

              <span>
                02
              </span>

              Чек-лист подготовки

            </div>





            <div>

              <span>
                03
              </span>

              Матрица ролей команды

            </div>





            <div>

              <span>
                04
              </span>

              Метрики результата

            </div>



          </div>



        </div>









        <div className="scenario-details__action">



          <h3>

            Готовы создать мероприятие?

          </h3>





          <p>

            Выберите этот формат,
            чтобы сформировать персональный
            региональный пакет подготовки.

          </p>







          <button

            className="scenario-start"

            onClick={selectScenario}

          >

            Выбрать сценарий →

          </button>




        </div>







      </div>


    </section>


  );


}



export default ScenarioDetails;