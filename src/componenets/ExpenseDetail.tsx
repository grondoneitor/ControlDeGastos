import { Expense } from '../types'
import {
  LeadingActions,
  SwipeAction,
  SwipeableList,
  SwipeableListItem,
  TrailingActions
} from 'react-swipeable-list'
import { formatDate } from '../helpers'
import AmountDisplay from './AmountDisplay'
import { useMemo } from 'react'
import { categories } from '../data/categories'
import 'react-swipeable-list/dist/style.css'

type ExpenseDetailProp = {
    expense: Expense
}

export default function ExpenseDetail({expense}:ExpenseDetailProp) {

const categoria = useMemo(()=>  categories.filter((cat)=> cat.id === expense.category)[0] ,[expense])

const {id,name,icon} = categoria

  return (
  <SwipeableList>
    <SwipeableListItem
      maxSwipe={30}
      >
        <div className='bg-slate-100 shadow-lg p-10 w-full border-b border-gray-200 flex items-center gap-5 my-5'>
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
