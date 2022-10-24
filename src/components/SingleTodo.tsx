import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './model'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import { Draggable } from 'react-beautiful-dnd';

interface Props{
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({index, todo, todos, setTodos}:Props) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  // 수정
  const handleEdit = () => {
    if(!edit && !todo.isDone){
      setEdit(!edit)
    }
  }

  // 수정 버전 제출
  const handleEditSubmit = (e:React.FormEvent, id:number) => {
    e.preventDefault();
    setTodos(todos.map(todo => (
      todo.id === id ? {...todo, todo:editTodo} : todo
    )))
    setEdit(false)
  }

  // 삭제
  const handleDelete = (id:number) => {
    setTodos(todos.filter(todo => (todo.id !== id)))
  }

  // 취소선 생성
  const handleDone = (id:number) => {
    setTodos(todos.map(todo => (
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo
    )))
  }

  // input 필드 활성화 되면, 필드를 클릭하지 않고도 자동으로 포커스를 주기 위해 작성
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    inputRef.current?.focus()
  },[edit])

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot)=>(
        <form 
          className={`todos__single ${snapshot.isDragging ? 'drag': ''}` }
          onSubmit={(e) => handleEditSubmit(e, todo.id)} 
          {...provided.draggableProps} 
          {...provided.dragHandleProps} 
          ref={provided.innerRef}
        >
        {edit ? (
          <input ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className='todos__single--text' />
        ): todo.isDone ? (
          <s className="todos__single--text">{todo.todo}</s>) : (
          <span className="todos__single--text">{todo.todo}</span>
        )}
        <div>
          <span className="icons" onClick={()=>handleEdit()}><AiFillEdit/></span>
          <span className="icons" onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
          <span className="icons" onClick={() => handleDone(todo.id)}><MdDone/></span>
        </div>
      </form>
      )}
    </Draggable>
  ) 
}

export default SingleTodo