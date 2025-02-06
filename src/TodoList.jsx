import React from 'react'
import Todo from './Todo'
export default function TodoList() {
  const todos = [
    { id: 1, text: "Complete React project", isCompleted: true },
    { id: 2, text: "Study for exams", isCompleted: false },
    { id: 3, text: "Go for a walk", isCompleted: true },
  ];
  const name = "Shivanshu";
  return (
    <>
    <h1>Todo</h1>
    {
      todos.map((ele)=>(
        <Todo  key={ele.id} text={ele.text} isCompleted={ele.isCompleted} />
      ))
    }
    </>
  )
}
