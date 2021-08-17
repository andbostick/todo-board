import { useState } from 'react';
import './App.css';
import Aside from './components/Aside';
import Main from './components/Main';


function App() {

  const [newTask, setNewTask] = useState('')
  const [currentList, setCurrentList] = useState([]);

  return (
    <div className="flex flex-row flex-wrap">
      <Aside newTask={newTask} setNewTask={setNewTask}/>
      <Main newTask={newTask} currentList={currentList} setCurrentList={setCurrentList}/>
    </div>
  );
}

export default App;
