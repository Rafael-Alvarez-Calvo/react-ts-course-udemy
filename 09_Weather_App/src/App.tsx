import { Form } from './components/Form/Form';
import { useWeather } from './hooks/useWeather';

import styles from './App.module.css';
import { WeatherDetail } from './components/WeatherDetail/WeatherDetail';
import { Spinner } from './components/Spinner/Spinner';
import { Alert } from './components/Alert/Alert';

function App() {

  const { weather, fetchWeather, hasWeatherData, loading, isNotFound } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador clima</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        { loading && <Spinner /> }
        { hasWeatherData && <WeatherDetail weather={weather} /> }
        { isNotFound && <Alert>No hemos encontrado esa ciudad</Alert>}
      </div>
    </>
  )
}

export default App
