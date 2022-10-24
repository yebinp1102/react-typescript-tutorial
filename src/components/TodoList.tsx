import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from './model'
import SingleTodo from './SingleTodo';
import './styles.css'

interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {
  return (
    <div className="container">
      <Droppable droppableId='TodosList'>
        {(provided, snapshot) => (
            <div className={`todos ${snapshot.isDraggingOver? 'dragactive': ''}`} ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos__heading">
              해야 할 일
            </span>
            {todos.map((todo, index) => (
              <SingleTodo index={index} todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
            ))}
            {/* placeholder 추가하면 드래그 해도 드랍 존 크기 변경 x */}
            {provided.placeholder} 
          </div>
          )
        }
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {(provided, snapshot)=>(
          <div className={`todos remove ${snapshot.isDraggingOver? 'dragcomplete': ''}`} ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos__heading">
                끝난 일
              </span>
              {completedTodos.map((todo, index) => (
                <SingleTodo index={index} todo={todo} todos={completedTodos} key={todo.id} setTodos={setCompletedTodos} />
              ))}
              {provided.placeholder}
          </div>          
        )}
      </Droppable>
    </div>
  )
}

export default TodoList