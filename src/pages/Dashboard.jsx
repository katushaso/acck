import { Link } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import "./Dashboard.css";


function Dashboard() {


const scenario = JSON.parse(

  localStorage.getItem(
    "selected-scenario"
  )

);




if (!scenario) {


return (

<section className="dashboard">

<div className="container">


<BackButton />



<h2>

Сценарий мероприятия не выбран

</h2>



<Link

to="/constructor"

className="dashboard-main-button"

>

Выбрать сценарий

</Link>


</div>

</section>

);

}






// =====================
// CHECKLIST
// =====================


const checklist = JSON.parse(

  localStorage.getItem(
    `checklist-${scenario.id}`
  )

) || [];



const checklistTotal = 8;



const checklistProgress = Math.round(

  checklist.length /

  checklistTotal *

  100

);







// =====================
// ROLES
// =====================


const roles = JSON.parse(

  localStorage.getItem(
    "event-roles"
  )

) || {};



const rolesTotal = 5;



const rolesCompleted = Object.values(

roles

).filter(Boolean).length;



const rolesProgress = Math.round(

rolesCompleted /

rolesTotal *

100

);







// =====================
// METRICS
// =====================


const metrics = JSON.parse(

localStorage.getItem(

"event-metrics"

)

) || {};



const metricsTotal = 5;



const metricsCompleted = Object.values(

metrics

).filter(

value => value !== ""

).length;



const metricsProgress = Math.round(

metricsCompleted /

metricsTotal *

100

);







// =====================
// TOTAL
// =====================


const totalProgress = Math.round(

(

checklistProgress +

rolesProgress +

metricsProgress

) / 3

);







// =====================
// NEXT STEP
// =====================


let nextStep = `/checklist/${scenario.id}`;

let nextText = "Продолжить подготовку";



if (

checklistProgress === 100 &&

rolesProgress < 100

) {


nextStep = "/roles";


}




if (

checklistProgress === 100 &&

rolesProgress === 100 &&

metricsProgress < 100

) {


nextStep = "/metrics";


}





if (

checklistProgress === 100 &&

rolesProgress === 100 &&

metricsProgress === 100

) {


nextStep = "/package";

nextText = "Пакет готов";


}








return (


<section className="dashboard">


<div className="container">



<BackButton />






<div className="dashboard-header">


<div>


<span className="scenario-level">

Моё мероприятие

</span>




<h1>

День студенческого спорта

</h1>




<p>

{scenario.title}

</p>


</div>






<div className="event-status">


<span>

Статус

</span>



<strong>

🟡 В подготовке

</strong>


</div>


</div>









<div className="overview-card">


<div className="overview-top">


<h2>

Общая готовность

</h2>



<strong>

{totalProgress}%

</strong>



</div>




<div className="dashboard-progress">


<div

style={{

width:`${totalProgress}%`

}}

/>


</div>



</div>









<div className="dashboard-actions">



<Link

to={nextStep}

className="dashboard-main-button"

>

{nextText}

</Link>





<Link

to="/package"

className="dashboard-package-button"

>

Сформировать итоговый пакет →

</Link>



</div>









<div className="dashboard-grid">





<Link

to={`/checklist/${scenario.id}`}

className="dashboard-card"

>


<span>

📋 Подготовка

</span>



<h3>

Чек-лист

</h3>



<strong>

{checklistProgress}%

</strong>



<div className="mini-progress">

<div

style={{

width:`${checklistProgress}%`

}}

/>

</div>



</Link>









<Link

to="/roles"

className="dashboard-card"

>


<span>

👥 Команда

</span>



<h3>

Матрица ролей

</h3>



<strong>

{rolesProgress}%

</strong>



<div className="mini-progress">


<div

style={{

width:`${rolesProgress}%`

}}

/>


</div>



</Link>









<Link

to="/metrics"

className="dashboard-card"

>


<span>

📊 Результаты

</span>



<h3>

Метрики

</h3>



<strong>

{metricsProgress}%

</strong>



<div className="mini-progress">


<div

style={{

width:`${metricsProgress}%`

}}

/>


</div>



</Link>





</div>









<div className="event-passport">


<h2>

Паспорт события

</h2>





<div className="passport-grid">



<div>

<span>

Формат

</span>



<strong>

{scenario.title}

</strong>


</div>





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







</div>


</section>


);

}



export default Dashboard;