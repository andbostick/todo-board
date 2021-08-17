import React,{useEffect, useState} from 'react'

function Card({ list, index }) {
    
    const [addNote, setAddNote] = useState([])
    const [value, setValue] = useState('')
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAddNote([...addNote, value])
        setValue('')
    }

    const deleteNote = (index) => {
      setAddNote(addNote.filter((e, i) => i !== index));
      
     }

    useEffect(() => {
        
    },[])
    
    return (
        <div className="w-96 min-h-96 bg-red-900 " key={index}>
            <div className="grid grid-flow-row auto-rows-max gap-1 justify-items-center">
            <h1>{list}</h1>
            <form onSubmit={handleSubmit}>
                <label>Add Note</label>
                <input type="text" value={value} onChange={handleChange}/>
                <button type="submit">Enter</button>
                </form>

                {addNote.map((note, index) => {
                    return (
                        <div key={index}>
                    <ul>
                        <li>{note}</li>
                        </ul>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => deleteNote(index)}>Delete</button>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card;