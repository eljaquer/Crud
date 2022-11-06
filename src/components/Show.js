import React, { useState } from 'react'
import {AppContext, useAppContext} from '../context/appContext'
import EditModal from './EditModal'

const Show = () => {  
  const {students, deleteStudent} = useAppContext(AppContext)
  const [rowData, setRowData] = useState({})
  
  const [show, setShow] = useState(false)
  const handleShow = (student) => {
    setRowData(student)
    setShow(true)    
  }
  const handleClose = () => setShow(false)

  return (
    <>
      <table className='table table-striped mt-5'>        
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {students.map( (student) => (
          <tr key={student.id}>
            <td>{student.name}</td>  
            <td>{student.age}</td>  
            <td>
              <div className='btn-group'>
                <button onClick={ () => handleShow(student) } className='btn btn-outline-primary'><i className="fa-regular"></i>Editar</button>
                <button onClick={ ()=> deleteStudent(student.id) } className='btn btn-outline-danger'><i className="fa-solid"></i>Borrar</button>
              </div>
            </td>  
          </tr>      
          ))}

        </tbody>
      </table>

      <EditModal show={show} onClose={handleClose} rowData={rowData} />

    </>
  )
}
export default Show