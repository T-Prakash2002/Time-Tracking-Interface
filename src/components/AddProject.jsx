
import React, { useState } from 'react'

const AddProject = () => {

    const [data,setData]=useState('')

  return (
    <div>
        <form>
            <input
            type="text" 
            onChange={(e)=>setData(e.target.value)}
            placeholder="What are you working on?"
            />
        </form>
    </div>
  )
}

export default AddProject

