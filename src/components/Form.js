import React,{useState} from 'react'

function Form({ newTask, setNewTask }) {
    
    const [value, setValue] = useState('');
    
    const handleChange = (e) => {
        setValue(e.target.value)
        // console.log(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewTask(value)
        // console.log(newTask)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Create New Task Group</label>
            <input type="text" value={value} onChange={handleChange}/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form;