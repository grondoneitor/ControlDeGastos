import { useContext } from "react"
import Form from "./componenets/Form"
import { BudgetContext } from "./context/budget-context"

function App() {

const context = useContext(BudgetContext)
console.log(context)
  return (
    <>
    <header className="bg-blue-800 py-8 max-h-72">
       <h1 className="uppercase text-white font-black text-center text-4xl">
        Planificador de gastos
       </h1>
    </header>
    
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
       <Form
        
       />
    </div>
    </>
  )
}

export default App
