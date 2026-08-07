import { useState } from "react";
import { useNavigate } from "react-router-dom";
import scenarios from "../data/scenarios.js";
import BackButton from "./BackButton.jsx";
import "./EventConstructor.css";


function EventConstructor() {


  const navigate = useNavigate();


  const [step, setStep] = useState(1);



  const [answers, setAnswers] = useState({

    clubs: "",

    resources: "",

    participants: ""

  });







  function choose(field, value) {


    setAnswers(prev => ({

      ...prev,

      [field]: value

    }));


  }







  function createEvent(lastAnswer = {}) {



    const finalAnswers = {


      ...answers,

      ...lastAnswer


    };





    let result = 1;






    if (


      finalAnswers.clubs === "10+" ||

      finalAnswers.resources === "Много" ||

      finalAnswers.participants === "300+"


    ) {


      result = 3;


    }






    else if (


      finalAnswers.clubs === "4-10" ||

      finalAnswers.resources === "Есть партнёры" ||

      finalAnswers.participants === "100-300"


    ) {


      result = 2;


    }







    const scenario = scenarios.find(

      item => item.id === result

    );







    localStorage.setItem(

      "selected-scenario",

      JSON.stringify(scenario)

    );





    localStorage.setItem(

      "constructor-answers",

      JSON.stringify(finalAnswers)

    );






    navigate("/dashboard");


  }








  return (



    <section className="constructor">


      <div className="container">


        <BackButton />





        <div className="constructor-header">



          <span className="scenario-level">

            Конструктор события

          </span>



          <h1>

            Создание регионального пакета

          </h1>



          <p>

            Ответьте на несколько вопросов,
            чтобы подобрать подходящий формат
            Дня студенческого спорта.

          </p>



        </div>








        <div className="constructor-card">







          {step === 1 && (


            <>


              <h2>

                Сколько студенческих спортивных клубов участвует?

              </h2>





              <button

                onClick={() => {

                  choose("clubs","1-3");

                  setStep(2);

                }}

              >

                1–3 клуба

              </button>







              <button

                onClick={() => {

                  choose("clubs","4-10");

                  setStep(2);

                }}

              >

                4–10 клубов

              </button>







              <button

                onClick={() => {

                  choose("clubs","10+");

                  setStep(2);

                }}

              >

                Более 10 клубов

              </button>



            </>


          )}









          {step === 2 && (


            <>



              <h2>

                Какие ресурсы доступны региону?

              </h2>






              <button

                onClick={() => {

                  choose("resources","Минимум");

                  setStep(3);

                }}

              >

                Только площадки вузов

              </button>







              <button

                onClick={() => {

                  choose("resources","Есть партнёры");

                  setStep(3);

                }}

              >

                Есть партнёры региона

              </button>







              <button

                onClick={() => {

                  choose("resources","Много");

                  setStep(3);

                }}

              >

                Развитая инфраструктура

              </button>



            </>


          )}









          {step === 3 && (


            <>


              <h2>

                Сколько участников ожидается?

              </h2>







              <button

                onClick={() =>

                  createEvent({

                    participants:"до 100"

                  })

                }

              >

                До 100 человек

              </button>








              <button

                onClick={() =>

                  createEvent({

                    participants:"100-300"

                  })

                }

              >

                100–300 человек

              </button>








              <button

                onClick={() =>

                  createEvent({

                    participants:"300+"

                  })

                }

              >

                Более 300 человек

              </button>



            </>


          )}






        </div>





      </div>


    </section>


  );


}



export default EventConstructor;