import { Expense } from '../types'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list';
import { formatDate } from '../helpers'
import AmountDisplay from './AmountDisplay'
import { useMemo } from 'react'
import { categories } from '../data/categories'
import 'react-swipeable-list/dist/styles.css';
import { useBudget } from '../hook/useBudget';
type ExpenseDetailProp = {
    expense: Expense
}

export default function ExpenseDetail({expense}:ExpenseDetailProp) {

const categoria = useMemo(()=>  categories.filter((cat)=> cat.id === expense.category)[0] ,[expense])

const {name,icon} = categoria
const {dispatch} = useBudget()

const leadingActions = () => (
  <LeadingActions>
    <SwipeAction onClick={() =>dispatch({type: 'editing-expense',payload:{id: expense.id}})}>
      Actualizar
    </SwipeAction>
  </LeadingActions>
);
const trailingActions = () => (
  <TrailingActions>
    <SwipeAction
      destructive={true}
      onClick={() =>dispatch({type:'remove-expense', payload:{id:expense.id}})}
    >
      Eliminar
    </SwipeAction>
  </TrailingActions>
);



  return (
   <SwipeableList       
    >
     <SwipeableListItem
       maxSwipe={1}
       className='my-3'
        leadingActions={leadingActions()}
         trailingActions={trailingActions()}
       >
        <div className='bg-white shadow-lg rounded-lg p-10 w-full h-full border-b border-gray-200 flex items-center gap-3 '>
          <div className=''>
              <img src={`../../public/icono_${icon}.svg`} alt="" 
                   className='w-20'
                />
          </div>

          <div className='flex-1 space-y-2'>
               <p className='text-sm font-bold uppercase text-slate-500'>
                  {name}
                </p>
               <p className='font-bold text-black'>
                  {expense.expenseName}
               </p>

               <p className='text-slate-600 text-sm font-semibold'> {formatDate(expense.date!.toString())}</p>
          </div>

          <AmountDisplay
              amount={expense.amount}
          />
        </div>
     </SwipeableListItem>
   </SwipeableList>
  )
}
