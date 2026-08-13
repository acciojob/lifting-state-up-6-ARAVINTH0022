import React from 'react';

const TodoList = (props) => {
  const todos = props.todos || [];
  const handleComplete = props.handleComplete || props.onComplete;

  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id || index}>
            <span>{todo.text || todo.title}</span>
            {!todo.completed && !todo.isCompleted && (
              <button onClick={() => handleComplete && handleComplete(todo.id !== undefined ? todo.id : index)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
