import React,{useEffect, useState} from 'react'
import Card from './Card'

function Main({ newTask, currentList, setCurrentList }) {
    

    useEffect(() => {
        
        setCurrentList([...currentList, newTask].filter((word)=> word.length > 1))

        console.log(currentList)
    }, [newTask])
    

    return (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-4 ">
            {currentList.map((list, index) => {
                return(
                    <Card list={list} index={index}/>
                )
            })}
            
        </div>
    )
}

export default Main;