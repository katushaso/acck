import { Link } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import "./Package.css";


function Package() {


  const scenario = JSON.parse(

    localStorage.getItem(

      "selected-scenario"

    )

  );



  const roles = JSON.parse(

    localStorage.getItem(

      "event-roles"

    )

  ) || {};



  const metrics = JSON.parse(

    localStorage.getItem(

      "event-metrics"

    )

  ) || {};






  if (!scenario) {


    return (

      <section className="package">


        <div className="container">


          <h2>

            Пакет мероприятия не сформирован

          </h2>



          <Link

            to="/constructor"

          >

            Создать мероприятие

          </Link>



        </div>


      </section>

    );

  }







  const team = Object.values(

    roles

  ).filter(Boolean);






  return (



    <section className="package">


      <div className="container">



        <BackButton />








        <div className="package-header">



          <span className="scenario-level">

            Итоговый пакет

          </span>





          <h1>

            День студенческого спорта

          </h1>





          <p>

            Единый региональный пакет подготовки
            спортивного события

          </p>



        </div>









        <div className="package-status">



          <span>

            Статус готовности

          </span>



          <strong>

            ✅ Пакет сформирован

          </strong>



        </div>









        <div className="package-grid">







          <div className="package-card">


            <h3>

              Сценарий события

            </h3>




            <strong>

              {scenario.title}

            </strong>





            <p>

              {scenario.description}

            </p>



          </div>









          <div className="package-card">


            <h3>

              Параметры

            </h3>





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








        </div>









        <div className="package-section">



          <h2>

            Команда проекта

          </h2>





          {team.length > 0 ? (


            <ul>


              {team.map((person,index)=>(



                <li key={index}>

                  {person}

                </li>



              ))}



            </ul>



          ) : (


            <p>

              Команда ещё не назначена

            </p>


          )}




        </div>









        <div className="package-section">



          <h2>

            Показатели события

          </h2>





          <div className="metrics-result">



            {Object.entries(metrics).map(

              ([key,value]) => (



                <div key={key}>


                  <span>

                    Показатель {key}

                  </span>


                  <strong>

                    {value}

                  </strong>


                </div>



              )

            )}



          </div>




        </div>









        <div className="package-actions">



          <Link

            to="/dashboard"

            className="dashboard-main-button"

          >

            Вернуться к мероприятию

          </Link>




        </div>






      </div>


    </section>


  );


}



export default Package;