import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Aside from './components/Aside';
import Main from './components/Main';
import SignInScreen from './firebase/Auth';
import firebase from './firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';




function App() {
  
  const [newTask, setNewTask] = useState('')

  const db = firebase.firestore();
    const [user, loading, error] = useAuthState(firebase.auth());
    console.log('loading:', loading, '|', 'current user:', user);
    
    const [todos, todosLoading, todosError] = useCollection(
        firebase.firestore().collection('todo'),
        {}
    );

    const addTodoDocument = async (todo) => {
        await db.collection('todo').add({
            todo: todo,
            id: user?.uid
            
            
        }, { merge: true })
    }


  
  

  return (
    <Router>
      <Switch>
        <Route path="/auth">
        <SignInScreen />
        </Route>
        <Route path="/">
        <div className="flex flex-row flex-wrap">
        
        <Aside newTask={newTask} setNewTask={setNewTask} addTodoDocument={addTodoDocument}/>
        <Main todos={todos} user={user}/>
        </div>
        </Route>
        
      
      </Switch>
      
    </Router>
  );
}

export default App;
