import React from 'react'
import Todo from './Todo'
export default function TodoList({theme}) {
  const todos = [
    { id: 1, text: "Complete React project", isCompleted: true },
    { id: 2, text: "Study for exams", isCompleted: false },
    { id: 3, text: "Go for a walk", isCompleted: true },
  ];
  const name = "Shivanshu";
  return (
    <div className={`p-5 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
    <h1 className='pb-5 text-center font-bold text-xl'>Todo</h1>
    {
      todos.map((ele)=>(
        <Todo  key={ele.id} text={ele.text} isCompleted={ele.isCompleted} theme={theme} />
      ))
    }
    </div>
  )
}
