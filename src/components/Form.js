import React, { useState } from 'react'


function Form({label, addTodoDocument }) {

    const [value, setValue] = useState('');
    
    
    const handleChange = (e) => {
        if (e.target.value === '') {
            return
        }
        setValue(e.target.value)
        // console.log(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '') {
            return
        } else {
            addTodoDocument(value)
            setValue('')

        }

    }

    return (
        <form className='text-center ' onSubmit={handleSubmit}>
            <label className="text-2xl">{label}</label>
            <input className="p-1 shadow" type="text" value={value} onChange={handleChange}/>
            <input className="hover:bg-gray-400 text-blue-400 rounded shadow p-0.5 m-2" type="submit" value="Submit" />
        </form>
    )
}

export default Form;