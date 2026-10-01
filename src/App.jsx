import { useState } from 'react'


function App() {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title,detail})
    setTask(copyTask)
    
    console.log(copyTask)

    setTitle('')
    setDetail('')
  }

  const handleDelete = (idx) => {
    const copyTask=[...task]

    copyTask.splice(idx,1)

    setTask(copyTask)

    console.log(idx)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white' >

      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex p-10 flex-col lg:w-1/2 gap-4' 
      >
       
       <h1 className='text-3xl font-bold'>Add Notes</h1>

       {/* input fro heading */}
        <input  
        type="text" 
        placeholder='Enter Notes Heading' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        className='border-2 px-5 py-2 outline-none rounded w-full font-medium'
        />

      {/* input for detail */}
        <textarea
        type="text"
        placeholder='Enter Details'
        value={detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }}
        className='border-2 px-5 py-2 h-32 outline-none rounded w-full font-medium'
        />
        <button className='active:scale-98 bg-white text-black rounded p-2' >
          Add note
        </button>
       
        
      </form>
      <div className='flex lg:w-1/2 flex-col p-8 gap-5 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex gap-5 flex-wrap overflow-auto'>
         {task.map((elem,idx)=>{
          return <div key={idx} className='flex flex-col justify-between bg-[url("https://www.nicepng.com/png/full/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png")] bg-position-[40%_center] bg-cover h-52 w-40 rounded-2xl text-black p-4' >
            <div className='overflow-auto scrollbar-hide'>
              <h3 className='leading-tight text-medium font-bold mt-5' >{elem.title}</h3>
            <p className='mt-1 leading-tight text-sm text-gray-500 ' >{elem.detail}</p>
            </div>
            <button 
            onClick={() => {
              handleDelete(idx)
            }}
            className='w-full bg-red-600 font-bold text-white text-sm p-1 rounded active:scale-95 cursor-pointer' >
              Delete
            </button>
            </div>
         })}
          
          
        </div>
      </div>
    </div>
  )
}

export default App
