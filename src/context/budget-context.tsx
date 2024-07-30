import { createContext,Dispatch,useReducer } from "react"
import { ReactNode } from "react"
import { budgetReducer, initialState,BudgetActions,BudgetState } from "../reducers/budget-reducer"


type BudgetContextProps= {
    state:BudgetState
    dispacth:Dispatch<BudgetActions>
}


export const BudgetContext = createContext<BudgetContextProps>(null!)

type ProviderProps = {
    children: ReactNode
}

export const BudgetProvider = ({children}:ProviderProps)=>{
  
  const [state,dispacth] = useReducer(budgetReducer,initialState)

    return(
        <BudgetContext.Provider 
        value={{state,dispacth}}>
            {children}
        </BudgetContext.Provider>

    )
}