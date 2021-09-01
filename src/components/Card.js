import React, {useState } from 'react'
import firebase from '../firebase/clientApp'
import { useDocument } from 'react-firebase-hooks/firestore'
import { FiXCircle, FiTrash } from "react-icons/fi";

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
        <div className="relative bg-white rounded-md p-3 m-3 justify-items-center" key={index}>
            <button className="absolute -top-1 right-0" onClick={deleteTodo}><FiTrash/></button>
            <div className="grid m-3 place-items-center gap-4">
            <h1>{data?.data().todo}</h1>
            <form onSubmit={handleSubmit}>
                <label>Add Note</label>
                <input className="shadow m-1" type="text" value={value} onChange={handleChange}/>
                <button className="shadow m-1  rounded-full bg-blue-200 p-1" type="submit">Enter</button>
                </form>
                <div className="w-full ">
                    {data?.data()?.notes?.map((doc, index) => {
                        return (
                            <div className="grid grid-cols-2 auto-rows-max" key={index}>
                                <h3 className="m-5 ">{doc}</h3>
                                <button className="self-center place-self-end" onClick={() => deleteNote(doc)}><FiXCircle/></button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card;