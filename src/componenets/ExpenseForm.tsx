import { categories } from "../data/categories";

export default function ExpenseForm() {
  return (
    <form action=""
    className="space-y-5"> 
        <legend
        className="uppercase text-center font-black border-b-4 text-2xl border-blue-500 py-2">
            Nuevo Gasto
        </legend>


        <div 
        className="flex flex-col gap-2">
            <label 
            className="text-xl"
            htmlFor="expenseName">
               Nombe gasto:
            </label>

             <input 
             type="text" 
             id="expenseName"
             placeholder="Añade el nombe del gasto"
             className="p-2 bg-slate-100"
             name="expenseName" />
        </div>

        <div 
        className="flex flex-col gap-2">
            <label 
            className="text-xl"
            htmlFor="amount">
               Cantidad:
            </label>

             <input 
             type="number" 
             id="amount"
             placeholder="Añade la cantidad del gasto"
             className="p-2 bg-slate-100"
             name="amount" />
        </div>

        <div 
        className="flex flex-col gap-2">
            <label 
            className="text-xl"
            htmlFor="category">
               Categoria:
            </label>

             <select 
             id="category"
             className="p-2 bg-slate-100"
             name="category">

                  <option value="">--Seleccione--</option>
                   {categories.map(cat => (
                    <option 
                    key={cat.id}
                    value={cat.id}>
                        {cat.name}
                    </option>
                   ))}
             </select>
        </div>
          
          <input type="submit"
          className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
          value={"Registrar Gasto"} />

    </form>
  )
}
