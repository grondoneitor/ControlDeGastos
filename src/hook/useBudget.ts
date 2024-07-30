
import { useContext } from "react"
import { BudgetContext } from "../context/budget-context"

export const useBudget= ()=>{
  
    const context = useContext(BudgetContext)
if(!context) {
    throw new Error('useBudget hook must be used within a BudgetProvider')
}

    return context
}