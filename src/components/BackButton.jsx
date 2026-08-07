import { useNavigate } from "react-router-dom";
import "./BackButton.css";


function BackButton() {


  const navigate = useNavigate();



  return (

    <button

      className="back-button"

      onClick={() => navigate(-1)}

    >

      ← Назад

    </button>

  );


}


export default BackButton;