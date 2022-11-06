import React, { useState } from 'react'
import { AppContext, useAppContext } from '../context/appContext'

const Create = () => {
  const {createStudent} = useAppContext(AppContext)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createStudent({ id: Date.now(), name, age })
    setName('')
    setAge('')
  }

  return (    
    <form onSubmit={handleSubmit}>
        <div className="form-floating mt-5">
            <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text"
                className="form-control"
                autoFocus
                required 
                placeholder='Name'                                 
            />
            <label>Nombre</label>
        </div>

        <div className="form-floating mt-2">
            <input 
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                type="number"
                className="form-control"
                required
                placeholder='Name'
            />
            <label>Edad</label>
        </div>

        <div className="mt-3">        
            <button
            type="submit"
            className="btn btn-outline-primary"
            >
            <i className="fa-1x">Agregar</i>
            </button>
        </div>
    </form>
  )
}

export default Create