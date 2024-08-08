import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../hook/useBudget"
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import  'react-circular-progressbar/dist/styles.css'

export default function BudgetTracker() {

  const{state, dispatch,total,disponible} = useBudget()

  const percentaje = +((total / state.budget) * 100).toFixed(2)
  const variandoColores = ()=>{
    if(percentaje < 50){
      return'#1e40af'
    }else if(percentaje >=50 && percentaje <= 75){
       return '#ea6f3f'
    }else if(percentaje > 75 && percentaje < 100){
      return '#DC2626'
    }else{
        return '#ac0909'
    }
  }
  return (

   <>
    <div 
    className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        <div 
        className="flex justify-center">
          <CircularProgressbar
           value={percentaje}
           styles={buildStyles({pathColor: variandoColores(),
                                trailColor:'#F5F5F5',
                                textSize:10,
                                textColor:'#1e40af'
           })}
           text={`${percentaje}% Gastado`}
          />
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
              
              amount={disponible} />
   
            <AmountDisplay
              label="gastado"
              amount={total} />
     

        </div>
    </div>
   </>

)
}
