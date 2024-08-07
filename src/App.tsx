import { useEffect, useMemo } from "react"
import Form from "./componenets/Form"
import { useBudget } from "./hook/useBudget"
import BudgetTracker from "./componenets/BudgetTracker"
import ExpenseModal from "./componenets/ExpenseModal"
import ExpenseList from "./componenets/ExpenseList"
function App() {

  const {state} = useBudget()

  const IsValidState = useMemo(()=> state.budget > 0 ,[state.budget])
   console.log(IsValidState)

useEffect(()=>{
    
  localStorage.setItem('budget', state.budget.toString())
  localStorage.setItem('expenses', JSON.stringify(state.expenses))
},
[state])
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

    {IsValidState && (
       
        <main className="max-w-3xl mx-auto py-10">
          <ExpenseList/>
          <ExpenseModal/>
        </main>

       
       
       )}
   
    </>
  )
}

export default App
