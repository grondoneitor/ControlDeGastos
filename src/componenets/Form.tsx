import { useState, useMemo } from "react"
import { useBudget } from "../hook/useBudget"

export default function Form() {

    const [budget, setBudget] = useState(0)
    const {dispatch} = useBudget()    
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
       setBudget(+e.target.value )
    }

    const IsValid = useMemo(()=>{
     return isNaN(budget) || budget <= 0
    },[budget])

    const handleSubmit =  (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      
      dispatch({type: 'add-budget', payload:{budget}})
    }
    

  return (
   
    <form 
    className='space-y-5 ' 
    onSubmit={handleSubmit}>
          
        <div className='flex flex-col space-y-5'>
           <label htmlFor="budget"
            className='text-4xl font-bold text-center text-blue-600'>
             Definir presupuesto
            </label>
             <input 
              id='budget'
              name='budget'
            //   value={budget}
              type="number"
              className='w-full bg-white border border-gray-200 p-2'
              placeholder='Defini tu presupuesto'
              onChange={handleChange}
              />

        </div>

        <input
         type="submit"
         value="Definir presupuesto"
         className='bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white rounded font-black uppercase disabled:opacity-10'
         disabled={IsValid}
         />
  


     
    </form>

)}
