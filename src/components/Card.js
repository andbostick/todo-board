import React, { useEffect, useState } from 'react'
import firebase from '../firebase/clientApp'
import {useDocument} from 'react-firebase-hooks/firestore'

function Card({ list, index, addTodoDocument, todo, id, db }) {
    
    const dbRef = db.collection('todo').doc(id)
    const [data, loading, error] = useDocument(
        firebase.firestore().doc(`todo/${id}`)
    );

    const [value, setValue] = useState('')
    
    const deleteTodo = () => {
        dbRef.delete();
        
    }

    const newNote = (note) => {
        dbRef.update({
            notes: firebase.firestore.FieldValue.arrayUnion(note)
        })
    }

    const deleteNote = (note) => {
        dbRef.update({
            notes: firebase.firestore.FieldValue.arrayRemove(note)
        })
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newNote(value)
        // addTodoDocument(value);
        setValue('')
    }


    
    return (
        <div className="bg-white rounded-md p-3 m-3 justify-items-center" key={index}>
            <div className="grid m-3">
            <h1>{data?.data().todo}</h1>
            <form onSubmit={handleSubmit}>
                <label>Add Note</label>
                <input className="bg-red-100" type="text" value={value} onChange={handleChange}/>
                <button className="rounded-full bg-blue-200 p-1" type="submit">Enter</button>
                </form>
                <button onClick={deleteTodo}>Delete</button>
                <div>
                    {data?.data()?.notes?.map((doc, index) => {
                        return (
                            <>
                            <h3 key={index}>{doc}</h3>
                                <button onClick={() => deleteNote(doc)}>delete note</button>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card;