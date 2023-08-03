import { useState } from 'react';
import DemoFetch from './components/DomoFetch';
import DemoLocalStorage from './components/DemoLocalStorage';
import DemoHover from './components/DemoHover';
import DemoViewportSize from './components/DemoViewportSize';
import DemoWindowScroll from './components/DemoWindowScroll';
import DemoToggle from './components/DemoToggle';
import './App.css';

function App() {
  const [exercise, setExercise] = useState('useFetch');
  const exercises = [
    'useFetch',
    'useLocalStorage',
    'useHover',
    'useViewportSize',
    'useWindowScroll',
    'useToggle',
  ];

  const handleChange = ({ target }) => {
    setExercise(target.value);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <fieldset>
          <legend>Выбор задания</legend>

          {exercises.map((ex) => (
            <div key={ex}>
              <label>
                <input
                  onChange={handleChange}
                  type='radio'
                  id={ex}
                  name='hooks'
                  value={ex}
                  checked={exercise === ex}
                ></input>
                {ex}
              </label>
            </div>
          ))}
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
        {exercise === 'useWindowScroll' && (
          <>
            <h1>{exercise}</h1>
            <DemoWindowScroll />
          </>
        )}
        {exercise === 'useToggle' && (
          <>
            <h1>{exercise}</h1>
            <DemoToggle />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
