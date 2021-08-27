import React,{useEffect, useState} from 'react'
import Card from './Card'
import Auth from '../firebase/Auth';







  


function Main({user, todos}) {
 
    return (
        <div>
            
            {!user && <Auth />}
            {user && (
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-4 ">
                    
                    {todos?.docs?.map((doc) => {
                        if (doc.data().id === user.uid) {
                            return (
                                <Card key={doc.id} todo={doc.data().todo} id={doc.id} />
                            )
                        }
                        return (
                            ''
                        )
                    })}
            
                </div>
            )
            }
        </div>
    )
}



export default Main;
