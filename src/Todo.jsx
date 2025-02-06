
export default function Todo({text,isCompleted}) {
  return (
    <>
      <div>
        <span className={isCompleted ? "line-through text-gray-600" : "text-black"}>
          {text}
        </span>
        <span>{isCompleted ? "✅" : "❌"}</span>
      </div>
    </>
  )
}
