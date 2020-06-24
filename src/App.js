import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !content) return;
    const formattedDate = `${date.split('-')[1]}/${date.split('-')[2]}`;
    addTodo({ date: formattedDate, content });
    setDate('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='date'>Date</label>
      <input
        type='date'
        id='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className='form-input'
      ></input>
      <label htmlFor='content'>Todo?</label>
      <input
        type='text'
        name='todo'
        id='todo'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className='form-input'
      />
      <button type='submit' className='form-btn'>
        Submit
      </button>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      date: '5/3',
      content: 'Contribute to Open Source',
    },
    {
      date: '5/4',
      content: 'Make awesome projects',
    },
    {
      date: '5/10',
      content: 'Master React',
    },
  ]);
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };
  return (
    <div>
      <h1>TO DO:</h1>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, i) => {
            return (
              <li key={i}>
                <a
                  href='#'
                  onClick={() => {
                    removeTodo(i);
                  }}
                >
                  <h2>{todo.date}</h2>
                  <p>{todo.content}</p>
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className='done'> You have nothing left. Yay!</p>
      )}

      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
