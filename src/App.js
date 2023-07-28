import { useState } from 'react';
import DemoFetch from './components/DomoFetch';
import DemoLocalStorage from './components/DemoLocalStorage';
import DemoHover from './components/DemoHover';
import DemoViewportSize from './components/DemoViewportSize';
import './App.css';

function App() {
  const [exercise, setExercise] = useState('useFetch');

  const handleChange = ({ target }) => {
    setExercise(target.value);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <fieldset>
          <legend>Выбор задания</legend>
          <div>
            <label>
              <input
                onChange={handleChange}
                type='radio'
                id='fetch'
                name='hooks'
                value='useFetch'
                checked={exercise === 'useFetch'}
              ></input>
              useFetch
            </label>
          </div>
          <div>
            <label>
              <input
                onChange={handleChange}
                type='radio'
                id='localStorage'
                name='hooks'
                value='useLocalStorage'
                checked={exercise === 'useLocalStorage'}
              ></input>
              useLocalStorage
            </label>
          </div>
          <div>
            <label>
              <input
                onChange={handleChange}
                type='radio'
                id='hover'
                name='hooks'
                value='useHover'
                checked={exercise === 'useHover'}
              ></input>
              useHover
            </label>
          </div>
          <div>
            <label>
              <input
                onChange={handleChange}
                type='radio'
                id='viewportSize'
                name='hooks'
                value='useViewportSize'
                checked={exercise === 'useViewportSize'}
              ></input>
              useViewportSize
            </label>
          </div>
        </fieldset>
        {exercise === 'useFetch' && (
          <>
            <h1>{exercise}</h1>
            <DemoFetch />
          </>
        )}
        {exercise === 'useLocalStorage' && (
          <>
            <h1>{exercise}</h1>
            <DemoLocalStorage />
          </>
        )}
        {exercise === 'useHover' && (
          <>
            <h1>{exercise}</h1>
            <DemoHover />
          </>
        )}
        {exercise === 'useViewportSize' && (
          <>
            <h1>{exercise}</h1>
            <DemoViewportSize />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
