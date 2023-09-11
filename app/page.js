"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submitHandle = (e) => {
    e.preventDefault()
    setmaintask([...maintask, { title, desc }])
    settitle("")
    setdesc("")
    console.log(maintask)
  }

  const deleteHandler = (i) => {
    let copyTask = [...maintask]
    copyTask.splice(i, 1)
    setmaintask(copyTask)
  }
  let renderTask = <h2 className='font-bold text-center'>No Task Available</h2>

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className='flex justify-between items-center mb-2'>
          <div className='flex justify-between mb-5  px-4 w-2/3'>
            <h4 className='text-2xl font-bold'>{t.title}</h4>
            <h5 className='text-lg font-semibold'>{t.desc}</h5>
          </div>
          <button onClick={() => {
            deleteHandler(i)
          }
          } className='bg-blue-500 px-4 py-2 text-white rounded font-bold hover:bg-red-600'>Delete</button>
        </li>
      );
    })
  }
  return (
    <>
      <div>
        <h1 className='font-semibold text-white text-3xl h-20 flex items-center justify-center bg-blue-500'>Todo List</h1>
      </div>
      <div className='flex justify-center items-center py-4'>
        <form onSubmit={submitHandle} className='flex justify-center flex-col bg-slate-400 h-60 w-1/3 rounded'>
          <input type='text' className='text-xl first-line:border-zinc-800 px-4 py-1 mx-5 my-2 border-4' placeholder='Enter title here'
            value={title} onChange={(e) => {
              settitle(e.target.value)
            }}
          />
          <input type='text' className='text-xl first-line:border-zinc-800 px-4 py-1 mx-5 my-2 border-4' placeholder='Enter Description here'
            value={desc} onChange={(e) => {
              setdesc(e.target.value)
            }} />
          <button className='bg-blue-500 px-4 py-3 mx-5 my-2 text-xl rounded text-white font-bold hover:bg-green-600'>Add Task</button>
        </form></div>

      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page