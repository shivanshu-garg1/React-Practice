
export default function Todo({text,isCompleted,theme}) {
  return (
    <>
       <div className={`p-4 border rounded-lg mb-2 
      ${isCompleted ? "bg-green-200" : "bg-red-200"} 
      ${theme === "dark" ? "text-white" : "text-black"}
    `}>
        <span className={isCompleted ? "line-through text-grey-500" : "text-black"}>
          {text}
        </span>
        <span>{isCompleted ? "✅" : "❌"}</span>
      </div>
    </>
  )
}
