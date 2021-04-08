import React from 'react';
import './Item.css'

const Item = ({ todo, changeTodoStatus}) => {

    const toggleItem = (e) => {
        const id = Number(e.target.dataset.id);
        changeTodoStatus(id);
    }

    const itemClassName = todo.complete ? 'did':'todo';


    return (
        <li className={itemClassName} data-id={todo.id} onClick={toggleItem}> {todo.task} </li>
    );
}

export default Item;