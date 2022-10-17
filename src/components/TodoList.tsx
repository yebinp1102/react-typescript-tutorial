import React from 'react'
import { Todo } from './model'
import SingleTodo from './SingleTodo';
import './styles.css'

interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

// todo를 제거, 수정, 완료 표시 작업을 위한 함수형 컴포넌트
const TodoList:React.FC<Props> = ({todos, setTodos}:Props) => {
  return (
    <div className='todos'>
      {todos.map(todo => (
        // todos까지 필요한 이유 : 제거할 떄 todos에서 해당 id의 todo를 제거하기 위해서 
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  )
}

export default TodoList