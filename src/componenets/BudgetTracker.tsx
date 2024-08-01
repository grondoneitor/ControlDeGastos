import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../hook/useBudget"
export default function BudgetTracker() {

  const{state} = useBudget()
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
           className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg">
              Resetear App
           </button>

            <AmountDisplay
              label="presupuesto"
              amount={state.budget} />
       
            <AmountDisplay
              label="disponible"
              amount={200} />
   
            <AmountDisplay
              label="gastado"
              amount={100} />
     

        </div>
    </div>
   </>

)
}
