import { useState } from 'react'
import { periodosDisponiveis } from './constants'
import './App.scss'
import { FaStar, FaRegStar } from "react-icons/fa";


function App() {
  const [count, setCount] = useState(0)
  const [periodos, setPeriodo] = useState([
    {
        id: 1,
        texto: 'Manhã',
        selecionado : true
    },
    {
        id: 2,
        texto: 'Tarde',
        selecionado : false
    },
    {
        id: 3,
        texto: 'Noite',
        selecionado : false
    },
    {
        id: 4,
        texto: 'Madrugada',
        selecionado : false
    }
])

function changeSelection(id){
  const updatedPeriodos = periodos.map(periodo =>
    periodo.id == id
      ? { ...periodo, selecionado: true } // Define como selecionado
      : { ...periodo, selecionado: false } // Define os outros como não selecionados
  );

  setPeriodo(updatedPeriodos);
  console.table(updatedPeriodos)
}

  return (
    <>
     <h3>Selecione o melhor período:</h3>
      <ul>
        {periodos.map((periodo) => <li key={periodo.id}>{periodo.texto}
        
        <label htmlFor={periodo.id}>
          {
            periodo.selecionado ? <FaStar/> :   <FaRegStar/>
          }
       
     
           </label>
         <input type="radio" name="periodo" id={periodo.id} onChange={(e) => changeSelection(e.target.id)}/>
        
        </li>)}
      </ul>
    </>
  )
}

export default App
