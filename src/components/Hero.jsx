import { Link } from "react-router-dom";
import "./Hero.css";


function Hero() {


  return (


    <section className="hero">


      <div className="container hero__wrapper">



        <div className="hero__text">


          <span className="hero__tag">

            АССК России

          </span>





          <h1>

            Единый региональный пакет

            <br />

            ко Дню студенческого спорта

          </h1>





          <p>

            Цифровой конструктор подготовки
            спортивного события для региональных
            отделений АССК России.

          </p>






          <Link

            to="/constructor"

            className="hero__button"

            aria-label="Создать спортивное мероприятие"

          >

            Создать мероприятие

          </Link>




        </div>








        <div className="hero__card">



          <h3>

            Внутри решения

          </h3>





          <div className="hero__item">


            <span>
              01
            </span>


            <p>
              Сценарий события
              под возможности региона
            </p>


          </div>







          <div className="hero__item">


            <span>
              02
            </span>


            <p>
              Чек-лист подготовки
              с контролем готовности
            </p>


          </div>







          <div className="hero__item">


            <span>
              03
            </span>


            <p>
              Матрица ролей
              и ответственности команды
            </p>


          </div>







          <div className="hero__item">


            <span>
              04
            </span>


            <p>
              Метрики результата
              после проведения события
            </p>


          </div>





        </div>





      </div>


    </section>


  );


}


export default Hero;