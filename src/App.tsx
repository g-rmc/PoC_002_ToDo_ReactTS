import './App.css';
import database from './db/database';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

type TaskType = typeof database[0];

function Task({task}: {task: TaskType}) {
  const [taskStatus, setTaskStatus] = useState(task.done);

  return (
    <li>
      <StyledDiv status={taskStatus}>
        <h3>{task.title}</h3>
        <p>{taskStatus? "Concluído" : "Não Concluído"}</p>
        <input type="checkbox" checked={taskStatus} onChange={() => setTaskStatus(!taskStatus)}></input>
      </StyledDiv>
    </li>
  )
}

function App() {
  const [taskList, setTaskList] = useState(database);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setTaskList(database);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Afazeres:</h1>
        <ul>
          {taskList.map((taskItem, index) => <Task key={index} task={taskItem}/>)}
        </ul>
        <form
          onSubmit={() => {
            setTaskList([...taskList, {id: taskList.length+1, title:inputText, done:false}]);
          }}>
          <StyledInput
            value={inputText}
            onChange={e => setInputText(e.target.value)}/>
          <input type='submit'/>
        </form>
        
      </header>
    </div>
  );
}

const StyledDiv = styled.div<{status: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  margin-top: 20px;
  padding: 0 20px;
  border-radius: 10px;
  background-color: #ffffff1f;
  transition: filter, transform 200ms;
  &:hover{
    filter: brightness(0.6);
    transform: translateX(10px);
  }

  h3 {
    text-decoration: ${props => props.status? 'line-through' : 'none'};
  }
  p{
    color: ${props => props.status? 'green' : 'red'};
  }
  input{
    width: 20px;
    height: 20px;
  }
`

const StyledInput = styled.input`
  width: 600px;
  height: 80px;
  margin: 20px;
  padding: 0 20px;
  font-size: 30px;
`

export default App;