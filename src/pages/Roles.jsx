import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import "./Roles.css";



const rolesData = [

  {
    id: 1,
    role: "Руководитель проекта",
    description:
      "Координация подготовки и контроль сроков",
  },


  {
    id: 2,
    role: "Спортивный координатор",
    description:
      "Организация спортивных активностей и площадок",
  },


  {
    id: 3,
    role: "Ответственный за участников",
    description:
      "Регистрация, коммуникация и сопровождение участников",
  },


  {
    id: 4,
    role: "Медиа-координатор",
    description:
      "Фото, видео, публикации и информационное сопровождение",
  },


  {
    id: 5,
    role: "Партнёрский менеджер",
    description:
      "Работа с партнёрами и внешними организациями",
  }

];






function Roles() {


  const [roles, setRoles] = useState(() => {


    const saved = localStorage.getItem(

      "event-roles"

    );


    return saved

      ? JSON.parse(saved)

      : {};

  });






  useEffect(() => {


    localStorage.setItem(

      "event-roles",

      JSON.stringify(roles)

    );


  }, [roles]);









  function updateRole(id, value) {


    setRoles(prev => ({


      ...prev,


      [id]: value


    }));

  }







  const completed = Object.values(

    roles

  ).filter(Boolean).length;





  const progress = Math.round(

    completed /

    rolesData.length *

    100

  );









  return (



    <section className="roles">



      <div className="container">



        <BackButton />






        <div className="roles-header">



          <span className="scenario-level">

            Команда события

          </span>





          <h1>

            Матрица ролей

          </h1>





          <p>

            Назначьте ответственных участников
            команды подготовки мероприятия.

          </p>



        </div>









        <div className="roles-progress">



          <div>


            <span>

              Готовность команды

            </span>



            <strong>

              {progress}%

            </strong>


          </div>





          <div className="roles-progress-line">


            <div

              style={{

                width:`${progress}%`

              }}

            />


          </div>



        </div>









        <div className="roles-list">





          {rolesData.map(item => (



            <div

              className="role-card"

              key={item.id}

            >




              <div className="role-info">


                <h3>

                  {item.role}

                </h3>




                <p>

                  {item.description}

                </p>


              </div>








              <input


                type="text"


                placeholder="Введите ФИО"


                value={

                  roles[item.id] || ""

                }


                onChange={(e) =>

                  updateRole(

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

            to="/metrics"

            className="dashboard-main-button"

          >

            Перейти к метрикам →

          </Link>


        )}






      </div>



    </section>



  );


}



export default Roles;