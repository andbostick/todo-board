import React from 'react'
import Form from './Form'

function Aside({addTodoDocument }) {
    
    
    
    return (
        <div className="h-100% w-1/4 bg-gray-300 lg:w-20 xl:w-20">
            <h1>HEllo from aside</h1>
            <Form addTodoDocument={addTodoDocument} label={'Create New Task Group'}/>
        </div>
        
    )
}

export default Aside;