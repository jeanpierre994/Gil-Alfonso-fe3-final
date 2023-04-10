import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import doctor from "./public/images/doctor.jpg"


const Card = ({ name, username, id }) => {

  const { currentContext, dispatchContextUpdate } = useContext(ContextGlobal)

  const { data, theme } = currentContext

  const addFav = (dentistName, dentistUserName, dentistId)=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    if (data.filter(dentist => dentist.id === dentistId).length > 0){
      dispatchContextUpdate({ type: "UPDATE_FAVORITES", payload: data.filter(dentist => dentist.id !== dentistId)})
      return
    }
    const dataToUpdate = data.length === 0 ?  [{name: dentistName, username: dentistUserName, id: dentistId}] : 
    [...data, {name: dentistName, username: dentistUserName, id: dentistId}]
    dispatchContextUpdate({ type: "UPDATE_FAVORITES", payload: dataToUpdate})
  }

  return (
    <div className={theme === "light" ? "card" : "card-dark"}>
      <Link to={`detail/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src={doctor} alt={name} width='180px'  />
        </Link>
        <h2>{name}</h2>
        <h3>User: {username}</h3>
        <h3>ID: {id}</h3>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        <button onClick={() => addFav(name, username, id)} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;