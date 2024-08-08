import { v4 as uuidV4} from 'uuid'
import { DraftExpense,Expense } from "../types"

export type BudgetActions= 
{type:'add-budget', payload:{budget:number}}|
{type: 'show-modal'}|
{type: 'close-modal'}|
{type: 'add-expense', payload:{expense: DraftExpense}}|
{type: 'remove-expense', payload:{id:Expense['id']}}|
{type: 'editing-expense', payload:{id:Expense['id']}}|
{type : 'update-expense', payload:{expense:Expense}}|
{type: 'remove-budget'}


export type BudgetState = {
    budget:number
    modal: boolean
    expenses: Expense[]
    editingId: Expense['id']
}

const InitialBudget =() : number=>
{
    const localStorageBudget = localStorage.getItem('budget')
    return localStorageBudget ? +localStorageBudget : 0

}

const InitialBudgetExpenses = (): Expense[]=>{
    const localStorageExpenses = localStorage.getItem('expenses')
    return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
}

export const initialState : BudgetState = {
    budget:InitialBudget(),
    modal:false,
    expenses: InitialBudgetExpenses(),
    editingId: ''
}

const createExpense =(draftExpnse:DraftExpense) : Expense=>{

    return{
        ...draftExpnse,
        id:uuidV4()
    }

}

export const budgetReducer= (
    state: BudgetState = initialState,
    action: BudgetActions

)=>{
   if(action.type === 'add-budget'){
   
    return{
        ...state,
        budget:action.payload.budget
    }
   }


  if(action.type == 'show-modal'){
    return{
        ...state,
        modal:true
    }
  }

  if(action.type == 'close-modal'){
    return{
        ...state,
        modal:false,
        editingId:''
        
    }
  }

  if(action.type === 'add-expense'){
    
    const expense = createExpense(action.payload.expense)

    return{
        ...state,
        expenses: [...state.expenses,expense ],
        modal:false
    }
  }

  if(action.type == 'remove-expense'){

      const nuevoState = state.expenses.filter((exp)=>exp.id !== action.payload.id)
       return{
        ...state,
        expenses: nuevoState
       }
  }

  if(action.type === 'editing-expense'){
    return {
        ...state,
        editingId : action.payload.id,
        modal: true
     }
  } 

 if(action.type === 'update-expense'){


    return{
        ...state,
        expenses: state.expenses.map(exp => exp.id === action.payload.expense.id ? action.payload.expense: exp),
        modal:false

    }
 }

  if(action.type=== 'remove-budget'){
    return{
         budget:0,
        modal:false,
        expenses: [],
        editingId: ''
    }
  }
   
   
    return state
} 