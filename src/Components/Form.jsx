import React, { useState, useContext } from "react";

import { ContextGlobal } from "./utils/global.context";

const Form = () => {
  //Aqui deberan implementar el form completo con sus
  const { currentContext } = useContext(ContextGlobal)
  const { theme } = currentContext

  const [selectName, setSelectName] = useState("");
  const [mail, setMail] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [send, setSend] = useState(false);
  const [errorSelect, setErrorSelect] = useState("");

  const onChangeSelectName = (event) => {
    setSelectName(event.target.value);
  };
  const onChangeMail = (event) => {
    setMail(event.target.value);
  };

  const onChangeSelect = (event) => {
    setSelectValue(event.target.value);
  };

  const validName = (selectName) => {
    const withoutSpace = selectName.trim();

    if (withoutSpace.length > 5) {
      return true;
    } else {
      setErrorSelect("Por favor verifique su información nuevamente");
      return false;
    }
  };

  const validMail = (selectMail) => {
    const withoutSpace = selectMail.trim();

    if (withoutSpace.length > 6) {
      return true;
    } else {
      setErrorSelect("Por favor verifique su información nuevamente");
      return false;
    }
  };

  const completeInput = (selectName, mail) => {
    if (selectName === "" || mail === "") {
      setErrorSelect("Por favor chequea que la información sea correcta");
      setSend(false);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isNameValid = validName(selectName);
    const isMailValid = validMail(mail);

    const isCompleteInput = completeInput(selectName, mail);

    if (selectName === "") {
      setErrorSelect("Select name");

      return;
    }

    if (mail === "") {
      setErrorSelect("Select mail");

      return;
    }

    if (selectValue === "") {
      setErrorSelect("Select Dr or Dra");

      return;
    }

    if (isNameValid && isMailValid && isCompleteInput) {
      setSend(true);
      setErrorSelect("");
    }
  };

  return (
    <div className={theme}>
      <form onSubmit={handleSubmit}
      action="#"
      target=""
      method="get"
      name="formDatosPersonales">
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Write your name"
          value={selectName}
          onChange={onChangeSelectName}
        />

        <input
          type="mail"
          name="email"
          id="email"
          required
          placeholder="mail"
          value={mail}
          onChange={onChangeMail}
        />

        <select
          placeholder="Dr or Dra"
          value={selectValue}
          onChange={onChangeSelect}
        >
          <option value="" disabled default>
            Dr of Dra
          </option>
          <option value="Dr">Dr</option>
          <option value="Dra">Dra</option>
        </select>
        <input type="submit" value="enviar" />
      </form>
      <div className="error">{errorSelect}</div>

      {send && (
        <div><p>Gracias {selectName}, te contactaremos cuando antes vía mail</p></div>
      )}
    </div>
  );
};

export default Form;