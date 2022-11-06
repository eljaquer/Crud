import { createContext, useContext, useReducer } from "react";
import { CREATE, DELETE, UPDATE } from "./actions";
import reducer from "./reducer";

export const AppContext = createContext()

const initialState = {
    students: [
       
    ]
}
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
 
    const createStudent = (student) => dispatch( {type:CREATE, payload: student} )  
    const updateStudent = (student) => dispatch( {type:UPDATE, payload: student} )
    const deleteStudent = (id) => dispatch( {type:DELETE, payload: id} )
    return (        
        <AppContext.Provider value={{
            students: state.students,
            createStudent,
            updateStudent,
            deleteStudent,
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => {
    return useContext(AppContext)
}