import React, { useState } from 'react'
import {db} from "../firebase";

function Todos(user) {
    const [text, setText] = useState('');

    const addTodo = (e) =>{
        e.preventDefault();
        db.collection("todos").doc(user.uid).set({
            todos: text
        })
    }

    return (
        <div className="container">
            <h1>Add Todos</h1>
            <form>
                <div className="input-field col s6">
                    <input type="text" placeholder="Add Todos" value={text} onChange={(e) => { setText(e.target.value) }} />
                </div>
                <button className='btn blue' onClick={(e)=>addTodo(e)}>Add</button>
            </form>
        </div>
    )
}

export default Todos
