import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [value, setValue] = useState('');
  const [responses, setResponses] = useState([]);

  const onClickHandler = (e) => {
    e.preventDefault();
    axios
      .post('test/lox', {
        data: value,
      })
      .then((res) => {
        setResponses([...responses, res.data.data]);
      });
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <input value={value} onChange={onChangeHandler} />
      <button onClick={onClickHandler}>НАжми меня</button>
      {responses.length > 0 && responses.map((el) => <h1>{el}</h1>)}
    </div>
  );
}

export default App;
