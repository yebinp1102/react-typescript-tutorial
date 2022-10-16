import React from 'react'
import './styles.css'

const InputFeild = () => {
  return (
    <form className='input'>
      <input type='input' placeholder='해야 할 일을 입력하세요' className='input__box' />
      <button className='input__submit' type='submit'>추가</button>
    </form>
  )
}

export default InputFeild  