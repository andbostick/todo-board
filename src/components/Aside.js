import React from 'react'
import Form from './Form'

function Aside({addTodoDocument }) {
    
    
    
    return (
        <div className="place-items-center">
            <h1 className='text-center'>ToDoist</h1>
        <div className="  w-50% bg-gray-300 p-4 m-5">
            
            <Form addTodoDocument={addTodoDocument} label={'Create New Task Group'}/>
            </div>
            </div>
        
    )
}

export default Aside;