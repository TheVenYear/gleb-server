import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Todos = () => {
  const [value, setValue] = useState('');
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    axios.get('todos/').then((res) => {
      setResponses(res.data);
    });
  }, []);

  const onClickHandler = (e) => {
    e.preventDefault();
    axios
      .post('todos/', {
        title: value,
      })
      .then((res) => {
        setResponses([...responses, res.data]);
        // axios.get('todos/').then((res) => {
        //   setResponses(res.data);
        // });
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
      {responses.length > 0 && responses.map((el) => <h1>{el.title}</h1>)}
    </div>
  );
};

export default Todos;
