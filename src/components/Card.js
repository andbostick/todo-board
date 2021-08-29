import React, {useState } from 'react'
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
            <div className="grid m-3 place-items-center gap-4">
            <h1>{data?.data().todo}</h1>
            <form onSubmit={handleSubmit}>
                <label>Add Note</label>
                <input className="shadow bg-red-100" type="text" value={value} onChange={handleChange}/>
                <button className="shadow rounded-full bg-blue-200 p-1" type="submit">Enter</button>
                </form>
                <button className="shadow" onClick={deleteTodo}>Delete</button>
                <div className="w-full justify-between grid grid-cols-2 auto-rows-max">
                    {data?.data()?.notes?.map((doc, index) => {
                        return (
                            <div  key={index}>
                                <h3 className="m-5 ">{doc}</h3>
                                <button className="text-right" onClick={() => deleteNote(doc)}>delete note</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card;