import { useCallback, useState } from 'react';
import './App.css'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)

  // 1 time run
  const handlClick = useCallback(() => {
    console.log('Clicked here');
  }, []);


  return (
    <>
      <h1>State Update</h1>
      <h4>Count: {count}</h4>

      <button onClick={()=>setCount(count + 1)}>Increase</button>
      <Child onPress={handlClick} />

    </>
  )
}

export default App
