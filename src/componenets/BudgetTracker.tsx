import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../hook/useBudget"
import { useMemo } from "react"

export default function BudgetTracker() {

  const{state, dispatch} = useBudget()
  const total = useMemo(()=> state.expenses.reduce((acumulado,cur) => acumulado + cur.amount, 0),[state])
   


  return (

   <>
    <div 
    className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        <div 
        className="flex justify-center">
           <img src="/public/grafico.jpg" alt="grafico de gastos" />
        </div>
        <div
        className="flex flex-col justify-center items-center gap-8">
           <button
           type="button"
           className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
           onClick={()=>dispatch({type: 'remove-budget'})}
           >
              Resetear App
           </button>

            <AmountDisplay
              label="presupuesto"
              amount={state.budget} />
       
            <AmountDisplay
              label="disponible"
              amount={state.budget- total} />
   
            <AmountDisplay
              label="gastado"
              amount={total} />
     

        </div>
    </div>
   </>

)
}
