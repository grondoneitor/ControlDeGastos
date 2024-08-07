import { categories } from "../data/categories";
import DatePicker from 'react-date-picker'
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import { useEffect, useState } from "react";
import { DraftExpense, Value } from "../types";
import { useBudget } from "../hook/useBudget";
import type { Expense } from "../types";

export default function ExpenseForm() {


   const [expense ,setExpense] = useState<DraftExpense>({
    amount:0,
    expenseName:'',
    category:'',
    date: new Date})

    const [error, setError] = useState<{ [key: string]: string }>({})
    
    const {state,dispatch} = useBudget()

   const  HandleOnChange = (value :Value )=>{
      setExpense({
        ...expense, 
        date:value})
   }


   const HanldeOnChangeString = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>)=>{
     const {name, value} = e.target

     const IsAmount = ['amount'].includes(name)

     setExpense({
        ...expense,
        [name]: IsAmount? +value : value
     })



     setError(error =>({
        ...error,
        [name]: '',
     }))
   }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
     
     let valid = true
     const newError :{[key: string]: string} ={}

    if(!expense.expenseName.trim()){
       newError.expenseName = 'El nombre del gasto es obligatorio'
       valid = false
    }
     if(expense.amount <= 0){
        newError.amount = 'El monto debe ser mayor a 0'
        valid = false
    }
    if(!expense.category){
         newError.category = 'La categoria del gasto es obligatoria'
         valid = false        
    }
    if(!expense.date){
        newError.date = 'La fecha del gasto es obligatoria' 
        valid = false
    }

    if(!valid){
        setError(newError)
    }else{
        setError({})
       if(state.editingId){
         dispatch({type:'update-expense',payload:{expense:{id:state.editingId, ...expense}}})
       }else{
        dispatch({type:'add-expense', payload:{expense}})
       }
    }
      
  }
  
useEffect(()=>{
   if(state.editingId){
    const porId = state.expenses.filter((exp:Expense) => exp.id === state.editingId)[0]
    setExpense(porId)
   } 
    
},[state.editingId])

   return (
    <form action=""
    className="space-y-5 "
    onSubmit={handleSubmit}
     > 
        <legend
        className="uppercase text-center font-black border-b-4 text-2xl border-blue-500 py-2">
           {state.editingId ? "Editar Gasto" :"Nuevo Gasto"}
        </legend>

 
        <div 
        className="flex flex-col gap-2">
            <label 
            className="text-xl"
            htmlFor="expenseName">
               Nombe gasto:
            </label>

             <input 
             type="text" 
             id="expenseName"
             placeholder="Añade el nombe del gasto"
             className="p-2 bg-slate-100"
             name="expenseName"
             value={ expense.expenseName} 
             onChange={HanldeOnChangeString}
             
             />
             <p>
             {error.expenseName && <h1 className="text-red-500 font-black text-center"> {error.expenseName}</h1>  }

             </p>
             
             
             
        </div>

        <div 
        className="flex flex-col gap-2">
            <label 
            className="text-xl"
            htmlFor="amount">
               Cantidad:
            </label>

             <input 
             type="number" 
             id="amount"
             placeholder="Añade la cantidad del gasto"
             className="p-2 bg-slate-100"
             name="amount"
             value={expense.amount}
             onChange={HanldeOnChangeString} />
            
            <p>
                 {error.amount && <h1 className="text-red-500 font-black text-center"> {error.amount}</h1>  }
            </p>
        </div>

        <div 
        className="flex flex-col gap-2">
            <label 
            className="text-xl"
            htmlFor="category">
               Categoria:
            </label>

             <select 
             id="category"
             className="p-2 bg-slate-100"
             name="category"
             value={expense.category}
             onChange={HanldeOnChangeString}>

                  <option value="">--Seleccione--</option>
                   {categories.map(cat => (
                    <option 
                    key={cat.id}
                    value={cat.id}>
                        {cat.name}
                    </option>
                   ))}
             </select>
            <p>
                {error.category && <h1 className="text-red-500 font-black text-center"> {error.category}</h1>  }
            </p>
        </div>
          
        <div 
        className="flex flex-col gap-2">
            <label 
            className="text-xl"
            htmlFor="expenseDate">
               Fecha gasto:
            </label>

         <DatePicker
         className='bg-slate-100 p-2 border-0'
         value={expense.date}
         onChange={HandleOnChange}
         />
        <p>
            {error.date && <h1 className="text-red-500 font-black text-center"> {error.date}</h1>  }
        </p>
        </div>

          <input id="expenseName" type="submit"
          className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
          value= {state.editingId ? "Editar Gasto" :"Registrar Gasto"} />

    </form>
  )
}
