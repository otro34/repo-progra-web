import { useState,useContext,useEffect } from 'react'
import Weather from './components/Weather'

function App() {

  const datos = {
    city: "Lima",
    temperatureC: 15,
    temperatureF: 59,

  }

  const defaultValues = {
    city: datos.city,
    temperature: datos.temperatureC,
    unit: 'Celcius',
    symbol: 'C'
  }

  const [ click, setClick ] = useState(0);
  const [ current, setCurrent] = useState(defaultValues)

  const handlerCurrent = () => {
    if (current.unit === 'Celcius') {
      const farenheitValues = {
        city: datos.city,
        temperature: datos.temperatureF,
        unit: 'Farenheit',
        symbol: 'F'
      } 
      setCurrent(farenheitValues);
    } else {
      setCurrent(defaultValues)
    }
  } 

  const notificacion = () => {
    return (<h2>Usted ha hecho mas de 33 clicks!</h2>)
  }

  return (
    <div >
      <h1>Usted ha hecho { click } clicks!!</h1>
      <button onClick={() => setClick(click+1)}>Click</button>

      {(click>33) && notificacion()}

      <Weather
        title={current.city}
        text={current.temperature}
        unit={current.symbol}
        onClick={() => handlerCurrent()}
         />
    </div>
  );
}

export default App;
