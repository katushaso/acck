import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import "./Metrics.css";



const metricsData = [

  {
    id: 1,
    title: "Количество участников",
    placeholder: "Например, 250"
  },


  {
    id: 2,
    title: "Количество образовательных организаций",
    placeholder: "Например, 8"
  },


  {
    id: 3,
    title: "Количество спортивных активностей",
    placeholder: "Например, 12"
  },


  {
    id: 4,
    title: "Количество партнёров",
    placeholder: "Например, 5"
  },


  {
    id: 5,
    title: "Обратная связь участников",
    placeholder: "Например, 95% положительных отзывов"
  }

];







function Metrics() {


  const [metrics, setMetrics] = useState(() => {


    const saved = localStorage.getItem(

      "event-metrics"

    );


    return saved

      ? JSON.parse(saved)

      : {};

  });







  useEffect(() => {


    localStorage.setItem(

      "event-metrics",

      JSON.stringify(metrics)

    );


  }, [metrics]);









  function updateMetric(id, value) {


    setMetrics(prev => ({


      ...prev,


      [id]: value


    }));

  }







  const completed = Object.values(

    metrics

  ).filter(

    value => value.trim() !== ""

  ).length;






  const progress = Math.round(

    completed /

    metricsData.length *

    100

  );









  return (



    <section className="metrics">



      <div className="container">



        <BackButton />








        <div className="metrics-header">



          <span className="scenario-level">

            Результаты события

          </span>





          <h1>

            Метрики эффективности

          </h1>





          <p>

            Заполните основные показатели,
            чтобы сформировать итоговый паспорт события.

          </p>



        </div>









        <div className="metrics-progress">



          <div>


            <span>

              Заполнение показателей

            </span>



            <strong>

              {progress}%

            </strong>



          </div>







          <div className="metrics-progress-line">


            <div

              style={{

                width:`${progress}%`

              }}

            />

          </div>



        </div>









        <div className="metrics-list">





          {metricsData.map(item => (



            <div

              className="metric-card"

              key={item.id}

            >



              <label>


                {item.title}


              </label>





              <input


                type="text"


                placeholder={item.placeholder}


                value={

                  metrics[item.id] || ""

                }


                onChange={(e) =>


                  updateMetric(

                    item.id,

                    e.target.value

                  )


                }


              />



            </div>



          ))}





        </div>









        {progress === 100 && (



          <Link

            to="/package"

            className="dashboard-main-button"

          >

            Сформировать пакет события →

          </Link>



        )}






      </div>



    </section>



  );


}



export default Metrics;