import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
import {DragDropContext, DropResult} from 'react-beautiful-dnd'

const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone:false}])
    }
    setTodo("");
  }

  const onDragEnd = (result:DropResult) => {
    const {source, destination} = result;

    // 사용자가 드랍존에 드랍하지 않은 경우, 아무것도 반환 x
    if(!destination) return

    // 사용자가 원래 있던 드랍존에 드래그 & 드랍한 경우도 암것도 반환 x
    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add;
    let active = todos;
    let complete = completedTodos;

    // 드래그를 시작한 드랍존의 id가 TodosList인 경우 : todo를 수행 했음을 의미하니 active 배열에서 해당 todo 제거
    if(source.droppableId==='TodosList'){
      add = active[source.index];
      active.splice(source.index, 1);
    }else{ // 드래그를 시작한 드랍존의 id가 TodosRemove인 경우 : todo를 수행 완료 처리 한것을 취소 하는 것이니 complete 배열에서 todo 정보 제거
      add = complete[source.index];
      complete.splice(source.index, 1)
    }

    if(destination.droppableId==='TodosList'){
      active.splice(destination.index, 0, add);
    }else{
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete)
    setTodos(active)
  }
 
  return(
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='App'>
        <span className="heading">To Do List for Today !</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
      </div>
    </DragDropContext>
  )
}

export default App;
