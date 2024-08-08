import { createContext,Dispatch,useMemo,useReducer } from "react"
import { ReactNode } from "react"
import { budgetReducer, initialState,BudgetActions,BudgetState } from "../reducers/budget-reducer"


type BudgetContextProps= {
    state:BudgetState
    dispatch:Dispatch<BudgetActions>
    total: number,
    disponible:number
}


export const BudgetContext = createContext<BudgetContextProps>(null!)

type ProviderProps = {
    children: ReactNode
}

export const BudgetProvider = ({children}:ProviderProps)=>{
  
  const [state,dispatch] = useReducer(budgetReducer,initialState)
  const total = useMemo(()=> state.expenses.reduce((acumulado,cur) => acumulado + cur.amount, 0),[state])
  const disponible = state.budget - total
    return(
        <BudgetContext.Provider 
        value={{state,dispatch,total,disponible}}>
            {children}
        </BudgetContext.Provider>

    )
}