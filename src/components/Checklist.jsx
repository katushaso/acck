import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import scenarios from "../data/scenarios.js";
import BackButton from "./BackButton.jsx";
import "./Checklist.css";



const checklistData = {


  1: [

    {
      stage: "Концепция события",

      tasks: [

        "Определить дату и формат мероприятия",

        "Выбрать площадку проведения"

      ]

    },


    {
      stage: "Команда",

      tasks: [

        "Сформировать команду организаторов",

        "Назначить ответственных за направления"

      ]

    },


    {
      stage: "Подготовка",

      tasks: [

        "Подготовить спортивный инвентарь",

        "Создать регистрацию участников",

        "Подготовить информационные материалы"

      ]

    },


    {
      stage: "Проведение",

      tasks: [

        "Провести мероприятие"

      ]

    }


  ],






  2: [

    {
      stage: "Планирование",

      tasks: [

        "Определить концепцию события",

        "Согласовать площадки"

      ]

    },


    {
      stage: "Команда региона",

      tasks: [

        "Подключить студенческие спортивные клубы",

        "Сформировать оргкоманду"

      ]

    },


    {
      stage: "Коммуникация",

      tasks: [

        "Найти партнёров региона",

        "Подготовить медиаплан",

        "Организовать фан-зону"

      ]

    },


    {
      stage: "После события",

      tasks: [

        "Собрать обратную связь участников"

      ]

    }


  ],






  3: [

    {
      stage: "Стратегия события",

      tasks: [

        "Сформировать расширенный оргкомитет",

        "Определить программу большого события"

      ]

    },


    {
      stage: "Инфраструктура",

      tasks: [

        "Подключить региональных партнёров",

        "Подготовить спортивные объекты"

      ]

    },


    {
      stage: "Команда",

      tasks: [

        "Организовать работу судей",

        "Создать медиакоманду"

      ]

    },


    {
      stage: "Аналитика",

      tasks: [

        "Настроить систему аналитики",

        "Подвести итоги мероприятия"

      ]

    }


  ]


};








function Checklist() {


  const { id } = useParams();




  const savedScenario = JSON.parse(

    localStorage.getItem(
      "selected-scenario"
    )

  );



  const scenario = savedScenario ||

    scenarios.find(

      item => item.id === Number(id)

    );





  const stages = checklistData[

    scenario?.id || id

  ] || [];





  const allTasks = stages.flatMap(

    stage => stage.tasks

  );






  const [completed, setCompleted] = useState(() => {


    const saved = localStorage.getItem(

      `checklist-${scenario?.id}`

    );


    return saved

      ? JSON.parse(saved)

      : [];


  });








  useEffect(() => {


    localStorage.setItem(

      `checklist-${scenario?.id}`,

      JSON.stringify(completed)

    );


  }, [completed, scenario?.id]);








  function toggleTask(task) {


    setCompleted(prev =>


      prev.includes(task)

        ? prev.filter(item => item !== task)

        : [...prev, task]


    );


  }








  const progress = Math.round(


    completed.length /

    allTasks.length *

    100


  );








  if (!scenario) {


    return (

      <div className="container">

        <h2>

          Сценарий не найден

        </h2>


        <Link to="/constructor">

          Выбрать сценарий

        </Link>


      </div>

    );


  }








  return (



    <section className="checklist">


      <div className="container">


        <BackButton />





        <span className="scenario-level">

          {scenario.title}

        </span>





        <h1>

          Чек-лист подготовки

        </h1>





        <p className="checklist-subtitle">

          Готовность события: {progress}%

        </p>









        <div className="progress-card">



          <div className="progress-top">


            <div>


              <span>

                Выполнено задач

              </span>


              <p>

                {completed.length}

                {" из "}

                {allTasks.length}

              </p>


            </div>




            <strong>

              {progress}%

            </strong>



          </div>






          <div className="progress-track">


            <div

              className="progress-value"

              style={{

                width:`${progress}%`

              }}

            />


          </div>



        </div>









        <div className="check-block">



          {stages.map((stage,index)=>(


            <div

              className="check-stage"

              key={index}

            >



              <h3>

                {stage.stage}

              </h3>








              {stage.tasks.map(task => (



                <label

                  key={task}

                  className={

                    completed.includes(task)

                    ? "check-item completed"

                    : "check-item"

                  }

                >




                  <input

                    type="checkbox"

                    checked={

                      completed.includes(task)

                    }

                    onChange={() =>

                      toggleTask(task)

                    }

                  />





                  <span>

                    {task}

                  </span>



                </label>



              ))}



            </div>



          ))}



        </div>








        {progress === 100 && (


          <Link

            to="/roles"

            className="dashboard-main-button"

          >

            Перейти к распределению ролей →

          </Link>


        )}






      </div>


    </section>


  );


}


export default Checklist;