import React from 'react';

const List = ({todos, loading}) => {
    let todoList = <div>Loading...</div>;
    if(!loading) todoList = todos.map(todo => <li>{todo.task}</li>)
  return (
    <ul>
        {todoList}
    </ul>
  );
}

export default List;