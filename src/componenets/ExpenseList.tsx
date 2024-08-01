import { useMemo } from "react"
import { useBudget } from "../hook/useBudget"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {
  const{state} = useBudget()

  //  const IsEmpty = state.expenses.length === 0
   const IsEmpty = useMemo(()=>state.expenses.length === 0 ,[state.expenses])
  return (
  <>
      <div className="mt-10 ">
          {IsEmpty ?
           <p className="text-gray-600 text-2xl font-bold">Todavia no hay gastos registrados</p>:
            <> 
               <p className="text-gray-600 text-2xl font-bold">Listado de gastos</p>
                {state.expenses.map(expense=>(
                  <ExpenseDetail
                    key={expense.id}
                    expense={expense}
                  />
                ))}
            </>
          }
      </div>
  </>
  )
}
