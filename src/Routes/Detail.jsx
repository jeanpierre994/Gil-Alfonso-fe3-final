import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {currentContext} = useContext(ContextGlobal)
  const {theme} = currentContext
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
const [singleDentist, setSingleDentist] = useState({})
const paramsForDentist = useParams()

const getSingleDentist = async() =>{
  const data = await fetch('https://jsonplaceholder.typicode.com/users/' + paramsForDentist.id)
  .then((response)=> {
    return response.json()
  })
  setSingleDentist(data)
}

useEffect(()=> {
  getSingleDentist()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
    <>
    <div className={theme}  >
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div id='divContact'>
      <p>Name Dentist: {singleDentist.name}</p>
      <p>Email: {singleDentist.email}</p>
      <p>Phone number: {singleDentist.phone}</p>
      <p>Web Site: {singleDentist.website}</p>
      </div>
      </div>
    </>
    
  )
}

export default Detail
