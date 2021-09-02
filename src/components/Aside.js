import React from 'react'
import Form from './Form'

function Aside({addTodoDocument,user }) {
    
    
    
    return (
        <div className="grid place-items-center m-3">
            <h1 className='text-center text-9xl'>ToDoist</h1>
            {user &&
                <div className="place-items-center max-w-xs bg-blue-500 p-5 m-5">
            
        <Form addTodoDocument={addTodoDocument} label={'Create New Task Group'}/>
        </div>}
        
            
            </div>
        
    )
}

export default Aside;