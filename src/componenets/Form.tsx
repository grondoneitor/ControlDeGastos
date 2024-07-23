import { useState, useMemo } from "react"

export default function Form() {

    const [budget, setBudget] = useState(0)
    
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
       setBudget(+e.target.value )
    }

    const IsValid = useMemo(()=>{
     return isNaN(budget) || budget <= 0
    },[budget])

  return (
    <form action=""
    className='space-y-5'>
          
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
