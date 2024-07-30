import { useMemo } from "react"
import Form from "./componenets/Form"
import { useBudget } from "./hook/useBudget"
import BudgetTracker from "./componenets/BudgetTracker"
function App() {

  const {state} = useBudget()

  const IsValidState = useMemo(()=> state.budget > 0 ,[state.budget])
   console.log(IsValidState)


  return (
    <>
    <header className="bg-blue-800 py-8 max-h-72">
       <h1 className="uppercase text-white font-black text-center text-4xl">
        Planificador de gastos
       </h1>
    </header>
    
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
          {IsValidState ? <BudgetTracker/> : <Form/>}
    </div>
    </>
  )
}

export default App
