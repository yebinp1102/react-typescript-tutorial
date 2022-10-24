export interface Todo{
  id: number;
  todo: string;
  isDone: boolean;
}

// type Actions =  {type:'add',payload:string} | {type:'remove',payload:number} | {type:'done',payload:number}

// import { useReducer } from "react";

// const todoReducer = (state:Todo[], action:Actions) => {
//   // state는 todos의 배열
//   // action은 삭제, 수정, 취소선
//   switch(action.type){
//     case 'add':
//       return [...state, {id: Date.now(), todo: action.payload, isDone: false}]
//     case 'remove':
//       return state.filter(todo => todo.id !== action.payload)
//     case 'done':
//       return state.map(todo => todo.id !== action.payload ? {...todo, isDone: !todo.isDone} : )
//   }
// }

// const reducerExample = () => {
//     const [state, dispatch] = useReducer(todoReducer, [])

// }