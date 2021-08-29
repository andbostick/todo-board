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
            <label>{label}</label>
            <input className="shadow" type="text" value={value} onChange={handleChange}/>
            <input className="shadow" type="submit" value="Submit" />
        </form>
    )
}

export default Form;