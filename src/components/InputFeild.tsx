import React, { useRef } from 'react'
import './styles.css'

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent<EventTarget>) => void;
}

const InputFeild:React.FC<Props> = ({todo, setTodo, handleAdd}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur()
      }}>
      <input
        ref={inputRef}
        type='input' 
        placeholder='일정을 추가하세요' 
        className='input__box'
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button className='input__submit' type='submit'>추가</button>
    </form>
  )
}

export default InputFeild  